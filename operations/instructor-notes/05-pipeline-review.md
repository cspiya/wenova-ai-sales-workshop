# 05-pipeline-review

[HTML-változat](https://cspiya.github.io/wenova-ai-sales-workshop/operations/instructor-notes/05-pipeline-review.html)

[Kapcsolódó tananyag](../../materials/modules/05-pipeline-review.md)

<a name="notes"></a>

Belső oktatói jegyzet · review

**Státusz: review.** 16:15–17:00, a Zárással együtt 45 perc. Vezeti: Kemény Krisztián; körbejár: Piya Csaba, és ha maradnak, a partnerek. Menet és időterv: [előadói jegyzet](../../materials/presentations/05-zaro-eloadas-jegyzet.md). A 16:15 előtti ellenőrzőlista lent található.

<a name="notes-1"></a>

### Bevezető 16:15–16:17 (2 perc)

„Délelőtt felépítettük a csapatot, napközben a három partnerrendszert. Most a kampány mérési oldalát nézzük meg, és hétfőtől egy 30 perces rutin tartja életben.” Kivetítve a [folyamattábla](../../materials/modules/01-business-foundations.md#team-model-3) utolsó két sora.

<a name="notes-2"></a>

### Élő bemutató (16:20:30-tól, 6 perc)

1. A terv kész, a posztok a Bufferen át kimentek: ez a kiindulás. Teljes kampányt nem futtatunk, és egy konkrét ügyfelet sem viszünk végig.
2. Az eredmények és a kommentek lekérése a Windsor.ai-on át, csak olvasással (a kapcsolatot 16:15 előtt a saját fiókoddal ki kell próbálni), majd a [munkafüzet elemző promptja](../../materials/modules/05-pipeline-review.md#05-pipeline-review.02-one-customer--prompt).
3. Ha a kapcsolat nem válaszol, a [minta CSV](../../materials/starter-kit/kampany-minta.csv) kitalált adataival folytasd, és ezt mondd ki.

<a name="notes-checklist"></a>

### Előadói ellenőrzőlista: 16:15 előtt

Az alábbi kapcsolatok állapotát az előadó ellenőrzi a bemutató gépén. A tananyag egyiket sem állítja kipróbáltnak. **A Windsor.ai-kapcsolatot 16:15 előtt még ki kell próbálnod a saját fiókoddal.** Amelyik próba nem sikerül, annál a mintával dolgozz.

| Kész? | Fiók vagy kapcsolat | Próba | Ha nem működik |
| --- | --- | --- | --- |
| ☐ | Claude Desktop, a bemutató projektje | Új beszélgetés indul a projektben | Tartalék gép vagy a vetített minta |
| ☐ | Buffer | Látszik a megjelent posztok listája | A minta CSV posztjai |
| ☐ | Facebook, Windsor.ai-on át, a saját fiókoddal | Egy poszt eredménye és kommentje kiolvasható | A minta CSV eredményei és kommentjei |
| ☐ | GA4, Windsor.ai-on át, a saját fiókoddal | Egy időszak munkameneteinek száma kiolvasható | A minta CSV munkamenetei |
| ☐ | CRM-tábla, Google Drive | A tábla megtalálható és olvasható | A minta CSV tölcsére |
| ☐ | Gmail, csak olvasás | Egy próbalevél megtalálható | A mintapostafiók |
| ☐ | Valódi kampány demója, ha mutatod | A számok megnyílnak a bemutató gépén | Ugord át a 8. diát |
| ☐ | Hangügynök-labor, ha mutatod | Teljes próbahívás a vetítőgépen, hallható teremhanggal | Ugord át a 11. diát |
| ☐ | 2D videó, ha mutatod | A videó elindul, a teremhang hallható | Ugord át a 12. diát |
| ☐ | [Minta CSV](../../materials/starter-kit/kampany-minta.csv) | A fájl megnyílik a bemutató gépén | A 13. dia kitalált számai |

<a name="notes-3"></a>

### Mérés és visszacsatolás: beszédpontok (a 3. leckénél, 2 perc)

- Szakaszonként egy-két szám, nem dashboard. A [mérőszámtábla](../../materials/modules/05-pipeline-review.md#05-pipeline-review.03-measure-launch--explanation) a CRM „Heti mérés” lapjára kerül.
- A négy arány: elfogadás, válasz, ajánlat → megnyert, ellenőri visszadobás. Az utolsó a minőség mérője: ha magas, a DNS „Nem mondjuk” listája vagy az Író utasítása hiányos.
- Célértéket ne adj iparági átlagból: a saját első 2–4 hét a mérce. Kevés esetből ne vonjanak le következtetést.
- Visszacsatolás: hétfő 30 perc, `Karmester: heti átnézés`, legfeljebb három javaslat (DNS, ellenőrzőlista, heti terv), emberi döntés, új DNS-verzió. A teljes leképezés a starter-kit `weekly-review.md` fájljában.

<a name="notes-4"></a>

### Időkapuk és gyakori hibák

A saját feladat 15 perc. A heti jelentés és a dashboard „Ha maradt időd” vagy házi feladat.

| Óra | Hol kell tartani? | Ha nem |
| --- | --- | --- |
| 16:35 | Az előadás véget ért, mindenki választott utat az előfeltételek szerint | Aki bizonytalan, a minta CSV-vel kezd |
| 16:40 | `tolcser.md` kész | Mintaszámokkal folytatja |
| 16:45 | `kampany-elemzes.md` kész | Elég a három megfigyelés |
| 16:50 | `launch-plan.md` „Holnap” táblája kész | A mérési sor holnapra marad |

- **Nincs CRM-tábla vagy Gmail-engedély:** a minta CSV-vel dolgozik, `simulation` jelöléssel. Ez teljes értékű feladat.
- **Valaki Facebook- vagy GA4-kapcsolatot szeretne most beállítani:** ne ezzel töltse az időt. Exportfájl vagy minta.
- **Valaki „live”-nak jelöl mintából jött lépést:** ez a blokk második fontos tanulsága; javíttasd.
- **Valaki válaszolna a kommentekre vagy kiküldene valamit:** ma nem; a holnapi terv első lépése lehet.

<a name="notes-5"></a>

### Zárás 16:50–17:00

Kérdések, majd köszönet a [záró előadás](../../materials/presentations/05-zaro-eloadas.md) 17. és 18. diájával. Kulcsmondat: „Számold meg, kivel zártál, ne csak a leadeket.”

A zárásban a Wenova egy külön, rövid, színes demóban vetíti le a nap összefoglalóját. A 2D-s animált videó narrációjához ElevenLabs kell. A Brandiseer a saját blokkjában állóképet mutat be.

Utána három résztvevő mondja el a saját holnapi első lépését; végül partneri ajánlatok és visszajelzés.

<a name="notes-6"></a>

### Partnerkapcsolatok, vizuális áttekintés, ütemezés

- Az 5. blokkhoz nem kell partnerkapcsolat. Aki nem fér hozzá a saját adataihoz, a minta CSV-ből dolgozik, `simulation` jelöléssel.
- A dashboard és az ütemezett feladatok csak „Ha maradt időd” vagy otthoni feladat. A 15 percbe nem férnek bele; ne erőltesd.
- Ütemezett feladat Pro csomagon a felhőben fut, helyi mappa nélkül: ezért a DNS-t a Google Drive-ba kell tenni. Ezt élőben nem próbáltuk.

<a name="notes-7"></a>

### Kitekintő bemutatók (csak ha marad idő, kivetítve; a résztvevő nem követi)

Az egyeztetés (november 18.) döntése: ezek bemutatók, nem gyakorlatok. A kérdések idejéből nem vehetnek el; ha nincs idő, a zárásban egy mondat róluk elég.

- **Meta-hirdetések a Claude-ból (Piya Csaba, kb. 3 perc):** a Wenova saját kampányában a Claude a Meta Marketing API-n át kampányt és hirdetést hozott létre, és a leadeket, leveleket, hívásokat egy egyszerű Claude Artifact-irányítópultba (mini CRM) gyűjtötte. Élőben nem kötjük be: a céges Facebook-oldal, a Business Manager, a fejlesztői app és a rendszerfelhasználó összekattintása 1–3 óra. Üzenet: „Egy gyors kampányhoz egy Artifact elég; tartós rendszerhez CRM (például HubSpot) kell.” Tanulság a saját kampányunkból: a korosztályt és a célzást nem szabad teljesen a Metára hagyni, mert arra optimalizál, aki kattint, nem arra, aki vásárol.
- **AI-hangasszisztens visszahíváshoz (választható, Gyömrei Máté vagy Ujvári Csaba, kb. 5 perc, ha vállalják):** az EstiWise ElevenLabs-agentjének tapasztalatai (gyors válaszidő turbó modellel, a megszakítás és a bemutatkozó mondat kezelése). Kiegészítés a Wenova próbájából: magyar telefonszám uniós SIP-szolgáltatótól fél óra alatt beköthető; élő ügyfeleknél a hideg hívás nem működött, a visszahívást kérő érdeklődőnél van értelme. Ne ígérj kész megoldást.
- **Hangügynök-labor (választható, kb. 3 perc, kivetítve; előadó egyeztetendő):** a [hangügynök-labor](../../materials/demos/voice-lab/README.md) Modell ↔ modell módjában a `gpt-live-1` eladó a LATE20-as forgatókönyvvel felhív egy kitalált érdeklődőt (például szkeptikus persona), utána megmutatod az elemzést és a „Javaslatok alkalmazása” gombbal készült új forgatókönyv-verziót. Üzenet: ugyanaz a hurok, mint a hétfői 30 perc. Csak akkor vetítsd, ha aznap reggel a vetítőgépen Modell ↔ modell módban végigfutott a hívás, hallható volt a teremhang, és megjelent az elemzés. A LATE20 kedvezménye 20%, az ár 76 800 Ft + ÁFA. Ha bármelyik ellenőrzés hiányzik, hagyd ki a demót, és adj egymondatos [kitekintést](../../materials/modules/05-pipeline-review.md#outlook).

## Kapcsolódó tananyagrészek

A hivatkozások a bal oldali tananyagnézetet a megfelelő szakaszra állítják.

- [Saját adatok: CRM, levelek és a tölcsér](../../materials/modules/05-pipeline-review.md#05-pipeline-review.01-inbox-crm)
- [Kampányeredmények: Buffer, Facebook, GA4](../../materials/modules/05-pipeline-review.md#05-pipeline-review.02-one-customer)
- [Mérés, visszacsatolás és holnapi indulás](../../materials/modules/05-pipeline-review.md#05-pipeline-review.03-measure-launch)
