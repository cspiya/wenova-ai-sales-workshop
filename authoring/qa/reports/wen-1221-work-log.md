# Munkanapló: WEN-1221, az ígéretek rendezése a tananyagban

| Mező | Érték |
| --- | --- |
| Jegy | WEN-1221 (szülő: WEN-1220) |
| Ág | `cspiya/wen-1221-1-igeretek-es-tananyag-teljesul-e-a-nap` |
| Méret és módszer | Tananyagszerkesztés, DECISION_OR_LEARNING. Egy szerzői munkamenet és saját ellenőrzés. |
| Indította | Tulajdonos, 2026-11-19 |
| Állapot | Szerzői átadás, független review-ra és helyszíni próbára vár (NOT_READY) |

## Kérés

A november 19-i workshophoz a maker briefben átadott döntéseket vezetjük át a magyar résztvevői tananyagon és a belső oktatói jegyzeteken. A cél a 09:00-as nyitáshoz használható szöveg és a jóváhagyott gyakorlati terjedelem pontos leírása. Elfogadási feltétel a választható Buffer jóváhagyási menete, két partnerbemutató, a hét nyitómondanivaló, három új Cég-DNS-szakasz a sablonban és mindhárom mintában, valamint a zöld technikai ellenőrzés. A módosított Markdown-forrás és generált HTML együtt marad a kijelölt munkafában. Új review kell, ha a hozzáférés, a demó tartalma vagy a tananyag változik.

Forrás: WEN-1221 maker brief, `1221-audit.md` (auditált tananyag: `a8a73c45460ef4f67f395e1c82aa99be2895cba4`), Wenova OS `f450f6fd91e87eca4c24725e1b1541aa61ecc817`. A tájékoztatás és a tényleges eszközműködés közötti eltérés kockázata közepes. Az audit a kiinduló anyagot vizsgálta.

## Lépések

| # | Dátum | Session | Lépés | Eredmény |
| --- | --- | --- | --- | --- |
| 1 | 2026-11-19 | `01a1f119-466e-7083-ab1c-b14135035161` | Brief, audit, kézikönyv és Wenova-szabályok ellenőrzése | A kijelölt ág tiszta munkafáról indult. |
| 2 | 2026-11-19 | Ugyanez | Szerkesztés, tartalmi önellenőrzés és újragenerálás | A nyitó, a partnerbemutatók, a regisztrációs út, a Buffer-szabály és a Cég-DNS átvezetve. |
| 3 | 2026-11-19 | Ugyanez | Technikai ellenőrzés és átadás | Zöld ellenőrzések, a független review nyitott. |

## Döntések

A Brandiseer- és EstiWise-bemutató, a Buffer-ütemezés és a helyszíni partnerregisztráció forrása a maker brief tulajdonosi döntéstáblája. A bemutatók szövege a vállalt szerepet rögzíti. A helyszíni futás bizonyítéka külön szükséges. A Buffer-műveletet csak a csatorna, a szöveg és az időpont megmutatása után adott kifejezett jóváhagyással lehet elvégezni. A tananyag a ténylegesen hozzáférhető connector-műveletekre támaszkodik, kézi tartalékúttal.

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WEN-1221/D1 | 2026-11-19 | Az új DNS-részek a 11–13. szakaszba kerülnek. | AI, tananyagszerző | A meglévő szakaszokra épülő hivatkozások érvényesek maradnak. | IG-02, meglévő sablon | Nincs | Fenti szerzői munkamenet |
| WEN-1221/D2 | 2026-11-19 | A WebŐr és a CégesKép önálló, kitöltött DNS-fájlt kap. | AI, tananyagszerző | Így mindhárom mintacég ugyanazon a sablonon gyakorolható. | Meglévő üzleti alaplapok, árlisták és értékesítési tervek | Nincs | Fenti szerzői munkamenet |

## Review körök

A szerzői önellenőrzés összevetette a két modul kimeneti blokkját a kiinduló revízióval, a hét nyitó bekezdést az audit 5. szakaszával, a DNS-ek ajánlatazonosítóit és árait a meglévő árlistákkal. A Buffer-szabály és a korábbi tiltó megfogalmazások keresése kiterjedt a generált HTML-re is. A pultkeresés egy találata a briefből kizárt `materials/TELEPITES.md:90`. A hirdetési és landingváltoztatások tulajdonosi döntésre várnak.

A szöveget és a generált HTML szerkezetét ellenőriztem. A böngészős nézet, a partnerbemutatók, a connectoros ütemezés és az időmért emberi próba nyitott. Az önellenőrzés lefedettsége PARTIAL, az átadás állapota NOT_READY. A brief egyetlen szerzői munkamenetet ír elő, a javított változat független review-ja az átadást követő lépés.

