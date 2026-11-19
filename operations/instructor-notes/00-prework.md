# 00-prework

[HTML-változat](https://cspiya.github.io/wenova-ai-sales-workshop/operations/instructor-notes/00-prework.html)

[Kapcsolódó tananyag](../../materials/modules/00-prework.md)

<a name="notes"></a>

Belső oktatói jegyzet · review

**Státusz: review.** Felkészülés a workshop előtt, technikai pult 08:30–09:00.

<a name="notes-1"></a>

### Előző nap

- A résztvevők 2026-11-18-án e-mailt kaptak: fizetős Claude kell; Brandiseer- és (kötelező) Buffer-fiók legalább egy közösségimédia-oldallal; EstiWise-regisztráció bankkártya nélkül; a Sales Bothoz előre nincs teendő, a hozzáférést a 03-as blokk elején kapják, csak a LinkedIn-belépés legyen kéznél. Partnereszközre senkinek nem kell előfizetnie. Terem: N13 412/A (4. emelet), belépőkártya a recepción.
- Az alapút **Claude Desktop, Cowork mód**, munkamappa: `Wenova-AI-Sales-Workshop` (`Tananyag/` + `Munka/`). A tananyag a nyilvános repó `main` ágáról települ egy mondattal ([telepítés](../../materials/modules/00-prework.md#00-prework.01-install)). A PR-nak 19-én reggelig a `main`-en kell lennie, különben a telepítés a régi anyagot hozza.
- A partnerek MCP-connectorát (Brandiseer, Sales Bot, EstiWise) a partnerek a saját blokkjukban kötik be. A pultnál ezekkel nem foglalkozunk.

<a name="notes-2"></a>

### Technikai pult 08:30–09:00

Sorrend: [telepítés](../../materials/modules/00-prework.md#00-prework.01-install--steps) → [connectorok és tiltás](../../materials/modules/00-prework.md#00-prework.02-account-check--steps) → [indulási próba](../../materials/modules/00-prework.md#00-prework.05-coach-check--prompt). Egy résztvevőre legfeljebb 5 perc; ami addig nem megy, az a kézi úton indul, és a blokkban a körbejáró oktató pótolja.

Pultlap (papíron, név nélkül, asztalszámmal): Cowork + munkamappa ✅/⚠️ · `Tananyag/` verzió ✅/⚠️ · Instructions-mondat ✅/⚠️ · levelező ✅/⚠️ · levelező küldés/válasz/továbbítás/törlés Tiltva (Blocked) ✅/⚠️ · Google Drive + CRM-tábla ✅/⚠️ · Buffer-fiók + connector ✅/⚠️ · Brandiseer ✅/⚠️ · EstiWise-fiók ✅/⚠️.

Levelezőbiztonság: a connector oldalán az írási eszközök Tiltva (Blocked) állásban; írási műveletnél senki ne kattintson a „Mindig engedélyez” (Always allow) gombra.

<a name="notes-3"></a>

### Gyakori hibák

| Hiba | Tünet | Megoldás a pultnál |
| --- | --- | --- |
| Ingyenes csomag | Nincs Cowork | Előfizetés helyben (Pro), vagy párban dolgozik |
| Nincs csatolt mappa | A Claude kéri, hogy válasszon mappát | Projects → + → Use an existing folder → `Wenova-AI-Sales-Workshop` |
| A letöltés hálózati hibával áll meg | `git clone` vagy letöltés elutasítva | Settings → Capabilities → Allow network egress be, Domain allowlist: Package managers only; „Próbáld újra” |
| Ez sem megy | – | [Kézi ZIP-út](../../materials/modules/00-prework.md#00-prework.01-install--help), 3 perc |
| Cowork nem indul a gépen | – | Tartalékút: claude.ai-projekt a böngészőben ([help](../../materials/modules/00-prework.md#00-prework.01-install--help)) |
| Céges Microsoft 365 | A connector rendszergazdai jóváhagyást kér | Nem oldjuk meg helyben: bemásolt levelek, [mintapostafiók](../../materials/scenarios/office-plants/outputs/mailbox-sample.md) |
| A Claude nem találja a CRM-táblát | – | „Keresd a Google Drive-ban a CRM nevű táblázatot”; ha nincs Drive: CSV a `Munka/05-Folyamat/` alatt ([help](../../materials/modules/00-prework.md#00-prework.05-coach-check--help)) |
| Az Instructions-mondat hiányzik | Az indítómondatokat nem ismeri fel | Projekt beállításai → Instructions: „Kövesd a munkamappa AGENTS.md fájlját. A cégem neve: …” |

<a name="notes-4"></a>

### Ma este tesztelendő, nem ellenőrzött pontok

A dokumentáció alapján írtuk, élő próbán nem futott:

1. A Cowork a `raw.githubusercontent.com` linket a résztvevő által megadott URL-ként be tudja-e olvasni, és a `git clone` a github.com-ról Pro csomagon, alapbeállítással átmegy-e (a Pro alapértelmezett hálózati beállítása a dokumentációban nem szerepel).
2. A VM-ben letöltött fájlok átmásolása a csatolt helyi mappába (`Tananyag/`) gond nélkül megy-e, és a ~97 fájlnál mennyi idő.
3. Cowork beolvassa-e a csatolt mappa gyökerében lévő `AGENTS.md`-t magától; ezért kérjük az Instructions-mondatot (ez dokumentáltan működik).
4. A Buffer connector neve és a „Connect” lépés a Customize → Connectors listában (a Buffer dokumentációja szerint létezik).
5. A Cowork ütemezett feladata helyi mappa nélkül (Pro) a Google Drive-ból olvassa-e a DNS-t.

Ha az 1–2. pont nem működik: a pultnál mindenki a kézi ZIP-utat kapja, ez 3 perc.

<a name="notes-5"></a>

### Adatvédelem

A pultnál is ismételd el: jelszó és belépőkód nem kerül a Claude-ba; céges levelezés csak akkor, ha a résztvevőnek van rá engedélye. Ha bizonytalan, mintával dolgozik. Az [adatkezelési szabályok](../../materials/modules/00-prework.md#00-prework.04-sources--decisions) a tananyagban vannak; a jegyzet nem ismétli őket.

## Kapcsolódó tananyagrészek

A hivatkozások a bal oldali tananyagnézetet a megfelelő szakaszra állítják.

- [Telepítés: Claude Desktop és a tananyag egy mondattal](../../materials/modules/00-prework.md#00-prework.01-install)
- [Connectorok és biztonsági beállítás](../../materials/modules/00-prework.md#00-prework.02-account-check)
- [Partnerfiókok](../../materials/modules/00-prework.md#00-prework.03-partner-accounts)
- [Saját források és adatkezelés](../../materials/modules/00-prework.md#00-prework.04-sources)
- [Indulási próba és CRM-tábla](../../materials/modules/00-prework.md#00-prework.05-coach-check)
