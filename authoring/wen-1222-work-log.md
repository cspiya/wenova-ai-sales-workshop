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

A független forrásaudit az `a8a73c4` alapot vizsgálta, 7 blokkoló, 18 fontos és 5 kisebb megállapítással. A szerzői javítások saját ellenőrzése a brief szerinti technikai és statikus lefedettséget teljesítette. Az első szerzői átadáskor a javított munkafa független újraellenőrzése még hátravolt. Állapot: `NOT_READY`.

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

## Második javítási kör

**2026-11-19, szerzői munkamenet:** `01a1f121-cfb2-7bc2-830c-8dfebc715c24`. A `1222-maker-r2.md` brief a `1222-rereview-r1.md` 4. szakasza alapján hat javítást kér. A munka magyar oktatói és résztvevői tananyag, DECISION_OR_LEARNING profil. Közepes kockázat: a helytelen forrásválasztás másik cég adatát viheti tovább, a hibás CRM-érték és számlálás torzíthatja a mérést. A javítások alapja a tiszta `4a7e15db56ac4f14e4c36cd41dba4cd34fd3c5ff` munkafa. A Wenova OS forrásrevíziója `f450f6fd91e87eca4c24725e1b1541aa61ecc817`.

| Pont | Szerzői eredmény |
| --- | --- |
| SR-01 és SZ-12 | A 02-es oktatói jegyzet a naplóban kijelölt cégből indul, pótlásnál azonos céghez tartozó tervvel vagy teljes mintalánccal és frissített naplóval. |
| SR-02 | A CRM-prompt és a CRM-agent dokumentált nettó összeget kér. A visszaolvasás a nettó összeget vagy az üres mezőt, valamint a pénznemet is ellenőrzi. |
| SR-03 | A heti mérés M15 értéke az M16-ból kiválasztott egyedi szövegazonosítók száma. Egy szöveg két elutasított verziója az 1/1 példában egyszer számít. |
| SR-04 | A 04-es modul feltételei fiókkal visszaolvasott tervezetet és szakaszt, fájlból egyező tervezetet, átadást és CRM-sort kérnek. |
| SR-05 | A két közös útmutató a `scenario_id` alapján választ csomagot. Hiányzó azonosító esetén egyeztet a már kiválasztott mintáról. |
| SR-07 | A 03-as modul `lead_id` jelölése a forrásban és a generált oldalon javítva. |
| SR-06 | A brief szerint nyitott. |

| Azonosító | Dátum | Döntéshozó | Döntés és indoklás | Alapja | Leváltja | Forrás |
| --- | --- | --- | --- | --- | --- | --- |
| WEN-1222/D4 | 2026-11-19 | AI, tananyagszerző | A fájlos átadásnál a résztvevő a CRM-sablonból készíthet ellenőrizhető sort. A teljes mintában a meglévő sort használhatja. Így a két fájl és a CRM-sor az átadáskor összevethető. | SR-04 és a meglévő CRM-séma | Kizárólag EstiWise-szakaszt igazoló feltétel | A fenti szerzői munkamenet |
| WEN-1222/D5 | 2026-11-19 | AI, tananyagszerző | A hiányzó `scenario_id` mellett is megőrizzük a már egyeztetett mintaválasztást. A mappanév pótlása ugyanarra az ügyre irányítja a kísérőt. | SR-05 és a `progress.json` sémája | Rögzített IrodaLiget útvonal | A fenti szerzői munkamenet |

**Szerkesztési korrekció (C3).** Az első szerkesztőparancs írási hibát jelzett, miközben az oktatói jegyzet két sora bekerült. A diff ellenőrzése után a többi változtatás egyedi forrásegyezést vizsgáló UTF-8 szerkesztéssel készült. Íráshibánál a munkafa állapota alapján kell folytatni.