Vizsgált alap: `4a7e15db56ac4f14e4c36cd41dba4cd34fd3c5ff`. Az érintett 37 fájl helyi összesített SHA-256 értéke `0387f73b64a5aa18c2abb10a11b2a90d2a1e1d068adb238af25acdccd3ee9cb2` (rendezett útvonal, NUL, a fájl hexadecimális SHA-256 értéke és LF; e napló nélkül).

### Második javítási kör

A 2026. november 19-i szerzői munkamenet (`01a1f133-54ac-71b0-ba85-0f98923a9141`) az `1221-maker-r2.md` alapján kezelte a `1221-rereview-r1.md` IR-01–IR-05 pontjait. A kezdőlap pontosítja a Buffer-ütemezés következményét és a dokumentált ügyféleset átadását. A Brandiseer videóbemutatója bekerült a hétperces demóba. Az EstiWise modul két kijelölt mentőútja feltételes demófiókot és közvetlen fájlos folytatást ad. A menetrend és a Brandiseer-modul jelzi a saját laptopos helyszíni regisztrációt.

Vizsgált alap `36c1bc5e57a1c77ab1519c41e91802e10623dfa7`. Az 5 módosított Markdown és 7 generált HTML összesített SHA-256 értéke `6f47bef0e38f77543a4810c00f05ba24e9e512ea4809386a0e580e5d7913201d` (rendezett útvonal, NUL, a fájl hexadecimális SHA-256 értéke és LF; e napló nélkül). Az EstiWise modul 95. sorának demófiók-említése a második kör briefjében megadott két javítási helyen kívül esik. A módosított változat független újraellenőrzése és a helyszíni próba nyitott.

## Félreértések és javítások

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | 2026-11-19, fenti munkamenet | A forrás szerkesztése UTF-8-ban | A fájlszerkesztő íráshibát jelzett, miközben a módosítás megjelent. | Szerző | Eszköz- vagy környezeti hiba | A Git-diff igazolta a módosítást. A további cserék az eredeti sorokat ellenőrző UTF-8 szerkesztéssel készültek. | Sikertelennek jelzett írás után ellenőrizd a tényleges fájlt. |
| C2 | 2026-11-19, második javítási kör | A jóváhagyott hatókör szerkesztése UTF-8-ban | A szerkesztő íráshibát jelzett a kezdőlapnál. | Szerző | A szerkesztő hibajelzése eltért a fájl tényleges állapotától. | A Git-diff igazolta a kezdőlap két javítását. A további cserék az eredeti szöveg egyezését ellenőrző UTF-8 írással készültek. | A hibajelzés után a fájlt ellenőrizd, mielőtt újra írnál. |

## Tesztek

| Teszt | Eredmény |
| --- | --- |
| `npm.cmd ci --ignore-scripts` | 0. Node 24.22.1, npm 11.19.1, 7 csomag a helyi cache-ből, offline módban. |
| `npm.cmd run render` | 0. 22 forrás. |
| `npm.cmd run check` | 0. 22 HTML-oldal, 1226 helyi hivatkozás, 20 lecke. A repófájlok neve és SHA-256 értéke a futás előtt és után egyezett. |
| `npm.cmd test` | 0. 10 sikeres teszt, 0 hiba. |
| `git diff --check` és célzott `rg` keresés | 0 whitespace-hiba. 0 találat a korábbi Buffer-tiltásra, a következményre figyelmeztető mondat 17 fájlban szerepel az előforduló HTML-változatokkal együtt. |

A második javítási kör a Node.js 24.22.1 verzióval futott. A `npm run render` 0 kóddal zárt (`PASS: 22 presentation sources.`). A `npm run check` 0 kóddal zárt (`PASS: 22 current HTML pages; 1226 local references; 20 lessons.`), az összes követett fájl lenyomata egyezett a futás előtt és után. A `npm test` 0 kóddal zárt (10 sikeres teszt, 0 hiba). A `git diff --check` 0 kóddal zárt. A módosított tananyag diffje alapján a leckeazonosítók, perckeretek és állapotok egyeznek az alappal.

## Tanulságok

- A Buffer-ütemezés döntési szabályát a résztvevői lecke mellett a munkamappa és a webes projekt utasításában is ellenőrizni kell. Az ismétlődő Claude-feladatok saját, olvasási és piszkozatkészítési feladata a 05-ös blokkban követhető.

## Javasolt feladatok

| # | Forrás | Súlyosság | Javasolt feladat | Triázs döntés |
| --- | --- | --- | --- | --- |
| T1 | Szerzői átadás | Elfogadási feltétel | Független tartalmi review és a kapcsolódó helyszíni próba a vizsgált változaton. | Nyitott |
