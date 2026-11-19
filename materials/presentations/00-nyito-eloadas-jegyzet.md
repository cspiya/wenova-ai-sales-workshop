<!-- presentation -->
# Nyitó előadás: előadói jegyzet

[A diák megnyitása](00-nyito-eloadas.html)

Ezt a jegyzetet egyedül is végig tudod olvasni felkészüléskor, és vetítés közben is használhatod. Minden diánál megtalálod, mi látszik, mi a lényeg, mit mondj el szó szerint, és mit kérdezhetnek.

## A teljes előadás egy oldalon

**A szál.** Egy ügyfél ajánlatot kér, és az AI megírhatja a válasz első változatát. Húsz perc alatt megmutatjuk, mi történik közben a gépben, miért hibázik, és hogyan lesz a kérésből ellenőrzött piszkozat, amelyről te döntesz.

**Az öt lépés, amit a közönségnek vinnie kell:**

1. **Honnan jön az AI?** Régi kutatási terület, a mai ugrást a sok adat, a nagy számítási kapacitás és a jobb felépítés hozta.
2. **Hogyan tanul?** Példákból, rétegekben, és a hibájából. Ez a backpropagation.
3. **Hogyan dolgozik a szöveggel?** Tokenekre vág, vektorokkal számol, a szavakat egymás fényében értelmezi (attention), mindezt egymásra rakott rétegekben (Transformer), végül tokenenként ír.
4. **Miért hibázik?** Csak azt látja, amit az adott körben megkap, és a valószínű folytatást számolja, nem a tényeket ellenőrzi.
5. **Mit csinálj másképp?** Adj célt, forrást és kész feltételt, oszd szét a munkát szerepekre, a döntés pedig maradjon nálad.

**A három fogalom, amit nem szabad összekeverni:**

| Fogalom | Mire való? | Mikor működik? |
| --- | --- | --- |
| Backpropagation | Kiszámolja, merre változzanak a súlyok. Az átállítás a következő tanítási lépés | Csak tanítás közben |
| Attention | Súlyozza, mit vegyen át a szöveg többi részéből | Tanításkor és használatkor is |
| Transformer | A rétegek felépítése: minden rétegben figyelem és átalakítás | Ez maga a háló |

**Időterv.** A fő rész 20 dia, pontosan 20 perc. A 21. és a 22. dia tartalék, csak kérdésre vedd elő.

| Blokk | Dia | Óraidő | Hossz |
| --- | --- | --- | --- |
| Honnan jön az AI, miért most | 1–4 | 09:00:00–09:02:55 | 2:55 |
| Hogyan tanul a gép | 5–7 | 09:02:55–09:05:55 | 3:00 |
| Hogyan dolgozik a szöveggel | 8–11 | 09:05:55–09:10:40 | 4:45 |
| Mit lát a modell, és hol hibázik | 12–14 | 09:10:40–09:13:40 | 3:00 |
| Jó utasítás az AI-nak | 15–17 | 09:13:40–09:16:25 | 2:45 |
| Szerepek és ellenőrzés | 18–19 | 09:16:25–09:19:25 | 3:00 |
| Átkötés a Cég-DNS-re | 20 | 09:19:25–09:20:00 | 0:35 |
| **Fő rész** | **1–20** | **09:00–09:20** | **20:00** |

**Vetítés.** Lapozás: PageDown, szóköz vagy nyílbillentyű. Teljes képernyő: F11. Vetítéshez használj Chrome 133-at vagy újabb Chrome-ot. A mozgó ábrák a diára érkezéskor elindulnak, egyszer lefutnak, és a záróképen megállnak. Ha csúszol, a 13. és a 16. diánál rövidíthetsz a legkönnyebben. A hosszabb kérdéseket vidd a nyitás utánra.

## Dia 1: AI dióhéjban

**Idő:** 09:00:00–09:00:35 (0:35)

**Mi látszik a dián:** A cím és négy évszám: 1955 Dartmouth-javaslat, 2012 képfelismerés, 2017 Transformer, 2022 ChatGPT.

**A lényeg egy mondatban:** Az AI régi kutatási terület, de a mai ugrás friss.

**Ezt mondd el:** „Képzeld el, hogy egy ügyfél ajánlatot kér, és az AI megírja a válasz első változatát. Ma megnézzük, mi történik közben. Az AI, vagyis mesterséges intelligencia, olyan módszerek gyűjtőneve, amelyekkel a gép felismer, előre jelez vagy szöveget alkot. Már az 1955-ös Dartmouth-javaslatban is szó volt a nyelvhasználatról és a tanulásról. 2012-ben áttörést hozott a képfelismerés, 2017-ben megjelent a Transformer, 2022-ben pedig a ChatGPT.”

