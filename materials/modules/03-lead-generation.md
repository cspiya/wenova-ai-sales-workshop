# Ügyfélszerzés és leadkezelés

**Állapot: review.**

[HTML-változat](03-lead-generation.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Bemutató: hogyan szereznek ügyfelet a sales csapatok?](#talk)
- [Célközönség és öt minősített lead](#03-lead-generation.01-qualify-leads)
- [Kampány és személyre szabott üzenetek](#03-lead-generation.02-personalize-outreach)
- [Ügyfélválasz feldolgozása](#03-lead-generation.03-process-reply)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

03-lead-generation · review

Leadlistától a feldolgozott ügyfélválaszig, a Sales Bot és a Claude közös használatával.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: kidolgozott tananyag, oktatói próbára vár.**

15 perc bemutató + 3 × 20 perc gyakorlat + 15 perc ellenőrzés és pótlás.

A modulban a Blackhole Media saját sales eszközét, a [Sales Botot](https://sales-bot.io/) használjuk. A Sales Bot MCP-n keresztül kapcsolódik a Claude-hoz, így minden lépést a Claude-ban, hétköznapi mondatokkal végzel: nem kell egy új felületen kattintgatnod.

**Fontos: ma semmi nem megy ki élesben.** A workshop-fiókok nincsenek LinkedIn-profilhoz kötve, a leadlista legfeljebb 100 fős, a válaszokat pedig mi generáljuk a gyakorláshoz. A végrehajtási mód: `sandbox`.

<a name="overview-1"></a>

### Bemenet

business-profile.md, campaign-plan.md

<a name="overview-2"></a>

### Kimenet

leads.csv, outreach.md, customer-brief.md

<a name="overview-3"></a>

### Folytatás elakadás esetén

Használd a [mentőútvonalat](#recovery). A kimeneteket a közös adatátadási szabály alapján ellenőrizzük.

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `03-lead-generation`
- Szakmai gazda: Blackhole Media
- Előadók: Bölcskei Balázs, Nagy Bogáta
- Időkeret: 90 perc
- Állapot: review – kidolgozva, oktatói próba és szakmai elfogadás szükséges.

<a name="talk"></a>

## Bemutató: hogyan szereznek ügyfelet a sales csapatok?

**15 perc, a gyakorlat előtt.** Ez a vetített bemutató forgatókönyve; a gyakorlatok után is visszaolvashatod.

<a name="talk-1"></a>

### Így csinálták eddig

1. **Adatbázis vásárlás:** például az Optentől, minden magyar céggel, e-mail-címmel és telefonszámmal.
2. **Hideghívás:** a megvett listát végigtelefonálták.
3. **E-mail kampány:** tömeges hideg e-mailek ugyanarra a listára.
4. **Kézi keresés:** újabban Apollo-kreditekkel vagy egyesével a LinkedInen.

<a name="talk-2"></a>

### Miért nem elég ma már?

- **Pontatlan célzás:** az adatbázist csak számok alapján lehet szűrni (létszám, árbevétel), ez nem fedi a valóságot.
- **Romló kézbesítés:** a Gmail és az Outlook egyre szigorúbban szűri a hideg e-maileket.
- **Egy üzenet kevés:** a konverzió egy jól időzített üzenetsorozatból jön, nem egyetlen megkeresésből.

<a name="talk-3"></a>

### Miért a LinkedIn?

Ott van a célközönség, a hangnem személyesebb, és tartalommal bizalmat építhetsz. Aki bekerül a kapcsolati hálódba, utána a posztjaidat is látja: a hálózat hosszú távú befektetés. A Blackhole Media 2017 óta foglalkozik LinkedIn-megkeresésekkel.

<a name="talk-4"></a>

### A rejtett szivárgás: a válaszkezelés

A legtöbb lead nem a megkeresésnél vész el, hanem utána. Közel száz együttműködésben azt láttuk, hogy a sales csapatok nem kezelik rendesen a válaszokat, és nem követik a leadeket. Kisebb cégeknél sokszor maga a cégvezető salesel, sok más feladata mellett. Külön CRM-re pedig extra költséget fizetnek.

<a name="talk-5"></a>

### Mit csinál a Sales Bot?

| Mikor? | Mit végez el? |
| --- | --- |
| Kampány előtt | Felépíti a célközönséget: nem kell adatbázist vásárolni. |
| Kampány közben | Bizonyított sablonokból megírja az üzeneteket, többféle kampánytípussal. |
| Kampány után | Kategorizálja a válaszokat, válaszjavaslatot ír, időpontot egyeztet, CRM-ben követ. |

Mindez az **AI brainre** épül: ebben tárolja a Sales Bot a céged adatait, ajánlatait és ideális ügyfelét, és ez alapján ír a nevedben. Magyar rendszer: jól ír magyarul, tegeződve vagy magázódva, és ismeri a magyar üzleti szokásokat, például hogy sokan szívesebben egyeztetnek időpontot kézzel.

<a name="03-lead-generation.01-qualify-leads"></a>

## Célközönség és öt minősített lead

**Állapot: review.**

**Azonosító:** `03-lead-generation.01-qualify-leads` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** sandbox

<a name="03-lead-generation.01-qualify-leads--result"></a>

### Ezt készíted el

A Sales Bot **AI brainjét** kitöltöd a saját vagy a mintavállalkozásod adataival, majd egy legfeljebb 100 fős leadlistát készítesz a célközönségedre. A listából öt leadet minősítesz, és `leads.csv` néven mented.

<a name="03-lead-generation.01-qualify-leads--needs"></a>

### Erre lesz szükséged

- Az 01-es modulban mentett `business-profile.md` és a 02-es modul `campaign-plan.md` fájlja.
- A workshop-fiókod a Sales Botban. A fiókot előre létrehoztuk; a belépő linket e-mailben kaptad meg.
- Claude, amelyben be van kapcsolva a Sales Bot connector (MCP). A beállításban a mentorok segítenek.

Saját fiók nélkül: [IrodaLiget mintaalaplap](../scenarios/office-plants/outputs/business-profile.md) · [Minta leadlista](../scenarios/office-plants/outputs/leads.csv)

<a name="03-lead-generation.01-qualify-leads--explanation"></a>

### Így működik

A célzás négy szűrőn múlik: **ország**, **cégméret** (létszámsáv), **iparág** és **döntéshozó** (pozíció és senioritás). A Sales Bot ezek alapján keres; nem kell adatbázist vásárolni. A nagy számok miatt mindig lesz néhány melléfogás, ezért a listát átnézzük, és csak a valóban illeszkedő leadeket visszük tovább.

**Kitalált példa:** az IrodaLiget 10–40 fős budapesti irodák irodavezetőit és ügyvezetőit célozza.

A leadek átnézését, törlését és a CSV-feltöltést a kivetítőn a Sales Bot felületén is megmutatjuk.

<a name="03-lead-generation.01-qualify-leads--decisions"></a>

### Ezekről te döntesz

Saját üzlet vagy minta; melyik ajánlatodra keresel; a négy szűrő értéke; mely leadek illeszkednek valóban, és melyeket törlöd a listáról.

<a name="03-lead-generation.01-qualify-leads--prompt"></a>

### Ezt kérd Claude-tól

```text
A Sales Bot eszközeivel dolgozunk a workshopon, sandbox módban: semmit ne küldj ki.
1. Töltsd ki a Sales Bot AI brainjét a csatolt business-profile.md alapján: cég, ajánlat(ok), ideális ügyfél, hangnem (tegeződő vagy magázódó). Előtte mutasd meg, mit írnál be, és hagyasd jóvá velem.
2. Ezután készíts leadlistát a fő ajánlatomra. Kérdezd meg tőlem egyenként: ország, cégméret, iparág, döntéshozói pozíció. Legfeljebb 100 lead legyen.
3. Mutass öt leadet a listáról. Mindegyikhez írd le egy mondatban, miért illik vagy miért nem illik a célközönségbe.
4. A jóváhagyásom után készíts leads.csv tartalmat ezekkel az oszlopokkal: lead_id,company,fit_reason,status,next_action. A status értéke qualified vagy open legyen.
```

Csatold a `business-profile.md` fájlodat.

<a name="03-lead-generation.01-qualify-leads--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** lépj be a belépő linkkel, és ellenőrizd, hogy a Claude látja a Sales Bot eszközeit („Milyen Sales Bot eszközeid vannak?”).
2. **3–8 perc:** másold be a promptot, csatold a `business-profile.md` fájlt, és hagyd jóvá az AI brain tartalmát.
3. **8–14 perc:** válaszold meg a szűrőkre vonatkozó kérdéseket, és indítsd el a keresést.
4. **14–18 perc:** nézd át az öt leadet. Ami nem illik, jelöld `open` státusszal vagy töröld.
5. **18–20 perc:** mentsd a `leads.csv` fájlt a saját munkacsomagodba.

<a name="03-lead-generation.01-qualify-leads--check"></a>

### Ellenőrizd az eredményt

- Az AI brainben szerepel a céged, legalább egy ajánlat, az ideális ügyfél és a hangnem.
- A leadlista legfeljebb 100 fős, és a négy szűrő mindegyikét te adtad meg.
- A `leads.csv` öt sort tartalmaz a közös oszlopokkal; mindegyikhez van indoklás.
- Legalább három lead `qualified`, és meg tudod mondani, miért.

<a name="03-lead-generation.01-qualify-leads--help"></a>

### Ha elakadtál

Ha öt perc után sem éri el a Claude a Sales Botot, jelezd egy mentornak. Ha a belépés vagy a connector ma nem működik, használd az IrodaLiget [minta leadlistáját](../scenarios/office-plants/outputs/leads.csv): minősítsd újra az öt leadet a saját szavaiddal, és a haladási naplóban jelöld `completed_with_example`, végrehajtás `simulation`.

<a name="03-lead-generation.01-qualify-leads--handoff"></a>

### Ezt viszed tovább

A `leads.csv` és a kitöltött AI brain a következő lecke bemenete: erre a listára készül a kampány.

<a name="03-lead-generation.01-qualify-leads--extra"></a>

### Ha maradt időd

Kérd meg a Claude-ot, hogy hasonlítsa össze a listát egy második ajánlatod célközönségével. A kötelező munkapéldányban az első lista maradjon.

<a name="03-lead-generation.02-personalize-outreach"></a>

## Kampány és személyre szabott üzenetek

**Állapot: review.**

**Azonosító:** `03-lead-generation.02-personalize-outreach` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** sandbox

<a name="03-lead-generation.02-personalize-outreach--result"></a>

### Ezt készíted el

A minősített leadlistára kampányt hozol létre a Sales Botban. A rendszer megírja az üzenetsorozatot, te átnézed és javítod, majd egy kiválasztott leadhez tartozó üzenetet `outreach.md` néven mentesz.

<a name="03-lead-generation.02-personalize-outreach--needs"></a>

### Erre lesz szükséged

- Az előző lecke `leads.csv` fájlja és a kitöltött AI brain.
- A 02-es modul `campaign-plan.md` fájlja: ebből jön az ajánlat és a cselekvésre hívás.

Saját fiók nélkül: [Minta megkeresés](../scenarios/office-plants/outputs/outreach.md)

<a name="03-lead-generation.02-personalize-outreach--explanation"></a>

### Így működik

A kampány három dologból áll: **leadlista**, **üzenetsorozat** és **ütemezés**. A Sales Bot az AI brainben tárolt ajánlatból és a kiválasztott kampánytípusból bizonyított sablonok alapján megírja az üzeneteket. Egy üzenet kevés: a sorozat a bejelölésből, egy első üzenetből és utánkövetésekből áll, amelyek leállnak, ha a lead válaszol vagy elutasít.

A kampány ma nincs LinkedIn-profilhoz kötve, ezért semmi nem megy ki.

<a name="03-lead-generation.02-personalize-outreach--decisions"></a>

### Ezekről te döntesz

Melyik ajánlatról szól a kampány; a kampánytípus; hány üzenetből álljon a sorozat; mit módosítasz az AI által írt szövegen; mikor álljon le a megkeresés.

<a name="03-lead-generation.02-personalize-outreach--prompt"></a>

### Ezt kérd Claude-tól

```text
Sandbox módban dolgozunk: semmit ne küldj ki.
Hozz létre a Sales Botban kampányt a leads.csv-ben szereplő leadlistára.
A kampány a campaign-plan.md-ben szereplő ajánlatról szóljon. Kérdezd meg, milyen kampánytípust és hány üzenetet szeretnék, és mutasd meg a választható kampánytípusokat.
Ha kész, listázd ki az üzeneteket és a lépések közötti várakozási időket.
A javításaim után készíts outreach.md tartalmat egy általam kiválasztott leadhez ezekkel a mezőkkel: lead_id, first_message, followup, stop_condition.
```

Csatold a `leads.csv` és a `campaign-plan.md` fájlt.

<a name="03-lead-generation.02-personalize-outreach--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** másold be a promptot, és csatold a két fájlt.
2. **3–9 perc:** válassz kampánytípust és üzenetszámot, majd hozd létre a kampányt.
3. **9–15 perc:** olvasd végig az üzeneteket. Ami nem a te hangodon szól, azt kérd átírni.
4. **15–18 perc:** válassz egy leadet, és ellenőrizd a hozzá tartozó első üzenetet és utánkövetést.
5. **18–20 perc:** mentsd az `outreach.md` fájlt.

<a name="03-lead-generation.02-personalize-outreach--check"></a>

### Ellenőrizd az eredményt

- A kampány a te leadlistádra és a választott ajánlatodra épül.
- Az első üzenet személyes, rövid, és nem ad el azonnal.
- Az utánkövetés új értéket ad, nem ismétli az első üzenetet.
- Az `outreach.md` tartalmazza a négy mezőt, a `stop_condition` pedig kimondja, mikor áll le a megkeresés.
- Egyetlen üzenet sem ment ki: ellenőrizted, hogy a kampány nincs élesítve.

<a name="03-lead-generation.02-personalize-outreach--help"></a>

### Ha elakadtál

Ha a kampány létrehozása elakad, kérd meg a Claude-ot, hogy csak az üzenetsorozatot írja meg a `campaign-plan.md` alapján, a Sales Bot nélkül. Ha ez sem megy, használd a [minta megkeresést](../scenarios/office-plants/outputs/outreach.md), és jelöld `completed_with_example`, végrehajtás `simulation`.

<a name="03-lead-generation.02-personalize-outreach--handoff"></a>

### Ezt viszed tovább

Az `outreach.md` mutatja, mire válaszol majd a lead. A következő leckében erre a kampányra érkeznek a gyakorló válaszok.

<a name="03-lead-generation.02-personalize-outreach--extra"></a>

### Ha maradt időd

Kérj egy második változatot magázódó hangnemben, és hasonlítsd össze a kettőt. A kötelező munkapéldányban a jóváhagyott változat maradjon.

<a name="03-lead-generation.03-process-reply"></a>

## Ügyfélválasz feldolgozása

**Állapot: review.**

**Azonosító:** `03-lead-generation.03-process-reply` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** sandbox

<a name="03-lead-generation.03-process-reply--result"></a>

### Ezt készíted el

A kampányodra érkezett gyakorló válaszokat kilistázod és kategorizálod, egy érdeklődő válaszra válaszjavaslatot nézel át, és az érdeklődő igényét `customer-brief.md` néven mented. Ezt viszi tovább a 04-es modul az ajánlatkészítéshez.

<a name="03-lead-generation.03-process-reply--needs"></a>

### Erre lesz szükséged

- Az előző lecke kampánya és `outreach.md` fájlja.
- A gyakorló válaszok: a kampányod létrehozása után minden résztvevőnek körülbelül tíz generált választ küldünk be. Ezek kitalált leadektől érkeznek.

Saját fiók nélkül: [Minta ügyféligény](../scenarios/office-plants/outputs/customer-brief.md)

<a name="03-lead-generation.03-process-reply--explanation"></a>

### Így működik

A válaszkezelés az a pont, ahol a legtöbb lead elvész. A Sales Bot a beérkező válaszokat kategorizálja (például érdeklődő, később, nem releváns), és válaszjavaslatot ír a nevedben. A javaslatot mindig te hagyod jóvá. Az érdeklődő válaszból kinyered, mire van szüksége a leadnek: ebből lesz az ajánlat bemenete.

A válaszokat a Claude-ban listázzuk ki; a válaszjavaslatokat a kivetítőn a Sales Bot beérkező üzenetei között is megmutatjuk, mert ott áttekinthetőbbek.

<a name="03-lead-generation.03-process-reply--decisions"></a>

### Ezekről te döntesz

Melyik válasz kategóriája helyes; melyik válaszjavaslatot fogadod el vagy írod át; mit rögzítesz igényként, és mi marad nyitott kérdés.

<a name="03-lead-generation.03-process-reply--prompt"></a>

### Ezt kérd Claude-tól

```text
Sandbox módban dolgozunk: semmit ne küldj ki.
Listázd ki a Sales Botban a kampányomra érkezett válaszokat, kategóriák szerint csoportosítva.
Válassz ki egy érdeklődő választ, és mutasd meg hozzá a Sales Bot válaszjavaslatát.
Ezután készíts customer-brief.md tartalmat ebből a válaszból ezekkel a mezőkkel: lead_id, offer_id, need, quantity, constraints, open_questions.
Amit a válasz nem mond ki, azt ne találd ki: tedd az open_questions mezőbe.
```

<a name="03-lead-generation.03-process-reply--steps"></a>

### Haladj végig ezeken

1. **0–4 perc:** listázd ki a válaszokat, és nézd át a kategóriákat. Ha valamelyik rossz helyre került, javítsd.
2. **4–10 perc:** válassz egy érdeklődő választ, és nézd át a válaszjavaslatot.
3. **10–16 perc:** készítsd el a `customer-brief.md` tartalmát. Ellenőrizd, hogy minden állítás a válaszból jön.
4. **16–20 perc:** mentsd a fájlt, és mondd el egy mondatban, mi a lead igénye és mi a következő lépés.

<a name="03-lead-generation.03-process-reply--check"></a>

### Ellenőrizd az eredményt

- Minden gyakorló válasznak van kategóriája, és egyetértesz vele.
- A kiválasztott válasz valóban érdeklődést jelez.
- A `customer-brief.md` mind a hat mezőt tartalmazza; az igény a válaszból származik, nem kitalált.
- A bizonytalan adatok az `open_questions` mezőben vannak.

<a name="03-lead-generation.03-process-reply--help"></a>

### Ha elakadtál

Ha nem érkeztek meg a gyakorló válaszok, szólj egy mentornak. Ha ma nem érhetők el, használd a [minta ügyféligényt](../scenarios/office-plants/outputs/customer-brief.md), és jelöld `completed_with_example`, végrehajtás `simulation`.

<a name="03-lead-generation.03-process-reply--handoff"></a>

### Ezt viszed tovább

A `customer-brief.md` a 04-es modul, az igényfelmérés és ajánlatkészítés bemenete.

<a name="03-lead-generation.03-process-reply--extra"></a>

### Ha maradt időd

Kérdezd meg a Claude-ot: „Hol tartunk a pipeline-ban? Van elakadt lead?” Nézd meg, mit lát a Sales Bot CRM-je a kampányodról.

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

A közös, összefüggő kitalált példák a repó `scenarios/` mappájában találhatók. A Sales Botból készült eszközspecifikus mintakimenetek az oktatói próba után kerülnek ide, a teszt dátumával és a példavállalkozás azonosítójával.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Következő modul →](04-proposals-handoff.md)

Wenova × Brandiseer × Blackhole Media × EstiWise
