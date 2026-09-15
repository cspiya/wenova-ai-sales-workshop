# Folyamatpróba és indulási terv

[HTML-változat](05-pipeline-review.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Egy ügyféleset teljes útjának ellenőrzése](#05-pipeline-review.01-review-pipeline)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

05-pipeline-review · draft

A modul állapotát és a leckék készültségét az alábbi jelölések mutatják.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: szerkesztői váz, partneri kidolgozás és próba szükséges.**

10 perc folyamatpróba + 10 perc állapotellenőrzés + 10 perc másnapi terv.

<a name="overview-1"></a>

### Bemenet

business-profile.md, campaign-plan.md, leads.csv, customer-brief.md, proposal.md, handoff.md

<a name="overview-2"></a>

### Kimenet

pipeline-review.md

<a name="overview-3"></a>

### Folytatás elakadás esetén

Használd a [mentőútvonalat](#recovery). A kimeneteket a közös adatátadási szabály alapján ellenőrizzük.

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `05-pipeline-review`
- Szakmai gazda: Wenova
- Időkeret: 30 perc
- Állapot: draft – kidolgozás és próba szükséges.

<a name="05-pipeline-review.01-review-pipeline"></a>

## Egy ügyféleset teljes útjának ellenőrzése

**Azonosító:** `05-pipeline-review.01-review-pipeline` · **Állapot:** draft · **Időkeret:** 30 perc

**Szerkesztői váz: a szakmai felelősnek ki kell dolgoznia és próbálnia.**

<a name="05-pipeline-review.01-review-pipeline--section-1"></a>

### Ezt készíted el

A(z) „Egy ügyféleset teljes útjának ellenőrzése” feladat saját vagy mintaüzletre alkalmazott eredményét. A konkrét ellenőrizhető minimumot a partner rögzíti.

<a name="05-pipeline-review.01-review-pipeline--section-2"></a>

### Erre lesz szükséged

business-profile.md, campaign-plan.md, leads.csv, customer-brief.md, proposal.md, handoff.md

<a name="05-pipeline-review.01-review-pipeline--section-3"></a>

### Így működik

A partner röviden mutassa be az üzleti összefüggést és egy kész mintát.

<a name="05-pipeline-review.01-review-pipeline--section-4"></a>

### Ezekről te döntesz

A célról, a felhasznált üzleti adatok megfelelőségéről és az eredmény elfogadásáról.

<a name="05-pipeline-review.01-review-pipeline--section-5"></a>

### Ezt kérd Claude-tól

> Vezess végig ezen a leckén a tananyag alapján, egyszerre egy feladattal. Ha a lecke még draft, jelezd, és csak az előkészített példát magyarázd el; hiányzó eszközlépést ne találj ki.

<a name="05-pipeline-review.01-review-pipeline--section-6"></a>

### Haladj végig ezeken

1. Nyisd meg a bemenetet.
2. A kidolgozott partneri feladat alapján készítsd el a munkadarabot.
3. Mentsd és ellenőrizd az eredményt.

A partner a második lépést konkrét, kipróbált útmutatóval egészíti ki.

<a name="05-pipeline-review.01-review-pipeline--section-7"></a>

### Ellenőrizd az eredményt

A partner definiáljon megfigyelhető feltételeket. Amíg ez hiányzik, a lecke nem ready.

<a name="05-pipeline-review.01-review-pipeline--section-8"></a>

### Ha elakadtál

Öt perc után használd a [mentőcsomagot](#recovery).

<a name="05-pipeline-review.01-review-pipeline--section-9"></a>

### Ezt viszed tovább

A modul kimeneteiből a leckéhez tartozó eredményt: pipeline-review.md. A pontos leckénkénti átadást a partner rögzíti.

<a name="05-pipeline-review.01-review-pipeline--section-10"></a>

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

[Modulok](../README.md#modules)[Hazavihető eredmények](../README.md#outputs)

Wenova × Brandiseer × Blackhole Media × EstiWise