**Várható kérdés:** Miért most lett ebből áttörés?

**Rövid válasz:** Találkozott a sok digitális szöveg, a nagy számítási kapacitás és a 2017-es Transformer felépítés.

## Dia 2: Melyik AI-val dolgozunk ma?

**Idő:** 09:00:35–09:01:15 (0:40)

**Mi látszik a dián:** Egymásba zárt keretek: AI, gépi tanulás, mélytanulás, generatív mély modellek. Legbelül kiemelve a nagy nyelvi modellek (LLM), mellettük szaggatottan a kép, hang, videó.

**A lényeg egy mondatban:** Ma a generatív mély modellek szöveges ágával, a nagy nyelvi modellel dolgozunk.

**Ezt mondd el:** „A külső keret az egész terület. Beljebb a gépi tanulás van, ahol a gép példákból tanul. A mélytanulás ennek az az ága, amely sok egymásra épülő számítási réteget használ. Ezen belül a generatív mély modellek új tartalmat állítanak elő. Az egyik águk a nagy nyelvi modell, angol rövidítéssel LLM. Ma a nagy nyelvi modellek szöveges használatára figyelünk. Vannak kép-, hang- és videógeneráló modellek is. Egy modell többféle tartalommal is dolgozhat.”

**Várható kérdés:** A képgenerátor is LLM?

**Rövid válasz:** Egy képgenerátor lehet önálló képmodell vagy többféle tartalommal dolgozó modell része.

## Dia 3: Mekkora léptékről beszélünk?

**Idő:** 09:01:15–09:02:15 (1:00)

**Mi látszik a dián:** GPT-3, 2020. Három szám: 300 milliárd feldolgozott tanítótoken, 175 milliárd paraméter, körülbelül 3,14 × 10²³ művelet a tanításban.

**A lényeg egy mondatban:** Egy nagy modell tanítása emberi ésszel alig felfogható mennyiségű számítás.

**Ezt mondd el:** „Nézzünk egy nyilvános példát, a 2020-as GPT-3 legnagyobb változatát. A tanítás során 300 milliárd tokent dolgozott fel. A token szövegdarab: lehet szó, szórész vagy írásjel. A modellnek 175 milliárd paramétere volt. A paraméter egy szám a modellben, amelynek az értékét a tanítás állítja be. A kutatók becslése szerint ehhez körülbelül 3,14-szer tíz a huszonharmadikon művelet kellett. Ha másodpercenként egymilliárd műveletet végeznél, nagyjából tízmillió évig tartana. Hogy ezeket az adatokat közlik-e, az modellenként eltér. A GPT-4 nyilvános műszaki jelentése például nem adta meg a modell méretét.”

**Várható kérdés:** Mekkorák a mai modellek?

**Rövid válasz:** Ez modellenként eltér. A GPT-4 nyilvános műszaki jelentése például nem adta meg a modell méretét.

## Dia 4: Mitől javult a teljesítmény?

**Idő:** 09:02:15–09:02:55 (0:40)

**Mi látszik a dián:** Négy kártya: sok, szűrt szöveg; párhuzamos számítás; jobb modellfelépítés; tanítás a párbeszédre.

**A lényeg egy mondatban:** Az eredmény az adat, a számítás, a felépítés és az emberi visszajelzés együttese.

**Ezt mondd el:** „Négy dolog kellett hozzá. Először sok szöveg, amelyet szűrtek, és amelyből kiszedték az ismétlődéseket. Másodszor párhuzamos számítás: sok grafikus processzor dolgozik egyszerre. Harmadszor jobb felépítés, ez a Transformer, amelyre mindjárt visszatérünk. Negyedszer külön tanítás a párbeszédre: emberek értékelik a válaszokat, és a modellt ehhez hangolják. Ettől lesz egy szövegfolytató modellből használható beszélgetőtárs.”

**Várható kérdés:** A nagyobb modell mindig jobb?

**Rövid válasz:** Nem. A Chinchilla kisebb volt a Gophernél, több szövegen tanult, és a vizsgált feladatokon jobb lett. Erre való a 21. tartalék dia.

## Dia 5: Machine learning | Minták a példákból

**Idő:** 09:02:55–09:03:35 (0:40)

**Mi látszik a dián:** Balra három megjelölt levél, középen a Modell doboz, jobbra egy új levél. A végén megjelenik: Becslés: ajánlatkérés. Alul a Tanítás és a Használat oldal.

**A lényeg egy mondatban:** A modell példákból tanul szabályt, nem kézzel írt szabályokból.

