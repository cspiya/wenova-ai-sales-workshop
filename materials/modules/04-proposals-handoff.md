# Ajánlatadás és belső átadás

**Állapot: review.**

[HTML-változat](04-proposals-handoff.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Ügyféligény és hiányzó adatok](#04-proposals-handoff.01-discover-needs)
- [Ellenőrizhető ajánlattervezet](#04-proposals-handoff.02-prepare-proposal)
- [Belső átadás és következő feladat](#04-proposals-handoff.03-handoff)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

04-proposals-handoff · review

Igényből ellenőrzött ajánlat, ajánlatból kijelölt következő feladat – az EstiWise ajánlatadó rendszerével, Claude-ból vezérelve.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: partneri kidolgozás kész, időmért próbára vár.**

15 perc bemutató + 3 × 20 perc gyakorlat + 15 perc ellenőrzés, pótlás és opcionális előnézet. Belső átadás: Wenova közreműködésével.

A modul végére a résztvevő saját (vagy minta-) vállalkozásához tartozó EstiWise-fiókban szolgáltatáskatalógus, árazási szabályok, egy ellenőrzött ajánlattervezet és egy kijelölt következő feladat lesz. A közös munkacsomagba mindez a megszokott `proposal.md` és `handoff.md` formában is bekerül.

<a name="overview-1"></a>

### Bemenet

Weboldal link, business-profile.md, leads.csv, outreach.md, customer-brief.md, saját árlista (ha van; PDF vagy táblázat), a felkészülés során létrehozott EstiWise-fiók és a 04-es blokk bemutatójában beállított Claude-kapcsolat.

<a name="overview-2"></a>

### Kimenet

proposal.md, handoff.md

<a name="overview-3"></a>

### Folytatás elakadás esetén

Használd a [mentőútvonalat](#recovery). A kimeneteket a közös adatátadási szabály alapján ellenőrizzük.

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `04-proposals-handoff`
- Szakmai gazda: EstiWise (Gyömrei Máté, CommIT Smart Kft.)
- Időkeret: 90 perc
- Végrehajtási mód: saját fiókkal **live** (EstiWise próbaidőszak), előkészített demófiókban végrehajtott és visszaolvasott műveletnél **sandbox**, fájlos mintával **simulation**
- Állapot: review – kidolgozva, a teljes út időmért próbája még hátravan.

<a name="overview-5"></a>

### A modul célja

A nap végére a saját szolgáltatásaiddal és áraiddal működő ajánlatadód van, amit Claude-ból finomhangolsz.

<a name="04-proposals-handoff.01-discover-needs"></a>

## Ügyféligény és hiányzó adatok

**Állapot: review.**

**Azonosító:** `04-proposals-handoff.01-discover-needs` · **Állapot:** review · **Időkeret:** 20 perc

04 / Ajánlatadás

Egy ügyféligény. A hiányzó adatok kérdéssé alakítva. Árazható alap.

20 perc · Próbára vár · review · EstiWise · Gyömrei Máté

<a name="04-proposals-handoff.01-discover-needs--result"></a>

### Ezt készíted el

Az EstiWise-fiókodban a `business-profile.md` ajánlatához tartozó szolgáltatást, ellenőrzött árazási alappal és az ügyfélnek feltett kérdésekkel. Ezzel a `customer-brief.md` igényéből látszik, mi árazható már, és mi hiányzik még.

<a name="04-proposals-handoff.01-discover-needs--needs"></a>

### Erre lesz szükséged

- A `progress.json`-ban kijelölt üzleti alaplap, az ehhez tartozó `customer-brief.md` és a vállalkozás weboldala.
- A felkészülésben létrehozott EstiWise-fiók (Standard próbacsomag, bankkártya nélkül) és a 04-es blokk bemutatójában beállított Claude-kapcsolat.
- Ha van: saját árlista vagy szolgáltatásleírás PDF-ben vagy táblázatban.

Ha nincs saját üzleted vagy fiókod: [IrodaLiget alaplap](../scenarios/office-plants/outputs/business-profile.md) · [igény](../scenarios/office-plants/outputs/customer-brief.md) · [árlista](../scenarios/office-plants/price-list.csv), és a mentor által kiosztott demófiók.

<a name="04-proposals-handoff.01-discover-needs--explanation"></a>

### Így működik

Ügyféligény → szolgáltatás a katalógusban → árazási szabály → az ügyfélnek feltett kérdések → hiányzó adatok. Az EstiWise a vállalkozás leírásából szolgáltatáskatalógust javasol; te hagyod jóvá. Az ügyfélkérdések adják meg a mennyiséget és a feltételeket, ezekből számol az ár.

**Kitalált példa:** az IrodaLiget „havi növénygondozás” szolgáltatásának egy kérdése: „Hány növényt gondozzunk?” Ha az igényben nincs mennyiség, az a hiányzó adat, nem nulla.

<a name="04-proposals-handoff.01-discover-needs--decisions"></a>

### Ezekről te döntesz

Mely szolgáltatás kerüljön a katalógusba; az ár és az egység (nettó/bruttó, HUF/EUR); mely kérdéseket tegye fel a rendszer az ügyfélnek; mi számít nyitott adatnak. Az AI nem talál ki árat: ha nincs jóváhagyott ár, a mező `open`.

<a name="04-proposals-handoff.01-discover-needs--prompt"></a>

### Ezt kérd Claude-tól

```text
Az EstiWise-kapcsolattal dolgozunk a workshop 04-es moduljában. Csatoltam a business-profile.md és a customer-brief.md fájlomat, és ha van, az árlistámat.
1. Ellenőrizd, hogy él-e az EstiWise-kapcsolat, és milyen csomagban vagyok.
2. Nézd meg, van-e már szolgáltatáskatalógusom. Ha nincs, az üzleti alaplapom alapján javasolj szolgáltatást. Csak jóváhagyás után rögzítsd belső kalkulációhoz. Nyilvánosan ne tedd közzé.
3. A business-profile.md ajánlatához tartozó szolgáltatásnál vesd össze az árat és az egységet az alaplapommal és az árlistámmal. Eltérésnél kérdezz, ne találj ki árat.
4. Mutasd meg, milyen kérdéseket tesz fel a rendszer az ügyfélnek. Javasolj legfeljebb 7 rövid kérdést.
5. Vesd össze a customer-brief.md igényét a kérdésekkel: mi ismert, és mi hiányzik? A hiányzókat írd az open_questions mezőbe.
Minden módosítás előtt mutasd meg, mit változtatnál, és kérd a jóváhagyásomat. Semmit ne küldj ki ügyfélnek.
```

<a name="04-proposals-handoff.01-discover-needs--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** csatold az alaplapot, az igényt és az árlistát; futtasd a kapcsolatellenőrzést (1. pont).
2. **3–10 perc:** hagyd jóvá vagy javítsd a szolgáltatást, az árat és az egységet.
3. **10–15 perc:** szűkítsd az ügyfélkérdéseket legfeljebb hétre; jóváhagyás után rögzítsd a szolgáltatást a belső kalkulációhoz. Ha a fiók ehhez nyilvános közzétételt kér, folytasd demófiókban vagy a mintafájlokkal.
4. **15–18 perc:** a hiányzó adatokkal frissítsd és mentsd a `customer-brief.md` fájlt.
5. **18–20 perc:** mondd el egy mondatban, mi hiányzik még az ajánlathoz.

<a name="04-proposals-handoff.01-discover-needs--check"></a>

### Ellenőrizd az eredményt

- A kalkulációhoz használt szolgáltatás tartozik a `business-profile.md` `offer_id`-jához.
- Az ár, a pénznem, a nettó/bruttó jelölés és az egység egyezik az alaplappal vagy az árlistával; ahol nincs jóváhagyott ár, ott `open` szerepel.
- Legfeljebb 7 ügyfélkérdés van, mindegyik egy adatot kérdez.
- A `customer-brief.md` `open_questions` mezője tartalmazza a hiányzó adatokat.
- Semmilyen üzenet nem ment ki ügyfélnek.

<a name="04-proposals-handoff.01-discover-needs--help"></a>

### Ha elakadtál

- **Nem él a kapcsolat vagy nem érkezik meg a belépőkód:** jelezd a mentornak. Használd a választott minta teljes láncát és az ahhoz tartozó demófiókot, ha elérhető.
- **Nincs használható weboldal vagy leírás:** az alaplap mezőiből dolgozzon a rendszer; ha ez sem megy, válts az IrodaLiget mintára.
- Öt perc után használd a [mentőcsomagot](#recovery).

<a name="04-proposals-handoff.01-discover-needs--handoff"></a>

### Ezt viszed tovább

A kalkulációhoz beállított szolgáltatás és a frissített `customer-brief.md` a következő lecke bemenete. A naplóban rögzítsd a végrehajtási módot (`live`, `sandbox` vagy `simulation`) és az eredményt, amelyet visszaolvastál vagy a mintafájlban ellenőriztél.

<a name="04-proposals-handoff.01-discover-needs--extra"></a>

### Ha maradt időd

Tölts fel egy részletesebb anyagot (árlista, szolgáltatásleírás), és kérd Claude-ot, hogy javasoljon második szolgáltatást a katalógusba. A kötelező út az első szolgáltatással megy tovább.

<a name="04-proposals-handoff.02-prepare-proposal"></a>

## Ellenőrizhető ajánlattervezet

**Állapot: review.**

**Azonosító:** `04-proposals-handoff.02-prepare-proposal` · **Állapot:** review · **Időkeret:** 20 perc

04 / Ajánlatadás

Egy igény. Egy kiszámolt, ellenőrzött ajánlattervezet. Kiküldés nélkül.

20 perc · Próbára vár · review · EstiWise · Gyömrei Máté

<a name="04-proposals-handoff.02-prepare-proposal--result"></a>

### Ezt készíted el

Egy EstiWise-ban kiszámolt ajánlattervezetet a `customer-brief.md` igényére, és annak közös formátumú változatát `proposal.md` néven. Az ajánlat `draft` marad: nem küldöd ki, és nem fogadja el senki.

<a name="04-proposals-handoff.02-prepare-proposal--needs"></a>

### Erre lesz szükséged

Az előző lecke szolgáltatása, a `business-profile.md`, az árlista és a 03-as ügy három fájlja: `leads.csv`, `outreach.md`, `customer-brief.md`. A [mintaláncban](../scenarios/office-plants/README.md) ugyanezekhez megtalálod az ajánlatot is.

<a name="04-proposals-handoff.02-prepare-proposal--explanation"></a>

### Így működik

Igény → belső kalkuláció (a rendszer kérdez, te válaszolsz az ügyfél nevében) → árazott sorok → ajánlattervezet → közös `proposal.md`. A sor alapösszege a mennyiség és az egységár szorzata. Ha van jóváhagyott kedvezmény, azzal is számolj. Ha egy sor 0 Ft, ellenőrizd a mennyiséget, az egységárat, a kedvezményt és az esetleges jóváhagyott díjmentességet. Hiányzó adatnál kérdezz rá.

<a name="04-proposals-handoff.02-prepare-proposal--decisions"></a>

### Ezekről te döntesz

A hiányzó adatokra adott válaszok; az ajánlat sorai, ára és feltételei; hogy az ajánlat tervezet marad. Kiküldés csak a te kifejezett döntéseddel, a workshopon nem.

<a name="04-proposals-handoff.02-prepare-proposal--prompt"></a>

### Ezt kérd Claude-tól

```text
Az EstiWise-kapcsolattal készítsünk ajánlattervezetet. Csatoltam a customer-brief.md, business-profile.md, leads.csv, outreach.md fájlokat és az árlistát.
1. Ellenőrizd, hogy a customer-brief.md és az outreach.md lead_id-ja egyezik, és pontosan egy ilyen sor van a leads.csv-ben. A sor company mezője az ügyfél neve. Hiánynál vagy eltérésnél állj meg, és kérd az összetartozó fájlokat vagy a teljes mintaláncot. Egyezés esetén indíts belső kalkulációt az igényből, és egyenként tedd fel a rendszer kérdéseit.
2. Ha kész, mutasd meg a kalkulációt soronként. Nulla összegnél ellenőrizd a mennyiséget, az egységárat, a kedvezményt és az esetleges jóváhagyott díjmentességet. Hiányzó adatnál kérdezz rá.
3. Készíts belőle ajánlattervezetet, de NE küldd ki.
4. Írd meg a proposal.md tartalmát a közös mezőkkel: proposal_id, lead_id, offer_id, scope, quantity, unit_price, currency, price_basis, total, assumptions, status: draft. A lead_id és az offer_id a customer-brief.md-ből jön. A proposal_id-t olvasd vissza a létrejött EstiWise-tervezetből. Ha nem látod, kérd, hogy mutassam meg. Csak fájlos szimulációnál adj külön, a munkacsomagban egyedi proposal_id-t, vagy vedd át a teljes minta tervezetének azonosítóját.
5. Ellenőrizd a számítást soronként (mennyiség × egységár, az esetleges jóváhagyott kedvezménnyel). A total a végleges sorösszegek összege. A kedvezmény alapját az assumptions mezőben add meg.
```

<a name="04-proposals-handoff.02-prepare-proposal--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** csatold a bemeneteket. Egyeztesd a leadazonosítót a leadlistában, a megkeresésben és az igényben, majd indítsd a kalkulációt.
2. **2–9 perc:** válaszold meg a rendszer kérdéseit; a nem ismert adatot jelöld feltételezésnek.
3. **9–13 perc:** nézd át az árazott sorokat. Nulla összegnél keresd meg az okát és egyeztesd a javítást.
4. **13–17 perc:** készüljön el az ajánlattervezet; nézd meg az EstiWise-ban is.
5. **17–20 perc:** mentsd a `proposal.md` fájlt, és ellenőrizd a számítást.

<a name="04-proposals-handoff.02-prepare-proposal--check"></a>

### Ellenőrizd az eredményt

- Az EstiWise-ban létezik az ajánlattervezet, és nincs kiküldve.
- A `proposal.md` minden kötelező mezőt tartalmaz; a `lead_id` és az `offer_id` egyezik a `customer-brief.md`-vel.
- A `proposal_id` az EstiWise-tervezetből visszaolvasott azonosító, fájlos szimulációnál pedig a tervezethez rendelt egyedi azonosító.
- A pénznem és a nettó/bruttó jelölés megvan; a `total` a jóváhagyott kedvezménnyel korrigált sorösszeg, több sornál a sorösszegek összege.
- A feltételezések az `assumptions` mezőben, a `status` értéke `draft`.
- Össze tudod hasonlítani egy korábbi saját ajánlatoddal: hol tér el, és miért.

<a name="04-proposals-handoff.02-prepare-proposal--help"></a>

### Ha elakadtál

- **A kalkuláció sokáig fut:** ne indítsd újra (minden indítás új kalkuláció); kérd Claude-ot, hogy ellenőrizze az állapotát.
- **Egy sor 0 Ft:** nézd meg a mennyiséget, az egységárat és a kedvezményt. Ha a sor díjmentes, ellenőrizd a jóváhagyását. A mentor segít, ha a már árazott kalkulációt javítani kell.
- Öt perc után használd a [mentőcsomagot](#recovery).

<a name="04-proposals-handoff.02-prepare-proposal--handoff"></a>

### Ezt viszed tovább

A `proposal.md` a belső átadás és a 05-ös folyamatpróba bemenete.

<a name="04-proposals-handoff.02-prepare-proposal--extra"></a>

### Ha maradt időd

Kérd Claude-ot, hogy szabja át az ajánlatsablont: logó, bemutatkozó szöveg, fizetési és érvényességi feltételek. Változtatás előtt kérj előnézetet.

<a name="04-proposals-handoff.03-handoff"></a>

## Belső átadás és következő feladat

**Állapot: review.**

**Azonosító:** `04-proposals-handoff.03-handoff` · **Állapot:** review · **Időkeret:** 20 perc

04 / Ajánlatadás

Egy ajánlat. Egy felelős. Egy következő lépés határidővel.

20 perc · Próbára vár · review · EstiWise, Wenova · Gyömrei Máté

<a name="04-proposals-handoff.03-handoff--result"></a>

### Ezt készíted el

Az ajánlathoz tartozó értékesítési lehetőséget a megfelelő szakaszban az EstiWise értékesítési folyamatában, és egy `handoff.md` fájlt: ki a felelős, mi a következő feladat, mikorra.

<a name="04-proposals-handoff.03-handoff--needs"></a>

### Erre lesz szükséged

A `proposal.md` és az EstiWise-ban elkészült ajánlattervezet. Mintával: [IrodaLiget átadásminta](../scenarios/office-plants/outputs/handoff.md).

<a name="04-proposals-handoff.03-handoff--explanation"></a>

### Így működik

Ajánlattervezet → értékesítési szakasz → felelős → következő feladat és határidő. Az átadás akkor jó, ha egy másik kolléga a fájlból tudja, mi a dolga, anélkül hogy rákérdezne. Tervezet állapotú ajánlatból nem indul teljesítés.

<a name="04-proposals-handoff.03-handoff--decisions"></a>

### Ezekről te döntesz

Ki a felelős; mi a következő lépés (pl. egyeztetés, ajánlat felülvizsgálata, kiküldés jóváhagyása); a határidő; az értékesítési szakasz.

<a name="04-proposals-handoff.03-handoff--prompt"></a>

### Ezt kérd Claude-tól

```text
Az EstiWise-kapcsolattal készítsük el az ajánlat belső átadását. Csatoltam a proposal.md fájlomat.
1. Mutasd meg az értékesítési folyamat szakaszait, és hogy az ajánlatomhoz tartozó lehetőség most hol áll.
2. Javasolj megfelelő szakaszt; csak a jóváhagyásom után mozgasd át.
3. Kérdezd meg, ki a felelős, mi a következő feladat és mi a határidő.
4. Írd meg a handoff.md tartalmát a közös mezőkkel: proposal_id, lead_id, decision_status, owner, next_task, due. A proposal_id-t és a lead_id-t a proposal.md-ből másold át. A decision_status maradjon draft, amíg nincs elfogadott ajánlat.
```

<a name="04-proposals-handoff.03-handoff--steps"></a>

### Haladj végig ezeken

1. **0–4 perc:** nézd meg az értékesítési folyamatot és a lehetőséged helyét.
2. **4–10 perc:** döntsd el a szakaszt, a felelőst, a következő feladatot és a határidőt.
3. **10–15 perc:** mentsd a `handoff.md` fájlt.
4. **15–20 perc:** cserélj a szomszédoddal: értse-e a fájlodból, mi a következő lépés?

<a name="04-proposals-handoff.03-handoff--check"></a>

### Ellenőrizd az eredményt

- A lehetőség a jóváhagyott szakaszban van az EstiWise-ban.
- A `handoff.md` minden mezőt tartalmaz; a `proposal_id` és a `lead_id` egyezik a `proposal.md`-vel.
- A következő feladat konkrét, van felelőse és határideje.
- A szomszédod a fájlból elmondja, mi a teendő.
- Nem indult teljesítés, és nem ment ki ajánlat.

<a name="04-proposals-handoff.03-handoff--help"></a>

### Ha elakadtál

Ha az értékesítési folyamat nem érhető el, a `handoff.md` fájlt az [átadásminta](../scenarios/office-plants/outputs/handoff.md) szerkezetével kézzel is elkészítheted. Öt perc után használd a [mentőcsomagot](#recovery).

<a name="04-proposals-handoff.03-handoff--handoff"></a>

### Ezt viszed tovább

A `proposal.md` és a `handoff.md` a 05-ös folyamatpróba bemenete.

<a name="04-proposals-handoff.03-handoff--extra"></a>

### Ha maradt időd: webes előnézet (75–90. perc)

Nézd meg az ajánlatkérőt előnézetben vagy zárt tesztoldalon.

```text
Segíts előnézetben vagy zárt tesztoldalon megnézni az ajánlatkérőmet. Kérdezd meg, milyen rendszeren fut az oldalam, és adj útmutatót a teszthez. Hagyd a nyilvános oldalt érintetlenül.
```

A 05-ös modulhoz az előnézet kihagyható. Ha később közzéteszed az ajánlatkérőt vagy megosztod a linkjét, előbb nézd át a végleges változatot, és külön dönts a közzétételről.

**Hazavihető promptok a finomhangoláshoz:** heti átnézés (hol tér el az ár, hol akadt el az ügyfél); utánkövető levéltervezet nem válaszoló ügyfélnek; új szolgáltatás felvétele rövid leírásból; akciós vagy szezonális árváltozás. Három szabály: legfeljebb 7 ügyfélkérdés; az első 10 ajánlatot kézzel ellenőrizd; havonta frissítsd az árakat.

<a name="recovery"></a>

## Segítség elakadáskor

1. Mentsd a saját eddigi munkádat.
2. Válaszd ugyanazt a mintavállalkozást, amellyel elkezdtél dolgozni.
3. A `scenarios/<scenario>/outputs/` mappából vedd át az aktuális modul hiányzó kimeneteit.
4. A haladási naplóban jelöld: `completed_with_example`, végrehajtás: `simulation`.
5. Mondd el saját szavaiddal, mit készített volna a lépés, majd folytasd a következő leckével.

Ha az EstiWise-fiók vagy a Claude-kapcsolat nem működik, a mentor előkészített demófiókot ad, amely a három mintavállalkozás egyikére van beállítva. A demófiókban ténylegesen végrehajtott és visszaolvasott műveletet `sandbox` módban rögzítsd. Az `evidence` mezőben nevezd meg, mit láttál visszaolvasáskor, például a tervezet azonosítóját és állapotát. Ha csak mintafájlból dolgozol, jelöld `simulation`-nek.

Saját üzletről mintára váltáskor külön munkapéldányban a teljes kapcsolódó mintaláncot használd; ne keverd a minta árait a saját ajánlatoddal. Fájlos szimulációban ellenőrizd az árat és a mennyiséget a mintaárlistán, majd olvasd vissza a lead és az ajánlat azonosítóját a tervezetből és az átadásból.

<a name="examples"></a>

## Gyakorlópéldák

A közös, összefüggő kitalált példák a repó `scenarios/` mappájában találhatók. EstiWise-specifikus kimenet (demófiók-képernyőkép, exportált ajánlat) a próba után kerül ide, a teszt dátumával és a példavállalkozás azonosítójával.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Következő modul →](05-pipeline-review.md)

Wenova × Brandiseer × Blackhole Media × EstiWise
