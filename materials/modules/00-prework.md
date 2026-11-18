# Felkészülés: telepítés, kapcsolatok és saját források

**Állapot: review.**

[HTML-változat](00-prework.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Telepítés: Claude Desktop és a tananyag egy mondattal](#00-prework.01-install)
- [Connectorok és biztonsági beállítás](#00-prework.02-account-check)
- [Partnerfiókok: Brandiseer, Buffer, EstiWise, Sales Bot](#00-prework.03-partner-accounts)
- [Saját források és adatkezelés](#00-prework.04-sources)
- [Indulási próba és CRM-tábla](#00-prework.05-coach-check)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

00-prework · review

Egy működő Claude-munkamappa a tananyaggal, bekötött levelezés és táblázat, partnerfiókok és a saját anyagaid. Ezzel indulsz reggel 9-kor.

**Honnan töltöd le az anyagot?** Nem kell külön letöltened: az 1. leckében a Claude egyetlen mondatra telepíti. Kézi letöltés (ZIP): [main.zip](https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip); böngészőben olvasható: [github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials](https://github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials).

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: kidolgozott útmutató, a helyszíni technikai próbára vár.**

A workshop 2026. november 19-én, csütörtökön 09:00–17:00 között lesz a CEU Nádor Event Centerben (Budapest V., Nádor u. 15., N13 412/A terem, 4. emelet; a belépőkártyát a recepción kapod). Az egész napot a saját cégeden, a Claude-ban dolgozod végig. A felkészülés kb. 55 perc: otthon, előző este a legjobb. Ami nem sikerül, azt reggel 08:30 és 09:00 között a technikai pultnál befejezzük.

A nap eszköze a **Claude Desktop** fizetős előfizetéssel (Pro vagy magasabb), azon belül a **Cowork** mód. A partnereszközökre (Brandiseer, Buffer, Sales Bot, EstiWise) nem kell fizetned: a Brandiseerhez a WENOVA kód ad egy hónap ingyenes Pro csomagot, a többihez a napra mindenki megkapja a használati keretet. Három fogalom, amit egész nap használunk:

- **Cowork:** a Claude Desktop munkamódja, amelyben a Claude a gépeden lévő, általad kijelölt mappában olvas és ír, és több lépésből álló feladatot végez el. A fájlokat nem kell feltöltened.
- **Munkamappa:** `Wenova-AI-Sales-Workshop` a felhasználói mappádban, benne a `Tananyag/` (a workshop anyaga, csak olvassuk) és a `Munka/` (a te eredményeid).
- **Connector (kapcsolat):** engedélyezett kapcsolat a Claude és egy másik szolgáltatás között, például a Gmail vagy a Buffer. A technikai neve MCP (Model Context Protocol).

<a name="overview-1"></a>

### Bemenet

Claude-előfizetés, a céged weboldala, árlistád, 1–2 korábbi ajánlatod, a levelezésed, a LinkedIn-belépésed.

<a name="overview-2"></a>

### Kimenet

A `Wenova-AI-Sales-Workshop` munkamappa a telepített tananyaggal; egy Cowork-projekt erre a mappára; bekapcsolt levelező-, Google Drive- és Buffer-kapcsolat, a levélküldés tiltva; Brandiseer-, Buffer- és EstiWise-fiók; a forrásaid a `Munka/00-Felkeszules/forrasok/` mappában; „CRM – [cégnév]” Google-táblázat; a tanulási kísérő ellenőrzőlistája.

<a name="overview-3"></a>

### Folytatás elakadás esetén

Ami otthon nem sikerül, írd fel, és hozd a 08:30-as technikai pulthoz. Minden lépésnek van kézi útja: [mentőútvonal](#recovery).

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `00-prework`
- Szakmai gazda: Wenova (Piya Csaba, Kemény Krisztián)
- Időkeret: kb. 55 perc a workshop előtt, plusz 08:30–09:00 technikai pult
- Végrehajtási mód: `live` (saját fiókok)
- Állapot: review – kidolgozva, a helyszíni próba még hátravan.

<a name="00-prework.01-install"></a>

## Telepítés: Claude Desktop és a tananyag egy mondattal

**Állapot: review.**

**Azonosító:** `00-prework.01-install` · **Állapot:** review · **Időkeret:** 15 perc

**Hogyan futtasd:** a Claude Desktopban, Cowork módban; a telepítést maga a Claude végzi el egy mondatra.

<a name="00-prework.01-install--result"></a>

### Ezt készíted el

A gépeden egy `Wenova-AI-Sales-Workshop` mappát, benne a teljes tananyaggal (`Tananyag/`) és a saját eredményeid helyével (`Munka/`), valamint egy Cowork-projektet, amely ezzel a mappával dolgozik.

<a name="00-prework.01-install--needs"></a>

### Erre lesz szükséged

- Fizetős Claude-előfizetés (Pro vagy magasabb). A Cowork az asztali alkalmazásban minden fizetős csomagban elérhető.
- A **Claude Desktop** alkalmazás Windowsra vagy macOS-re: [claude.com/download](https://claude.com/download).

<a name="00-prework.01-install--explanation"></a>

### Így működik

Cowork módban a Claude csak abban a mappában olvas és ír, amelyet te csatolsz. Ezért előbb létrehozod a mappát, és Cowork-projektet készítesz rá. Utána egy mondattal megkéred a Claude-ot, hogy telepítse a tananyagot: ő letölti a nyilvános tananyagot, a `Tananyag/` mappába teszi, létrehozza a `Munka/` mappát, és ellenőrzi az eredményt. A telepítés újrafuttatva frissít: az új tananyagot teszi a helyére, a `Munka/` mappádhoz nem nyúl.

A telepítés lépéseit a [TELEPITES.md](../TELEPITES.md) futtatókönyv írja le; a Claude ezt követi.

<a name="00-prework.01-install--decisions"></a>

### Ezekről te döntesz

Hol legyen a munkamappa (javasolt: a felhasználói mappád). Engedélyezed-e a Claude-nak a letöltést a github.com-ról.

<a name="00-prework.01-install--prompt"></a>

### Ezt kérd Claude-tól

A Cowork-projektben, új munkamenetben, pontosan ezt az egy mondatot:

```text
Telepítsd a workshop tananyagát: https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md
```

<a name="00-prework.01-install--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** telepítsd és indítsd el a Claude Desktopot, lépj be a fizetős fiókoddal.
2. **3–5 perc:** a fájlkezelőben hozz létre egy `Wenova-AI-Sales-Workshop` mappát a felhasználói mappádban (Windows: `C:\Users\<neved>\`, macOS: a saját mappád, a házikó ikon).
3. **5–7 perc:** a Claude Desktopban válts **Cowork** módra. Bal oldalt **Projects** → **+** → **Use an existing folder**, válaszd ki a `Wenova-AI-Sales-Workshop` mappát. A projekt neve: „AI Sales Workshop – [cégnév]”.
4. **7–12 perc:** a projektben új munkamenet, és írd be a fenti mondatot. Ha a Claude engedélyt kér a letöltésre vagy a mappába írásra, engedd. A végén ✅/⚠️ listát ad.
5. **12–15 perc:** kövesd a Claude záró üzenetét: a projekt **Instructions** mezőjébe írd be: „Kövesd a munkamappa AGENTS.md fájlját. A cégem neve: [cégnév].”, és nyisd meg a böngészőben a `Tananyag/index.html` fájlt.

<a name="00-prework.01-install--check"></a>

### Ellenőrizd az eredményt

- A munkamappában ott a `Tananyag/` (benne `index.html`, `VERSION`, `modules/`, `starter-kit/`) és a `Munka/` mappa a hat almappával.
- A Claude ✅/⚠️ listájában a verzió és a fájlszám (legalább 90) szerepel.
- A `Tananyag/index.html` megnyílik a böngészőben.
- A Cowork-projekt Instructions mezőjében ott az AGENTS.md-re utaló mondat.

<a name="00-prework.01-install--help"></a>

### Ha elakadtál

- **A Claude szerint a letöltés hálózati okból nem megy:** Beállítások → Képességek (Settings → Capabilities): kapcsold be az **Allow network egress** kapcsolót, a **Domain allowlist** legyen **Package managers only** (ez engedi a github.com-ot). Utána: „Próbáld újra.”
- **Így sem megy:** kézi út, 3 perc: töltsd le a [ZIP-et](https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip), bontsd ki (Windows: jobb klikk → Összes kibontása; macOS: dupla kattintás), a kibontott mappában a `materials` mappa **tartalmát** másold a `Wenova-AI-Sales-Workshop/Tananyag/` mappába, és hozz létre mellette egy `Munka` mappát. Utána írd a Claude-nak: „Ellenőrizd a telepítést a Tananyag/TELEPITES.md 5–7. lépése szerint.”
- **Nincs Cowork a gépeden, vagy nem indul:** tartalékút a böngészőben: a claude.ai-on hozz létre egy projektet („AI Sales Workshop – [cégnév]”), töltsd fel a tudásába az `assistant.md`, `AGENTS.md`, a 00–05 modulok `.md` fájljait és a `starter-kit` sablonjait, a projektutasításba pedig a [projektutasítás](../starter-kit/project-instructions.md) keretes szövegét. Ilyenkor a „Munka/” helyett az eredményeket letöltöd és visszatöltöd a projektbe.
- **Terminált szívesen használsz:** a [haladó út a Claude Code-dal](../CLAUDE-CODE.md) ugyanezt a telepítést a terminálban végzi.

<a name="00-prework.01-install--handoff"></a>

### Ezt viszed tovább

A munkamappát és a Cowork-projektet egész nap használod, a partnerblokkokban is: minden új munkamenetet ebben a projektben indíts.

<a name="00-prework.01-install--extra"></a>

### Ha maradt időd

Lapozd át a böngészőben a [nap menetét](../schedule.md).

<a name="00-prework.02-account-check"></a>

## Connectorok és biztonsági beállítás

**Állapot: review.**

**Azonosító:** `00-prework.02-account-check` · **Állapot:** review · **Időkeret:** 10 perc

**Hogyan futtasd:** a beállításokat a Claude Desktopban kattintod végig; elakadásnál a lenti promptot írd be egy új munkamenetbe.

<a name="00-prework.02-account-check--result"></a>

### Ezt készíted el

Bekapcsolt levelező-, Google Drive- és Buffer-kapcsolatot, a levelező írási eszközei tiltva.

<a name="00-prework.02-account-check--needs"></a>

### Erre lesz szükséged

- **Levelezés:** Gmail- vagy Google Workspace-fiók, vagy Microsoft 365 / Outlook-fiók.
- **Google-fiók** a CRM-táblázathoz. Ha csak Microsoft-fiókod van, a CRM a saját Excel-fájlod lesz.
- A Buffer-fiók (a 3. lecke része; ha még nincs, előbb azt csináld meg).

<a name="00-prework.02-account-check--explanation"></a>

### Így működik

A connectorok a fiókodhoz tartoznak, a Coworkben és a chatben is működnek. Egy munkamenetben a szövegmező melletti **+** menüben kapcsolhatod be vagy ki őket. Minden connector saját oldalán beállíthatod, melyik eszközét használhatja a Claude (Tool permissions, eszközengedélyek). A levelezőnél a küldés, válasz, továbbítás és törlés legyen **Tiltva (Blocked)**. Írási műveletnél soha ne kattints a „Mindig engedélyez” (Always allow) gombra.

A Brandiseer, a Sales Bot és az EstiWise connectorát a partnerek a saját blokkjukban kötik be veled; előre nincs teendő.

<a name="00-prework.02-account-check--decisions"></a>

### Ezekről te döntesz

Melyik levelezőt kötöd be (Gmail vagy Outlook), vagy egyiket sem. Mit engedsz a Claude-nak: olvasást igen, küldést nem.

<a name="00-prework.02-account-check--prompt"></a>

### Ezt kérd Claude-tól

Ha egy beállítási lépésnél elakadsz:

```text
A Claude Desktopban vagyok. Ezt szeretném beállítani: [például: Gmail connector bekapcsolása].
Ezt látom a képernyőn: [írd le, vagy csatolj képernyőképet].
Lépésenként mondd meg, hova kattintsak. Ha a felületed eltér, kérdezz vissza, ne találgass.
Jelszót és belépőkódot ne kérj tőlem.
```

<a name="00-prework.02-account-check--steps"></a>

### Haladj végig ezeken

1. **0–5 perc:** Testreszabás → Connectorok (Customize → Connectors; az asztali appban a bal oldali sávban). Kapcsold be:
   - a **Gmail** és a **Google Drive** connectort, ha Google-t használsz;
   - a **Microsoft 365** connectort, ha Outlookot használsz. Személyes Outlook.com-fiókot a webes Claude-ban (claude.ai) köss be. Céges fióknál a cég rendszergazdájának jóvá kell hagynia; ha te vagy a Microsoft 365 rendszergazda, a belépéskor jóváhagyhatod. Ha ez nem megy, a leveleket bemásolva dolgozzuk fel;
   - a **Buffer** connectort (keresd a listában, Connect, belépés a Bufferbe).
2. **5–8 perc:** nyisd meg a levelező connector oldalát, és az eszközengedélyeknél a küldés, válasz, továbbítás és törlés eszközt állítsd **Tiltva (Blocked)** állásba.
3. **8–10 perc:** a Cowork-projektben új munkamenet, kapcsold be a connectorokat a + menüben, és írd: „Milyen connectorok vannak bekapcsolva, és melyik eszközük van tiltva?”

<a name="00-prework.02-account-check--check"></a>

### Ellenőrizd az eredményt

- A Claude felsorolja a levelező, a Google Drive és a Buffer connectort.
- A levelezőben a küldés, válasz, továbbítás és törlés Tiltva (Blocked).

<a name="00-prework.02-account-check--help"></a>

### Ha elakadtál

- **A levelező connector nem kapcsolódik:** folytasd nélküle. Az 1. és 5. blokkban a leveleidet bemásolva vagy a [kitalált mintapostafiókkal](../scenarios/office-plants/outputs/mailbox-sample.md) dolgozol.
- **A Buffer connector nem található:** a 02-es blokkban a Buffer felületén, kézzel dolgozol.

<a name="00-prework.02-account-check--handoff"></a>

### Ezt viszed tovább

A connectorokat egész nap használod. A partnerek connectorai a 02–04-es blokkban kerülnek mellé.

<a name="00-prework.02-account-check--extra"></a>

### Ha maradt időd

Kapcsold be a Google Naptár connectort is. Az 5. blokkban a holnapi teendőidet ide is felveheted.

<a name="00-prework.03-partner-accounts"></a>

## Partnerfiókok: Brandiseer, Buffer, EstiWise, Sales Bot

**Állapot: review.**

**Azonosító:** `00-prework.03-partner-accounts` · **Állapot:** review · **Időkeret:** 10 perc

**Hogyan futtasd:** a regisztrációkat a böngészőben végzed; Claude nem kell hozzá.

<a name="00-prework.03-partner-accounts--result"></a>

### Ezt készíted el

Brandiseer-fiókot a felvett márkáddal és a WENOVA kóddal aktivált Pro csomaggal, ingyenes Buffer-fiókot legalább egy bekötött közösségimédia-oldallal, és EstiWise-fiókot. A partnereszközökre nem kell fizetned: a Brandiseerhez a WENOVA kód ad egy hónap ingyenes Pro csomagot, a többihez a napra mindenki megkapja a használati keretet.

<a name="00-prework.03-partner-accounts--needs"></a>

### Erre lesz szükséged

Egy e-mail-cím a regisztrációkhoz, legalább egy közösségimédia-oldal (például a céges LinkedIn- vagy Facebook-oldal) a Bufferhez, a weboldalad címe vagy szolgáltatásleírásod az EstiWise-hoz, és a LinkedIn-belépésed.

<a name="00-prework.03-partner-accounts--explanation"></a>

### Így működik

A partnerrendszereket a saját blokkjukban használod, a délutáni 5. blokkban pedig egy ügyfélesetben kapcsoljuk össze őket. Mindhárom partnernek saját connectora van a Claude-hoz; ezeket a partnerek a saját blokkjukban kötik be és mutatják meg.

| Partner és blokk | Mit csinálsz előre? | Mi történik a helyszínen? |
| --- | --- | --- |
| **Brandiseer** ([02-es modul](02-content-marketing.md)) | A [brandiseer.hu](https://brandiseer.hu) oldalon add meg a céged weboldalát → **Try My Brand** → töröld a nem odaillő képeket → **Add Brand** → fiók létrehozása. Utána Pro csomag a **WENOVA** kóddal (az első hónap ingyenes). | A 02-es blokkban a Brandiseer connectorát is bekötitek. |
| **Buffer** (posztok ütemezése, a 02-es blokkhoz kötelező) | Ingyenes fiók: [buffer.com](https://buffer.com), és köss be legalább egy közösségimédia-oldalt. A Claude-connectort a 2. leckében kapcsolod be. | A 02-es blokkban ide kerülnek a posztok. |
| **EstiWise** ([04-es modul](04-proposals-handoff.md)) | Regisztráció: [admin.estiwise.ai/auth/register](https://admin.estiwise.ai/auth/register). Bankkártya és előfizetés nem kell. | A Claude-összekötést a 04-es blokkban együtt csináljuk; előre ne próbáld. |
| **Blackhole Media – Sales Bot** ([03-as modul](03-lead-generation.md)) | Előre nincs teendőd. Ha kíváncsi vagy: [sales-bot.io](https://sales-bot.io). A LinkedIn-belépésed legyen kéznél. | A hozzáférést és a connectort a 03-as blokk elején kapod. |

<a name="00-prework.03-partner-accounts--decisions"></a>

### Ezekről te döntesz

Saját céggel vagy gyakorlóvállalkozással regisztrálsz. Melyik közösségimédia-oldalt kötöd be a Bufferbe. A workshopon semmi nem kerül ki nyilvánosan a jóváhagyásod nélkül.

<a name="00-prework.03-partner-accounts--prompt"></a>

### Ezt kérd Claude-tól

Ennél a leckénél nem kell Claude.

<a name="00-prework.03-partner-accounts--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** Brandiseer: a [brandiseer.hu](https://brandiseer.hu) oldalon add meg a weboldalad címét → **Try My Brand** → nézd át a képeket → **Add Brand** → fiók; majd Pro csomag a **WENOVA** kóddal.
2. **3–7 perc:** Buffer-fiók a [buffer.com](https://buffer.com) oldalon, legalább egy közösségimédia-oldal bekötésével.
3. **7–10 perc:** EstiWise-regisztráció az [admin.estiwise.ai/auth/register](https://admin.estiwise.ai/auth/register) oldalon. A Claude-kapcsolatot ne állítsd be.

<a name="00-prework.03-partner-accounts--check"></a>

### Ellenőrizd az eredményt

- Be tudsz lépni a Brandiseerbe, és ott van a márkád.
- A Bufferben legalább egy közösségimédia-oldal be van kötve.
- Be tudsz lépni az EstiWise-ba.
- Kéznél van a LinkedIn-belépésed.

<a name="00-prework.03-partner-accounts--help"></a>

### Ha elakadtál

Egyik partnerfiók sem feltétele a délelőttnek. Ha valami nem működik, írd fel, és szólj reggel a technikai pultnál vagy a blokk elején a partner mentorainak.

<a name="00-prework.03-partner-accounts--handoff"></a>

### Ezt viszed tovább

A fiókok a 02-es és 04-es blokk bemenetei; a Sales Bot-hozzáférést a 03-as blokkban kapod. Az 5. blokkban a Karmester mindhárom partner connectorát használja.

<a name="00-prework.03-partner-accounts--extra"></a>

### Ha maradt időd

Nézd meg 5 percig a Brandiseer és az EstiWise felületét. Elég, ha tudod, hol vannak a fő menük.

<a name="00-prework.04-sources"></a>

## Saját források és adatkezelés

**Állapot: review.**

**Azonosító:** `00-prework.04-sources` · **Állapot:** review · **Időkeret:** 10 perc

**Hogyan futtasd:** a fájlkezelőben; Claude nem kell hozzá.

<a name="00-prework.04-sources--result"></a>

### Ezt készíted el

A `Munka/00-Felkeszules/forrasok/` mappában a saját forrásaidat. Ebből építed reggel a Cég-DNS-t. A **Cég-DNS** egy oldal arról, kinek, mit és milyen hangon ad el a céged; a nap minden blokkja ebből dolgozik.

<a name="00-prework.04-sources--needs"></a>

### Erre lesz szükséged

Fájlkezelő és 10 perc. Ha nincs saját céged, vagy nem szeretnéd a saját adataidat használni, válassz egy [kitalált gyakorlóvállalkozást](../README.md#scenarios); ilyenkor ezt a leckét kihagyhatod.

<a name="00-prework.04-sources--explanation"></a>

### Így működik

A DNS annyira jó, amennyire a forrásai. A Claude nem emlékezetből ír a cégedről, hanem a te anyagaidból, és minden állításhoz megjelöli a forrást. Ami egyik forrásban sincs, az „Nincs megadva” lesz.

| Forrás | Mire jó? | Kötelező? |
| --- | --- | --- |
| A weboldalad címe (URL) | Kik vagytok, mit kínáltok | Igen |
| Árlista vagy szolgáltatásleírás (PDF, Word, táblázat) | Ajánlat és árazási alap; a 04-es EstiWise-blokk is ezt kéri | Ha van |
| 1–2 korábbi ajánlat | Mit, milyen formában ajánlasz | Ha van |
| 1–2 referencia vagy esettanulmány | Bizonyíték | Csak ha nyilvános vagy engedélyezett |
| Küldött leveleid | A saját hangod kinyerése | A levelező connectoron át, az 1. blokkban |

<a name="00-prework.04-sources--decisions"></a>

### Ezekről te döntesz

Melyik dokumentum mehet AI-feldolgozásra, és mit takarsz ki előtte. Saját céggel vagy gyakorlóvállalkozással dolgozol.

**Adatkezelési szabályok a napra:**

1. Korábbi ajánlatból töröld vagy takard ki az ügyfél nevét, a kapcsolattartót és az egyedi kedvezményt (például „[ügyfél]”).
2. Jelszót, API-kulcsot, belépőkódot, bankkártyaadatot soha ne írj be a Claude-ba.
3. Ha a cégednél szabályzat vagy vezetői engedély kell a levelezés vagy az ügyféladatok AI-feldolgozásához, ezt a workshop előtt kérd meg. Ha nincs engedélyed, a kitalált mintákkal dolgozz.
4. A Claude beállításainál (Settings → Privacy, Adatvédelem) nézd meg, engedélyezted-e, hogy a beszélgetéseidet a modell fejlesztésére használják. Céges adatnál javasoljuk kikapcsolni.
5. A terem nyitott tér: levelet és ügyféladatot ne vetíts ki, és figyelj, ki látja a képernyődet. A közös bemutatókhoz a kitalált mintát használjuk.

<a name="00-prework.04-sources--prompt"></a>

### Ezt kérd Claude-tól

Ha bizonytalan vagy, mi mehet be, ezt kérdezheted egy új munkamenetben:

```text
Egy workshopon a cégem árlistájából és egy korábbi ajánlatomból készítünk összefoglalót.
Felsorolom, milyen adatok vannak a dokumentumokban. Mondd meg, melyiket érdemes kitakarnom, és miért.
Ne nyisd meg a dokumentumokat, csak a felsorolásomból dolgozz.
Adatok: [például: ügyfélnév, kapcsolattartó e-mail-címe, egyedi kedvezmény, termékár, szállítási határidő]
```

<a name="00-prework.04-sources--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** hozd létre a `Munka/00-Felkeszules/forrasok/` mappát, és írd be egy `weboldal.txt` fájlba a weboldalad címét.
2. **3–7 perc:** másold a mappába az árlistát és 1–2 korábbi ajánlatot.
3. **7–10 perc:** takard ki az ajánlatokból az ügyféladatokat a fenti szabály szerint.

<a name="00-prework.04-sources--check"></a>

### Ellenőrizd az eredményt

- A mappában ott a weboldal címe és legalább egy további forrás, vagy kiválasztottál egy gyakorlóvállalkozást.
- Egyik fájlban sincs ügyfélnév, személyes elérhetőség vagy jelszó.
- Tudod, hogy a cégednél kell-e engedély a levelezés AI-feldolgozásához.

<a name="00-prework.04-sources--help"></a>

### Ha elakadtál

Ha nincs árlistád vagy ajánlatod, elég a weboldal: a hiányzó részek „Nincs megadva” jelölést kapnak, és a DNS-ben teendőként látszanak. Ha weboldalad sincs, írj 5–6 mondatot arról, kinek mit adsz el; ez is forrás.

<a name="00-prework.04-sources--handoff"></a>

### Ezt viszed tovább

A DNS-t az 1. blokkban ezekből a forrásokból építed.

<a name="00-prework.04-sources--extra"></a>

### Ha maradt időd

Írd le 3 mondatban, kik a legjobb ügyfeleid és miért. A DNS ideális ügyfél (ICP) részéhez ez lesz a legerősebb forrás.

<a name="00-prework.05-coach-check"></a>

## Indulási próba és CRM-tábla

**Állapot: review.**

**Azonosító:** `00-prework.05-coach-check` · **Állapot:** review · **Időkeret:** 10 perc

**Hogyan futtasd:** a táblázatot a böngészőben hozod létre, az ellenőrzést a tanulási kísérő végzi („Kezdjük a felkészülés ellenőrzését”).

<a name="00-prework.05-coach-check--result"></a>

### Ezt készíted el

Egy „CRM – [cégnév]” Google-táblázatot a közös oszlopokkal, és a tanulási kísérő ✅/⚠️ ellenőrzőlistáját arról, mi működik.

<a name="00-prework.05-coach-check--needs"></a>

### Erre lesz szükséged

A telepített munkamappa, a bekapcsolt connectorok és a [CRM-sablon](../starter-kit/crm-template.csv) (a munkamappában: `Tananyag/starter-kit/crm-template.csv`).

<a name="00-prework.05-coach-check--explanation"></a>

### Így működik

A **CRM** (ügyfélkapcsolat-kezelő) itt egy egyszerű táblázat: soronként egy ügyféleset, szakasszal és következő lépéssel. Azért Google-táblázat, mert nem kell hozzá fejlesztő, és a Claude a Google Drive connectorral el tudja olvasni. A frissítést a CRM-agent CSV-sorokként adja, te bemásolod; ha a connectorod írni is tud, közvetlenül is írhat. Outlook- és Excel-felhasználóknál ugyanez működik a saját Excel-fájloddal, a `Munka/05-Folyamat/` mappában. Ide érkeznek a Sales Bot leadjei, az EstiWise-ajánlatok és a levelekből kinyert érdeklődők. Ha már használsz HubSpotot vagy Pipedrive-ot, és van hozzá connector a Claude-ban, később azt is bekötheted; a workshopon a táblázattal dolgozunk.

A **tanulási kísérő** a Claude a munkamappádban, a `Tananyag/assistant.md` utasítás szerint. Indítómondatra vezet végig egy blokkon.

<a name="00-prework.05-coach-check--decisions"></a>

### Ezekről te döntesz

Google-táblázat, vagy saját Excel-fájl, ha nincs Google-fiókod. Kivel osztod meg a táblát: a workshopon senkivel.

<a name="00-prework.05-coach-check--prompt"></a>

### Ezt kérd Claude-tól

A Cowork-projektben, új munkamenetben, a connectorokat bekapcsolva:

```text
Kezdjük a felkészülés ellenőrzését.
```

A kísérő ellenőrzi: megvan-e a `Tananyag/` és a `Munka/`, a projekt Instructions mezője és a gyökérben az `AGENTS.md`; a levelező connectorral ki tudja-e olvasni a legutóbbi beérkezett levél tárgyát (a tartalmát nem mutatja); a levélküldés tiltva van-e; megtalálja-e a Google Drive-ban a „CRM – [cégnév]” táblázatot; él-e a Buffer connector. A partnerek connectorát nem ellenőrzi: azokat a blokkjukban kötjük be. Az eredmény egy ✅/⚠️ lista teendőkkel.

<a name="00-prework.05-coach-check--steps"></a>

### Haladj végig ezeken

1. **0–4 perc:** Google Táblázatok → üres táblázat, neve „CRM – [cégnév]”. Fájl → Importálás → Feltöltés: a `crm-template.csv`. Importálási hely: „Jelenlegi munkalap cseréje”. Töröld a MINTA-01 sort.
2. **4–9 perc:** futtasd a fenti indítómondatot, és válaszolj a kísérő kérdéseire.
3. **9–10 perc:** a ⚠️ sorokat írd fel a reggeli technikai pulthoz.

<a name="00-prework.05-coach-check--check"></a>

### Ellenőrizd az eredményt

- A CRM-táblázat létezik, az első sorban a 15 oszlopnév van.
- A kísérő listájában a munkamappa és az utasítások ✅.
- A levelezés, a levélküldés tiltása, a CRM és a Buffer ✅, vagy ⚠️ és tudod a kézi utat.
- A Brandiseer-, Buffer- és EstiWise-fiókod megvan.

<a name="00-prework.05-coach-check--help"></a>

### Ha elakadtál

Ha a Claude nem találja a táblázatot, kérd: „Keresd a Google Drive-ban a CRM nevű táblázatot.” Ha a Drive connector nincs bekötve, mentsd a táblázatot CSV-ként `Munka/05-Folyamat/crm.csv` néven; az 5. blokkban a Claude ebből olvas, a frissített sorokat pedig te másolod be.

<a name="00-prework.05-coach-check--handoff"></a>

### Ezt viszed tovább

Működő munkamappa, CRM-tábla és ellenőrzőlista. Reggel 09:20-kor az 1. blokk ebből indul: „Kezdjük az 1. blokkot.”

<a name="00-prework.05-coach-check--extra"></a>

### Ha maradt időd

Nyisd meg a [kitalált IrodaLiget Cég-DNS-t](../scenarios/office-plants/outputs/company-dna.md). Így reggel már tudod, mit fogsz építeni.

<a name="recovery"></a>

## Segítség elakadáskor

1. Mentsd a saját eddigi munkádat, és írd fel, melyik lépésnél akadtál el.
2. Reggel 08:30 és 09:00 között a technikai pultnál befejezzük a beállítást.
3. Ami ott sem megy, annak a kézi útján haladsz: tananyag ZIP-ből, levelek bemásolva, CRM CSV-fájlban, partnerrendszer helyett demófiók vagy mintafájl.
4. A haladási naplóban az érintett lépésnél a végrehajtás `simulation`; a beállítási hibát a `gaps` listába írd.

Saját cégről mintára váltáskor külön munkapéldányt használj, és ne keverd a minta árait a saját ajánlatoddal. A statikus mintacsomag nem bizonyít működő partnerintegrációt.

<a name="examples"></a>

## Gyakorlópéldák

Három kitalált vállalkozás van a `scenarios/` mappában. A Cég-DNS, a hangprofil, a mintapostafiók és a CRM-minta az [IrodaLiget](../scenarios/office-plants/README.md) példán készült el; a 03-as és 04-es blokk mentőútja is erre épül.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules) · [Haladó út: Claude Code](../CLAUDE-CODE.md) · [Következő modul →](01-business-foundations.md)

Wenova × Brandiseer × Blackhole Media × EstiWise
