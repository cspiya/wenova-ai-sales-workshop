# Munkanapló: WEN-1223: egylépéses tananyag-telepítés és beállítás

| Mező | Érték |
|---|---|
| Jegy | WEN-1223 (szülő: WEN-1220) |
| Ág | `cspiya/wen-1223-3-egylepeses-tananyag-telepites-es-beallitas` |
| Méret és módszer | közepes (maker agent, a független review a koordinátornál) |
| Indította | koordinátor agent, 2026-11-19 |
| Állapot | emberre és független reviewra vár |

## Kérés

A telepítési futtatókönyv frissítése a pluginnal, felületenként őszinte leírással. A tulajdonos kiegészítése: a gyökér README elején indulási blokk QR-kóddal, a webes linkek a publikált címre mutatnak, kivetítő oldal. Időmért próba tiszta Claude Code-profilon.

A következő, `1223-readiness.md` brief alapján a felkészülés első indítása háromperces felméréssel kezdődik. A blokkok saját kapcsolatuk bekötését, belépését és olvasási próbáját kezelik. A célközönség a résztvevő és az őt vezető Claude. A tananyag szerkeszthető forrása magyar Markdown. A felméréshez szükséges csomag, verzió, szerepek és leckék forrása a vizsgált workshop-revízió. A bekötési út a repo és a Claude Code hivatalos MCP-leírása alapján készült. Wenova Content profil: `DECISION_OR_LEARNING`. Wenova OS revízió: `f450f6fd91e87eca4c24725e1b1541aa61ecc817`. A feladat közepes kockázatú a kapcsolatok engedélyei miatt. Határidőt és külön megőrzési időt a brief nem adott. A repóban maradó utasításokat felület-, connector- vagy órarendváltozáskor kell újranézni.

## Lépések

| # | Dátum | Session | Lépés | Eredmény |
|---|---|---|---|---|
| 1 | 2026-11-19 | 6b54de9a | TELEPITES.md, README-blokk, QR-kód, kivetítő oldal, `start.test.cjs` | `b299d73` |
| 2 | 2026-11-19 | 6b54de9a | Tiszta profilos próba T1-T12 | Lásd Tesztek |
| 3 | 2026-11-19 | 6b54de9a | A WEN-1225 javításának átvétele, a kivetítő oldal igazítása | `b8b80ee`, `23b9801` |

| 4 | 2026-11-19 | Codex, jelen munkamenet | Felmérés, közös kapcsolatkapu, Ellenőr-választás, kapcsolódó indítómondatok | Helyi módosítások a 1223-readiness brief alapján |
| 5 | 2026-11-19 | Codex, jelen munkamenet | Pluginépítés, renderelés, technikai kapu, tesztek és célzott forrásellenőrzés | Lásd Tesztek |

## Döntések

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
|---|---|---|---|---|---|---|---|
| WEN-1223/D2 | 2026-11-19 | A README elején indulási blokk, a webes linkek a publikált címre mutatnak | ember (tulajdonos) | A megosztás a nap elején legyen nagyon egyszerű, a GitHub fájlnézete HTML-forrást mutatna | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D3 | 2026-11-19 | Kivetítő oldal Markdownból generálva, szkript nélkül | ember (tulajdonos) | Teremben, a terem végéből is olvasható indulás | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D5 | 2026-11-19 | A README eleje három közönséget irányít a publikált oldalakra, a telepítési segítséget az oktatók a résztvevő helyénél adják | ember (tulajdonos) | Nincs regisztrációs pult, és mindenki egy linket kapjon | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D4 | 2026-11-19 | A README harmadik lépése megnevezi a plugint, az Instructions mezőt és az új munkamenetet | AI (maker) | A futtatókönyv sorrendjéhez hű maradjon | WEN-1223/D2, TELEPITES.md 6/a | nincs | 6b54de9a session |

