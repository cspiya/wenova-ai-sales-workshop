<!-- presentation: custom -->
# Wenova AI Sales & Marketing Workshop | Nyitó előadás

**Cél.** A nyitás végére tudd elmagyarázni, hogyan állít össze az AI egy választ, miért érdemes a feladathoz válogatni a háttéranyagot, és hogyan jut egy üzleti kérés az ellenőrzött piszkozatig.

**Közönség.** Nem fejlesztő B2B cégtulajdonosok, sales- és marketingvezetők. Az előadáshoz nem kell fiók vagy saját adat. Az IrodaLiget a workshop kitalált gyakorlócége.

**Vetített változat.** [A nyitó előadás diái](00-nyito-eloadas.html). Vetítéshez használj Chrome 133-at vagy újabb Chrome-ot. A mozgó ábrák a diára érkezéskor elindulnak, egyszer lefutnak, és a záróképen megállnak.

## Dia 1: AI dióhéjban

**A dián látható szöveg:** AI dióhéjban · 1955: Dartmouth-javaslat · 2012: képfelismerés · 2017: Transformer · 2022: ChatGPT

**Forrás:** Fogalmi keret [F02] · Dartmouth [F01] · Képfelismerés [F03] · Transformer [F04] · ChatGPT [F05].

## Dia 2: Melyik AI-val dolgozunk ma?

**A dián látható szöveg:** AI › Gépi tanulás › Mélytanulás › Generatív mély modellek › LLM · Nagy nyelvi modellek (LLM) · Kép, hang, videó

**Ábra:** Négy egymásba zárt keret. A legbelső, a generatív mély modellek kerete két részre oszlik: kiemelve a nagy nyelvi modellek, mellette szaggatottan a kép, hang, videó. A keretméreteknek nincs mennyiségi jelentése.

**Forrás:** AI, gépi tanulás és mélytanulás viszonya [F02] · Generatív nyelvi modell és szöveges feladatok [F06].

## Dia 3: Számítási kapacitás: az 1950-es évektől máig

**A dián látható szöveg:** Számítási kapacitás: az 1950-es évektől máig · Minden osztás tízszeres növekedés · nagyságrend · Linpack-teljesítmény: 1993. június, CM-5/1024, 59,7 GFLOPS; 2026. november, LineShine, 2,198 EFLOPS; 7,6 · 1952 · IBM 701 · több mint 16 000 összeadás vagy kivonás másodpercenként · Tranzisztorok egy processzortokban: 1971, Intel 4004, 2 300; 2026, NVIDIA Rubin GPU, 336 milliárd; 8,2 · Operatív memória, csúcsgépek: 1952, IBM 701, kb. 9,2 kB egy memóriamodulban; 2024, El Capitan, kb. 6,3 PB; 11,8 · Egy merevlemez kapacitása: 1956, IBM 350 RAMAC, 3,75 MB; 2026, Seagate Mozaic 4+, 44 TB; 7,1 · A 2024-es iPhone 16 Pro A18 Pro lapkája MacBook Neóban, dupla pontosságú Linpack-mérésben 57,012 GFLOPS-ot ért el. Ez az eredmény az 1993. júniusi TOP500-listán a második helyre lett volna elég. · Az 1 TB tárhelyű Galaxy S26 Ultra 16 GB munkamemóriája körülbelül 1 900-szor akkora, mint a Cray-1A 8 MiB-os memóriája. · A18 Pro HPL-mérés: Jeff Geerling. A Rubin két szilíciumlapka egy tokban. Források: TOP500, IBM, Intel, NVIDIA, LLNL, Computer History Museum, Seagate, Apple, Samsung, Cray, NCAR.

**Mozgó ábra:** Négy sor, soronként a kezdő érték, egy logaritmikus sáv és a záró érték. A sávon minden osztás tízszeres növekedés, a sáv hossza a nagyságrendek számával arányos. 0–3 mp: a Linpack-teljesítmény narancs sávja kinő 7,6 osztásig, megjelenik a záró érték. 3–6 mp: a tranzisztorok sora. 7–10 mp: a memória sora. 10–13 mp: a merevlemez sora. 13–16 mp: megjelenik a két telefonos tény. Teljes hossz 16 mp. Az IBM 701 összeadási sebessége külön történeti felirat, nem része a sávnak, mert más műveletet mér.

**Forrás:** Linpack [F22], [F24] · IBM 701 [F21] · Tranzisztorok [F25], [F26] · Memória [F27], [F29] · Merevlemez [F30], [F31] · Telefonos összevetés [F22], [F32], [F33] · Memória-összevetés [F28], [F34], [F46]. A nagyságrendek a közölt adatokból számolt értékek. A TOP500 LineShine-adatlapja nem közöl memóriakapacitást. Az El Capitan értékét az üzemeltető labor közli.

## Dia 4: A digitalizált adat: három külön mennyiség

**A dián látható szöveg:** A digitalizált adat: három külön mennyiség · Becslések · A világ tárolókapacitása, becslés, tömörítve · 1986: 2,6 EB, 0,8% digitális · 2002: A digitális tárolás megelőzi az analógot · 2007: 295 EB, 94% digitális · Másik mérce, mint a jobb oldal: a kettő nem szorozható össze. · Éves globális adatmennyiség: 132 ZB egy év alatt (2023), létrehozott, rögzített, másolt és fogyasztott adat, IDC-becslés, másolatokkal együtt · Egy nyilvános webarchívum: több mint 10 PB, Common Crawl teljes archívuma, jogvédett tartalom is lehet benne · Egy modell előtanítóanyaga: 4,7 TB, LLaMA 65B, 2023, válogatott webes és más források · Az értékek eltérő mennyiségeket írnak le. A LLaMA előtanítóanyaga válogatott webes és más forrásokból áll. Források: Hilbert és López (2011), University of Southern California, IDC (2024), Common Crawl, Touvron és mtsai. (2023).

**Mozgó ábra:** Balra idővonal három mérföldkővel, jobbra három külön, azonos szélességű kártya. 0–8 mp: sorban megjelenik az 1986, a 2002 és a 2007, majd a figyelmeztetés a két mérce különbségéről. 9–12 mp: az első kártya. 12–15 mp: a második kártya. 15–18 mp: a harmadik kártya. Teljes hossz 20 mp. A kártyák eltérő mennyiségeket mutatnak, egyik sem a másik része.

**Lépésfeliratok:**

1. A világ tárolókapacitása néhány évtized alatt digitálissá vált.
2. Ami nyilvánosan elérhető, az még lehet jogvédett.
3. A LLaMA előtanítóanyagának méretét közölték. A GPT-4 jelentése ilyen adatot nem ad meg.

