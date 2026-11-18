"""Hangügynök-labor (voice-lab), optional local helper.

The demo page (app.htm) is static and runs from GitHub Pages or from this helper. This helper does two things:
  1. serves the materials/ folder on http://127.0.0.1:<port>/ (so the page works offline-from-repo), and
  2. implements the credential broker HTTP API (see BROKER-API.md) with the keys of THIS machine, so a page
     (the local copy or the hosted one, if its origin is allowed) gets only short-lived credentials.

Run:   python server.py [--port 8765]          then open http://127.0.0.1:8765/
Test:  python server.py --selftest [--offline]  (offline: no network; otherwise mints each credential once and
                                                 prints only status/shape, never a value)

Keys come only from the process environment or an env file: VOICE_LAB_ENV=<path>, default .env.local next to this
file (git-ignored; template: .env.example). Python standard library only.
"""
import base64, hmac, json, os, re, socket, ssl, sys, time, urllib.error, urllib.parse, urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

sys.dont_write_bytecode = True
HERE = os.path.dirname(os.path.abspath(__file__))              # materials/demos/voice-lab
MATERIALS = os.path.abspath(os.path.join(HERE, "..", ".."))     # materials/  (served as the web root)
APP_PATH = "/demos/voice-lab/app.htm"
API_VERSION = 1
ENV_FILE = os.environ.get("VOICE_LAB_ENV") or os.path.join(HERE, ".env.local")
MAX_INSTRUCTIONS = 60000
MAX_JSON_BODY = 2_000_000
MAX_AUDIO_BODY = 80_000_000

# ------------------------------------------------------------------ catalog (keep in sync with js/catalog.js)
REALTIME_MODELS = ["gpt-realtime-2.1", "gpt-realtime-2.1-mini", "gpt-realtime", "gpt-realtime-mini"]
REALTIME_VOICES = ["marin", "cedar", "alloy", "ash", "ballad", "coral", "echo", "sage", "shimmer", "verse"]
LIVE_MODEL = "gpt-live-1"
LIVE_VOICES = ["marin", "quartz", "ripple", "vesper", "willow", "stone", "gleam", "meridian", "bossa", "tempo",
               "beacon", "delta", "cinder", "nuri", "juni", "flitz", "brise", "sillage", "nira", "harema", "shida",
               "noeul"]
TRANSCRIBE_MODEL = "gpt-4o-transcribe"
GEMINI_MODELS = ["gemini-3.8-live", "gemini-3.1-flash-live-preview"]
GEMINI_VOICES = ["Kore", "Aoede", "Leda", "Zephyr", "Sulafat", "Despina", "Achird", "Vindemiatrix", "Callirrhoe",
                 "Autonoe", "Erinome", "Laomedeia", "Achernar", "Gacrux", "Pulcherrima", "Puck", "Charon", "Orus",
                 "Fenrir", "Enceladus", "Iapetus", "Umbriel", "Algieba", "Algenib", "Rasalgethi", "Alnilam", "Schedar",
                 "Zubenelgenubi", "Sadachbia", "Sadaltager"]
GEMINI_API = "https://generativelanguage.googleapis.com/v1beta"
GEMINI_WS = ("wss://generativelanguage.googleapis.com/ws/"
             "google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained")
GEMINI_LANG = "RESPOND IN HUNGARIAN. YOU MUST RESPOND UNMISTAKABLY IN HUNGARIAN.\n\n"
DEFAULT_TEXT_MODELS = {"openai": "gpt-5.4-mini", "google": "gemini-3.8-flash"}

_ENV = None


def env(name):
    """Value from the process environment or the env file; None if missing. Never printed."""
    global _ENV
    if _ENV is None:
        _ENV = {}
        if os.path.exists(ENV_FILE):
            with open(ENV_FILE, encoding="utf-8-sig") as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        k, v = line.split("=", 1)
                        _ENV[k.strip()] = v.strip().strip('"').strip("'")
    return os.environ.get(name) or _ENV.get(name) or None


def google_key():
    return env("GEMINI_API_KEY") or env("GOOGLE_API_KEY")


def el_agents():
    return {"cascade": env("EL_AGENT_ID_CASCADE"), "realtime": env("EL_AGENT_ID_REALTIME")}


