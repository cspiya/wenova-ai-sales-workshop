<!-- presentation: custom -->
# Wenova AI Sales & Marketing Workshop | Nyitó előadás

**Cél.** A nyitás végére tudd elmagyarázni, hogyan állít össze az AI egy választ, miért érdemes a feladathoz válogatni a háttéranyagot, és hogyan jut egy üzleti kérés az ellenőrzött piszkozatig.

**Közönség.** Nem fejlesztő B2B cégtulajdonosok, sales- és marketingvezetők. Az előadáshoz nem kell fiók vagy saját adat. Az IrodaLiget a workshop kitalált gyakorlócége.

**Vetített változat.** [A nyitó előadás diái](00-nyito-eloadas.html). A mozgó ábrák kattintás nélkül futnak, és a záróállapot után újraindulnak.

## Dia 1: AI dióhéjban

**A dián látható szöveg:** AI dióhéjban · 1955: Dartmouth-javaslat · 2012: képfelismerés · 2017: Transformer · 2022: ChatGPT

**Forrás:** Fogalmi keret [F02] · Dartmouth [F01] · Képfelismerés [F03] · Transformer [F04] · ChatGPT [F05].

## Dia 2: Melyik AI-val dolgozunk ma?

**A dián látható szöveg:** AI ⊃ Gépi tanulás ⊃ Mélytanulás ⊃ Generatív nagy nyelvi modellek (LLM-ek)

**Ábra:** Négy egymásba zárt, középre igazított keret. A feliratok kívülről befelé haladnak. A legbelső keret kap kiemelést. A keretméreteknek nincs mennyiségi jelentése.

**Forrás:** AI, gépi tanulás és mélytanulás viszonya [F02] · Generatív nyelvi modell és szöveges feladatok [F06].

## Dia 3: Mekkora léptékről beszélünk?

**A dián látható szöveg:** GPT-3, 2020 · 300 milliárd token · 175 milliárd paraméter · kb. 3,14 × 10²³ művelet a tanításban

**Ábra:** Három azonos méretű számkártya egymás mellett. Balra a tanítás során feldolgozott szövegegységek, középen a modellben hangolt értékek, jobbra a becsült összes számítási művelet. Három külön mértékegység szerepel, oszlopdiagram nélkül.

**Forrás:** GPT-3, 2.1. táblázat és D.1 függeléktáblázat [F06] · Az időanalógia kerekített átszámítás a közölt műveletszámból, évi 365,25 nappal · Token [F11] · Paraméter [F09] · GPT-4, 2. szakasz [F08].

## Dia 4: Mitől javult a teljesítmény?

**A dián látható szöveg:** Szűrt tanítóanyag · Párhuzamos számítás · Jobb modellfelépítés · Tanítás a párbeszédre

**Forrás:** Adatszűrés és párhuzamos tanítás [F06] · Transformer, 1. és 4. szakasz [F04] · Chinchilla és Gopher azonos tanítási számítás mellett [F07] · ChatGPT és párbeszédre hangolás [F05].

## Dia 5: Machine learning | Minták a példákból

**A dián látható szöveg:** Machine learning · Tanítópéldák · Modell · Új levél · Ajánlatkérés? · Szemléltetés

**Mozgó ábra:** Balra három kitalált levélkártya, középen egy modell-doboz, jobbra egy szaggatott szélű új levél. A tanítópéldákon két pipa az ajánlatkérést jelöli, egy üres kör az egyéb levelet. 0–5 mp: balról sorban a középső dobozba csúszik a három megjelölt példa. 5–10 mp: a modellben két eltérő alakú minta rendeződik, a bejövő nyíl lezárul. 10–15 mp: az új levél külön nyílon a megtanult modellhez csúszik, mellette megjelenik a pipa mint modellbecslés. 15–18 mp: az elkülönített tanítási és kipróbálási oldal egyszerre látszik. Teljes hossz 18 mp.

**Lépésfeliratok:**

1. Előre megjelölt példákat adsz.
2. A modell megtanul jelekből következtetni.
3. Az új üzenetnek még nincs címkéje. A modell arra is ad egy becslést.
4. A használhatóságát félretett példákon nézed meg.

**Forrás:** Felügyelt tanulás, tanítópéldák és modellértékelés [F10]. A levelek szemléltető minták.

