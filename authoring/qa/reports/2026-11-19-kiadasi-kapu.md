# Kiadási kapu és főpróba-lista (WEN-1226)

**Összesítés:** a közzétett oldal elérhető, két eltéréssel. A telepítési próba NEM fejeződött be, az első indítás felmérése NEM futott. A `release:check` nyitott. Emberi főpróba nem történt, ez a jegyzőkönyv nem jóváhagyás.

## 1. Vizsgált változat és lefutott ellenőrzések

| Adat | Érték |
| --- | --- |
| Vizsgált revízió | `453456dbd96b22e62b3450418465005a00cb3cb5` (`origin/main`) |
| Dátum | 2026-11-19, 03:58 és 04:07 között (helyi idő) |
| Ág | `cspiya/wen-1226-6-kiadasi-kapu-es-foproba-a-releasecheck` |
| Materials SHA-256 | `f6c5bd3985e4e87192ce260fe521314714fffc60c321d485536e464c7f72447e` |
| Környezet | Windows 11, Node.js v26.13.1, npm 11.20.0, Claude Code 2.1.327 |
| Eltérés a környezetben | A `package.json` Node.js 24-et ír elő (`>=24 <25`), a futás v26.13.1 alatt történt |

| Parancs | Kilépési kód | Pontos eredmény |
| --- | --- | --- |
| `npm run check` | 0 | `PASS: 26 current HTML pages; 1616 local references; 20 lessons.` |
| `npm test` | 0 | `tests 32`, `pass 32`, `fail 0`, `cancelled 0`, `skipped 0`, `todo 0` |
| `npm run release:check` | 1 | A technikai kapu `PASS`, utána 54 nyitott pont (lásd a 4. szakaszt) |

A jegyzőkönyv megírása után a `npm run check` és a `npm test` újrafutásának eredménye a 7. szakaszban szerepel.

## 2. Eredmények

### 2.1 Közzétett oldal

Forrás: `https://cspiya.github.io/wenova-ai-sales-workshop/`, névtelen HTTP-kérésekkel, 2026-11-19 03:58-kor.

| Ellenőrzés | Eredmény | Részlet |
| --- | --- | --- |
| Hallgatói oldalak a `materials/` alatt | 17/17 válasz 200 | |
| HALLGATÓI ANYAG sáv | **16/17** | Hiányzik: `materials/presentations/05-zaro-eloadas.html` (egyedi előadás, nem a generátor készíti) |
| Főoldal, `operations/`, `authoring/` és az oktatói oldalak | 12/12 válasz 200, OKTATÓI OLDAL sáv látszik | |
| Helyi linkek és képek a hallgatói oldalakon | 422 hivatkozás, 77 egyedi cél, ebből 64 kép: 0 hibás | Horgonyhiba: 0 |
| CSS-ben hivatkozott helyi fájlok | 6/6 válasz 200 | |
| Külső linkek a hallgatói oldalakon | 38-ból 37 válasz 200 | **1 hibás:** 404, lásd H-1 |
| Közzétett fájlok egyezése az `origin/main` ággal | 163/163 bájtra azonos | HTML, CSS, PNG, SVG, MD |
| Nyers futtatókönyv (`TELEPITES.md`) | 200, 16 854 bájt, bájtra azonos az `origin/main` példánnyal | SHA-256: `02e69456300e89d9df07489da0b1e009dc1bfb1fbdc0fbba58acb16636848545` |
| ZIP-letöltés | 200, 1 368 947 bájt, átirányítás a `codeload.github.com` címre | A ZIP megjegyzése a vizsgált commit, sértetlen |
| ZIP tartalma | Megvan: `materials/VERSION` (0.1.0), `materials/plugin/wenova-sales-workshop.plugin`, `.claude-plugin/marketplace.json` | 166 fájl a `materials/` alatt |
| QR-kód (`materials/assets/indulas-qr.png`) | Dekódolva (ffmpeg, quirc): `https://cspiya.github.io/wenova-ai-sales-workshop/materials/` | A cél válasza 200, a sáv látszik |
| Nyitó előadás | **Függőben** | Még nincs a `main` ágon, ez nem hiba |

### 2.2 Telepítési próba a közzétett forrásból

**Eredmény: nem fejeződött be.** Az ok a próba saját engedélybeállítása, a futás nem igazol tananyaghibát, de a telepítés sikerét sem.