**Ezt mondd el:** „A machine learning, magyarul gépi tanulás, azt jelenti, hogy nem szabályokat írunk, hanem példákat adunk. Itt két levélre ráírtuk, hogy ajánlatkérés, egyre, hogy nem az. Ez a címke. A modell a példákból megtanul jelekből következtetni. Jön egy új levél, amelynek nincs címkéje, és a modell megbecsüli, mi lehet. Használat előtt félretett, címkézett példákon mérjük, mennyire pontos.”

**Várható kérdés:** A nyelvi modellt is így címkézték?

**Rövid válasz:** Az alaptanításnál a címke maga a szöveg folytatása: a modell a következő tokent jósolja. Ezt emberi visszajelzéssel finomhangolják.

## Dia 6: Deep learning | Mit csinálnak a rétegek?

**Idő:** 09:03:35–09:04:30 (0:55)

**Mi látszik a dián:** Balra egy cserepes növény képe, középen három réteg pontokkal és vonalakkal, alattuk: Élek, Formák, Tárgy. Jobbra az eredmény: Cserepes növény, esély: 92%.

**A lényeg egy mondatban:** A rétegek egyszerű jelekből építenek összetett mintázatot, és ezt a háló maga tanulja meg.

**Ezt mondd el:** „A deep learning, magyarul mélytanulás, sok egymásra épülő réteget használ. Ezek együtt alkotják a neurális hálót. A kis pont a neuron, egy egyszerű számolóegység: számokat kap, összesúlyozza őket, és továbbad egy értéket. A súly azt mondja meg, melyik bejövő szám mennyit számít, a vonal vastagsága ezt mutatja. Képfelismerésnél a korai rétegek jellemzően éleket, a későbbiek formákat és tárgyrészeket ismernek fel. Ezt senki nem programozza be, a háló a példákból tanulja meg. A végén egy esélyt kapunk: ez 92 százalék eséllyel cserepes növény.”

**Várható kérdés:** Tudjuk pontosan, mit csinál egy neuron?

**Rövid válasz:** Csak részben. A mintázatokat a háló tanulja, nem mi programozzuk, ezért a belső működés nehezen olvasható ki.

## Dia 7: Backpropagation | Így tanul a hibából

**Idő:** 09:04:30–09:05:55 (1:25)

**Mi látszik a dián:** Felül a nagy mondat. Balra egy levél: „Kérek árat 25 növényre.” Középen a háló, jobbra a tipp (Egyéb levél), a helyes válasz (Ajánlatkérés) és a Hiba. Lila szaggatott vonalak futnak visszafelé, majd egyes vonalak vastagsága megváltozik. Az ajánlatkérés esélye 24%-ról 31%-ra nő. Alul az öt lépés és a „Melyik mire való?” sor.

**A lényeg egy mondatban:** A backpropagation tanítás közben kiszámolja, merre változzanak a súlyok, az átállítás pedig a következő tanítási lépés.

**Ezt mondd el:** „A háló eddig csak becsült. De honnan tudja, hogy javítania kell? Nézzünk egy levelet: Kérek árat huszonöt növényre. A háló azt tippeli, hogy ez egyéb levél, pedig ajánlatkérés. Ez a hiba. A backpropagation, magyarul hibavisszaterjesztés, a hibától visszafelé halad a hálón, és minden súlyra kiszámolja, mennyire hat a hibára. Fontos: ez még csak számolás, itt semmi nem változik. A következő lépésben a tanítóeljárás a számítás alapján egy kicsit átállítja a súlyokat. Újra megnézzük ugyanazt a levelet: az ajánlatkérés esélye 24 százalékról 31-re nőtt. Egy lépés csak keveset javít, ezért a tanítás során ez rengetegszer ismétlődik. Jegyezd meg: a backpropagation csak tanítás közben fut. Amikor te levelet íratsz a modellel, a súlyok már nem változnak.”

**Várható kérdés:** Tanul a modell a chatemből?

**Rövid válasz:** A beszélgetés közben nem változnak a súlyok. A módosításod csak a következő válasz bemenetét változtatja. Hogy a szolgáltató a későbbi tanításhoz felhasználja-e az adataidat, az külön beállítás és szerződési kérdés.

**Ha visszakérdeznek:** A 24 és a 31 százalék szemléltető szám. A backpropagation szigorúan véve csak a számítás, a súlyokat egy külön eljárás, például a sztochasztikus gradiens-ereszkedés frissíti.

## Dia 8: A szövegből tokenek lesznek

**Idő:** 09:05:55–09:06:55 (1:00)

**Mi látszik a dián:** Négy sor. Input: „Írj rövid választ.” Tokenek: Í, r, j, rö, vid, választ, pont. Azonosítók: 8463, 81, 73, 76568, 1429, 161394, 13. Vektorok: kis oszlopok minden azonosító alatt. Jobb felül: Valódi példa: o200k_base.

