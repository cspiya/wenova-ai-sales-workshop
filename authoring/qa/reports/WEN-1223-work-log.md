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

## Tanulságok és javasolt feladatok

- A modulok szövegcseréi a másik makerre várnak.
- A kivetítő oldal és a QR-kód csak a main ágra kerülés után él.