def text_models():
    return {"openai": env("VOICE_LAB_TEXT_MODEL_OPENAI") or DEFAULT_TEXT_MODELS["openai"],
            "google": env("VOICE_LAB_TEXT_MODEL_GOOGLE") or DEFAULT_TEXT_MODELS["google"]}


def port():
    if "--port" in sys.argv:
        return int(sys.argv[sys.argv.index("--port") + 1])
    return int(env("VOICE_LAB_PORT") or 8765)


def data_dir():
    return env("VOICE_LAB_DATA") or os.path.join(HERE, ".data")


def secrets():
    return [v for v in (env("OPENAI_API_KEY"), env("ELEVENLABS_API_KEY"), google_key(), env("VOICE_LAB_ACCESS_CODE"))
            if v]


def scrub(s):
    s = str(s)
    for v in secrets():
        s = s.replace(v, "***")
    s = re.sub(r"(ek_|sk-|AIza)[A-Za-z0-9_\-]{8,}", r"\1***", s)
    s = re.sub(r"(access_token=|token=)[^&\s\"']+", r"\1***", s)
    return re.sub(r"(auth_tokens(?:/|%2F|%2f))[^&\s\"']+", r"\1***", s)


class ApiError(Exception):
    def __init__(self, status, code, message):
        super().__init__(message)
        self.status, self.code, self.message = status, code, message