| Adat | Érték |
| --- | --- |
| Profil | Elkülönített Claude Code-profil, bejelentkezve (claude.ai) |
| Munkamappa | `C:\zulu\_wt\_clean\final-test\Wenova-AI-Sales-Workshop`, induláskor üres |
| Bemenet | A pontos résztvevői mondat a közzétett `TELEPITES.md` címmel |
| Indulás és vége | 04:00:51 és 04:02:00 |
| Eltelt idő | **68,6 másodperc a leállásig**, ez nem teljes telepítési idő |
| Lépések, engedélyelutasítások | 21 kör, 5 elutasított parancs |
| Munkamenet-azonosító | `cfe46963-f835-48b4-afac-a2680137dfb0` |

A futás a `cp -R` másolásnál állt meg, mert a próba engedélybeállítása ezt a parancsot elutasította. A Claude ezután nem próbált más másolási módot, hanem jóváhagyást kért. A futás nem interaktív, így jóváhagyás nem érkezhetett.

| Ellenőrzés a lemezen | Eredmény |
| --- | --- |
| Letöltés ideiglenes mappába | Megfelel: commit `453456dbd96b`, `VERSION` 0.1.0, 166 fájl a `materials/` alatt |
| Átmeneti `Tananyag.uj-20261119-040134` mappa | Létrejött, üres |
| `Tananyag/VERSION` | **Nem jött létre** |
| Fájlszám a `Tananyag/` alatt | **0** (a futtatókönyv elvárása git-forrásból legalább 161) |
| Nyolc szerepfájl | **Nem jött létre** |
| Pluginfájlok a `Tananyag/plugin/` alatt | **Nem jöttek létre** |
| `Munka/` almappák | **Nem jöttek létre** |
| Gyökérben `AGENTS.md`, `CLAUDE.md` | **Nem jöttek létre** |

**„Kezdjük a felkészülést.” új munkamenetben: nem futott.** Az előfeltétele, a kész telepítés hiányzik, ezért az első indítás felméréséről nincs megfigyelés. A megbízás két futást engedett, ezért a telepítést nem indítottam újra.

**A próba korlátai:** a profilban már volt egy korábbi plugin (`wenova-sales-workshop`, `16b27bf77067`, helyi mappából telepítve), tehát a profil nem teljesen tiszta. A `claude plugin` parancsokat a próba szándékosan tiltotta, mert a profilt módosítanák, így a plugin telepítési útja nem volt próbálva.

## 3. Döntési napló

A forrás minden sornál a Linear-ticket kommentje, a komment azonosítójának elejével. A döntéseket az ágens rögzítette a tulajdonos üzenete alapján.

