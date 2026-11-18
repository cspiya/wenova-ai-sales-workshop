# Folyamatpróba: levelek, CRM, egy ügyfél végig

**Állapot: review.**

[HTML-változat](05-pipeline-review.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Postás és CRM: levelek, válaszpiszkozat, tábla](#05-pipeline-review.01-inbox-crm)
- [Egy ügyfél végig a Karmesterrel](#05-pipeline-review.02-one-customer)
- [Mérés, visszacsatolás és holnapi indulás](#05-pipeline-review.03-measure-launch)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

05-pipeline-review · review

A nap négy blokkja egy folyamattá áll össze: levél, LinkedIn-lead, ajánlat és CRM egy helyen, és egy heti rutin, amivel holnap is működik.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: kidolgozott tananyag, időmért próbára vár.**

16:15–16:50, 35 perc. Indítás a projektedben, új beszélgetésben: **„Kezdjük az 5. blokkot.”**

| Idő | Mi történik? | Eredmény |
| --- | --- | --- |
| 16:15–16:17 | Rövid bevezető: mit kapcsolunk össze | – |
| 16:17–16:28 | [Postás és CRM](#05-pipeline-review.01-inbox-crm) | Válaszpiszkozat a saját hangodon, kitöltött CRM-tábla |
| 16:28–16:40 | [Egy ügyfél végig a Karmesterrel](#05-pipeline-review.02-one-customer) | `pipeline-review.md` |
| 16:40–16:50 | [Mérés, visszacsatolás és holnapi indulás](#05-pipeline-review.03-measure-launch) | „Heti mérés” lap, első heti jelentés, `launch-plan.md` |

A nap végén minden kifelé menő művelet piszkozat marad: levél, Sales Bot-üzenet, ajánlat. Az elküldés holnap a te döntésed.

<a name="overview-1"></a>

### Bemenet

A projektben: `company-dna.md`, `voice-profile.md`, az öt agentfájl. A nap eredményei: a 02-es blokk tartalma (vagy `campaign-plan.md`), a 03-as blokk `leads.csv`, `outreach.md`, `customer-brief.md` fájlja és Sales Bot-kampánya, a 04-es blokk `proposal.md`, `handoff.md` fájlja és EstiWise-ajánlata. A „CRM – [cégnév]” táblázat.

<a name="overview-2"></a>

### Kimenet

Frissített CRM-tábla; egy válaszpiszkozat a levelezőben vagy a beszélgetésben; `pipeline-review.md`; „Heti mérés” lap; az első heti jelentés; `launch-plan.md`.

<a name="overview-3"></a>

### Folytatás elakadás esetén

Használd a [mentőútvonalat](#recovery): az IrodaLiget teljes láncát, a mintapostafiókot és a CRM-mintát.

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `05-pipeline-review`
- Szakmai gazda: Wenova (Kemény Krisztián, Piya Csaba)
- Időkeret: 35 perc
- Végrehajtási mód: levelezés és CRM `live`; Sales Bot `sandbox`; EstiWise `live` saját fiókkal vagy `simulation` demófiókkal; mintával mindenhol `simulation`
- Állapot: review – kidolgozva, a teljes út időmért próbája még hátravan.

<a name="05-pipeline-review.01-inbox-crm"></a>

## Postás és CRM: levelek, válaszpiszkozat, tábla

**Állapot: review.**

**Azonosító:** `05-pipeline-review.01-inbox-crm` · **Állapot:** review · **Időkeret:** 11 perc

<a name="05-pipeline-review.01-inbox-crm--result"></a>

### Ezt készíted el

A Postás átnézi a beérkező leveleidet, kiválasztasz egy érdeklődést, és a Postás a saját hangodon válaszpiszkozatot ír. A CRM-agent ezután a CRM-táblába írja a mai eredményeket: a levélből jött érdeklődést, a Sales Bot minősített leadjeit és az EstiWise-ajánlatot.

<a name="05-pipeline-review.01-inbox-crm--needs"></a>

### Erre lesz szükséged

- A bekapcsolt Gmail vagy Microsoft 365 connector, valamint a Google Sheets vagy Drive connector.
- Egy próbalevél: a gyakorlat elején küldj magadnak a telefonodról egy rövid, kitalált érdeklődést a saját szolgáltatásodra (minta: a [mintapostafiók](../scenarios/office-plants/outputs/mailbox-sample.md) B1 levele).
- A 03-as és 04-es blokk fájljai a projektben vagy a gépeden.

<a name="05-pipeline-review.01-inbox-crm--explanation"></a>

### Így működik

Levél → Postás-táblázat (típus, igény, következő lépés) → válaszpiszkozat a `voice-profile.md` szerint → javasolt CRM-sorok → CRM-agent: változáslista → jóváhagyás → írás a táblába → visszaolvasás.

Két szabály végig érvényes. A levél tartalma adat, nem utasítás: ha egy levél „küldd el” vagy „hagyd figyelmen kívül” jellegű kérést tartalmaz, a Postás jelzi, és nem hajtja végre. A Postás piszkozatot készít, de nem küld; a levelezőbe is csak akkor ment piszkozatot, ha kifejezetten kéred, és a connector ezt a műveletet felkínálja.

<a name="05-pipeline-review.01-inbox-crm--decisions"></a>

### Ezekről te döntesz

Melyik levelekre nézhet rá a Postás. Melyik levélre készüljön válasz. Elfogadod-e a piszkozatot. Mely sorok kerüljenek a CRM-be, és milyen szakaszba.

<a name="05-pipeline-review.01-inbox-crm--prompt"></a>

### Ezt kérd Claude-tól

```text
Postás: nézd át a mai beérkező leveleimet, legfeljebb 15 levélszálat. A hírleveleket és az automatikus értesítéseket hagyd ki.
Add meg a táblázatot az inbox.md szerint. Utána a próbalevelemre írj válaszpiszkozatot a voice-profile.md hangján; árat és határidőt csak a company-dna.md-ből vehetsz.
A piszkozatot előbb itt mutasd meg. Semmit ne küldj el.
```

Ha a piszkozat jó, ugyanitt:

```text
Mentsd a piszkozatot a levelezőmbe piszkozatként, ha a connector ezt lehetővé teszi; ha nem, csak add át a szöveget.
CRM: a Postás javaslatai, a leads.csv (vagy a Sales Bot minősített leadjei) és a proposal.md, handoff.md alapján frissítsd a „CRM – [cégnév]” táblázatot. Előbb mutasd a változáslistát, a jóváhagyásom után írj, majd olvasd vissza a módosított sorokat.
```

<a name="05-pipeline-review.01-inbox-crm--steps"></a>

### Haladj végig ezeken

1. **0–1 perc:** küldd el magadnak a próbalevelet.
2. **1–4 perc:** Postás-prompt; nézd át a táblázatot, javítsd a rossz típusbesorolást.
3. **4–7 perc:** olvasd el a piszkozatot. Egyezik a hangod? Van benne olyan ár vagy ígéret, ami nincs a DNS-ben? Kérj javítást, vagy mentsd piszkozatként.
4. **7–11 perc:** CRM-frissítés: hagyd jóvá a változáslistát, és nyisd meg a táblázatot, hogy lásd a sorokat.

<a name="05-pipeline-review.01-inbox-crm--check"></a>

### Ellenőrizd az eredményt

- A Postás táblázatában a próbalevél „Új érdeklődés” típusú, javasolt következő lépéssel.
- A piszkozat a te hangodon szól, és csak a DNS-ben lévő árat, ígéretet tartalmazza. Nincs elküldve.
- A CRM-táblában legalább három sor van (levél, Sales Bot-lead, EstiWise-ajánlat); mindegyiknél van szakasz, forrás, következő lépés és határidő.
- A CRM-agent írás előtt változáslistát mutatott, írás után visszaolvasott.

<a name="05-pipeline-review.01-inbox-crm--help"></a>

### Ha elakadtál

- **Nincs bekötött levelező:** másold be a próbalevelet, vagy a [mintapostafiók](../scenarios/office-plants/outputs/mailbox-sample.md) beérkezett leveleit.
- **A CRM-agent nem tud írni a táblába:** kérd a sorokat CSV-formában, és másold be őket a táblázatba. Ez is működő CRM, csak kézi lépéssel.
- **Öt perc után sem megy:** nézd meg a [kitöltött CRM-mintát](../scenarios/office-plants/outputs/crm.csv), és lépj a következő leckére.

<a name="05-pipeline-review.01-inbox-crm--handoff"></a>

### Ezt viszed tovább

A kitöltött CRM-tábla a következő lecke kiindulópontja: abból választod ki az ügyfelet, akit végigviszel.

<a name="05-pipeline-review.01-inbox-crm--extra"></a>

### Ha maradt időd

Futtasd az Ellenőrt a válaszpiszkozatra egy új beszélgetésben: `Ellenőr: e-mail-válasz – az alábbi csomag`.

<a name="05-pipeline-review.02-one-customer"></a>

## Egy ügyfél végig a Karmesterrel

**Állapot: review.**

**Azonosító:** `05-pipeline-review.02-one-customer` · **Állapot:** review · **Időkeret:** 12 perc

<a name="05-pipeline-review.02-one-customer--result"></a>

### Ezt készíted el

Egy ügyfélesetet a Cég-DNS-től a holnapi teendőig, a Karmester vezetésével: tartalom → LinkedIn-lead → válasz → ajánlat → CRM → holnapi lépés. Az eredmény a `pipeline-review.md`, lépésenként jelölve, mi működött élesben, mi sandboxban és mi mintából.

<a name="05-pipeline-review.02-one-customer--needs"></a>

### Erre lesz szükséged

A CRM-tábla az előző leckéből. Az ügyfél: az a lead, akinek a válaszából a 03-as blokkban a `customer-brief.md` készült, és akire a 04-es blokkban az ajánlatot számoltad. A bekapcsolt Sales Bot- és EstiWise-kapcsolat.

Minta: [IrodaLiget folyamatpróba](../scenarios/office-plants/outputs/pipeline-review.md).

<a name="05-pipeline-review.02-one-customer--explanation"></a>

### Így működik

A Karmester nem csinál meg mindent egyedül: kiosztja a lépéseket, és megáll a kapuknál.

| Lépés | Ki végzi? | Kapcsolat | Ha nem érhető el |
| --- | --- | --- | --- |
| 1. DNS | Karmester | Projekt | – |
| 2. Tartalom: mit látott a lead? | Karmester; Író, ha új szöveg kell | A 02-es blokkban beállított Brandiseer-kapcsolat, ha van | A Brandiseerből kimásolt poszt vagy `campaign-plan.md` |
| 3. LinkedIn-lead és státusza | Karmester | Sales Bot connector (sandbox) | `leads.csv`, `outreach.md` |
| 4. A lead válasza és a válaszpiszkozat | Karmester, Író | Sales Bot connector | `customer-brief.md` |
| 5. Ajánlat és értékesítési szakasz | Karmester; Író a kísérőszöveghez | EstiWise-kapcsolat | `proposal.md`, `handoff.md` |
| 6. Ellenőrzés | Ellenőr, új beszélgetésben | – | – |
| 7. CRM-frissítés | CRM-agent | Google Sheets / Drive | CSV-sorok bemásolva |
| 8. Holnapi lépés | Te | – | – |

Minden lépésnél a végrehajtási mód: `live`, `sandbox` vagy `simulation`. Az őszinte jelölés a cél, nem a hibátlan lánc: a `gaps` sor mondja meg, mit kell holnap megoldani.

<a name="05-pipeline-review.02-one-customer--decisions"></a>

### Ezekről te döntesz

Melyik ügyfelet viszed végig. Jóváhagyod-e a tervet. Mit változtatsz a kísérőszövegen az Ellenőr után. Mi a holnapi első lépés, ki csinálja és mikor.

<a name="05-pipeline-review.02-one-customer--prompt"></a>

### Ezt kérd Claude-tól

```text
Karmester: vigyük végig egy ügyfél útját. Az ügyfél: [lead_id vagy cégnév a CRM-ből].
Lépések: DNS → milyen tartalmunkat láthatta → LinkedIn-lead és státusza a Sales Botban → a válasza és a válaszpiszkozat → az ajánlat és a szakasza az EstiWise-ban → ajánlat kísérőszövege az Írótól → CRM-frissítés → holnapi lépés.
Csak a ténylegesen elérhető kapcsolatokat használd; ahol nincs, a projektben lévő fájlból dolgozz, és jelöld simulation-nek.
Előbb a tervet mutasd kapukkal. Semmit ne küldj, ne indíts, ne fogadj el.
A végén add meg a pipeline-review.md tartalmát a közös mezőkkel: case_id, results, execution_mode, evidence, gaps, next_step.
```

<a name="05-pipeline-review.02-one-customer--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** válaszd ki az ügyfelet a CRM-ből, futtasd a Karmester-promptot, hagyd jóvá a tervet.
2. **2–7 perc:** kövesd a lépéseket. A partnerrendszerből érkező adatot vesd össze azzal, amit délután láttál.
3. **7–10 perc:** a kísérőszöveget nézesd át az Ellenőrrel új beszélgetésben; vagy, ha szorít az idő, ezt jelöld nyitottnak.
4. **10–12 perc:** töltsd le a `pipeline-review.md` fájlt, és ellenőrizd, hogy a CRM-sor szakasza és következő lépése egyezik vele.

<a name="05-pipeline-review.02-one-customer--check"></a>

### Ellenőrizd az eredményt

- A `pipeline-review.md` mind a hat mezőt tartalmazza, és a `case_id` egyezik a CRM-sorral és a `lead_id`-vel.
- Minden lépésnél ott a végrehajtási mód; semmi nincs `live`-nak jelölve, ami mintából jött.
- A `gaps` mezőben legalább egy valódi hiány áll, vagy indokolt, miért nincs.
- A `next_step` konkrét: teendő, felelős, időpont.
- Nem ment ki levél, üzenet vagy ajánlat.

<a name="05-pipeline-review.02-one-customer--help"></a>

### Ha elakadtál

- **A Sales Bot vagy az EstiWise nem válaszol:** ne indítsd újra többször. Kérd: „Ezt a lépést a projektben lévő fájlból csináld, és jelöld simulation-nek.”
- **Nincs saját ügyféllánc a délutánból:** vidd végig az IrodaLiget `office-plants-L01` leadjét a [mintafájlokból](../scenarios/office-plants/README.md).
- **Kevés az idő:** a Karmester a 3., 5. és 7. lépést csinálja meg; a többi `gaps`.

<a name="05-pipeline-review.02-one-customer--handoff"></a>

### Ezt viszed tovább

A `pipeline-review.md` `gaps` és `next_step` mezője a holnapi indulási terv bemenete.

<a name="05-pipeline-review.02-one-customer--extra"></a>

### Ha maradt időd

Kérd a Karmestert: „Melyik lépés a leglassabb ebben a láncban, és melyik agent gyorsítaná?”

<a name="05-pipeline-review.03-measure-launch"></a>

## Mérés, visszacsatolás és holnapi indulás

**Állapot: review.**

**Azonosító:** `05-pipeline-review.03-measure-launch` · **Állapot:** review · **Időkeret:** 10 perc

<a name="05-pipeline-review.03-measure-launch--result"></a>

### Ezt készíted el

A CRM-táblázat „Heti mérés” lapját, az első heti jelentést (ma még alapállapot), és a `launch-plan.md` indulási tervet: három holnapi lépés és a hétfői 30 perces heti átnézés.

<a name="05-pipeline-review.03-measure-launch--needs"></a>

### Erre lesz szükséged

A [mérési sablon](../starter-kit/metrics-template.csv), a [heti átnézés leírása és promptja](../starter-kit/weekly-review.md), az [indulási terv sablon](../starter-kit/launch-plan.md), és az előző lecke `pipeline-review.md` fájlja.

Minta: [IrodaLiget indulási terv](../scenarios/office-plants/outputs/launch-plan.md).

<a name="05-pipeline-review.03-measure-launch--explanation"></a>

### Így működik

Mérés nélkül nem tudod, melyik agent és melyik blokk hoz eredményt. Szakaszonként egy-két szám elég, a CRM-táblázat „Heti mérés” lapján:

| Szakasz | Mérőszám | Forrás |
| --- | --- | --- |
| Tartalom | Megjelent posztok, megjelenés, reakció + komment | LinkedIn; Brandiseer vagy Buffer, ha bekötötted |
| LinkedIn | Bejelölés, elfogadás, válasz, érdeklődő válasz | Sales Bot |
| Bejövő | Új érdeklődés e-mailben és EstiWise-on | CRM, EstiWise |
| Ajánlat | Tervezet, kiküldött, megnyert, érték | CRM, EstiWise |
| Sebesség és minőség | Első válasz ideje; ellenőri visszadobások aránya | Postás, Ellenőr |

A **visszacsatolás** azt jelenti, hogy a számokból változtatás lesz. Hétfőnként a Karmester heti jelentést készít, és legfeljebb három javaslatot tesz: a Cég-DNS-ben (például szűkebb ICP, ha alacsony az elfogadás), az Ellenőr ellenőrzőlistájában (például új tiltott ígéret, ha gyakori a BLOKKOLÓ) vagy a jövő heti kampány- és teendőtervben. Te döntesz; a jóváhagyott változásból új DNS-verzió lesz, és minden agent abból dolgozik tovább. A teljes táblázat, hogy mit mire változtatsz: [heti átnézés](../starter-kit/weekly-review.md).

A célértékeket a saját első 2–4 hetedből állítsd be. Kevés esetből (10 alatt) ne vonj le következtetést; a Karmester ezt ki is mondja.

<a name="05-pipeline-review.03-measure-launch--decisions"></a>

### Ezekről te döntesz

Melyik 3–5 mérőszámot nézed valóban. Ki tölti a „Heti mérés” lapot és mikor. Mi a holnapi három lépés. Melyik nap és órában lesz a heti átnézés.

<a name="05-pipeline-review.03-measure-launch--prompt"></a>

### Ezt kérd Claude-tól

Először a mai alapállapot:

```text
Karmester: készítsd el az első heti jelentést a weekly-review.md prompt szerint, a mai napot alapállapotnak tekintve.
A Heti mérés lapra csak azt írd, amit ma ténylegesen mértünk vagy láttunk (például ellenőrzött szövegek száma, CRM-sorok szakasz szerint); minden más „Nincs megadva”, nem nulla.
Jelöld, melyik szám sandboxból vagy mintából jön. Írás előtt mutasd a sorokat.
```

Utána az indulási terv:

```text
A pipeline-review.md gaps és next_step mezője, valamint a heti jelentés alapján töltsd ki a launch-plan.md sablont:
három konkrét holnapi lépés agenttel, időponttal és kész feltétellel; a heti rutin hétfői 30 perces heti átnézéssel; és egy mérőszám kiinduló értékkel.
Ami még nem működik élesben, az kerüljön a „Ami még nem működik élesben” táblába felelőssel.
```

<a name="05-pipeline-review.03-measure-launch--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** a CRM-táblázatban új lap „Heti mérés” néven, és importáld a `metrics-template.csv` fájlt („Jelenlegi munkalap cseréje”).
2. **2–5 perc:** első heti jelentés; hagyd jóvá a beírandó sorokat.
3. **5–9 perc:** indulási terv; a három lépésből legalább egy legyen olyan, ami holnap 10 óráig kész.
4. **9–10 perc:** töltsd le a `launch-plan.md` fájlt, és tedd a naptáradba a hétfői heti átnézést.

<a name="05-pipeline-review.03-measure-launch--check"></a>

### Ellenőrizd az eredményt

- A „Heti mérés” lap létezik; az üres adat „Nincs megadva”, nem nulla; a sandbox- és mintaadat jelölt.
- A `launch-plan.md` három lépése konkrét: agent vagy eszköz, időpont, kész feltétel.
- A heti rutinban szerepel a hétfői 30 perces átnézés a `Karmester: heti átnézés` indítómondattal.
- Meg tudod mondani, melyik számnál milyen változtatást csinálnál a DNS-ben vagy az ellenőrzőlistában.

<a name="05-pipeline-review.03-measure-launch--help"></a>

### Ha elakadtál

Ha a táblázat-connector nem működik, a heti jelentést és az indulási tervet a beszélgetésben kérd el, és töltsd le. Ha az idő elfogy, a `launch-plan.md` „Holnap” részét töltsd ki; a többit holnap reggel 10 perc alatt pótolod a [mintával](../scenarios/office-plants/outputs/launch-plan.md).

<a name="05-pipeline-review.03-measure-launch--handoff"></a>

### Ezt viszed tovább

**Mit viszel haza:** egy Claude-projektet a saját Cég-DNS-eddel és hangprofiloddal; öt agentet (Karmester, Író, Ellenőr, Postás, CRM); a három partnerrendszer bekötését a saját fiókjaidban; egy CRM-táblát „Heti mérés” lappal; egy végigvitt ügyféleset leírását; és egy holnapi tervet heti rutinnal. A tananyag és a [tanulási kísérő](../assistant.md) hazavihető: bármelyik blokk újraindítható a „Kezdjük az N. blokkot” mondattal.

<a name="05-pipeline-review.03-measure-launch--extra"></a>

### Ha maradt időd

Kérd a Karmestert: „Melyik ismétlődő feladatomat érdemes a következő héten Skillé alakítani, és miért?”

<a name="recovery"></a>

## Segítség elakadáskor

1. Mentsd a saját eddigi munkádat (töltsd le a félkész fájlokat, a CRM-tábla maradjon).
2. Az IrodaLiget mintából vedd át, ami hiányzik: [mintapostafiók](../scenarios/office-plants/outputs/mailbox-sample.md), [CRM-minta](../scenarios/office-plants/outputs/crm.csv), [folyamatpróba](../scenarios/office-plants/outputs/pipeline-review.md), [indulási terv](../scenarios/office-plants/outputs/launch-plan.md).
3. A haladási naplóban jelöld: `completed_with_example`, végrehajtás: `simulation`.
4. A saját indulási tervedet akkor is töltsd ki: a holnapi első lépés lehet az, ami ma nem működött.

Saját cégről mintára váltáskor ne keverd a minta árait a saját ajánlatoddal. A statikus csomag nem bizonyít működő partnerintegrációt.

<a name="examples"></a>

## Gyakorlópéldák

Az [IrodaLiget](../scenarios/office-plants/README.md) teljes kitalált lánca: alaplap → DNS → lead → igény → ajánlat → átadás → CRM → folyamatpróba → indulási terv. A végrehajtási mód mindenhol `simulation`.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Hazavihető eredmények](../README.md#outputs)

Wenova × Brandiseer × Blackhole Media × EstiWise