def http(method, url, headers, body=None, raw=False, timeout=60):
    """(status, parsed-json-or-text). body: dict -> JSON, str -> sent as-is."""
    data = None
    if body is not None:
        data = body.encode() if isinstance(body, str) else json.dumps(body).encode()
    req = urllib.request.Request(url, method=method, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            txt, status = r.read().decode("utf-8", "replace"), r.status
    except urllib.error.HTTPError as e:
        txt, status = e.read().decode("utf-8", "replace"), e.code
    except (urllib.error.URLError, OSError) as e:
        return 599, {"error": {"message": scrub(e)}}
    if raw:
        return status, txt
    try:
        return status, json.loads(txt) if txt else {}
    except ValueError:
        return status, {"error": {"message": scrub(txt[:500])}}


def err_of(resp):
    e = resp.get("error") if isinstance(resp, dict) else None
    if isinstance(e, dict):
        return scrub("%s %s" % (e.get("code") or e.get("status") or e.get("type") or "", e.get("message") or ""))[:400]
    d = resp.get("detail") if isinstance(resp, dict) else None
    return scrub(json.dumps(d, ensure_ascii=False) if d else resp)[:400]


def need(cond, code, message, status=400):
    if not cond:
        raise ApiError(status, code, message)


def instructions_of(b):
    ins = b.get("instructions")
    need(isinstance(ins, str) and ins.strip(), "bad_request", "hiányzik az instructions mező")
    need(len(ins) <= MAX_INSTRUCTIONS, "too_large", "az instructions legfeljebb %d karakter lehet" % MAX_INSTRUCTIONS)
    return ins


# ------------------------------------------------------------------ broker operations (BROKER-API.md)

def op_health():
    ag = el_agents()
    tm = text_models()
    has_oa, has_g = bool(env("OPENAI_API_KEY")), bool(google_key())
    return {"service": "voice-lab-broker", "api": API_VERSION, "kind": "local-helper",
            "auth_required": bool(env("VOICE_LAB_ACCESS_CODE")),
            "providers": {"openai": has_oa, "google": has_g, "elevenlabs": bool(env("ELEVENLABS_API_KEY"))},
            "elevenlabs_agents": {k: bool(v) for k, v in ag.items()},
            "text": {"openai": tm["openai"] if has_oa else None, "google": tm["google"] if has_g else None,
                     "model_override": not env("VOICE_LAB_TEXT_MODEL_LOCK")},
            "limits": {"max_instructions_chars": MAX_INSTRUCTIONS},
            "local_archive": True}


def op_realtime_secret(b):
    need(env("OPENAI_API_KEY"), "provider_unavailable", "nincs OpenAI API-kulcs a segédnél", 503)
    model, voice = b.get("model"), b.get("voice")
    need(model in REALTIME_MODELS and voice in REALTIME_VOICES, "bad_request", "ismeretlen modell vagy hang")
    audio = {"output": {"voice": voice},
             "input": {"turn_detection": {"type": "server_vad", "create_response": True, "interrupt_response": True}}}
    if b.get("transcribe", True):
        audio["input"]["transcription"] = {"model": TRANSCRIBE_MODEL, "language": "hu"}
    body = {"expires_after": {"anchor": "created_at", "seconds": 60},
            "session": {"type": "realtime", "model": model, "instructions": instructions_of(b),
                        "output_modalities": ["audio"], "audio": audio}}
    st, resp = http("POST", "https://api.openai.com/v1/realtime/client_secrets",
                    {"Authorization": "Bearer " + env("OPENAI_API_KEY"), "Content-Type": "application/json"}, body)
    if st == 200 and isinstance(resp, dict) and resp.get("value"):
        return {"value": resp["value"], "expires_at": resp.get("expires_at"), "model": model, "voice": voice}
    raise ApiError(502, "upstream_error", "OpenAI client_secrets HTTP %s: %s" % (st, err_of(resp)))


def op_live_session(b):
    need(env("OPENAI_API_KEY"), "provider_unavailable", "nincs OpenAI API-kulcs a segédnél", 503)
    voice, sdp = b.get("voice"), b.get("sdp")
    need(voice in LIVE_VOICES, "bad_request", "ismeretlen hang")
    need(isinstance(sdp, str) and sdp.startswith("v=0"), "bad_request", "hiányzó vagy hibás SDP")
    body = {"session": {"model": LIVE_MODEL, "instructions": instructions_of(b), "audio": {"output": {"voice": voice}}},
            "transport": {"type": "webrtc", "sdp": sdp}}
    st, resp = http("POST", "https://api.openai.com/v1/live/sessions",
                    {"Authorization": "Bearer " + env("OPENAI_API_KEY"), "Content-Type": "application/json"}, body)
    tr = resp.get("transport") if isinstance(resp, dict) else None
    if st in (200, 201) and isinstance(tr, dict) and tr.get("sdp"):
        return {"session_id": (resp.get("session") or {}).get("id"), "sdp": tr["sdp"]}
    raise ApiError(502, "upstream_error", "OpenAI live/sessions HTTP %s: %s" % (st, err_of(resp)))


def gemini_setup(model, voice, instructions, transcribe=True):
    """BidiGenerateContentSetup; the same shape is built in js/providers.js for the own-key mode."""
    setup = {
        "model": "models/" + model,
        "generationConfig": {"responseModalities": ["AUDIO"],
                             "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": voice}}}},
        "systemInstruction": {"parts": [{"text": GEMINI_LANG + instructions}]},
        "realtimeInputConfig": {
            "automaticActivityDetection": {"disabled": False, "silenceDurationMs": 500, "prefixPaddingMs": 20},
            "activityHandling": "START_OF_ACTIVITY_INTERRUPTS"},
        "outputAudioTranscription": {"languageCodes": ["hu"]},
    }
    if transcribe:
        setup["inputAudioTranscription"] = {"languageCodes": ["hu"]}
    return setup


def op_gemini_token(b):
    need(google_key(), "provider_unavailable", "nincs Google (Gemini) API-kulcs a segédnél", 503)
    model, voice = b.get("model"), b.get("voice")
    need(model in GEMINI_MODELS and voice in GEMINI_VOICES, "bad_request", "ismeretlen modell vagy hang")
    setup = gemini_setup(model, voice, instructions_of(b), bool(b.get("transcribe", True)))
    now = time.time()
    iso = lambda t: time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime(t))
    body = {"uses": 1, "expireTime": iso(now + 20 * 60), "newSessionExpireTime": iso(now + 60),
            "bidiGenerateContentSetup": setup}
    st, resp = http("POST", GEMINI_API + "/auth_tokens",
                    {"x-goog-api-key": google_key(), "Content-Type": "application/json"}, body)
    if st == 200 and isinstance(resp, dict) and resp.get("name"):
        return {"token": resp["name"], "expires_at": resp.get("expireTime"), "ws_url": GEMINI_WS, "setup": setup}
    raise ApiError(502, "upstream_error", "Gemini auth_tokens HTTP %s: %s" % (st, err_of(resp)))


