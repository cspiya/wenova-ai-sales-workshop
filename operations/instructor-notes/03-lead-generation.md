# 03-lead-generation

[HTML-változat](03-lead-generation.html)

[Kapcsolódó tananyag](../../materials/modules/03-lead-generation.md)

<a name="notes"></a>

Belső oktatói jegyzet · review

**Státusz: review – oktatói próbára vár.**

Előadók: Bölcskei Balázs (bemutató és gyakorlat), Nagy Bogáta (mentor a gyakorlat alatt, majd a záró sales blokk). Csaba kérésére ketten jövünk, mert a résztvevők egyszerű lépéseken is elakadnak.

15 perc bemutató + 3 × 20 perc gyakorlat + 15 perc ellenőrzés és pótlás. Ha marad idő, a záró ajánlat és kérdések is ebbe a 15 percbe férnek.

<a name="notes-1"></a>

### Előkészítés a workshop előtt

- A Blackhole Media előre létrehozza a résztvevők Sales Bot-hozzáférését.
- A hozzáférést a helyszínen, a 03-as blokk elején adjuk át. Ha valaki elakad, az oktató a résztvevő helyén, a saját laptopján segít.
- A workshop-profilok **nincsenek LinkedInhez kötve**; a leadlista 100 főben van korlátozva, hogy senki ne húzza le a teljes adatbázist, és semmi ne menjen ki.
- Ellenőrizni kell, hogy az MCP-n keresztül működik-e az AI brain kitöltése, a lista- és kampánylétrehozás, valamint a válaszok listázása.
- A 2. lecke végén kérd el a résztvevő által a CSV-ből kiválasztott `lead_id`-t. Ehhez a leadhez tölts be kitalált érdeklődő választ, ha a gyakorlókörnyezetben egyeztethető az azonosító. Ha nincs egyező válasz, adj teljes mintaláncot.
- MCP-próba (2026-11-16, tesztfiókban): a piszkozat kampány, a háttérben futó leadkeresés, a lead státusza és jegyzete, valamint az üzenetsorozat mentése és visszaolvasása működik. A kampányt MCP-ről nem lehet elindítani.
- Az AI brain írása az MCP-ben elkészült (2026-11-17-i próba): a szöveges forrás (cég-DNS) és a mezők kézi javítása működik. A weboldalas forrás a 2026-11-18-i próbán már kitöltötte az ajánlat összes mezőjét, 1–2 perc alatt; a szöveges forrás kb. 45 másodperc. Mindkettő a háttérben fut: hívás után egy percig várni kell, és utána megnézni a brain-t.
- A gyakorló válaszokat a demo-válaszokat betöltő eszközzel (admin) töltjük be a résztvevők workspace-ébe; semmi nem megy ki.
- Connector a résztvevőknél: Beállítások → Connectors → „Add custom connector”, URL `https://app.sales-bot.io/api/mcp`, Connect, belépés és engedélyezés.
- A résztvevők csak a saját workspace-ükhöz kötött tokent kapjanak. A kivetítőn ne admin tokennel mutassunk, mert az minden ügyfél-workspace-t látja.
- A cégméret-szűrő javult: a rossz méretű cégeket kihagyja, és nem von le rájuk kreditet (20 kértből 14 jött). Az iparág viszont téved (szoftveres szűrőre felsőoktatási, pénzügyi cégek is jöttek): ez jó példa a minősítés fontosságára, a gyakorlat elején mondjuk el.
- Végigpróba (2026-11-18): a sorrend leadlista → kampány a listára. Ha a keresést a kampányhoz kötjük lista nélkül, a kampány visszaolvasva „nincs közönség”, és a leadeket nehéz kilistázni.
- A célcsoporthoz illeszkedés a CSV-ben szerepel (`qualified` vagy `open`). A Sales Bot `Interested` státuszát csak érdeklődő válasz után állítsuk be.
- Kampányonként adjunk meg válaszcélt, különben az AI angol alapcélt használ („20-minute demo call”). Foglalási link nélkül a válaszjavaslat időpontot kérdez.
- A {COMPANY} változóra ne kerüljön rag: a próbán „a Innomedio Kft.-nál” lett belőle.
- A leadkvótát ellenőrizni kell: a kis csomag havi 500 lead, a workshopon fejenként legfeljebb 100.

