# Induló felmérés

Felmérés időpontja: …

A ✅ jel igazolt állapotot, a ⚠️ teendőt vagy nem ellenőrzött állapotot, a ❌ igazolt hiányt vagy sikertelen próbát jelöl.

| Tétel | Állapot | Mi a teendő | Melyik blokkhoz kell | Mentőút |
| --- | --- | --- | --- | --- |
| Felület (kötelező: Cowork) | | | 00 | Válts Cowork módra. Ha a Cowork nem indul, a mentőút a Claude Code. |
| Fizetős csomag | | | 00 | A résztvevő a fiókbeállításokban megnézi a csomagját. |
| Friss Claude Desktop | | | 00 | Frissítsd az alkalmazást, majd indítsd újra. |
| Hardveres virtualizáció (Windows) | | | 00 | Ha a Cowork nem indul, használd a Claude Code mentőutat. |
| Allow network egress bekapcsolva | | | 00 | Settings → Capabilities → Allow network egress. |
| Domain allowlist: Package managers only | | | 00 | Settings → Capabilities → Domain allowlist. |
| Additional allowed domains | | | 00 | Ha a letöltés nem megy: `github.com` és `codeload.github.com`. |
| Cowork-projekt a munkamappán | | | 00 | Projects → + → Use an existing folder. |
| Sorrend: telepítő mondat, plugin, Instructions, új munkamenet | | | 00 | Pótold a kimaradt lépést, majd nyiss új munkamenetet. |
| Operációs rendszer | | | 00 | Kérdezd meg, milyen rendszer fut a résztvevő gépén. |
| Munkamappa | | | Mindegyik | Nyisd meg vagy csatold a telepítéskor választott mappát. |
| `Tananyag/` | | | Mindegyik | Nyisd meg a telepített tananyagot. |
| `Munka/` | | | Mindegyik | Ments a munkamappába, vagy add át a fájlt letöltésre. |
| `Munka/00-Felkeszules/` | | | 00 | Hozd létre, amikor szükség lesz rá. |
| `Munka/00-Felkeszules/forrasok/` | | | 00, 01, 04 | Hozd létre, amikor szükség lesz rá. |
| `Munka/01-DNS/` | | | 01 | Hozd létre, amikor szükség lesz rá. |
| `Munka/02-Tartalom/` | | | 02 | Hozd létre, amikor szükség lesz rá. |
| `Munka/03-Leadek/` | | | 03 | Hozd létre, amikor szükség lesz rá. |
| `Munka/04-Ajanlat/` | | | 04 | Hozd létre, amikor szükség lesz rá. |
| `Munka/05-Folyamat/` | | | 05 | Hozd létre, amikor szükség lesz rá. |
| Gyökérutasítás és munkamenet | | | Mindegyik | Nyisd meg a tanulási kísérő utasítását. |
| Tananyag verziója (`VERSION`) | | | Mindegyik | Rögzítsd a verziót, amikor a fájl olvasható. |
| Wenova Sales Workshop plugin | | | Mindegyik | Kövesd a tananyag szerepfájljait és a leckéket. |
| Karmester (`orchestrator.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| Író (`writer.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| Ellenőr (`reviewer.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| CEO (`ceo.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| Marketing (`marketing.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| Sales (`sales.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| Postás (`inbox.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| CRM (`crm.md`) | | | 01–05, feladattól függően | Kövesd a lecke kész promptját vagy kézi útját. |
| Munkanapló sablon | | | Mindegyik | Kezdd egyszerű jegyzetben. |
| Skillek | | | Mindegyik | A tanulási kísérő a modulokból vezet. |
| Alügynökök indíthatósága | | | 01, 05 | A szerepfájlok alapján folytasd. |
| Független reviewer (Codex) | | | 01, 05 | A Claude Ellenőrként friss kontextusban dolgozik, így a függetlenség részleges. |
| Levelező (Gmail vagy Outlook) | | | 00, 01 (ha levélből dolgozol), 05 | Takard ki az adatokat, és másold be a levelet, vagy válaszd a mintapostafiókot. |
| Levelező írási engedélyei | | | 00, 01 (ha levélből dolgozol), 05 | A résztvevő dönt. Írd le, mit engedélyezett. Amit engedélyez, azt a Claude kérdés nélkül megteheti, a levélküldést is. |
| Google Drive | | | 00, 05 | Dolgozz helyi CRM-táblával vagy CSV-vel. |
| Brandiseer | | | 02 | Használd a modul képötleteit és kampánymintáját. |
| Buffer (választható) | | | 02 | Tartsd meg a posztokat helyi piszkozatként. |
| Sales Bot | | | 03 | Minősítsd a modul mintaleadjeit. |
| EstiWise | | | 04 | Készítsd el a tervezetet a modul kézi vagy mintás útján. |

## Rövid összefoglaló

- Rendben van …
- Hiányzik vagy még ellenőrizni kell …
- Elég a saját blokkjában elintézni …