**A lényeg egy mondatban:** A szöveg tokenekké, azonosítókká, majd vektorokká alakul, és a háló ezekkel számol.

**Ezt mondd el:** „Most nézzük, mit kap a háló a szövegből. Az input az, amit a modell megkap, a prompt az a kérés, amelyben elmondod, mit vársz. A modell nem szavakat dolgoz fel, hanem tokeneket. Ez valódi példa az OpenAI egyik nyilvános tokenizálójából, a neve o200k_base: ez a rövid mondat hét token. Az „Írj” egymaga három darab, a szóköz pedig a következő darab elejéhez tapad. Minden darabnak saját azonosítója van a szótárban. Ez csak sorszám, a nagyobb szám nem jelent fontosabbat. A háló minden azonosítóhoz egy tanult számsort, vagyis vektort keres ki, és ezzel számol tovább. Más modellnél más a vágás, a Claude is saját tokenizálót használ.”

**Várható kérdés:** Miért fontos ez nekem?

**Rövid válasz:** A díjat és a kontextus méretét tokenben mérik, és a toldalékos magyar szavak gyakran több tokenre esnek.

**Ha visszakérdeznek:** A vektor sok szám egymás mellett: a 2017-es Transformerben 512, a GPT-3 legnagyobb változatában 12 288. A tanítás során alakul ki.

## Dia 9: Attention | A környezet adja a jelentést

**Idő:** 09:06:55–09:08:10 (1:15)

**Mi látszik a dián:** Felül a nagy mondat. Két sor: „Az ügyfél levele” és „A növény levele”. Mindkét „levele” felé egy vastag és egy vékony ív fut a korábbi szavaktól. Jobbra az eredmény: elküldött üzenet, illetve a növény része. Alul a „Melyik mire való?” sor.

**A lényeg egy mondatban:** A figyelem súlyozza, mennyi információt vegyen át egy szövegrész a környezetéből, ettől kap más jelentést az ügyfél levele és a növény levele.

**Ezt mondd el:** „Most már vektorokkal számolunk. A kérdés az, honnan tudja a modell, mit jelent egy szó az adott mondatban. Nézd ugyanazt a szót két szövegben. Az ügyfél levele egy üzenet, a növény levele a növény része. A szó ugyanaz, a jelentését a környezet adja. Az attention, magyarul figyelem, pontosan ezt oldja meg: súlyozza, hogy egy szövegrész mennyi információt vegyen át a környezetéből. A vastagabb vonal nagyobb súlyt szemléltet: az „ügyfél” és a „növény” erősen hat a „levele” szóra, a névelő kevésbé. Ezeket a súlyokat senki nem írja be kézzel, a modell számolja ki. A dián az egyszerűség kedvéért szavakat rajzoltunk, a modell valójában tokenekkel dolgozik.”

**Várható kérdés:** A vastag vonal azt jelenti, hogy az a szó a fontos?

**Rövid válasz:** Nem pontosan. Keverési arányt mutat egy adott számításban, és egyszerre több párhuzamos figyelmi számítás fut, mindegyik más mintázattal.

**Ha visszakérdeznek:** Miben más ez, mint a backpropagation? A hibavisszaterjesztés megmutatja, merre érdemes állítani a súlyokat. A következő tanítási lépés állítja át őket. A figyelem használat közben is működik.

## Dia 10: Transformer | Figyelem, rétegről rétegre

**Idő:** 09:08:10–09:09:30 (1:20)

**Mi látszik a dián:** Felül a nagy mondat. Balra egy válasz eleje három tokenben: K, öszön, jük, alattuk egy üres hely. A három kártya együtt lép be az 1. rétegbe, ahol a Figyelem részben ívek futnak a „jük” felé, az Átalakítás részben színt váltanak. Utána a 2. és a 3. réteg, végül a következő token esélyei: ! 64%, ␣a 28%, vessző 8%. Alul négy lépés és a „Melyik mire való?” sor.

**A lényeg egy mondatban:** A Transformer rétegei összekapcsolják a szöveg részeit, majd továbbalakítják őket, és a végén kiszámolják a következő token esélyét.

**Ezt mondd el:** „Az előbb egyetlen lépést láttál, a figyelmet. A Transformer az a felépítés, amelybe ez a lépés beépül: sok réteg egymás után. Itt egy válasz elejét látod három tokenben. A kártyák a tokenekhez tartozó számsorokat jelölik. Egy réteg két részből áll. A figyelmi részben a „jük” információt vesz át a korábbi tokenekből. A következő helyre még nem láthat rá, az még üres. Az átalakító rész ezután tokenenként külön számol tovább. A következő réteg ugyanezt végzi az átdolgozott számsorokkal. A már meglevő tokenek helyein párhuzamosan lehet számolni. A válasz új tokenjei egymás után készülnek. Az utolsó réteg után a modell kiszámolja, melyik token mekkora eséllyel következik. Ezek az esélyek itt kitaláltak.”

