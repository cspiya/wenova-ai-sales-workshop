# Telepítési próba tiszta Claude Code-profilon (WEN-1223, WEN-1225)

**Ítélet: PARTIAL, NOT_READY.** A Windows Claude Code-út a próbákon végigment. A Cowork, a macOS és a connector-belépés élő próbája hiányzik. Ez a maker saját próbája, nem független review.

| Adat | Érték |
| --- | --- |
| Ticket | WEN-1223 és WEN-1225, szülő: WEN-1220 |
| Próba napja | 2026-11-19 |
| Vizsgált revíziók | T1–T11: `b299d73`. T12, U1–U5, R1: `23b9801`. Második kör: `16b27bf` |
| Környezet | Windows 11 Pro, Claude Code 2.1.327, Node v26.13.1. A repó és a CI Node 24-et ír elő |
| Forrás | A WEN-1223 ág helyi klónja és helyi marketplace-útvonal |
| Mintacég | `materials/scenarios/office-plants` (IrodaLiget, kitalált) |
| Védelem | `ENABLE_CLAUDEAI_MCP_SERVERS=false`, a plugin négy connectorának eszközei tiltva |

## Összefoglaló

- T1–T10 és T12 sikeres. T11 a tervtől eltérően futott: a Karmester már a munka előtt megállt az ellentmondó feltételnél. A háromkörös korlátot T10 igazolja.
- Friss automatizált telepítés a második körben: **71,1 mp** (plugin 1,6 mp, tananyag 69,5 mp). Az első körben 78,9 mp volt.
- A mért idő két automatizált lépés összege. Az emberi kattintás, a belépés és a jóváhagyás ideje nincs benne.

## Tesztek

| # | Művelet | Elvárt | Megfigyelt | Idő | Eredmény |
| --- | --- | --- | --- | --- | --- |
| T1 | `claude --version` | Legalább 2.1.292 | 2.1.327 | 1,3 mp | PASS |
| T2 | `claude plugin validate` a marketplace-re és a pluginra | Sikeres validálás | Helyben mindkettő sikeres, a marketplace-nél verziófigyelmeztetéssel. Nyilvános katalógushoz a licenc hiánya kizáró hiba, az ikon és az adatvédelmi URL hiánya figyelmeztetés | 2,4 és 1,0 mp | PASS |
| T3 | Plugin telepítése helyi marketplace-ről | Sikeres, user scope | Sikeres, enabled | 1,1 mp | PASS |
| T4 | `claude plugin details` | 8 skill, 7 agent, 4 MCP-szerver | Ugyanez | 1,6 mp | PASS |
| T5 | `claude mcp list` | 4 szerver „Needs authentication” | Brandiseer, Sales Bot, EstiWise, Buffer ebben az állapotban | 3,9 mp | PASS |
| T6 | Egy nem interaktív kérés | Válasz érkezik | „KÉSZ” | 6,1 mp | PASS |
| T7 | A telepítő mondat a helyi futtatókönyvvel | ✅ lista, fájlszám, 8 agentfájl | 153 fájl, 8 agentfájl, plugin, `Munka/` hat almappával, gyökérutasítások | 77,8 mp | PASS |
| T8 | `/wenova-sales-workshop:beallitas` új munkamenetben | Pontos lista, kitalált siker nélkül | 21 soros lista. A connectorok és a levelező ⚠️ jelölést kaptak, a nyitott tételek a `gaps` listába kerültek | 50,7 mp | PASS |
| T9 | Karmester-poszt válasszal és jóváhagyással | Célzott kérdés, „Erre gondoltál?”, jóváhagyásig nem ír | Író, Ellenőr JAVÍTANDÓ, javítás, friss Ellenőr MEGFELEL. A körszám látszott | 366,3 mp | PASS |
| T10 | Szándékosan hibás poszt a Karmesternek | Ellenőr BLOKKOLÓ, javítás, körszám | BLOKKOLÓ, JAVÍTANDÓ, JAVÍTANDÓ. A 3. kör után megállt, döntési csomagot adott | 422,9 mp | PASS |
| T11 | Teljesíthetetlen feltétel | 3 kör után megáll | A munka előtt jelezte az ellentmondást, és döntést kért | 209,5 mp | PASS, eltéréssel |
| T12 | A telepítő mondat újra, meglévő `Munka/` fájllal | `Munka/` érintetlen, a régi `Tananyag/` átnevezve | A `Munka/` SHA-256 listája azonos, a régi mappa egyedi néven megmaradt | 74,8 mp | PASS |

### Javítás utáni újrafuttatás

| # | Művelet | Megfigyelt | Idő | Eredmény |
| --- | --- | --- | --- | --- |
| U1 | `claude plugin marketplace update wenova-workshop` | Sikeres | 1,6 mp | PASS |
| U2 | `claude plugin update wenova-sales-workshop@wenova-workshop` | `b299d736141f` verzióról `23b98012a8fb` verzióra frissült | 3,3 mp | PASS |
| U3 | `claude plugin list` | Az új verzió, enabled | 2,0 mp | PASS |
| U4, U5 | `claude plugin validate` | Sikeres, figyelmeztetésekkel | 1,7 és 1,4 mp | PASS |
| R1 | Karmester-kör a javított Író-szabállyal | MEGFELEL az első körben. Egyetlen futás, a javítás hatását önmagában nem bizonyítja | 196,7 mp | PASS |

