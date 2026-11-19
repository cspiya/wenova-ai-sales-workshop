<!-- presentation -->
# Nyitó előadás: előadói jegyzet

**Cél.** A nyitás végére tudd elmagyarázni, hogyan állít össze az AI egy választ, miért érdemes a feladathoz válogatni a háttéranyagot, és hogyan jut egy üzleti kérés az ellenőrzött piszkozatig.

**Közönség.** Nem fejlesztő B2B cégtulajdonosok, sales- és marketingvezetők. Az előadáshoz nem kell fiók vagy saját adat. Az IrodaLiget a workshop kitalált gyakorlócége.

**Állapot.** Kidolgozott forgatókönyv gyártásra és független ellenőrzésre.

**Vetítés.** [A diák](../../materials/presentations/00-nyito-eloadas.html) · [Résztvevői forgatókönyv](../../materials/presentations/00-nyito-eloadas.md). Lapozás: PageDown, szóköz vagy nyílbillentyű. Teljes képernyő: F11.

| Blokk | Dia | Óraidő | Időtartam |
| --- | --- | --- | --- |
| AI dióhéjban | 1–2 | 09:00:00–09:01:20 | 1:20 |
| Miért most | 3–4 | 09:01:20–09:03:20 | 2:00 |
| Az öt algoritmikus alap | 5–9 | 09:03:20–09:08:00 | 4:40 |
| A nyelvi modell és a beszélgetés | 10–14 | 09:08:00–09:12:50 | 4:50 |
| Jó utasítás az AI-nak | 15–17 | 09:12:50–09:15:55 | 3:05 |
| Agentikus működés és ellenőrzés | 18–19 | 09:15:55–09:19:05 | 3:10 |
| Átkötés a Cég-DNS-re | 20 | 09:19:05–09:20:00 | 0:55 |
| **Fő rész** | **20 dia** | **09:00–09:20** | **20:00** |

**Rendezés.** Az előadói szöveg és az animáció párhuzamosan fut. A mozgás a dia megnyitásakor indul, kattintás nélkül fut, és a záróállapot rövid kitartása után újraindul. A dia váltása az előadó kezében marad. Az egyes lépések ideje a dia belépésétől indul. Az idézett feliratok és a vetített szöveg nagy betűvel, azonos helyre kerüljenek. Az állapot jelentését felirat vagy eltérő forma is jelezze. Csökkentett mozgás esetén az állapotok ugyanabban a sorrendben, átúszás nélkül váltsanak. Statikus tartalék nézetben a fő állapotok sorrendben egymás mellett látszódjanak. A hosszabb kérdésekre térj vissza a nyitás után. Az időjelölés perc:másodperc.

## Dia 1: AI dióhéjban

**Idő:** 0:40 perc

**Előadói szöveg:** Képzeld el, hogy egy ügyfél ajánlatot kér. Az AI segíthet megírni a válasz első verzióját. Neked kell megítélned, mi kerülhet bele. A mesterséges intelligencia, röviden AI, olyan módszerek gyűjtőneve, amelyekkel gépek például felismernek, előre jeleznek vagy szöveget alkotnak. Már az 1955-ös Dartmouth-javaslatban is szó volt nyelvről és gépi tanulásról. Aztán jöttek a nagy képfelismerési kísérletek, 2017-ben a Transformer, egy új modellfelépítés, 2022-ben pedig megjelent a ChatGPT. Ma azt nézzük meg, hogyan adsz egy ilyen eszköznek üzleti munkát.

**Forrás:** Fogalmi keret [F02] · Dartmouth [F01] · Képfelismerés [F03] · Transformer [F04] · ChatGPT [F05].

## Dia 2: Melyik AI-val dolgozunk ma?

**Idő:** 0:40 perc

**Előadói szöveg:** A külső keret az egész terület. Beljebb van a gépi tanulás, ahol a modell példákból tanul. A mélytanulás ennek a többrétegű neurális hálókat, vagyis egymásra épülő számításokat használó ága. Belül azt jelöltük, amivel ma dolgozol. Az LLM az angol *large language model* rövidítése, magyarul nagy nyelvi modell. A „generatív” azt jelenti, hogy új kimenetet tud összeállítani, például egy levél első változatát. Ez a térkép a mai útvonalunkat mutatja. A képalkotó modellek például külön ágra kerülnének.