## Dia 6: Deep learning | Mit csinálnak a rétegek?

**A dián látható szöveg:** Deep learning · Neuron · Súly · Élek · Formák · Tárgy · Szemléltetés

**Mozgó ábra:** Balra egy stilizált fotó cserepes növényről, középen három réteg, rétegenként három csomóponttal. Jobbra cserepes növény sziluettje. 0–5 mp: a fotó megáll a bemenetnél, egy csomópontot „Neuron” felirattal emelj ki. 5–10 mp: két bejövő él különböző vastagsággal pulzál, az egyik mellett „Súly”. 10–15 mp: az első rétegen éldarabok, a következőn formák rajzolódnak ki. 15–20 mp: az utolsó rétegen több jel együtt villan fel, majd körvonalat kap a kimeneti tárgy. Teljes hossz 20 mp. Az ikonok a megtanult jeleket szemléltetik.

**Lépésfeliratok:**

1. A kis pont egy mesterséges neuron, egyszerű számolóegység.
2. A súly az egyik fajta tanulható paraméter. A vonal vastagsága ezt szemlélteti.
3. A rétegek az egyszerű jelekből összetettebb mintázatokat építhetnek.
4. Előbb egy élt, aztán egy formát, végül egy cserepet ismersz fel.

**Forrás:** Rétegek, neuronok, súlyok és tanult képi reprezentáció [F02], [F09] · ImageNet-tanulmány és hardver [F03].

## Dia 7: Backpropagation | Melyik súlyon állítsunk?

**A dián látható szöveg:** Backpropagation · Becsülj · Mérd a hibát · Számolj visszafelé · Frissítsd a súlyokat · Első becslés · Frissítés után · Szemléltetés

**Mozgó ábra:** Háromrétegű háló, balra kitalált ajánlatkérő levél, jobbra a modell téves becslésének üres köre és a helyes címke pipája. 0–5 mp: tömör nyíl viszi előre a jelet, megjelenik a kör. 5–9 mp: keret fogja össze a kört és a pipát, feltűnik a „Hiba”. 9–16 mp: szaggatott nyilak futnak visszafelé rétegről rétegre. A súlyok még változatlanok. 16–21 mp: külön lépésben két él vastagabb, egy vékonyabb lesz. 21–26 mp: új előrehaladás a módosított hálón, a helyes címke becsült valószínűségét mutató sáv megnő. A hibapanel az „Első becslés”, a sáv a „Frissítés után” állapotot jelöli. Teljes hossz 26 mp. A végső javulás az illusztrált lépés eredménye.

**Lépésfeliratok:**

1. Becsülj
2. Mérd a hibát
3. Számolj visszafelé
4. Frissítsd a súlyokat
5. Új előrehaladás

**Forrás:** Az 1986-os közlemény szerzői jegyzéke [F15] · Visszaterjesztés és optimalizálás [F09] · Szöveges feladat súlyfrissítés nélkül [F06].

## Dia 8: Attention | Mely szövegrészek számítanak itt?

**A dián látható szöveg:** Attention · Ajánlatot kérek növénygondozásra. · Szemléltetés

**Mozgó ábra:** Felül három szókártya, alul az utolsó pozíció kiemelt kártyája. A szókártyák olvasható szövegrészek, a tényleges tokenhatárok modellfüggők. 0–4 mp: kirajzolódik a felső sor, „növénygondozásra” alul is megjelenik, kerettel. 4–10 mp: az utolsó pozícióhoz két eltérő vastagságú vonal nyílik, az „Ajánlatot” felőli vastagabb. 10–16 mp: mindkét helyről eltérő szélességű sáv fut az alsó kártyába. Teljes hossz 16 mp. A saját pozícióhoz tartozó kapcsolat és a többi párhuzamos figyelmi fej nincs kirajzolva. A vonalvastagság szemléltető érték.

**Lépésfeliratok:**

1. Egy adott szöveghely feldolgozása.
2. A modell a többi helyről eltérő mértékben vesz át információt.
3. A vastagabb vonal az eltérő súlyt szemlélteti.

**Forrás:** Súlyozott figyelem és több figyelmi fej, 3.2. szakasz [F04] · Modellfüggő tokenhatárok [F11].