**Várható kérdés:** Hány réteg van egy modellben?

**Rövid válasz:** Az eredeti Transformernek hat kódoló- és hat dekódolórétege volt. A GPT-3 legnagyobb változatában 96 réteg volt.

**Ha visszakérdeznek:** Válaszíráskor egyes korábbi számítások újra felhasználhatók. A következő token esélyei az addigi szövegtől függenek.

## Dia 11: A kimenet lépésenként készül

**Idő:** 09:09:30–09:10:40 (1:10)

**Mi látszik a dián:** Felül: Prompt + ügyféllevél, LLM, Következő token, Kimenet. Három oszlop mutatja a tokenek esélyét, a kimenet sorban épül: K, öszön, jük, felkiáltójel, majd stoptábla. A harmadik lépésnél felirat: Most a 36%-os „jük” kerül a válaszba. Jobb felül: Valódi tokenek, kitalált esélyek.

**A lényeg egy mondatban:** A válasz tokenenként, esélyek alapján készül, és a modell nem a tényeket ellenőrzi.

**Ezt mondd el:** „A prompt mellé adok egy ügyféllevelet is. A modell ebből kiszámolja, melyik token mekkora eséllyel jöhet következőnek. A darabok itt valódiak, az esélyek kitaláltak. A rendszer az esélyek alapján választ, és nem mindig a legvalószínűbbet. A bal oldali keret a kiválasztott tokent mutatja. A „jük” lett a folytatás, pedig az „öm” esélye nagyobb volt. Ezért kaphatsz ugyanarra a kérésre eltérő választ. A választott token bekerül a bemenet végére, és a modell újra számol. Addig megy, amíg egy külön záró tokent nem választ, vagy el nem éri a beállított hosszkorlátot. A modell a következő darab esélyét számolja, nem a tényeket ellenőrzi. Ha az árat nem adtad meg, akkor is tud hihető számot írni.”

**Várható kérdés:** Miért kapok más választ ugyanarra a kérdésre?

**Rövid válasz:** Mert a rendszer az esélyekből mintavételez, nem mindig a legvalószínűbbet választja. Ezt a véletlenszerűséget a temperature nevű beállítás szabályozza.

## Dia 12: Mit kap meg a modell minden körben?

**Idő:** 09:10:40–09:11:55 (1:15)

**Mi látszik a dián:** Balra a chatelőzmény az „Alapcsomag: 20 növény” kártyával. Jobbra az Aktuális kontextus sávja, a végén a Válaszhely. A sáv megtelik, majd a két legrégebbi kártya, köztük a szabály, kikerül belőle.

**A lényeg egy mondatban:** A modell csak azt látja, amit az adott körben megkap, és ami kimarad, azt nem veszi figyelembe.

**Ezt mondd el:**

- *0–6 mp.* „A modell minden új körben az alkalmazás által összeállított csomagot kapja.”
- *6–13 mp.* „Ebben utasítás, forrás, előzmény és új kérés is lehet.”
- *13–21 mp.* „A keret véges. Itt két régi kártya kiesik, köztük a húsz növényes szabály.”
- *21 mp után.* „A szabály a chatben még látszik. A kontextusablak a bemenet és a válasz közös, tokenben mért kerete. Más alkalmazás összefoglalhatja a régi részeket. Ha a szabály fontos, add meg újra.”

**Várható kérdés:** Mekkora a kontextusablak?

**Rövid válasz:** Modellenként más, a szolgáltató oldalán megnézheted. A több kontextus nem mindig jobb: a lényeg elsikkadhat a sok szövegben.

## Dia 13: Hallucináció, drift, felejtés

**Idő:** 09:11:55–09:13:05 (1:10)

**Mi látszik a dián:** Három kártya. Hallucináció: kitalált ár. Feladatcsúszás (drift): levélből kampány. Felejtés: kimaradt vagy elsikkadt szabály.

**A lényeg egy mondatban:** Három különböző hiba, három különböző kezelés.