### Második kör (`16b27bf`)

| # | Művelet | Megfigyelt | Idő | Eredmény |
| --- | --- | --- | --- | --- |
| A | A telepítő mondat újra, régebbi pluginnal és meglévő munkával | 159 fájl. A plugin a letöltött commitra frissült. A `Munka/` hashlistája azonos. A régi tananyag egyedi néven megmaradt | 91,4 mp | PASS |
| B1 | Plugin friss telepítése eltávolítás után | Sikeres, user scope | 1,6 mp | PASS |
| B2 | `claude plugin details` | 8 skill, köztük a `markahang`, 7 agent, 4 MCP-szerver | 2,0 mp | PASS |
| B3 | `claude mcp list` | A négy plugin-connector „Needs authentication” | 3,8 mp | PASS |
| B4 | A telepítő mondat új mappában | 159 fájl, 8 szerepfájl, plugin | 69,5 mp | PASS |
| B5 | `Kezdjük a felkészülést.` | Elkészült a `felmeres.md`. A Desktop-beállításokat a futás nem látta, és ezt ki is mondta | 99,1 mp | PASS |

### Scoop-mentőút, elszigetelt próba

| Lépés | Parancs | Eredmény | Idő |
| --- | --- | --- | --- |
| S1 | A Scoop hivatalos telepítője | Scoop telepítve | 29,0 mp |
| S2 | `scoop install 7zip git claude-code` | 7zip 26.06, git 2.56.1, claude-code 2.1.327 | 36,4 mp |
| S3 | `claude --version` | 2.1.327 | 1,9 mp |
| S4 | `scoop install ffmpeg sox espeak-ng whisper-cpp nodejs-lts uv` | Mind a hat csomag települt | 52,5 mp |

A próba után a felhasználói környezet, a Scoop-beállítás és a végrehajtási házirend változatlan volt, a próbamappa törölve lett.

## Hibák

| # | Súly | Állapot | Leírás |
| --- | --- | --- | --- |
| H1 | Blokkoló | Javítva (`34e1b45`) | Két szerepfájl relatív linkje törött lett volna a plugin másolatában |
| H2 | Közepes | Javítva (`61dc6b8`) | Az Író példát kért, a kitalált ügyféltörténet viszont tilos |
| H3 | Kisebb | Javítva (`23b9801`) | A kivetítő oldalon a mappanév két sorra tört |
| H4 | Közepes | Javítva | A kiadási csomagból hiányzott a plugin két rejtett konfigurációja. A `release.cjs` már listázza őket |
| H5 | Közepes | Javítva | A modulok még öt agentet és régi fájlszámot írtak |
| H6 | Kisebb | Megfigyelés | A mintacég hangprofilja keresztnevet kér az aláírásba, a név nincs megadva. A Karmester ilyenkor helyesen rákérdez |

## A bizonyíték határa

- **Cowork:** a plugin hozzáadása, az alügynökök betöltése, a Connectors fül és az Upload plugin út nem volt próbálható.
- **macOS:** nem futott próba.
- **Connector-belépés:** az OAuth emberi művelet, a négy connector „Needs authentication” állapotban maradt.
- **Publikált címek:** a nyers GitHub-cím és a marketplace-cím a main ágra kerülés előtt nem próbálható. A próba helyi klónnal futott.
- **Profil tisztasága:** a próbaprofilban négy, a fiókhoz szinkronizált plugin is megjelent. A naplókban connector-eszköz hívása nem szerepel.
- **Fájlszám:** a próbák idején 153, majd 159 fájl volt. A jelenlegi Git-forrás 161, a kiadási csomag 159 fájl.
- **Node 24:** a próba Node 26 alatt futott.
- **Emberi idő:** a kattintások, a belépések és a jóváhagyások ideje nincs mérve.


## Utolsó független ellenőrzés (2026-11-19)

**Vizsgált revízió:** `8ecd055`. **Ítélet:** REVISE, lefedettség PARTIAL.

| Súly | Megállapítás | Javítás |
| --- | --- | --- |
| BLOKKOLÓ | A futtatókönyv minden eltérő letöltött példányt újabbnak tekintett. | A `main` ágról letöltött példány az irányadó, hiányzó pluginmappánál a csere előtt megáll. |
| FONTOS | A Cowork-frissítés összemosta a marketplace-ről és a fájlból telepített plugint. | Külön út a két esetre, az Anthropic Cowork-dokumentációja szerint. |
| FONTOS | Az első DNS-mentés nem rögzítette az értékesítési stratégia útvonalát. | Az útvonal az első mentéskor bekerül a haladási naplóba. |
| KISEBB | A kézi másolás kész feltétele és a Karmester szerepleírása pontatlan volt. | Mindkét szöveg pontosítva. |

A javítások után új független kör nem futott, mert a tulajdonos legfeljebb egy további kört engedett (WEN-1220/D14). A Cowork, a macOS és a connector-belépés élő próbája nyitott.