## Dia 9: Transformer | Figyelem, rétegről rétegre

**A dián látható szöveg:** Transformer · Sorrend · Figyelem · Átalakítás · Következő réteg · Szemléltetés

**Mozgó ábra:** Balra három számozott jel három szövegpozícióhoz, jobbra három egymás utáni rétegkeret. Az elsőben figyelmi és átalakító rész van. 0–4 mp: a jelek sorba állnak. 4–9 mp: a harmadik pozíciót az előző kettővel nyilak kötik össze. A jövőbeli hely szaggatott keret, nyíl nélkül. 9–14 mp: a három módosult jel belép az átalakító részbe, és külön-külön alakot vált. 14–20 mp: átjutnak még két összevont rétegen és megállnak. A három jel végig külön pályán, azonos sorrendben halad. Teljes hossz 20 mp. A rétegszám és a kiemelt kapcsolatok szemléltetők.

**Lépésfeliratok:**

1. Sorrend
2. Figyelem
3. Átalakítás
4. Következő réteg

**Forrás:** Transformer, sorrend, figyelem, pozíciónkénti háló és a későbbi helyek elfedése [F04] · Transformer-alapú szöveggenerálás [F06], [F08].

## Dia 10: A szövegből tokenek lesznek

**A dián látható szöveg:** Input · Prompt · Tokenek · Számazonosítók · Szemléltetés

**Mozgó ábra:** Három oszlop. Balra fehér szövegdoboz, középen négy elkülönülő lapka, jobbra négy számlapka. 0–5 mp: balra beíródik „Írj rövid választ.”, a doboz alá kerül a „Prompt”. 5–11 mp: a mondat középre csúszik, és megjelenik négy lapkán: „Írj”, „ rövid”, „ választ”, „.”. A szóközzel kezdődő lapkák bal szélén maradjon látható a hely. 11–16 mp: a lapkákhoz jobbra sorban 01, 02, 03 és 04 társul. 16–20 mp: együtt látszik a szöveg, a felosztás és a számsor. Teljes hossz 20 mp. A felosztás és az azonosítók kitalált szemléltető értékek.

**Lépésfeliratok:**

1. Az input az, amit a modell megkap. A prompt a kérésed.
2. A rendszer tokenekre bontja a szöveget.
3. Minden tokenhez tartozik egy számazonosító.
4. A pontos vágás és a szám az adott modelltől függ.

**Forrás:** Szöveges utasítás és háttéranyag [F16] · Tokenizálás, szóközök és tokenazonosítók [F11] · Bemeneti reprezentáció [F04].

## Dia 11: A kimenet lépésenként készül

**A dián látható szöveg:** Prompt + ügyféllevél → LLM → Következő token → Kimenet · Kitalált példa

**Mozgó ábra:** Balra két bemeneti kártya, középen LLM-doboz, jobbra három névtelen esélyoszlop, alul kimeneti sor. 0–6 mp: a „Prompt” és „Ügyféllevél” kártya egy nyílon a modellbe csúszik. 6–12 mp: a jobb oldali esélyoszlopokból az egyik körvonalat kap, a hozzá tartozó „Köszönöm” a kimeneti sorba kerül. 12–18 mp: egy másolat a bal oldali sor végére csúszik, az oszlopok új magasságot vesznek fel. 18–24 mp: ugyanez megismétlődik a „ a”, „ kérdést” és „.” darabokkal. Az olvasható kimenet „Köszönöm a kérdést.”, mellette kis stopjel. Teljes hossz 24 mp. A látható szövegrészek és az esélyoszlopok szemléltetők.

**Lépésfeliratok:**

1. A háló az addigi szöveg alapján számol.
2. A generálás kiválaszt egy tokent.
3. A következő döntéshez már ez is rendelkezésre áll.
4. Így alakul ki a mondat, amíg elér egy megállási feltételt.

**Forrás:** Következő token előrejelzése és autoregresszív generálás [F06], [F08] · Kimenet és tokenkeret [F12]. A mondat és az esélyoszlopok kitaláltak.

## Dia 12: Mi gyűlik össze egy chatben?

**A dián látható szöveg:** Chatelőzmény · Aktuális kontextus · Alapcsomag: 20 növény · Válaszhely · Írj rövidebben · Szemléltetés