**Forrás:** Tárolókapacitás [F35], [F36] · Éves adatmennyiség [F37] · Nyilvános archívum és felhasználási feltételek [F38], [F39] · Előtanítóanyag [F40] · GPT-4 [F08]. A tárolt és az éves adatmennyiség két külön adatsor, ezért közöttük nincs szorzó.

## Dia 5: A modellek mérete: 60 ezertől 2,8 billióig

**A dián látható szöveg:** A modellek mérete: 60 ezertől 2,8 billióig · Paraméterek száma, logaritmikus skálán: minden osztás tízszeres · LeNet-5, 1998: 60 ezer · AlexNet, 2012: 60 millió · GPT-1, 2018: 117 millió · GPT-2, 2019: kb. 1,56 milliárd · GPT-3, 2020: 175 milliárd · LLaMA 65B, 2023: 65,2 milliárd · GPT-4, 2023: nem publikált · DeepSeek-V4-Pro, 2026: 1,6 billió · Kimi K3, 2026: 2,8 billió · Tanítóadat, modellenként a saját mértékegységében · A mértékegységek nem válthatók át egymásba. · LeNet-5: 60 000 kép · AlexNet: 1,2 millió kép · GPT-1: több mint 7 000 könyv · GPT-2: több mint 8 millió dokumentum, 40 GB · GPT-3: 300 milliárd feldolgozott token · LLaMA 65B: 1,4 billió feldolgozott token · GPT-4: nem publikált · DeepSeek-V4-Pro: több mint 32 billió token · Kimi K3: A tokenek számát nem közölték. · A bemutatott modellek közül a DeepSeek-V4-Pro és a Kimi K3 tokenenként a paramétereinek csak egy részét használja. A Kimi K3-nál 104 milliárd aktív. · Források: LeCun és mtsai. (1998), Krizhevsky és mtsai. (2012), Radford és mtsai. (2018, 2019), Brown és mtsai. (2020), Touvron és mtsai. (2023), OpenAI (2023), DeepSeek és Moonshot AI modellkártyák.

**Mozgó ábra:** Felül egyetlen logaritmikus vonal, rajta a modellek paraméterszáma méret szerinti sorrendben. Alul kilenc kártya mutatja a tanítóadatot, mindegyik a saját mértékegységében. 0–11 mp: a vonal balról jobbra kinő, a pontok és a feliratok sorban megjelennek. 7 mp körül megjelenik a GPT-4 szaggatott jele a „nem publikált” felirattal. 12–23 mp: sorban megjelennek a kártyák. 22 mp után: megjelenik az aktív paraméterekről szóló mondat. Teljes hossz 24 mp.

**Forrás:** LeNet-5 [F41] · AlexNet [F03] · GPT-1 [F42] · GPT-2 [F43] · GPT-3 [F06] · LLaMA 65B [F40] · GPT-4 [F08] · DeepSeek-V4-Pro [F44] · Kimi K3 [F45]. A GPT-3 300 milliárd tokenje feldolgozott mennyiség, egyes adathalmazokat a modell akár 3,4-szer is látott.

## Dia 6: Mitől javult a teljesítmény?

**A dián látható szöveg:** Sok, szűrt szöveg · Párhuzamos számítás · Jobb modellfelépítés · Tanítás a párbeszédre

**Forrás:** Adatszűrés és párhuzamos tanítás [F06] · Transformer, 1. és 4. szakasz [F04] · Chinchilla és Gopher azonos tanítási számítás mellett [F07] · ChatGPT és párbeszédre hangolás [F05].

## Dia 7: Machine learning | Minták a példákból

**A dián látható szöveg:** Machine learning · Tanítópéldák · Modell · Új levél · Becslés: ajánlatkérés · Tanítás · Használat · Szemléltetés

**Mozgó ábra:** Balra három kitalált levélkártya, középen egy modell-doboz, jobbra egy szaggatott szélű új levél. A tanítópéldákon két pipa az ajánlatkérést jelöli, egy üres kör az egyéb levelet. 0–5 mp: balról sorban a középső dobozba csúszik a három megjelölt példa. 5–10 mp: a modellben két eltérő alakú minta rendeződik, a bejövő nyíl lezárul. 10–15 mp: az új levél külön nyílon a megtanult modellhez csúszik, mellette megjelenik a pipa mint modellbecslés. 15–18 mp: az elkülönített tanítási és használati oldal egyszerre látszik. A mozgás 18 mp-ig tart. A CSS-időzítés 24 mp.

**Lépésfeliratok:**

1. Előre megjelölt példákat adsz.
2. A modell megtanul jelekből következtetni.
3. Az új üzenetnek még nincs címkéje. A modell arra is ad egy becslést.
4. Használat előtt félretett, címkézett példákon méred, mennyire pontos.

**Forrás:** Felügyelt tanulás, tanítópéldák és modellértékelés [F10]. A levelek szemléltető minták.

## Dia 8: Deep learning | Mit csinálnak a rétegek?

**A dián látható szöveg:** Deep learning · Neuron · Súly · Élek · Formák · Tárgy · Cserepes növény · esély: 92% · Szemléltetés

**Mozgó ábra:** Balra egy stilizált fotó cserepes növényről, középen három réteg, rétegenként három csomóponttal. Jobbra kimeneti kártya: „Cserepes növény”, „esély: 92%”. 0–5 mp: a fotó megáll a bemenetnél, egy csomópontot „Neuron” felirattal emelj ki. 5–10 mp: két bejövő él különböző vastagsággal pulzál, az egyik mellett „Súly”. 10–15 mp: az első rétegen éldarabok, a következőn formák rajzolódnak ki. 15–20 mp: az utolsó rétegen levél, teljes növény és cserép jele villan fel, majd megjelenik a kimeneti kártya az eséllyel. A mozgás 20 mp-ig tart. A CSS-időzítés 26 mp. Az ikonok a megtanult jeleket szemléltetik.

**Lépésfeliratok:**

1. A kis pont egy mesterséges neuron, egyszerű számolóegység.
2. A súly az egyik fajta tanulható paraméter. A vonal vastagsága ezt szemlélteti.
3. A rétegek az egyszerű jelekből összetettebb mintázatokat építhetnek.
4. Élekből formák, formákból tárgyak. A háló ezt a példákból tanulja meg.

**Forrás:** Rétegek, neuronok, súlyok és tanult képi reprezentáció [F02], [F09] · ImageNet-tanulmány és hardver [F03].

## Dia 9: Backpropagation | Így tanul a hibából

