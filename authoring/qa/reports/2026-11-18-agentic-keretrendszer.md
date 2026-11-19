# Agentic keretrendszer és telepítés: review-jegyzőkönyv (WEN-1223, WEN-1225)

**Állapot: NOT_READY, lefedettség: PARTIAL.** A második kör javítandó tételei közül tíz csoport javítva van. A javítások független újraellenőrzése még nem történt meg. Az élő Cowork-, macOS- és connector-próba hiányzik.

| Adat | Érték |
| --- | --- |
| Ticket | WEN-1223 és WEN-1225, szülő: WEN-1220 |
| A második kör vizsgált revíziója | `680e1298b84e4f36de0f8c1952bc7d28850e3556` |
| Összehasonlítási alap | `origin/main`, `52a6181ffd03960037f9c7a3a018b4ad46c6b943` |
| Ellenőrök | Egy független műszaki és egy független tartalmi ellenőr, külön kontextusban |
| Próbajegyzőkönyv | [Telepítési próba](2026-11-18-telepites.md) |

## Brief

A résztvevők a Claude Desktop Cowork módjában, egy mondattal telepítik a tananyagot, majd pluginnal kapják meg a nyolc szerepből álló AI-csapatot. A vizsgálat kérdései:

- A telepítés és a frissítés megőrzi-e a résztvevő munkáját?
- A szerepek, skillek és workshop-pontosítások egységesen működnek-e a változatlan partnerpromptok mellett?
- Egyértelmű-e a résztvevőnek, mi kézi, miről dönt ő, és mit igazol egy próba?

A hat előadói forrás (02–04-es modul és oktatói jegyzet) nem változhatott.

## 1. kör

| Tétel | Eredmény a 2. kör szerint |
| --- | --- |
| AT-02 | Az automatikus út javítva. A kézi rövidítés a 2. körben új megállapítás lett |
| AT-03, AT-04 | A leírásban javítva: ZIP-út sikertelen klónozáskor, három hálózati cím, pluginfrissítés és verzióösszevetés |
| AT-05 | A plugin két rejtett konfigurációja bekerült a kiadási listába |
| AT-06 | Az indulási sorrend, a fájlszám és a nyolc szerep javítva. Az engedélyek leírása nyitva maradt |
| AT-07 | Lezárva. A jegyzőkönyv külön jelöli a helyi validációt és a katalógushibát |
| AC-01, AC-02, AC-04 | A vezetett úton lezárva. A partnerpromptok fölötti Wenova-szabályok kezelik |
| AC-03, AC-05, AC-06, AC-08, AC-09 | Lezárva |
| AC-07 | Az eredeti eltérés lezárva. A stratégia forrása a 2. körben új megállapítás lett |

## 2. kör

Ítélet mindkét ellenőrnél: **REVISE**. Blokkoló súlyú szövegbeli hibát egyik sem talált.

| Tétel | Súly | Megállapítás |
| --- | --- | --- |
| AT-01 | Lefedettségi korlát | A Cowork-indulás élő próbája hiányzik |
| AT-02, AC-14 | Fontos | A kézi ZIP-út megszakítás után vegyes tananyagot hagyhat |
| AT-03 | Kisebb | A nyers GitHub-cím kimaradt a Desktop ellenőrzőlistájából |
| AT-04 | Fontos | Az újrafuttatás elavult helyi futtatókönyvből indulhat |
| AT-05 | Fontos | A Git-forrás és a kiadási csomag fájlszáma eltér, a küszöb egyetlen szám volt |
| AT-06, AC-13 | Fontos | Az engedélyekről eltérő szabályok szerepeltek |
| AT-08, AC-12 | Fontos | A stratégia fájlja nem volt kijelölve az aktív céghez |
| AT-09, AC-10 | Fontos | A gyakorlófiók olvasása `live` jelölést kapott |
| AT-10, AC-17 | Kisebb | Csomagnevek a védett EstiWise oktatói jegyzetben |
| AT-11 | Kisebb | Az örökölt Voice Lab `.htm` fájl kívül esik a scriptellenőrzésen |
| AC-11 | Fontos | A böngészős projektutasítás nem kötötte a partnerpromptokat a Workshop-pontosításokhoz |
| AC-15 | Kisebb | A Claude Code választhatónak látszott működő Cowork mellett |
| AC-16 | Kisebb | Pluginnal és Codexszel két eltérő Ellenőr-indítás látszott |

