# Szerzői kézikönyv

[HTML-változat](index.html)

## Tartalom

- [Tananyagkészítés lépésről lépésre](#workflow)
- [Ha saját eszközzel készíted az anyagot](#flexible-authoring)
- [Mit várunk egy jó tananyagtól?](#requirements)
- [Sablon és közös megjelenés](#template)
- [Review és elfogadás](#review)
- [Közös ellenőrzőlista](#checklist)
- [Másolható review-prompt](#review-prompt)
- [Jegyzőkönyv és ellenőrzési eszköz](#report)
- [Oktatói jegyzetek kapcsolása](#notes)
- [Résztvevői kiadás](#release)
- [Automatikus generálás és ellenőrzés](#automation)
- [Közös AI-instrukciók](#ai-rules)

<a name="main"></a>

Authoring · belső

A szakmai tudást az előadó adja, a fájlokat az AI kezeli. Egy közös munkafolyamat a tervtől az elfogadásig.

<a name="workflow"></a>

## Tananyagkészítés lépésről lépésre

1. Nyisd meg ezt a repót Claude Code-ban vagy Codexben, és mondd meg, melyik modult készíted.
2. Add át a meglévő jegyzeteidet, a célközönséget és a kívánt eredményt.
3. Az AI tisztázza a hiányzó információkat és tervet készít. Te jóváhagyod vagy módosítást kérsz.
4. A jóváhagyás után az AI a közös sablonból elkészíti a modul Markdown-forrását, majd legenerálja a HTML-nézetet. A böngészőben átnézed, beszélgetésben kéred a javításokat.
5. Egy külön review-beszélgetés ellenőrzi a fájlokat. Az előadó végigpróbálja a feladatot, és a szakmai felelős elfogadja.

<a name="workflow-1"></a>

### Induló prompt

```text
Ebben a repóban szeretnék tananyagot készíteni.
Olvasd el az AGENTS.md instrukciót és az authoring/README.md kézikönyvet.
Partner / előadó: [név]
Téma és célközönség: [röviden]
Meglévő forrásaim: [fájlok vagy linkek]
A résztvevő ezt készítse el: [ha már ismert]
Keresd meg a megfelelő materials/modules/ modult.
Kérdezz a hiányzó lényegi információkról, majd adj rövid tervet.
Fájlokat csak a jóváhagyásom után szerkessz.
A közös authoring/template.md szerkezetével és materials/assets/notebook.css stílussal dolgozz.
```

<a name="workflow-2"></a>

### Javítás kérése

> A gyakorlatot rövidítsd 15 percre, és adj hozzá egy magyar KKV-s példát. A közös megjelenést tartsd meg.

> Magyarázd el ezt kezdőknek is érthetően, majd adj másolható promptot és konkrét kész feltételeket.

<a name="workflow-3"></a>

### Átadás

Az AI sorolja fel a változásokat, az ellenőrzés eredményét és a nyitott kérdéseket. A közös repóba küldést külön kérd: „Tedd a jóváhagyott változtatásokat külön ágra, commitold, pushold, és készíts pull requestet szakmai ellenőrzésre.”

<a name="flexible-authoring"></a>

## Ha saját eszközzel készíted az anyagot

Nem kell technikai szerzővé válnod. Dolgozhatsz a megszokott eszközöddel: Worddel, PowerPointtal, saját HTML-lel vagy más, előre egyeztetett formátumban. A közös sablon tartalmi szerkezetét kérjük követni, amennyire az anyaghoz illik: cél, magyarázat, példa, feladat, kész feltétel és segítség.

1. Egyeztesd a témát, a formátumot és az átadási határidőt a koordinátorral; nevezzetek meg egy szerkesztőt az integráláshoz.
2. Add át az anyagot a szerkesztőnek, a képekkel, szükséges mellékletekkel és használati jogokkal együtt. A PR-ban vagy review-jegyzőkönyvben rögzítjük az eredeti forrást, az oktatót és az integrálás felelősét.
3. A szerkesztő AI segítségével elkészíti a repo Markdown-forrását, a kapcsolódó HTML-nézetet és a szükséges hivatkozásokat. Ezt követően itt vezetjük a tartalmi javításokat; ha új külső változatot adsz át, a szerkesztő összevezeti őket.
4. Te ellenőrzöd, hogy hűen adtuk-e vissza a mondanivalódat. Ugyanaz a szakmai review és gyakorlati próba következik, mint a közvetlenül itt készített anyagnál.

Az oktatónak nem kell Git-parancsokat, telepítést vagy ellenőrző scripteket futtatnia. Ezt az integrálást végző szerkesztő és az AI intézi. A saját formátum választása elfogadott munkamód.

**Egyedi prezentáció:** a saját kialakítású HTML is megtartható. Legyen mellette azonos nevű Markdown-forgatókönyv a teljes érdemi szöveggel, a diák/szakaszok sorrendjével, az ábrák jelentésével és a másolható promptokkal. A szerkesztő a kettő egyezőségét külön ellenőrzi; a technikai jelölést az [automatizálási leírás](#automation) szerint ő kezeli. Oktatói megjegyzés továbbra is külön, az operations alatt marad.

<a name="requirements"></a>

## Mit várunk egy jó tananyagtól?

Magyar, gyakorlati tananyag: emberi cél → AI-val végzett feladat → eredmény → ellenőrzés → következő lépés.

- Az új anyag a authoring/template.md mintáját követi, a materials/assets/notebook.css közös megjelenésével. A szerző az AI-val beszélget; nem tölt ki technikai adatlapot.
- Legyen világos cél, előfeltétel, rövid magyarázat, emberi döntés, másolható prompt, időzített feladat, kész feltétel, elakadási segítség és továbbvihető eredmény. A sablon tíz szakasza ezt mutatja; ne szaporíts üres fejezeteket csak a forma kedvéért.
- A résztvevői szöveg és a másolható prompt magyar. A fájlnevek rövid angol nevek.
- Saját üzlet és személyes LinkedIn-kapcsolat nélkül is végigjárható példa szükséges.
- A statikus minta nem élő eszközvégrehajtás. Jelöld, hogy valódi rendszerben, tesztkörnyezetben vagy szimulációban dolgozunk.
- Ne találj ki referenciát, vállalást vagy kipróbált integrációt. Kitalált példát jelölj kitaláltnak.
- Az előző modul eredményét használd; ne kérd be ugyanazt újra. Öt perc elakadás után legyen konkrét mentőút.
- Opcionális bővítés ne legyen a következő modul előfeltétele.
- Publikálást, küldést és üzleti vállalást a résztvevő tudatosan hagy jóvá.
- Státuszok: draft (váz), review (kidolgozott, próbára vár), ready (szakmailag és oktatóilag kipróbált).

A modul vázából és a közös mintaleckéből indulj ki; az előadóval jóváhagyott terv szerint dolgozz.

<a name="template"></a>

## Sablon és közös megjelenés

[Másolható Markdown-sablon](template.md) · [Kidolgozott mintalecke](../materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience)

Egy modul egy Markdown-forrás és a belőle generált HTML-oldal. A szakaszok stabil azonosítókat kapnak. A magyarázat, a másolható prompt, a feladat, az ellenőrzés és az elakadási segítség egységes blokkokban jelenik meg. A közös CSS a materials/assets/notebook.css fájlban található.

Magyar tartalom, angol fájl- és mappanevek. A sablon másolásakor az AI igazítsa a relatív hivatkozásokat. A résztvevői oldal helyi fájlként is olvasható legyen.

<a name="review"></a>

## Review és elfogadás

<a name="review-1"></a>

### Ki mit csinál?

| Szerep | Feladat | Döntés |
| --- | --- | --- |
| Szerző partner + AI | Jóváhagyott tervből tananyagot készít és javít | Review-ra átadja |
| AI-reviewer új beszélgetésben | Fájlokból, a közös mércével ellenőriz | Hibákat és bizonyítékokat ad, nem hagy jóvá |
| Másik előadó / kijelölt próbarésztvevő | A leírás alapján végigjárja a feladatot | Rögzíti, működött-e, mennyi idő alatt |
| Modul szakmai felelőse | A jegyzőkönyv és próba alapján dönt | Elfogad / javításra visszaad |
| Wenova koordinátor | Modulátadások és teljes nap főpróbája | Teljes képzés megtarthatóságáról dönt |

A konkrét embereket a jegyzőkönyvben kell megnevezni. A szerző saját ellenőrzése hasznos, de nem nevezhető független review-nak.

<a name="review-2"></a>

### Hat lépés, egy rövid jegyzőkönyv

1. **Terv:** célközönség, előfeltétel, tanulási eredmény, időkeret, gyakorlat, minta és következő modul. Az előadó jóváhagyja.
2. **Átadás:** a szerző megadja az ellenőrzendő Markdown-forrást és HTML-nézetet, kapcsolódó bemeneteket, mentőutat és a nyitott kérdéseket. Állapot: review.
3. **AI-ellenőrzés:** új beszélgetés, közös [prompt](#review-prompt), [ellenőrzőlista](#checklist), konkrét helyek és bizonyítékok. Nem módosítja a tananyagot review közben.
4. **Javítás:** a szerző jóváhagyott javítási terv szerint dolgozik; az ellenőrző lezárja vagy nyitva hagyja az egyes hibákat. Tartalmi változás után az érintett gyakorlatot újra kell próbálni.
5. **Emberi próba:** az ellenőrző a leírás alapján elkészíti az eredményt, rögzíti az időt és az elakadásokat. Kipróbálja a minta/mentőutat, és megnyitja a tananyagot asztali, mobil szélességű és nyomtatási nézetben.
6. **Elfogadás:** a szakmai felelős a bizonyítékok alapján dönt. Rögzíti a dátumot és a pontos elfogadott változatot.

<a name="review-3"></a>

### Eredmények és hibasúly

Minden ellenőrzési pont eredménye: **Megfelel / Javítandó / Nem ellenőrzött**. Mindegyikhez kell bizonyíték vagy a hiány pontos leírása. Csak az előre feltételes pont jelölhető „Nem alkalmazható”-nak, rövid indoklással.

- **Blokkoló:** kötelező feltétel sérül. Például nem követhető feladat, hiányzó bemenet, hibás szakmai állítás, nem működő szükséges link, el nem végzett kötelező próba. Nem fogadható el.
- **Javaslat:** nem akadályozza a megértést vagy végrehajtást; például rövidebb megfogalmazás. Nem blokkol, de a felelős rögzítse, javítják-e.

Nincs átlagpontszám: tíz sikeres ellenőrzés nem ellensúlyoz egy blokkoló hibát. A kötelező „Nem ellenőrzött” pont nyitott elfogadási feltétel.

<a name="review-4"></a>

### Állapotok

- **draft:** hiányos vagy még kidolgozatlan tananyag.
- **review:** elkészült, de az ellenőrzések, javítások vagy emberi próba még nyitottak.
- **ready:** minden kötelező pont megfelel, a feltételes kivételek indokoltak, nincs nyitott blokkoló hiba, és van megnevezett szakmai jóváhagyó dátummal.

Új érdemi módosítás után a korábbi elfogadás nem öröklődik automatikusan. Rögzítsd az új változatot; nyisd újra az érintett pontokat. Közös CSS-változás minden HTML mobil- és nyomtatási próbáját érinti. Puszta elírás javításánál elég az érintett szöveg és link ellenőrzése, az indok kerüljön a jegyzőkönyvbe.

<a name="review-5"></a>

### Verzió és bizonyíték

A jegyzőkönyv tartalmazza a dátumot, ellenőrzőt, fájlokat, Git commitot (ha van), valamint a módosított helyi fájlok SHA-256 azonosítóit. A commit önmagában nem azonosítja a még nem commitolt munkát. A CSS, bemeneti minta és szükséges függő fájlok azonosítója is kell.

Fájlon belüli bizonyíték például: `materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience--steps`, a konkrét mondat és az elvégzett ellenőrzés. Böngészős bizonyíték: böngésző, dátum, nézetméret, ellenőrzött művelet és eredmény; szükség szerint képernyőkép. Szakmai bizonyíték: elkészült kitalált mintakimenet és a kész feltételek értékelése. Valós résztvevői adatot ne ments a repóba.

<a name="review-6"></a>

### A teljes nap főpróbája

A modulonkénti ready mellett egy esetet végig kell vezetni: üzleti alaplap → kampány → leadkezelés → ajánlat → átadás. Minden következő partner ténylegesen átveszi az előző eredményt. Külön próba kell a bekötött eszköz nélküli mintaútra. Rögzítjük az összidőt, az átadási hibákat és a javításokat. A működő mintalecke nem bizonyítja a teljes képzés készültségét.

<a name="checklist"></a>

## Közös ellenőrzőlista

Minden pontot külön értékelünk: **Megfelel / Javítandó / Nem ellenőrzött**, pontos bizonyítékkal. A kötelező pontok mind blokkolják az elfogadást, ha javítandók vagy nincsenek ellenőrizve. A feltételes pontnál indokolt „Nem alkalmazható” megengedett. Döntési szabály: [review-folyamat](#review).

<a name="checklist-1"></a>

### T – Technikai alapok

| ID | Kötelező elvárás | Ellenőrzés |
| --- | --- | --- |
| T1 | Önálló HTML, magyar nyelvjelölés, értelmes cím, egy főcím, mobil viewport | Forrásolvasás és helyi megnyitás; a script csak a forrásrészét igazolja |
| T2 | A közös CSS elérhető; a tananyag helyi fájlként, offline is olvasható | Relatív útvonalak, külső erőforrások és CSS-hivatkozások ellenőrzése |
| T3 | A szükséges linkek és horgonyok működnek; nincs ismétlődő HTML-azonosító | Helyi célfájlok és HTML-horgonyok ellenőrzése; szükséges külső linkek külön megnyitása |
| T4 | Nincs kitöltetlen sablonszöveg az átadott tananyagban; státusz, partner, időkeret, leckeazonosító olvasható | Forrás és látható szöveg átnézése; a sablonfájl maga nem átadott tananyag |
| T5 | Olvasható asztali, mobil (390 és 320 px) és nyomtatási nézet; billentyűzettel követhető | Tényleges böngészős próba: nincs vízszintes kilógás, prompt nem vágódik le, fókusz látszik, linkek elérhetők |

<a name="checklist-2"></a>

### R – Tartalmi review

| ID | Kötelező elvárás | Ellenőrzés |
| --- | --- | --- |
| R1 | Egyértelmű célközönség és konkrét tanulási eredmény | A modul és lecke alapján megmondható, kinek szól és mit készít el |
| R2 | Az előfeltételek, bemenetek és szükséges hozzáférések teljesek | Minden szükséges fájl elérhető; fizetős vagy külön fiókot igénylő lépés feltétele tisztázott |
| R3 | A másolható prompt önmagában használható az előírt csatolmányokkal | Nem hivatkozik át nem adott „fenti”/„alábbi” tartalomra; bemenet, feladat és ellenőrzési feltétel eljut az AI-hoz |
| R4 | A magyarázat kezdő üzleti résztvevőnek is követhető | Fogalmak és döntések példával elmagyarázva; nincs rejtett technikai lépés |
| R5 | A gyakorlat lépései és kész feltételei konkrétak | Elkészíthető, menthető eredmény; a résztvevő ellenőrizni tudja, kész van-e |
| R6 | Létezik elakadási és hiányos bemeneti út | Saját üzlet nélkül is van összefüggő minta; opcionális feladat nem feltétele a folytatásnak |
| R7 | Állítások, példák és végrehajtási mód őszintén jelöltek | Nincs kitalált referencia vagy igazolatlan eredmény; minta/live/sandbox/simulation megkülönböztetett, nincs valós titok/ügyféladat |
| R8 | Az eredmény a következő lépésben ténylegesen használható | Mezők és fájlnevek egyeznek; a következő lecke kidolgozott, vagy az átadás a teljes tanfolyamhoz még nyitottként szerepel |

<a name="checklist-3"></a>

### P – Próba és elfogadás

| ID | Elvárás | Ellenőrzés |
| --- | --- | --- |
| P1 | Kötelező: másik előadó/résztvevő végigpróbálta a normál feladatot | Név, dátum, tényleges idő, eredmény, kész feltételek; nem AI-időbecslés |
| P2 | Kötelező: a minta- és mentőút is működik | Hiányos bemenettel végzett próba, mentett eredmény, folytatás bizonyítéka |
| P3 | Feltételes: az ígért integrációt / kísérőfolytatást kipróbáltuk | Ha tanított lépés, környezet, fiók/csomag, dátum és megfigyelhető eredmény kell. Ha nincs ilyen lépés, ezt indokoljuk |
| P4 | Kötelező: a kijelölt szakmai felelős elfogadta a vizsgált változatot | Név, dátum, fájlváltozat; nincs nyitott blokkoló vagy nem ellenőrzött kötelező pont |

A T1 forrásellenőrzése például megfelelhet, miközben a teljes T1 a helyi megnyitás hiánya miatt még „Nem ellenőrzött”. Részbizonyítékból ne készíts teljes megfelelést. A mechanikus script eredményét és az összesített minősítést külön kezeld.

<a name="review-prompt"></a>

## Másolható review-prompt

Nyiss új Claude/Codex beszélgetést a repó mappájában. A szögletes zárójelben lévő részt cseréld ki; a technikai ellenőrzést is az AI végzi.

```text
Tananyag-reviewt kérek ebben a repóban.
Ellenőrzendő anyag: [a Markdown-fájl vagy modul útvonala]
Kapcsolódó saját megjegyzésem: [ha van]

Olvasd el az AGENTS.md / CLAUDE.md közös instrukcióit, majd a
authoring/README.md #review és #checklist szakaszait.
Ez a review és a jegyzőkönyv elkészítése jóváhagyott feladat;
a tananyagot most ne módosítsd.

A fájlokból dolgozz, ne a szerző korábbi beszélgetésére hagyatkozz.
Olvasd el a Markdown-forrást, a generált HTML-t, a CSS-t, a bemenetet, a mintát, a mentőutat,
a modul áttekintőjét és a következő lecke bemenetét.
Futtasd az npm run check és npm test ellenőrzéseket. A technikai ellenőrzéseket te végezd el.

Értékeld külön a T1–T5, R1–R8, P1–P4 pontokat.
Eredmény: Megfelel / Javítandó / Nem ellenőrzött.
A feltételes pontnál indokold, ha nem alkalmazható.
Minden megállapításhoz adj pontos fájlt, szakaszt és bizonyítékot.
Különböztesd meg a blokkoló hibát a javítási javaslattól.
A promptot vizsgáld önállóan bemásolva: tudja-e az AI, miből dolgozzon,
milyen eredményt készítsen, és mi alapján ellenőrizze?

A rendelkezésedre álló böngészős próbákat is végezd el.
Ha nincs böngésző vagy integrációs hozzáférésed, ezt írd le;
ne jelöld a próbát sikeresnek. Ne küldj valódi üzleti üzenetet.
Az emberi időmért próbát és szakmai jóváhagyást ne helyettesítsd AI-becsléssel.

Ments jegyzőkönyvet a authoring/qa/reports/ mappába a kézikönyv #report szakasza alapján.
Rögzítsd a vizsgált fájlok SHA-256 azonosítóit, és jelezd,
ha a Git commit mellett helyi módosításokat vizsgálsz.
Ne írd felül a korábbi reviewt; új ellenőrzés kapjon új fájlt.
Összesítsd a blokkolókat, majd adj rövid javítási tervet.
A tananyagot ne jelöld ready-nek és ne publikáld.
```

<a name="report"></a>

## Jegyzőkönyv és ellenőrzési eszköz

- Anyag / modul:
- Szerző:
- AI-reviewer / külön beszélgetés vagy saját ellenőrzés:
- Próba végzője:
- Szakmai jóváhagyó:
- Dátum:
- Ellenőrzött fájlok, commit és SHA-256 azonosítók:
- Összesítés: javításra visszaadva / emberi próbára vár / elfogadva

<a name="report-1"></a>

### Eredmény a közös ellenőrzőlista szerint

| Pont | Eredmény | Bizonyíték / pontos hely / mi hiányzik |
| --- | --- | --- |
| T1–T5, R1–R8, P1–P4 | Pontonként külön sorban kitöltendő | Ne maradjon összevont minősítés |

<a name="report-2"></a>

### Hibák és javítások

| Hiba | Súly | Pontos hely | Miért probléma? | Elvárt javítás | Felelős | Állapot és újraellenőrzés |
| --- | --- | --- | --- | --- | --- | --- |
| H1 | Blokkoló / javaslat |  |  |  |  |  |

<a name="report-3"></a>

### Próba

- Bemenet, környezet és hozzáférések:
- Eltelt idő:
- Elkészült eredmény és mentés helye:
- Kész feltételek értékelése:
- Hiányos bemenet / mentőút eredménye:
- Asztali / mobil / nyomtatási / billentyűzetes megnyitás:
- Következő modul átvételi eredménye:

<a name="report-4"></a>

### Döntés

- Nyitott blokkolók és nem ellenőrzött kötelező pontok:
- Elfogadott kivételek, indokkal (csak feltételes pontok):
- Következő lépés, felelős, határidő:
- Szakmai elfogadás neve és dátuma: csak valódi jóváhagyás után tölthető ki.

A technikai ellenőrzést az AI végzi: `node authoring/qa/validate.cjs materials/modules/01-business-foundations.html`. Az eredmény a fájlok szerkezeti ellenőrzését igazolja; a böngészős és emberi próbát külön rögzítjük.

[Mintalecke tartalmi review](qa/reports/sample-review.md) · [Szerkezeti és megosztási ellenőrzés](qa/reports/structure-review.md)

<a name="notes"></a>

## Oktatói jegyzetek kapcsolása

A tananyag a materials/modules/ mappában, a belső jegyzet az operations/instructor-notes/ mappában van. Az oktatói oldal bal oldalán a tényleges tananyag jelenik meg, jobb oldalon a hozzá kapcsolt jegyzetek. A tananyagszöveget nem másoljuk a jegyzetbe.

Minden jegyzet konkrét szakaszra hivatkozzon, például `01-business-foundations.01-offer-and-audience--prompt`. Szakasz átnevezésekor az AI frissítse és ellenőrizze a kapcsolódó jegyzetlinkeket. A résztvevői oldalon ne legyen belső jegyzet, megjegyzésbe rejtett instrukció vagy az operations mappára mutató hivatkozás.

[Üzleti alapok – oktatói nézet](../operations/instructor-notes/01-business-foundations.md)

<a name="release"></a>

## Résztvevői kiadás

1. A modulfelelősök elfogadják a kiadandó anyagokat; a főpróba jegyzőkönyve elkészül.
2. Az AI futtatja az `npm test` és `npm run check` ellenőrzéseket. A csomag minden helyi függősége a materials mappán belül legyen. A modulok és leckék állapota külön-külön ready; az ismert sablonjelölések nem maradhatnak bennük.
3. A szervező jóváhagyja a kiadást. Ekkor hozzuk létre a külön publikus repót, és kizárólag a materials tartalmát másoljuk a gyökerébe.
4. A publikus repo tiszta saját előzménnyel indul. A belső repo története, authoring és operations tartalma nem kerül bele.
5. A [kiadási jóváhagyásban](qa/reports/release-approval.md) rögzítjük a T1–T5, R1–R8, P1–P4 pontok és a teljes főpróba bizonyítékát, a jóváhagyó nevét, dátumát és a teljes materials-csomag SHA-256 lenyomatát. Ezt az AI a `node authoring/qa/release.cjs --fingerprint` paranccsal számolja ki. Elfogadást csak tényleges emberi döntés alapján rögzítünk.
6. A main ágon a GitHub Actions **Prepare participant release** folyamatot indítjuk. Újra lefutnak a tesztek és a technikai kapu, majd a kiadásellenőrzés. Csak siker esetén készül letölthető `participant-materials-…` csomag, kizárólag a materials tartalmával. A folyamat nem küld automatikusan fájlokat másik repóba vagy weboldalra. Helyi megfelelője: `npm run release:package`, tiszta kimeneti mappával.
7. A kiadással megbízott szerkesztő ebből az ellenőrzött csomagból publikál. A közzétett verziót és commitot rögzítjük. Továbbra is ebben a közös szerkesztési repóban dolgozunk; a résztvevői repo a kiadott példány.

A másolás nem engedély a publikálásra: a végleges kiadáshoz kifejezett szervezői kérés kell.

<a name="automation"></a>

## Automatikus generálás és ellenőrzés

**Szerzőként:** Markdownban dolgozunk, a HTML a böngészőben könnyen olvasható megjelenés. Kérd az AI-tól: „Frissítsd az érintett Markdown-forrásokat, generáld újra a HTML-t, futtasd az ellenőrzéseket, és mutasd meg az eredményt.” Saját eszközzel készített anyagnál ezt a szerkesztő intézi.

**Az AI és a szerkesztő technikai menete:** Node.js 24, a package-lock.json rögzített függőségeivel. Windowson szükség esetén `npm.cmd` használható az `npm` helyett.

| Mikor? | Parancs / kapu | Mit igazol? |
| --- | --- | --- |
| Első munka vagy függőségváltozás | `npm ci --ignore-scripts` | Rögzített feldolgozó telepítése |
| Tartalmi szerkesztés után | `npm run render` | Markdownból elkészülnek a HTML-nézetek |
| Minden mellékági push előtt, ajánlott | `npm run prepare:push` majd `npm test` | Változott fájlok meghatározása, szükséges generálás, utána ellenőrzés és tesztek |
| Másik összehasonlítási alap | `npm run prepare:push -- --base origin/my-branch` | A megadott ág közös ősétől számolt változások |
| Csak ellenőrzés a változásokon | `npm run check -- --changed --base origin/main` | Nem ír fájlt; a munkakönyvtár, staging és új fájlok is számítanak |
| Commit / PR / main | `npm run check` és `npm test` | Teljes, fájlt nem módosító technikai ellenőrzés |
| Kiadás előtt | `npm run release:check` | Technikai kapu, készültség, emberi bizonyíték és a pontos csomag jóváhagyása |

A változáslista tartalmazza az ág commitjait és a helyi módosításokat is; a már fetch-elt összehasonlítási ág legyen friss. Markdown-, HTML-, CSS- vagy eszközváltozásnál a generálás a teljes, kis méretű megjelenítési készletre kiterjed, hogy a kereszthivatkozások is frissüljenek. A helyi linkháló ellenőrzése mindig teljes: egy törölt szakaszra változatlan fájlból is hivatkozhatunk. Ismeretlen összehasonlítási alapnál a parancs hibával leáll.

**Forrás és megjelenés párosítása:** a négy fő README, az authoring/template.md, a materials/modules és operations/instructor-notes Markdown-fájljai automatikusan kapnak HTML-t. README.md → index.html, más fájl → azonos nevű .html. Más önálló bemutató Markdownjának első sora `<!-- presentation -->`; így az is automatikusan bekerül. A mintakimenetek és munkafájlok önálló Markdownként használhatók. Új modulnál őrizd meg a sablon tartalmi szerkezetét és a stabil horgonyokat. A modul elején és minden lecke elején legyen `**Állapot: draft.**`, később `review`, valódi elfogadás után `ready`.

**Egyedi HTML kivétel:** az azonos nevű Markdown első sora `<!-- presentation: custom -->`. Ezt a generátor megőrzi. A szerkesztő a HTML és a teljes Markdown-forgatókönyv egyezőségét, hivatkozásait és olvashatóságát ellenőrzi, majd az oktató visszaigazolását a reviewban rögzíti. Csak ezután futtatja: `node authoring/qa/render.cjs --accept-custom materials/modules/example.md` (a tényleges útvonallal). A jelölés mindkét fájl lenyomatát rögzíti; bármelyik változása új egyezőség-ellenőrzést igényel. A script a rögzített fájlpárt ellenőrzi, a tartalmi egyezőséget ember és reviewer állapítja meg. A kivételre is érvényes a linkellenőrzés, a résztvevői határ és a szakmai elfogadás.

**Main merge:** pull request szükséges, friss alappal és sikeres **Content quality gate** ellenőrzéssel. Minden pushon és mainre célzó PR-on lefut a teljes ellenőrzés; nem javítja ki csendben a hiányzó generálást. A kézzel módosított generált HTML, hiányzó pár, törött link és résztvevői határsértés hibát ad. Forrás átnevezésekor/törlésekor a hozzá tartozó HTML-t is nevezd át/töröld, a bejövő linkeket javítsd. A forrás és a generált eredmény egy commitba kerüljön.

A zöld technikai kapu mellett is lehet draft anyag a mainen. Ez közös szerkesztésre alkalmas állapotot igazol; a tanfolyam megtarthatóságát és a kiadást külön review dönti el. A készültség és a jóváhagyott csomaglenyomat eltérése blokkolja a kiadási csomag elkészítését.

<a name="ai-rules"></a>

## Közös AI-instrukciók

<a name="ai-rules-1"></a>

### Először egyeztess

1. Olvasd el a authoring/README.md kézikönyvet, a kijelölt modul áttekintőjét és a meglévő anyagot. Nézd meg a authoring/template.md sablont.
2. Tisztázd a partner témáját, célközönségét, időkeretét, tanulási eredményét és forrásait. Az ismert adatokat ne kérdezd újra. Egyszerre legfeljebb három lényegi kérdést tegyél fel.
3. Adj rövid tervet: szakaszok, gyakorlat, bemenet, elkészülő eredmény, példa és segítség. Fájlokat csak jóváhagyás után módosíts. Érdemi irányváltásnál egyeztess újra; az elfogadott terv rutinlépéseihez nem kell új engedély.

<a name="ai-rules-2"></a>

### A technikai munkát te végzed

- A résztvevői anyag szerkesztési forrása Markdown. Közös stílusa: materials/assets/notebook.css.
- Másold a authoring/template.md szerkezetét, a tartalmat a partner saját materials/modules/ mappájába írd. Igazítsd a relatív hivatkozásokat a célmappához. Használj Markdown-címsorokat, listákat és fenced kódblokkokat a másolható promptokhoz.
- Egy Markdown-fájlba rendezd a modul tananyagát, azon belül horgonyokkal elérhető leckékkel. A modul vázát és a kidolgozott mintaleckét használd kiindulásként.
- Egy tartalomnak egy szerkesztett forrása legyen. Módosításkor frissítsd az érintett hivatkozásokat, őrizd meg a leckeazonosítókat. A Markdown az elsődleges forrás. Futtasd az npm run render generálást, majd az npm run check ellenőrzést; a HTML-t ne szerkeszd kézzel.
- A modul gazdája, időkerete, bemenete és kimenete a modul Markdown-forrásának áttekintőjében olvasható. Ezt is te frissíted, ha a jóváhagyott tartalom változik. A partnernek ne adj külön technikai adatlapkitöltési feladatot.
- Más partner anyagát és a közös CSS-t csak az adott változtatásra kapott jóváhagyással módosítsd.
- Adj helyi fájlhivatkozást a megnyitható HTML-hez. A partner a böngészőben ellenőriz, és beszélgetésben kéri a javítást.
- Átadáskor sorold fel a változásokat, az ellenőrzéseket és a nyitott kérdéseket. Commit, push, pull request és publikálás csak kifejezett kérésre történjen.

<a name="ai-rules-3"></a>

### Tartalmi minimum

Magyar magyarázat és magyar másolható promptok. Legyen cél, előfeltétel, magyarázat, emberi döntés, feladat, példa, kész feltétel és elakadási segítség. A következő modul használja az előző eredményét.

Ne találj ki referenciát, árat, vállalást vagy kipróbált integrációt. A hiányzó információ nyitott kérdés. A kitalált példát jelöld. Pontos márkanév: Blackhole Media. Valós ügyféladat, token és résztvevői személyes munka nem kerülhet a repóba.

A váz draft, a kidolgozott, próbára váró anyag review. Ready csak szakmai és oktatói próba után lehet. A státusz szövegesen is jelenjen meg.

<a name="ai-rules-4"></a>

### Átadás előtti ellenőrzés

Az AI ellenőrizze a helyi linkeket, a CSS elérését, a címsorokat, a másolható promptokat és a tartalom teljességét. Normál relatív href linkek legyenek; az olvasás ne igényeljen JavaScriptet, szervert vagy külső betűkészletet. Mobilon és nyomtatva is legyen olvasható. Ha valamelyik ellenőrzést nem tudtad elvégezni, mondd el. Fájlellenőrzés alapján ne állíts elvégzett böngészős vagy szakmai próbát.

Kövesd a [review-folyamatot](#review) és a [közös ellenőrzőlistát](#checklist). A reviewer külön beszélgetésben, fájlokból dolgozik. Jegyzőkönyvet készít, review közben nem javítja a tananyagot. A ready állapothoz emberi próba és megnevezett szakmai elfogadás kell. A technikai ellenőrzéseket az AI végzi.

Wenova × Brandiseer × Blackhole Media × EstiWise
