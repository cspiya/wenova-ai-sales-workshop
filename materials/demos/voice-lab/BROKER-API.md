# Voice lab credential broker – HTTP API v1

The voice lab page (`app.htm`) is static. It gets short-lived provider credentials from a **credential source**, in this order (automatic mode):

1. a **remote broker** (base URL in `js/config.js` → `brokerUrl`, overridable in Beállítások; access code typed by the visitor),
2. the **local helper** `python server.py` (same API; reference implementation of this document),
3. the visitor's **own keys** in the browser (no broker; `js/creds.js` → `KeySource` calls the providers directly).

A remote broker can be a near-copy of `server.py` (`op_*` functions). It must hold the provider keys server-side (e.g. encrypted environment variables) and must never return a long-lived key.

## Conventions

- All bodies are JSON (`Content-Type: application/json`), UTF-8. Errors: HTTP 4xx/5xx with `{"error": {"code": "<code>", "message": "<Hungarian or English text>"}}`. Codes used: `bad_request`, `bad_json`, `too_large`, `unauthorized`, `forbidden_origin`, `provider_unavailable`, `rate_limited`, `upstream_error`, `not_found`, `internal`.
- **Access code:** request header `X-Access-Code: <code>` on every endpoint except `GET /v1/health`. Missing/wrong → `401 unauthorized`. Compare in constant time.
- **CORS:** answer the preflight (`OPTIONS`) and the actual request with `Access-Control-Allow-Origin: <the request Origin>` (never `*`) and `Vary: Origin`, only for allowlisted origins (production: `https://cspiya.github.io`; local: `http://127.0.0.1:<port>`, `http://localhost:<port>`). Preflight: `Access-Control-Allow-Methods: GET, POST, OPTIONS` for the remote broker (`GET, POST, PUT, OPTIONS` for the local helper, which also accepts the audio `PUT`), `Access-Control-Allow-Headers: Content-Type, X-Access-Code`, `Access-Control-Max-Age: 600`. Requests with a non-allowlisted `Origin` → `403 forbidden_origin`.
- **Private/local network access** (local helper only): if the preflight carries `Access-Control-Request-Private-Network: true`, add `Access-Control-Allow-Private-Network: true`.
- **Rate limit** (remote broker): per access code and per IP, e.g. 20 credential mints and 60 text calls per hour; over the limit → `429 rate_limited`. Recommended: cap `instructions` at 60 000 characters and text `input` at 200 000 characters.
- **Validation:** `model`/`voice` must be from the lists in `js/catalog.js` (same lists in `server.py`). The broker builds the provider request itself; the client only passes the fields below.
- **Logging:** never log keys, tokens, signed URLs or request bodies (transcripts are personal data).
- **Client behaviour:** in automatic mode the page uses the broker only when the visitor has entered an access code; on a `401` from any credential call it marks the broker as rejected, falls through to the next source (local helper or own keys) and tells the visitor. `GET /v1/health` must therefore stay unauthenticated and cheap.
- **Shared origin caveat:** every page under `https://cspiya.github.io` shares one browser origin, so other pages there can read this page's localStorage/IndexedDB (and could call the broker with a code they obtain). The access code is a usage gate, not a secret store: keep rate limits, rotate the code after the workshop, and never return long-lived keys.

## Endpoints

### `GET /v1/health`
No access code needed. Response:
```json
{"service": "voice-lab-broker", "api": 1, "kind": "remote-broker", "auth_required": true,
 "providers": {"openai": true, "google": true, "elevenlabs": false},
 "elevenlabs_agents": {"cascade": false, "realtime": false},
 "text": {"openai": "gpt-5.4-mini", "google": "gemini-3.8-flash", "model_override": false},
 "limits": {"max_instructions_chars": 60000}}
```
`service` must be exactly `voice-lab-broker`. `text.<provider>` is the model the broker uses, or `null` if that provider is unavailable. `model_override: false` means the broker ignores a client-supplied text `model`. The local helper also returns `"local_archive": true`.