**Ezt mondd el:** „Három dolog romolhat el. A hallucináció az, amikor hihetőnek hangzó, de téves állítás kerül a válaszba: például a modell kitalál egy fix árat huszonöt növényre. Ez rövid beszélgetésben is megtörténhet. Ellene forrást adunk, és megengedjük, hogy azt mondja: nincs megadva. A második a feladatcsúszás. Itt driftnek azt hívjuk, amikor menet közben elcsúszik a feladat: rövid választ kértél, és kampányterv lett belőle. Ilyenkor mondd ki újra a célt. A harmadik a felejtés. Lehet, hogy a szabály már nem került a modell elé, ekkor add vissza a forrást. Az is lehet, hogy ott van a hosszú szöveg közepén, de elsikkad, ekkor emeld ki.”

**Várható kérdés:** Megszüntethető a hallucináció?

**Rövid válasz:** Teljesen nem. Forrást adunk, engedjük a visszakérdezést, és az állításokat ellenőrizzük.

## Dia 14: Adj elég hátteret, és hagyj helyet a válasznak

**Idő:** 09:13:05–09:13:40 (0:35)

**Mi látszik a dián:** Egy sáv négy részre osztva: Friss cél, Döntések, Forrásrészlet, Hely a válasznak.

**A lényeg egy mondatban:** Kevesebb, de releváns háttér jobb, mint a teljes előzmény.

**Ezt mondd el:** „Mit tegyél egy hosszú chat után? Foglald össze a friss célt és a jóváhagyott döntéseket, add mellé az idevágó forrásrészletet, és a régi ötleteket hagyd ki. Ezzel a rövid csomaggal nyithatsz új beszélgetést. Ezt hívjuk tokenoptimalizálásnak: csak azt adod át, ami a döntéshez kell.”

**Várható kérdés:** Mikor nyissak új chatet?

**Rövid válasz:** Ha a feladat változik, vagy a beszélgetés már hosszú. Vidd át a célt, a döntéseket és a forrást.

## Dia 15: A jó prompt megadja a feladatot

**Idő:** 09:13:40–09:14:45 (1:05)

**Mi látszik a dián:** Három sor: 1 Cél: Válaszolj az ajánlatkérésre. 2 Címzett: Irodavezető. 3 Forrás: Mellékelt levél és Cég-DNS.

**A lényeg egy mondatban:** A feladat, a címzett és a forrás adja a prompt alapját.

**Ezt mondd el:** „A prompt az az utasítás, amit az AI-nak adsz. Egy jó prompt először megmondja, mit csináljon: írj válaszpiszkozatot a beérkezett ajánlatkérésre. A második a címzett: egy irodavezetőnek írsz, aki először érdeklődik nálunk. Ettől lesz helyzete a levélnek. A harmadik a forrás: a mellékelt ügyféllevél és a Cég-DNS alapján dolgozz. A Cég-DNS a céged teljes leírása: kinek mit adsz el, milyen határokkal és milyen hangon. A konkrét részletet is tedd oda: az alapcsomag húsz növényig szól, a kérés huszonötre érkezett. Gondold végig, mi változik a válaszban, ha ezt az utolsó sort kiveszed.”

**Várható kérdés:** Kell szerepet adni a modellnek?

**Rövid válasz:** Segíthet, de a konkrét cél és a forrás többet ér.

## Dia 16: A jó prompt megmondja, mikor kész

**Idő:** 09:14:45–09:15:50 (1:05)

**Mi látszik a dián:** Négy sor: 4 Forma: Három mondat. 5 Korlát: Húsz növény fölött kérj bejárást. 6 Minta: „Mikor lenne jó a bejárás?” 7 Ellenőrzés: A levél alatt: melyik állítás honnan való.

**A lényeg egy mondatban:** Előre mondd meg, milyen az elfogadható eredmény.

**Ezt mondd el:** „A negyedik a forma: adj hárommondatos levélpiszkozatot. Az ötödik a korlát, vagyis a határ: húsz növény fölött kérj bejárást, az árat hagyd nyitva. A hatodik egy rövid minta, ha fontos a hang: mikor lenne jó a bejárás? Ebből a modell látja, milyen mondatot vársz. A hetedik az ellenőrzés: a levél alatt jelöld, melyik állítás melyik forrásból származik, és ha valami hiányzik, írd oda, hogy nincs megadva. A forrásjelölést te is olvasd össze az eredetivel. Gondold végig, melyik pont hiányzik a leggyakrabban a saját kéréseidből.”

**Várható kérdés:** A modell forrásjelölése megbízható?

**Rövid válasz:** Nem automatikusan. A jelölést össze kell olvasni az eredeti forrással.

## Dia 17: Két mondat, amivel elindulsz

**Idő:** 09:15:50–09:16:25 (0:35)

**Mi látszik a dián:** Nagy betűkkel: „Írj nekem egy jó promptot arra, hogy…” Alatta: Először kérdezz rá arra, ami hiányzik.

**A lényeg egy mondatban:** A modell segít megírni a promptot, ha kérdezhet.