def op_eleven_signed_url(b):
    need(env("ELEVENLABS_API_KEY"), "provider_unavailable", "nincs ElevenLabs API-kulcs a segédnél", 503)
    agent = el_agents().get(b.get("variant"))
    need(agent, "provider_unavailable", "nincs beállítva ElevenLabs-ügynök ehhez: %s" % b.get("variant"), 503)
    st, resp = http("GET", "https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id="
                    + urllib.parse.quote(agent), {"xi-api-key": env("ELEVENLABS_API_KEY")})
    if st == 200 and isinstance(resp, dict) and resp.get("signed_url"):
        return {"signed_url": resp["signed_url"]}
    raise ApiError(502, "upstream_error", "ElevenLabs get-signed-url HTTP %s: %s" % (st, err_of(resp)))


def pick_text(b):
    tm, has = text_models(), {"openai": bool(env("OPENAI_API_KEY")), "google": bool(google_key())}
    provider = b.get("provider") or ("openai" if has["openai"] else "google")
    need(provider in has, "bad_request", "ismeretlen szövegmodell-szolgáltató")
    need(has[provider], "provider_unavailable", "nincs kulcs ehhez a szövegmodellhez: %s" % provider, 503)
    model = tm[provider]
    if b.get("model") and not env("VOICE_LAB_TEXT_MODEL_LOCK"):
        need(re.fullmatch(r"[A-Za-z0-9._:-]{1,80}", b["model"]), "bad_request", "hibás modellazonosító")
        model = b["model"]
    return provider, model


def op_text(b):
    provider, model = pick_text(b)
    system, inp = b.get("system") or "", b.get("input")
    need(isinstance(inp, str) and inp.strip(), "bad_request", "hiányzik az input mező")
    need(len(system) + len(inp) <= 200000, "too_large", "túl hosszú kérés")
    max_out = max(256, min(int(b.get("max_output_tokens") or 8000), 32000))
    if provider == "openai":
        body = {"model": model, "instructions": system, "input": inp, "max_output_tokens": max_out}
        if b.get("json"):
            body["text"] = {"format": {"type": "json_object"}}
        st, resp = http("POST", "https://api.openai.com/v1/responses",
                        {"Authorization": "Bearer " + env("OPENAI_API_KEY"), "Content-Type": "application/json"},
                        body, timeout=180)
        if st == 200 and isinstance(resp, dict):
            text = "".join(c.get("text", "") for item in resp.get("output") or [] if item.get("type") == "message"
                           for c in item.get("content") or [] if c.get("type") == "output_text")
            if text:
                return {"text": text, "provider": provider, "model": model}
        raise ApiError(502, "upstream_error", "OpenAI responses HTTP %s: %s" % (st, err_of(resp)))
    gc = {"maxOutputTokens": max_out}
    if b.get("json"):
        gc["responseMimeType"] = "application/json"
    body = {"systemInstruction": {"parts": [{"text": system}]}, "contents": [{"role": "user", "parts": [{"text": inp}]}],
            "generationConfig": gc}
    st, resp = http("POST", GEMINI_API + "/models/%s:generateContent" % urllib.parse.quote(model),
                    {"x-goog-api-key": google_key(), "Content-Type": "application/json"}, body, timeout=180)
    if st == 200 and isinstance(resp, dict):
        parts = (((resp.get("candidates") or [{}])[0].get("content") or {}).get("parts")) or []
        text = "".join(p.get("text", "") for p in parts if not p.get("thought"))
        if text:
            return {"text": text, "provider": provider, "model": model}
    raise ApiError(502, "upstream_error", "Gemini generateContent HTTP %s: %s" % (st, err_of(resp)))