**A dián látható szöveg:** Backpropagation · Így tanul a hibából · A backpropagation tanítás közben kiszámolja, melyik súly mennyire hat a hibára, így a tanítás tudja, merre állítsa a súlyokat, hogy a modell legközelebb kevesebbet tévedjen. · „Kérek árat 25 növényre.” · A háló tippje: Egyéb levél · Helyes válasz: Ajánlatkérés · Hiba · Az ajánlatkérés esélye: 24%, majd 31% · Egy lépés után: kicsit jobb · Minden súlyra számolunk, a frissítésből csak néhányat rajzoltunk ki. · Szemléltetés · Melyik mire való? Backpropagation: kiszámolja, merre változzanak a súlyok · Attention: súlyozza, mit vegyen át a szöveg többi részéből · Transformer: a rétegek felépítése

**Mozgó ábra:** Balra egy kitalált ajánlatkérő levél, középen háromrétegű háló, jobbra a tipp, a helyes válasz és az esélysáv. 0–5 mp: a jel előre fut, megjelenik a téves tipp és a 24%. 5–9 mp: keret fogja össze a tippet és a helyes választ, feltűnik a „Hiba”. 9–16 mp: szaggatott vonalak futnak visszafelé a háló minden kapcsolatán. A súlyok még változatlanok. 16–21 mp: külön lépésben több vonal vastagsága megváltozik. 21–26 mp: új előrehaladás a módosított hálón, a sáv 31%-ra nő. Teljes hossz 32 mp. A 24% és a 31% szemléltető érték.

**Lépésfeliratok:**

1. Becsülj
2. Mérd a hibát
3. Backpropagation: számolj visszafelé
4. Frissítsd a súlyokat
5. Ismétlés sokszor

**Forrás:** Az 1986-os közlemény szerzői jegyzéke [F15] · Visszaterjesztés és optimalizálás, 6.5. szakasz [F09] · Szöveges feladat súlyfrissítés nélkül [F06].

## Dia 10: A szövegből tokenek lesznek

**A dián látható szöveg:** Valódi példa: o200k_base · Input: Írj rövid választ. · Prompt · Tokenek: Í · r · j · ␣rö · vid · ␣választ · . · Azonosítók: 8463 · 81 · 73 · 76568 · 1429 · 161394 · 13 · Vektorok · Szemléltetés: sok-sok szám

**Mozgó ábra:** Négy vízszintes sor. 0–5 mp: beíródik a mondat, mellé kerül a „Prompt”. 5–11 mp: megjelenik a hét token, a szóközzel kezdődő tokenek bal szélén szaggatott hely jelzi a szóközt. 11–16 mp: minden token alá odakerül a valódi azonosítója. 16–20 mp: az azonosítók alatt kis oszlopsorok jelennek meg, ezek a vektorokat szemléltetik. Teljes hossz 26 mp. A tokenek és az azonosítók valódiak, az OpenAI o200k_base kódolásából származnak. Az oszlopsorok szemléltetők.

**Lépésfeliratok:**

1. Az input az, amit a modell megkap. A prompt a kérésed.
2. Az OpenAI o200k_base tokenizálója darabokra vág. Egy szó több token is lehet.
3. Minden darabnak saját azonosítója van. Ez csak sorszám a szótárban.
4. A háló az azonosítóhoz tartozó tanult számsorral, vektorral számol.

**Forrás:** Szöveges utasítás és háttéranyag [F16] · Token és tokenizálás [F11] · Valódi felosztás és azonosítók, saját futtatás [F20] · Tanult beágyazás, 3.4. szakasz [F04].

## Dia 11: Attention | A környezet adja a jelentést

**A dián látható szöveg:** Attention · A környezet adja a jelentést · A figyelem súlyozza, mennyi információt vegyen át egy szövegrész a környezetéből. A példában ettől kap más jelentést az ügyfél levele és a növény levele. · Az ügyfél levele: elküldött üzenet · A növény levele: a növény része · Szemléltetés · Melyik mire való? Backpropagation: kiszámolja, merre változzanak a súlyok · Attention: súlyozza, mit vegyen át a szöveg többi részéből · Transformer: a rétegek felépítése

**Mozgó ábra:** Két sor egymás alatt: „Az ügyfél levele” és „A növény levele”. 0–4 mp: kirajzolódnak a szókártyák, a „levele” kiemelve. 4–10 mp: mindkét „levele” felé egy vastag ív fut a közvetlenül előtte álló szótól, egy vékony a névelőtől. 10–16 mp: az íveken információ áramlik a „levele” felé, jobbra megjelenik a kétféle jelentés. Teljes hossz 22 mp. A vonalvastagság szemléltető érték, a modell valójában tokenekkel számol, és több párhuzamos figyelmi számítást végez.

**Lépésfeliratok:**

1. Ugyanaz a szó, kétféle jelentés.
2. A modell a korábbi szövegrészekből eltérő mértékben vesz át információt.
3. Vastagabb vonal, nagyobb súly. A modell valójában tokenekkel számol.

**Forrás:** Súlyozott figyelem és több figyelmi fej, 3.2. szakasz [F04] · Modellfüggő tokenhatárok [F11], [F20].

## Dia 12: Transformer | Figyelem, rétegről rétegre

**A dián látható szöveg:** Transformer · Figyelem, rétegről rétegre · A Transformer rétegei összekapcsolják a szöveg részeit, majd továbbalakítják őket. A már meglévő tokenek helyein párhuzamosan lehet számolni. A válasz új tokenjei egymás után készülnek. · A válasz eleje: K, öszön, jük · még üres · 1. réteg: Figyelem, Átalakítás · 2. réteg · 3. réteg · A következő token esélyei: ! 64%, ␣a 28%, , 8% · Kitalált esélyek. · A kártyák a tokenekhez tartozó számsorokat jelölik. A „jük” korábbi tokenekből vesz át információt. · Szemléltetés · Melyik mire való? Backpropagation: kiszámolja, merre változzanak a súlyok · Attention: súlyozza, mit vegyen át a szöveg többi részéből · Transformer: a rétegek felépítése

**Mozgó ábra:** Balra a válasz eddigi három tokenje és egy üres hely, középen az 1. réteg Figyelem és Átalakítás részével, utána a 2. és a 3. réteg, jobbra a következő token esélyei. 0–3 mp: a három kártya megjelenik. 3–6 mp: a három kártya együtt halad a Figyelem részbe. 6–11 mp: a „jük” felé egy vastag és egy vékony ív nyílik a korábbi tokenektől, a kártya gyűrűt kap. 11–16 mp: a három kártya együtt az Átalakításba lép, és színt vált. 16–22 mp: együtt áthaladnak a 2. és a 3. rétegen. 22–28 mp: megjelennek a következő token esélyei. Teljes hossz 28 mp. A rétegszám és a kapcsolatok szemléltetők, az esélyek kitaláltak. A tokenek valódiak, az ábra a 13. dia utolsó választását készíti elő.

