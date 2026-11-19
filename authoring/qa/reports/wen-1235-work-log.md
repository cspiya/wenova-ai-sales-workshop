# Munkanapló: WEN-1235, záró előadás és az 5. blokk új tartalma

| Mező | Érték |
| --- | --- |
| Jegy | WEN-1235 |
| Ág | `cspiya/wen-1235-zaro-eloadas-es-munkafuzet-a-workshop-vegere` |
| Méret és módszer | Tananyag és előadás, DECISION_OR_LEARNING. Egy készítői munkamenet, saját ellenőrzéssel. |
| Állapot | Készítői átadás, független review-ra és emberi diaelfogadásra vár (NOT_READY) |

## Kérés

A 16:15–17:00 közötti idősávhoz záró előadás, előadói jegyzet és átdolgozott munkafüzet készül. A blokk a kampány mérési oldalát mutatja be, előfeltételekkel és kitalált mintaadatos tartalékúttal.

## Lépések

| # | Dátum | Session | Lépés | Eredmény |
| --- | --- | --- | --- | --- |
| 1 | 2026-11-19 | `6b54de9a-930a-42b7-9d1f-9232f717e5aa` | Források, nyitó előadás és hivatalos Claude-dokumentáció olvasása | Az artifact- és ütemezési állítások forráshoz kötve |
| 2 | 2026-11-19 | Ugyanez | Első változat a 16:50–17:00 sávra | A D1 döntés felülírta |
| 3 | 2026-11-19 | Ugyanez | A WEN-1223 ág összefésülése, a deck és a 05-ös modul átdolgozása, a kapcsolódó oldalak igazítása | 17 dia, stabil leckeazonosítók |
| 4 | 2026-11-19 | Ugyanez | Technikai ellenőrzés és böngészős nézet 1920×1080 felbontáson | Az eredmény a jegy átadásában |
| 5 | 2026-11-19 | Ugyanez | A független review javításai és a helyőrző dia | 18 dia |

## Döntések

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WEN-1235/D1 | 2026-11-19 | A zárás a teljes 16:15–17:00 sávot lefedi. Az 5. blokk a kampány mérése, a munkafüzet a meglévő 05-ös modul. | Ember, tulajdonos | A tíz perc kevés volt, és a teljes ügyfélút nem tartható. | Koordinátori üzenet a tulajdonos döntéséről | Az eredeti brief ütköző részei | Rögzítette az agent a `6b54de9a-930a-42b7-9d1f-9232f717e5aa` munkamenetből |
| WEN-1235/D2 | 2026-11-19 | A bemutató Facebook- és GA4-adatai a Windsor.ai-on át érkeznek. | Ember, tulajdonos | A bemutatóhoz konkrét adatút kell. | Koordinátori üzenet a tulajdonos döntéséről | A helyőrző szöveg | Rögzítette az agent a `6b54de9a-930a-42b7-9d1f-9232f717e5aa` munkamenetből |
| WEN-1235/D3 | 2026-11-19 | A valódi kampány számai nem kerülnek a diasorba. Egy helyőrző dia jelzi az élő bemutatót. | Ember, tulajdonos | A valódi számok csak élőben látszanak. | Koordinátori üzenet a tulajdonos döntéséről | Nincs | Rögzítette az agent a `6b54de9a-930a-42b7-9d1f-9232f717e5aa` munkamenetből |
| WEN-1235/D4 | 2026-11-19 | A `02-one-customer` azonosító megmarad, a lecke tartalma kampányelemzés. | AI, készítő | A D1 stabil leckeazonosítókat kér. | D1 | Nincs | Ez a munkamenet |

## Félreértések és javítások

Az első változat a tízperces zárásra és egy új `06-zaras` modulra épült. A tulajdonos munka közben új tartalmat és fájlszerkezetet adott meg. A piszkozatot félretettem, és az új szerkezetre építettem át. Tanulság: a blokk tartalmát és az idősávot a készítés előtt érdemes együtt megerősíteni.

## Ellenőrzés és korlátok

- A Windsor.ai-, Facebook-, GA4- és Buffer-kapcsolatot nem próbáltam ki. Az előadói ellenőrzőlista 16:15 előttre írja elő a próbát.
- A hangügynök-labor és a 2D videó élő lejátszását nem próbáltam ki.
- A `04-proposals-handoff.md` továbbra is a 05-ös folyamatpróba bemenetének nevezi a `proposal.md` fájlt. A brief tiltotta a 04-es modul szerkesztését.
- A scenarios mappák `pipeline-review.md` mintái megmaradtak, a 05-ös modul már nem használja őket.
- A custom deck elfogadása (`--accept-custom`) emberi egyezőségi review után következik.
- A független review `72a6064` revízión REVISE ítéletet adott: 2 blokkoló, 7 fontos és 4 kisebb megállapítás. A javítások megtörténtek, az újraellenőrzés nyitott.
- A napirend idői változatlanok: a kérdések 16:50-kor kezdődnek, ezért a review idő-javaslata helyett a diasor, a jegyzet és a munkafüzet igazodott.
- A 04-es modul generált lapozójában kizárólag a következő modul címe frissült.
