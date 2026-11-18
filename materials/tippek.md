<!-- presentation -->
# Jó tanácsok AI-val vitt kampányhoz

AI Sales & Marketing Workshop · 2026. november 19. · Piya Csaba blokkjához

**Állapot: draft.** Rövid, általános tanácsok kis- és középvállalkozásoknak, amelyek AI-segítséggel hirdetnek, gyűjtenek érdeklődőket és írnak leveleket. Minden tanács mögött legalább két független, nyilvános forrás áll (platformdokumentáció, hatósági útmutató vagy kutatás); a linkeket a tanácsnál találod. A platformok felülete és szabályai változnak: alkalmazás előtt nézd meg a hivatkozott oldal friss változatát.

<a name="terv"></a>

## Tervezés és ajánlat

### 1. Sürgetni csak valós határidővel és valós készlettel szabad.

- **Miért:** a fogyasztóvédelmi hatóságok a valótlan sürgetést (nullázódó visszaszámlálás, eltúlzott „már csak néhány hely”) megtévesztő gyakorlatnak tekintik.
- **Hogyan:** a határidő legyen valódi, és lejárta után az ajánlat tényleg változzon. A helyszám vagy a visszaszámlálás adatból jöjjön, ne szövegből. Az AI-szövegíró szabályai közé írd be: kitalált hiány és határidő nincs.
- **Források:** [FTC: Bringing Dark Patterns to Light (2022)](https://www.ftc.gov/reports/bringing-dark-patterns-light) · [CMA: Online Choice Architecture (2022)](https://www.gov.uk/government/publications/online-choice-architecture-how-digital-design-can-harm-competition-and-consumers)

<a name="hirdetes"></a>

## Hirdetés és űrlap

### 2. Ha minőségi érdeklődő kell, szűrj már az űrlapon.

- **Miért:** a hirdetési platformok űrlapjai alapból a mennyiségre optimalizálnak: gyorsak, előre kitöltöttek. A minőségi beállítás egy ellenőrző lépést vagy minősítő kérdést tesz a beküldés elé.
- **Hogyan:** használd a magasabb szándékú űrlaptípust, és tegyél fel egy-két feleletválasztós minősítő kérdést, amelyre a „nem” is kényelmes válasz. Az űrlap bevezetőjében mondd ki a lényeges feltételeket (ár, időpont, helyszín, mit kell hozni). Számolj azzal, hogy kevesebb lead jön.
- **Források:** [Meta: About Instant Form types](https://www.facebook.com/business/help/252352181957512/) · [Google Ads: About qualifying responses in lead forms](https://support.google.com/google-ads/answer/17050941?hl=en)

### 3. Az automatikus célzásbővítés túlléphet a megadott korhatáron: nézd meg a bontást.

- **Miért:** az AI-alapú közönségbeállításoknál a megadott kor és egyéb jellemzők sokszor csak javaslatok, a rendszer ezeken túl is megjelenítheti a hirdetést. Kemény korlát csak külön beállítással érhető el.
- **Hogyan:** indulás után egy napon belül nézd meg a kor és a megjelenési hely szerinti bontást. Ha egy korosztály nem lehet célcsoport, állítsd kemény korlátként, vagy kapcsold ki a közönségbővítést.
- **Források:** [Meta: About Advantage+ audience](https://www.facebook.com/business/help/273363992030035) · [Google Ads: About optimized targeting](https://support.google.com/google-ads/answer/12463119)

<a name="lead"></a>

## Lead-kezelés

### 4. Minden érdeklődőnél tárold a platform azonosítóját és a lead állapotát a CRM-ben.

- **Miért:** a platformok csak akkor tudják megmondani, melyik hirdetésből lett valódi ügyfél, ha a CRM-ből visszakapják a lead sorsát, és ehhez egy azonosító (lead-azonosító, kattintásazonosító vagy titkosított e-mail-cím) kell.
- **Hogyan:** a lead-azonosítót mentsd el a CRM-be az első pillanatban. Legyenek egyértelmű állapotok (új, megkeresve, minősített, jelentkezett, fizetett), és ezeket naponta frissítsd.
- **Források:** [Meta: Conversions API for CRM integration](https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration) · [Google Ads: An easier way to import offline conversions](https://support.google.com/google-ads/answer/11909980?hl=en)

<a name="hang"></a>

## Tartalom és hang

### 5. A céged hangját írott szabályként és példákkal add át az AI-nak.

- **Miért:** a nyelvi modellek a megadott utasítások és minták alapján igazítják a hangnemet és a stílust; szabály és példa nélkül általános, „bárkié lehetne” szöveg születik.
- **Hogyan:** egyoldalas stíluslap minden szövegíró feladat elején: kinek írsz, megszólítás, tegezés vagy magázás, tiltott szavak és ígéretek, írásjelek. Adj mellé két-három jó és egy rossz mintát a saját anyagaidból.
- **Források:** [OpenAI: Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) · [Anthropic: Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

### 6. Az AI-val írt szöveg minden tényállítását forráshoz kösd, és küldés előtt ellenőrizd.

- **Miért:** a generatív modellek magabiztosan írhatnak valótlant (hallucináció, konfabuláció). A gyártók és a szabványalkotók is a forráshoz kötést és az ellenőrzést ajánlják.
- **Hogyan:** add meg az AI-nak a tényforrást (ár, időpont, helyszín, feltételek), kérd, hogy minden állításhoz idézze a forrást, és amit nem talál, azt hagyja ki. Az ár, a határidő és a jogi állítás mindig ember által ellenőrzött legyen.
- **Források:** [Anthropic: Reduce hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) · [NIST AI 600-1: Generative AI Profile (2024)](https://doi.org/10.6028/NIST.AI.600-1)

<a name="ai-csapat"></a>

## AI-csapat és jóváhagyás

### 7. Készítő és ellenőrző legyen külön: egy AI-munkamenet ír, egy másik, független értékel.

- **Miért:** a készítő-értékelő felállás (egy modell készít, egy másik visszajelez) akkor hasznos, ha világosak az értékelési szempontok. A generatív AI kockázatkezelési ajánlásai is többféle értékelést és emberi felügyeletet kérnek.
- **Hogyan:** az ellenőrző a tényeket, a szabályokat és a kész anyagot kapja, a készítő érvelését nem. A kimenet: blokkoló, súlyos és kisebb hibák, bizonyítékkal. Javítás után csak a blokkolókat nézesd újra.
- **Források:** [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) · [NIST AI 600-1: Generative AI Profile (2024)](https://doi.org/10.6028/NIST.AI.600-1)

### 8. Költést, küldést és visszafordíthatatlan lépést ember hagyjon jóvá.

- **Miért:** az AI-ügynökökről szóló gyártói útmutatók azt ajánlják, hogy a nagy kockázatú műveletek (pénzügyi hatás, írási jog, visszafordíthatatlanság) előtt álljon meg az ügynök, és ember döntsön.
- **Hogyan:** sorold kockázati szintbe az ügynök eszközeit (csak olvas, ír, költ, küld). Az alapállapot a próbafutás és az előnézet legyen; hirdetést szüneteltetve építs, levelet címzettszámmal és mintával mutass; a jóváhagyás után indul az éles lépés.
- **Források:** [OpenAI: A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) · [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

<a name="meres"></a>

## Mérés

### 9. Ne a lead-árat optimalizáld, hanem a minősített érdeklődőt és a fizető ügyfelet.

- **Miért:** a platformok külön céllal és adatvisszaküldéssel támogatják, hogy a rendszer a minősített vagy fizető ügyfelekre tanuljon, ne a puszta űrlapkitöltésekre.
- **Hogyan:** határozd meg, melyik CRM-állapot számít minősítettnek, küldd vissza rendszeresen a platformnak, és a kampányt ezen mérd. A döntéseidhez (folytatás, emelés, leállítás) a lead-ből lett jelentkezés legyen a mérce.
- **Források:** [Meta: Conversions API for CRM integration](https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration) · [Google Ads: An easier way to import offline conversions](https://support.google.com/google-ads/answer/11909980?hl=en)

<a name="adat"></a>

## Adat és biztonság

### 10. Az adatkezelési tájékoztató az adatgyűjtés pillanatában legyen elérhető, és fedjen le minden új eszközt.

- **Miért:** a GDPR szerint az érintettet az adatgyűjtéskor kell tájékoztatni a célról, a jogalapról, a címzettekről és a megőrzésről; az európai adatvédelmi testület útmutatója szerint ennek tömörnek, érthetőnek és könnyen elérhetőnek kell lennie.
- **Hogyan:** a hirdetési űrlap és a kérdőív linkje az éles tájékoztatóra mutasson, mielőtt elindítod. Minden új eszköz (űrlap, kérdőív, AI-szolgáltató) előtt nézd meg, hogy a tájékoztató megnevezi-e az adatkört, a célt és az adatfeldolgozót.
- **Források:** [GDPR (EU) 2016/679, 13. cikk](https://eur-lex.europa.eu/eli/reg/2016/679/oj) · [Article 29 Working Party (EDPB által elfogadva): Guidelines on transparency, WP260 rev.01](https://ec.europa.eu/newsroom/article29/items/622227)

### 11. Az automatikus leveleket hitelesített saját domainről küldd.

- **Miért:** a nagy levelezőrendszerek minden feladótól legalább SPF-et vagy DKIM-et kérnek; a tömeges feladóktól mindhármat (SPF, DKIM, DMARC), a feladói domain igazítását és egy kattintásos leiratkozást.
- **Hogyan:** indulás előtt állítsd be és ellenőrizd az SPF-et, a DKIM-et és a DMARC-ot. A marketinglevélben legyen látható leiratkozás. Használj egyértelmű feladót és válaszcímet, és figyeld a panaszarányt.
- **Források:** [Google: Email sender guidelines](https://support.google.com/a/answer/81126) · [Yahoo Sender Hub: Best practices](https://senders.yahooinc.com/best-practices/)

<a name="lista"></a>

## Ötpontos ellenőrzőlista indulás előtt

1. A határidő és a készlet valós, és egy tényforrásból idézi minden szöveg.
2. Az űrlap a lényeges feltételeket kimondja, és van rajta minősítő kérdés.
3. A lead-azonosító és az állapot a CRM-be kerül, és visszamegy a platformnak.
4. Szöveg, kreatív és automatizmus független ellenőrzésen ment át, és ember hagyta jóvá.
5. Az adatkezelési tájékoztató élesben van, a levelezés hitelesített.
