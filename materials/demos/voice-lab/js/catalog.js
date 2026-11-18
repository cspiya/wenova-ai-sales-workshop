// Voice options. Keep model/voice lists in sync with server.py (the broker validates them).
export const REALTIME_MODELS = ["gpt-realtime-2.1", "gpt-realtime-2.1-mini", "gpt-realtime", "gpt-realtime-mini"];
export const REALTIME_VOICES = ["marin", "cedar", "alloy", "ash", "ballad", "coral", "echo", "sage", "shimmer", "verse"];
export const LIVE_VOICES = ["marin", "quartz", "ripple", "vesper", "willow", "stone", "gleam", "meridian", "bossa", "tempo",
  "beacon", "delta", "cinder", "nuri", "juni", "flitz", "brise", "sillage", "nira", "harema", "shida", "noeul"];
export const GEMINI_MODELS = ["gemini-3.8-live", "gemini-3.1-flash-live-preview"];
export const GEMINI_VOICES = ["Kore", "Aoede", "Leda", "Zephyr", "Sulafat", "Despina", "Achird", "Vindemiatrix", "Callirrhoe",
  "Autonoe", "Erinome", "Laomedeia", "Achernar", "Gacrux", "Pulcherrima", "Puck", "Charon", "Orus", "Fenrir", "Enceladus",
  "Iapetus", "Umbriel", "Algieba", "Algenib", "Rasalgethi", "Alnilam", "Schedar", "Zubenelgenubi", "Sadachbia", "Sadaltager"];

// roles: which conversation roles the option can play. preferred: the owner's default choice (2026-11-18).
export const OPTIONS = [
  { id: "oa-live", provider: "openai", label: "OpenAI GPT-Live", kind: "beszédből beszéd · legjobb forgatókönyv-követés a mérésben",
    models: ["gpt-live-1"], voices: LIVE_VOICES, voice: "marin", preferred: true, roles: ["human", "seller", "buyer"] },
  { id: "gemini-live", provider: "google", label: "Google Gemini Live", kind: "natív audió · legkisebb késleltetés a mérésben",
    models: GEMINI_MODELS, voices: GEMINI_VOICES, voice: "Kore", buyerVoice: "Puck", preferred: true, roles: ["human", "seller", "buyer"] },
  { id: "oa-realtime", provider: "openai", label: "OpenAI Realtime", kind: "beszédből beszéd",
    models: REALTIME_MODELS, voices: REALTIME_VOICES, voice: "marin", roles: ["human", "seller", "buyer"] },
  { id: "el-realtime", provider: "elevenlabs", variant: "realtime", label: "ElevenLabs ügynök (realtime)",
    kind: "a fiókban beállított ügynök; csak ember ↔ modell módban", models: ["az ügynökben beállítva"], voices: ["az ügynök hangja"], roles: ["human"] },
  { id: "el-cascade", provider: "elevenlabs", variant: "cascade", label: "ElevenLabs ügynök (kaszkád)",
    kind: "STT → LLM → TTS, a fiókban beállított ügynök; csak ember ↔ modell módban", models: ["az ügynökben beállítva"], voices: ["az ügynök hangja"], roles: ["human"] },
];
export const optionById = id => OPTIONS.find(o => o.id === id);