**Forrás:** AI, gépi tanulás és mélytanulás viszonya [F02] · Generatív nyelvi modell és szöveges feladatok [F06].

## Dia 3: Mekkora léptékről beszélünk?

**Idő:** 1:05 perc

**Előadói szöveg:** Nézzünk egy közzétett példát. A 2020-as GPT-3 legnagyobb változata 300 milliárd tokent dolgozott fel a tanítás során. A token egy szövegegység. Lehet egész szó, szódarab vagy írásjel. A modellnek kerekítve 175 milliárd paramétere volt. A paraméter olyan szám a modellben, amelynek az értékét tanításkor beállítják. A kutatók becslése szerint ehhez körülbelül 3,14-szer tíz a huszonharmadikon lebegőpontos művelet kellett. A nagyságrend érzékeltetésére képzeld el, hogy másodpercenként egymilliárd ilyen műveletet végzel. A teljes mennyiséghez nagyjából tízmillió év kellene. A GPT-4 paraméterszáma és a tanítás számításigénye nincs nyilvánosan megadva a fejlesztő műszaki jelentésében.

**Forrás:** GPT-3, 2.1. táblázat és D.1 függeléktáblázat [F06] · Az időanalógia kerekített átszámítás a közölt műveletszámból, évi 365,25 nappal · Token [F11] · Paraméter [F09] · GPT-4, 2. szakasz [F08].

## Dia 4: Mitől javult a teljesítmény?

**Idő:** 0:55 perc

**Előadói szöveg:** Először kellett sok, válogatható digitális szöveg. A GPT-3 csapata például szűrte a webes anyagot, és megpróbálta kiszedni a duplikátumokat. A grafikus processzorokkal, vagyis GPU-kkal több számítás futhat párhuzamosan. A Transformer felépítése ezt jól kihasználta a tanításban. A DeepMind egyik kísérletében ugyanannyi számítással egy kisebb, több szövegen tanított modell több tesztfeladatban jobban teljesített nagyobb társánál. Vagyis számít, mire költöd a számítást. A ChatGPT-nél külön tanítás segített abban, hogy a modell párbeszédben használható válaszokat adjon. A chatfelületen ehhez elég volt beírni egy kérdést.

**Forrás:** Adatszűrés és párhuzamos tanítás [F06] · Transformer, 1. és 4. szakasz [F04] · Chinchilla és Gopher azonos tanítási számítás mellett [F07] · ChatGPT és párbeszédre hangolás [F05].

## Dia 5: Machine learning | Minták a példákból

**Idő:** 0:50 perc

**Előadói szöveg:** A machine learning, vagyis gépi tanulás egyik gyakori formájában előre megjelölt példákat adsz. Itt két levél ajánlatkérés, egy másik ügyben érkezett. Egy igazi tanításhoz ennél jóval több és változatosabb példa kellhet. A modell megtanul jelekből következtetni arra, melyik címke illik egy levélhez. Aztán jön egy új üzenet, amelynek még nincs címkéje. A modell arra is ad egy becslést. A használhatóságát olyan példákon nézed meg, amelyeket a tanításkor félretettél.

**Forrás:** Felügyelt tanulás, tanítópéldák és modellértékelés [F10]. A levelek szemléltető minták.

## Dia 6: Deep learning | Mit csinálnak a rétegek?

**Idő:** 1:00 perc

**Előadói szöveg:** A deep learning, vagyis mélytanulás több egymásra épülő számítási réteget használ. Ezek együtt alkotnak egy neurális hálót. A kis pont egy mesterséges neuron, egyszerű számolóegység. Számok érkeznek bele, ő súlyozza és átalakítja őket, majd továbbad egy értéket. A súly az egyik fajta tanulható paraméter. A vonal vastagsága itt ezt szemlélteti. Képfelismerésnél a rétegek az egyszerű jelekből összetettebb mintázatokat építhetnek. Képzeld el úgy, hogy előbb egy élt, aztán egy formát, végül egy cserepet ismersz fel. A 2012-ben bemutatott ImageNet-kísérletben egy mély hálót körülbelül 1,2 millió tanítóképpel, két GTX 580 grafikus processzoron tanítottak.

