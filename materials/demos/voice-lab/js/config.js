// Hangügynök-labor: deployment configuration. No secrets here: this file is public (repo + GitHub Pages).
export const CONFIG = {
  // Remote credential broker (BROKER-API.md). Empty until the broker is deployed; overridable in Beállítások.
  brokerUrl: "",
  // Optional local helper (python server.py). Probed automatically only when the page itself is served from it.
  localHelperUrl: "http://127.0.0.1:8765",
  // Default text models for script generation, refinement and analysis (own-key mode; the broker decides its own).
  textModels: { openai: "gpt-5.4-mini", google: "gemini-2.5-flash" },
  // Default script shipped with the demo (Markdown, relative to app.htm).
  defaultScriptUrl: "prompts/sales-call-hu.md",
  agentName: "Nova",
};
