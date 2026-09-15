# Mintalecke – review, 2026. szeptember 15.

**Eredmény: javításra és emberi próbára vár. A lecke review állapotban marad.**

- Anyag: [Üzleti ajánlat és célcsoport kialakítása](../../../materials/modules/01-business-foundations.html#01-business-foundations.01-offer-and-audience).
- Ellenőrző: Codex, a jelen munkamenetben. Ez a folyamat próbája és saját tartalmi ellenőrzés; nem független második AI-review és nem emberi szakmai jóváhagyás.
- Git alap: `85d1517566954ecba63ae882aaef624ff5665a98`; a vizsgált HTML és kapcsolódó változások helyi, nem commitolt fájlok.
- Vizsgált tananyag SHA-256: `90bdb6530e4aef1c6cc55abf56068b8795fef47ce0580634a0a00d8c5a5c2bfe`.
- CSS SHA-256: `0f05243b010c0fd7c551cc28742d73550d9979846d4dea5f6f262195d0668f30`.
- Üzleti alaplap SHA-256: `4124b92ba2137fd74f7a9040a83e9562e79545d30125dc477bebb809748f76b6`.
- Kitalált növénygondozási alaplap SHA-256: `6c8c7b9df245009a56bae3d1461d4f62e917dbb49d146a26d1cbab8c9640d8a1`.
- Következő leckeváz SHA-256: `f679037ef0d51d7d3885d0d0624b2af18c5b573f1803a349a982d6ed2ecd3833`.

A fenti SHA-256 azonosítók a tartalmi review idején vizsgált állapotot rögzítik. Az aktuális fájlszerkezet ellenőrzése a [szerkezeti jegyzőkönyvben](structure-review.md) szerepel.

## Eredmények

| Pont | Eredmény | Bizonyíték / hiány |
|---|---|---|
| T1 | Nem ellenőrzött | A forrásban DOCTYPE, lang=hu, cím, egy h1 és viewport rendben. Böngészős megnyitási kísérletre a vezérlő „No browser is available” választ adott; megjelenítést nem igazoltunk |
| T2 | Megfelel | A HTML a közös helyi CSS-t hivatkozza. A tananyagban nincs script vagy külső betöltendő erőforrás; a CSS-ben nincs külső import |
| T3 | Megfelel | A technikai segédeszköz az összes hivatkozott helyi fájlt és HTML-horgonyt megtalálta; ismétlődő id nincs. A következő lecke tartalmi hiánya R8-ban szerepel |
| T4 | Megfelel | A cím, Wenova-partner, előadók, 20 perc, review állapot és leckeazonosító szerepel; látható kitöltetlen sablonszöveg nincs |
| T5 | Nem ellenőrzött | Asztali, 390/320 px, nyomtatási és billentyűzetes próba böngésző-hozzáférésre vár |
| R1 | Megfelel | #result: egy ajánlat és célcsoport, mentett business-profile.md; #needs és a közös agenda megadja az üzleti résztvevői környezetet |
| R2 | Megfelel | #needs és #prompt: Claude, szövegmentés, alaplap, kitalált üzleti minta és árlista elérhető. Partnerfiókot nem igényel ez a gyakorlat |
| R3 | Javítandó | #prompt: „Ellenőrizd az alábbi kész feltételeket”, de a másolható prompt nem tartalmazza a #check listát, és az átadására sincs utasítás |
| R4 | Javítandó | #handoff: „a naplóban rögzítsd” és completed_with_example szerepel; a kezdőnek nincs közvetlen naplóhivatkozás vagy konkrét mentési utasítás ebben a leckében |
| R5 | Megfelel | #steps öt időzített lépés, #check hat konkrét kész feltétel; mentés és kétmondatos visszamondás szerepel |
| R6 | Megfelel | #help: öt perc után konkrét office-plants minta, bizonytalan ár open jelölése, Claude nélkül kézi kitöltés és mentor; gyakorlati kipróbálás P2-ben nyitott |
| R7 | Javítandó | A példa linkje kitaláltnak jelöli az adatokat, az emberi döntések is világosak. A minta használatát azonban a lecke nem nevezi egyértelműen simulation módnak; a gyakorlási mód csak általános említés |
| R8 | Javítandó | A business-profile.md mezői elérhetők, a következő lecke bemenete egyezik. A 02-sales-strategy.md viszont draft: „a partner definiáljon megfigyelhető feltételeket”, ezért a tényleges átadás még nem próbálható végig |
| P1 | Nem ellenőrzött | Nincs megnevezett másik előadó által végzett, időmért próba és saját elkészült munkadarab |
| P2 | Nem ellenőrzött | A mentőút leírását ellenőriztük; végrehajtási próba és folytatási bizonyíték nincs |
| P3 | Nem alkalmazható | Ebben a leckében nincs partnerintegráció vagy új beszélgetéses kísérőfolytatás ígérve; Claude-prompt használatának normál próbája P1 alá tartozik |
| P4 | Nem ellenőrzött | Nincs megnevezett emberi szakmai jóváhagyás |

## Javítási lista

| Hiba | Súly | Hely | Elvárt javítás | Javasolt gazda |
|---|---|---|---|---|
| H1 | Blokkoló | #prompt | A kész feltételek kerüljenek a másolható promptba, vagy legyen egyértelmű utasítás a lista átadására | Szerző |
| H2 | Blokkoló | #handoff | Közvetlen naplóhivatkozás és egyértelmű utasítás: hol mentjük, hogyan kérjük az AI-tól a frissítést | Szerző |
| H3 | Blokkoló | #needs / #help | Nevezze meg a minta simulation módját, és különítse el a saját adaton végzett szöveges gyakorlást az éles üzleti művelettől | Szerző |
| H4 | Blokkoló a teljes út elfogadásához | Következő lecke | A stratégialecke konkrét feladata és kész feltételei készüljenek el, majd legyen átvételi próba | Következő modul/leckegazda |

A tananyagot ebben a reviewban nem módosítottuk. A javításokhoz rövid szerzői terv, majd újraellenőrzés kell. A következő lecke kidolgozása külön szakmai feladat.

## Próba és következő döntés

A technikai segédeszköz működését mesterséges hibákkal is ellenőriztük: hibás CSS, hiányzó horgony, duplikált azonosító, sablonmaradvány, hibás nyelv és külső script esetén javítandó eredményt adott. A pozitív mintára nem talált statikus hibát, de a böngészős és emberi pontokat nyitva hagyta.

Következő lépés: H1–H3 javításának jóváhagyása, a szükséges böngészős és emberi próba kijelölése, majd H4 lezárása a következő lecke elkészítésével. Elfogadó neve és dátuma: **nyitott**.