**Lépésfeliratok:**

1. A meglévő tokenek együtt
2. Figyelem
3. Átalakítás
4. Rétegről rétegre, a végén esélyek

**Forrás:** Transformer, párhuzamosíthatóság, sorrend, figyelem, pozíciónkénti háló és a későbbi helyek elfedése [F04] · Rétegszám és Transformer-alapú szöveggenerálás [F06], [F08] · Valódi tokenek [F20].

## Dia 13: A kimenet lépésenként készül

**A dián látható szöveg:** Valódi tokenek, kitalált esélyek · Prompt + ügyféllevél → LLM → Következő token → Kimenet · T 23%, K 62%, J 15% · ér 5%, ed 24%, öszön 71% · jük 36%, öm 58%, et 6% · Most a 36%-os „jük” kerül a válaszba. · ␣a 28%, ! 64%, , 8%

**Mozgó ábra:** Balra két bemeneti kártya, középen LLM-doboz, jobbra három feliratozott esélyoszlop, alul kimeneti sor. 0–6 mp: a „Prompt” és az „Ügyféllevél” a modellbe csúszik. 6–12 mp: a „K” oszlopa körvonalat kap, a token a kimeneti sorba kerül. 12–18 mp: egy másolat a bemenet végére csúszik, az oszlopok új magasságot vesznek fel, az „öszön” következik. 18–24 mp: a harmadik lépésben a bal oldali keret a 36%-os „jük” tokent jelöli, pedig az „öm” esélye 58%, majd a „!” zárja a sort. A 4/4 felirat a stopjellel együtt, 24 mp-nél jelenik meg. Az olvasható kimenet „Köszönjük!”, mellette stopjel. Teljes hossz 30 mp. A tokenek valódiak, az esélyek kitaláltak.

**Lépésfeliratok:**

1. A háló az addigi szöveg alapján számol.
2. Az esélyek alapján választ egy tokent, nem mindig a legvalószínűbbet.
3. A választott token bekerül a bemenetbe, és a modell újra számol.
4. Addig megy, amíg záró tokent választ, vagy eléri a hosszkorlátot.

**Forrás:** Következő token előrejelzése és autoregresszív generálás [F06], [F08] · Mintavételezés és temperature [F11] · Kimenet és tokenkeret [F12] · Valódi tokenek [F20]. Az esélyek kitaláltak.

## Dia 14: Mit kap meg a modell minden körben?

**A dián látható szöveg:** Chatelőzmény · Aktuális kontextus · Minden körben újra elküldve. Egy kártya sok tokent jelent. · Alapcsomag: 20 növény · Válaszhely · Írj rövidebben · Szemléltetés

**Mozgó ábra:** Balra függőleges chatelőzmény. Jobbra véges hosszú, hatrészes „Aktuális kontextus” sáv, jobb szélén csíkozott „Válaszhely”. A hat rekesz szemléltető, egy kártya sok tokent jelképez. 0–6 mp: a bal oldali „Alapcsomag: 20 növény” forráskártya és két jelöletlen beszédbuborék másolata bekerül a jobb oldali sávba. 6–13 mp: még egy korábbi válasz jön be, megtelik a sáv használható része az „Írj rövidebben” kártyával együtt. 13–21 mp: egy válasz és egy új kérés érkezik. A bemutatott alkalmazás a jobb oldali sávból kiveszi a két legrégebbi kártyát, köztük a forrás másolatát. Az eredeti kártyák balra a chatben maradnak. A megmaradt kártyák balra csúsznak, a válasz és az új kérés a sor végére, közvetlenül a válaszhely elé érkezik. 21–26 mp: látszik, mi maradt a modell bemenetében, és a csíkozott hely a következő válasznak. A mozgás 26 mp-ig tart. A CSS-időzítés 32 mp. Ez egy lehetséges előzménykezelés szemléltetése.

**Lépésfeliratok:**

1. A modell nem emlékszik: minden körben újra megkapja a csomagot.
2. A kontextusablak véges, és helyet kell hagyni a válasznak is.
3. Ebben a példában az alkalmazás kiveszi a két legrégebbi kártyát, köztük a forrást.
4. A chatben továbbra is olvasható, de már kimaradt abból, amit a modell megkapott.

**Forrás:** Beszélgetési állapot, bemeneti és kimeneti tokenek [F12] · Előzmények tömörítése [F17] · A kitalált csomaghatár [H05].

## Dia 15: Hallucináció, drift, felejtés

**A dián látható szöveg:** Hallucináció: kitalált ár · Feladatcsúszás (drift): levélből kampány · Felejtés: kimaradt vagy elsikkadt szabály · Kitalált példa

**Ábra:** Három egymás melletti kártya. Az elsőn egy árcédula kérdőjellel. A másodikon egy levélből kiinduló, elágazó nyíl. A harmadikon két miniablak egymás alatt: az elsőben a forráskártya a kereten kívül van, a másodikban a kereten belül, halványan. A három cím és a jelek sorrendben együtt látszanak.

**Forrás:** Valószerű téves állítások [F13] · Korai feltételezések továbbélése több fordulóban [F14] · Kontextusablak és a kontextuson belüli hely hatása [F12], [F18] · Mintapélda [H05].

## Dia 16: Adj elég hátteret, és hagyj helyet a válasznak

**A dián látható szöveg:** Friss cél · Döntések · Forrásrészlet · Hely a válasznak

**Forrás:** Releváns kontextus és tömörítés [F17] · Kontextuskeret [F12] · Mintaforrás [H05].

## Dia 17: A jó prompt megadja a feladatot

**A dián látható szöveg:**

- Cél · Válaszolj az ajánlatkérésre.
- Címzett · Irodavezető.
- Forrás · Mellékelt levél és Cég-DNS.

**Forrás:** Feladat, szerep és forrás megadása [F16] · A Cég-DNS jelentése és a kitalált ajánlatkérés [H01], [H05], [H06].

## Dia 18: A jó prompt megmondja, mikor kész

**A dián látható szöveg:**

- Forma · Három mondat.
- Korlát · Húsz növény fölött kérj bejárást.
- Minta · „Mikor lenne jó a bejárás?”
- Ellenőrzés · A levél alatt: melyik állítás honnan való.