**Ellenőrzés.** Node `24.22.1`, npm `11.19.1`. Az `npm run render` kódja 0, 22 prezentációforrás. Az `npm run check` kódja 0, 22 aktuális HTML-oldal, 1212 helyi hivatkozás és 20 lecke. A parancs alatt a 176 követett fájl SHA-256 lenyomata változatlan. Az `npm test` kódja 0, 10 sikeres teszt, 0 hiba, 0 kihagyás. A statikus összevetés mindhárom minta ajánlati azonosítóit, nettó összegét, pénznemét és átadási adatait egyezőnek találta. A mérési CSV minden sora nyolc oszlopos. Mind a 20 lecke azonosítóját, státuszát és időkeretét tartalmazó sor egyezik a kiinduló verzióval. A 142 követett résztvevői és oktatói fájl SHA-256 lenyomata a rendezett útvonal és fájllenyomat párok tömör JSON-szótára alapján `7697cddfa5e82a7366b0a3b7b513820440a8a95cce7642ea4b41487a9265a4f7`.

**Review.** A független újraellenőrzés az első javítási kör `4a7e15d` változatára `REVISE` ítéletet adott. A második kör eredménye szerzői forrásellenőrzés. A következő független ellenőrzés és az emberi próba nyitott, az állapot `NOT_READY`.

## Harmadik javítási kör

**2026-11-19, szerzői munkamenet** `01a1f133-5445-7ce3-b04b-3f9d12cd0ebd`. A `1222-maker-r3.md` brief a `1222-rereview-r2.md` 4. szakaszából az SR-05 fennmaradó részét és az SR-08-at adta javításra. Magyar résztvevői anyag, DECISION_OR_LEARNING profil. Kiinduló revízió `b55578bebd997049ab45faceef6eb86ae3e43fc3`, Wenova OS-forrás `f450f6fd91e87eca4c24725e1b1541aa61ecc817`. Az ellenőrzés célja a mintaválasztás megőrzése két helyi mentőúton és az első ellenőri döntés visszakereshetősége a heti méréshez.

| Pont | Szerzői ellenőrzés |
| --- | --- |
| SR-05 | A 03-as és 05-ös lecke az aktív `scenario_id` alapján választ. A már kijelölt WebŐr öt leadje ugyanahhoz az alaplaphoz tartozik. A folyamatpróbán az ügyféligény `website-maintenance-L01` azonosítója a leadlistán, a megkeresésben, az ajánlatban, az átadásban és a CRM-sorban egyezik. Az ajánlat, az átadás és a CRM `website-maintenance-P01` azonosítója egyezik. A próba módja `simulation`. |
| SR-08 | Az első ítélet a javítás előtt kerül a `post-review.md` fájlba. A javított verzió ítélete új sor, azonos szövegazonosítóval és saját döntési dátummal. A heti próbaszámításban azonos héten v1 `JAVÍTANDÓ` és v2 `MEGFELEL` mellett M15 = 1 és M16 = 1. A következő hétre eső `MEGFELEL` ott M15 = 0 és M16 = 1. A függőben lévő változat megjegyzése kimarad a számlálásból. |
| SR-06, SR-09 | A brief alapján nyitva maradó kisebb pontok. |

| Azonosító | Dátum | Döntéshozó | Döntés és indoklás | Alapja | Leváltja | Forrás |
| --- | --- | --- | --- | --- | --- | --- |
| WEN-1222/D6 | 2026-11-19 | AI, tananyagszerző | A két érintett lecke belépő szövege is az aktív mintára mutat. A mintát már kiválasztó résztvevő így a mentőút elolvasása előtt is ugyanazt a csomagot használja. | SR-05, WEN-1222/D5 | A két helyi mentőút rögzített IrodaLiget választása | A fenti szerzői munkamenet |
| WEN-1222/D7 | 2026-11-19 | AI, tananyagszerző | Az első döntést az Ellenőr visszajelzésekor kell menteni. Az egymást követő sorokból az is visszakereshető, ha egy javítás függőben marad, vagy az új ítélet másik hétre esik. | SR-08 és a heti M15/M16 szabály | Az egyetlen ítélet mentését is megengedő feladatleírás | A fenti szerzői munkamenet |

**Szerkesztési korrekció (C4).** A szerkesztő az első fájl írásakor hibát jelzett, de a két csere megjelent a diffben. A PowerShell első tartalék parancsa írás előtt megállt egy nem támogatott paraméternél. Az ellenőrzött sorcserék a meglévő módosítás megtartásával, UTF-8 kódolással készültek el. A tényleges fájlállapotot és a shell által támogatott műveleteket ellenőrizni kell.