**Ezt mondd el:** „És most a jó hír: ezt a hét pontot nem kell fejben tartanod. Ennyivel is elindulhatsz: írj nekem egy jó promptot arra, hogy megválaszoljam egy új érdeklődő ajánlatkérését. Tedd mellé ezt a mondatot is: először kérdezz rá arra, ami hiányzik. Így nem a modell találja ki a céged adatait.”

**Várható kérdés:** Akkor nem kell tudnom promptot írni?

**Rövid válasz:** Az elinduláshoz nem, de az eredményt neked kell ellenőrizned, és a forrásokat neked kell megadnod.

## Dia 18: Egy kérés, három AI-szerep

**Idő:** 09:16:25–09:17:20 (0:55)

**Mi látszik a dián:** Középen a Karmester. Balra az Ember (célt ad, a végén dönt), jobbra a Készítő és az Ellenőr. Nyilak: cél, átnézett piszkozat, feladat, piszkozat, csomag, leletek. A csomag nyila mellett: A csomagot te másolod át az Ellenőr új beszélgetésébe.

**A lényeg egy mondatban:** Külön szerepek dolgoznak, a döntés az emberé.

**Ezt mondd el:** „Az agent egy szerepre felkért AI-segítő, amely megadott céllal, forrásokkal és szabályokkal végez el egy feladatot. Ma három ilyen szerepet használunk. A Karmester szervezi a munkát. A Készítő megírja a piszkozatot. Az Ellenőr friss beszélgetésben, a források alapján megvizsgálja. Minden átadás a Karmesteren megy át. Ha az Ellenőr hibát talál, a munka visszamegy a Készítőhöz, és a végén te döntesz. A szerepleírásokat készen kapod a munkacsomagban.”

**Várható kérdés:** Miért jobb három szerep egynél?

**Rövid válasz:** A feladatok szétválnak, és az Ellenőr a Készítő gondolatmenete nélkül nézi a szöveget.

## Dia 19: Egy levél útja az emberi döntésig

**Idő:** 09:17:20–09:19:25 (2:05)

**Mi látszik a dián:** Négy sáv: Ember, Karmester, Készítő, Ellenőr. Egy kitalált, 25 növényre szóló ajánlatkérés végigmegy rajtuk: piszkozat, leletek, javítás, újraellenőrzés, végül a Küldés? kártya az Embernél és a munkanapló.

**A lényeg egy mondatban:** Az ellenőrzött piszkozat bizonyítékkal és emberi döntéssel készül el.

**Ezt mondd el (az ábrával együtt fut):**

- *0–11 mp.* „Huszonöt növényre kérnek ajánlatot. A Karmester megkapja a célodat, és összegyűjti a levelet meg a Cég-DNS szabályait.”
- *11–22 mp.* „Ha hiányzik egy döntés, kérdez. Itt azt tisztázza, hogy első körben egy bejárást egyeztető levél legyen a cél.”
- *22–34 mp.* „Ha összeállt a feladat, jóváhagyod a tervet. A Karmester a Készítőnek adja a feladatot és a forrásokat. Levélnél a Készítő az Író szerepleírásával dolgozik.”
- *34–45 mp.* „A Készítő visszaadja a piszkozatot. Nézd, ebben már van egy fix ár.”
- *45–58 mp.* „A Karmester összeállítja a csomagot. Te megnyitod az Ellenőr új beszélgetését, és bemásolod a piszkozatot, a forrásokat és az ellenőrzőlistát.”
- *58–69 mp.* „Az Ellenőr bizonyítékkal és súlyossággal adja vissza a leleteket. Itt az ár a blokkoló, vagyis enélkül nem mehet tovább. A dátum közepes, a furcsán hangzó ismétlés apró észrevétel.”
- *69–82 mp.* „A Készítő elfogadja az árra vonatkozó észrevételt. A dátumot forrással vitatja: a levélben időpontot kell kérni. Az apró pont nyitva marad.”
- *82–94 mp.* „Kiveszi az árat, és bejárást kér. A módosított változat visszamegy az Ellenőrhöz, mert az új változatot is ellenőrizni kell.”
- *94–105 mp.* „Az Ellenőr újra összeveti a szabállyal. Blokkoló, súlyos vagy közepes hibánál javítunk, az aprót feljegyezzük.”
- *105–116 mp.* „Most kapsz egy ellenőrzött piszkozatot, mellé az apró nyitott pontot. Te döntesz, javítod-e még, és elküldöd-e.”
- *116–125 mp.* „A Karmester feljegyzi a munkanaplóba, mi történt, mit értettünk félre, és mit tanultunk.”

