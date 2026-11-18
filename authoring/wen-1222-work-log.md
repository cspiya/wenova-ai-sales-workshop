# Munkanapló: WEN-1222, az ügyféllánc szakmai javítása

| Mező | Érték |
| --- | --- |
| Jegy | WEN-1222, szülő WEN-1220 |
| Ág | `cspiya/wen-1222-2-szakmai-felepites-es-wenova-standardok` |
| Méret és módszer | Tananyag, DECISION_OR_LEARNING. Egy szerzői munkamenet és saját ellenőrzés. |
| Indította | Tulajdonos, 2026-11-19 |
| Állapot | Szerzői átadás, független újraellenőrzésre vár |

## Kérés

A 2026-11-19-i magyar workshop résztvevője egy azonosítható ügyet vigyen végig a leadlistától a CRM-ig. A WEN-1222 szerzői brief és a teljes audit adja a sorrendet és az elfogadási feltételeket. A forrás leszerkesztett Markdown, a megjelenítés generált HTML. A három statikus minta egyezését és a technikai kapukat ellenőrizni kell. A 60 perces keret célja az aznapi szerzői átadás. A résztvevői próba és a kiadási döntés külön lépés.

Forrásrevíziók: repóalap `a8a73c45460ef4f67f395e1c82aa99be2895cba4`, Wenova OS `f450f6fd91e87eca4c24725e1b1541aa61ecc817`. A rövid napló a munkafában marad a munkadarabok mellett. Új ellenőrzést igényel a tananyag, a partnerek hozzáférése vagy a tényleges gyakorlókörnyezet változása.

## Lépések

| # | Dátum | Munkamenet | Lépés | Eredmény |
| --- | --- | --- | --- | --- |
| 1 | 2026-11-19 | `01a1f102-5c09-73f1-a0e1-99a7d02cf80d` | Brief, audit és szabályok elolvasása, tiszta munkafa ellenőrzése | A WEN-1222 kijelölt munkafájában, a brief sorrendjében indult a munka. |
| 2 | 2026-11-19 | Ugyanaz | A résztvevői lánc, mentőutak, minták és oktatói átadások javítása | SZ-02–SZ-25 szerzői javítása, SZ-01 és SZ-26–SZ-30 a brief szerint nyitva. |
| 3 | 2026-11-19 | Ugyanaz | Újragenerálás és saját ellenőrzés | Három egyező mintalánc, zöld technikai kapuk. A külön szerkesztői és szakterületi újraellenőrzés nyitott. |

## Döntések

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WEN-1222/D1 | 2026-11-19 | A `handoff.md` közvetlenül továbbadja a `lead_id`-t is. D0. | AI, tananyagszerző | A közvetlen egyezés az átadásban is ellenőrizhető. Közvetett egyezés esetén külön visszakeresés kellene az ajánlatban. | A brief első elfogadási feltétele | Csak ajánlatazonosítót átadó szerkezet | A fenti szerzői munkamenet |
| WEN-1222/D2 | 2026-11-19 | A két hiányzó CRM-minta egy sort kap a kiválasztott ügyhöz. Mindhárom fiktív átadás azonos szerepet és határidőt ad meg. D0. | AI, tananyagszerző | Ellenőrizhető a frissítés egyedisége, a minták meglévő ajánlati értéke megmarad. | SZ-07, SZ-14, SZ-15 | Hiányzó CRM-ek és határidők | A fenti szerzői munkamenet |
| WEN-1222/D3 | 2026-11-19 | Az IrodaLiget ajánlati kísérőszövege és ellenőri ítélete a `gaps` mezőbe kerül. D0. | AI, tananyagszerző | A meglévő ítélet a mintapostafiók külön ügyére vonatkozik. | SZ-06 | Másik ügyből átvett ítélet | A fenti szerzői munkamenet |

A LATE20 kedvezménye és ára, a hangdemó módja és helyszíni feltétele, a Buffer választhatósága és a helyszíni Sales Bot-hozzáférés a briefben átadott tulajdonosi döntések.

## Review körök

