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
- [Kitekintés: demó](#outlook)
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

A legutóbbi `progress.json`-ban kijelölt aktív DNS és hangprofil, az öt agentfájl a `Tananyag/starter-kit/agents/` mappában. A három partner connectora (Brandiseer, Sales Bot, EstiWise), amelyet a 02–04-es blokkban kötöttél be. A nap eredményei: a 02-es blokk tartalma (vagy `campaign-plan.md`), a 03-as blokk `leads.csv`, `outreach.md`, `customer-brief.md` fájlja és Sales Bot-kampánya, a 04-es blokk `proposal.md`, `handoff.md` fájlja és EstiWise-ajánlata. A „CRM – [cégnév]” táblázat (vagy a saját Excel-fájlod).

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
- Végrehajtási mód: levelezés és CRM `live`; Sales Bot `sandbox`; EstiWise `live` saját fiókkal, `sandbox` demófiókban végrehajtott és visszaolvasott műveletnél, `simulation` fájlos mintánál
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
- A `leads.csv`, `outreach.md`, `customer-brief.md`, `proposal.md` és `handoff.md` a 03-as és 04-es blokk mappáiból, valamint a jelenlegi CRM-tábla vagy `crm.csv`.

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
Add meg a táblázatot az inbox.md szerint. Utána a WORKSHOP-TESZT levélre írj válaszpiszkozatot a legutóbbi progress.json-ban kijelölt hangprofil alapján; árat és határidőt csak az aktív DNS-ből vehetsz.
A piszkozatot itt mutasd meg, én másolom a levelezőbe. Semmit ne küldj el.
```

Ha a piszkozat jó, ugyanitt:

```text
CRM: olvasd be a jelenlegi CRM-táblát vagy a crm.csv-t, a Postás javaslatait és a 03-as, 04-es blokk csatolt fájljait. A kapcsolt ajánlatnál a case_id a lead_id, a partner_ref a proposal_id. Egyeztesd az azonosítókat a leads.csv, outreach.md, customer-brief.md, proposal.md és handoff.md fájlban. Eltérésnél állj meg. A teendőt, határidőt és felelőst a handoff.md-ből vedd.
Case_id alapján mutasd meg, melyik sor új és melyik meglévő sort módosítanád. Egy kulcshoz egy CSV-sort adj a tábla oszlopsorrendjében. Többszörös találat esetén kérj egyeztetést.
Beillesztés után olvasd vissza a táblát vagy a mentett crm.csv-t. Ellenőrizd az érintett case_id-k egyediségét és a jóváhagyott mezőértékeket.
```

<a name="05-pipeline-review.01-inbox-crm--steps"></a>

### Haladj végig ezeken

1. **0–1 perc:** küldd el magadnak a WORKSHOP-TESZT próbalevelet.
2. **1–4 perc:** Postás-prompt; nézd át a táblázatot.
3. **4–7 perc:** olvasd el a piszkozatot. Egyezik a hangod? Van benne olyan ár vagy ígéret, ami nincs a DNS-ben? Kérj javítást, majd másold be a levelezőbe piszkozatként.
4. **7–11 perc:** futtasd a CRM-promptot. Új ügyet az első üres sorba illessz. Módosításnál keresd meg a `case_id`-t, és ugyanabba a sorba illeszd az új értékeket. Ha a CSV egy oszlopba kerül, a Google Táblázatban válaszd az Adatok → Szöveg felosztása oszlopokra menüpontot. Kérd a visszaolvasást a táblából vagy a mentett CSV-ből.

<a name="05-pipeline-review.01-inbox-crm--check"></a>

### Ellenőrizd az eredményt

- A Postás táblázatában a próbalevél „Új érdeklődés” típusú, javasolt következő lépéssel.
- A piszkozat a te hangodon szól, csak a DNS-ben lévő árat és ígéretet tartalmazza, és a leveleződben piszkozatként vár. Nincs elküldve.
- A CRM-agent változáslistát és CSV-sorokat adott; te bemásoltad őket.
- A Claude visszaolvasta a táblát. Minden érintett `case_id` egyedi. A kiválasztott lead és a hozzá tartozó ajánlat egy sorban van. Ellenőrizd a szakaszt, a `partner_ref`-et, a teendőt, a határidőt és a felelőst.

<a name="05-pipeline-review.01-inbox-crm--help"></a>

### Ha elakadtál

- **Nincs bekötött levelező:** másold be a próbalevelet, vagy a [mintapostafiók](../scenarios/office-plants/outputs/mailbox-sample.md) beérkezett leveleit.
- **A Claude nem találja a táblát a Drive-ban:** mentsd a táblát CSV-ként `Munka/05-Folyamat/crm.csv` néven, vagy maradj a saját Excel-fájlodnál a `Munka/05-Folyamat/` mappában; a visszaolvasás ekkor onnan történik.
- **Öt perc után sem megy:** használd az aktív mintavállalkozás CRM-fájlját: [IrodaLiget](../scenarios/office-plants/outputs/crm.csv), [CégesKép](../scenarios/business-photography/outputs/crm.csv), [WebŐr](../scenarios/website-maintenance/outputs/crm.csv). Saját ügyről váltva a teljes mintaláncot vedd át.

<a name="05-pipeline-review.01-inbox-crm--handoff"></a>

### Ezt viszed tovább

A következő leckéhez keresd meg azt a CRM-sort, amelynek `case_id` értéke egyezik a 03-as modulban kiválasztott `lead_id`-val.

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

Egy ügyfélesetet a Karmester vezetésével, a három kulcslépésen át: a lead a Sales Botban → az ajánlat az EstiWise-ban → a CRM-sor. Az eredmény a `pipeline-review.md`, lépésenként jelölve, mi működött élesben, mi sandboxban és mi mintából. A tartalom és a válasz külön vizsgálata, valamint a kísérőszöveg elkészítése és ellenőrzése választható. Az ügy azonosítóját a rövid úton is minden fájlban egyezteted.

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
| 2. Tartalom: mit látott a lead? | Karmester; Író, ha új szöveg kell | Brandiseer és Buffer connector (02-es blokk) | A kimásolt poszt vagy `campaign-plan.md` | ha maradt időd |
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
Karmester: vigyük végig egy ügyfél útját, rövid változatban. Csatoltam a CRM-et és a 03-as, 04-es blokk fájljait. Az ügyfél: [a customer-brief.md lead_id-ja]. Ez egyezzen a leads.csv kiválasztott sorának, az outreach.md, a customer-brief.md, a proposal.md és a handoff.md lead_id-jával, valamint a CRM case_id mezőjével. A proposal.md és handoff.md proposal_id-ja egyezzen a CRM partner_ref mezőjével. Hiánynál vagy eltérésnél kérd az összetartozó fájlokat vagy a teljes mintaláncot.
Lépések: a lead státusza a Sales Botban → az ajánlat és a szakasza az EstiWise-ban → ugyanannak a CRM-sornak az egyeztetése és szükség szerinti frissítése (én írom be) → holnapi lépés.
Használd az elérhető kapcsolatokat. A Sales Bot gyakorlóművelete és az EstiWise demófiókban végrehajtott, visszaolvasott művelet sandbox. Nevezd meg az evidence mezőben, mit olvastál vissza. Ha fájlból dolgozol, a mód simulation.
Előbb a tervet mutasd kapukkal. Semmit ne küldj, ne indíts, ne fogadj el.
A végén add meg a pipeline-review.md tartalmát a közös mezőkkel: case_id, results, execution_mode, evidence, gaps, next_step. A kihagyott lépések (tartalom, válasz, kísérőszöveg, Ellenőr) kerüljenek a gaps mezőbe.
```

<a name="05-pipeline-review.02-one-customer--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** keresd meg a 03-as blokkban kiválasztott lead CRM-sorát, csatold a fájlokat, majd futtasd a Karmester-promptot és hagyd jóvá a tervet.
2. **2–8 perc:** kövesd a lépéseket. A partnerrendszerből érkező adatot vesd össze azzal, amit délután láttál; ha módosítás kell, ugyanazt a CRM-sort frissítsd és olvasd vissza.
3. **8–12 perc:** a `pipeline-review.md` a `Munka/05-Folyamat/` mappába kerül; ellenőrizd, hogy a CRM-sor szakasza és következő lépése egyezik vele.

<a name="05-pipeline-review.02-one-customer--check"></a>

### Ellenőrizd az eredményt

- A `pipeline-review.md` mind a hat mezőt tartalmazza. A `case_id` egyezik a CRM-sor kulcsával és a teljes lánc `lead_id`-jával. Az `evidence` megnevezi az ügy fájljait és az ajánlatazonosítót.
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

Kérd a teljes láncot: „Karmester: most a kihagyott lépéseket is: milyen tartalmunkat láthatta, mit válaszolt, és írja meg az Író az ajánlat kísérőszövegét.” A kísérőszöveget nézesd át az Ellenőrrel új beszélgetésben. Javítás után vidd vissza ugyanoda. Az `evidence` mezőbe az ehhez a leadhez, ajánlathoz és szövegváltozathoz tartozó ítélet kerüljön. Ha hiányzik, írd a `gaps` mezőbe.

**A nap egy oldalon (vizuális áttekintés, 5 perc):**

```text
Karmester: készíts egyetlen önálló HTML-fájlt Munka/05-Folyamat/nap-attekintes.html néven a mai eredményeimből.
Tartalom: 1) a Cég-DNS lényege (ICP, fő ajánlat, hang); 2) kampánynaptár: a Bufferben lévő mai posztjaim és a Sales Bot-kampány lépései naptárnézetben (a Buffer és a Sales Bot connectorból olvasd; ha nem érhető el, a Munka/02-Tartalom és 03-Leadek fájljaiból); 3) posztelőnézet a Munka/02-Tartalom mappa képeivel; 4) a végigvitt ügyfél útja lépésenként, végrehajtási móddal; 5) a CRM szakaszonkénti számai; 6) a holnapi három lépés.
Szabályok: csak olvass; semmit ne küldj, ne ütemezz, ne módosíts a partnerrendszerekben. Ami nincs meg, „Nincs megadva”. Külső hivatkozás és szkript nélkül. A végén add meg az útvonalat.
```

Nyisd meg a fájlt a böngészőben (dupla kattintás a `Munka/05-Folyamat/` mappában).

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

A [mérési sablon](../starter-kit/metrics-template.csv), a [heti átnézés leírása és promptja](../starter-kit/weekly-review.md), az [indulási terv sablon](../starter-kit/launch-plan.md), az előző lecke `pipeline-review.md` fájlja és a saját, ma mentett ellenőri rekordok, köztük az 01-es blokk `post-review.md` fájlja, ha elkészült.

Minta: [IrodaLiget indulási terv](../scenarios/office-plants/outputs/launch-plan.md).

<a name="05-pipeline-review.03-measure-launch--explanation"></a>

### Így működik

Mérés nélkül nem tudod, melyik agent és melyik blokk hoz eredményt. Szakaszonként egy-két szám elég, a CRM-táblázat „Heti mérés” lapján:

| Szakasz | Mérőszám | Forrás |
| --- | --- | --- |
| Tartalom | Megjelent posztok, megjelenés, reakció + komment | LinkedIn; Buffer és Brandiseer connector |
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
Adj egy sort a Heti mérés laphoz CSV-ben (week, stage, metric_id, metric, value, unit, source, note): a mai ellenőrzött szövegek száma (M16). Csak az átadott saját ellenőri rekordokból számolj, amelyekben van szövegazonosító, vizsgált verzió és tényleges ítélet. Egy szöveget egy alkalommal számolj, akkor is, ha az Ellenőr több verziót látott. A source mezőbe írd a felhasznált fájlneveket. A mintaítélet nem saját mérési adat. Ha csak mintád van vagy hiányzik a bizonyíték, a value legyen üres, a note mezőben szerepeljen „csak minta” vagy „nem ellenőrzött”.
```

<a name="05-pipeline-review.03-measure-launch--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** a CRM-táblázatban új lap „Heti mérés” néven, és importáld a `metrics-template.csv` fájlt („Jelenlegi munkalap cseréje”).
2. **2–7 perc:** csatold a folyamatpróbát és a mentett saját ellenőri rekordokat. Futtasd a promptot, majd nézd át a holnapi lépéseket és a mérési sor forrását.
3. **7–9 perc:** másold be a mérési sort a „Heti mérés” lapra; a `launch-plan.md` a `Munka/05-Folyamat/` mappába kerül.
4. **9–10 perc:** tedd a naptáradba a hétfői 30 perces heti átnézést.

<a name="05-pipeline-review.03-measure-launch--check"></a>

### Ellenőrizd az eredményt

- A `launch-plan.md` „Holnap” táblázatában három konkrét lépés áll: agent vagy eszköz, időpont, kész feltétel.
- A „Heti mérés” lapon ott az M16-sor. A szám saját ellenőri rekordokból visszakövethető. Bizonyíték hiányában az érték üres, a megjegyzés megadja az okát.
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

**Ütemezett feladatok (otthon, 10 perc):** a Claude Desktop **Scheduled** oldalán (bal oldali sáv → Scheduled → New task → Create with Claude) beállíthatsz napi levél-összefoglalót, heti levélpiszkozatot és hétfői heti átnézést. A kész promptok és a szabályok: [ütemezett feladatok](../starter-kit/scheduled-tasks.md). Az ütemezett feladat csak olvas, összefoglal és piszkozatot ír; nem küld.

<a name="recovery"></a>

## Segítség elakadáskor

1. A saját eddigi munkád maradjon a `Munka/` mappában, a CRM-tábla is.
2. Válaszd ki a teljes ügyhöz ugyanazt a mintát: [IrodaLiget](../scenarios/office-plants/README.md), [CégesKép](../scenarios/business-photography/README.md) vagy [WebŐr](../scenarios/website-maintenance/README.md). A Postás külön gyakorlatához használhatod az IrodaLiget [mintapostafiókját](../scenarios/office-plants/outputs/mailbox-sample.md). A Postás levélügyét a CRM-ben is kezeld külön az ajánlatos ügytől.
3. A haladási naplóban jelöld: `completed_with_example`, végrehajtás: `simulation`.
4. A saját indulási tervedet akkor is töltsd ki: a holnapi első lépés lehet az, ami ma nem működött.

Saját cégről mintára váltáskor ne keverd a minta árait a saját ajánlatoddal. A statikus csomag nem bizonyít működő partnerintegrációt.

<a name="examples"></a>

## Gyakorlópéldák

Az [IrodaLiget](../scenarios/office-plants/README.md) teljes kitalált lánca: alaplap → DNS → lead → igény → ajánlat → átadás → CRM → folyamatpróba → indulási terv. A végrehajtási mód mindenhol `simulation`.

<a name="outlook"></a>

## Kitekintés: demó

Nem része a 35 percnek, és nem kell hozzá semmit telepítened. Ha kíváncsi vagy, hogyan beszél egy magyar AI-telefonos asszisztens egy értékesítési forgatókönyv szerint, és hogyan javítható a forgatókönyv a rögzített beszélgetések elemzéséből, nézd meg a [hangügynök-labort](../demos/voice-lab/README.md). Otthon is kipróbálható, saját API-kulccsal vagy a szervezőtől kapott hozzáféréssel. Ugyanaz a hurok, mint a heti átnézésnél: beszélgetés → elemzés → javaslat → új verzió.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Hazavihető eredmények](../README.md#outputs)

Wenova × Brandiseer × Blackhole Media × EstiWise
