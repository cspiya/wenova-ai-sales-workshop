<!-- presentation -->
# Haladó út: Claude Code a terminálban

**Választható, haladóknak.** Az alapút a Claude Desktop Cowork; ezt csak akkor válaszd, ha szívesen dolgozol a terminálban (karakteres képernyőn). Ugyanazt a tananyagot, ugyanazokkal a lépésekkel járod végig, csak a Claude Code-ban.

## Mikor jó ez neked?

- Ismered a terminált (Windowson PowerShell, macOS-en Terminal), vagy szeretnéd megtanulni.
- Azt szeretnéd, hogy a Claude közvetlenül a saját gépeden, a munkamappádban dolgozzon, és a változásokat fájlonként lásd.
- Pro, Max vagy magasabb Claude-előfizetésed van. Az ingyenes csomag nem tartalmazza a Claude Code-ot.

## 1. Telepítés (5 perc)

A hivatalos parancsok ([Claude Code telepítési leírás](https://code.claude.com/docs/en/setup)):

| Rendszer | Parancs |
| --- | --- |
| Windows, PowerShell | `irm https://claude.ai/install.ps1 \| iex` |
| Windows, CMD | `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd` |
| macOS | `curl -fsSL https://claude.ai/install.sh \| bash` |
| macOS, Homebrew | `brew install --cask claude-code` |
| Windows, WinGet | `winget install Anthropic.ClaudeCode` |

Utána nyiss **új** terminálablakot, és ellenőrizd: `claude --version`. Ha a `claude` parancs ismeretlen, a leírás „Fix your PATH” része segít. Windowson a Git for Windows nem kötelező; nélküle a Claude Code PowerShell-lel dolgozik. Rendszergazdai jog nem kell.

## 2. Belépés

Írd be: `claude`. A böngészőben lépj be a Pro vagy Max Claude-fiókoddal. Jelszót a terminálba ne írj.

## 3. A tananyag telepítése egy mondattal

1. Hozd létre a munkamappát, és lépj bele:
   - Windows (PowerShell): `mkdir $HOME\Wenova-AI-Sales-Workshop; cd $HOME\Wenova-AI-Sales-Workshop`
   - macOS: `mkdir -p ~/Wenova-AI-Sales-Workshop && cd ~/Wenova-AI-Sales-Workshop`
2. Indítsd: `claude`. Amikor rákérdez, jelöld megbízhatónak a mappát.
3. Írd be:

```text
Telepítsd a workshop tananyagát: https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md
```

A Claude Code a saját gépeden tölti le és csomagolja ki a tananyagot a `Tananyag/` mappába, létrehozza a `Munka/` mappát, és a gyökérbe másolja a `CLAUDE.md` és `AGENTS.md` fájlt. Minden parancs előtt engedélyt kér: olvasd el, mit futtatna, és csak akkor engedd, ha érted. A futtatókönyv: [TELEPITES.md](TELEPITES.md).

4. Lépj ki (`/exit`), és indítsd újra a `claude` parancsot ugyanebben a mappában. A Claude Code ekkor automatikusan betölti a `CLAUDE.md` fájlt, az pedig az `AGENTS.md`-t: így tudja a mappaszabályokat, az indítómondatokat és a biztonsági szabályokat.

## 4. Connectorok

- **A claude.ai-on bekötött connectorok** (Gmail vagy Microsoft 365, Google Drive) a Claude Code-ban is megjelenhetnek, ha ugyanazzal a fiókkal léptél be. A `/mcp` paranccsal nézd meg, mi látszik, és ott kapcsolhatod ki, ami nem kell.
- **Buffer:** `claude mcp add --transport http buffer https://mcp.buffer.com/mcp`, utána a Claude Code-ban `/mcp` → Buffer → belépés a böngészőben ([Buffer leírása](https://developers.buffer.com/guides/integrations/claude.html)).
- **Brandiseer, Sales Bot, EstiWise:** a partnerek MCP-connectorát a saját blokkjukban kötjük be; előre nincs teendő. A blokkban kapott címet ugyanígy, `claude mcp add --transport http …` paranccsal adod hozzá.

## 5. Biztonsági beállítás: küldés tiltva

Az engedélymódod maradjon az alapértelmezett: a Claude minden művelet előtt kérdez. Az automatikus jóváhagyást ne kapcsold be. Levélküldést, posztolást és törlést soha ne engedélyezz „mindig” (always allow) válasszal.

Tiltsd le a levelező írási eszközeit: a `/permissions` paranccsal a **Deny** listára vedd fel a Gmail vagy Outlook küldő, válaszoló, továbbító és törlő eszközét. Az eszközök pontos nevét a `/mcp` mutatja (például `mcp__claude_ai_Gmail__send_message`). A tiltólista erősebb, mint a kérés: a tiltott eszközt a Claude akkor sem tudja használni, ha valaki erre utasítja.

## 6. Így dolgozol a blokkokban

- Indítómondatok ugyanazok: „Kezdjük a felkészülést”, „Kezdjük az 1. blokkot”, „Hol tartok?”, „Karmester: …”, „Író: …”, és így tovább.
- Az eredmények a `Munka/` mappába kerülnek; a Claude Code minden fájlírás előtt megmutatja a változást. Nézd át, és csak utána engedd.
- A vizuális eredmények (kampányáttekintés, posztelőnézet, a nap összefoglalója) HTML-fájlok a `Munka/` alatt. Nyisd meg őket a böngészőben (dupla kattintás); claude.ai-os artifact itt nincs.
- Az Ellenőrt új munkamenetben futtasd: `/clear`, vagy nyiss új terminálablakot, és ott indíts új `claude` munkamenetet.
- Hasznos parancsok: `/mcp` (connectorok), `/permissions` (engedélyek), `/clear` (új, tiszta beszélgetés), `/resume` (korábbi beszélgetés folytatása), `/exit` (kilépés). A `/init` parancs itt nem kell: a `CLAUDE.md` már megvan.

## 7. Ütemezett feladatok

- A **Claude Desktop Code fülén** van **Scheduled** oldal. Ott a feladat a saját gépeden, a munkamappádban is futhat („Only on this computer”); ehhez a gépnek ébren kell lennie, és az alkalmazásnak nyitva ([leírás](https://code.claude.com/docs/en/desktop-scheduled-tasks)).
- A terminálban a `/loop` csak a nyitott munkamenet alatt ismétel; hosszabb távra a fenti Desktop-feladat vagy a felhőben futó ütemezett feladat való.
- Kész promptok: [ütemezett feladatok](starter-kit/scheduled-tasks.md). Ugyanaz a szabály: csak olvas, összefoglal, piszkozatot ír; nem küld.

## 8. Biztonság röviden

- Jelszót, API-kulcsot, belépőkódot soha ne írj a terminálba vagy a beszélgetésbe.
- A levélküldő eszközök legyenek a Deny listán.
- Minden fájlváltozást nézz át, mielőtt engeded.
- Ha valami furcsát kér a Claude (törlés, ismeretlen parancs), utasítsd el, és kérdezz egy oktatót.

[Vissza a felkészüléshez](modules/00-prework.md) · [A tananyag kezdőlapja](README.md)
