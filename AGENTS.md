# Shared instructions for Codex and Claude

Read [authoring/README.md](authoring/README.md), especially #ai-rules, #requirements, #review and #automation.
Plan and ask first. Edit after approval; continue routine steps within approved scope.
Use English filenames and Hungarian participant/partner prose.

- Markdown is the source of truth. Read/edit Markdown handbooks, modules, instructor notes and presentation scripts. Keep source navigation on Markdown where available.
- materials/: participant deliverables only. One Markdown per module, generated HTML, shared assets/notebook.css, starter-kit, scenarios and assistant.md. All local dependencies stay inside materials/.
- authoring/: one handbook, template and QA evidence. operations/: organizing/marketing/sales handbook and instructor notes. Keep prose consolidated; separate only independently used artifacts and actual review records.
- Instructors may submit Word, slides, their own HTML or other agreed formats. The editor and AI integrate them, prepare/reconcile Markdown and perform technical checks. Do not require instructors to use Git, Node or a particular AI tool. Common review and human trials still apply.
- Generate HTML using npm run render. Never edit generated HTML directly. README.md maps to index.html; module/template/note files map to matching .html. Additional scripts start with <!-- presentation -->. Custom HTML uses <!-- presentation: custom --> in its matching Markdown; see the handbook for explicit correspondence review and acceptance.
- Instructor notes refer to stable lesson/section IDs and embed existing material. Never duplicate lesson text or put instructor/organizing content in materials, even hidden by CSS or comments. Repository visibility is not an access boundary between folders.
- Preserve lesson IDs, output contracts and recovery paths. Never present drafts, untested integrations or unperformed browser/human checks as ready. Use exact brand name Blackhole Media. No real participant/customer data or tokens.
- You handle tooling: npm ci --ignore-scripts; npm run prepare:push before each branch push; npm test. Include changed Markdown and generated HTML in the same commit. npm run check must pass without modifying files. See #automation for changed-file options.
- Main changes go through a pull request and the required Content quality gate. Never bypass protection. Technical merge success is not course acceptance or release permission.
- Participant publication uses npm run release:package through the main-only release workflow. Only approved materials/ are packaged with current evidence and a matching fingerprint. Never fabricate human approval or accept a custom script on someone's behalf.
- Commit, push, create a public repository, publish or send messages only when requested. Copy only the approved participant package into a separate release repository with clean history.