### `POST /v1/openai/realtime/client-secret`
Request: `{"model": "gpt-realtime-2.1", "voice": "marin", "instructions": "<full seller or buyer instructions>", "transcribe": true}`
Broker calls `POST https://api.openai.com/v1/realtime/client_secrets` with
`{"expires_after": {"anchor": "created_at", "seconds": 60}, "session": {"type": "realtime", "model", "instructions", "output_modalities": ["audio"], "audio": {"output": {"voice"}, "input": {"turn_detection": {"type": "server_vad", "create_response": true, "interrupt_response": true}, "transcription": {"model": "gpt-4o-transcribe", "language": "hu"}}}}}` (`transcription` only when `transcribe` is true).
Response: `{"value": "ek_…", "expires_at": 1763500000, "model": "…", "voice": "…"}`. The browser then posts its SDP offer to `https://api.openai.com/v1/realtime/calls` with `Authorization: Bearer <value>`.

### `POST /v1/openai/live/session`
GPT-Live has no documented browser client secret, so the broker performs the SDP exchange.
Request: `{"voice": "marin", "instructions": "…", "sdp": "v=0…"}` (complete local description after ICE gathering).
Broker calls `POST https://api.openai.com/v1/live/sessions` with `{"session": {"model": "gpt-live-1", "instructions", "audio": {"output": {"voice"}}}, "transport": {"type": "webrtc", "sdp"}}`.
Response: `{"session_id": "…", "sdp": "v=0…"}` (the answer SDP). Audio then flows directly between browser and OpenAI.

### `POST /v1/google/live/token`
Request: `{"model": "gemini-3.8-live", "voice": "Kore", "instructions": "…", "transcribe": true}`
Broker builds the `BidiGenerateContentSetup` (see `gemini_setup` in `server.py`: AUDIO modality, prebuilt voice, system instruction prefixed with `RESPOND IN HUNGARIAN…`, server VAD 500 ms, `START_OF_ACTIVITY_INTERRUPTS`, output transcription, input transcription when `transcribe`) and calls `POST https://generativelanguage.googleapis.com/v1beta/auth_tokens` with `{"uses": 1, "expireTime": now+20 min, "newSessionExpireTime": now+60 s, "bidiGenerateContentSetup": setup}`. The setup is locked into the token.
Response: `{"token": "auth_tokens/…", "expires_at": "…", "ws_url": "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained", "setup": {…}}`. The browser connects to `ws_url?access_token=<token>` and sends `{"setup": setup}`.

### `POST /v1/elevenlabs/signed-url`
Request: `{"variant": "realtime" | "cascade"}` (the broker maps the variant to its configured agent id).
Broker calls `GET https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=…`.
Response: `{"signed_url": "wss://…"}`. If the agent for the variant is not configured → `503 provider_unavailable`.

### `POST /v1/text`
Proxy for the text model (script generation, refinement, analysis, text simulation).
Request: `{"provider": "openai" | "google" (optional), "model": "…" (optional, honoured only if model_override), "system": "…", "input": "…", "json": false, "max_output_tokens": 8000}`
OpenAI: `POST /v1/responses` `{"model", "instructions": system, "input", "max_output_tokens", "text": {"format": {"type": "json_object"}} (if json)}`; return the concatenated `output_text` parts.
Google: `POST /v1beta/models/<model>:generateContent` `{"systemInstruction", "contents": [{"role": "user", "parts": [{"text": input}]}], "generationConfig": {"maxOutputTokens", "responseMimeType": "application/json" (if json)}}`; return the concatenated non-thought text parts.
Response: `{"text": "…", "provider": "openai", "model": "gpt-5.4-mini"}`.

### `GET /v1/text/models?provider=openai|google` (optional)
Response: `{"models": ["…"]}` (text-capable models visible to the broker's key). A broker may return `404 not_found`.

### Local-helper-only extensions (not part of the broker)
- `POST /v1/local/archive` – body: the conversation record (JSON, field `id` = `[A-Za-z0-9_-]{1,80}`); written to `.data/conversations/<id>.json`.
- `PUT /v1/local/archive/<id>/audio` – raw audio body (`audio/webm`, `audio/ogg` or `audio/mp4`), max 80 MB.