| Azonosító | Döntés | Döntő szerepe | Forrás |
| --- | --- | --- | --- |
| WEN-1220/D1 | A talált hibák minden adata a ticketből érhető el; a repóba képernyőkép és nyers napló nem kerül | Tulajdonos | WEN-1220, `2c864ee7` |
| WEN-1220/D2 | A hangdemóban a LATE20 kupon 20 százalék marad | Tulajdonos | WEN-1220, `49dcd5ff` |
| WEN-1220/D3 | A demó JS-e egyetlen fájlra szóló kivételt kap a `check-repository.cjs` listáján, az ellenőrző a `.htm` fájlokat is vizsgálja | Tulajdonos | WEN-1220, `49dcd5ff` |
| WEN-1220/D4 | A hangdemó csak modell-modell módban fut, és csak akkor látható, ha reggel a vetítő gépen működik, különben kimarad | Tulajdonos | WEN-1220, `49dcd5ff` |
| WEN-1220/D5 | A tulajdonos egyszer belép egy tiszta Claude Code-profilba; a Cowork és a fiókok hitelesítése a reggeli próbalistára kerül | Tulajdonos | WEN-1220, `49dcd5ff` |
| WEN-1220/D6 | A terv jóváhagyva: sorrend, szerepek, modellek, ticketenként külön ág és PR | Tulajdonos | WEN-1220, `49dcd5ff` |
| WEN-1220/D7 | A többi előadó anyagához (02, 03, 04) csak külön engedéllyel lehet nyúlni | Tulajdonos | WEN-1220, `b5ca4705` |
| WEN-1220/D8 | Formai módosítás megengedett, tartalmi módosítás előtt egyeztetni kell a tulajdonossal | Tulajdonos | WEN-1220, `68291334` |
| WEN-1220/D9 | A 02, 03, 04 modulban és oktatói jegyzetben vissza kell állítani az eredeti tartalmat | Tulajdonos | WEN-1220, `a8084b46` |
| WEN-1220/D10 | A Brandiseer állóképet mutat; a narrált videót a Wenova külön demóban mutatja a nap végén. Felülírja a WEN-1221/D1 rögzítését | Tulajdonos | WEN-1220, `a8084b46` |
| WEN-1220/D11 | A „hangprofil” és az „üzleti alaplap” kifejezést a teljes tananyagban cserélni kell | Tulajdonos | WEN-1220, `a8084b46` |
| WEN-1220/D12 | Terminológiai javaslat: márkahang és cégprofil; a fájlnevek maradnak | Ágens (javaslat) | WEN-1220, `a8084b46` |
| WEN-1220/D13 | Az ellentmondásokat a Wenova saját utasításai kezelik, az előadók fájljai érintetlenek; hibalista és levélpiszkozat készül | Tulajdonos | WEN-1220, `ad2b4482` |
| WEN-1220/D14 | Merge-utasítás: a nyitott munkák sorrendben a `main` ágra kerülhetnek, legfeljebb egy ellenőrzési körrel; a Cowork-próba nem feltétel | Tulajdonos | WEN-1220, `f0e8e19d` |
| WEN-1220/D15 | Az ágens közvetlenül GitHubon merge-elheti a három megnevezett PR-t (hallgatói arculat, telepítő és AI-csapat, nyitó előadás) | Tulajdonos | WEN-1220, `14351ada` |
| WEN-1221/D1 | IG-10 videó: bemutatóként szerepel. A WEN-1220/D10 felülírta | Tulajdonos | WEN-1221, `273e02d6` |
| WEN-1221/D2 | IG-11: az ütemezést nem tiltjuk, de fel kell hívni a figyelmet, hogy a beütemezett poszt ki is megy | Tulajdonos | WEN-1221, `273e02d6` |
| WEN-1221/D3 | IG-21 ajánlatadó: az EstiWise csapata bemutatja | Tulajdonos | WEN-1221, `273e02d6` |
| WEN-1221/D4 | IG-51: a kötelező Claude-előfizetést e-mailben kommunikáltuk, lezárva | Tulajdonos | WEN-1221, `273e02d6` |
| WEN-1221/D5 | IG-63 vacsora: választható program, mindenki maga fizeti, lezárva | Tulajdonos | WEN-1221, `273e02d6` |
| WEN-1229/D1 | Szakmai review minden diára és diánkénti előadói jegyzet a nyitó előadáshoz | Tulajdonos | WEN-1229, `ec973477` |
| WEN-1229/D2 | A backpropagation, az attention és a transformer diáit érthetően újra kell írni | Tulajdonos | WEN-1229, `a0c23e83` |
| WEN-1229/D3 | Két nagyságrendi dia kell a nyitó előadásba, a digitalizált és tanítási adat mennyiségével kiegészítve | Tulajdonos | WEN-1229, `57ad29c0`, `1af02c76` |
| WEN-1225/D2 | Az agentikus rész végére bekerül a munkanapló | Tulajdonos | WEN-1229, `68ad58b9` |
| WEN-1235/D1 | A záró rész 15-20 perc bemutató, utána a résztvevők saját előfeltételeik szerint dolgoznak | Tulajdonos | WEN-1235, `594224c3` |
| WEN-1235/D2 | A záró előadás és a munkafüzet PR-je merge-elhető a végső ellenőrzés és a zöld CI után. Kiterjeszti a WEN-1220/D15 engedélyt | Tulajdonos | WEN-1235, `d88834c9` |
| WEN-1235/D3 | A saját kampány valódi számai nem kerülnek az előadásba, legfeljebb szám nélküli helykitöltő dia | Tulajdonos | WEN-1235, `2bfd556a` |

**Nyitott a ticketek szerint:** IG-44 (a partnerfiókok „előre létrehozása”, WEN-1221) és a Facebook- és GA4-adatok élő lekérésének módja (WEN-1235/D2). Az utóbbihoz az oktatói jegyzet már a Windsor.ai-t nevezi meg.

## 4. A `release:check` állapota

**Eredmény: nem teljesül (kilépési kód 1), 54 nyitott pont.** A lecke- és modulállapotot, valamint a `release-approval.md` fájlt nem módosítottam.