| WEN-1223/D6 | 2026-11-19 | A felmérés csak a látható állapotot veszi számba, a blokk elején következik a bekötés, a belépés és az olvasási próba | ember (tulajdonos) | A résztvevő tudjon haladni akkor is, ha egy kapcsolat csak később elérhető | Readiness brief | nincs | `1223-readiness.md`, Tulajdonosi döntés, átadó munkamenet: 6b54de9a |
| WEN-1223/D7 | 2026-11-19 | A közös kapcsolatkapu az `assistant.md` fájlban, a próbaeredmény ugyanabban a felmérésfájlban, mint az induló állapot | AI (maker) | A blokk-skillek ugyanazt a döntési sort használják. A korábban mentett próba aznap újra felhasználható | WEN-1223/D6 | nincs | Codex, jelen munkamenet |
| WEN-1223/D8 | 2026-11-19 | A Cég-DNS nem igényel kapcsolatot. A márkahangnál levelezésre akkor van szükség, ha a résztvevő onnan olvas levelet | AI (maker) | A 01-es blokk meglévő kézi és mintás útja használható marad. A Buffer a 02-es blokkban választható | WEN-1223/D6, 01-es és 02-es modul | nincs | Codex, jelen munkamenet |
| WEN-1223/D9 | 2026-11-19 | A Codex-vizsgálat a helyi parancs elérhetőségét mutatja, az ellenőrzés külön résztvevői munkamenetben indul | AI (maker) | A verziószám nem igazolja a bejelentkezést. A felmérés egyik alkalmazást sem állítja át | WEN-1223/D6, readiness brief | nincs | Codex, jelen munkamenet |

| WEN-1223/D6 | 2026-11-19 | A partnerpromptok változatlanok, a Wenova réteg alkalmazza a H-01 – H-11 pontokat | ember (tulajdonos) | A nap így a partneri anyagok átírása nélkül is összefügg | WEN-1220/D13 | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D7 | 2026-11-19 | Az engedély a résztvevő döntése, a tiltó szövegek helyett a következményt mondjuk el | ember (tulajdonos) | A kényelmes automatizáláshoz engedélyek kellenek | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |

## Review körök

Független review még nem futott. A readiness brief önálló maker munkát kért. A forrásban ellenőriztem az első és a kézi indítást, a három kapcsolatállapotot, az olvasási és mentőutat, a napi próba újrafelhasználását és az Ellenőr átadását. A forrásellenőrzés eredménye PASS, a lefedettség PARTIAL, a minősítés NOT_READY. Nyitott maradt a független review és az élő, időmért résztvevői próba.

## Félreértések és javítások

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
|---|---|---|---|---|---|---|---|
| C1 | 2026-11-19, readiness munkamenet | UTF-8 források szerkesztése | A többlépéses szerkesztő az első fájl írása után hibát jelzett | Maker | Eszközhiba | Diff alapján ellenőriztem a részleges módosítást, majd egyértelmű egyezéssel alkalmaztam a maradék változást | Eszközhiba után a fájl állapota alapján kell folytatni |
| C2 | 2026-11-19, célzott forrásellenőrzés | A felméréssablon lefedettségének ellenőrzése | A rögtönzött ellenőrzés hibás sorszámlálási elvárással futott | Maker | Téves feltételezés | A fejlécet és az elvárt tételeket név szerint ellenőriztem. Az ismételt vizsgálat sikerült | A sablonnál a kötelező mezők jelenléte a lényeg |

## Tesztek

Vizsgált revízió: `23b9801`. `npm run render`, `npm run check` (23 HTML-oldal, 1209 helyi hivatkozás, 20 lecke) és `npm test` (19 sikeres, 0 hibás), helyben Node 26 alatt. A QR-kód a commitolt fájlból visszafejtve: `https://cspiya.github.io/wenova-ai-sales-workshop/materials/`. A kivetítő oldal képernyőképpel ellenőrizve 1920x1080 méretben.