**Várható kérdés:** Független az Ellenőr, ha ugyanaz a modell?

**Rövid válasz:** Csak részben. Friss beszélgetésben fut, de ugyanaz a modell és fiók, ezért az emberi döntés megmarad.

## Dia 20: 09:20 | Kezdjük a Cég-DNS-sel

**Idő:** 09:19:25–09:20:00 (0:35)

**Mi látszik a dián:** Balra a Cég-DNS kártya: Kinek? Mit? Milyen hangon? Jobbra a nap négy állomása: Tartalom, Ügyfélszerzés, Ajánlat, Folyamatpróba, mindegyik a Cég-DNS-ből táplálkozik.

**A lényeg egy mondatban:** Minden további blokk a Cég-DNS-re épül.

**Ezt mondd el:** „Végig ugyanaz a forrás döntötte el, mit mondhatunk. Ezt a céges alapot rakjuk most össze. Kilenc húszkor a Cég-DNS-sel kezdünk: kinek adsz el, mit ajánlasz, és milyen hangon beszélsz. Erre épül a tartalom, az ügyfélszerzés, az ajánlat és a nap végi folyamatpróba. Most nyisd meg a munkacsomagot, és keresd elő a fő ajánlatod legjobb leírását.”

**Várható kérdés:** Mi van, ha nincs kész anyagom?

**Rövid válasz:** Az IrodaLiget kitalált mintájával végig tudsz menni.

## Dia 21: Tartalék dia | Ugyanannyi számítás, több szöveg

**Idő:** 1:00, a fő részen kívül. Csak kérdésre.

**Mi látszik a dián:** Felül: Azonos tanítási számítás. Két kártya: Gopher, 280 milliárd paraméter; Chinchilla, 70 milliárd paraméter. A Chinchillánál: Kb. 4,7-szer annyi tanítótoken: 1400 milliárd és 300 milliárd.

**A lényeg egy mondatban:** Ugyanannyi számítást jobb lehet több adatra költeni, mint nagyobb modellre.

**Ezt mondd el:** „Ha kíváncsi vagy, hogyan lett az adatmennyiségből jobb teljesítmény, itt egy konkrét kísérlet. A Gopher 280 milliárd paraméteres volt, 300 milliárd tokenen tanult. A Chinchilla 70 milliárd paraméterrel körülbelül 4,7-szer annyi, 1400 milliárd tanítótokenen készült. A kettőre ugyanannyi számítást szántak, és a kisebb modell a tanulmány tesztfeladataiban jobb eredményt ért el. Itt az számított, hogyan osztották el a számítást a modell mérete és a tanítóanyag között.”

**Várható kérdés:** Akkor a méret nem számít?

**Rövid válasz:** Számít, de a modell mérete és az adat mennyisége együtt adja az eredményt.

## Dia 22: Tartalék dia | Egyben a kipróbálható prompt

**Idő:** 1:00, a fő részen kívül. Csak kérdésre.

**Mi látszik a dián:** Egy teljes, kipróbálható prompt az IrodaLiget kitalált szabályával, alatta a kérdés: Mit kérdeznél még az ügyféltől?

**A lényeg egy mondatban:** Egy teljes prompt minden elemét egyben látod.

**Ezt mondd el:** „Ha szeretnéd kipróbálni, itt egy kitalált ajánlatkérés, benne a céges szabállyal. Olvasd el a választ, és keresd meg benne a következő lépést. Megkérdezi, mikor jó a bejárás? Maradt benne fix ár? A forrásmegjelölés külön legyen, hogy a levelet egyben tudd átolvasni.”

**Várható kérdés:** Átírhatom a saját cégemre?

**Rövid válasz:** Igen. Cseréld a levelet és a szabályt a saját forrásodra.

## Ha rákérdeznek a forrásokra

- A tokenek és azonosítók: [tiktoken, az OpenAI nyilvános tokenizálója](https://github.com/openai/tiktoken), o200k_base kódolás, saját futtatás 2026. november 19-én.
- Backpropagation: [Deep Learning, 6.5. szakasz](https://www.deeplearningbook.org/contents/mlp.html).
- Attention és Transformer: [Attention Is All You Need](https://proceedings.neurips.cc/paper/7181--attention-is-all-you-need.pdf).
- GPT-3 számai: [Language Models are Few-Shot Learners](https://arxiv.org/pdf/2005.14165).
- Chinchilla és Gopher: [Training Compute-Optimal Large Language Models](https://arxiv.org/pdf/2203.15556).
- Token, temperature, kontextusablak: [Claude szószedet](https://platform.claude.com/docs/en/about-claude/glossary).
- Hallucináció: [Why Language Models Hallucinate](https://arxiv.org/abs/2509.04664).