| Nyitott pont | Darab | Miért marad nyitva |
| --- | --- | --- |
| `module is not ready` (00, 01, 02, 03, 04, 05) | 6 | A `ready` állapothoz szakmai és oktatói próba kell, ilyen nem történt |
| `lesson N is not ready`: 00-s modul 5 lecke, 01-05 modulok 3-3 lecke | 20 | Ugyanez, leckénként |
| `unfinished status or placeholder` (00, 01, 02, 03, 04, 05) | 6 | A modulok állapotjelölése még nem végleges |
| `Release decision is not approved` | 1 | Nincs emberi kiadási döntés |
| `Missing human approver` | 1 | Nincs megnevezett jóváhagyó |
| `Missing approval date` | 1 | Nincs jóváhagyás, így dátum sincs |
| `Approval does not match current materials SHA-256` | 1 | A jóváhagyásban nincs rögzített lenyomat |
| `Missing release evidence`: T1, T2, T3, T4, T5 | 5 | A technikai pontokhoz nincs rögzített kiadási bizonyíték |
| `Missing release evidence`: R1, R2, R3, R4, R5, R6, R7, R8 | 8 | A tartalmi reviewk bizonyítéka nincs a jóváhagyásban |
| `Missing release evidence`: P1, P2, P3, P4 | 4 | Emberi próba és szakmai elfogadás nem történt |
| `Missing release evidence`: REHEARSAL | 1 | A teljes nap főpróbája nem történt meg |

## 5. Lefedettségi korlátok

Élőben **nem volt próbálva** ebben a körben:

- Cowork és Claude Desktop felület, a marketplace-es és a feltöltéses plugin-út
- macOS
- Connector-belépések: Gmail, Google Drive és a partner-connectorok
- Windsor.ai, Facebook, GA4
- Buffer, Sales Bot, EstiWise, Brandiseer
- Hangdemó és videódemó
- Teljes telepítés Claude Code-ban, az első indítás felmérése
- Vetítés, böngészős megjelenés, mobilnézet és nyomtatás: az oldalakat csak HTTP-n ellenőriztem
- A helyszíni hálózat

Nem küldtem és nem publikáltam semmit, szolgáltatást nem kötöttem be.

### Talált hibák súly szerint

| Azonosító | Súly | Hely | Leírás |
| --- | --- | --- | --- |
| H-1 | Fontos | `materials/modules/01-business-foundations.md`, 106. sor (és a generált HTML) | A „Wenova OS: döntési szintek” link privát repóra mutat, a résztvevő 404-et kap: `https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/03-decision-levels.md` |
| H-2 | Kisebb | `materials/presentations/05-zaro-eloadas.html` | Nincs rajta HALLGATÓI ANYAG sáv. Egyedi előadás, a generátor nem teszi rá |

A hibákat nem javítottam. A befejezetlen telepítési próba nem tananyaghiba, hanem nyitott ellenőrzés.

## 6. Főpróba-lista az oktatóknak

Egy laptopon, 08:30 előtt, körülbelül 20 perc. Az eredmény oszlopot ember tölti ki. A 4. sor pótolja a be nem fejezett telepítési próbát, ezért ezt ne hagyjátok ki.