A tiszta profilos próba: T1-T10 és T12 sikeres. T11-ben a Karmester már a munka előtt megállt az ellentmondó feltételnél, a háromkörös korlát T10-ben működött. Automatizált telepítés: 78,9 másodperc (plugin 1,1, tananyag 77,8).

Korlátok: Cowork, Mac, connector-belépés és a nyers GitHub-cím nem volt próbálható. A próbaprofilon a fiókhoz kötött pluginok is megjelentek. A CI Node 24 alatt fut, ezt helyben nem futtattam.

**Readiness-változat.** Alap HEAD `c89653cc0fa89d06ce87af167e25d40b1aa8212b`, helyi, commitolatlan `materials` csomag SHA-256 lenyomata `232f48838a195c379e569d624b1827857501f62f0f4c09541687b52f79918325`.

| Parancs vagy ellenőrzés | Eredmény |
|---|---|
| `npm ci --ignore-scripts` | 0. Helyi gyorsítótárból 7 csomag. `EBADENGINE` figyelmeztetés, a futtató Node v26.13.1, a repó Node 24-et vár. |
| `npm run plugin:build` | 0. `PASS: 8 plugin copies and materials/plugin/wenova-sales-workshop.plugin` |
| `npm run render` | 0. `PASS: 23 presentation sources.` |
| `npm run check` | 0. 23 aktuális HTML-oldal, 1224 helyi hivatkozás, 20 lecke. |
| `npm test` | 0. 19 sikeres, 0 hibás, 0 kihagyott. Az ellenőrzések után a módosított tananyagfájlok lenyomatai egyeztek. |
| Célzott forrásellenőrzés | PASS. A sablon kötelező mezői, a nyolc szerepfájl, a hat blokk-skill, a három kapcsolatállapot, az Ellenőr két útja és a sablon hivatkozása ellenőrizve. |

A szakmai elfogadás, a három perc betarthatósága, az új folyamat futása Coworkben és Claude Code-ban, a szolgáltatói belépés és füstpróba, a Codex tényleges indíthatósága, illetve a Node 24-es futás nyitott. A jelen módosításhoz nem készült külön böngészős próba. A szolgáltatók olvasási lehetőségeit a szöveg a munkamenetben ténylegesen felkínált eszközhöz köti.

Második kör, vizsgált revízió `16b27bf`, tiszta profil: újrafuttatás 91,4 mp (a plugin `23b98012a8fb` verzióról a letöltött commitra frissült, a `Munka/` hashlistája azonos), friss telepítés 71,1 mp (plugin 1,6, tananyag 69,5), induló felmérés 99,1 mp. Scoop-próba elszigetelt mappában: Scoop 29,0 mp, kötelező csomagok 36,4 mp, választható csomagok 52,5 mp. A felhasználói környezet, a Scoop-beállítás és a végrehajtási házirend változatlan maradt, a próbamappa törölve.

## Tanulságok és javasolt feladatok

- A modulok szövegcseréi a másik makerre várnak.
- A kivetítő oldal és a QR-kód csak a main ágra kerülés után él.


## Hibaelhárítási oldal