def op_text_models(provider):
    if provider == "openai":
        need(env("OPENAI_API_KEY"), "provider_unavailable", "nincs OpenAI API-kulcs", 503)
        st, resp = http("GET", "https://api.openai.com/v1/models", {"Authorization": "Bearer " + env("OPENAI_API_KEY")})
        if st == 200:
            ids = sorted(m.get("id", "") for m in resp.get("data") or [])
            return {"models": [i for i in ids if re.match(r"(gpt-|o\d)", i) and not re.search(
                r"realtime|audio|tts|transcribe|image|search|embedding|live", i)]}
    else:
        need(google_key(), "provider_unavailable", "nincs Google API-kulcs", 503)
        st, resp = http("GET", GEMINI_API + "/models?pageSize=200", {"x-goog-api-key": google_key()})
        if st == 200:
            return {"models": sorted(m["name"].split("/", 1)[-1] for m in resp.get("models") or []
                                     if "generateContent" in m.get("supportedGenerationMethods", [])
                                     and not re.search(r"tts|image|embedding|live", m["name"]))}
    raise ApiError(502, "upstream_error", "modellista HTTP %s: %s" % (st, err_of(resp)))


SAFE_ID = re.compile(r"[A-Za-z0-9_-]{1,80}")


def op_archive(b):
    """Local-only extension: keep a copy of a conversation record on this machine (git-ignored folder)."""
    cid = str(b.get("id") or "")
    need(SAFE_ID.fullmatch(cid), "bad_request", "hibás beszélgetés-azonosító")
    folder = os.path.join(data_dir(), "conversations")
    os.makedirs(folder, exist_ok=True)
    with open(os.path.join(folder, cid + ".json"), "w", encoding="utf-8") as f:
        f.write(scrub(json.dumps(b, ensure_ascii=False, indent=1)))
    return {"ok": True, "path": os.path.relpath(os.path.join(folder, cid + ".json"), HERE).replace(os.sep, "/")}


def op_archive_audio(cid, data, ctype):
    need(SAFE_ID.fullmatch(cid or ""), "bad_request", "hibás beszélgetés-azonosító")
    ext = ".ogg" if "ogg" in (ctype or "") else ".mp4" if "mp4" in (ctype or "") else ".webm"
    folder = os.path.join(data_dir(), "conversations")
    os.makedirs(folder, exist_ok=True)
    with open(os.path.join(folder, cid + ext), "wb") as f:
        f.write(data)
    return {"ok": True, "bytes": len(data)}


# ------------------------------------------------------------------ HTTP