A független forrásaudit az `a8a73c4` alapot vizsgálta, 7 blokkoló, 18 fontos és 5 kisebb megállapítással. A szerzői javítások saját ellenőrzése a brief szerinti technikai és statikus lefedettséget teljesítette. A javított munkafán független újraellenőrzés még nem történt. Állapot: `NOT_READY`.

A vizsgált tananyag és oktatói jegyzetek 142 fájljának összesített SHA-256 lenyomata: `4727e82a3953e7eb3c878d20bb79a6f10e334241d7c745e857354edfbb7a3ee3`. A lenyomat a rendezett, relatív útvonal és fájlonkénti SHA-256 párok JSON-szótárából készült. A böngészős, fiókos, helyszíni hang- és időmért próbát nem igazolja.

A Buffer piszkozat és ütemezett sor eltérését a [Buffer súgója](https://support.buffer.com/en-us/articles/saving-and-scheduling-draft-posts-CBLXg1yFXp) támasztja alá. A megkeresésről és tájékoztatásról szóló szöveg forrásai az [NMHH útmutatója](https://nmhh.hu/cikk/4077/Az_elektronikus_hirdeteskuldes_szabalyai) és a [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Az oktatói Brandiseer-számok a [partner által közölt ügyfélbeszámolóból](https://brandiseer.com/case-studies/komaromy-pekseg) származnak. A korábbi egységköltség-állítást nem vittük tovább.

## Félreértések és javítások

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | 2026-11-19, szerzői munkamenet | Az első forráspatch alkalmazása | A szerkesztő írási hibát jelzett, a fájl mégis módosult. | Szerző | Eszköz- vagy környezeti hiba | A munkafában ellenőrizte a diffet, majd pontos forrásegyezést vizsgáló UTF-8 szerkesztésre váltott. | Íráshiba után a diff mutatja a tényleges állapotot. |
| C2 | 2026-11-19, szerzői munkamenet | A repó szerinti Node 24 használata | Az alapértelmezett Node 26 indult. | Gépi ellenőrzés | Eszköz- vagy környezeti hiba | A meglévő Node 24.22.1 került a parancsok útvonalára. | A futtatás előtt ellenőrizd a tényleges verziót. |

## Tesztek

| Teszt | Eredmény |
| --- | --- |
| `npm.cmd ci --ignore-scripts` (Node 24.22.1, npm 11.19.1) | 0, 7 csomag telepítve. Az npm audit összesítője egy magas súlyosságú meglévő függőségi találatot jelzett. |
| `npm.cmd run render` | 0, 22 prezentációforrás. |
| `npm.cmd run check` | 0, 22 aktuális HTML-oldal, 1210 helyi hivatkozás, 20 lecke. A fájlok SHA-256 lenyomatai egyeztek a parancs előtt és után. |
| `npm.cmd test` | 0, 10 sikeres teszt, 0 hiba, 0 kihagyás. |
| Python fájlellenőrzés | Mindhárom L01 lánc, P01 hivatkozás, nettó összeg és átadási teendő egyezik. A hét változtatott CSV oszlopszáma egységes. |
| `rg` keresés és `git diff --check` | A célzott elavult megfogalmazásokra nincs találat. A diff whitespace-ellenőrzése tiszta. |

## Tanulságok

- A minősítés, az érdeklődő válasz és az ajánlattervezet külön bizonyítékot igényel ugyanahhoz a leadhez.
- A másik ügy vagy korábbi szövegváltozat ítéletét tilos az aktuális ügy sikerének bizonyítékaként átvenni.

## Javasolt feladatok

| # | Forrás | Súlyosság | Javaslat | Triázs döntés |
| --- | --- | --- | --- | --- |
| T1 | SZ-01 | Blokkoló | Résztvevői telepítés forrása | WEN-1223 |
| T2 | SZ-26–SZ-30 | Kisebb | A briefben megjelölt szerkesztési korrekciók | Nyitott |
| T3 | Szerzői átadás | Elfogadási feltétel | Független újraellenőrzés és oktatói próba a vizsgált változaton | Nyitott |
