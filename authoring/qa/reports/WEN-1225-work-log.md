# Munkanapló: WEN-1225: előre konfigurált agentikus keretrendszer

| Mező | Érték |
|---|---|
| Jegy | WEN-1225 (szülő: WEN-1220) |
| Ág | `cspiya/wen-1225-5-elore-konfiguralt-agentic-keretrendszer` |
| Méret és módszer | közepes (maker agent, a független review a koordinátornál) |
| Indította | koordinátor agent, 2026-11-19 |
| Állapot | emberre és független reviewra vár |
| Utómunka ága | `agent/wen-1225-followup` (alap: `main` `e5eb3cc`), 2026-11-22 |

## Kérés

Telepíthető plugin a workshophoz: marketplace, négy connector-cím, hét alügynök, nyolc skill, a másolatokat újrageneráló build és az eltérést kimutató teszt. A WEN-1221/D2 ütemezési döntés beépítése, a nem modul szövegek frissítése nyolc szerepre.

**Utómunka, 2026-11-22.** A tulajdonos jóváhagyta („jöhet a WEN-1225”), a terv a WEN-1225 jegy 2026-11-22-i kommentjében van. Egy csak olvasó hiánykeresés öt pontot talált: az Író mindig új ellenőri beszélgetést kért, a Karmester skill lépései kézzel másolt duplikátumok teszt nélkül, nincs kapcsolatonkénti tábla, a Buffer bekötése ellentmondásos, és a kiadási kapu 7–8. sorában nincs connectoronkénti eredmény. A 02-es, 03-as és 04-es partnermodul nem módosítható (WEN-1220/D7).

## Lépések

| # | Dátum | Session | Lépés | Eredmény |
|---|---|---|---|---|
| 1 | 2026-11-19 | 6b54de9a | A másik maker szerepfájljainak és skilljeinek külön commitja | `b0fea85` |
| 2 | 2026-11-19 | 6b54de9a | Marketplace, plugin, `authoring/qa/plugin.cjs`, `plugin.test.cjs`, szövegek | `34e1b45` |
| 3 | 2026-11-19 | 6b54de9a | A tiszta profilos próba hibájának javítása az Író műfaji szabályában | `61dc6b8` |
| 4 | 2026-11-22 | session_01YaXeW54cfqpq6AbL96mRzd (koordinátor) | Csak olvasó hiánykeresés, terv a jegyen, maker brief | öt feladat, a 02–04-es modul kizárva |
| 5 | 2026-11-22 | maker alügynök a koordinátor sessionjében (saját azonosítója nem ismert) | Az Író kézi útja, Karmester parity-teszt, kapcsolattábla, Buffer javítás, kiadási kapu sorai | `writer.md` és plugin-másolata, `karmester-parity.test.cjs`, `TELEPITES.md`, `00-prework.md`, `assistant.md`, `2026-11-19-kiadasi-kapu.md`, újraépített `.plugin` |
| 6 | 2026-11-22 | ugyanaz | `npm ci --ignore-scripts`, `npm run plugin:build`, `npm run render`, `npm test`, `npm run check`, `npm run prepare:push` | lásd Tesztek |