**Forrás:** Kimenet, korlát, példák és forrás [F16] · Ellenőrizhető állítás és emberi döntés [H02], [H04] · Kitalált üzleti példa [H05].

## Dia 19: Két mondat, amivel elindulsz

**A dián látható szöveg:** Írj nekem egy jó promptot arra, hogy… · Először kérdezz rá arra, ami hiányzik.

**Forrás:** Promptírási összetevők [F16] · Kitalált megfogalmazás.

## Dia 20: Egy kérés, három AI-szerep

**A dián látható szöveg:** Ember: célt ad · Karmester: szervez, továbbít · Készítő: piszkozatot ír · Ellenőr: friss beszélgetésben · cél · átnézett piszkozat · feladat · piszkozat · csomag · leletek · A csomagot te másolod át az Ellenőr új beszélgetésébe. · Ember dönt

**Ábra:** Középen a Karmester, balra az Ember, jobbra felül a Készítő, jobbra alul az Ellenőr. Minden átadás a Karmesteren megy át, ezt oda-vissza nyilak jelzik: Ember és Karmester között cél és átnézett piszkozat, Karmester és Készítő között feladat és piszkozat, Karmester és Ellenőr között csomag és leletek. Az Ember alatt külön kiemelés: „Ember dönt”.

**Forrás:** Agentek és összehangolt munkamenetek [F19] · A workshop szerepei és működése [H01], [H02], [H06] · Független ellenőrzés [H03], [H04].

## Dia 21: Egy levél útja az emberi döntésig

**A dián látható szöveg:** Kitalált eset · Ember · Karmester · Készítő · Ellenőr · 25 növény · Cég-DNS · Brief · Piszkozat · Forrás nélküli ár · közepes · a Készítő válasza után: közepes · vitatott · A csomagot te másolod át az Ellenőr új beszélgetésébe. · Javítva · Dátum tisztázva: időpontot kérünk · Ha maradt javítandó hiba · Bejárás · Nyitott pont · Küldés? · Munkanapló

**Mozgó ábra:** Négy függőleges sáv balról jobbra: „Ember”, „Karmester”, „Készítő”, „Ellenőr”. A felső sorban mindig maradjon látható a „Kitalált eset”. A sávok közt csak az éppen átadott kártya mozog. Az átadást folytonos nyíl, a javítási kört visszahajló szaggatott nyíl jelzi. A külön beszélgetést az Ellenőrnél megjelenő üres, dupla keret mutatja. A nyitott pont jelölése feliratos borostyánszínű kör, a blokkolóé feliratos piros nyolcszög.

| Dia ideje | Mozgás és állapot |
| --- | --- |
| 0–11 mp | Az Embertől a Karmesterhez úszik a „25 növény” kéréskártya. A Karmester mappájában mellé csúszik a levél ikonja és a „Cég-DNS”. |
| 11–22 mp | Kérdőjeles buborék fordul vissza az Emberhez. A válasz pipa formájában érkezik vissza, majd közös keretet kap a levéllel és a forráskártyával. |
| 22–34 mp | Az Embertől második pipa érkezik a lezárt feladatkeretre, ez a terv jóváhagyása. A Karmester feladatlista-ikonnal jelzi a választható előzetes rögzítést. A „Brief” kártya átcsúszik a Készítőhöz, vele mozog a forráscsomag. Felvillan a Készítő munkáját jelző toll. |
| 34–45 mp | A Készítőnél összeáll a „Piszkozat” kártya egy árcédulaikonnal, majd visszacsúszik a Karmesterhez. |
| 45–58 mp | Az Ellenőrnél megnyílik a friss keret. Ezt a beszélgetést a résztvevő nyitja meg, és bemásolja a Karmestertől kapott csomag három elemét: piszkozat, eredeti források, ellenőrzőlista. Közben az Ember sávja kiemelést kap, és ott olvasható: „A csomagot te másolod át az Ellenőr új beszélgetésébe.” A készítői jegyzet ikonja a Készítő sávjában marad. |
| 58–69 mp | Az Ellenőrnél megjelenik a blokkoló „Forrás nélküli ár”, egy üres naptárikon a közepes súlyú dátumészrevételhez („közepes”) és a „Nyitott pont” az apró stílusészrevételhez. A jelzések és a piszkozat a Karmester sávján át együtt visszamennek a Készítőhöz. |
| 69–82 mp | A piros jelzés pipát kap, amely itt az észrevétel elfogadását jelzi. A naptár mellé visszaúszik egy forrásikon, és csak ekkor egészül ki a jelzés a „· vitatott” szóval, majd a vitatott naptárjelzés az indoklással együtt az Ellenőr felé indul. A kis pont a nyitottak közé kerül. |
| 82–94 mp | A Készítőnél az árcédula eltűnik, a „Bejárás” kártya a helyére kerül. Az új piszkozat a Karmesteren át az Ellenőrhöz jut, ekkor csak az Ellenőr felé tartó mozgás látszik. |
| 94–105 mp | Az Ellenőr összeilleszti az új piszkozatot az eredeti forrással. Az ár sora „Javítva” jelölést kap, a dátum sorában röviden megjelenik a „Dátum tisztázva: időpontot kérünk” felirat, majd a jelzés eltűnik, és megmarad az apró nyitott pont. A szaggatott visszanyíl itt jelenik meg a „Ha maradt javítandó hiba” felirattal, és megmutatja, merre menne vissza a munka. |
| 105–116 mp | A Karmester az Emberhez küldi az átnézett piszkozatot és a nyitott észrevételt. Melléjük kerül a „Küldés?” döntéskártya. |
| 116–124 mp | A Karmester beírja a munkanaplóba, mi történt. Felirat: „Munkanapló: mi történt, hol értettük félre, mit tanultunk”. A „Küldés?” döntéskártya az Embernél marad. |

A teljes animáció 124 mp. A dia megnyitásakor magától indul, kattintás nélkül halad végig. A záróállapot 1 mp-ig látszik, így a dia teljes ideje 2:05 marad. Csökkentett mozgásnál három nagy állapot látszik: feladatátadás (25 növény, levél és Cég-DNS); lelet és javítás (A fix ár kikerül, bejárást kérünk); ellenőrzött piszkozat és emberi döntés (Nyitott stíluspont. Elküldöd?). A példa egy javítási kört mutat. A szaggatott visszanyíl jelzi, hogy javítandó hiba esetén lenne még kör. A záróállapotban soha ne jelenjen meg elküldött boríték vagy sikeres küldést jelző ikon.

**Lépésfeliratok:**