STATIC_TYPES = {".htm": "text/html; charset=utf-8", ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
                ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
                ".md": "text/markdown; charset=utf-8", ".json": "application/json", ".csv": "text/csv; charset=utf-8",
                ".woff2": "font/woff2", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8"}


def static_file(url_path):
    """Absolute file path for a GET under materials/, or None. No dotfiles, no traversal, known types only."""
    parts = [p for p in urllib.parse.unquote(url_path).split("/") if p]
    if any(p.startswith(".") or "\\" in p or ":" in p for p in parts):
        return None
    full = os.path.abspath(os.path.join(MATERIALS, *parts)) if parts else MATERIALS
    if not (full == MATERIALS or full.startswith(MATERIALS + os.sep)):
        return None
    if os.path.isdir(full):
        full = os.path.join(full, "index.html")
    if os.path.splitext(full)[1].lower() not in STATIC_TYPES or not os.path.isfile(full):
        return None
    return full


def allowed_origins(p):
    extra = [o.strip().rstrip("/") for o in (env("VOICE_LAB_ALLOWED_ORIGINS") or "https://cspiya.github.io").split(",")]
    return {"http://127.0.0.1:%d" % p, "http://localhost:%d" % p, *[o for o in extra if o]}


class Handler(BaseHTTPRequestHandler):
    server_version = "voice-lab-helper"
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt, *args):   # path + status only, never bodies
        sys.stderr.write("%s %s\n" % (time.strftime("%H:%M:%S"), scrub(fmt % args)))

    # --- helpers
    def _cors(self):
        origin = self.headers.get("Origin")
        if origin and origin.rstrip("/") in allowed_origins(self.server.server_port):
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")

    def _send(self, status, obj, ctype="application/json; charset=utf-8", extra=None):
        data = obj if isinstance(obj, bytes) else json.dumps(obj, ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("X-Content-Type-Options", "nosniff")
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self._cors()
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)

    def _error(self, status, code, message):
        self._send(status, {"error": {"code": code, "message": scrub(message)}})

    def _guard(self):
        """DNS-rebinding guard (Host must be local) and origin allowlist for cross-site requests."""
        p = self.server.server_port
        if self.headers.get("Host", "") not in ("127.0.0.1:%d" % p, "localhost:%d" % p):
            self._error(403, "forbidden", "forbidden host")
            return False
        origin = self.headers.get("Origin")
        if origin and origin.rstrip("/") not in allowed_origins(p):
            self._error(403, "forbidden_origin", "ez az origin nincs engedélyezve (VOICE_LAB_ALLOWED_ORIGINS)")
            return False
        return True

    def _auth(self):
        code = env("VOICE_LAB_ACCESS_CODE")
        if code and not hmac.compare_digest((self.headers.get("X-Access-Code") or "").encode(), code.encode()):
            self._error(401, "unauthorized", "hibás vagy hiányzó hozzáférési kód (X-Access-Code)")
            return False
        return True

    def _read(self, limit):
        n = int(self.headers.get("Content-Length") or 0)
        if n < 0 or n > limit:
            raise ApiError(413, "too_large", "túl nagy kérés")
        return self.rfile.read(n)

    def _json(self):
        try:
            b = json.loads(self._read(MAX_JSON_BODY) or b"{}")
        except ValueError:
            raise ApiError(400, "bad_json", "hibás JSON")
        need(isinstance(b, dict), "bad_json", "JSON-objektum kell")
        return b

    # --- verbs
    def do_OPTIONS(self):
        if not self._guard():
            return
        extra = {"Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
                 "Access-Control-Allow-Headers": "Content-Type, X-Access-Code",
                 "Access-Control-Max-Age": "600"}
        if self.headers.get("Access-Control-Request-Private-Network") == "true":
            extra["Access-Control-Allow-Private-Network"] = "true"   # Chrome private/local network access
        self._send(204, b"", "text/plain", extra)

    def do_HEAD(self):
        self.do_GET()

    def do_GET(self):
        if not self._guard():
            return
        u = urllib.parse.urlsplit(self.path)
        try:
            if u.path == "/v1/health":
                return self._send(200, op_health())
            if u.path == "/v1/text/models":
                if not self._auth():
                    return
                q = urllib.parse.parse_qs(u.query)
                return self._send(200, op_text_models((q.get("provider") or ["openai"])[0]))
        except ApiError as e:
            return self._error(e.status, e.code, e.message)
        if u.path == "/":
            return self._send(302, b"", "text/plain", {"Location": APP_PATH})
        f = static_file(u.path)
        if not f:
            return self._error(404, "not_found", "nincs ilyen fájl")
        with open(f, "rb") as fh:
            self._send(200, fh.read(), STATIC_TYPES[os.path.splitext(f)[1].lower()])

    def do_POST(self):
        if not self._guard() or not self._auth():
            return
        routes = {"/v1/openai/realtime/client-secret": op_realtime_secret, "/v1/openai/live/session": op_live_session,
                  "/v1/google/live/token": op_gemini_token, "/v1/elevenlabs/signed-url": op_eleven_signed_url,
                  "/v1/text": op_text, "/v1/local/archive": op_archive}
        fn = routes.get(urllib.parse.urlsplit(self.path).path)
        try:
            if not fn:
                raise ApiError(404, "not_found", "ismeretlen végpont")
            self._send(200, fn(self._json()))
        except ApiError as e:
            self._error(e.status, e.code, e.message)
        except Exception as e:   # never leak a traceback with secrets
            self._error(500, "internal", "belső hiba: %s" % type(e).__name__)

    def do_PUT(self):
        if not self._guard() or not self._auth():
            return
        m = re.fullmatch(r"/v1/local/archive/([^/]+)/audio", urllib.parse.urlsplit(self.path).path)
        try:
            if not m:
                raise ApiError(404, "not_found", "ismeretlen végpont")
            self._send(200, op_archive_audio(m.group(1), self._read(MAX_AUDIO_BODY), self.headers.get("Content-Type")))
        except ApiError as e:
            self._error(e.status, e.code, e.message)


# ------------------------------------------------------------------ selftest