**Forrás:** Rétegek, neuronok, súlyok és tanult képi reprezentáció [F02], [F09] · ImageNet-tanulmány és hardver [F03].

## Dia 7: Backpropagation | Melyik súlyon állítsunk?

**Idő:** 1:00 perc

**Előadói szöveg:** Az első becslés mellé odatesszük a példához tartozó helyes választ. Kiszámoljuk, mennyire tér el tőle. A *backpropagation*, vagyis hibavisszaterjesztés visszafelé halad a hálón. Azt számolja ki, hogyan változna a hiba, ha egy kicsit változtatnánk az egyes súlyokon. Ezekből az információkból a tanítóeljárás külön lépésben módosítja a súlyokat. A tanítás során sok ilyen lépés történik. Erről már egy 1986-os Nature-cikk is beszámolt. Amikor levelet íratsz a betanított modellel, már a meglévő súlyokkal dolgozik. A chatbe írt módosításod a következő válasz bemenetét változtatja meg.

**Forrás:** Az 1986-os közlemény szerzői jegyzéke [F15] · Visszaterjesztés és optimalizálás [F09] · Szöveges feladat súlyfrissítés nélkül [F06].

## Dia 8: Attention | Mely szövegrészek számítanak itt?

**Idő:** 0:55 perc

**Előadói szöveg:** Az *attention*, vagyis figyelmi mechanizmus abban segít, hogy egy adott szöveghely feldolgozásakor a modell a többi hozzáférhető helyről eltérő mértékben vegyen át információt. Itt az „ajánlatot” szó segít értelmezni, hogy milyen összefüggésben van szó növénygondozásról. A háló számszerű súlyokkal keveri a jeleket. A vastagabb vonal ezt az eltérő súlyt szemlélteti. A modell másik rétegében, vagy ugyanebben a rétegben egy párhuzamos figyelmi számításban más lehet ez a mintázat.

**Forrás:** Súlyozott figyelem és több figyelmi fej, 3.2. szakasz [F04] · Modellfüggő tokenhatárok [F11].

## Dia 9: Transformer | Figyelem, rétegről rétegre

**Idő:** 0:55 perc

**Előadói szöveg:** A Transformer a háló felépítése. Az eredeti, 2017-es tanulmány gépi fordítással mutatta be. Itt azt a változatot látod leegyszerűsítve, amelyet szöveg folytatására használnak. A pozíciók sorrendje bekerül a számításba. A figyelmi rész információt gyűjt a hozzáférhető helyekről. Egy másik rész külön is átalakítja az egyes helyek jeleit. A következő réteg ugyanezt a műveletsort már az átdolgozott jelekkel végzi. Szövegíráskor a modell az addig rendelkezésre álló részből indul ki. A következő szövegrész helye még üres.

**Forrás:** Transformer, sorrend, figyelem, pozíciónkénti háló és a későbbi helyek elfedése [F04] · Transformer-alapú szöveggenerálás [F06], [F08].

## Dia 10: A szövegből tokenek lesznek

**Idő:** 0:55 perc

**Előadói szöveg:** Az input a bemenet, vagyis az, amit a modell megkap. A prompt az a kérés vagy utasítás, amelyben elmondod, mit vársz. Itt az a kérés, hogy írjon rövid választ. Szövegfeldolgozáskor a rendszer tokenekre bontja a szöveget, és minden tokenhez tartozik egy számazonosító. Egy token lehet szó, szódarab, írásjel, akár szóközzel együtt. A pontos vágás és a szám az adott modelltől függ. A vásznon egy kitalált felosztást látsz. Az azonosítók alapján indul el a háló számítása.

**Forrás:** Szöveges utasítás és háttéranyag [F16] · Tokenizálás, szóközök és tokenazonosítók [F11] · Bemeneti reprezentáció [F04].

## Dia 11: A kimenet lépésenként készül

**Idő:** 1:00 perc