| # | Lépés (perc) | Pontos teendő | Siker jele | Hiba esetén | Eredmény |
| --- | --- | --- | --- | --- | --- |
| 1 | Vetítő és Chrome (2) | Kösd be a vetítőt. A `chrome://version` oldalon nézd meg a verziót. Nyisd meg teljes képernyőn: `https://cspiya.github.io/wenova-ai-sales-workshop/materials/presentations/05-zaro-eloadas.html` | A Chrome 133 vagy újabb, a dia olvasható, a lapozás működik | Frissítsd a Chrome-ot, vagy vetíts másik gépről. A nyitó előadást külön nézd meg, ha addigra a `main` ágra került | |
| 2 | Hálózat (1) | A terem hálózatán nyisd meg: `https://github.com`, `https://codeload.github.com`, `https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md` | Mindhárom cím válaszol, a harmadik a futtatókönyvet mutatja. A `codeload` címen a 404 vagy üres oldal is elérhetőséget jelent, tűzfalhiba nem | Kérd a három domain engedélyezését, vagy használj mobilnetet | |
| 3 | Hallgatói oldal és QR (1) | Telefonnal olvasd be a vetített QR-kódot az `indulas.html` oldalról | Megnyílik a `https://cspiya.github.io/wenova-ai-sales-workshop/materials/` oldal, felül HALLGATÓI ANYAG sáv | Írd ki a címet a vetítőre | |
| 4 | Cowork-telepítés marketplace-ről (4) | Hozz létre `Wenova-AI-Sales-Workshop` mappát, majd Projects, +, Use an existing folder. Írd be: `Telepítsd a workshop tananyagát: https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md`. Utána Customize, Plugins, Add, Add marketplace: `cspiya/wenova-ai-sales-workshop`, majd Install a Wenova Sales Workshop pluginnál | Megvan a `Tananyag/VERSION` (0.1.0), a `Munka/` hat almappája, a gyökérben az `AGENTS.md` és a `CLAUDE.md`, a plugin telepítve | Hálózati hibánál Settings, Capabilities, Allow network egress és a domainlista. Ha így sem megy, a futtatókönyv kézi útja | |
| 5 | Feltöltéses tartalékút (1) | Customize, Plugins, Add, Upload plugin: válaszd ki a `Tananyag/plugin/wenova-sales-workshop.plugin` fájlt. Ha a 4. lépésben már telepítve van, elég megnézni, hogy a feltöltő elfogadja a fájlt | A fájl feltölthető, a plugin megjelenik | A nap plugin nélkül is végigvihető az indítómondatokkal, jelezd a résztvevőknek | |
| 6 | Új munkamenet és felmérés (2) | A projekt Instructions mezőjébe: `Kövesd a munkamappa AGENTS.md fájlját. A cégem neve: [cégnév].` Nyiss új munkamenetet, és írd be: `Kezdjük a felkészülést.` | Elindul a felmérés, és létrejön a `Munka/00-Felkeszules/felmeres.md` | Írd be: `Mérd fel a gépem.` Ha ez sem indul, a `/wenova-sales-workshop:beallitas` paranccsal próbáld | |
| 7 | Gmail és Drive (2) | Customize, Connectors: kösd be a Gmailt és a Google Drive-ot. Kérd: `Sorold fel a legutóbbi levelem tárgyát, és keresd a Drive-ban a CRM nevű táblázatot.` | Megjelenik egy levél tárgya és a keresés eredménye, levél nem megy ki | Ellenőrizd a connector engedélyeit. Tartalékút: `Munka/05-Folyamat/crm.csv` | |
| 8 | Partner-connectorok olvasási próbája (3) | A plugin Connectors fülén Add és Connect: Sales Bot, EstiWise, Brandiseer, Buffer. Connectoronként kérj egy olvasást, például: `Csak olvasva sorold fel a Buffer-csatornáimat.` Ne ütemezz és ne küldj semmit | Mind a négy connector olvasási választ ad | Jegyezd fel, melyik nem megy, és annál a blokknál a modul mentőútját használd. A Sales Bot hozzáférését a Blackhole Media adja | |
| 9 | Codex megléte (1) | Terminálban: `codex --version` | Verziószám jelenik meg | Az Ellenőr szerepét a Claude viszi új beszélgetésben | |
| 10 | Hanglabor modell-modell módban (2) | Nyisd meg: `https://cspiya.github.io/wenova-ai-sales-workshop/materials/demos/voice-lab/app.htm`. A Beállításokban add meg a hozzáférési kódot, és indíts Modell-modell, hang beszélgetést a vetítő gépen | Mindkét modell hangja hallható, az átirat megjelenik | A WEN-1220/D4 szerint a demó kimarad | |
| 11 | Záró blokk előfeltételei (1) | A saját fiókkal, csak olvasva, Windsor.ai-on át kérj le egy Facebook-poszt eredményét és kommentjét, valamint egy időszak GA4-munkameneteit. A Bufferben nézd meg a posztlistát | Mindhárom adat kiolvasható | A záró blokkban a minta CSV-vel dolgozz, ahogy az oktatói jegyzet leírja | |

## 7. Újraellenőrzés a jegyzőkönyv után

A jegyzőkönyv elkészülte után mindkét parancs újra lefutott a munkaágon.

| Parancs | Kilépési kód | Pontos eredmény |
| --- | --- | --- |
| `npm run check` | 0 | `PASS: 26 current HTML pages; 1616 local references; 20 lessons.` |
| `npm test` | 0 | `tests 32`, `pass 32`, `fail 0` |