**Mozgó ábra:** Balra függőleges chatelőzmény. Jobbra véges hosszú, hatrészes „Aktuális kontextus” sáv, jobb szélén csíkozott „Válaszhely”. A hat rekesz szemléltető, egy kártya sok tokent jelképez. 0–6 mp: a bal oldali „Alapcsomag: 20 növény” forráskártya és két jelöletlen beszédbuborék másolata bekerül a jobb oldali sávba. 6–13 mp: még egy korábbi válasz jön be, megtelik a sáv használható része az „Írj rövidebben” kártyával együtt. 13–21 mp: egy válasz és egy új kérés érkezik. A bemutatott alkalmazás a jobb oldali sávból kiveszi a két legrégebbi kártyát, köztük a forrás másolatát. Az eredeti kártyák balra a chatben maradnak. A megmaradt kártyák balra csúsznak, a válasz és az új kérés a sor végére, közvetlenül a válaszhely elé érkezik. 21–26 mp: látszik, mi maradt a modell bemenetében, és a csíkozott hely a következő válasznak. Teljes hossz 26 mp. Ez egy lehetséges előzménykezelés szemléltetése.

**Lépésfeliratok:**

1. Minden újabb körben gyarapodhat ez a csomag.
2. A kontextusablak véges, és helyet kell hagyni a válasznak is.
3. Az alkalmazás kiveszi a két legrégebbi kártyát, köztük a forrás másolatát.
4. A chatben továbbra is olvasható, de már kimaradt abból, amit a modell megkapott.

**Forrás:** Beszélgetési állapot, bemeneti és kimeneti tokenek [F12] · Előzmények tömörítése [F17] · A kitalált csomaghatár [H05].

## Dia 13: Hallucináció, drift, felejtés

**A dián látható szöveg:** Hallucináció: kitalált ár · Drift: levélből kampány · Felejtés: kimaradt vagy elsikkadt szabály · Kitalált példa

**Ábra:** Három egymás melletti kártya. Az elsőn egy árcédula kérdőjellel. A másodikon egy levélből kiinduló, elágazó nyíl. A harmadikon két miniablak egymás alatt: az elsőben a forráskártya a kereten kívül van, a másodikban a kereten belül, halványan. A három cím és a jelek sorrendben együtt látszanak.

**Forrás:** Valószerű téves állítások [F13] · Korai feltételezések továbbélése több fordulóban [F14] · Kontextusablak és a kontextuson belüli hely hatása [F12], [F18] · Mintapélda [H05].

## Dia 14: Adj elég hátteret, és hagyj helyet a válasznak

**A dián látható szöveg:** Friss cél · Döntések · Forrásrészlet · Hely a válasznak

**Forrás:** Releváns kontextus és tömörítés [F17] · Kontextuskeret [F12] · Mintaforrás [H05].

## Dia 15: A jó prompt megadja a feladatot

**A dián látható szöveg:**

- Cél · Válaszolj az ajánlatkérésre.
- Címzett · Irodavezető.
- Forrás · Mellékelt levél és Cég-DNS.

**Forrás:** Feladat, szerep és forrás megadása [F16] · A Cég-DNS jelentése és a kitalált ajánlatkérés [H01], [H05], [H06].

## Dia 16: A jó prompt megmondja, mikor kész

**A dián látható szöveg:**

- Forma · Három mondat.
- Korlát · Húsz fölött kérj bejárást.
- Minta · „Mikor lenne jó a bejárás?”
- Ellenőrzés · Minden állításhoz forrás.

**Forrás:** Kimenet, korlát, példák és forrás [F16] · Ellenőrizhető állítás és emberi döntés [H02], [H04] · Kitalált üzleti példa [H05].

## Dia 17: Egyetlen mondat, amivel elindulsz

**A dián látható szöveg:** Írj nekem egy jó promptot arra, hogy…

**Forrás:** Promptírási összetevők [F16] · Kitalált megfogalmazás.

## Dia 18: Egy kérés, három AI-szerep

**A dián látható szöveg:** Ember ad célt · Karmester szervez · Készítő dolgozik · Ellenőr vizsgál · Ember dönt