## Döntések

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
|---|---|---|---|---|---|---|---|
| WEN-1225/D3 | 2026-11-19 | A `.plugin` csomag tömörítés nélküli ZIP, rögzített időbélyeggel | AI (maker) | A bájtazonos összehasonlítás így nem függ a Node zlib-verziójától. Alternatíva: tartalom szerinti összevetés, ez bonyolultabb teszt lett volna | Reprodukálható build követelménye | nincs | 6b54de9a session |
| WEN-1225/D4 | 2026-11-19 | Az `orchestrator.md` és a `crm.md` relatív linkje kódos útvonal lett | AI (maker) | A bájtazonos másolat a plugin mappájában törött linket adott volna, a kapu kódja így változatlan maradt | Kapu linkellenőrzése | nincs | 6b54de9a session |
| WEN-1225/D5 | 2026-11-22 | Az Író alügynökként és a Karmester tartalék útján a csomagot a Karmesternek adja, aki az `orchestrator.md` 7. lépése szerint választ Ellenőrt. Új ellenőri beszélgetést csak a kézi úton kér: közvetlen `Író:` indításnál, vagy ha a Karmester jelezte, hogy az Ellenőr nem indítható alügynökként. A javítás utáni csomagra ugyanez vonatkozik | AI (maker) | Az `orchestrator.md` 20. és 33–35. sora a Karmesterre bízza az Ellenőr választását. Alternatíva: a mondat törlése, ez a közvetlen `Író:` utat hagyta volna ellenőrzés nélkül | WEN-1225 terv (2026-11-22) | nincs | session_01YaXeW54cfqpq6AbL96mRzd |
| WEN-1225/D6 | 2026-11-22 | A parity-teszt a `## Munkamenet` szakasztól a fájl végéig a teljes közös törzset hasonlítja, nem csak az 1–10. lépést. Három engedett eltérés van, név szerint a tesztben: a bevezető, a `wenova-sales-workshop:writer` név és az `orchestrator.md` saját „Ügyféleset az 5. blokkban” szakasza | AI (maker) | A Munkanapló, a Tartalék és a Közös határok szakasz is kézzel másolt duplikátum. Ha egy engedett eltérés eltűnik, a teszt hibát ad, így a lista nem lazul csendben. Alternatíva: csak az 1–10. lépés, ez a többi másolt szakasz eltérését nem venné észre | WEN-1225 terv, 2. feladat | nincs | session_01YaXeW54cfqpq6AbL96mRzd |
| WEN-1225/D7 | 2026-11-22 | A kapcsolattábla a `TELEPITES.md` „Kapcsolatok egyenként” alszakaszában van (`#kapcsolatok`), a 6/a lépés és a „Mi marad kézi?” rész után. A felkészülési modul 2. leckéje és az `assistant.md` kapcsolatkapuja csak hivatkozik rá. Az Outlook (Microsoft 365) a Gmail sorában szerepel, nem külön sorban | AI (maker) | Egy forrás, nincs ismétlés. A címek csak a `.mcp.json` fájlból valók, a tábla kimondja, hogy várt menetet ír le, nem kipróbált eredményt | WEN-1225 terv, 3. feladat | nincs | session_01YaXeW54cfqpq6AbL96mRzd |
| WEN-1225/D8 | 2026-11-22 | A Buffer a pluginnal érkezik, választható, a plugin Connectors fülén köthető be. A felkészülési modul és az `assistant.md` figyelmeztet, hogy a Customize → Connectors listából ne adják hozzá még egyszer. A védett `02-content-marketing.md` 69. és 396. sora továbbra is a Customize → Connectors utat írja, ezt nem módosítottuk | AI (maker) | A `.mcp.json` és a plugin README már a pluginba csomagolja a Buffert. A 02-es modul a WEN-1220/D7 miatt nem módosítható, ezért javasolt feladat lett | WEN-1225 terv, 4. feladat; WEN-1220/D7 | nincs | session_01YaXeW54cfqpq6AbL96mRzd |
| WEN-1225/D9 | 2026-11-22 | A kiadási kapuban a 7–8. sor connectoronkénti eredménye a főpróba-tábla alatti külön táblába került, üres eredménycellákkal | AI (maker) | A főtábla sorszámaira a szöveg hivatkozik („A 4. sor”), a sorok bontása ezt összekeverte volna. Eredményt nem töltöttünk ki | WEN-1225 terv, 5. feladat | nincs | session_01YaXeW54cfqpq6AbL96mRzd |
| WEN-1225/D10 | 2026-11-22 | A munkanapló a meglévő `WEN-1225-work-log.md` folytatása, az új döntések D5-től számozódnak | AI (maker) | A brief D3-tól kért számozást, de a naplóban D3 és D4 már szerepelt. Második napló két forrást adott volna ugyanarra a jegyre | WEN-1225 terv, 6. feladat | nincs | session_01YaXeW54cfqpq6AbL96mRzd |

## Review körök

Független review még nem futott, az utómunkára sem. A maker saját ellenőrzése nem számít függetlennek.

