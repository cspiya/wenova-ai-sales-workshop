# Ügyfélszerzés és leadkezelés

**Állapot: review.**

[HTML-változat](03-lead-generation.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Célközönség és öt lead értékelése](#03-lead-generation.01-qualify-leads)
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

A legutóbbi `progress.json`-ban kijelölt üzleti alaplap (`business-profile.md`) és az ugyanahhoz a céghez tartozó `campaign-plan.md`.

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

<a name="03-lead-generation.01-qualify-leads"></a>

## Célközönség és öt lead értékelése

**Állapot: review.**

**Azonosító:** `03-lead-generation.01-qualify-leads` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** sandbox

<a name="03-lead-generation.01-qualify-leads--result"></a>

### Ezt készíted el

A Sales Bot **AI brainjét** kitöltöd a saját vagy a mintavállalkozásod adataival, majd egy legfeljebb 100 fős leadlistát készítesz a célközönségedre. A listából öt leadet értékelsz, és az indoklást is elmented a `leads.csv` fájlba.

<a name="03-lead-generation.01-qualify-leads--needs"></a>

### Erre lesz szükséged

- Az 01-es modulban mentett `business-profile.md` és a 02-es modul `campaign-plan.md` fájlja.
- A workshop-fiókod a Sales Botban. A hozzáférést a 03-as blokk elején, a helyszínen kapod meg.
- Claude, amelyben be van kapcsolva a Sales Bot connector (MCP): **Beállítások → Connectors → „Add custom connector”**, név például `Sales-Bot.io`, URL: `https://app.sales-bot.io/api/mcp`, majd **Connect**, belépés a Sales Bot-fiókkal és engedélyezés. Ha elakadsz, a mentorok segítenek.

Saját fiók nélkül a kiválasztott mintavállalkozás alaplapjával és a hozzá tartozó leadlistával dolgozz. A fájlokat a [mentőút](#03-lead-generation.01-qualify-leads--help) alapján válaszd ki.

<a name="03-lead-generation.01-qualify-leads--explanation"></a>

### Így működik

Az **AI brain** a Sales Bot tudásbázisa: ebből ír minden üzenetet és válaszjavaslatot. Cégszinten a cégleírást, a hangnemet és a linkeket tárolja; ajánlatonként a szolgáltatásokat, az ideális ügyfelet, az iparágakat, az USP-t, a pozicionálást, a fájdalompontokat, a bizonyítékokat, az esettanulmányokat, az ellenvetéseket, az árazást és a folyamatot. Háromféleképpen töltheted ki: a **weboldalad** alapján, az 01-es modulban készült **cég-DNS-ből** (`business-profile.md`), vagy **kézzel**. Több ajánlatot is felvehetsz.

A célzás négy szűrőn múlik: **ország**, **cégméret** (létszámsáv), **iparág** és **döntéshozó** (pozíció és senioritás). A Sales Bot ezek alapján keres; nem kell adatbázist vásárolni. Először ingyen megszámolja, hány ember felel meg a szűrőknek, és csak utána húzza le őket. A cégméretet a rendszer már ellenőrzi: a rossz méretű cégeket kihagyja, és nem von le rájuk kreditet. Az iparág viszont nem mindig pontos: a próbán a szoftverfejlesztő szűrőre felsőoktatási és pénzügyi cégek is bejöttek. Ezért a listát átnézzük, és csak a valóban illeszkedő leadeket visszük tovább.

A keresés a háttérben fut, a leadek néhány perc alatt érkeznek meg. A leadeket egy saját **leadlistába** gyűjtjük; a következő leckében erre a listára épül a kampány.

**Kitalált példa:** az IrodaLiget 10–40 fős budapesti irodák irodavezetőit és ügyvezetőit célozza.

A leadek átnézését, törlését és a CSV-feltöltést a kivetítőn a Sales Bot felületén is megmutatjuk.

<a name="03-lead-generation.01-qualify-leads--decisions"></a>

### Ezekről te döntesz

Saját üzlet vagy minta; melyik ajánlatodra keresel; a négy szűrő értéke; mely leadek illeszkednek valóban, és melyeket törlöd a listáról.

<a name="03-lead-generation.01-qualify-leads--prompt"></a>

### Ezt kérd Claude-tól

```text
A Sales Bot eszközeivel dolgozunk a workshopon, sandbox módban: semmit ne küldj ki.
1. Töltsd ki a Sales Bot AI brainjét. Válaszd ki, melyik utat használjuk: (A) a weboldalam alapján: [weboldal]; (B) a csatolt business-profile.md (cég-DNS) alapján; (C) kézzel, a kérdéseid alapján. Utána mutasd meg a kitöltött mezőket (cégleírás, hangnem, ajánlat, ideális ügyfél, USP, fájdalompontok, ellenvetések), és javítsuk, amit kell.
2. Hozz létre egy új leadlistát „Workshop – [cégnév]” néven.
3. Kérdezd meg tőlem egyenként: ország, cégméret (például 11-50 fő), iparág, döntéshozói pozíció. Először számold meg ingyen, hány ember felel meg, és mondd meg a számot. Ezután keress leadeket ebbe a listába: először 20-at, és ha a minta jó, bővítsd legfeljebb 100-ra.
4. A keresés a háttérben fut. Néhány perc múlva nézd meg az állapotát, és listázd ki a lista leadjeit.
5. Mutass öt leadet. Mindegyiknél ellenőrizd a cégméretet és az iparágat is, mert a szűrő nem mindig pontos, és írd le egy mondatban, miért illik vagy miért nem.
6. A jóváhagyásom után készíts leads.csv tartalmat ezekkel az oszlopokkal: lead_id,company,fit_reason,status,next_action. Írd a fit_reason mezőbe, mi alapján döntöttünk. Illeszkedő leadnél a status értéke qualified, a többi esetben open. A Sales Bot válaszstátuszai maradjanak változatlanok. Az Interested státuszhoz érdeklődő válasz kell.
```

Ha a cég-DNS-ből dolgozol, csatold a `business-profile.md` fájlodat.

<a name="03-lead-generation.01-qualify-leads--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** a Claude-ban add hozzá a connectort (Beállítások → Connectors → „Add custom connector”, URL: `https://app.sales-bot.io/api/mcp`, Connect), lépj be a Sales Bot-fiókoddal, és ellenőrizd, hogy a Claude látja az eszközöket („Milyen Sales Bot eszközeid vannak?”).
2. **3–8 perc:** másold be a promptot, válaszd ki az AI brain kitöltésének útját (weboldal, cég-DNS vagy kézi), és nézd át a kitöltött mezőket.
3. **8–14 perc:** válaszold meg a szűrőkre vonatkozó kérdéseket, és indítsd el a keresést. Amíg a leadek megérkeznek (2–3 perc), írd le magadnak, milyen lead lenne a legjobb ügyfeled.
4. **14–18 perc:** nézd át az öt leadet. A CSV-ben az illeszkedő lead legyen `qualified`, a többi `open`. Írd melléjük a döntés okát. A Sales Bot válaszstátuszát ebben a leckében hagyd változatlanul.
5. **18–20 perc:** mentsd a `leads.csv` fájlt a saját munkacsomagodba.

<a name="03-lead-generation.01-qualify-leads--check"></a>

### Ellenőrizd az eredményt

- Az AI brainben ki van töltve a cégleírás, a hangnem, és legalább egy ajánlat az ideális ügyféllel, az USP-vel és a fájdalompontokkal.
- A leadlista legfeljebb 100 fős, és a négy szűrő mindegyikét te adtad meg.
- A `leads.csv` öt sort tartalmaz a közös oszlopokkal; mindegyikhez van indoklás.
- Mind az öt döntést meg tudod indokolni akkor is, ha egyik lead sem illik a célcsoportodhoz.

<a name="03-lead-generation.01-qualify-leads--help"></a>

### Ha elakadtál

Ha öt perc után sem éri el a Claude a Sales Botot, jelezd egy mentornak. Ha a belépés vagy a connector ma nem működik, a legutóbbi `progress.json` `scenario_id` mezője alapján válaszd ki a mintád `outputs/leads.csv` fájlját: [IrodaLiget](../scenarios/office-plants/outputs/leads.csv), [CégesKép](../scenarios/business-photography/outputs/leads.csv) vagy [WebŐr](../scenarios/website-maintenance/outputs/leads.csv). Ha már választottál mintát, de hiányzik az azonosító, rögzítsd a választott mappa nevét. Ha most választasz először, az ajánlott kezdőminta az IrodaLiget (`office-plants`). Ugyanennek a mintának az alaplapjával minősítsd újra az öt leadet, és mentsd a `leads.csv` fájlt. A haladási naplóban jelöld `completed_with_example`, végrehajtás `simulation`.

<a name="03-lead-generation.01-qualify-leads--handoff"></a>

### Ezt viszed tovább

A leadlista, a `leads.csv` és a kitöltött AI brain a következő lecke bemenete: erre a listára készül a kampány.

<a name="03-lead-generation.01-qualify-leads--extra"></a>

### Ha maradt időd

Kérd meg a Claude-ot, hogy hasonlítsa össze a listát egy második ajánlatod célközönségével. A kötelező munkapéldányban az első lista maradjon.

<a name="03-lead-generation.02-personalize-outreach"></a>

## Kampány és személyre szabott üzenetek

**Állapot: review.**

**Azonosító:** `03-lead-generation.02-personalize-outreach` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** sandbox

<a name="03-lead-generation.02-personalize-outreach--result"></a>

### Ezt készíted el

A leadlistára piszkozatkampányt készítesz a Sales Botban. Átnézed az üzenetsorozatot, majd a `leads.csv` egyik `qualified` sorához elmented az `outreach.md` fájlt. Ennek a leadnek a válaszát dolgozod fel a következő leckében.

<a name="03-lead-generation.02-personalize-outreach--needs"></a>

### Erre lesz szükséged

- Az előző lecke `leads.csv` fájlja és a kitöltött AI brain. A kiválasztott leadhez kell egy `qualified` sor. Ha egyik lead sem illeszkedik, kezdd a [teljes mintalánccal](#recovery).
- A 02-es modul `campaign-plan.md` fájlja: ebből jön az ajánlat és a cselekvésre hívás.

Saját fiók nélkül: [Minta megkeresés](../scenarios/office-plants/outputs/outreach.md)

<a name="03-lead-generation.02-personalize-outreach--explanation"></a>

### Így működik

A kampány három dologból áll: **leadlista**, **üzenetsorozat** és **ütemezés**. A Claude piszkozat kampányt hoz létre az előző leckében készült leadlistára, az AI brainben tárolt ajánlatból és a kiválasztott kampánytípusból megírja az üzeneteket, és a te jóváhagyásod után a kampányba menti őket. Megadjuk a kampány **válaszcélját** is (például igényfelmérő beszélgetés): az AI a beérkező válaszokra ebből ír javaslatot. Egy üzenet kevés: a sorozat a bejelölésből, egy első üzenetből és utánkövetésekből áll, amelyek leállnak, ha a lead válaszol vagy elutasít.

Három kampánytípus van: **bejelöléses kampány** (kapcsolódási kérés rövid üzenettel, utána üzenetsorozat), **üzenetkampány az 1. fokú kapcsolataidnak**, és **InMail** (csak Sales Navigatorral). A workshopon a bejelöléses kampányt használjuk.

A kampányt a Claude-ból nem lehet elindítani, mindig piszkozat marad. Ma küldő LinkedIn-profil sincs hozzákötve, ezért semmi nem megy ki; a küldő kiválasztását kihagyjuk.

Ma kitalált válasszal gyakorolsz. Ha később valaki visszahívást kér az űrlapodon, a visszahívás témája az ő kérése. Természetes személynek szóló közvetlen elektronikus reklámhoz az NMHH szerint főszabály szerint előzetes, egyértelmű és kifejezett hozzájárulás kell. Ez a kérdés személyes profilról küldött reklámnál is felmerül. [NMHH útmutató](https://nmhh.hu/cikk/4077/Az_elektronikus_hirdeteskuldes_szabalyai)

<a name="03-lead-generation.02-personalize-outreach--decisions"></a>

### Ezekről te döntesz

Melyik ajánlatról szól a kampány; mi a válaszcél; a kampánytípus; hány üzenetből álljon a sorozat; mit módosítasz az AI által írt szövegen; mikor álljon le a megkeresés.

<a name="03-lead-generation.02-personalize-outreach--prompt"></a>

### Ezt kérd Claude-tól

```text
Sandbox módban dolgozunk: semmit ne küldj ki.
Hozz létre piszkozat kampányt „Workshop – [cégnév]” néven az előző leckében készült leadlistára és a fő ajánlatomra. A válaszcél legyen: [például igényfelmérő beszélgetés]. Ne indítsd el, és küldőt se állíts be.
Az üzenetek a campaign-plan.md-ben szereplő ajánlatról szóljanak. Kérdezd meg, hány üzenetet szeretnék, és tegeződve vagy magázódva írjunk.
Írd meg a sorozatot: kapcsolódási üzenet, első üzenet, utánkövetések, a lépések közötti várakozási napokkal. A {COMPANY} változóra ne tegyél ragot (például ne „{COMPANY}-nál”), mert a cégnévvel magyarul hibás lesz. Mutasd meg, és csak a jóváhagyásom után mentsd a kampányba.
Mentés után futtass egy próbamegjelenítést (preview) két leadre, és ellenőrizd, hogy minden lépés benne van, és a szöveg a valódi nevekkel is jól hangzik.
A javításaim után válasszunk a leads.csv qualified sorai közül egy leadet. A lead_id-ját másold az outreach.md fájlba, és add meg a first_message, followup és stop_condition mezőt. Ha nincs qualified sor, álljunk meg és váltsunk a teljes mintaláncra.
```

Csatold a `leads.csv` és a `campaign-plan.md` fájlt.

<a name="03-lead-generation.02-personalize-outreach--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** másold be a promptot, és csatold a két fájlt.
2. **3–9 perc:** add meg az üzenetszámot és a hangnemet, és nézd át a Claude első változatát.
3. **9–15 perc:** olvasd végig az üzeneteket. Ami nem a te hangodon szól, azt kérd átírni.
4. **15–18 perc:** válassz egy `qualified` sort a `leads.csv` fájlból. Ellenőrizd az első üzenetet és az utánkövetést, majd add meg a mentornak a `lead_id`-t a gyakorló válaszhoz. Ha nincs ilyen sor, válts a teljes mintaláncra.
5. **18–20 perc:** mentsd az `outreach.md` fájlt.

<a name="03-lead-generation.02-personalize-outreach--check"></a>

### Ellenőrizd az eredményt

- A kampány a te leadlistádra és a választott ajánlatodra épül, van válaszcélja, és a próbamegjelenítésben minden lépés benne van.
- Az első üzenet személyes, rövid, és nem ad el azonnal.
- Az utánkövetés új értéket ad, nem ismétli az első üzenetet.
- Az `outreach.md` tartalmazza a négy mezőt, a `stop_condition` pedig kimondja, mikor áll le a megkeresés.
- Az `outreach.md` azonosítója a `leads.csv` kiválasztott `qualified` sorához tartozik.
- Egyetlen üzenet sem ment ki: ellenőrizted, hogy a kampány nincs élesítve.

<a name="03-lead-generation.02-personalize-outreach--help"></a>

### Ha elakadtál

Ha a kampány létrehozása elakad, az üzenetsorozatot a Sales Bot nélkül is megírhatod a `campaign-plan.md` alapján. Ha a kiválasztott leadhez nincs gyakorló válasz, válts a [teljes mintaláncra](#recovery), és jelöld `completed_with_example`, végrehajtás `simulation`.

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

- Az előző lecke kampánya, a `leads.csv`, az `outreach.md` és a `campaign-plan.md`.
- A mentor által betöltött kitalált gyakorló válasz a kiválasztott leadhez, annak `lead_id` értéke alapján.

Saját fiók nélkül: [Minta ügyféligény](../scenarios/office-plants/outputs/customer-brief.md)

<a name="03-lead-generation.03-process-reply--explanation"></a>

### Így működik

A válaszkezelés az a pont, ahol a legtöbb lead elvész. A Sales Bot a beérkező válaszokat kategorizálja (például érdeklődő, később, nem releváns), és válaszjavaslatot ír a nevedben. A Claude-ban ugyanezt végezzük: a Claude elolvassa és csoportosítja a válaszokat, a válaszjavaslatot pedig piszkozatként menti a beszélgetéshez. A javaslatot mindig te hagyod jóvá, és ember küldi el. Az érdeklődő válaszból kinyered, mire van szüksége a leadnek: ebből lesz az ajánlat bemenete.

A válaszokat a Claude-ban listázzuk ki; a válaszjavaslatokat a kivetítőn a Sales Bot beérkező üzenetei között is megmutatjuk, mert ott áttekinthetőbbek.

<a name="03-lead-generation.03-process-reply--decisions"></a>

### Ezekről te döntesz

Melyik válasz kategóriája helyes; melyik válaszjavaslatot fogadod el vagy írod át; mit rögzítesz igényként, és mi marad nyitott kérdés.

<a name="03-lead-generation.03-process-reply--prompt"></a>

### Ezt kérd Claude-tól

```text
Sandbox módban dolgozunk: semmit ne küldj ki.
Listázd ki a Sales Bot beérkező beszélgetéseit, nyisd meg a válaszokat, és csoportosítsd őket: érdeklődő, később, nem releváns.
Ellenőrizd a Sales Bot válaszstátuszait. Az Interested csak érdeklődő válasz után jár; későbbi érdeklődésnél Later, elutasításnál Not Interested. Mutasd meg a javasolt módosításokat, és jóváhagyásom után végezd el őket.
Vesd össze a csatolt outreach.md lead_id-ját a leads.csv qualified sorával és a válaszoló azonosítójával. Ha a három azonosító nem egyezik, vagy ettől a leadtől nincs érdeklődő válasz, állj meg és jelezd, hogy a teljes mintaláncra kell váltani.
Az egyező érdeklődő válaszra írj válaszjavaslatot. A jóváhagyásom után mentsd piszkozatként a beszélgetéshez; ne küldd el.
Készíts customer-brief.md tartalmat ugyanebből a válaszból: lead_id, offer_id, need, quantity, constraints, open_questions. Az offer_id a csatolt campaign-plan.md-ből jöjjön.
Amit a válasz nem mond ki, azt ne találd ki: tedd az open_questions mezőbe.
```

<a name="03-lead-generation.03-process-reply--steps"></a>

### Haladj végig ezeken

1. **0–4 perc:** csatold a három fájlt, listázd ki a válaszokat, és nézd át a kategóriákat.
2. **4–10 perc:** keresd meg az `outreach.md`-ben kiválasztott lead érdeklődő válaszát. Egyezésnél nézd át a válaszjavaslatot, és mentsd piszkozatként. Ha nincs ilyen válasz, válts a [teljes mintaláncra](#recovery).
3. **10–16 perc:** készítsd el a `customer-brief.md` tartalmát. Ellenőrizd, hogy minden állítás a válaszból jön.
4. **16–20 perc:** mentsd a fájlt, és mondd el egy mondatban, mi a lead igénye és mi a következő lépés.

<a name="03-lead-generation.03-process-reply--check"></a>

### Ellenőrizd az eredményt

- Minden gyakorló válasznak van kategóriája, és egyetértesz vele.
- A kiválasztott válasz érdeklődést jelez. A válaszoló, a `leads.csv` kiválasztott sora, az `outreach.md` és a `customer-brief.md` leadazonosítója egyezik.
- A `customer-brief.md` mind a hat mezőt tartalmazza; az igény a válaszból származik, nem kitalált.
- A bizonytalan adatok az `open_questions` mezőben vannak.

<a name="03-lead-generation.03-process-reply--help"></a>

### Ha elakadtál

Ha nem érkezett érdeklődő válasz a kiválasztott leadtől, szólj egy mentornak. Ha a válasz nem érhető el, vedd át egyetlen [mintavállalkozás](#recovery) összetartozó alaplapját, kampánytervét, leadlistáját, megkeresését és ügyféligényét. Jelöld `completed_with_example`, végrehajtás `simulation`.

<a name="03-lead-generation.03-process-reply--handoff"></a>

### Ezt viszed tovább

A `customer-brief.md`, a `leads.csv` és az `outreach.md` együtt kerül a 04-es modulhoz. Az ajánlat előtt ezekben egyezteted az ügyfél azonosítóját.

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