A `1223-troubleshooting.md` maker brief alapján a résztvevői útmutató 11 helyzetet fed le. Mindegyikhez tünetet, lehetséges okot, teendőt és mentőutat ad. A Wenova Academy oktatási útmutatója a workshop üzleti résztvevőinek szól, magyarul, böngészőben és Markdownban. Forrás a brief, a telepítési futtatókönyv, a 00-s modul, a Claude Code útmutató, a tanulási kísérő és a `beallitas` skill. A Windows-követelményt és a keret kezelését a [Claude Windows útmutatója](https://support.claude.com/en/articles/12622703-deploy-claude-desktop-for-windows) és a [Claude használati keretének leírása](https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work) támasztja alá. Wenova OS forrásrevízió `f450f6fd91e87eca4c24725e1b1541aa61ecc817`. Felülvizsgálat akkor esedékes, ha a Claude felülete vagy a telepítési út módosul.

| # | Dátum | Session | Lépés | Eredmény |
|---|---|---|---|---|
| 6 | 2026-11-19 | Codex, hibaelhárítási munkamenet | Résztvevői Markdown és HTML, négy belépési pont, új fájlszám | 11 helyzet és 161 fájl a csomagban |
| 7 | 2026-11-19 | Codex, hibaelhárítási munkamenet | Generálás, tesztek és saját ellenőrzés | 4 kért parancs és a célzott ellenőrzés sikeres |

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
|---|---|---|---|---|---|---|---|
| WEN-1223/D10 | 2026-11-19 | A ZIP-mentőút linkje a felkészülés generált oldalának telepítési segítségére mutat. | AI (maker) | A cél asztali böngészőben és helyi HTML-ből is megnyitható. | `1223-troubleshooting.md`, 00-s modul | nincs | Codex, hibaelhárítási munkamenet |
| WEN-1223/D11 | 2026-11-19 | Új beszélgetés és rövidebb feladat a további kerethasználathoz. Kimerült keretnél a megújulás vagy a csomagváltás segít. | AI (maker) | Az új beszélgetés a folytatás feladatát rövidíti, a fiók használati keretét a fiók beállításai szabják meg. | `1223-troubleshooting.md`, Claude keretleírás | nincs | Codex, hibaelhárítási munkamenet |

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
|---|---|---|---|---|---|---|---|
| C3 | 2026-11-19, kezdőlapi bekötés | A hibaelhárítás látszódjon a kezdőlapon. | Az első link csak Markdownban jelent meg. | Maker | A renderelő saját tartalomjegyzéket épít. | A link az „Előzetes felkészülés” bekezdésébe került. | A belépési pontokat a renderelt változatban is ellenőrizni kell. |
| C4 | 2026-11-19, kapufuttatás | A technikai kapu fájlmódosítás nélküli futásának ellenőrzése. | Az első lenyomatvétel a párhuzamos teszt ideiglenes fájlját olvasta volna, miután a teszt törölte. | Maker | A teszt átmeneti fájlokat hoz létre a munkafában. | A végső ellenőrzés a teszt előtt, külön futott. | A munkafa lenyomatvételét külön kell futtatni a fájlokat létrehozó tesztektől. |

Vizsgált alap HEAD `3e015ba687fd5c2d754f54fbd68d40eaacfbeb76`. A helyi, commitolatlan `materials` csomag lenyomata `8153b60d31b7d7f994143642d6fafa584ef86d5475a8c10da1b5267e6a316d1f`.

| Parancs vagy ellenőrzés | Eredmény |
|---|---|
| `npm ci --ignore-scripts --offline --cache .npm-cache --no-audit` | 0. Hét rögzített függőség helyi gyorsítótárból. |
| `npm run plugin:build` | 0. `PASS: 8 plugin copies and materials/plugin/wenova-sales-workshop.plugin` |
| `npm run render` | 0. `PASS: 24 presentation sources.` |
| `npm run check` | 0. `PASS: 24 current HTML pages; 1318 local references; 20 lessons.` A Git által látott fájlok SHA-256 értékei egyeztek a futás előtt és után. |
| `npm test` | 0. 21 sikeres, 0 hibás, 0 kihagyott. |
| Célzott szerkezeti ellenőrzés | 11 szakasz és tartalomjegyzék-link, 44 címke, 4 Markdown- és 3 HTML-belépési pont, 2 mentőúticél. A 02–04-es modulok és oktatói jegyzeteik változatlanok. |

Környezet: Windows, Node `24.22.1`, npm `11.19.1`. Saját ellenőrzés, technikai PASS, lefedettség PARTIAL, ajánlás NOT_READY. A maker brief önálló munkát kér. A független tartalmi review, a böngészős megjelenés vizsgálata és a résztvevői Cowork-próba nyitott.

## A második review-kör javításai

A független műszaki és tartalmi ellenőrzés a `680e129` revízión REVISE ítéletet adott. A tételes lista és a javítások: [review-jegyzőkönyv](2026-11-18-agentic-keretrendszer.md). A próbák: [telepítési próba](2026-11-18-telepites.md).

| # | Dátum | Session | Lépés | Eredmény |
|---|---|---|---|---|
| 8 | 2026-11-19 | 6b54de9a, maker agent | AT-02–AT-06, AT-08, AT-09, AC-10–AC-16 javítása, két jegyzőkönyv | Helyi commit ezen az ágon, push nélkül |

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
|---|---|---|---|---|---|---|---|
| WEN-1223/D12 | 2026-11-19 | Az eszközengedélyekről a résztvevő dönt, a teljes engedély is elfogadható, a következményt közöljük. A Claude magától nem küld és nem publikál, a küldést a résztvevő végzi, az ütemezéshez a csatorna, a szöveg és az időpont kifejezett jóváhagyása kell | ember (tulajdonos) | Egy szabály szerepeljen minden résztvevői úton | AT-06, AC-13 | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D13 | 2026-11-19 | A `sales_strategy_path` új, opcionális mező, a `schema_version` marad 1. Hiányakor a `company_dna_path` mappájából keresünk, utána megállunk és kérdezünk | AI (maker) | A régi haladási naplók így tovább működnek | AT-08, AC-12 | nincs | 6b54de9a session |
| WEN-1223/D14 | 2026-11-19 | A futtatókönyv a beolvasott példányt összeveti a letöltött `materials/TELEPITES.md` fájllal. A verzióellenőrzés a commitra épül, mert a `VERSION` értéke két commit között azonos lehet. Coworkben a plugin pontos verziója „nem ellenőrzött” | AI (maker) | Olyat nem ígérünk, amit az adott felületen nem lehet igazolni | AT-04 | nincs | 6b54de9a session |
| WEN-1223/D15 | 2026-11-19 | A felsorolt helyeken túl ugyanazt a szabályt vezettem át a `materials/README.md`, a `materials/starter-kit/felmeres.md`, a `materials/AGENTS.md` biztonsági szabálya és a 00-s modul engedélybekezdése soraiban | AI (maker) | Ezek a sorok ugyanannak a megállapításnak a másik felét tartalmazták | AT-03, AT-06, AC-14, AC-15 | nincs | 6b54de9a session |

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
|---|---|---|---|---|---|---|---|
| C5 | 2026-11-19, szövegcserék | A javítások egyszerre, pontos egyezéssel | Az első szkript a shellben hibával leállt, fájl nem változott | Maker | A hosszú, idézőjeleket tartalmazó beágyazott szöveg | A szkript külön fájlba került, minden cserét egyezésszámmal ellenőrzött | Hosszú magyar szöveget fájlból érdemes alkalmazni |

Vizsgált alap: `680e129`, a commit előtti munkafa. Node `v26.13.1`. A repó Node 24-et ír elő, ezen a futáson nem volt Node 24.

| Parancs | Eredmény |
|---|---|
| `npm run plugin:build` | 0. `PASS: 8 plugin copies and materials/plugin/wenova-sales-workshop.plugin` |
| `npm run prepare:push` | 0. `PASS: 24 current HTML pages; 1463 local references; 20 lessons.` |
| `npm run check` | 0. `PASS: 24 current HTML pages; 1463 local references; 20 lessons.` |
| `npm test` | 0. 29 teszt, 29 sikeres, 0 hibás, 0 kihagyott. |
| `node materials/demos/voice-lab/selftest.mjs` | 0. 20 OK sor, 0 hiba. |
| Fájlszám | A `materials/` 161 fájl, a kiadási lista (`packaged()`) 159 fájl. |

Maker saját ellenőrzése, nem független review. Lefedettség PARTIAL, állapot NOT_READY. A javítások független újraellenőrzése, valamint az élő Cowork-, macOS- és connector-próba nyitott. AT-01, AT-10, AT-11 és AC-17 a kapott utasítás szerint nyitva maradt.