## Félreértések és javítások

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
|---|---|---|---|---|---|---|---|
| C1 | 2026-11-19, tiszta profilos próba; 6b54de9a; Opus 5.5 | A poszt egy körben átmenjen, ha a tények rendben vannak | Az Ellenőr a hiányzó példa miatt kört veszített, miközben kitalált ügyféltörténet tilos | maga az agent | hiányzó kontextus (`missing context`) | Az Író műfaji szabálya kimondja, hogy a példa a szolgáltatás tartalmából is jöhet | Egymásnak feszülő szabályt próbafutás mutat ki, szövegolvasás nem |
| C2 | 2026-11-22, utómunka; maker alügynök; Opus 5.5 | A döntések D3-tól számozódjanak | A naplóban D3 és D4 már létezett, a D3-tól induló számozás ütközött volna | maga az agent | hiányzó kontextus (`missing context`) | A számozás D5-től indul (WEN-1225/D10), újramunka nem kellett | A brief előtt a meglévő napló azonosítóit is nézd meg |

## Tesztek

Vizsgált revízió: `61dc6b8`. `npm run render`, `npm run check` (22 HTML-oldal, 1200 helyi hivatkozás, 20 lecke) és `npm test` (15 sikeres, 0 hibás), helyben Node 26 alatt. `claude plugin validate` a marketplace-re és a pluginra: sikeres, figyelmeztetésekkel. Korlát: a CI Node 24 alatt fut, ezt helyben nem futtattam.

**Utómunka, 2026-11-22.** Vizsgált állapot: `e5eb3cc` és a PR munkafa-változásai, helyben Node 26 alatt (a CI Node 24 alatt fut). A pontos head-revíziót a pull request mutatja.

| Teszt | Eredmény |
|---|---|
| `npm ci --ignore-scripts` | sikeres |
| `npm run plugin:build` | `PASS: 8 plugin copies and materials/plugin/wenova-sales-workshop.plugin` |
| `npm run render` | `PASS: 28 presentation sources.` |
| `npm test` | 34 teszt, 34 sikeres, 0 hibás (az új `karmester-parity.test.cjs` két tesztjével) |
| `npm run check` | `PASS: 28 current HTML pages; 1827 local references; 20 lessons.`, fájlt nem módosított |
| `npm run prepare:push` | tíz változott fájl, `PASS: 28 current HTML pages; 1827 local references; 20 lessons.` |

Nem futott és nem is futtatható itt: élő Cowork-próba, fiókbelépés és olvasási füstpróba bármelyik connectorral, macOS-próba, Codex-reviewer futás. Egyik kapcsolatot sem próbáltuk ki.

## Emberre váró nyitott pontok

- Élő Cowork-próba a plugin hozzáadásával és a kapcsolattábla szerinti bekötéssel.
- Fiókbelépés és olvasási füstpróba connectoronként (Gmail, Google Drive, Brandiseer, Sales Bot, EstiWise, Buffer), az eredmény a kiadási kapu connectoronkénti táblájába.
- macOS-próba (telepítés, kézi út, rejtett fájlok).
- Codex-reviewer futás az Ellenőr szerepében.
- A modulok ready állapota: szakmai és oktatói próba, megnevezett elfogadó.
- Kiadási döntés.

## Tanulságok és javasolt feladatok

- A kiadási csomag (`release.cjs`) a ponttal kezdődő fájlokat kihagyja, így a plugin mappájából hiányzik a `.claude-plugin/plugin.json` és a `.mcp.json`. Külön feladat javasolt.
- Kézzel másolt utasítás mellé az első naptól teszt kell, különben a két példány csendben elválik (D6).

| # | Forrás | Súlyosság | Javaslat | Triázs döntés |
|---|---|---|---|---|
| T1 | D8 | MAJOR | A védett `materials/modules/02-content-marketing.md` 69. és 396. sora a Buffert a Customize → Connectors listába köti be, ez a pluginos Buffer mellett kettős kapcsolatot ad. A 02-es modul gazdájának jóváhagyásával igazítani kell | nyitott |
| T2 | D8 | MINOR | Az `operations/instructor-notes/00-prework.md` 58. sora a Buffert még a Customize → Connectors listában teszteltetné. Igazítani a pluginos útra | nyitott |