## Javítások

| Tétel | Javítás | Fájlok |
| --- | --- | --- |
| AT-09, AC-10 | A próba módját a fiók és az adat dönti el: valódi fiók `live`, gyakorlófiók `sandbox`, fájlos mentőút `simulation` | `materials/assistant.md` |
| AT-06, AC-13 | Egy szabály: az eszközengedélyről a résztvevő dönt, a következményt közöljük. A Claude magától nem küld és nem publikál, az ütemezéshez a csatorna, a szöveg és az időpont kifejezett jóváhagyása kell. A rákérdezés az engedélyezési módtól függ | `materials/modules/01-business-foundations.md`, `materials/modules/00-prework.md`, `materials/assistant.md`, `materials/AGENTS.md`, `materials/CLAUDE-CODE.md` |
| AT-02, AC-14 | Minden kézi út sorrendje: külön mappa, ellenőrzés, csere, visszaállítás. A `gaps` kivétel név szerint szerepel | `materials/TELEPITES.md`, `materials/modules/00-prework.md`, `materials/hibaelharitas.md`, `materials/README.md` |
| AT-04 | Az újrafuttatás a közzétett futtatókönyvet olvassa be, összeveti a letöltött példánnyal, és jelenti a forrást és a commitot. Coworkben a plugin pontos verziója „nem ellenőrzött” marad | `materials/TELEPITES.md`, `materials/AGENTS.md` |
| AT-08, AC-12 | Új `sales_strategy_path` mező az `active_business` alatt. Régebbi naplónál a `company_dna_path` mappájából keres, hiánynál megáll és kérdez | `materials/starter-kit/progress.json`, `materials/assistant.md`, `materials/AGENTS.md`, `materials/starter-kit/project-instructions.md`, `tartalom` skill, 01-es modul |
| AC-11 | A projektutasítás minden bemásolt partnerprompt előtt alkalmaztatja a Workshop-pontosításokat | `materials/starter-kit/project-instructions.md` |
| AT-05 | A kész feltétel forrásonként adja meg a számot: Git-forrás 161, kiadási csomag 159 | `materials/TELEPITES.md`, `materials/modules/00-prework.md` |
| AT-03 | A `raw.githubusercontent.com` bekerült a Desktop-listába és a felmérés sablonjába | `materials/modules/00-prework.md`, `materials/starter-kit/felmeres.md` |
| AC-15 | A Claude Code csak akkor mentőút, ha a Cowork nem indul | `materials/CLAUDE-CODE.md`, `materials/assistant.md`, `materials/README.md` |
| AC-16 | Az alügynökös mondat a Claude-Ellenőr esetére szűkült | `materials/starter-kit/agents/README.md` |

## Szándékosan nyitva hagyott tételek

| Tétel | Miért nyitott? |
| --- | --- |
| AT-01 | Élő Cowork-próba kell hozzá, szöveggel nem zárható le |
| AT-10, AC-17 | A védett oktatói jegyzet nem változhat, a tilalom hatóköréről külön döntés kell |
| AT-11 | A kapu hatókörének bővítése nem része ennek a javításnak |

## Nyitott lefedettségi korlátok

- **Cowork:** a telepítő mondat, a plugin hozzáadása, az alügynökök indulása és a Connectors fül élőben nem volt próbálva.
- **macOS:** semmilyen út nem futott macOS-en.
- **Connector-belépés:** a négy partnerkapcsolat belépése és olvasási próbája élőben nem volt próbálva.
- **Javított szövegek:** a mostani javítások viselkedését nem figyeltük meg futó munkamenetben. A kézi ZIP-út új sorrendjét nem járta végig résztvevő.
- **Codex-átadás és bemásolt partnerprompt:** tényleges futásuk nem volt megfigyelve.
- **Node 24:** a helyi kapuk Node 26 alatt futottak, a repó és a CI Node 24-et ír elő.
