# Vizuális és gördülékenységi review (WEN-1224)

**Ítélet: PASS** a `a9fce70` revízión. A vetített diák nem voltak vizsgálhatók, mert a kiinduló revízióban nem volt diasor.

| Adat | Érték |
| --- | --- |
| Ticket | WEN-1224, szülő: WEN-1220 |
| Kiinduló revízió | `a8a73c4` |
| Vizsgált végső revízió | `a9fce70` |
| Maker | Claude Opus 5.5 subagent |
| Független reviewer | Codex `gpt-6.2-astra`, saját kontextusban, a maker következtetése nélkül |
| Hibabizonyíték | A reprodukálási lépések és a képernyőképek a WEN-1224 ticketben vannak (WEN-1220/D1) |

## Brief

A résztvevői és az oktatói webes anyag átnézése 1440 és 390 px szélességen: vizuális hierarchia, navigáció, a promptok másolhatósága, vetíthetőség, szövegfalak, konzolhibák és törött linkek. A BLOKKOLÓ és a gyorsan javítható FONTOS pontok javítása.

## Tulajdonosi döntések a munka közben

| Azonosító | Döntés |
| --- | --- |
| WEN-1224/D1 | Az oktatói webes anyag vizuálisan különüljön el a résztvevőitől. |
| WEN-1224/D2 | A publikált résztvevői anyag belső linkje a tananyagon belüli HTML-oldalra mutasson. |
| WEN-1224/D3 | Külső hely mindig külön ablakban nyíljon meg. |
| WEN-1224/D4 | A Markdown-forrás gomb ne látszódjon, az AI számára láthatatlan jelölés marad. |
| WEN-1224/D5 | Az előadók táblázatában szerepeljen a wenova.io. |
| WEN-1224/D6 | A nap menetéből minden prezentáció és workbook legyen elérhető. |

## Körök

| Kör | Vizsgált revízió | Ítélet | Fő eredmény |
| --- | --- | --- | --- |
| Audit | `a8a73c4` | REVISE | 0 BLOKKOLÓ, 9 FONTOS, 1 KISEBB |
| 1. | `f0b222e` | REVISE | A fő hibák megszűntek. Új: a hanglabor gombja kapcsolat-ellenőrzés közben félrevezető (VR-01). |
| 2. | `3ea9f48` | REVISE | VR-01 megszűnt. Új visszalépés: az oktatói jegyzet megnyitáskor lefelé ugrott (VR-05). |
| 3. | `fffe650` | PASS | A visszalépés megszűnt, az iframe kezdőhorgonya kikerült. |
| 4. | `142be2b` | REVISE | Az új tulajdonosi követelmények elkészültek. Hiányzó munkafüzetlinkek a napirendben (VS-01), hibás online indítólink (VS-02), gyenge teszt (VS-03). |
| 5. | `a9fce70` | PASS | VS-01, VS-02, VS-03 megszűnt. |

## Javított megállapítások

| Azonosító | Súlyosság | Probléma | Javítás |
| --- | --- | --- | --- |
| VI-01 | FONTOS | A kezdőlap régi dátumot és helyszínt közölt. | Egyezik a napirenddel. |
| VI-02 | FONTOS | A promptokat kézzel kellett kijelölni. | Teljes blokkos kijelölés és rövid másolási útmutató, script nélkül. |
| VI-03 | FONTOS | A prompt szövege 11,83 px volt. | 16 px. |
| VI-04 | FONTOS | Telefonon a tartalomjegyzék megelőzte az oldal célját. | Összecsukható, natív tartalomjegyzék. |
| VI-05 | FONTOS | A „lenti prompt” sima szöveg volt. | Hivatkozás a lecke promptjára. A hosszú bekezdések tagolása nyitott. |
| VI-07 | FONTOS | A hanglabor kapcsolat nélkül is indítást kínált. | „Kapcsolat beállítása” gomb, ellenőrzés alatt letiltott állapot. |
| VI-09 | FONTOS | A bevezető apró státuszcímkeként jelent meg. | A státusz és a bevezető külön elem. |

## Nyitott pontok

| Azonosító | Súlyosság | Tartalom |
| --- | --- | --- |
| VI-05 | FONTOS, részben | A 02-es modul hosszú bekezdésének tagolása. Az előadói anyag tartalmához a tulajdonos engedélye kell. |
| VI-06 | FONTOS, részben | A közvetlen tananyaglink működik, az asztali panelben megismétlődik a fejléc. |
| VI-08 | FONTOS | A 04-es modulban háromszor szerepel ugyanaz az állapot. Az előadói anyag módosításához a tulajdonos engedélye kell. |
| VI-10, VR-02, VR-03, VR-04, VS-04, VS-05 | KISEBB | Aktuális oldal jelzése, a hanglabor modellválasztási üzenete, régi horgony, parancsblokk kijelölése, két tesztlefedettségi pont. |

## Ellenőrzések

| Parancs vagy próba | Eredmény a `a9fce70` revízión |
| --- | --- |
| `npm run render` | PASS, 22 forrás |
| `npm run check` | PASS, 22 oldal, 1336 helyi hivatkozás, 20 lecke |
| `npm test` | 16/16 sikeres, a maker futtatásában. A reviewer csak olvasható környezete ezt nem tudta futtatni. |
| `node materials/demos/voice-lab/selftest.mjs` | 20/20 OK |
| Chromium, 1440 és 390 px | Nincs vízszintes túlcsordulás, a horgonyok és az összecsukható tartalomjegyzék működik |

## Nem ellenőrzött

- Valódi telefonos másolás.
- Olvashatóság a helyszíni vetítőn.
- Élő hanghívás.
- A vetített diák.

## Félreértések és tanulságok

| Mi történt | Ok | Megoldás | Tanulság |
| --- | --- | --- | --- |
| A panel kezdőhorgonya telefonon több ezer pixelt ugratott az oldalon. | A javítás csak a panel tartalmát nézte, a külső oldal görgetését nem. | A horgony kikerült. | Beágyazott tartalom módosításakor a külső oldal viselkedését is mérni kell. |
| Az orchestrator először a hibabizonyítékot a ticketen kívül akarta tartani. | A repó megőrzési szabályát a ticketre is kiterjesztette. | A bizonyíték a ticketben van (WEN-1220/D1). | A hibák reprodukálásához szükséges adat helye a ticket. |


## Hallgatói és oktatói arculat (WEN-1224, 2026-11-19)

**Szempont:** két közönség, két megjelenés, állandó területjelző sáv, és hallgatói oldalról nem vezet link oktatói oldalra.

| Kör | Vizsgált revízió | Ítélet | Megállapítások | Javítás |
| --- | --- | --- | --- | --- |
| 1. | `94ae0b6` | REVISE | VA-01 BLOKKOLÓ: a portszámos oktatói cím átment a kapun. VA-02 FONTOS: az idézőjel nélküli link kimaradt. VA-03 FONTOS: a hanglaborból hiányzott a sáv. | `7d2f850` |
| 2. | `7d2f850` | REVISE | VA-01, VA-02, VA-03 lezárva. VA-04 KISEBB: keskeny nézetben a fókuszált ugrólink takarta a sáv feliratát. | Ez a commit |

**Végső állapot:** a VA-04 javítása után új független kör nem futott, mert a tulajdonos legfeljebb egy további kört engedett, és kisebb hibáról van szó (WEN-1220/D11). A javítás böngészős próbája nyitott. Lefedettség: PARTIAL, az élő görgetést és a kattintásos promptkijelölést a reviewer nem tudta megismételni.