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

## Lépések

| # | Dátum | Session | Lépés | Eredmény |
|---|---|---|---|---|
| 1 | 2026-11-19 | 6b54de9a | TELEPITES.md, README-blokk, QR-kód, kivetítő oldal, `start.test.cjs` | `b299d73` |
| 2 | 2026-11-19 | 6b54de9a | Tiszta profilos próba T1-T12 | Lásd Tesztek |
| 3 | 2026-11-19 | 6b54de9a | A WEN-1225 javításának átvétele, a kivetítő oldal igazítása | `b8b80ee`, `23b9801` |

## Döntések

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
|---|---|---|---|---|---|---|---|
| WEN-1223/D2 | 2026-11-19 | A README elején indulási blokk, a webes linkek a publikált címre mutatnak | ember (tulajdonos) | A megosztás a nap elején legyen nagyon egyszerű, a GitHub fájlnézete HTML-forrást mutatna | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D3 | 2026-11-19 | Kivetítő oldal Markdownból generálva, szkript nélkül | ember (tulajdonos) | Teremben, a terem végéből is olvasható indulás | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D5 | 2026-11-19 | A README eleje három közönséget irányít a publikált oldalakra, a telepítési segítséget az oktatók a résztvevő helyénél adják | ember (tulajdonos) | Nincs regisztrációs pult, és mindenki egy linket kapjon | Tulajdonosi kérés | nincs | az agent rögzítette a koordinátor üzenetéből, 6b54de9a session |
| WEN-1223/D4 | 2026-11-19 | A README harmadik lépése megnevezi a plugint, az Instructions mezőt és az új munkamenetet | AI (maker) | A futtatókönyv sorrendjéhez hű maradjon | WEN-1223/D2, TELEPITES.md 6/a | nincs | 6b54de9a session |

## Review körök

Független review még nem futott. A maker saját ellenőrzése nem számít függetlennek.

## Félreértések és javítások

Nem történt.

## Tesztek

Vizsgált revízió: `23b9801`. `npm run render`, `npm run check` (23 HTML-oldal, 1209 helyi hivatkozás, 20 lecke) és `npm test` (19 sikeres, 0 hibás), helyben Node 26 alatt. A QR-kód a commitolt fájlból visszafejtve: `https://cspiya.github.io/wenova-ai-sales-workshop/materials/`. A kivetítő oldal képernyőképpel ellenőrizve 1920x1080 méretben.

A tiszta profilos próba: T1-T10 és T12 sikeres. T11-ben a Karmester már a munka előtt megállt az ellentmondó feltételnél, a háromkörös korlát T10-ben működött. Automatizált telepítés: 78,9 másodperc (plugin 1,1, tananyag 77,8).

Korlátok: Cowork, Mac, connector-belépés és a nyers GitHub-cím nem volt próbálható. A próbaprofilon a fiókhoz kötött pluginok is megjelentek. A CI Node 24 alatt fut, ezt helyben nem futtattam.

## Tanulságok és javasolt feladatok

- A modulok szövegcseréi a másik makerre várnak.
- A kivetítő oldal és a QR-kód csak a main ágra kerülés után él.