def ws_probe(url, first_msg, timeout=20):
    """Minimal stdlib WebSocket client (selftest only): connect, send one text frame, return the first reply."""
    u = urllib.parse.urlsplit(url)
    raw = socket.create_connection((u.hostname, 443), timeout=timeout)
    sock = ssl.create_default_context().wrap_socket(raw, server_hostname=u.hostname)
    try:
        key = base64.b64encode(os.urandom(16)).decode()
        sock.sendall(("GET %s?%s HTTP/1.1\r\nHost: %s\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n"
                      "Sec-WebSocket-Key: %s\r\nSec-WebSocket-Version: 13\r\n\r\n"
                      % (u.path, u.query, u.hostname, key)).encode())
        buf = b""
        while b"\r\n\r\n" not in buf:
            chunk = sock.recv(4096)
            if not chunk:
                raise OSError("handshake: connection closed")
            buf += chunk
        head, buf = buf.split(b"\r\n\r\n", 1)
        status = head.split(b"\r\n", 1)[0].decode("latin-1")
        if status.split(" ")[1:2] != ["101"]:
            return "handshake: " + status
        payload, mask = json.dumps(first_msg).encode(), os.urandom(4)
        n = len(payload)
        hdr = (bytes([0x81, 0x80 | n]) if n < 126 else bytes([0x81, 0x80 | 126]) + n.to_bytes(2, "big") if n < 65536
               else bytes([0x81, 0x80 | 127]) + n.to_bytes(8, "big"))
        sock.sendall(hdr + mask + bytes(b ^ mask[i % 4] for i, b in enumerate(payload)))

        def take(k):
            nonlocal buf
            while len(buf) < k:
                chunk = sock.recv(65536)
                if not chunk:
                    raise OSError("connection closed")
                buf += chunk
            out, buf = buf[:k], buf[k:]
            return out
        b0, b1 = take(2)
        ln = b1 & 0x7F
        ln = int.from_bytes(take(2), "big") if ln == 126 else int.from_bytes(take(8), "big") if ln == 127 else ln
        data = take(ln)
        if b0 & 0x0F == 8:
            return "close %s: %s" % (int.from_bytes(data[:2], "big") if len(data) >= 2 else "-",
                                     data[2:].decode("utf-8", "replace")[:300])
        return data.decode("utf-8", "replace")
    finally:
        try:
            sock.sendall(bytes([0x88, 0x82]) + b"\0\0\0\0" + (1000).to_bytes(2, "big"))
        except OSError:
            pass
        sock.close()