**Előadói szöveg:** A prompt mellé adok egy ügyféllevelet is. A háló az addigi szöveg alapján kiszámolja, mely tokenek mekkora eséllyel következhetnek. A generálás ezek alapján kiválaszt egyet. Ez a token a válasz része lesz, és a következő döntéshez már ez is rendelkezésre áll. Így alakul ki a mondat, majd a teljes válasz. Az output a kimenet, itt az olvasható válaszszöveg. A folyamat addig tart, amíg elér egy megállási feltételt. Az is jól mutatja a különbséget, hogy a modellnek egy mondat folytatását lehet könnyű kiválasztania, miközben az ajánlat pontos árát még nem kapta meg.

**Forrás:** Következő token előrejelzése és autoregresszív generálás [F06], [F08] · Kimenet és tokenkeret [F12]. A mondat és az esélyoszlopok kitaláltak.

## Dia 12: Mi gyűlik össze egy chatben?

**Idő:** 1:00 perc

**Előadói szöveg:**

- *0–6 mp, a szabálykártya belép.* „Figyeld a húsz növényes szabályt. A kontextus az az anyag, amelyhez a modell egy válasz készítésekor hozzáfér.”
- *6–13 mp, a sáv megtelik.* „Ide kerülhet az aktuális kérés, a korábbi üzenetekből vagy forrásokból átadott rész, és az alkalmazás utasítása. Minden újabb körben gyarapodhat ez a csomag.”
- *13–21 mp, a szabálykártya kikerül.* „A kontextusablak véges. Tokennel mérjük, és helyet kell hagyni a válasznak is.”
- *21 mp után, a kártya már kimaradt.* „A chat bal oldalán továbbra is olvasható, pedig ebben a példában már kimaradt abból, amit a modell megkapott. Az alkalmazás válogathat vagy tömöríthet is. Az számít, mi jut be az adott válaszhoz.”

**Forrás:** Beszélgetési állapot, bemeneti és kimeneti tokenek [F12] · Előzmények tömörítése [F17] · A kitalált csomaghatár [H05].

## Dia 13: Hallucináció, drift, felejtés

**Idő:** 1:10 perc

**Előadói szöveg:** Három dolog romolhat el. Hallucináció, amikor hihetőnek hangzó, téves állítás kerül a válaszba. Például a modell kitalál egy fix árat a huszonöt növényre. Ez rövid beszélgetésben is megtörténhet. A szöveg folytatására adott becslés önmagában nem ellenőrzi a tényeket. A drift itt azt jelenti, hogy menet közben elcsúszik a feladat. Egy rövid ügyfélválaszt kértél, aztán a korábbi ötletelésből egyszer csak kampányterv lesz. Egy korai feltételezés a következő válaszokban is továbbélhet. Amit felejtésnek érzékelsz, annak több oka lehet. Lehet, hogy az előzmény már nem került a modell elé. Az is lehet, hogy a szabály ott van a hosszú bemenet közepén, és a modell nem használja jól. Az elsőnél vissza kell adni a forrást. A másodiknál emeld ki, melyik szabály számít a döntéshez.

**Forrás:** Valószerű téves állítások [F13] · Korai feltételezések továbbélése több fordulóban [F14] · Kontextusablak és a kontextuson belüli hely hatása [F12], [F18] · Mintapélda [H05].

## Dia 14: Adj elég hátteret, és hagyj helyet a válasznak

**Idő:** 0:45 perc

**Előadói szöveg:** Ha egy hosszú chatben eljutottál a feladathoz, foglald össze a friss célt és a jóváhagyott döntéseket. Add mellé az idevágó forrásrészt, például a csomaghatárt és azt, mit kérjünk húsz növény fölött. A régi ötletváltozatokat hagyd ki. Új munkához ezzel a rövid, ellenőrzött csomaggal indíthatsz friss beszélgetést. Erre gondolj tokenoptimalizálás alatt. Minden feladathoz add át azt, ami a döntéshez kell, és hagyj benne helyet a válasznak. Ha összefoglalót használsz, vesd össze az eredeti forrással.

**Forrás:** Releváns kontextus és tömörítés [F17] · Kontextuskeret [F12] · Mintaforrás [H05].

## Dia 15: A jó prompt megadja a feladatot

**Idő:** 1:10 perc