1. Az Ember célt ad. A Karmester összegyűjti a levelet és a Cég-DNS szabályait.
2. Ha hiányzik egy döntés, a Karmester kérdez.
3. Jóváhagyod a tervet. A Karmester a Készítőnek adja a feladatot és a forrásokat.
4. A Készítő visszaadja a piszkozatot. Ebben már van egy fix ár.
5. Új beszélgetést nyitsz az Ellenőrnek: piszkozat, források, ellenőrzőlista. A Készítő gondolatmenete kimarad.
6. Leletek súlyossággal: blokkoló, közepes, apró.
7. A Készítő elfogadja az árra vonatkozó kifogást, a dátumot forrással vitatja, az apró pont nyitott marad.
8. Az ár kikerül, bejárás kerül a helyére. Az új változat visszamegy az Ellenőrhöz.
9. Blokkoló, súlyos vagy közepes hibánál javítunk. Az aprót feljegyezzük.
10. Ellenőrzött piszkozat és nyitott pont. Te döntesz, elküldöd-e.
11. Munkanapló: mi történt, hol értettük félre, mit tanultunk

**Forrás:** Cél, terv, jóváhagyás, szerepkiosztás és küldési kapu [H01] · Friss beszélgetés, bemenet, súlyosság és döntés [H02] · Korlátozott ciklus, bizonyíték, vitás lelet, ismételt ellenőrzés [H03], [H04] · Kitalált üzleti szabály [H05]. A feladatkezelő választható lépés. A szemléltetésben a naptárészrevételt a friss ellenőrzés feloldja. Fennmaradó vita esetén független harmadik ellenőr dönt. Az idő- vagy körkeret elérésekor a Karmester a bizonyítékot és a döntendő kérdést adja tovább. Apró nyitott pontot jegyzünk fel, a workshop ellenőrzőlistáján közepes vagy súlyos hiba javítást kér.

## Dia 22: 09:20 | Kezdjük a Cég-DNS-sel

**A dián látható szöveg:** 09:20 Cég-DNS · Kinek? Mit? Milyen hangon? · Tartalom → Ügyfélszerzés → Ajánlat → Folyamatpróba

**Ábra:** Balra a Cég-DNS kártyája a három kérdéssel. Jobbra a négy állomás a megadott sorrendben, nyíllal összekötve. A DNS-kártya alsó vonala mind a négy állomás alá befut, ezzel jelzi a közös bemenetet.

**Forrás:** A nap fonala és 09:20-as kezdés [H07] · A blokk bemenete, mentőút és várható kimenete [H06], [H08].

## Dia 23: Tartalék dia | Ugyanannyi számítás, több szöveg

**A dián látható szöveg:** Gopher: 280 milliárd paraméter · Chinchilla: 70 milliárd paraméter · Azonos tanítási számítás · Tanítótokenek, arányosan · Kb. 4,7-szer annyi tanítótoken: 1400 milliárd és 300 milliárd

**Ábra:** Azonos szélességű felső keretben két modellkártya. Mindegyiken külön mezőben a paraméterszám. A Chinchilla alatt 4,7 lapka, a Gopher alatt egy lapka. Mindkét lapkasor fölött a „Tanítótokenek, arányosan” címke áll. Az arány a tényleges 1400 és 300 milliárd token hányadosa.

**Forrás:** Chinchilla összehasonlítás, kivonat, 1. táblázat és 4. szakasz [F07].

## Dia 24: Tartalék dia | Egyben a kipróbálható prompt

**A dián látható szöveg:** Írj hárommondatos magyar válaszpiszkozatot egy irodavezetőnek, aki ezt írta: „Huszonöt irodai növény rendszeres gondozására kérünk ajánlatot.” A kitalált IrodaLiget Cég-DNS-ének szabálya: az alapcsomag legfeljebb húsz növényre szól. Húsz növény felett kérj bejárást, a gondozás díja nincs megadva. Használj barátságos, gyakorlatias hangot. Mintakérdés: „Mikor lenne jó a bejárás?” A levél után külön sorban írd le, melyik forrásmondat támasztja alá a következő lépést. A levélben hagyd nyitva az árat. · Mit kérdeznél még az ügyféltől?

**Forrás:** Kitalált szabály és hang [H05] · Feladat, kontextus, példa és kimeneti elvárás [F16].

## Forrásjegyzék

A sorszámok a diák állításaihoz tartoznak. A H jelű workshopanyagokat és szabályokat a helyi példányból ellenőriztem. A forráscím mellett a megnyitott webcím vagy a helyi megfelelő szerepel.