def selftest(offline):
    out = {}
    with open(os.path.join(HERE, "prompts", "sales-call-hu.md"), encoding="utf-8") as f:
        script = f.read()
    low = script.lower()
    out["script:late20"] = "OK" if "LATE20" in script and "húsz százalék" in low else "HIBA"
    out["script:no-50"] = "OK" if not re.search(r"ötven százalék|50 ?%|hatvanezer|holnapi|ma éjfélig érvényes", low) else "HIBA"
    out["script:opening"] = "OK" if re.search(r"^## Nyitómondat\s*\n+\"", script, re.M) else "HIBA"
    su = gemini_setup(GEMINI_MODELS[0], GEMINI_VOICES[0], "teszt " * 50)
    gc = su["generationConfig"]
    out["gemini:setup-shape"] = "OK" if (su["model"] == "models/" + GEMINI_MODELS[0] and gc["responseModalities"] == ["AUDIO"]
                                         and su["systemInstruction"]["parts"][0]["text"].startswith("RESPOND IN HUNGARIAN")
                                         and "inputAudioTranscription" in su) else "HIBA"
    out["gemini:no-transcribe"] = "OK" if "inputAudioTranscription" not in gemini_setup("x", "y", "z", False) else "HIBA"
    probes = ["access_token=auth_tokens/abcdefghijklmnop", "name: auth_tokens/abcdefghijklmnop",
              "Bearer sk-abcdefghijklmnop", "key AIzaabcdefghijklmnop"]
    out["scrub"] = "OK" if all("abcdefghijklmnop" not in scrub(p) for p in probes) else "HIBA"
    bad = ["/../server.py", "/demos/voice-lab/.env.local", "/demos/voice-lab/server.py", "/%2e%2e/AGENTS.md",
           "/demos/voice-lab/.data/x.json"]
    good = ["/demos/voice-lab/app.htm", "/demos/voice-lab/js/app.js", "/assets/fonts/geist-latin.woff2"]
    out["static:guard"] = "OK" if all(static_file(p) is None for p in bad) and all(static_file(p) for p in good) else "HIBA"
    try:
        op_realtime_secret({"model": "x", "voice": "marin", "instructions": "a"}) if env("OPENAI_API_KEY") else None
        out["validate:model"] = "OK" if not env("OPENAI_API_KEY") else "HIBA"
    except ApiError as e:
        out["validate:model"] = "OK" if e.status == 400 else "HIBA"
    out["keys"] = {"openai": bool(env("OPENAI_API_KEY")), "google": bool(google_key()),
                   "elevenlabs": bool(env("ELEVENLABS_API_KEY")), "env_file_exists": os.path.exists(ENV_FILE)}
    if offline:
        out["online"] = "kihagyva (--offline)"
        return out
    ins = "Magyarul beszélj. Ez egy rövid teszt."

    def attempt(name, fn):
        try:
            out[name] = fn()
        except ApiError as e:
            out[name] = "%s: %s" % (e.code, e.message)
    if env("OPENAI_API_KEY"):
        attempt("openai-realtime:" + REALTIME_MODELS[0], lambda: "OK (ephemeral key, %ss)" % (
            int(op_realtime_secret({"model": REALTIME_MODELS[0], "voice": "marin", "instructions": ins})["expires_at"]
                - time.time())))
        # a dummy offer only checks auth + endpoint; "invalid_offer" is the expected answer
        attempt("openai-live:dummy-sdp", lambda: op_live_session(
            {"voice": "marin", "instructions": ins, "sdp": "v=0\r\no=- 0 0 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"}) and "OK")
    for v in ("cascade", "realtime"):
        if env("ELEVENLABS_API_KEY") and el_agents()[v]:
            attempt("elevenlabs:" + v, lambda: "OK (signed_url %d chars)" % len(op_eleven_signed_url({"variant": v})["signed_url"]))
    if google_key():
        def gem():
            r = op_gemini_token({"model": GEMINI_MODELS[0], "voice": GEMINI_VOICES[0], "instructions": ins})
            reply = ws_probe(r["ws_url"] + "?access_token=" + urllib.parse.quote(r["token"], safe=""), {"setup": r["setup"]})
            return "OK (token + setupComplete)" if '"setupComplete"' in reply else "token OK, setup: " + scrub(reply)[:300]
        attempt("gemini:" + GEMINI_MODELS[0], gem)
    for p in ("openai", "google"):
        if (p == "openai" and env("OPENAI_API_KEY")) or (p == "google" and google_key()):
            attempt("text:" + p, lambda: "OK (%s): %s" % (text_models()[p], op_text(
                {"provider": p, "system": "Válaszolj egyetlen szóval.", "input": "Írd le: rendben",
                 "max_output_tokens": 256})["text"].strip()[:40]))
    return out


def main():
    if "--selftest" in sys.argv:
        print(json.dumps(selftest("--offline" in sys.argv), ensure_ascii=False, indent=1))
        return
    p = port()

    class Server(ThreadingHTTPServer):
        allow_reuse_address = os.name != "nt"   # on Windows SO_REUSEADDR would silently share a busy port
        daemon_threads = True
    try:
        srv = Server(("127.0.0.1", p), Handler)
    except OSError as e:
        sys.exit("A %d-es port foglalt vagy nem használható (%s). Indítsd másik porttal: python server.py --port 8780"
                 % (p, e.strerror or e))
    h = op_health()["providers"]
    print("Hangügynök-labor, helyi segéd: http://127.0.0.1:%d/  (kulcsok: OpenAI=%s, Google=%s, ElevenLabs=%s; "
          "env-fájl: %s)  Leállítás: Ctrl+C" % (p, h["openai"], h["google"], h["elevenlabs"],
                                               "megvan" if os.path.exists(ENV_FILE) else "nincs"))
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        srv.server_close()


if __name__ == "__main__":
    main()