**Előadói szöveg:** Egy jó prompt először megadja, mit csináljon az AI. Kérheted így. „Írj válaszpiszkozatot a beérkezett ajánlatkérésre.” A következő a címzett. „Egy irodavezetőnek írsz, aki először érdeklődik nálunk.” Ettől már van helyzete a levélnek. A harmadik a forrás. „A mellékelt ügyféllevél és a Cég-DNS ajánlati szabályai alapján dolgozz.” A Cég-DNS egy rövid céges alapanyag arról, kinek mit adsz el, milyen határokkal és milyen hangon. A konkrét forrásrészletet is tedd oda. Például az alapcsomag húsz növényig szól, a kérés huszonötre érkezett. Gondold végig, mi változik a válaszban, ha ezt az utolsó sort kiveszed.

**Forrás:** Feladat, szerep és forrás megadása [F16] · A Cég-DNS jelentése és a kitalált ajánlatkérés [H01], [H05], [H06].

## Dia 16: A jó prompt megmondja, mikor kész

**Idő:** 1:10 perc

**Előadói szöveg:** A negyedik a kimenet alakja. „Adj hárommondatos levélpiszkozatot.” Az ötödik a határ. „Húsz növény fölött kérj bejárást, az árat hagyd nyitva.” A hatodik egy rövid példa, ha fontos a hang. „Mikor lenne jó a bejárás?” Ettől a modell lát egy mondatot, ami illik a célhoz. A hetedik a kész feltétel. „A levél alatt jelöld, melyik üzleti állítás melyik forrásból származik. Ha valami hiányzik, írd oda, hogy nincs megadva.” Gondold végig, melyik pont hiányzik a leggyakrabban a saját kéréseidből. Az itt kért forrásjelölést te is olvasd össze a szabállyal.

**Forrás:** Kimenet, korlát, példák és forrás [F16] · Ellenőrizhető állítás és emberi döntés [H02], [H04] · Kitalált üzleti példa [H05].

## Dia 17: Egyetlen mondat, amivel elindulsz

**Idő:** 0:45 perc

**Előadói szöveg:** És most jön a jó hír. Ezt a hét pontot nem kell fejben tartanod. Ennyivel is elindulhatsz: „Írj nekem egy jó promptot arra, hogy…” Mondjuk: „Írj nekem egy jó promptot arra, hogy megválaszoljam egy új érdeklődő ajánlatkérését.” Ha kell, kérd meg, hogy kérdezzen rá a hiányzó üzleti részletekre. Nézd át, amit írt, add hozzá a tényleges forrásokat, aztán használd az elkészült promptot. A következő lépésben ugyanezt a tisztázást már beépítjük egy több szereplős munkamenetbe.

**Forrás:** Promptírási összetevők [F16] · Kitalált megfogalmazás a WEN-1229 briefje alapján.

## Dia 18: Egy kérés, három AI-szerep

**Idő:** 1:05 perc

**Előadói szöveg:** Az agent itt egy szerepre felkért AI-segítő, amely megadott céllal, forrásokkal és szabályokkal végez el egy feladatot. Az agentikus működésben egymásra épülő lépésekben dolgoznak. Az orchestrator a Karmester. Összerakja és kiosztja a munkát. A maker a Készítő. Levélnél ő az Író. A reviewer az Ellenőr. Megnézi a kész változatot a források és a kész feltételek alapján. A célt és a küldésről szóló döntést te adod. A mai csomagban előre megírt szerepleírásokat kapsz. A Karmester a szerepek között vált, az Ellenőrt külön beszélgetésben indítjuk. A következő dia egy kitalált levelezési esetet játszik végig. A mai gyakorlatban te nyitsz új beszélgetést az Ellenőrnek, és bemásolod a Karmestertől kapott csomagot.

**Forrás:** Agentek és összehangolt munkamenetek [F19] · A workshop szerepei és működése [H01], [H02], [H06] · Független ellenőrzés [H03], [H04].

## Dia 19: Egy levél útja az emberi döntésig

**Idő:** 2:05 perc

**Előadói szöveg:**