**Ábra:** Egy sorban négy feliratozott állomás. Az ember egyszer jelenik meg, nyíl indul tőle a Karmesterhez, és a döntéshez visszahajlik hozzá. A Készítő és az Ellenőr két külön állomáson jelenik meg.

**Forrás:** Agentek és összehangolt munkamenetek [F19] · A workshop szerepei és működése [H01], [H02], [H06] · Független ellenőrzés [H03], [H04].

## Dia 19: Egy levél útja az emberi döntésig

**A dián látható szöveg:** Kitalált eset · Ember · Karmester · Készítő · Ellenőr · 25 növény · Cég-DNS · Brief · Piszkozat · Forrás nélküli ár · közepes · vitatott · Javítva · Dátum tisztázva: időpontot kérünk · Ha maradt javítandó hiba · Bejárás · Nyitott pont · Küldés? · Munkanapló

**Mozgó ábra:** Négy függőleges sáv balról jobbra: „Ember”, „Karmester”, „Készítő”, „Ellenőr”. A felső sorban mindig maradjon látható a „Kitalált eset”. A sávok közt csak az éppen átadott kártya mozog. Az átadást folytonos nyíl, a javítási kört visszahajló szaggatott nyíl jelzi. A külön beszélgetést az Ellenőrnél megjelenő üres, dupla keret mutatja. A nyitott pont jelölése feliratos borostyánszínű kör, a blokkolóé feliratos piros nyolcszög.

| Dia ideje | Mozgás és állapot |
| --- | --- |
| 0–11 mp | Az Embertől a Karmesterhez úszik a „25 növény” kéréskártya. A Karmester mappájában mellé csúszik a levél ikonja és a „Cég-DNS”. |
| 11–22 mp | Kérdőjeles buborék fordul vissza az Emberhez. A válasz pipa formájában érkezik vissza, majd közös keretet kap a levéllel és a forráskártyával. |
| 22–34 mp | Az Embertől második pipa érkezik a lezárt feladatkeretre, ez a terv jóváhagyása. A Karmester feladatlista-ikonnal jelzi a választható előzetes rögzítést. A „Brief” kártya átcsúszik a Készítőhöz, vele mozog a forráscsomag. Felvillan az Író szerepét jelző toll. |
| 34–45 mp | A Készítőnél összeáll a „Piszkozat” kártya egy árcédulaikonnal, majd visszacsúszik a Karmesterhez. |
| 45–58 mp | Az Ellenőrnél megnyílik a friss keret. A Karmester három ikont továbbít bele: piszkozat, eredeti források, ellenőrzőlista. A készítői jegyzet ikonja a Készítő sávjában marad. |
| 58–69 mp | Az Ellenőrnél megjelenik a blokkoló „Forrás nélküli ár”, egy üres naptárikon a közepes súlyú, vitatott dátumészrevételhez („közepes · vitatott”) és a „Nyitott pont” az apró stílusészrevételhez. A jelzések és a piszkozat a Karmester sávján át együtt visszamennek a Készítőhöz. |
| 69–82 mp | A piros jelzés pipát kap, amely itt az észrevétel elfogadását jelzi. A naptár mellé visszaúszik egy forrásikon, majd a vitatott naptárjelzés az indoklással együtt az Ellenőr felé indul. A kis pont a nyitottak közé kerül. |
| 82–94 mp | A Készítőnél az árcédula eltűnik, a „Bejárás” kártya a helyére kerül. Az új piszkozat a Karmesteren át az Ellenőrhöz jut, ekkor csak az Ellenőr felé tartó mozgás látszik. |
| 94–105 mp | Az Ellenőr összeilleszti az új piszkozatot az eredeti forrással. Az ár sora „Javítva” jelölést kap, a dátum sorában röviden megjelenik a „Dátum tisztázva: időpontot kérünk” felirat, majd a jelzés eltűnik, és megmarad az apró nyitott pont. A szaggatott visszanyíl itt jelenik meg a „Ha maradt javítandó hiba” felirattal, és megmutatja, merre menne vissza a munka. |
| 105–116 mp | A Karmester az Emberhez küldi az átnézett piszkozatot és a nyitott észrevételt. Melléjük kerül a „Küldés?” döntéskártya. |
| 116–124 mp | A Karmester beírja a munkanaplóba, mi történt. Felirat: „Munkanapló: mi történt, hol értettük félre, mit tanultunk”. A „Küldés?” döntéskártya az Embernél marad. |

