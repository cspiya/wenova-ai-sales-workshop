# AI Sales & Marketing Workshop

[HTML-változat](index.html)

## Tartalom

- [Program és célközönség](#agenda)
- [A tanulási út](#modules)
- [Saját munkacsomag és AI-kísérő](#start)
- [Három kitalált gyakorlóvállalkozás](#scenarios)
- [Eszközök és hozzáférések](#access)
- [Az elkészülő munkadarabok](#outputs)
- [Partnerek és előadók](#partners)
- [Fogalomtár](#glossary)
- [Felhasználás](#rights)

<a name="main"></a>

Résztvevői tananyag

A Cég-DNS-től az ajánlatig és a CRM-ig: saját AI-csapat a Claude-ban, a saját cégeden.

<a name="agenda"></a>

## Program és célközönség

**Wenova × Brandiseer × Blackhole Media × EstiWise**

**2026. november 19., csütörtök, 09:00–17:00 (érkezés és technikai ellenőrzés 08:30-tól) · CEU Nádor Event Center, Budapest V., Nádor u. 15., N13 412/A terem (4. emelet; belépőkártya a recepción) · legfeljebb 30 résztvevő**

**Honnan töltöd le az anyagot?** A Claude Desktop Cowork módjában egy mondattal telepíted: „Telepítsd a workshop tananyagát: https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md”. Részletek: [felkészülés](modules/00-prework.md#00-prework.01-install) és [telepítési futtatókönyv](TELEPITES.md). Kézi letöltés: [ZIP](https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip); böngészőben: [github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials](https://github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials). Terminálhoz szokottaknak: [haladó út Claude Code-dal](CLAUDE-CODE.md).

<a name="agenda-1"></a>

### Négy hazai szakmai csapat, egy közös értékesítési folyamat

Magyarországi, AI-alapú megoldások fejlesztésében, bevezetésében és üzleti alkalmazásában tapasztalt csapatok fogtak össze, hogy gyakorlati tudásukat átadják a magyar vállalkozásoknak. A Wenova szervezésében közösen mutatjuk meg, hogyan építhető AI-val automatizált marketing- és sales pipeline.

| Partner | Tudás és szerep | Előadó |
| --- | --- | --- |
| Wenova — szervező és szakmai partner | AI-bevezetés, folyamatoptimalizálás, agentikus működés és a közös tanulási útvonal | Piya Csaba, Kemény Krisztián |
| Brandiseer | Márkaazonos képkészítés és tartalom, kampány-előkészítés | Sorok Dániel |
| Blackhole Media | B2B leadgenerálás, LinkedIn-megkeresés, sales automatizáció | Bölcskei Balázs, Nagy Bogáta |
| EstiWise | Igényfelmérés, szabályalapú árazás és ajánlatautomatizáció | Gyömrei Máté, CommIT Smart Kft. |

<a name="agenda-2"></a>

### Kinek szól?

Magyar KKV-k, közép- és nagyvállalatok tulajdonosainak, marketing- és értékesítési szakembereinek, operatív és digitalizációs vezetőinek. Cégenként egy üzleti döntéshozó és egy operatív munkatárs együtt is dolgozhat. A cél kisebb vállalkozásnál egy teljes szűk folyamat, nagyvállalatnál egy csapat pilotja.

<a name="agenda-3"></a>

### Mit építünk?

Cég-DNS és saját AI-csapat → tartalom a céged hangján → LinkedIn-megkeresés és leadkezelés → igényfelmérés és ajánlat → levelek, CRM és egy ügyfél végig. A **Cég-DNS** egy oldal arról, kinek, mit és milyen hangon adsz el; reggel készül, és minden blokk ebből dolgozik. A nap végére a saját cégeden kipróbált folyamat, működő agentek és konkrét holnapi terv készül.

<a name="agenda-4"></a>

### Előzetes felkészülés

A workshop előtt kb. 55 perc a [felkészülési modul](modules/00-prework.md) szerint: Claude-előfizetés és Claude Desktop, a tananyag telepítése egy mondattal egy saját munkamappába, a levelező és a Google-táblázat bekötése, Brandiseer- és EstiWise-fiók (a Buffer-fiók választható), a saját források összegyűjtése. Ami nem sikerül, azt reggel 08:30-tól a technikai pultnál befejezzük.

<a name="agenda-5"></a>

### Napi program

A pontos idővonal, előadók és blokkonkénti eredmények: **[A nap menete](schedule.md)**.

Általános, forrásokkal alátámasztott tanácsok AI-val vitt kampányhoz: **[Jó tanácsok](tippek.md)**.

| Időpont | Blokk | Gazda |
| --- | --- | --- |
| 08:30–09:00 | Érkezés, technikai ellenőrzés | Wenova |
| 09:00–09:20 | Nyitás | Wenova |
| 09:20–10:30 | 1. Cég-DNS és saját AI-csapat | Wenova |
| 10:45–12:15 | 2. Tartalom a céged hangján | Brandiseer |
| 13:00–14:30 | 3. LinkedIn-ügyfélszerzés és leadkezelés | Blackhole Media / Sales Bot |
| 14:45–16:15 | 4. Igényfelmérés és ajánlatadás | EstiWise |
| 16:15–16:50 | 5. Folyamatpróba: levelek, CRM, egy ügyfél végig | Wenova |
| 16:50–17:00 | Zárás | Wenova |

Minden partnerblokk felépítése: rövid bevezető, vezetett gyakorlat a saját cégeden, ellenőrzés és pótlás. Az előző blokk eredményét a következő használja.

<a name="agenda-6"></a>

### A nap eszköze: Claude Desktop, Cowork mód

Egész nap egyetlen Cowork-projektben dolgozol, a gépeden lévő `Wenova-AI-Sales-Workshop` munkamappában: a `Tananyag/` a workshop anyaga, a `Munka/` a te eredményeid. A Claude a mappa [AGENTS.md](AGENTS.md) fájlja szerint dolgozik; a Cég-DNS, a hangprofil és a nyolc agent (Karmester, Író, Ellenőr, CEO, Marketing, Sales, Postás, CRM) innen dolgozik. Vizuális eredményeket (kampányváz, posztelőnézet, a nap összefoglalója) HTML-fájlként kapsz, a böngészőben nyitod meg. A levelezőt, a Google-táblázatot és a három partnerrendszert connectorral (engedélyezett kapcsolattal) éred el a Claude-ból. Ahol egy kapcsolat nem működik, mintafájllal vagy kézi lépéssel folytatod, és ezt jelöljük.

<a name="agenda-7"></a>

### Elakadás esetén is folytatható

A személyes LinkedIn bekötése nem feltétel: a Sales Bot-gyakorlat ma sandboxban (gyakorló környezetben) fut. Minden modulhoz mentőcsomag tartozik a kitalált IrodaLiget-mintán; a saját munka megtartása mellett abból folytatható a következő lépés. Kifelé semmi nem megy ki a jóváhagyásod nélkül: levél, üzenet és ajánlat piszkozat marad. Posztot a Claude csak akkor ütemezhet, ha kifejezetten jóváhagytad a csatornát, a szöveget és az időpontot; ami be van ütemezve, az ténylegesen megjelenik, ezért ha ezt nem szeretnéd, hagyd piszkozatban.

<a name="agenda-8"></a>

### Hazavihető eredmény

Claude-projekt a saját Cég-DNS-eddel és hangprofiloddal; nyolc agent; kampányanyagok; minősített leadek és üzenetsor; ajánlattervezet; CRM-tábla heti méréssel; egy végigvitt ügyféleset; holnapi indulási terv és heti rutin.

**Szervező: Wenova · Szakmai partnerek: Brandiseer, Blackhole Media, EstiWise.**

<a name="modules"></a>

## A tanulási út

Szerkesztés alatt álló tananyag. A leckék draft/review állapota jelzi a készültséget.

- [**Felkészülés: Claude, kapcsolatok és saját források** 00-prework](modules/00-prework.md)

- [**Cég-DNS és saját AI-csapat** 01-business-foundations](modules/01-business-foundations.md)

- [**Márkaazonos tartalom és kampány** 02-content-marketing](modules/02-content-marketing.md)

- [**Ügyfélszerzés és leadkezelés** 03-lead-generation](modules/03-lead-generation.md)

- [**Ajánlatadás és belső átadás** 04-proposals-handoff](modules/04-proposals-handoff.md)

- [**Folyamatpróba: levelek, CRM, egy ügyfél végig** 05-pipeline-review](modules/05-pipeline-review.md)

Kitekintésként, nem kötelező: **[Demók](demos/README.md)**, például a hangügynök-labor (AI-telefonos asszisztens a böngészőben, kitalált adatokkal).

<a name="start"></a>

## Saját munkacsomag és AI-kísérő

A telepítés a [starter-kit](starter-kit/README.md) sablonjait is a munkamappádba teszi; feltölteni semmit nem kell ([felkészülés](modules/00-prework.md)). Az [asszisztens instrukciója](assistant.md) a tanulási kísérő: a „Kezdjük az 1. blokkot” mondatra végigvezet. Saját cégből vagy az alábbi minták egyikéből dolgozz.

[Indulás a kivetítőn](indulas.md) · [AGENTS.md](AGENTS.md) · [Telepítés](TELEPITES.md) · [Projektutasítás](starter-kit/project-instructions.md) · [Ütemezett feladatok](starter-kit/scheduled-tasks.md) · [Cég-DNS sablon](starter-kit/company-dna.md) · [Agentek](starter-kit/agents/README.md) · [Haladási napló](starter-kit/progress.json)

<a name="scenarios"></a>

## Három kitalált gyakorlóvállalkozás

- [**IrodaLiget** Kitalált példa, árlista és összefüggő mintakimenetek.](scenarios/office-plants/README.md)

- [**CégesKép** Kitalált példa, árlista és összefüggő mintakimenetek.](scenarios/business-photography/README.md)

- [**WebŐr** Kitalált példa, árlista és összefüggő mintakimenetek.](scenarios/website-maintenance/README.md)

<a name="access"></a>

## Eszközök és hozzáférések

Fizetős Claude-előfizetés (Pro vagy magasabb) és a Claude Desktop (Cowork mód); Gmail- vagy Microsoft 365-levelezés; Google-fiók a CRM-táblához. Előre: Brandiseer-fiók a felvett márkáddal ([brandiseer.hu](https://brandiseer.hu): Try My Brand → Add Brand) és Pro csomag a WENOVA kóddal (az első hónap ingyenes), választhatóan ingyenes Buffer-fiók ([buffer.com](https://buffer.com)) legalább egy közösségimédia-oldallal (a 02-es blokk bónuszfeladatához), EstiWise-regisztráció bankkártya nélkül ([admin.estiwise.ai/auth/register](https://admin.estiwise.ai/auth/register)). A Sales Bothoz ([sales-bot.io](https://sales-bot.io)) előre nincs teendőd: a hozzáférést a helyszínen, a 03-as blokk elején kapod; a LinkedIn-belépésed legyen kéznél. A partnereszközökre nem kell fizetned: a Brandiseerhez a WENOVA kód ad egy hónap ingyenes Pro csomagot, a többi eszközhöz a napra mindenki megkapja a használati keretet. A részletes lépések a [felkészülési modulban](modules/00-prework.md) vannak. Személyes LinkedIn-kapcsolat nélkül is végig lehet menni a napon.

<a name="outputs"></a>

## Az elkészülő munkadarabok

Minden output a résztvevő saját munkacsomagjába kerül. A példavállalkozás és az ügyfél azonosítója a láncon végig azonos. A nyitott adat értéke `open`; nem nullából vagy kitalált számból számolunk. Pénz: pénznem, nettó/bruttó jelölés és egység mindig kell.

| Fájl | Kötelező mezők |
| --- | --- |
| company-dna.md | Metaadat (verzió, státusz, gazda), ICP, ajánlatok offer\_id-val, bizonyíték, hangnem, Mondjuk / Nem mondjuk, források, hiányok |
| voice-profile.md | Tegezés/magázás, megszólítás, mondathossz, következő lépés, záróformula, kerülendő kifejezések |
| business-profile.md | business\_id, business\_name, offer\_id, offer, audience, problem, outcome, scope, exclusions, pricing\_basis, channel, next\_action, assumptions |
| sales-strategy.md | offer\_id, audience, channel, message, next\_action, success\_metric |
| ai-work-instructions.md | goal, inputs, allowed\_actions, review\_points, missing\_data\_rule |
| brand-brief.md | business\_id, voice, message, visual\_direction |
| campaign-plan.md | offer\_id, audience, posts, image\_brief, video\_outline, channel, call\_to\_action |
| leads.csv | lead\_id, company, fit\_reason, status, next\_action |
| outreach.md | lead\_id, first\_message, followup, stop\_condition |
| customer-brief.md | lead\_id, offer\_id, need, quantity, constraints, open\_questions |
| proposal.md | proposal\_id, lead\_id, offer\_id, scope, quantity, unit\_price, currency, price\_basis, total, assumptions, status |
| handoff.md | proposal\_id, decision\_status, owner, next\_task, due |
| pipeline-review.md | case\_id, results, execution\_mode, evidence, gaps, next\_step |
| CRM – [cégnév] (Google-táblázat) | CRM lap: case\_id, company, source, offer\_id, stage, next\_step, next\_step\_due …; Heti mérés lap: week, stage, metric\_id, value, source |
| launch-plan.md | Három holnapi lépés, heti rutin, ami még nem működik, mérőszám |

Az ajánlat számítását az árlista és a mennyiség alapján külön ellenőrizzük. A `draft` ajánlat nem elfogadott megrendelés. Eszközspecifikus formátumból a modul végén a közös formátumba exportálunk vagy átalakítunk.

<a name="partners"></a>

## Partnerek és előadók

| Partner | Előadók | Szerep / weboldal |
| --- | --- | --- |
| Wenova | Piya Csaba, Kemény Krisztián | Szervező |
| Brandiseer | Sorok Dániel | [brandiseer.com](https://brandiseer.com/) |
| Blackhole Media | Bölcskei Balázs, Nagy Bogáta | [blackholemedia.io](https://blackholemedia.io/), [sales-bot.io](https://sales-bot.io/) |
| EstiWise | Gyömrei Máté | [estiwise.ai](https://estiwise.ai/), CommIT Smart Kft. |

<a name="glossary"></a>

## Fogalomtár

- **Cég-DNS:** egy oldal arról, kinek, mit és milyen hangon ad el a cég; minden állítás forrással, a hiány „Nincs megadva”.
- **ICP (ideal customer profile):** az ideális ügyfél leírása: iparág, méret, döntéshozó, probléma, kizáró jel.
- **Agent:** állandó feladatleírás, amelyet a Claude egy indítómondatra követ.
- **Karmester (orchestrator), Író (maker), Ellenőr (reviewer):** a koordináló, a készítő és a friss beszélgetésben független ellenőrző szerep.
- **Projekt (Claude Project):** munkaterület saját utasítással és feltöltött fájlokkal.
- **Skill:** feladatleírás (SKILL.md), amelyet a Claude magától betölt, ha illik a kéréshez.
- **Connector:** engedélyezett kapcsolat a Claude és egy másik szolgáltatás között.
- **CRM:** az ügyfélesetek nyilvántartása szakasszal és következő lépéssel.
- **Lead:** lehetséges ügyfél, akinek az illeszkedését még vizsgáljuk.
- **Pipeline:** az érdeklődéstől a következő üzleti döntésig vezető állomások.
- **AI-first:** a munkafolyamatot eleve AI-támogatással tervezzük meg.
- **AI citizen:** üzleti munkatárs, aki érti, irányítja és ellenőrzi az AI-val végzett munkát.
- **MCP / API:** eszközök és AI közötti szabályozott kapcsolódás technikai módjai.
- **Checkpoint:** ellenőrizhető haladási pont.
- **Sandbox:** elkülönített tesztkörnyezet.
- **Simulation:** a működés bemutatása mintaadatokkal, valódi külső művelet nélkül.

<a name="rights"></a>

## Felhasználás

[Újrafelhasználás és márkahasználat](RIGHTS.md) · [Tananyagverzió](VERSION)

Wenova × Brandiseer × Blackhole Media × EstiWise