- *0–11 mp.* „Huszonöt növényre kérnek ajánlatot. A Karmester megkapja a célodat, és összegyűjti a levelet meg a Cég-DNS szabályait.”
- *11–22 mp.* „Ha hiányzik egy döntés, kérdez. Itt azt tisztázza, hogy első körben egy bejárást egyeztető levél legyen a cél.”
- *22–34 mp.* „Ha összeállt a feladat, jóváhagyod a tervet. A Karmester megírja az utasítást, ha kell, feladatkezelőbe teszi. Az Írót a forrásokkal együtt indítja.”
- *34–45 mp.* „A Készítő itt az Író. Dolgozik a levélen, és visszaadja a piszkozatot. Nézd, ebben már van egy fix ár.”
- *45–58 mp.* „A Karmester friss beszélgetésben indítja az Ellenőrt. Megkapja a vizsgált változatot, az eredeti forrásokat és az ellenőrzőlistát. Az Író gondolatmenete kimarad.”
- *58–69 mp.* „Az Ellenőr bizonyítékkal és súlyossággal adja vissza a leleteket. Itt az ár a blokkoló. A furcsán hangzó ismétlés apró észrevétel.”
- *69–82 mp.* „A Készítő elfogadja az árra vonatkozó észrevételt. A hiányzó dátumot vitatja. A levélben időpontot kell kérni. Ezt a forrással együtt rögzíti.”
- *82–94 mp.* „Kiveszi az árat, és bejárást kér. A módosított változat visszamegy az Ellenőrhöz. Az új változatra kell az ellenőrzés.”
- *94–105 mp.* „Az Ellenőr ezt újra összeveti a szabállyal. Blokkoló, súlyos vagy közepes hibánál javítunk. Az aprót feljegyezzük. Ha elakad a kör, továbbadjuk a bizonyítékot és a nyitott kérdést.”
- *105–116 mp.* „Most kapsz egy ellenőrzött piszkozatot, mellé az apró nyitott pontot. Te döntesz, javítod-e még, és elküldöd-e.”
- *116–125 mp.* „A kör végén a Karmester beírja a munkanaplóba, mi történt, hol értettük félre egymást, és mi lett a megoldás. Ebből javítjuk a folyamatot és az utasításokat.”

**Forrás:** Cél, terv, jóváhagyás, szerepkiosztás és küldési kapu [H01] · Friss beszélgetés, bemenet, súlyosság és döntés [H02] · Korlátozott ciklus, bizonyíték, vitás lelet, ismételt ellenőrzés [H03], [H04] · Kitalált üzleti szabály [H05]. A feladatkezelő a briefben kért választható lépés. A szemléltetésben a naptárészrevételt a friss ellenőrzés feloldja. Fennmaradó vita esetén független harmadik ellenőr dönt. Az idő- vagy körkeret elérésekor a Karmester a bizonyítékot és a döntendő kérdést adja tovább. Apró nyitott pontot jegyzünk fel, a workshop ellenőrzőlistáján közepes vagy súlyos hiba javítást kér.

## Dia 20: 09:20 | Kezdjük a Cég-DNS-sel

**Idő:** 0:55 perc

**Előadói szöveg:** Végig ugyanaz a forrás döntötte el, mit mondhatunk. Ezt a céges alapot rakjuk most össze. Kilenc húszkor a Cég-DNS-sel kezdünk. Összeszeded, kinek adsz el, mit ajánlasz, mit vállalsz és mi az, amihez még nincs adatod. Mellétesszük a céged hangját, és kipróbálod a Karmester, az Író és az Ellenőr első menetét. Ha nincs kéznél saját anyagod, az IrodaLiget mintájával végig tudsz menni. Ugyanerre az alapra épül a mai tartalom, az ügyfélszerzés, az ajánlat, aztán a nap végi folyamatpróba a levelekkel és a CRM-mel, az ügyfélnyilvántartással. A nap során egy ügyfél útját visszük végig. Most nyisd meg a munkacsomagot, és keresd elő azt a forrást, amelyik a legjobban leírja a fő ajánlatodat.

**Forrás:** A nap fonala és 09:20-as kezdés [H07] · A blokk bemenete, mentőút és várható kimenete [H06], [H08].

## Időösszesítés

A 20 fő dia összege **20:00 perc**, 09:00 és 09:20 között. Az animációk ideje ebben benne van. A két tartalék dia együtt **2:00 perc**, külön kérdéskörben használható.

## Dia 21: Tartalék dia | Ugyanannyi számítás, több szöveg

**Idő:** 1:00 perc, a fő részen kívül