A teljes animáció 124 mp. A dia megnyitásakor magától indul, kattintás nélkül halad végig. A záróállapot 1 mp-ig látszik, így a dia teljes ideje 2:05 marad. Csökkentett mozgásnál három nagy állapot látszik: feladatátadás (25 növény, levél és Cég-DNS); lelet és javítás (A fix ár kikerül, bejárást kérünk); ellenőrzött piszkozat és emberi döntés (Nyitott stíluspont. Elküldöd?). A példa egy javítási kört mutat. A szaggatott visszanyíl jelzi, hogy javítandó hiba esetén lenne még kör. A záróállapotban soha ne jelenjen meg elküldött boríték vagy sikeres küldést jelző ikon.

**Lépésfeliratok:**

1. Az Ember célt ad. A Karmester összegyűjti a levelet és a Cég-DNS szabályait.
2. Ha hiányzik egy döntés, a Karmester kérdez.
3. Jóváhagyod a tervet. A Karmester az Írót a forrásokkal együtt indítja.
4. A Készítő visszaadja a piszkozatot. Ebben már van egy fix ár.
5. Friss beszélgetés: piszkozat, eredeti források, ellenőrzőlista. Az Író gondolatmenete kimarad.
6. Leletek súlyossággal: blokkoló, közepes, apró.
7. A Készítő elfogadja az árra vonatkozó kifogást, a dátumot forrással vitatja, az apró pont nyitott marad.
8. Az ár kikerül, bejárás kerül a helyére. Az új változat visszamegy az Ellenőrhöz.
9. Blokkoló, súlyos vagy közepes hibánál javítunk. Az aprót feljegyezzük.
10. Ellenőrzött piszkozat és nyitott pont. Te döntesz, elküldöd-e.
11. Munkanapló: mi történt, hol értettük félre, mit tanultunk

**Forrás:** Cél, terv, jóváhagyás, szerepkiosztás és küldési kapu [H01] · Friss beszélgetés, bemenet, súlyosság és döntés [H02] · Korlátozott ciklus, bizonyíték, vitás lelet, ismételt ellenőrzés [H03], [H04] · Kitalált üzleti szabály [H05]. A feladatkezelő választható lépés. A szemléltetésben a naptárészrevételt a friss ellenőrzés feloldja. Fennmaradó vita esetén független harmadik ellenőr dönt. Az idő- vagy körkeret elérésekor a Karmester a bizonyítékot és a döntendő kérdést adja tovább. Apró nyitott pontot jegyzünk fel, a workshop ellenőrzőlistáján közepes vagy súlyos hiba javítást kér.

## Dia 20: 09:20 | Kezdjük a Cég-DNS-sel

**A dián látható szöveg:** 09:20 Cég-DNS · Kinek? Mit? Milyen hangon? · Tartalom → Ügyfélszerzés → Ajánlat → Folyamatpróba

**Ábra:** Balra a Cég-DNS kártyája a három kérdéssel. Jobbra a négy állomás a megadott sorrendben, nyíllal összekötve. A DNS-kártya alsó vonala mind a négy állomás alá befut, ezzel jelzi a közös bemenetet.

**Forrás:** A nap fonala és 09:20-as kezdés [H07] · A blokk bemenete, mentőút és várható kimenete [H06], [H08].

## Dia 21: Tartalék dia | Ugyanannyi számítás, több szöveg

**A dián látható szöveg:** Gopher: 280 milliárd paraméter · Chinchilla: 70 milliárd paraméter · Azonos tanítási számítás · Tanítótokenek, arányosan · Chinchilla: kb. négyszer annyi tanítótoken

**Ábra:** Azonos szélességű felső keretben két modellkártya. Mindegyiken külön mezőben a paraméterszám. A Chinchilla alatt a több tanítótoken mellett négy kicsi, azonos méretű lapikon, a Gopher alatt egy lapikon. Mindkét lapkasor fölött a „Tanítótokenek, arányosan” címke áll. A szöveges arány a kerekített különbséget jelzi.

**Forrás:** Chinchilla összehasonlítás, kivonat és 4. szakasz [F07].

