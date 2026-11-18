# 05-pipeline-review

[HTML-változat](05-pipeline-review.html)

[Kapcsolódó tananyag](../../materials/modules/05-pipeline-review.md)

<a name="notes"></a>

Belső oktatói jegyzet · review

**Státusz: review.** 16:15–16:50, 35 perc. Vezeti: Kemény Krisztián; körbejár: Piya Csaba, és ha maradnak, a partnerek.

<a name="notes-1"></a>

### Bevezető 16:15–16:17 (2 perc)

„Délelőtt felépítettük a csapatot, napközben a három partnerrendszert. Most egy ügyfél útja lesz egy táblában, és hétfőtől egy 30 perces rutin tartja életben.” Kivetítve a [folyamattábla](../../materials/modules/01-business-foundations.md#team-model-3) utolsó két sora.

<a name="notes-2"></a>

### Demó (párhuzamosan, a kivetítőn, IrodaLiget-mintával)

1. A [mintapostafiók](../../materials/scenarios/office-plants/outputs/mailbox-sample.md) B1–B4 levele a Postásnak: B4 a gyanús utasítás. Mutasd meg, hogy a Postás jelzi, és nem hajtja végre.
2. B1 válaszpiszkozata: 25 növény, a DNS szerint nincs ár. Ugyanaz a csapda, mint a [kész ellenőri jelentésben](../../materials/scenarios/office-plants/outputs/review-sample.md).
3. A [CRM-minta](../../materials/scenarios/office-plants/outputs/crm.csv) négy sora, forrásonként.

<a name="notes-3"></a>

### Mérés és visszacsatolás: beszédpontok (a 3. leckénél, 2 perc)

- Szakaszonként egy-két szám, nem dashboard. A [mérőszámtábla](../../materials/modules/05-pipeline-review.md#05-pipeline-review.03-measure-launch--explanation) a CRM „Heti mérés” lapjára kerül.
- A négy arány: elfogadás, válasz, ajánlat → megnyert, ellenőri visszadobás. Az utolsó a minőség mérője: ha magas, a DNS „Nem mondjuk” listája vagy az Író utasítása hiányos.
- Célértéket ne adj iparági átlagból: a saját első 2–4 hét a mérce. Kevés esetből ne vonjanak le következtetést.
- Visszacsatolás: hétfő 30 perc, `Karmester: heti átnézés`, legfeljebb három javaslat (DNS, ellenőrzőlista, heti terv), emberi döntés, új DNS-verzió. A teljes leképezés a starter-kit `weekly-review.md` fájljában.

<a name="notes-4"></a>

### Időkapuk és gyakori hibák

A 35 perc csak a rövid úttal fér bele: a Postás csak a WORKSHOP-TESZT levelet és legfeljebb 5 szálat nézi; a Karmester alapból a 3., 5. és 7. lépést viszi; az Ellenőr és a heti jelentés „Ha maradt időd” vagy házi feladat.

| Óra | Hol kell tartani? | Ha nem |
| --- | --- | --- |
| 16:21 | A Postás megtalálta a WORKSHOP-TESZT levelet | Próbalevél bemásolva vagy mintapostafiók |
| 16:24 | A piszkozat a levelezőben (bemásolva) | Piszkozat csak a beszélgetésben; tovább |
| 16:28 | CSV-sorok bemásolva, visszaolvasva | `crm.csv` a projektben; tovább a 2. leckére |
| 16:40 | `pipeline-review.md` kész (3., 5., 7. lépés) | Csak a 7. lépés; a többi `gaps` |
| 16:48 | `launch-plan.md` „Holnap” táblája kész, egy „Heti mérés” sor | A mérési sor holnapra marad |

- **Valaki vár, hogy a Claude „beírja” a táblába vagy elmentse a Gmail-piszkozatot:** ez az alapút szerint kézi bemásolás (Gmail connector: olvasás; táblázatírás nincs mindenhol dokumentálva). Ne töltsenek vele időt.
- **A Sales Bot vagy az EstiWise lassú a nap végén:** egy újrapróbálás, aztán fájlból, `simulation` jelöléssel. Ne indítsanak új EstiWise-kalkulációt.
- **Valaki „live”-nak jelöl mintából jött lépést:** ez a blokk második fontos tanulsága; javíttasd.
- **Valaki elküldené a piszkozatot:** ma nem; a holnapi terv első lépése lehet.

<a name="notes-5"></a>

### Zárás 16:50–17:00

**Egy visszacsatolási kör bemutatása (4 perc, kivetítve, IrodaLiget):**

1. A [kész ellenőri jelentés](../../materials/scenarios/office-plants/outputs/review-sample.md): az Ellenőr BLOKKOLÓ-t adott, mert az Író 25 növényre ígért árat.
2. A [DNS](../../materials/scenarios/office-plants/outputs/company-dna.md) 6. szakaszába új sor a „Nem mondjuk” oszlopba: „Ár 20 növény felett bejárás nélkül”. Verzió 0.1 → 0.2, sor a változásnaplóba („ellenőri BLOKKOLÓ, B1 levél”). Az új fájl cseréje a projekt tudásában.
3. Az Író újrafuttatása ugyanarra a levélre egy új beszélgetésben: a piszkozat már nem ígér árat; az Ellenőr MEGFELEL-t ad.
4. Kulcsmondat: „Ez a hétfői 30 perc kicsiben: szám vagy ellenőri jelzés → DNS-sor → új verzió → minden agent jobb.”

Utána három résztvevő mondja el a saját holnapi első lépését; végül partneri ajánlatok és visszajelzés.

<a name="notes-6"></a>

### Partnerkapcsolatok, vizuális áttekintés, ütemezés

- Az 5. blokk azzal számol, hogy a Brandiseer, a Sales Bot és az EstiWise connectora a 02–04-es blokkban be van kötve. Akinél kiesett, az a táblázat „Ha nem érhető el” oszlopa szerint fájlból dolgozik, `simulation` jelöléssel.
- „A nap egy oldalon” HTML és az ütemezett feladatok csak „Ha maradt időd” vagy otthoni feladat. A 35 percbe nem férnek bele; ne erőltesd.
- Ütemezett feladat Pro csomagon a felhőben fut, helyi mappa nélkül: ezért a DNS-t a Google Drive-ba kell tenni. Ezt élőben nem próbáltuk.

<a name="notes-7"></a>

### Kitekintő bemutatók (csak ha marad idő, kivetítve; a résztvevő nem követi)

Az egyeztetés (november 18.) döntése: ezek bemutatók, nem gyakorlatok. A 35 percből nem vehetnek el; ha nincs idő, a zárásban egy mondat róluk elég.

- **Meta-hirdetések a Claude-ból (Piya Csaba, kb. 3 perc):** a Wenova saját kampányában a Claude a Meta Marketing API-n át kampányt és hirdetést hozott létre, és a leadeket, leveleket, hívásokat egy egyszerű Claude Artifact-irányítópultba (mini CRM) gyűjtötte. Élőben nem kötjük be: a céges Facebook-oldal, a Business Manager, a fejlesztői app és a rendszerfelhasználó összekattintása 1–3 óra. Üzenet: „Egy gyors kampányhoz egy Artifact elég; tartós rendszerhez CRM (például HubSpot) kell.” Tanulság a saját kampányunkból: a korosztályt és a célzást nem szabad teljesen a Metára hagyni, mert arra optimalizál, aki kattint, nem arra, aki vásárol.
- **AI-hangasszisztens visszahíváshoz (választható, Gyömrei Máté vagy Ujvári Csaba, kb. 5 perc, ha vállalják):** az EstiWise ElevenLabs-agentjének tapasztalatai (gyors válaszidő turbó modellel, a megszakítás és a bemutatkozó mondat kezelése). Kiegészítés a Wenova próbájából: magyar telefonszám uniós SIP-szolgáltatótól fél óra alatt beköthető; élő ügyfeleknél a hideg hívás nem működött, a visszahívást kérő érdeklődőnél van értelme. Ne ígérj kész megoldást.

## Kapcsolódó tananyagrészek

A hivatkozások a bal oldali tananyagnézetet a megfelelő szakaszra állítják.

- [Postás és CRM](../../materials/modules/05-pipeline-review.md#05-pipeline-review.01-inbox-crm)
- [Egy ügyfél végig a Karmesterrel](../../materials/modules/05-pipeline-review.md#05-pipeline-review.02-one-customer)
- [Mérés, visszacsatolás és holnapi indulás](../../materials/modules/05-pipeline-review.md#05-pipeline-review.03-measure-launch)