**Előadói szöveg:** Ha kíváncsi vagy, hogyan lett az adatmennyiségből jobb teljesítmény, itt a konkrét kísérlet. A Gopher 280 milliárd paraméteres volt. A Chinchilla 70 milliárd paraméterrel, körülbelül négyszer annyi tanítótokenen készült. A kettőre ugyanannyi tanítási számítást szántak. A kisebb modell a tanulmány számos tesztfeladatában jobb eredményt ért el. Itt az számított, hogyan osztották el a számítást a modell mérete és az általa látott tanítóanyag között.

**Forrás:** Chinchilla összehasonlítás, kivonat és 4. szakasz [F07].

## Dia 22: Tartalék dia | Egyben a kipróbálható prompt

**Idő:** 1:00 perc, a fő részen kívül

**Előadói szöveg:** Ha szeretnéd kipróbálni, itt egy kitalált ajánlatkérés, benne a céges szabállyal. Olvasd el a választ, és keresd meg benne a következő lépést. Megkérdezi, mikor jó a bejárás? Maradt benne fix ár? A forrásmegjelölés külön legyen, hogy magát a levelet egyben tudd átolvasni. A mintaválasz például megköszöni a megkeresést, bejárást javasol, és kér egy alkalmas időpontot. Ezt a két feltételt már te is meg tudod nézni.

**Másolható prompt az előadói jegyzetből:**

> Írj hárommondatos magyar válaszpiszkozatot egy irodavezetőnek, aki ezt írta: „Huszonöt irodai növény rendszeres gondozására kérünk ajánlatot.” A kitalált IrodaLiget Cég-DNS-ének szabálya: az alapcsomag legfeljebb húsz növényre szól. Húsz növény felett kérj bejárást, a gondozás díja nincs megadva. Használj barátságos, gyakorlatias hangot. Mintakérdés: „Mikor lenne jó a bejárás?” A levél után külön sorban írd le, melyik forrásmondat támasztja alá a következő lépést. A levélben hagyd nyitva az árat.

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
| H01 | Karmester: cél, forrás, terv, kiosztás, emberi jóváhagyás és küldési kapu. | Karmester (orchestrator) | [Workshop szerepleírás](../../materials/starter-kit/agents/orchestrator.md) | 2026-11-19 |
| H02 | Ellenőr: friss beszélgetés, forrásból ellenőrzés, súlyosság, emberi döntés. | Ellenőr (reviewer) | [Workshop szerepleírás](../../materials/starter-kit/agents/reviewer.md) | 2026-11-19 |
| H03 | Emberi cél, pontos átadási feltételek, független ellenőrzés és a ciklus korlátja. | Agentic engineering method: Principles | [Wenova OS, a helyben megnyitott revízió](https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/01-principles.md) | 2026-11-19 |
| H04 | Ellenőrzés és újraellenőrzés, bizonyíték, súlyosság, vita és nyitott kisebb pontok. | Agentic engineering method: Review and triage | [Wenova OS, a helyben megnyitott revízió](https://github.com/cspiya/wenova-os/blob/f450f6fd91e87eca4c24725e1b1541aa61ecc817/09-engineering/agentic-engineering-method/06-review-and-triage.md) | 2026-11-19 |
| H05 | Kitalált cég, húsz növényes alapcsomag, nagyobb kérésnél bejárás, forrás- és hiányjelölés. 3., 4., 5. és 7. szakasz. | IrodaLiget Cég-DNS | [Workshop mintafájl](../../materials/scenarios/office-plants/outputs/company-dna.md) | 2026-11-19 |
| H06 | A Cég-DNS jelentése, a szerepleírások futtatása, a következő blokk kimenete és a kitalált cég mint mentőút. | Cég-DNS és saját AI-csapat | [Üzleti alapok, résztvevői modul](../../materials/modules/01-business-foundations.md) | 2026-11-19 |
| H07 | A 09:00–09:20-as nyitás, a 09:20-as blokk és a nap fonala. | A nap menete | [Workshop menetrend](../../materials/schedule.md) | 2026-11-19 |
| H08 | Felvezetés a Cég-DNS bemutatójához, az IrodaLiget-minta és az első ellenőrzött próbafutás. | 01-business-foundations, belső oktatói jegyzet | [Oktatói jegyzet](../instructor-notes/01-business-foundations.md) | 2026-11-19 |