<a name="notes-2"></a>

### Bemutató

15 perc, a gyakorlat előtt. Csaba kérése: az elején néhány dia arról, miért jó, hogyan működik, mik az alternatívák, és hogyan szokták ezt csinálni a sales csapatok. A vetített diák ezt a sorrendet követik.

#### Így csinálták eddig

1. **Adatbázis vásárlás:** például az Optentől, minden magyar céggel, e-mail-címmel és telefonszámmal.
2. **Hideghívás:** a megvett listát végigtelefonálták.
3. **E-mail kampány:** tömeges hideg e-mailek ugyanarra a listára.
4. **Kézi keresés:** újabban Apollo-kreditekkel vagy egyesével a LinkedInen.

#### Miért nem elég ma már?

- **Pontatlan célzás:** az adatbázist csak TEÁOR-számok alapján lehet szűrni, ez nem mindig fedi a valóságot. Ma már a cégek weboldalának szövege alapján is lehet célozni.
- **Romló kézbesítés:** a Gmail és az Outlook egyre szigorúbban szűri a hideg e-maileket, a hideghívást pedig az emberek egyre jobban utálják.
- **Egy üzenet kevés:** a konverzió egy jól időzített üzenetsorozatból jön, nem egyetlen megkeresésből. Ez rengeteg follow-up és iszonyatosan sok kézi munka.

#### Miért a LinkedIn?

Ott van a célközönség, és ott épül a bizalom. Magyarországon kb. 2 millió LinkedIn-tag van (a felnőttek kb. 25%-a, DataReportal Digital 2026), és havonta kb. 500 ezren lépnek be (LinkedIn uniós DSA-adat); világszerte 1 milliárd+ szakember.

