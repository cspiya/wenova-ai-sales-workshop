# Felkészülés: Claude, kapcsolatok és saját források

**Állapot: review.**

[HTML-változat](00-prework.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [Gyűjtsd össze a saját forrásaidat](#00-prework.01-business-profile)
- [Claude, projekt és connectorok](#00-prework.02-account-check)
- [Partnerfiókok: Sales Bot, EstiWise, Brandiseer](#00-prework.03-partner-accounts)
- [Indulási próba és CRM-tábla](#00-prework.04-coach-check)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

00-prework · review

Egy működő Claude-projekt, bekötött levelezés és táblázat, partnerfiókok és a saját anyagaid. Ezzel indulsz reggel 9-kor.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: kidolgozott útmutató, a helyszíni technikai próbára vár.**

A workshop 2026. november 19-én, csütörtökön 09:00–17:00 között lesz a CEU Nádor Event Centerben (Budapest V., Nádor utca 15.). Az egész napot a saját cégeden, a Claude-ban dolgozod végig. A felkészülés kb. 50 perc: otthon, előző este a legjobb. Ami nem sikerül, azt reggel 08:30 és 09:00 között a technikai pultnál befejezzük.

A nap eszköze a **Claude** fizetős előfizetéssel. Két fogalom, amit egész nap használunk:

- **Projekt (Project):** saját munkaterület a Claude-ban. Van saját utasítása, és fájlokat tölthetsz fel a tudásába (Project knowledge). Minden beszélgetés, amit a projektben indítasz, látja ezeket.
- **Connector (kapcsolat):** engedélyezett kapcsolat a Claude és egy másik szolgáltatás között, például a Gmail vagy a Sales Bot. A technikai neve MCP (Model Context Protocol). A connectorral a Claude olvasni és – ha engedélyezed – írni tud abban a szolgáltatásban.

<a name="overview-1"></a>

### Bemenet

A céged weboldala, árlistád, 1–2 korábbi ajánlatod, a levelezésed, a partnerektől kapott belépő e-mailek.

<a name="overview-2"></a>

### Kimenet

Egy „AI Sales Workshop – [cégnév]” Claude-projekt feltöltött fájlokkal és projektutasítással; bekapcsolt levelező- és Google-kapcsolat; „CRM – [cégnév]” Google-táblázat; Sales Bot- és EstiWise-belépés; a tanulási kísérő ellenőrzőlistája.

<a name="overview-3"></a>

### Folytatás elakadás esetén

Ami otthon nem sikerül, írd fel, és hozd a 08:30-as technikai pulthoz. Minden blokkhoz van kapcsolat nélküli út is: [mentőútvonal](#recovery).

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `00-prework`
- Szakmai gazda: Wenova (Piya Csaba, Kemény Krisztián)
- Időkeret: kb. 50 perc a workshop előtt, plusz 08:30–09:00 technikai pult
- Végrehajtási mód: `live` (saját fiókok)
- Állapot: review – kidolgozva, a helyszíni próba még hátravan.

<a name="00-prework.01-business-profile"></a>

## Gyűjtsd össze a saját forrásaidat

**Állapot: review.**

**Azonosító:** `00-prework.01-business-profile` · **Állapot:** review · **Időkeret:** 10 perc

<a name="00-prework.01-business-profile--result"></a>

### Ezt készíted el

Egy mappát a gépeden „Workshop-források” néven. Ebből építed reggel a Cég-DNS-t. A **Cég-DNS** egy oldal arról, kinek, mit és milyen hangon ad el a céged; a nap minden blokkja ebből dolgozik.

<a name="00-prework.01-business-profile--needs"></a>

### Erre lesz szükséged

Fájlkezelő és 10 perc. Ha nincs saját céged, vagy nem szeretnéd a saját adataidat használni, válassz egy [kitalált gyakorlóvállalkozást](../README.md#scenarios); ilyenkor ezt a leckét kihagyhatod.

<a name="00-prework.01-business-profile--explanation"></a>

### Így működik

A DNS annyira jó, amennyire a forrásai. A Claude nem emlékezetből ír a cégedről, hanem a te anyagaidból, és minden állításhoz megjelöli a forrást. Ami egyik forrásban sincs, az „Nincs megadva” lesz.

| Forrás | Mire jó? | Kötelező? |
| --- | --- | --- |
| A weboldalad címe (URL) | Kik vagytok, mit kínáltok | Igen |
| Árlista vagy szolgáltatásleírás (PDF, Word, táblázat) | Ajánlat és árazási alap; a 04-es EstiWise-blokk is ezt kéri | Ha van |
| 1–2 korábbi ajánlat | Mit, milyen formában ajánlasz | Ha van |
| 1–2 referencia vagy esettanulmány | Bizonyíték | Csak ha nyilvános vagy engedélyezett |
| Küldött leveleid | A saját hangod kinyerése | A levelezőkapcsolaton át, lásd a következő leckét |

<a name="00-prework.01-business-profile--decisions"></a>

### Ezekről te döntesz

Melyik dokumentum mehet AI-feldolgozásra, és mit takarsz ki előtte. Saját céggel vagy gyakorlóvállalkozással dolgozol.

**Adatkezelési szabályok a napra:**

1. Korábbi ajánlatból töröld vagy takard ki az ügyfél nevét, a kapcsolattartót és az egyedi kedvezményt (például „[ügyfél]”).
2. Jelszót, API-kulcsot, belépőkódot, bankkártyaadatot soha ne írj be a Claude-ba.
3. Ha a cégednél szabályzat vagy vezetői engedély kell a levelezés vagy az ügyféladatok AI-feldolgozásához, ezt a workshop előtt kérd meg. Ha nincs engedélyed, a kitalált mintákkal dolgozz.
4. A Claude beállításainál (Settings → Privacy, Adatvédelem) nézd meg, engedélyezted-e, hogy a beszélgetéseidet a modell fejlesztésére használják. Céges adatnál javasoljuk kikapcsolni.

<a name="00-prework.01-business-profile--prompt"></a>

### Ezt kérd Claude-tól

Ennél a leckénél még nem kell Claude. Ha bizonytalan vagy, mi mehet be, ezt kérdezheted egy új beszélgetésben:

```text
Egy workshopon a cégem árlistájából és egy korábbi ajánlatomból készítünk összefoglalót a Claude-ban.
Felsorolom, milyen adatok vannak a dokumentumokban. Mondd meg, melyiket érdemes kitakarnom, és miért.
Ne kérd el a dokumentumokat, csak a felsorolásomból dolgozz.
Adatok: [például: ügyfélnév, kapcsolattartó e-mail-címe, egyedi kedvezmény, termékár, szállítási határidő]
```

<a name="00-prework.01-business-profile--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** hozd létre a „Workshop-források” mappát, és írd be egy szöveges fájlba a weboldalad címét.
2. **3–7 perc:** tedd a mappába az árlistát és 1–2 korábbi ajánlatot.
3. **7–10 perc:** takard ki az ajánlatokból az ügyféladatokat a fenti szabály szerint.

<a name="00-prework.01-business-profile--check"></a>

### Ellenőrizd az eredményt

- A mappában ott a weboldal címe és legalább egy további forrás, vagy kiválasztottál egy gyakorlóvállalkozást.
- Egyik fájlban sincs ügyfélnév, személyes elérhetőség vagy jelszó.
- Tudod, hogy a cégednél kell-e engedély a levelezés AI-feldolgozásához.

<a name="00-prework.01-business-profile--help"></a>

### Ha elakadtál

Ha nincs árlistád vagy ajánlatod, elég a weboldal: a hiányzó részek „Nincs megadva” jelölést kapnak, és a DNS-ben teendőként látszanak. Ha weboldalad sincs, írj 5–6 mondatot arról, kinek mit adsz el; ez is forrás.

<a name="00-prework.01-business-profile--handoff"></a>

### Ezt viszed tovább

A „Workshop-források” mappa tartalmát a következő leckében feltöltöd a Claude-projektbe. A DNS-t az 1. blokkban ebből építed.

<a name="00-prework.01-business-profile--extra"></a>

### Ha maradt időd

Írd le 3 mondatban, kik a legjobb ügyfeleid és miért. A DNS ideális ügyfél (ICP) részéhez ez lesz a legerősebb forrás.

<a name="00-prework.02-account-check"></a>

## Claude, projekt és connectorok

**Állapot: review.**

**Azonosító:** `00-prework.02-account-check` · **Állapot:** review · **Időkeret:** 20 perc

<a name="00-prework.02-account-check--result"></a>

### Ezt készíted el

Egy „AI Sales Workshop – [cégnév]” projektet a Claude-ban, a tananyaggal és a sablonokkal feltöltve, kitöltött projektutasítással, valamint bekapcsolt levelező- és Google-kapcsolatot.

<a name="00-prework.02-account-check--needs"></a>

### Erre lesz szükséged

- **Fizetős Claude-előfizetés** (Pro vagy magasabb). Az ingyenes csomaggal a nap nem járható végig.
- **Claude asztali alkalmazás** a claude.com/download oldalról (Windows vagy Mac). A webes felület is működik; néhány connector beállítása csak weben megy.
- **Levelezés:** Gmail- vagy Google Workspace-fiók, vagy Microsoft 365 / Outlook-fiók.
- **Google-fiók** a CRM-táblázathoz (Google Táblázatok). Ha csak Microsoft-fiókod van, a CRM a projektben tárolt CSV-fájl lesz; lásd a 4. leckét.
- A tananyagcsomag: az `assistant.md`, a [00-s](00-prework.md), [01-es](01-business-foundations.md) és [05-ös](05-pipeline-review.md) modul Markdown-fájlja, valamint a [saját munkacsomag](../starter-kit/README.md) mappája.

<a name="00-prework.02-account-check--explanation"></a>

### Így működik

Egész nap egyetlen projektben dolgozol, a partnerblokkokban is. Így a Cég-DNS és az agentek minden beszélgetésben elérhetők, nem kell őket újra csatolni.

A connectorok a fiókodhoz tartoznak. Egy beszélgetésben a szövegmező melletti **+** menüben (vagy az eszközök ikonjánál) kapcsolhatod be vagy ki őket. Minden connectornál beállíthatod, melyik művelethez kér jóváhagyást a Claude (Tool permissions, eszközengedélyek). A küldő műveleteket (levél küldése, válasz, továbbítás) mindig „jóváhagyás kell” vagy „tiltva” állásba tedd.

<a name="00-prework.02-account-check--decisions"></a>

### Ezekről te döntesz

Melyik levelezőt kötöd be (Gmail vagy Outlook), vagy egyiket sem. Mit engedsz a Claude-nak: levélpiszkozatot igen, küldést nem.

<a name="00-prework.02-account-check--prompt"></a>

### Ezt kérd Claude-tól

Ha egy beállítási lépésnél elakadsz, nyiss egy beszélgetést, és kérdezd így:

```text
A Claude asztali alkalmazásban vagyok. Ezt szeretném beállítani: [például: Gmail connector bekapcsolása].
Ezt látom a képernyőn: [írd le, vagy csatolj képernyőképet].
Lépésenként mondd meg, hova kattintsak. Ha a felületed eltér, kérdezz vissza, ne találgass.
Jelszót és belépőkódot ne kérj tőlem.
```

<a name="00-prework.02-account-check--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** telepítsd és indítsd el a Claude asztali alkalmazást, lépj be. Beállítások → Képességek (Settings → Capabilities): kapcsold be a fájlkészítést (Create and edit files, régebbi néven Code execution and file creation). Enélkül a Claude nem tud letölthető fájlt készíteni.
2. **3–7 perc:** Projektek (Projects) → új projekt, neve: „AI Sales Workshop – [cégnév]”. A projekt tudásába (Project knowledge, + gomb) töltsd fel:
   - az `assistant.md` fájlt és a 00-, 01-, 05-ös modul `.md` fájlját;
   - a saját munkacsomagból a `company-dna.md`, `voice-profile.md`, `voice-checklist.md`, `crm-template.csv`, `metrics-template.csv`, `weekly-review.md`, `launch-plan.md`, `business-profile.md` fájlt és az `agents` mappa öt agentfájlját (`orchestrator.md`, `writer.md`, `reviewer.md`, `inbox.md`, `crm.md`);
   - a „Workshop-források” mappád fájljait (árlista, ajánlatok).
3. **7–9 perc:** nyisd meg a [projektutasítást](../starter-kit/project-instructions.md), másold ki a keretes szöveget, írd be a cégneved, és illeszd be a projekt utasításmezőjébe (Project instructions).
4. **9–15 perc:** Beállítások → Connectorok (Settings → Connectors). Kapcsold be:
   - a **Gmail** és a **Google Drive** connectort, ha Google-t használsz. Ha a listában a **Google Sheets** (Google Táblázatok) is szerepel, azt is;
   - a **Microsoft 365** connectort, ha Outlookot használsz. Személyes Outlook.com-fiókot a webes Claude-ban köss be. Céges Microsoft 365-fióknál a cég rendszergazdájának jóvá kell hagynia; ha ez nem megy, a leveleket bemásolva dolgozzuk fel.
5. **15–18 perc:** minden bekötött levelező connectornál nyisd meg az eszközengedélyeket, és a küldés, válasz, továbbítás műveletet állítsd jóváhagyásosra vagy tiltottra.
6. **18–20 perc:** a projektben nyiss új beszélgetést, kapcsold be a connectorokat a + menüben, és írd: „Milyen fájlokat látsz a projektben, és milyen connectorok vannak bekapcsolva?”

<a name="00-prework.02-account-check--check"></a>

### Ellenőrizd az eredményt

- A projekt neve „AI Sales Workshop – [cégnév]”, a tudásban legalább 17 fájl van.
- A projektutasításban a saját cégneved szerepel.
- A Claude a 6. lépés kérdésére felsorolja a fájlokat és legalább egy levelező connectort.
- A levélküldés jóváhagyáshoz kötött vagy tiltott.

<a name="00-prework.02-account-check--help"></a>

### Ha elakadtál

- **Nem látod a Projects menüt vagy a fájlkészítést:** ellenőrizd az előfizetésedet (Beállítások → Számlázás, Billing).
- **A levelező connector nem kapcsolódik:** folytasd nélküle. Az 1. és 5. blokkban a leveleidet bemásolva vagy a [kitalált mintapostafiókkal](../scenarios/office-plants/outputs/mailbox-sample.md) dolgozol.
- **Céges Microsoft 365, nincs rendszergazdai jóváhagyás:** ugyanígy, bemásolt levelekkel.

<a name="00-prework.02-account-check--handoff"></a>

### Ezt viszed tovább

A projektet egész nap használod. A partnerblokkokban is ebben nyiss új beszélgetést.

<a name="00-prework.02-account-check--extra"></a>

### Ha maradt időd

Kapcsold be a Google Naptár connectort is. Az 5. blokkban a holnapi teendőidet ide is felveheted.

<a name="00-prework.03-partner-accounts"></a>

## Partnerfiókok: Sales Bot, EstiWise, Brandiseer

**Állapot: review.**

**Azonosító:** `00-prework.03-partner-accounts` · **Állapot:** review · **Időkeret:** 10 perc

<a name="00-prework.03-partner-accounts--result"></a>

### Ezt készíted el

Belépés a Sales Botba és az EstiWise-ba, az EstiWise Claude-kapcsolatával. A Brandiseer-hozzáférés a partner értesítése szerint.

<a name="00-prework.03-partner-accounts--needs"></a>

### Erre lesz szükséged

A partnerektől kapott e-mailek (nézd meg a spam mappát is), valamint a weboldalad címe vagy szolgáltatásleírásod az EstiWise-regisztrációhoz.

<a name="00-prework.03-partner-accounts--explanation"></a>

### Így működik

A három partnerrendszert a Claude-ból vezérled. Mindegyik a saját blokkjában kerül elő, a délutáni 5. blokkban pedig egy ügyfélesetben kapcsoljuk össze őket.

| Partner és blokk | Mit csinálsz előre? | Mit csinálnak a mentorok a helyszínen? |
| --- | --- | --- |
| **Blackhole Media – Sales Bot** ([03-as modul](03-lead-generation.md)) | A workshop-fiókodat a partner előre létrehozza, a belépő linket e-mailben kapod. Lépj be egyszer. | Segítenek bekötni a Sales Bot connectort a Claude-ba. |
| **EstiWise** ([04-es modul](04-proposals-handoff.md)) | Regisztrálj az [estiwise.ai](https://estiwise.ai/) oldalon a Standard próbacsomagra (bankkártya nélkül), és kösd be az EstiWise-kapcsolatot a Claude-ba az EstiWise leírása szerint. | Ha a kapcsolat nem él, vagy nem jön meg a belépőkód, demófiókot adnak. |
| **Brandiseer** ([02-es modul](02-content-marketing.md)) | A blokk anyagát a Brandiseer véglegesíti. Ha előzetes regisztrációs linket kapsz, végezd el; egy közösségimédia-fiók vagy tesztfiók hasznos. | A blokk elején beállítjátok a szükséges kapcsolatot. |

<a name="00-prework.03-partner-accounts--decisions"></a>

### Ezekről te döntesz

Saját céggel vagy gyakorlóvállalkozással regisztrálsz az EstiWise-ba. A próbafiókok a saját fiókjaid; hogy a próbaidő után megtartod-e őket, később döntöd el.

<a name="00-prework.03-partner-accounts--prompt"></a>

### Ezt kérd Claude-tól

Az EstiWise bekötése után, a workshop-projektben, új beszélgetésben:

```text
Ellenőrizd, hogy él-e az EstiWise-kapcsolat: milyen eszközeid vannak, és milyen csomagban vagyok?
Semmit ne módosíts, ez csak kapcsolatpróba.
```

<a name="00-prework.03-partner-accounts--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** keresd meg a Sales Bot belépő e-mailjét, és lépj be egyszer.
2. **2–8 perc:** regisztrálj az EstiWise-ba, és kövesd az EstiWise leírását a Claude-kapcsolathoz (jellemzően: Beállítások → Connectorok → egyéni connector hozzáadása az EstiWise által megadott címmel). Futtasd a fenti kapcsolatpróbát.
3. **8–10 perc:** nézd meg, kaptál-e Brandiseer-értesítést; ha igen, végezd el.

<a name="00-prework.03-partner-accounts--check"></a>

### Ellenőrizd az eredményt

- Be tudsz lépni a Sales Botba.
- Az EstiWise-fiókod él, és a Claude válaszol a kapcsolatpróbára, vagy felírtad a hibát a technikai pulthoz.
- Tudod, mi a teendőd a Brandiseerrel.

<a name="00-prework.03-partner-accounts--help"></a>

### Ha elakadtál

Egyik partnerfiók sem feltétele a délelőttnek. Ha valami nem működik, írd fel, és szólj reggel a technikai pultnál vagy a blokk elején a partner mentorainak. Minden partnerblokkban van demófiók vagy mintaút.

<a name="00-prework.03-partner-accounts--handoff"></a>

### Ezt viszed tovább

A belépések a 02-es, 03-as és 04-es blokk bemenetei. Az 5. blokkban a Karmester ugyanezeket a kapcsolatokat használja.

<a name="00-prework.03-partner-accounts--extra"></a>

### Ha maradt időd

Nézd meg 5 percig a Sales Bot és az EstiWise felületét. Elég, ha tudod, hol vannak a fő menük.

<a name="00-prework.04-coach-check"></a>

## Indulási próba és CRM-tábla

**Állapot: review.**

**Azonosító:** `00-prework.04-coach-check` · **Állapot:** review · **Időkeret:** 10 perc

<a name="00-prework.04-coach-check--result"></a>

### Ezt készíted el

Egy „CRM – [cégnév]” Google-táblázatot a közös oszlopokkal, és a tanulási kísérő ✅/⚠️ ellenőrzőlistáját arról, mi működik.

<a name="00-prework.04-coach-check--needs"></a>

### Erre lesz szükséged

A kész projekt, a bekapcsolt connectorok és a [CRM-sablon](../starter-kit/crm-template.csv).

<a name="00-prework.04-coach-check--explanation"></a>

### Így működik

A **CRM** (ügyfélkapcsolat-kezelő) itt egy egyszerű táblázat: soronként egy ügyféleset, szakasszal és következő lépéssel. Azért Google-táblázat, mert nem kell hozzá fejlesztő, a Claude a connectorral olvasni és frissíteni tudja, te pedig bármikor megnyithatod. Ide érkeznek a Sales Bot leadjei, az EstiWise-ajánlatok és a levelekből kinyert érdeklődők. Ha már használsz HubSpotot vagy Pipedrive-ot, és van hozzá connector a Claude-ban, később azt is bekötheted; a workshopon a táblázattal dolgozunk.

A **tanulási kísérő** a Claude a projektedben, az `assistant.md` utasítás szerint. Indítómondatra vezet végig egy blokkon.

<a name="00-prework.04-coach-check--decisions"></a>

### Ezekről te döntesz

Google-táblázat, vagy a projektben tárolt CSV-fájl, ha nincs Google-fiókod. Kivel osztod meg a táblát: a workshopon senkivel.

<a name="00-prework.04-coach-check--prompt"></a>

### Ezt kérd Claude-tól

A workshop-projektben, új beszélgetésben, a connectorokat bekapcsolva:

```text
Kezdjük a felkészülés ellenőrzését.
```

A kísérő ekkor ellenőrzi: látja-e a projektfájlokat és a projektutasítást; a levelező connectorral ki tudja-e olvasni a legutóbbi beérkezett levél tárgyát (a tartalmát nem mutatja); megtalálja-e a „CRM – [cégnév]” táblázatot; élnek-e a partnerkapcsolatok. Az eredmény egy ✅/⚠️ lista teendőkkel.

<a name="00-prework.04-coach-check--steps"></a>

### Haladj végig ezeken

1. **0–4 perc:** Google Táblázatok → üres táblázat, neve „CRM – [cégnév]”. Fájl → Importálás → Feltöltés: a `crm-template.csv`. Importálási hely: „Jelenlegi munkalap cseréje”. Töröld a MINTA-01 sort.
2. **4–9 perc:** futtasd a fenti indítómondatot a projektben, és válaszolj a kísérő kérdéseire.
3. **9–10 perc:** a ⚠️ sorokat írd fel a reggeli technikai pulthoz.

<a name="00-prework.04-coach-check--check"></a>

### Ellenőrizd az eredményt

- A CRM-táblázat létezik, az első sorban a 15 oszlopnév van.
- A kísérő listájában a projektfájlok és a projektutasítás ✅.
- A levelezés és a CRM ✅, vagy ⚠️ és tudod a kézi utat (bemásolás, CSV).
- A partnerkapcsolatok állapota ismert.

<a name="00-prework.04-coach-check--help"></a>

### Ha elakadtál

Ha a Claude nem találja a táblázatot, a Google Sheets connector hiányozhat a listádból. Ilyenkor a CRM a projektben tárolt `crm-template.csv` másolata lesz; az 5. blokkban a Claude a frissített sorokat adja át, te pedig bemásolod a táblázatba.

<a name="00-prework.04-coach-check--handoff"></a>

### Ezt viszed tovább

Működő projekt, CRM-tábla és ellenőrzőlista. Reggel 09:20-kor az 1. blokk ebből indul: „Kezdjük az 1. blokkot.”

<a name="00-prework.04-coach-check--extra"></a>

### Ha maradt időd

Nyisd meg a [kitalált IrodaLiget Cég-DNS-t](../scenarios/office-plants/outputs/company-dna.md). Így reggel már tudod, mit fogsz építeni.

<a name="recovery"></a>

## Segítség elakadáskor

1. Mentsd a saját eddigi munkádat, és írd fel, melyik lépésnél akadtál el.
2. Reggel 08:30 és 09:00 között a technikai pultnál befejezzük a beállítást.
3. Ami ott sem megy, annak a kapcsolat nélküli útján haladsz: levelek bemásolva, CRM CSV-fájlban, partnerrendszer helyett demófiók vagy mintafájl.
4. A haladási naplóban az érintett lépésnél a végrehajtás `simulation`; a beállítási hibát a `gaps` listába írd.

Saját cégről mintára váltáskor külön munkapéldányt használj, és ne keverd a minta árait a saját ajánlatoddal. A statikus mintacsomag nem bizonyít működő partnerintegrációt.

<a name="examples"></a>

## Gyakorlópéldák

Három kitalált vállalkozás van a `scenarios/` mappában. A Cég-DNS, a hangprofil, a mintapostafiók és a CRM-minta az [IrodaLiget](../scenarios/office-plants/README.md) példán készült el; a 03-as és 04-es blokk mentőútja is erre épül.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Következő modul →](01-business-foundations.md)

Wenova × Brandiseer × Blackhole Media × EstiWise