## Dia 22: Tartalék dia | Egyben a kipróbálható prompt

**A dián látható szöveg:** A levél és a szabály együtt · Mit kérdeznél még az ügyféltől?

**Forrás:** Kitalált szabály és hang [H05] · Feladat, kontextus, példa és kimeneti elvárás [F16].

## Forrásjegyzék

A sorszámok a diák állításaihoz tartoznak. A H jelű workshopanyagokat és szabályokat a helyi példányból ellenőriztem. A forráscím mellett a megnyitott webcím vagy a helyi megfelelő szerepel.

| Jel | Állítás, hely | Forrás címe | URL | Megnyitva |
| --- | --- | --- | --- | --- |
| F01 | 1955. augusztus 31-i Dartmouth-javaslat, nyelv és tanulás, 1956-ra tervezett kutatás. | A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence | [Stanford, eredeti javaslat](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html) | 2026-11-19 |
| F02 | AI, gépi tanulás, mélytanulás hierarchiája, tanult reprezentációk és képi példa. 1. fejezet, 1.2., 1.4. és 1.5. ábra. | Deep Learning, Chapter 1: Introduction | [MIT Press-könyv, szerzői oldal](https://www.deeplearningbook.org/contents/intro.html) | 2026-11-19 |
| F03 | 2012-es ImageNet-tanulmány. Kb. 1,2 millió tanítókép, két GTX 580. 1–3. szakasz. | ImageNet Classification with Deep Convolutional Neural Networks | [NeurIPS, eredeti tanulmány](https://papers.nips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf) | 2026-11-19 |
| F04 | 2017-es Transformer, fordítás, párhuzamosíthatóság, figyelem, sorrend, pozíciónkénti átalakítás, oksági maszkolás. 1., 3. és 4. szakasz. | Attention Is All You Need | [NeurIPS, eredeti tanulmány](https://proceedings.neurips.cc/paper/7181--attention-is-all-you-need.pdf) | 2026-11-19 |
| F05 | ChatGPT bemutatása 2022-ben, párbeszéd és a társalgási formára hangolás. | Introducing ChatGPT | [OpenAI, eredeti közlés](https://openai.com/index/chatgpt/) | 2026-11-19 |
| F06 | 2020-as GPT-3, 175 milliárd paraméter, 300 milliárd feldolgozott tanítótoken, becsült 3,14 × 10²³ lebegőpontos művelet, szűrés, duplikátumok, párhuzamos tanítás és használat súlyfrissítés nélkül. Kivonat, 2.1–2.3. szakasz, D.1. táblázat. | Language Models are Few-Shot Learners | [Eredeti tanulmány](https://arxiv.org/pdf/2005.14165) | 2026-11-19 |
| F07 | Chinchilla és Gopher, azonos számítási keret, eltérő modell- és adatméret, eredmények a vizsgált feladatokon. Kivonat és 4. szakasz. | Training Compute-Optimal Large Language Models | [DeepMind, eredeti tanulmány](https://arxiv.org/pdf/2203.15556) | 2026-11-19 |
| F08 | GPT-4 következőtoken-tanítása, a modellméret és a tanítási számítás elhagyása a nyilvános jelentésből. 2. szakasz. | GPT-4 Technical Report | [OpenAI, műszaki jelentés](https://arxiv.org/pdf/2303.08774) | 2026-11-19 |
| F09 | Neuron, rétegek, paraméterek, előreszámítás, gradiensszámítás és optimalizáló lépés. 6.1., 6.2. és 6.5. szakasz. | Deep Learning, Chapter 6: Deep Feedforward Networks | [MIT Press-könyv, szerzői oldal](https://www.deeplearningbook.org/contents/mlp.html) | 2026-11-19 |
| F10 | Felügyelt tanulás címkézett példákkal, osztályozás és elkülönített modellértékelés. | Introduction to Machine Learning: What is Machine Learning? és Machine Learning Crash Course: Dividing datasets | [Google for Developers, fogalmak](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml) · [A tanító- és tesztadatok szétválasztása](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets) | 2026-11-19 |
| F11 | A token mint szövegegység, szóközök, tokenizálás, azonosítók és modellfüggés. | Understanding and counting tokens | [OpenAI Help Center](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens) | 2026-11-19 |
| F12 | A beszélgetés állapota, a bemeneti és kimeneti tokenek, a kontextusablak véges kerete. | Conversation state | [OpenAI fejlesztői dokumentáció](https://developers.openai.com/api/docs/guides/conversation-state) | 2026-11-19 |
| F13 | A hallucináció mint valószerű téves állítás és a találgatást előnyben részesítő tanítási vagy értékelési ösztönzők. | Why language models hallucinate | [OpenAI kutatási közlés](https://openai.com/index/why-language-models-hallucinate/) | 2026-11-19 |
| F14 | Többfordulós eltérés, korai feltételezések és túl korai válaszok hatása a vizsgált beszélgetésekben. Kivonat. | LLMs Get Lost In Multi-Turn Conversation | [Eredeti kutatás](https://arxiv.org/abs/2505.06120) | 2026-11-19 |
| F15 | Egy 1986-os Nature-tanulmány a hibavisszaterjesztésről. | Learning representations by back-propagating errors | [Szerzői publikációs jegyzék](https://www.cs.toronto.edu/~hinton/backprop.html) | 2026-11-19 |
| F16 | Szerep és cél, utasítások, forrás, példa és kimenet megadása. | Prompt engineering | [OpenAI fejlesztői dokumentáció](https://developers.openai.com/api/docs/guides/prompt-engineering) | 2026-11-19 |
| F17 | Releváns, tömör kontextus és hosszú beszélgetés összefoglalása. | Effective context engineering for AI agents | [Anthropic Engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | 2026-11-19 |
| F18 | A hosszú bemeneten belüli elhelyezés hatása az információ használatára a vizsgált feladatokon. | Lost in the Middle: How Language Models Use Long Contexts | [ACL Anthology, eredeti kutatás](https://aclanthology.org/2024.tacl-1.9/) | 2026-11-19 |
| F19 | Munkafolyamat, eszközt használó agentek, koordinálás és ellenőrző ciklus. | Building effective agents | [Anthropic Engineering](https://www.anthropic.com/research/building-effective-agents) | 2026-11-19 |
| H01 | Karmester: cél, forrás, terv, kiosztás, emberi jóváhagyás és küldési kapu. | Karmester (orchestrator) | [Workshop szerepleírás](../starter-kit/agents/orchestrator.md) | 2026-11-19 |
| H02 | Ellenőr: friss beszélgetés, forrásból ellenőrzés, súlyosság, emberi döntés. | Ellenőr (reviewer) | [Workshop szerepleírás](../starter-kit/agents/reviewer.md) | 2026-11-19 |
| H03 | Emberi cél, pontos átadási feltételek, független ellenőrzés és a ciklus korlátja. | Agentic engineering method: Principles | [Wenova OS, a helyben megnyitott revízió](https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/01-principles.md) | 2026-11-19 |
| H04 | Ellenőrzés és újraellenőrzés, bizonyíték, súlyosság, vita és nyitott kisebb pontok. | Agentic engineering method: Review and triage | [Wenova OS, a helyben megnyitott revízió](https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/06-review-and-triage.md) | 2026-11-19 |
| H05 | Kitalált cég, húsz növényes alapcsomag, nagyobb kérésnél bejárás, forrás- és hiányjelölés. 3., 4., 5. és 7. szakasz. | IrodaLiget Cég-DNS | [Workshop mintafájl](../scenarios/office-plants/outputs/company-dna.md) | 2026-11-19 |
| H06 | A Cég-DNS jelentése, a szerepleírások futtatása, a következő blokk kimenete és a kitalált cég mint mentőút. | Cég-DNS és saját AI-csapat | [Üzleti alapok, résztvevői modul](../modules/01-business-foundations.md) | 2026-11-19 |
| H07 | A 09:00–09:20-as nyitás, a 09:20-as blokk és a nap fonala. | A nap menete | [Workshop menetrend](../schedule.md) | 2026-11-19 |
| H08 | Felvezetés a Cég-DNS bemutatójához, az IrodaLiget-minta és az első ellenőrzött próbafutás. | 01-business-foundations, belső oktatói jegyzet | Belső felkészítő anyag, nem része a résztvevői csomagnak | 2026-11-19 |