**Ellenőrzés.** Node `24.22.1`, npm `11.19.1`. Az offline `npm ci --ignore-scripts` 7 csomagot telepített, kilépési kódja 0. Az `npm run render` eredménye 22 prezentációforrás, kilépési kódja 0. Az `npm run check` eredménye 22 aktuális HTML-oldal, 1214 helyi hivatkozás, 20 lecke, kilépési kódja 0. Mind a 176 követett fájl SHA-256 lenyomata változatlan maradt e parancs alatt. Az `npm test` eredménye 10 sikeres teszt, 0 hiba, 0 kihagyás, kilépési kódja 0. A 20 lecke azonosítója, állapota és időkerete egyezik a kiinduló változattal. A `git diff --check` sikeres. A `materials/` és `operations/` alatt ellenőrzött 144 követett fájl összesített SHA-256 lenyomata a rendezett útvonal és fájllenyomat párok tömör JSON-szótára alapján `285b71c1acf5a690f54e30ed450f4a37200c708c416170309749b567e3d70ad5`.

**Review.** A független második kör `REVISE` eredménye a `b55578b` revízióra vonatkozik. A harmadik körben statikus szerzői ellenőrzés és gépi ellenőrzés történt. A módosított változat független review-ja, böngészős és időmért résztvevői próbája nyitott. Állapot `NOT_READY`.

## Terminológiai szerkesztés

**Munkamenet** `01a1f14c-80c5-79a0-96a5-ed94fe286daf`. Magyar résztvevői és oktatói anyag, DECISION_OR_LEARNING profil, alacsony kockázatú terminológiai szerkesztés. A `term-sweep.md` brief a forrás. Kiinduló revízió `70700a7c209d124b7d186a48acfc98dd7122ab47`, Wenova OS-forrás `f450f6fd91e87eca4c24725e1b1541aa61ecc817`.

| Döntés | Döntéshozó és forrás | Szerzői végrehajtás |
| --- | --- | --- |
| WEN-1222/D8 | Tulajdonos, a `term-sweep.md` tulajdonosi döntése | A magyar tananyagban márkahang és cégprofil szerepel. A 01-es blokk nyitánya és a résztvevői kimenet tisztázza a kapcsolatukat a Cég-DNS-sel. |
| WEN-1222/D9 | Tulajdonos, a `term-sweep.md` D) pontja | A zárójegyzet a Wenova rövid, ElevenLabs-narrációs animációját és a Brandiseer állóképes blokkját rögzíti. |

A 83 szócsere 30 Markdown-fájlt érintett. A zárójegyzettel együtt 31 tananyagforrás és 11 generált HTML-nézet módosult. A hat partnerforrás a célzott alakok és névelők visszacserélése után bájtra egyezik az `a8a73c4` változattal. A különbség tíz sorra esik: 02-es modul 38., 226., 255., illetve 03-as modul 85., illetve 04-es modul 95., 118., 119., 129., 140., 150. sor. A `materials/` és `operations/` teljes szöveges keresése nulla régi alakot talált. A módosított források horgonyai, linkcéljai, státuszai, időpontjai és perckeretei egyeznek a kiinduló változattal.

Node 24.22.1 és npm 11.19.1 alatt az `npm run render` 22 prezentációforrást, az `npm run check` 22 aktuális HTML-oldalt, 1220 helyi hivatkozást és 20 leckét jelzett. Az `npm test` 10 tesztet futtatott sikeresen. Mindhárom kilépési kód 0. A 42 módosított tananyagfájl rendezett útvonal- és SHA-256-párjainak összesített lenyomata `d046db9acb9de0d275fa3b734a23a879593a746fcbc8435d60fbd9ac43c8543b`.

A záró videóról a briefben leírt műsorelemet rögzítettem. Az operations kézikönyv saját workshopmarketingre vonatkozó vizuális javaslatai másik felhasználási helyzetet írnak le. A munka szerzői ellenőrzés, a független review és a demó próbája nyitott. Állapot `NOT_READY`.