| Jel | Állítás, hely | Forrás címe | URL | Megnyitva |
| --- | --- | --- | --- | --- |
| F01 | 1955. augusztus 31-i Dartmouth-javaslat, nyelv és tanulás, 1956-ra tervezett kutatás. | A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence | [Stanford, eredeti javaslat](https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html) | 2026-11-19 |
| F02 | AI, gépi tanulás, mélytanulás hierarchiája, tanult reprezentációk és képi példa. 1. fejezet, 1.2., 1.4. és 1.5. ábra. | Deep Learning, Chapter 1: Introduction | [MIT Press-könyv, szerzői oldal](https://www.deeplearningbook.org/contents/intro.html) | 2026-11-19 |
| F03 | 2012-es ImageNet-tanulmány. Kb. 1,2 millió tanítókép, két GTX 580. 1–3. szakasz. | ImageNet Classification with Deep Convolutional Neural Networks | [NeurIPS, eredeti tanulmány](https://papers.nips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf) | 2026-11-19 |
| F04 | 2017-es Transformer, fordítás, párhuzamosíthatóság, figyelem, sorrend, pozíciónkénti átalakítás, oksági maszkolás. 1., 3. és 4. szakasz. | Attention Is All You Need | [NeurIPS, eredeti tanulmány](https://proceedings.neurips.cc/paper/7181--attention-is-all-you-need.pdf) | 2026-11-19 |
| F05 | ChatGPT bemutatása 2022-ben, párbeszéd és a társalgási formára hangolás. Az oldal automatikus megnyitása hibát adott, emberi visszajelzéses hangolás: [InstructGPT](https://arxiv.org/abs/2203.02155). | Introducing ChatGPT | [OpenAI, eredeti közlés](https://openai.com/index/chatgpt/) | Nem nyílt meg automatikusan |
| F06 | 2020-as GPT-3, 175 milliárd paraméter, 300 milliárd feldolgozott tanítótoken, becsült 3,14 × 10²³ lebegőpontos művelet, szűrés, duplikátumok, párhuzamos tanítás és használat súlyfrissítés nélkül. Kivonat, 2.1–2.3. szakasz, D.1. táblázat. | Language Models are Few-Shot Learners | [Eredeti tanulmány](https://arxiv.org/pdf/2005.14165) | 2026-11-19 |
| F07 | Chinchilla és Gopher, azonos számítási keret, eltérő modell- és adatméret, eredmények a vizsgált feladatokon. Kivonat és 4. szakasz. | Training Compute-Optimal Large Language Models | [DeepMind, eredeti tanulmány](https://arxiv.org/pdf/2203.15556) | 2026-11-19 |
| F08 | GPT-4 következőtoken-tanítása, a modellméret és a tanítási számítás elhagyása a nyilvános jelentésből. 2. szakasz. | GPT-4 Technical Report | [OpenAI, műszaki jelentés](https://arxiv.org/pdf/2303.08774) | 2026-11-19 |
| F09 | Neuron, rétegek, paraméterek, előreszámítás, gradiensszámítás és optimalizáló lépés. 6.1., 6.2. és 6.5. szakasz. | Deep Learning, Chapter 6: Deep Feedforward Networks | [MIT Press-könyv, szerzői oldal](https://www.deeplearningbook.org/contents/mlp.html) | 2026-11-19 |
| F10 | Felügyelt tanulás címkézett példákkal, osztályozás és elkülönített modellértékelés. | Introduction to Machine Learning: What is Machine Learning? és Machine Learning Crash Course: Dividing datasets | [Google for Developers, fogalmak](https://developers.google.com/machine-learning/intro-to-ml/what-is-ml) · [A tanító- és tesztadatok szétválasztása](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets) | 2026-11-19 |
| F11 | A token mint szövegegység, a kódolás és a temperature szerepe a mintavételezésben. | Glossary: Tokens, Temperature | [Claude dokumentáció](https://platform.claude.com/docs/en/about-claude/glossary) | 2026-11-19 |
| F12 | A beszélgetés állapota, a bemeneti és kimeneti tokenek, a kontextusablak véges kerete. | Conversation state | [OpenAI fejlesztői dokumentáció](https://developers.openai.com/api/docs/guides/conversation-state) | 2026-11-19 |
| F13 | A hallucináció mint valószerű téves állítás, és a találgatást jutalmazó tanítási és értékelési eljárások. | Why Language Models Hallucinate | [Eredeti tanulmány](https://arxiv.org/abs/2509.04664) | 2026-11-19 |
| F14 | Többfordulós eltérés, korai feltételezések és túl korai válaszok hatása a vizsgált beszélgetésekben. Kivonat. | LLMs Get Lost In Multi-Turn Conversation | [Eredeti kutatás](https://arxiv.org/abs/2505.06120) | 2026-11-19 |
| F15 | Egy 1986-os Nature-tanulmány a hibavisszaterjesztésről. | Learning representations by back-propagating errors | [Szerzői publikációs jegyzék](https://www.cs.toronto.edu/~hinton/backprop.html) | 2026-11-19 |
| F16 | Szerep és cél, utasítások, forrás, példa és kimenet megadása. | Prompt engineering | [OpenAI fejlesztői dokumentáció](https://developers.openai.com/api/docs/guides/prompt-engineering) | 2026-11-19 |
| F17 | Releváns, tömör kontextus és hosszú beszélgetés összefoglalása. | Effective context engineering for AI agents | [Anthropic Engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | 2026-11-19 |
| F18 | A hosszú bemeneten belüli elhelyezés hatása az információ használatára a vizsgált feladatokon. | Lost in the Middle: How Language Models Use Long Contexts | [ACL Anthology, eredeti kutatás](https://aclanthology.org/2024.tacl-1.9/) | 2026-11-19 |
| F19 | Munkafolyamat, eszközt használó agentek, koordinálás és ellenőrző ciklus. | Building effective agents | [Anthropic Engineering](https://www.anthropic.com/research/building-effective-agents) | 2026-11-19 |
| F20 | Valódi tokenek és azonosítók az o200k_base kódolásból: „Írj rövid választ.” és „Köszönjük!”. Saját futtatás, tiktoken 0.14.0, a dekódolás visszaadta az eredeti szöveget. | tiktoken | [OpenAI, nyílt forráskódú tokenizáló](https://github.com/openai/tiktoken) | 2026-11-19 |
| F21 | IBM 701: több mint 16 000 összeadás másodpercenként. | IBM 700 Series | [Megnyitott forrás](https://www.ibm.com/history/700) | 2026-11-19 |
| F22 | TOP500, 1993. június: első hely 59,7 GFLOPS, második hely 30,4 GFLOPS. | TOP500 List, June 1993 | [Megnyitott forrás](https://top500.org/lists/top500/list/1993/06/) | 2026-11-19 |
| F23 | TOP500, 2006. november: BlueGene/L, 280,6 TFLOPS. | TOP500 List, November 2006 | [Megnyitott forrás](https://top500.org/lists/top500/2006/11/) | 2026-11-19 |
| F24 | TOP500, 2026. november: LineShine, 2 198,4 PFLOPS. | TOP500 List, November 2026 | [Megnyitott forrás](https://top500.org/lists/top500/2026/11/) | 2026-11-19 |
| F25 | Intel 4004: 2 300 tranzisztor. | Intel Microprocessor Quick Reference Guide | [Megnyitott forrás](https://www.intel.com/pressroom/kits/quickreffam.htm) | 2026-11-19 |
| F26 | NVIDIA Rubin GPU: 336 milliárd tranzisztor, két szilíciumlapka egy tokban. | Inside NVIDIA Rubin GPU Architecture | [Megnyitott forrás](https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/) | 2026-11-19 |
| F27 | IBM 701: 2 048 darab 36 bites szó egy memóriamodulban, kb. 9,2 kB. | Research in Language Translation on the IBM Type 701, IBM Technical Newsletter No. 9 | [Megnyitott forrás](https://mt-archive.net/Sheridan-1955.pdf) | 2026-11-19 |
| F28 | Cray-1: legfeljebb 1 048 576 darab 64 bites szó, azaz 8 MiB. | Cray-1 Hardware Reference Manual, HR-0004-F | [Megnyitott forrás](https://cray.modularcircuits.com/cray_docs/hw/cray-1/HR-0004-F-CRAY-1_Computer_Systems_Hardware_Reference_Manual-May_1982.pdf) | 2026-11-19 |
| F29 | El Capitan: 5 898 240 GiB memória, kb. 6,3 PB. | El Capitan | [Megnyitott forrás](https://hpc.llnl.gov/hardware/compute-platforms/el-capitan) | 2026-11-19 |
| F30 | IBM 350 RAMAC, 1956: 3,75 MB. | First commercial hard disk drive shipped | [Megnyitott forrás](https://www.computerhistory.org/storageengine/first-commercial-hard-disk-drive-shipped/) | 2026-11-19 |
| F31 | Seagate Mozaic 4+: 44 TB. | Seagate Mozaic 4+ | [Megnyitott forrás](https://www.seagate.com/stories/articles/seagate-delivers-industrys-highest-capacity-hard-drives-with-next-generation-mozaic-4/) | 2026-11-19 |
| F32 | Az A18 Pro lapka az iPhone 16 Pro-ban. | Apple debuts iPhone 16 Pro | [Megnyitott forrás](https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/) | 2026-11-19 |
| F33 | Apple A18 Pro: mért HPL Linpack, 57,012 GFLOPS, dupla pontosság, MacBook Neóban. | A18 Pro HPL benchmark | [Megnyitott forrás](https://github.com/geerlingguy/top500-benchmark/issues/95) | 2026-11-19 |
| F34 | Az 1 TB tárhelyű Galaxy S26 Ultra: 16 GB munkamemória. | Samsung Galaxy S26 comparison | [Megnyitott forrás](https://www.samsung.com/us/support/answer/ANS10010342/) | 2026-11-19 |
| F35 | A világ tárolókapacitása: 1986: 2,6 EB, 0,8% digitális. 2007: 295 EB, 94% digitális. | The World’s Technological Capacity to Store, Communicate, and Compute Information | [Megnyitott forrás](https://www.uvm.edu/pdodds/research/papers/others/2011/hilbert2011a.pdf) | 2026-11-19 |
| F36 | 2002: a digitális tárolás megelőzi az analógot. | How much information is there in the world? | [Megnyitott forrás](https://today.usc.edu/how-much-information-is-there-in-the-world) | 2026-11-19 |
| F37 | 2023: 132,4 ZB létrehozott, rögzített, másolt és fogyasztott adat, IDC-becslés. | IDC #US52554824e, harmadik félnél tárolt másolat | [Megnyitott forrás](https://techcontentwave.com/files/1763389937_64b594fd4f7f5607256a.pdf) | 2026-11-19 |
| F38 | Common Crawl teljes archívuma: több mint 10 PB. | Common Crawl: About | [Megnyitott forrás](https://commoncrawl.org/about) | 2026-11-19 |
| F39 | A Common Crawl felhasználójának tiszteletben kell tartania harmadik felek szerzői jogait. | Common Crawl: Terms of Use | [Megnyitott forrás](https://commoncrawl.org/terms-of-use) | 2026-11-19 |
| F40 | LLaMA 65B: 65,2 milliárd paraméter, 1,4 billió feldolgozott token, 4,7 TB tanítóanyag az 1. táblázat összegeként. | LLaMA: Open and Efficient Foundation Language Models | [Megnyitott forrás](https://arxiv.org/pdf/2302.13971) | 2026-11-19 |
| F41 | LeNet-5: 60 000 paraméter, 60 000 tanítókép. | Gradient-Based Learning Applied to Document Recognition | [Megnyitott forrás](http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf) | 2026-11-19 |
| F42 | GPT-1: 117 millió paraméter, több mint 7 000 könyv. | Improving Language Understanding by Generative Pre-Training | [Megnyitott forrás](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) | 2026-11-19 |
| F43 | GPT-2: kb. 1,56 milliárd paraméter a kiadott 1558M változatban. A WebText több mint 8 millió dokumentuma összesen 40 GB. | Language Models are Unsupervised Multitask Learners és az OpenAI helyesbítése | [Eredeti tanulmány](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) · [Helyesbítés](https://github.com/openai/gpt-2/blob/master/README.md) | 2026-11-19 |
| F44 | DeepSeek-V4-Pro: 1,6 billió paraméter, 49 milliárd aktív, több mint 32 billió token. | DeepSeek-V4-Pro modellkártya | [Megnyitott forrás](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | 2026-11-19 |
| F45 | Kimi K3: 2,8 billió paraméter, 104 milliárd aktív. | Kimi K3 modellkártya | [Megnyitott forrás](https://huggingface.co/moonshotai/Kimi-K3) | 2026-11-19 |
| F46 | Cray-1A: 8 MiB memória az üzemeltető adata szerint. | NCAR supercomputing history: Cray-1A | [Megnyitott forrás](https://www.cisl.ucar.edu/ncar-supercomputing-history/c1) | 2026-11-19 |
| H01 | Karmester: cél, forrás, terv, kiosztás, emberi jóváhagyás és küldési kapu. | Karmester (orchestrator) | [Workshop szerepleírás](../starter-kit/agents/orchestrator.md) | 2026-11-19 |
| H02 | Ellenőr: friss beszélgetés, forrásból ellenőrzés, súlyosság, emberi döntés. | Ellenőr (reviewer) | [Workshop szerepleírás](../starter-kit/agents/reviewer.md) | 2026-11-19 |
| H03 | Emberi cél, pontos átadási feltételek, független ellenőrzés és a ciklus korlátja. | Agentic engineering method: Principles | [Wenova OS, a helyben megnyitott revízió](https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/01-principles.md) | 2026-11-19 |
| H04 | Ellenőrzés és újraellenőrzés, bizonyíték, súlyosság, vita és nyitott kisebb pontok. | Agentic engineering method: Review and triage | [Wenova OS, a helyben megnyitott revízió](https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/06-review-and-triage.md) | 2026-11-19 |
| H05 | Kitalált cég, húsz növényes alapcsomag, nagyobb kérésnél bejárás, forrás- és hiányjelölés. 3., 4., 5. és 7. szakasz. | IrodaLiget Cég-DNS | [Workshop mintafájl](../scenarios/office-plants/outputs/company-dna.md) | 2026-11-19 |
| H06 | A Cég-DNS jelentése, a szerepleírások futtatása, a következő blokk kimenete és a kitalált cég mint mentőút. | Cég-DNS és saját AI-csapat | [Üzleti alapok, résztvevői modul](../modules/01-business-foundations.md) | 2026-11-19 |
| H07 | A 09:00–09:20-as nyitás, a 09:20-as blokk és a nap fonala. | A nap menete | [Workshop menetrend](../schedule.md) | 2026-11-19 |
| H08 | Felvezetés a Cég-DNS bemutatójához, az IrodaLiget-minta és az első ellenőrzött próbafutás. | 01-business-foundations, belső oktatói jegyzet | Belső felkészítő anyag, nem része a résztvevői csomagnak | 2026-11-19 |
