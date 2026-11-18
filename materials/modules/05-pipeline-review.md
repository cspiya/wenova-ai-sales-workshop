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

16:15–16:50, 35 perc. Indítás a projektedben, új beszélgetésben: **„Kezdjük az 5. blokkot.”** Gyorsabb, ha a leckék promptjait közvetlenül másolod be.

| Idő | Mi történik? | Eredmény |
| --- | --- | --- |
| 16:15–16:17 | Rövid bevezető: mit kapcsolunk össze | – |
| 16:17–16:28 | [Postás és CRM](#05-pipeline-review.01-inbox-crm) | Válaszpiszkozat a saját hangodon, kitöltött CRM-tábla |
| 16:28–16:40 | [Egy ügyfél végig a Karmesterrel](#05-pipeline-review.02-one-customer) | `pipeline-review.md` |
| 16:40–16:50 | [Mérés, visszacsatolás és holnapi indulás](#05-pipeline-review.03-measure-launch) | `launch-plan.md` holnapi lépései, egy sor a „Heti mérés” lapon |

A nap végén minden kifelé menő művelet piszkozat marad: levél, Sales Bot-üzenet, ajánlat. Az elküldés holnap a te döntésed.

<a name="overview-1"></a>

### Bemenet

A projektben: `company-dna.md`, `voice-profile.md`, az öt agentfájl. A nap eredményei: a 02-es blokk tartalma (vagy `campaign-plan.md`), a 03-as blokk `leads.csv`, `outreach.md`, `customer-brief.md` fájlja és Sales Bot-kampánya, a 04-es blokk `proposal.md`, `handoff.md` fájlja és EstiWise-ajánlata. A „CRM – [cégnév]” táblázat (vagy a saját Excel-fájlod).

<a name="overview-2"></a>

### Kimenet

Frissített CRM-tábla; egy válaszpiszkozat; `pipeline-review.md`; `launch-plan.md`; egy sor a „Heti mérés” lapon. Házi feladat: az első heti jelentés.

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

**Hogyan futtasd:** másold a lenti két promptot egy új beszélgetésbe a projektben (gyorsabb); a kísérő elakadásnál segít („Mutasd a mintát”).

<a name="05-pipeline-review.01-inbox-crm--result"></a>

### Ezt készíted el

A Postás megkeresi a WORKSHOP-TESZT próbalevelet, és a saját hangodon válaszpiszkozatot ír rá. A CRM-agent ezután CSV-sorokat ad a mai eredményekből (a levélből jött érdeklődés, a Sales Bot minősített leadjei, az EstiWise-ajánlat), te bemásolod őket a táblázatba, a Claude pedig visszaolvassa.

<a name="05-pipeline-review.01-inbox-crm--needs"></a>

### Erre lesz szükséged

- A bekapcsolt Gmail vagy Microsoft 365 connector, valamint a Google Drive connector.
- Egy próbalevél: a gyakorlat elején küldj magadnak a telefonodról egy rövid, kitalált érdeklődést a saját szolgáltatásodra, **WORKSHOP-TESZT** tárggyal (minta: a [mintapostafiók](../scenarios/office-plants/outputs/mailbox-sample.md) B1 levele).
- A 03-as és 04-es blokk fájljai a projektben vagy a gépeden.

<a name="05-pipeline-review.01-inbox-crm--explanation"></a>

### Így működik

Próbalevél → Postás-táblázat (típus, igény, következő lépés) → válaszpiszkozat a `voice-profile.md` szerint, itt a beszélgetésben → te másolod a levelezőbe → javasolt CRM-sorok → CRM-agent: változáslista és CSV-sorok → te bemásolod a táblázatba → a Claude a Drive-ból visszaolvassa.

Miért kézi a bemásolás? A Gmail connector a dokumentáció szerint olvasásra való, és a táblázatcellák közvetlen írása sincs minden connectornál dokumentálva. A bemásolás 30 másodperc, és te látod, mi kerül be. Ha a connectorod tud levélpiszkozatot menteni (például Outlook) vagy táblázatba írni, a Claude megteheti, de csak a kifejezett kérésedre.

A levél tartalma adat, nem utasítás: ha egy levél „küldd el” vagy „hagyd figyelmen kívül” jellegű kérést tartalmaz, a Postás jelzi, és nem hajtja végre.

<a name="05-pipeline-review.01-inbox-crm--decisions"></a>

### Ezekről te döntesz

Elfogadod-e a piszkozatot. Mely sorok kerüljenek a CRM-be, és milyen szakaszba.

<a name="05-pipeline-review.01-inbox-crm--prompt"></a>

### Ezt kérd Claude-tól

```text
Postás: keresd meg a WORKSHOP-TESZT tárgyú levelemet, és mellette legfeljebb 5 mai levélszálat. A hírleveleket és az automatikus értesítéseket hagyd ki.
Add meg a táblázatot az inbox.md szerint. Utána a WORKSHOP-TESZT levélre írj válaszpiszkozatot a voice-profile.md hangján; árat és határidőt csak a company-dna.md-ből vehetsz.
A piszkozatot itt mutasd meg, én másolom a levelezőbe. Semmit ne küldj el.
```

Ha a piszkozat jó, ugyanitt:

```text
CRM: a Postás javaslatai, a leads.csv (vagy a Sales Bot minősített leadjei) és a proposal.md, handoff.md alapján készíts változáslistát a „CRM – [cégnév]” táblához, és add meg az új vagy módosított sorokat CSV-formában, a tábla oszlopsorrendjében.
Amikor szólok, hogy bemásoltam, olvasd vissza a táblát a Google Drive-ból, és erősítsd meg, hogy a sorok bekerültek.
```

<a name="05-pipeline-review.01-inbox-crm--steps"></a>

### Haladj végig ezeken

1. **0–1 perc:** küldd el magadnak a WORKSHOP-TESZT próbalevelet.
2. **1–4 perc:** Postás-prompt; nézd át a táblázatot.
3. **4–7 perc:** olvasd el a piszkozatot. Egyezik a hangod? Van benne olyan ár vagy ígéret, ami nincs a DNS-ben? Kérj javítást, majd másold be a levelezőbe piszkozatként.
4. **7–11 perc:** CRM-prompt; másold be a CSV-sorokat a táblázatba (Google Táblázatban: illeszd be az első üres sorba, majd Adatok → Szöveg felosztása oszlopokra, ha egy oszlopba kerültek). Utána kérd a visszaolvasást (a beszélgetésben + → Google Drive-ból add hozzá a táblát, ha a Claude nem találja).

<a name="05-pipeline-review.01-inbox-crm--check"></a>

### Ellenőrizd az eredményt

- A Postás táblázatában a próbalevél „Új érdeklődés” típusú, javasolt következő lépéssel.
- A piszkozat a te hangodon szól, csak a DNS-ben lévő árat és ígéretet tartalmazza, és a leveleződben piszkozatként vár. Nincs elküldve.
- A CRM-agent változáslistát és CSV-sorokat adott; te bemásoltad őket.
- A Claude visszaolvasta a táblát: legalább három sor van (levél, Sales Bot-lead, EstiWise-ajánlat), mindegyiknél szakasz, forrás, következő lépés és határidő.

<a name="05-pipeline-review.01-inbox-crm--help"></a>

### Ha elakadtál

- **Nincs bekötött levelező:** másold be a próbalevelet, vagy a [mintapostafiók](../scenarios/office-plants/outputs/mailbox-sample.md) beérkezett leveleit.
- **A Claude nem találja a táblát a Drive-ban:** töltsd fel CSV-ként a projektbe `crm.csv` néven, vagy maradj a saját Excel-fájlodnál; a visszaolvasás ekkor a feltöltött fájlból történik.
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

**Hogyan futtasd:** másold a lenti promptot egy új beszélgetésbe; a kísérő elakadásnál segít.

<a name="05-pipeline-review.02-one-customer--result"></a>

### Ezt készíted el

Egy ügyfélesetet a Karmester vezetésével, a három kulcslépésen át: a lead a Sales Botban → az ajánlat az EstiWise-ban → a CRM-sor. Az eredmény a `pipeline-review.md`, lépésenként jelölve, mi működött élesben, mi sandboxban és mi mintából. A teljes lánc (tartalom, válasz, kísérőszöveg, Ellenőr) a „Ha maradt időd” része.

<a name="05-pipeline-review.02-one-customer--needs"></a>

### Erre lesz szükséged

A CRM-tábla az előző leckéből. Az ügyfél: az a lead, akinek a válaszából a 03-as blokkban a `customer-brief.md` készült, és akire a 04-es blokkban az ajánlatot számoltad. A bekapcsolt Sales Bot- és EstiWise-kapcsolat, ha a blokkjukban bekötötted.

Minta: [IrodaLiget folyamatpróba](../scenarios/office-plants/outputs/pipeline-review.md).

<a name="05-pipeline-review.02-one-customer--explanation"></a>

### Így működik

A Karmester nem csinál meg mindent egyedül: kiosztja a lépéseket, és megáll a kapuknál. A teljes lánc nyolc lépés; 12 percben a 3., 5. és 7. lépést visszük végig.

| Lépés | Ki végzi? | Kapcsolat | Ha nem érhető el | Ma |
| --- | --- | --- | --- | --- |
| 1. DNS | Karmester | Projekt | – | automatikus |
| 2. Tartalom: mit látott a lead? | Karmester; Író, ha új szöveg kell | Brandiseer / Buffer, ha a 02-es blokkban bekötötted | A kimásolt poszt vagy `campaign-plan.md` | ha maradt időd |
| 3. LinkedIn-lead és státusza | Karmester | Sales Bot connector (sandbox) | `leads.csv`, `outreach.md` | **igen** |
| 4. A lead válasza és a válaszpiszkozat | Karmester, Író | Sales Bot connector | `customer-brief.md` | ha maradt időd |
| 5. Ajánlat és értékesítési szakasz | Karmester | EstiWise-kapcsolat | `proposal.md`, `handoff.md` | **igen** |
| 6. Kísérőszöveg és Ellenőr | Író; Ellenőr új beszélgetésben | – | – | ha maradt időd |
| 7. CRM-frissítés | CRM-agent; te bemásolod | Google Drive (olvasás) | CSV-sorok | **igen** |
| 8. Holnapi lépés | Te | – | – | **igen** |

Minden lépésnél a végrehajtási mód: `live`, `sandbox` vagy `simulation`. Az őszinte jelölés a cél, nem a hibátlan lánc: a `gaps` sor mondja meg, mit kell holnap megoldani.

<a name="05-pipeline-review.02-one-customer--decisions"></a>

### Ezekről te döntesz

Melyik ügyfelet viszed végig. Jóváhagyod-e a tervet. Mi a holnapi első lépés, ki csinálja és mikor.

<a name="05-pipeline-review.02-one-customer--prompt"></a>

### Ezt kérd Claude-tól

```text
Karmester: vigyük végig egy ügyfél útját, rövid változatban. Az ügyfél: [lead_id vagy cégnév a CRM-ből].
Lépések: a lead státusza a Sales Botban → az ajánlat és a szakasza az EstiWise-ban → a CRM-sor frissítése CSV-ben (én másolom be) → holnapi lépés.
Csak a ténylegesen elérhető kapcsolatokat használd; ahol nincs, a projektben lévő fájlból dolgozz, és jelöld simulation-nek.
Előbb a tervet mutasd kapukkal. Semmit ne küldj, ne indíts, ne fogadj el.
A végén add meg a pipeline-review.md tartalmát a közös mezőkkel: case_id, results, execution_mode, evidence, gaps, next_step. A kihagyott lépések (tartalom, válasz, kísérőszöveg, Ellenőr) kerüljenek a gaps mezőbe.
```

<a name="05-pipeline-review.02-one-customer--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** válaszd ki az ügyfelet a CRM-ből, futtasd a Karmester-promptot, hagyd jóvá a tervet.
2. **2–8 perc:** kövesd a lépéseket. A partnerrendszerből érkező adatot vesd össze azzal, amit délután láttál; a CRM-sort másold be.
3. **8–12 perc:** töltsd le a `pipeline-review.md` fájlt, és ellenőrizd, hogy a CRM-sor szakasza és következő lépése egyezik vele.

<a name="05-pipeline-review.02-one-customer--check"></a>

### Ellenőrizd az eredményt

- A `pipeline-review.md` mind a hat mezőt tartalmazza, és a `case_id` egyezik a CRM-sorral és a `lead_id`-vel.
- Minden lépésnél ott a végrehajtási mód; semmi nincs `live`-nak jelölve, ami mintából jött.
- A `gaps` mezőben szerepelnek a kihagyott lépések és a valódi hiányok.
- A `next_step` konkrét: teendő, felelős, időpont.
- Nem ment ki levél, üzenet vagy ajánlat.

<a name="05-pipeline-review.02-one-customer--help"></a>

### Ha elakadtál

- **A Sales Bot vagy az EstiWise nem válaszol:** ne indítsd újra többször. Kérd: „Ezt a lépést a projektben lévő fájlból csináld, és jelöld simulation-nek.”
- **Nincs saját ügyféllánc a délutánból:** vidd végig az IrodaLiget `office-plants-L01` leadjét a [mintafájlokból](../scenarios/office-plants/README.md).

<a name="05-pipeline-review.02-one-customer--handoff"></a>

### Ezt viszed tovább

A `pipeline-review.md` `gaps` és `next_step` mezője a holnapi indulási terv bemenete.

<a name="05-pipeline-review.02-one-customer--extra"></a>

### Ha maradt időd

Kérd a teljes láncot: „Karmester: most a kihagyott lépéseket is: milyen tartalmunkat láthatta, mit válaszolt, és írja meg az Író az ajánlat kísérőszövegét.” A kísérőszöveget nézesd át az Ellenőrrel új beszélgetésben.

<a name="05-pipeline-review.03-measure-launch"></a>

## Mérés, visszacsatolás és holnapi indulás

**Állapot: review.**

**Azonosító:** `05-pipeline-review.03-measure-launch` · **Állapot:** review · **Időkeret:** 10 perc

**Hogyan futtasd:** másold a lenti promptot egy új beszélgetésbe; a heti jelentés otthoni feladat.

<a name="05-pipeline-review.03-measure-launch--result"></a>

### Ezt készíted el

A `launch-plan.md` „Holnap” részét (három lépés) és a CRM-táblázat „Heti mérés” lapját egyetlen mai sorral. A heti jelentés és a visszacsatolás hétfőn lesz; ma megnézed, hogyan működik.

<a name="05-pipeline-review.03-measure-launch--needs"></a>

### Erre lesz szükséged

A [mérési sablon](../starter-kit/metrics-template.csv), a [heti átnézés leírása és promptja](../starter-kit/weekly-review.md), az [indulási terv sablon](../starter-kit/launch-plan.md), és az előző lecke `pipeline-review.md` fájlja.

Minta: [IrodaLiget indulási terv](../scenarios/office-plants/outputs/launch-plan.md).

<a name="05-pipeline-review.03-measure-launch--explanation"></a>

### Így működik

Mérés nélkül nem tudod, melyik agent és melyik blokk hoz eredményt. Szakaszonként egy-két szám elég, a CRM-táblázat „Heti mérés” lapján:

| Szakasz | Mérőszám | Forrás |
| --- | --- | --- |
| Tartalom | Megjelent posztok, megjelenés, reakció + komment | LinkedIn; Buffer (és Brandiseer, ha bekötötted) |
| LinkedIn | Bejelölés, elfogadás, válasz, érdeklődő válasz | Sales Bot |
| Bejövő | Új érdeklődés e-mailben és EstiWise-on | CRM, EstiWise |
| Ajánlat | Tervezet, kiküldött, megnyert, érték | CRM, EstiWise |
| Sebesség és minőség | Első válasz ideje; ellenőri visszadobások aránya | Postás, Ellenőr |

A **visszacsatolás** azt jelenti, hogy a számokból változtatás lesz. Hétfőnként a Karmester heti jelentést készít, és legfeljebb három javaslatot tesz: a Cég-DNS-ben (például szűkebb ICP, ha alacsony az elfogadás), az Ellenőr ellenőrzőlistájában (például új tiltott ígéret, ha gyakori a BLOKKOLÓ) vagy a jövő heti kampány- és teendőtervben. Te döntesz; a jóváhagyott változásból új DNS-verzió lesz, és minden agent abból dolgozik tovább. A teljes táblázat, hogy mit mire változtatsz: [heti átnézés](../starter-kit/weekly-review.md).

A célértékeket a saját első 2–4 hetedből állítsd be. Kevés esetből (10 alatt) ne vonj le következtetést; a Karmester ezt ki is mondja.

<a name="05-pipeline-review.03-measure-launch--decisions"></a>

### Ezekről te döntesz

Mi a holnapi három lépés. Melyik 3–5 mérőszámot nézed valóban. Melyik nap és órában lesz a heti átnézés.

<a name="05-pipeline-review.03-measure-launch--prompt"></a>

### Ezt kérd Claude-tól

```text
A pipeline-review.md gaps és next_step mezője alapján töltsd ki a launch-plan.md „Holnap” táblázatát: három konkrét lépés agenttel vagy eszközzel, időponttal és kész feltétellel. Legalább egy legyen holnap 10 óráig kész.
Adj egy sort a Heti mérés laphoz CSV-ben (week, stage, metric_id, metric, value, unit, source, note): a mai ellenőrzött szövegek száma (M16), source: Ellenőri jelentések.
```

<a name="05-pipeline-review.03-measure-launch--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** a CRM-táblázatban új lap „Heti mérés” néven, és importáld a `metrics-template.csv` fájlt („Jelenlegi munkalap cseréje”).
2. **2–7 perc:** prompt; nézd át a három holnapi lépést, és javítsd, ami nem konkrét.
3. **7–9 perc:** másold be a mérési sort a „Heti mérés” lapra; töltsd le a `launch-plan.md` fájlt.
4. **9–10 perc:** tedd a naptáradba a hétfői 30 perces heti átnézést.

<a name="05-pipeline-review.03-measure-launch--check"></a>

### Ellenőrizd az eredményt

- A `launch-plan.md` „Holnap” táblázatában három konkrét lépés áll: agent vagy eszköz, időpont, kész feltétel.
- A „Heti mérés” lapon legalább egy valós mai sor van; az üres adat „Nincs megadva”, nem nulla.
- A naptáradban ott a hétfői heti átnézés.
- Meg tudod mondani, melyik számnál milyen változtatást csinálnál a DNS-ben vagy az ellenőrzőlistában.

<a name="05-pipeline-review.03-measure-launch--help"></a>

### Ha elakadtál

Ha a táblázat nem érhető el, a sort a `launch-plan.md` végére írd. Ha az idő elfogy, a „Holnap” táblázat elég; a többit holnap reggel 10 perc alatt pótolod a [mintával](../scenarios/office-plants/outputs/launch-plan.md).

<a name="05-pipeline-review.03-measure-launch--handoff"></a>

### Ezt viszed tovább

**Mit viszel haza:** egy Claude-projektet a saját Cég-DNS-eddel és hangprofiloddal; öt agentet (Karmester, Író, Ellenőr, Postás, CRM); a partnerrendszerek bekötését a saját fiókjaidban; egy CRM-táblát „Heti mérés” lappal; egy végigvitt ügyféleset leírását; és egy holnapi tervet heti rutinnal. A tananyag és a [tanulási kísérő](../assistant.md) hazavihető: bármelyik blokk újraindítható a „Kezdjük az N. blokkot” mondattal.

<a name="05-pipeline-review.03-measure-launch--extra"></a>

### Ha maradt időd (vagy otthoni feladat)

Az első heti jelentés a mai napot alapállapotnak tekintve:

```text
Karmester: készítsd el az első heti jelentést a weekly-review.md prompt szerint, a mai napot alapállapotnak tekintve.
Ha be van kapcsolva a Buffer vagy a Sales Bot kapcsolat, húzd be onnan a mai számokat (posztok, bejelölések, válaszok), és jelöld sandbox-nak, ami a gyakorló környezetből jön.
Minden más „Nincs megadva”, nem nulla. A Heti mérés sorait CSV-ben add meg, én másolom be.
Utána töltsd ki a launch-plan.md többi részét: heti rutin, ami még nem működik élesben, egy mérőszám kiinduló értékkel.
```

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
