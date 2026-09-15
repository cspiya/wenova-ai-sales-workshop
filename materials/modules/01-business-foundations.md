# Üzleti alapok és AI-működés

[HTML-változat](01-business-foundations.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Üzleti ajánlat és célcsoport kialakítása](#01-business-foundations.01-offer-and-audience)
- [Minimális marketing- és sales stratégia](#01-business-foundations.02-sales-strategy)
- [Céges AI-munkautasítás és első eszközművelet](#01-business-foundations.03-ai-workspace)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

01-business-foundations · draft

A modul állapotát és a leckék készültségét az alábbi jelölések mutatják.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: szerkesztői váz, partneri kidolgozás és próba szükséges.**

15 perc bemutató + 3 × 20 perc gyakorlat + 15 perc ellenőrzés és pótlás.

<a name="overview-1"></a>

### Bemenet

business-profile.md

<a name="overview-2"></a>

### Kimenet

business-profile.md, sales-strategy.md, ai-work-instructions.md

<a name="overview-3"></a>

### Folytatás elakadás esetén

Használd a [mentőútvonalat](#recovery). A kimeneteket a közös adatátadási szabály alapján ellenőrizzük.

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `01-business-foundations`
- Szakmai gazda: Wenova
- Időkeret: 90 perc
- Állapot: draft – kidolgozás és próba szükséges.

<a name="01-business-foundations.01-offer-and-audience"></a>

## Üzleti ajánlat és célcsoport kialakítása

01 / Üzleti alapok

Egy célcsoport. Egy világos ajánlat. Használható alap a következő lépéshez.

20 percPróbára vár · reviewWenova · Piya Csaba, Kemény Krisztián

<a name="01-business-foundations.01-offer-and-audience--result"></a>

### Ezt készíted el

Egyetlen eladható ajánlatot egy körülhatárolt célcsoportnak, a `business-profile.md` fájlban. Ebből készül majd a kampány, a megkeresés és az ajánlat. A cél most a világos, tesztelhető üzleti alap.

<a name="01-business-foundations.01-offer-and-audience--needs"></a>

### Erre lesz szükséged

Előzetes üzleti alaplapodra. Ha nincs, válassz a `scenarios/` három kitalált vállalkozásából. Ehhez a leckéhez csak Claude és menthető szöveg szükséges; partnerfiók nem kell.

[Kitalált növénygondozási vállalkozás alaplapja](../scenarios/office-plants/outputs/business-profile.md) · [Mintaárlista](../scenarios/office-plants/price-list.csv)

<a name="01-business-foundations.01-offer-and-audience--explanation"></a>

### Így működik

Célcsoport → konkrét probléma → körülhatárolt szolgáltatás → árazási alap → következő ügyféllépés. Példa: kis irodák növénygondozása; havi két látogatás; megadott mintadíj; következő lépés egy helyszíni felmérés kérése. Ha egyszerre három külön szolgáltatást kínálnál három közönségnek, válassz ma egyet.

<a name="01-business-foundations.01-offer-and-audience--decisions"></a>

### Ezekről te döntesz

Saját üzlet vagy minta; választott célcsoport; a szolgáltatás tartalma és kizárásai; jóváhagyott ár vagy még nyitott árazás. Az AI ne találjon ki valódi referenciát, árkedvezményt vagy vállalást.

<a name="01-business-foundations.01-offer-and-audience--prompt"></a>

### Ezt kérd Claude-tól

```text
Segíts egyetlen világos ajánlatot kialakítani a workshophoz. Először kérdezd meg, saját üzlettel vagy mintával dolgozom.
Egyenként kérdezz a célcsoportról, problémáról, szolgáltatásról, árazásról és következő ügyféllépésről.
A bizonytalan adatokat jelöld nyitottnak. Készíts business-profile.md tartalmat a közös mezőkkel.
Ellenőrizd az alábbi kész feltételeket, de az üzleti döntéseket velem hagyasd jóvá.
```

A közös mezőket a [másolható üzleti alaplap](../starter-kit/business-profile.md) tartalmazza. Add át ezt is az AI-nak.

<a name="01-business-foundations.01-offer-and-audience--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** válassz saját üzletet vagy mintát. Minta esetén annak árlistáját is használd.
2. **3–10 perc:** válaszold meg Claude kérdéseit. Minden kérdésre egy-két mondat elég.
3. **10–15 perc:** nézd át a vázlatot. Szűkítsd egy célcsoportra és egy ajánlatra. Jelöld a hiányzó adatokat.
4. **15–18 perc:** mentsd `business-profile.md` néven a saját munkacsomagodba.
5. **18–20 perc:** mondd el két mondatban, kinek mit kínálsz, és mi legyen az érdeklődő következő lépése.

<a name="01-business-foundations.01-offer-and-audience--check"></a>

### Ellenőrizd az eredményt

- Egyetlen ajánlat és meghatározott célcsoport szerepel.
- Le van írva a probléma és a szolgáltatás kézzelfogható eredménye.
- Megvan a tartalom, legalább egy kizárás, az árazási alap vagy egyértelmű nyitott jelölése.
- Szerepel egy fő csatorna és egy következő ügyféllépés.
- A feltételezések elkülönülnek a résztvevő által jóváhagyott adatoktól.
- A fájl elmentve, a résztvevő saját szavaival meg tudja indokolni az ajánlatot.

<a name="01-business-foundations.01-offer-and-audience--help"></a>

### Ha elakadtál

Ha öt perc alatt nincs ötlet, használd az `office-plants` minta alaplapját. Változtass meg benne egy célcsoporti szempontot, és indokold meg a döntést. Ha az ár bizonytalan, jelöld `open`; a későbbi ajánlatkészítésnél használj külön mintapéldányt. Ha Claude nem elérhető, az alaplap mezőit a statikus minta mellett kézzel is kitöltheted, és mentorral ellenőrizheted.

<a name="01-business-foundations.01-offer-and-audience--handoff"></a>

### Ezt viszed tovább

Az ellenőrzött `business-profile.md` a következő, minimális stratégiát kialakító lecke bemenete. A naplóban rögzítsd az eredményt és a gyakorlási módot; mintából dolgozva `completed_with_example` legyen a tanulási állapot.

<a name="01-business-foundations.01-offer-and-audience--extra"></a>

### Ha maradt időd

Írj egy alternatív célcsoportot, és mondd meg, mi változna az ajánlatban. A kötelező munkapéldányban maradjon az első választás.

<a name="01-business-foundations.02-sales-strategy"></a>

## Minimális marketing- és sales stratégia

**Azonosító:** `01-business-foundations.02-sales-strategy` · **Állapot:** draft · **Időkeret:** 20 perc

**Szerkesztői váz: a szakmai felelősnek ki kell dolgoznia és próbálnia.**

<a name="01-business-foundations.02-sales-strategy--section-1"></a>

### Ezt készíted el

A(z) „Minimális marketing- és sales stratégia” feladat saját vagy mintaüzletre alkalmazott eredményét. A konkrét ellenőrizhető minimumot a partner rögzíti.

<a name="01-business-foundations.02-sales-strategy--section-2"></a>

### Erre lesz szükséged

business-profile.md

<a name="01-business-foundations.02-sales-strategy--section-3"></a>

### Így működik

A partner röviden mutassa be az üzleti összefüggést és egy kész mintát.

<a name="01-business-foundations.02-sales-strategy--section-4"></a>

### Ezekről te döntesz

A célról, a felhasznált üzleti adatok megfelelőségéről és az eredmény elfogadásáról.

<a name="01-business-foundations.02-sales-strategy--section-5"></a>

### Ezt kérd Claude-tól

> Vezess végig ezen a leckén a tananyag alapján, egyszerre egy feladattal. Ha a lecke még draft, jelezd, és csak az előkészített példát magyarázd el; hiányzó eszközlépést ne találj ki.

<a name="01-business-foundations.02-sales-strategy--section-6"></a>

### Haladj végig ezeken

1. Nyisd meg a bemenetet.
2. A kidolgozott partneri feladat alapján készítsd el a munkadarabot.
3. Mentsd és ellenőrizd az eredményt.

A partner a második lépést konkrét, kipróbált útmutatóval egészíti ki.

<a name="01-business-foundations.02-sales-strategy--section-7"></a>

### Ellenőrizd az eredményt

A partner definiáljon megfigyelhető feltételeket. Amíg ez hiányzik, a lecke nem ready.

<a name="01-business-foundations.02-sales-strategy--section-8"></a>

### Ha elakadtál

Öt perc után használd a [mentőcsomagot](#recovery).

<a name="01-business-foundations.02-sales-strategy--section-9"></a>

### Ezt viszed tovább

A modul kimeneteiből a leckéhez tartozó eredményt: business-profile.md, sales-strategy.md, ai-work-instructions.md. A pontos leckénkénti átadást a partner rögzíti.

<a name="01-business-foundations.02-sales-strategy--section-10"></a>

### Ha maradt időd

Választható bővítést csak a kötelező út kipróbálása után adjunk hozzá.

<a name="01-business-foundations.03-ai-workspace"></a>

## Céges AI-munkautasítás és első eszközművelet

**Azonosító:** `01-business-foundations.03-ai-workspace` · **Állapot:** draft · **Időkeret:** 20 perc

**Szerkesztői váz: a szakmai felelősnek ki kell dolgoznia és próbálnia.**

<a name="01-business-foundations.03-ai-workspace--section-1"></a>

### Ezt készíted el

A(z) „Céges AI-munkautasítás és első eszközművelet” feladat saját vagy mintaüzletre alkalmazott eredményét. A konkrét ellenőrizhető minimumot a partner rögzíti.

<a name="01-business-foundations.03-ai-workspace--section-2"></a>

### Erre lesz szükséged

business-profile.md

<a name="01-business-foundations.03-ai-workspace--section-3"></a>

### Így működik

A partner röviden mutassa be az üzleti összefüggést és egy kész mintát.

<a name="01-business-foundations.03-ai-workspace--section-4"></a>

### Ezekről te döntesz

A célról, a felhasznált üzleti adatok megfelelőségéről és az eredmény elfogadásáról.

<a name="01-business-foundations.03-ai-workspace--section-5"></a>

### Ezt kérd Claude-tól

> Vezess végig ezen a leckén a tananyag alapján, egyszerre egy feladattal. Ha a lecke még draft, jelezd, és csak az előkészített példát magyarázd el; hiányzó eszközlépést ne találj ki.

<a name="01-business-foundations.03-ai-workspace--section-6"></a>

### Haladj végig ezeken

1. Nyisd meg a bemenetet.
2. A kidolgozott partneri feladat alapján készítsd el a munkadarabot.
3. Mentsd és ellenőrizd az eredményt.

A partner a második lépést konkrét, kipróbált útmutatóval egészíti ki.

<a name="01-business-foundations.03-ai-workspace--section-7"></a>

### Ellenőrizd az eredményt

A partner definiáljon megfigyelhető feltételeket. Amíg ez hiányzik, a lecke nem ready.

<a name="01-business-foundations.03-ai-workspace--section-8"></a>

### Ha elakadtál

Öt perc után használd a [mentőcsomagot](#recovery).

<a name="01-business-foundations.03-ai-workspace--section-9"></a>

### Ezt viszed tovább

A modul kimeneteiből a leckéhez tartozó eredményt: business-profile.md, sales-strategy.md, ai-work-instructions.md. A pontos leckénkénti átadást a partner rögzíti.

<a name="01-business-foundations.03-ai-workspace--section-10"></a>

### Ha maradt időd

Választható bővítést csak a kötelező út kipróbálása után adjunk hozzá.

<a name="recovery"></a>

## Segítség elakadáskor

1. Mentsd a saját eddigi munkádat.
2. Válaszd ugyanazt a mintavállalkozást, amellyel elkezdtél dolgozni.
3. A `scenarios/<scenario>/outputs/` mappából vedd át az aktuális modul hiányzó kimeneteit.
4. A haladási naplóban jelöld: `completed_with_example`, végrehajtás: `simulation`.
5. Mondd el saját szavaiddal, mit készített volna a lépés, majd folytasd a következő leckével.

Saját üzletről mintára váltáskor külön munkapéldányban a teljes kapcsolódó mintaláncot használd; ne keverd a minta árait a saját ajánlatoddal. A statikus csomag nem bizonyít működő partnerintegrációt.

<a name="examples"></a>

## Gyakorlópéldák

A közös, összefüggő kitalált példák a repó `scenarios/` mappájában találhatók. A partner ide adhat eszközspecifikus kimenetet; jelölje a teszt dátumát és a példavállalkozás azonosítóját.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Következő modul →](02-content-marketing.md)

Wenova × Brandiseer × Blackhole Media × EstiWise