- **Személyes profilról:** emberi hangon lehet írni. Ha később éles megkeresést terveztek, a szöveg célja és tartalma alapján beszéljétek meg, reklámról van-e szó. Mutasd meg a [tananyag rövid példáit](../../materials/modules/03-lead-generation.md#03-lead-generation.02-personalize-outreach--explanation).
- **Egymást erősítik:** posztolsz, építed a brandedet, látják a hitelességedet; aki bekerül a kapcsolati hálódba, a posztjaidat is látja.
- **Hosszú távú befektetés:** a network a kampány után is a tiéd: bármikor eléred őket, és később is látnak.

A Blackhole Media 2017 óta foglalkozik LinkedIn-megkeresésekkel.

#### A rejtett szivárgás: a válaszkezelés

A legtöbb lead nem a megkeresésnél vész el, hanem utána. Több száz együttműködés után azt láttuk, hogy a sales csapatok nem kezelik rendesen a válaszokat, és nem követik a leadeket. Kisebb cégeknél sokszor maga a cégvezető salesel, sok más feladata mellett. Külön CRM-re pedig extra költséget fizetnek.

#### A megoldás: a Sales Bot

Sok outreach tool van; a Sales Bot nem csak üzenetet küld, hanem végigviszi a teljes folyamatot. 2018 óta fejlesztjük, sok verzión vagyunk túl, a 2026 elején kiadott verzió már az AI-ra épül.

| Mikor? | Mit végez el? |
| --- | --- |
| Kampány előtt | Az AI felépíti a célközönséget, és bevált sablonokból megírja az üzeneteket a céged adatai alapján. |
| Kampány | Szekvenciákat futtat: bejelölés és üzenetek, 1st-degree kampány, InMail. Hamarosan e-mail küldés is. |
| Utánkövetés | Az AI kategorizálja és megválaszolja a válaszokat, időpontot foglal, e-mailt ír; a dealeket a CRM-ben követed. |

Mindez az **AI brainre** épül: megtanulja a céged, az ajánlataidat és az ideális ügyfeledet, és ez alapján dolgozik a nevedben. Magyar rendszer: jól ír magyarul, tegeződve vagy magázódva, és ismeri a magyar üzleti szokásokat, például hogy sokan szívesebben egyeztetnek időpontot kézzel.

<a name="notes-3"></a>

### Gyakorlat

Csaba kérése: ne a platformon kattintgassunk, hanem mindent a Claude-ban csináljunk. A platformot csak a kivetítőn mutatjuk: a leadek átnézését, törlését, a CSV-feltöltést, a szűrőket (senioritás, pozíció, cégméret) és a beérkező üzeneteket a válaszjavaslatokkal.

- [AI brain és leadlista](../../materials/modules/03-lead-generation.md#03-lead-generation.01-qualify-leads--explanation): a cégméret-szűrőnél kell egy kis elmélet, mert a Claude meg fogja kérdezni, és a legtöbben nem tudják, hogyan működnek a szűrők.
- [Kampány](../../materials/modules/03-lead-generation.md#03-lead-generation.02-personalize-outreach--explanation): itt mutassuk be a kampánytípusainkat. Mindenki átnézi a saját üzeneteit, és belemódosíthat.
- [Válaszkezelés](../../materials/modules/03-lead-generation.md#03-lead-generation.03-process-reply--explanation): MCP-ben csak kilistázzuk a válaszokat; a válaszjavaslatokat az inboxban mutatjuk meg. Utána röviden: naptár- és e-mail-bekötés, időpontfoglalás, CRM pipeline.

Gyakori elakadás: Teams-meetingbe lépésnél be kell írni a nevet. Öt perc sikertelen hibaelhárítás után ajánld fel a mentőcsomagot; a saját munka maradjon meg.

<a name="notes-4"></a>

### Záró sales blokk (Bogi)

Az utolsó 15 percben először azonosítsátok a leadet a három átadandó fájlban, és pótoljátok a hiányzó ügyféligényt. Ha kell, váltsatok teljes mintaláncra. Az ajánlat és a kérdések a maradék időbe kerülnek:

1. **Eredmények:** ügyféllogók, képernyőképek a saját rendszerből, hány leadet hoztunk június óta. Csak ellenőrzött számot mutatunk.
2. **Mire lehet számítani:** árazás, feltételek és a workshop-kedvezmény.
3. **Ajándék:** LinkedIn profil optimalizáció.
4. **Jelentkezés:** QR kód, ami egy e-mailre vezet („Wenova-kedvezményt kérek”), vagy személyesen: estig ott vagyunk.
5. Kérdések.

Nyitott, a workshop előtt eldöntendő: az árazás és a kedvezmény pontos összege; hogy a Black Friday ajánlatot (25% kedvezmény a beállításra) is megemlítjük-e, vagy csak 1–2 hét után küldjük azoknak, akik nem reagálnak; a június óta hozott leadek száma; a QR kód célcímzettje.

<a name="notes-5"></a>

### Átadás

A [customer-brief.md](../../materials/modules/03-lead-generation.md#03-lead-generation.03-process-reply--handoff) a 04-es modul (EstiWise) bemenete; a következő modul gazdája próbálja ki az átvételt.

## Kapcsolódó tananyagrészek

A hivatkozások a bal oldali tananyagnézetet a megfelelő szakaszra állítják.

- [Célközönség és öt lead értékelése](../../materials/modules/03-lead-generation.md#03-lead-generation.01-qualify-leads)
- [Kampány és személyre szabott üzenetek](../../materials/modules/03-lead-generation.md#03-lead-generation.02-personalize-outreach)
- [Ügyfélválasz feldolgozása](../../materials/modules/03-lead-generation.md#03-lead-generation.03-process-reply)
