# Márkaazonos tartalom és kampány

**Állapot: review.**

[HTML-változat](02-content-marketing.html)

## Tartalom

- [Cél, bemenet és eredmény](#overview)
- [A márkád a Brandiseerben](#02-content-marketing.01-brand-brief)
- [Két márkahű poszt Claude-dal](#02-content-marketing.02-create-content)
- [Egy hét posztjai és kampányterv](#02-content-marketing.03-prepare-publishing)
- [Segítség elakadáskor](#recovery)
- [Gyakorlópéldák](#examples)
- [Folytatás](#continue)

<a name="main"></a>

02-content-marketing · review

A modul kidolgozott, élő Brandiseer-kapcsolattal kipróbált tananyag. A teljes résztvevői próba még hátravan.

<a name="overview"></a>

## Cél, bemenet és eredmény

**Státusz: kidolgozva, résztvevői próbára vár.**

20 perc bemutató és élő demó + 3 × 20 perc gyakorlat + 10 perc ellenőrzés és kérdések.

A modul végére egy hétre való, öt kész, letölthető, márkahű posztod lesz posztszöveggel, és egy kampányterv, amellyel a délutáni ügyfélszerzési modul dolgozik. Minden képet a Brandiseer készít a saját márkádból, Claude pedig végigvezet a folyamaton: kérdez, megírja a szövegeket, és a Brandiseer connectoron keresztül legenerálja a vizuálokat. A Brandiseer felületét közben nem kell kezelned.

<a name="overview-1"></a>

### Bemenet

business-profile.md, sales-strategy.md (a délelőtti modulból), a saját Brandiseer-fiókod a felvett márkáddal.

<a name="overview-2"></a>

### Kimenet

campaign-plan.md, öt letöltött posztkép a hét napjaira, posztszövegekkel.

<a name="overview-3"></a>

### Folytatás elakadás esetén

Használd a [mentőútvonalat](#recovery). A kimeneteket a közös adatátadási szabály alapján ellenőrizzük.

<a name="overview-4"></a>

### Moduladatok

- Azonosító: `02-content-marketing`
- Szakmai gazda: Brandiseer
- Előadó: Sorok Dániel
- Időkeret: 90 perc (10:45–12:15)
- Állapot: review – kidolgozva, az élő Brandiseer-kapcsolat kipróbálva, résztvevői próba szükséges.

<a name="overview-5"></a>

### Előfeltételek (előzetes felkészülés)

1. A márkád felvéve a Brandiseerben: a **brandiseer.hu** főoldalán add meg a weboldalad címét, kattints a **Try My Brand** gombra, nézd át a kiválasztott képeket, majd **Add Brand**, és hozd létre a fiókodat.
2. Pro csomag a **WENOVA** promóciós kóddal: az első hónap ingyenes, bőven elég kredittel a workshopra.
3. A Brandiseer connector bekötve a Claude-ba (ha előre nem sikerült, az 1. lecke elején együtt bekötjük): **Customize → Connectors → + → Add custom connector** → név: `Brandiseer`, URL: `https://brandiseer.com/api/mcp` → **Add** → bejelentkezés a Brandiseer-fiókoddal. A beszélgetésben a bal alsó **+** gomb → **Connectors** alatt legyen bekapcsolva.
4. Opcionális: Buffer-fiók (buffer.com, ingyenes) legalább egy bekötött közösségi csatornával, és a Buffer connector a Claude-ban: **Customize → Connectors** → keresd meg a **Buffer**-t a listában → **Connect** → engedélyezés. Csak a bónuszfeladathoz kell.

<a name="overview-6"></a>

### Egy szabály egész modulra: design mód

Minden képet **design** módban készítünk. Ez a Brandiseer grafikai, márkahű módja: poszt, plakát, szöveges elrendezés. A fast mód csak tartalék, ha a design hibát ad; ilyenkor Claude jelezze. Egy design kép 1–1,5 perc alatt készül el és 5 kreditbe kerül.

<a name="02-content-marketing.01-brand-brief"></a>

## A márkád a Brandiseerben

**Állapot: review.**

**Azonosító:** `02-content-marketing.01-brand-brief` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** live

Bekötött márka. Működő kapcsolat. Első márkahű kép.

<a name="02-content-marketing.01-brand-brief--result"></a>

### Ezt készíted el

Ellenőrzöd, hogy Claude eléri a Brandiseer-fiókodat és a márkádat, majd elkészítesz egy első próbaképet a saját márkáddal. Ebből látod, mit „tud” a Brandiseer a márkádról: színeket, betűket, logót, vizuális stílust.

<a name="02-content-marketing.01-brand-brief--needs"></a>

### Erre lesz szükséged

Claude Desktop (Cowork) a bekötött Brandiseer connectorral, a felvett márkád, és a délelőtti `business-profile.md`. Ha még nincs felvett márkád, a [lépéseknél](#02-content-marketing.01-brand-brief--steps) megtalálod, hogyan pótold.

<a name="02-content-marketing.01-brand-brief--explanation"></a>

### Így működik

A Brandiseer a weboldaladból egyszer megtanulja a márkádat (logó, színek, betűk, képi világ), és ezt a márkaprofilt minden képnél automatikusan használja. Ezért a képkérésben **csak azt írod le, mi legyen a képen és hol**: tárgy, jelenet, szöveg, elrendezés. Színt, betűtípust, hangulatot, stílust nem írsz bele. Ha mégis megteszed, felülírja a márkádat, és a kép elveszti az arculatot. Ez a nap egyik legfontosabb tanulsága: a márka a rendszerben él, nem a promptban.

<a name="02-content-marketing.01-brand-brief--decisions"></a>

### Ezekről te döntesz

Melyik márkáddal dolgozol, ha több is van. A próbakép alapján: jól tükrözi-e a márkádat? Ha nem, a Brandiseer felületén a márka képeit később lecserélheted. Ma ezzel nem foglalkozunk, csak jelöld.

<a name="02-content-marketing.01-brand-brief--prompt"></a>

### Ezt kérd Claude-tól

```text
Ellenőrizd a Brandiseer-kapcsolatot: listázd a márkáimat (brandiseer_list_brands), és nézd meg a kreditegyenlegemet (brandiseer_check_credits).
Ha egy márkám van, azzal dolgozunk; ha több, kérdezd meg, melyikkel. Ha nincs márkám, szólj, és ne hozz létre semmit kérdés nélkül.
Utána készíts egy próbaképet a márkámmal a brandiseer_generate_image eszközzel: egyszerű bemutatkozó poszt, rajta a cégnév és egy rövid mondat arról, mivel foglalkozunk (a business-profile.md alapján).
Beállítás: aspectRatio 1:1, mode design, useLogo true, resolution 1K.
A képpromptba csak tartalmat és elrendezést írj; színt, betűtípust, hangulatot vagy stílust ne. Mutasd meg a képet és a használt promptot.
```

<a name="02-content-marketing.01-brand-brief--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** nyisd meg a Claude Desktopot (Cowork, a workshop-projektben), és ellenőrizd, hogy a Brandiseer connector be van kapcsolva a beszélgetésben. Ha még nincs bekötve: **Customize → Connectors → + → Add custom connector** → URL: `https://brandiseer.com/api/mcp` → bejelentkezés.
2. **3–5 perc:** másold be a fenti promptot, és válaszolj Claude kérdésére, ha több márkád van.
3. **5–8 perc:** ha nincs márkád: nyisd meg a **brandiseer.hu** oldalt, add meg a weboldalad címét, kattints a **Try My Brand** gombra, várj kb. egy percet, töröld a nem odaillő képeket (partnerlogók, stockfotók), majd **Add Brand**. Fél perc múlva kérd meg Claude-ot, hogy listázza újra a márkáidat.
4. **8–12 perc:** várd meg a próbaképet (1–1,5 perc).
5. **12–20 perc:** nézd meg a képet és a promptot. Keress benne színt, betűt vagy stílust: ha van, kérd Claude-ot, hogy vegye ki, és generálja újra. Mondd ki egy mondatban, mennyire hasonlít a kép a márkádra.

<a name="02-content-marketing.01-brand-brief--check"></a>

### Ellenőrizd az eredményt

- Claude kiírta a márkád nevét és azonosítóját (`bds_c_…`), és a kreditegyenlegedet.
- Elkészült egy kép design módban, a logóddal.
- A használt prompt nem tartalmaz színt, betűtípust, hangulatot vagy stílust.
- Egy mondatban meg tudod mondani, mennyire márkahű a kép.

<a name="02-content-marketing.01-brand-brief--help"></a>

### Ha elakadtál

- **Claude nem látja a Brandiseer eszközöket:** a beszélgetés bal alsó **+** gombja → **Connectors** alatt kapcsold be a Brandiseert. Ha nincs ott: **Customize → Connectors → + → Add custom connector**, URL: `https://brandiseer.com/api/mcp`, majd jelentkezz be. Bekapcsolás után indíts új beszélgetést, ha az eszközök még mindig nem látszanak.
- **Üres a márkalista:** ugyanazzal az e-mail-címmel léptél be a connectorba, mint a brandiseer.hu-n? Ha igen, vedd fel a márkát a 3. lépés szerint.
- **A weboldalad gyenge vagy nincs:** a Brandiseerben felvehetsz egy olyan nyilvános weboldalt is gyakorlásra, amelynek a márkáját jól ismered (pl. kedvenc kávézód). Ezzel csak gyakorolsz, semmit nem publikálsz.
- **Öt perc után sincs kép:** szólj a mentornak, és nézd az előadó kivetített példáját; a következő leckét a mentor segítségével folytasd.

<a name="02-content-marketing.01-brand-brief--handoff"></a>

### Ezt viszed tovább

A kiválasztott márka nevét és azonosítóját (Claude ugyanabban a beszélgetésben megjegyzi), és a próbaképet. A következő leckét **ugyanebben a beszélgetésben** folytasd.

<a name="02-content-marketing.01-brand-brief--extra"></a>

### Ha maradt időd

Kérj ugyanarra a tartalomra egy 9:16-os (Story) változatot, és hasonlítsd össze az elrendezést.

<a name="02-content-marketing.02-create-content"></a>

## Két márkahű poszt Claude-dal

**Állapot: review.**

**Azonosító:** `02-content-marketing.02-create-content` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** live

Rövid kérdéssor. Két kép. Két posztszöveg.

<a name="02-content-marketing.02-create-content--result"></a>

### Ezt készíted el

Két publikálásra kész posztot a választott csatornára: mindkettő egy márkahű kép a Brandiseertől, és egy hozzá írt posztszöveg felhívással (CTA).

<a name="02-content-marketing.02-create-content--needs"></a>

### Erre lesz szükséged

Az előző lecke beszélgetése a kiválasztott márkával, a `business-profile.md` és a `sales-strategy.md`.

<a name="02-content-marketing.02-create-content--explanation"></a>

### Így működik

Claude egy rövid kérdéssorral felveszi a briefet, ahogy egy ügynökség tenné: csatorna, nyelv, téma, felhívás, hangnem, tiltólista. Amit a délelőtti üzleti alaplapból már tud, azt nem kérdezi újra. Ezután két képötletet ad, a jóváhagyásod után legenerálja a képeket design módban, és mindegyikhez csatornára szabott szöveget ír. Ugyanez a folyamat később automatizálható is: a Brandiseer [közösségi média automatizálási útmutatója](https://blog.brandiseer.com/use-cases/social-media-automation) ugyanezt ütemezett, minden héten lefutó feladattá alakítja.

<a name="02-content-marketing.02-create-content--decisions"></a>

### Ezekről te döntesz

A csatorna, a két poszt témája, a felhívás és a hangnem. A két képötletet te hagyod jóvá a generálás előtt, és te döntöd el, melyik kép és szöveg mehet tovább. Valós ígéretet, árat vagy akciót csak olyat írj bele, ami tényleg érvényes.

<a name="02-content-marketing.02-create-content--prompt"></a>

### Ezt kérd Claude-tól

```text
Most a márkahű közösségimédia-tartalomkészítőm vagy. A képekhez a Brandiseer connectort használod, az előző lépésben kiválasztott márkámmal.

Szabályok:
- Magyarul válaszolj. Egyszerre csak egy kérdést tegyél fel, és várd meg a válaszomat.
- Amit a business-profile.md-ből és a sales-strategy.md-ből már tudsz, azt ne kérdezd újra, csak erősítsd meg egy mondatban.
- Képgenerálás mindig: mode design, useLogo true, resolution 1K. A fast módot csak akkor használd, ha a design hibát ad, és ilyenkor szólj.
- A képpromptban csak tartalmat és elrendezést írj le: mi látszik, milyen szöveg kerül a képre és hová, mi kerül a középpontba. Színt, betűtípust, hangulatot vagy stílust soha ne írj bele, ezt a Brandiseer a márkából hozza.
- Az oldalarányt a csatornához válaszd: Instagram és Facebook poszt 1:1, Story és Reels 9:16, LinkedIn 1:1 vagy 4:3, X 16:9.
- Semmit ne publikálj és ne ütemezz a kifejezett kérésem nélkül.

Kérdezd meg egyenként:
1. Melyik csatornára készüljön a két poszt? (Instagram, Facebook, LinkedIn, X, TikTok)
2. Milyen nyelven legyen a posztszöveg?
3. Milyen nyelven legyen a képen lévő szöveg?
4. Miről szóljon a két poszt? (termék, szolgáltatás, akció, esemény, tipp, ügyfélsztori)
5. Mi legyen a felhívás? (pl. foglalj időpontot, kérj ajánlatot, nézd meg a webshopot)
6. Milyen a márkád hangneme? (pl. közvetlen, szakmai, játékos)
7. Van olyan szó, téma vagy stílus, amit kerülni kell?
8. Opcionális: van stratégiai anyagod, referenciaképed vagy jól teljesítő régi posztod? Csatold, vagy hagyd ki.

Ha minden megvan:
- Írj két rövid képötletet (mi látszik a képen, milyen szöveg kerül rá), és kérd a jóváhagyásomat.
- Jóváhagyás után generáld le a két képet a brandiseer_generate_image eszközzel.
- Mindkét képhez írj csatornára szabott posztszöveget a megadott nyelven és hangnemben, a felhívással a végén.
- Mutasd meg a két képet a szövegükkel, és kérdezd meg, mit javítsunk. Egy képet legfeljebb kétszer generálj újra.
```

<a name="02-content-marketing.02-create-content--steps"></a>

### Haladj végig ezeken

1. **0–2 perc:** ugyanabban a beszélgetésben másold be a fenti promptot.
2. **2–8 perc:** válaszolj a kérdésekre. Egy-két mondat elég; ahol nincs véleményed, írd: „döntsd el te”.
3. **8–10 perc:** nézd át a két képötletet. Ha kell, módosíts (pl. „a második képen a termék legyen nagyobb”), majd hagyd jóvá.
4. **10–14 perc:** várd meg a két képet (képenként 1–1,5 perc). Közben olvasd el a posztszövegeket.
5. **14–20 perc:** kérj legfeljebb egy-két javítást a képen vagy a szövegben. Ha a kép nem márkahű, nézd meg a promptot: van benne szín vagy stílus?

<a name="02-content-marketing.02-create-content--check"></a>

### Ellenőrizd az eredményt

- Két kép készült design módban, a választott csatorna oldalarányában, a logóddal.
- A képek promptjaiban nincs szín, betűtípus, hangulat vagy stílus.
- Mindkét képhez van posztszöveg a kért nyelven, felhívással a végén.
- A posztokban nincs kitalált ár, akció, referencia vagy vállalás.
- Meg tudod mondani, melyik posztot tennéd ki először, és miért.

<a name="02-content-marketing.02-create-content--help"></a>

### Ha elakadtál

- **Nincs ötleted a témára:** írd: „Javasolj három poszttémát a business-profile.md alapján, és válassz egyet.”
- **A kép szövege hibás vagy elírt:** kérd Claude-ot, hogy a képre kerülő szöveget rövidebbre írja (legfeljebb 6–8 szó), és generálja újra.
- **A generálás hibát ad:** Claude egyszer próbálja újra; ha a design továbbra sem megy, a fast mód tartalék. Ha az sem, folytasd a mentorral.
- **Öt perc után sincs kép:** használd a [mentőútvonalat](#recovery), és a szövegeket a minta képötleteivel készítsd el.

<a name="02-content-marketing.02-create-content--handoff"></a>

### Ezt viszed tovább

A két jóváhagyott kép és a hozzájuk tartozó posztszövegek ugyanebben a beszélgetésben maradnak; a következő leckében ezek mellé készül el a hét többi posztja és a `campaign-plan.md`.

<a name="02-content-marketing.02-create-content--extra"></a>

### Ha maradt időd

Kérj az egyik poszthoz egy másik csatornára szabott változatot (más oldalarány, más szöveghossz), és hasonlítsd össze a kettőt.

<a name="02-content-marketing.03-prepare-publishing"></a>

## Egy hét posztjai és kampányterv

**Állapot: review.**

**Azonosító:** `02-content-marketing.03-prepare-publishing` · **Állapot:** review · **Időkeret:** 20 perc · **Végrehajtás:** live

Öt poszt egy hétre. Letöltött képek. Kampányterv a délutánhoz.

<a name="02-content-marketing.03-prepare-publishing--result"></a>

### Ezt készíted el

A két meglévő poszt mellé még három márkahű posztot, így egy teljes hétre (hétfőtől péntekig) meglesz a tartalmad. Mind az öt képet letöltöd a munkacsomagodba, és elkészíted a `campaign-plan.md` fájlt a heti beosztással, amelyből a délutáni ügyfélszerzési modul dolgozik.

<a name="02-content-marketing.03-prepare-publishing--needs"></a>

### Erre lesz szükséged

Az előző lecke két jóváhagyott képe és posztszövege, ugyanabban a beszélgetésben. A bónuszhoz: Buffer-fiók legalább egy bekötött csatornával és a Buffer connector a Claude-ban.

<a name="02-content-marketing.03-prepare-publishing--explanation"></a>

### Így működik

Claude az előző lecke briefjéből (csatorna, hangnem, felhívás) javasol három további témát, hogy kijöjjön egy hét. Előbb heti táblázatot kapsz, és csak a jóváhagyásod után generál. A szabály ugyanaz: a képkérésben csak tartalom és elrendezés, a márkát a Brandiseer hozza, így az öt poszt egymás mellett is egy márkának látszik. A publikálás ma kézzel történik: letöltöd a képeket, és a posztszöveggel együtt kiteszed, amikor te jónak látod. A Buffer-bónusz megmutatja, hogyan kerülhet ez automatikusan a közösségi felületeid piszkozatai közé.

<a name="02-content-marketing.03-prepare-publishing--decisions"></a>

### Ezekről te döntesz

A három új téma és a heti sorrend, és hogy mi kerül ki valójában. Semmi nem kerül ki a közösségi oldaladra a kifejezett jóváhagyásod nélkül; a bónuszfeladat is csak piszkozatot készít.

<a name="02-content-marketing.03-prepare-publishing--prompt"></a>

### Ezt kérd Claude-tól

**1. A hét többi posztja:**

```text
A két jóváhagyott poszt mellé tervezz még hármat, hogy meglegyen egy hét: hétfőtől péntekig napi egy poszt, ugyanarra a csatornára, ugyanabban a hangnemben, ugyanazzal a felhívással.
Először írd le táblázatban: nap, téma, a képre kerülő szöveg (legfeljebb 6–8 szó), felhívás. A két meglévő posztot is tedd be egy-egy napra. Várd meg a jóváhagyásomat.
Jóváhagyás után generáld le a három új képet a brandiseer_generate_image eszközzel (mode design, useLogo true, resolution 1K, a csatorna oldalaránya), és írd meg mindegyikhez a posztszöveget.
A képpromptba csak tartalmat és elrendezést írj; színt, betűtípust, hangulatot vagy stílust ne.
Végül add meg mind az öt kép linkjét naponként, egy listában.
```

**2. Kampányterv:**

```text
Készítsd el a campaign-plan.md tartalmát ebben a szerkezetben: offer_id (a business-profile.md-ből, ha van), audience, posts (az öt poszt: nap, téma, szöveg), image_urls (az öt kép linkje naponként), channel, call_to_action.
Csak azt írd bele, amit ma jóváhagytam. Add meg letölthető fájlként, vagy ha tudod, mentsd a munkacsomagom outputs mappájába.
```

**3. Bónusz – Buffer-piszkozat (csak ha bekötötted a Buffert):**

```text
A Buffer connectorral tedd be az öt posztot piszkozatként (draft) a bekötött csatornámra, a képpel és a szöveggel együtt. Ne ütemezd és ne publikáld.
Előtte írd le, melyik csatornára mi kerül, és várd meg az igenemet.
```

<a name="02-content-marketing.03-prepare-publishing--steps"></a>

### Haladj végig ezeken

1. **0–3 perc:** másold be az első promptot, nézd át a heti táblázatot, módosíts, ha kell, majd hagyd jóvá.
2. **3–9 perc:** amíg a három kép készül (képenként 1–1,5 perc), töltsd le az előző lecke két képét (a linkre kattintva vagy jobb klikk → mentés) a munkacsomagod `outputs` mappájába.
3. **9–12 perc:** nézd meg az új képeket egymás mellett: egy márkának látszik az öt poszt? Kérj legfeljebb egy javítást, majd töltsd le mindet.
4. **12–17 perc:** másold be a kampánytervhez tartozó promptot, és mentsd a `campaign-plan.md` fájlt.
5. **17–20 perc, bónusz:** ha bekötötted a Buffert, futtasd a harmadik promptot, és ellenőrizd a Bufferben a piszkozatokat.

<a name="02-content-marketing.03-prepare-publishing--check"></a>

### Ellenőrizd az eredményt

- Öt poszt van, mindegyik design módban, a logóddal, a csatorna oldalarányában, egy-egy napra beosztva.
- A képek promptjaiban nincs szín, betűtípus, hangulat vagy stílus.
- Mind az öt kép le van töltve a munkacsomagodba.
- A `campaign-plan.md` elmentve, benne az öt posztszöveg, a napok, a csatorna, a felhívás és a képek linkje.
- Semmi nem került ki a közösségi oldaladra a jóváhagyásod nélkül.
- Bónusz: a posztok piszkozatként látszanak a Bufferben.

<a name="02-content-marketing.03-prepare-publishing--help"></a>

### Ha elakadtál

- **Kevés az idő:** elég, ha egy vagy két új kép készül el; a táblázat akkor is lefedi a hetet, a hiányzó képeket otthon ugyanígy pótolod.
- **A generálás hibát ad:** Claude egyszer próbálja újra; ha a design továbbra sem megy, a fast mód tartalék. Ha az sem, folytasd a mentorral.
- **A Buffer nem látszik a Claude-ban:** Customize → Connectors → Buffer → Connect, majd a beszélgetés **+** gombja alatt kapcsold be. Ha a piszkozat nem jelenik meg, nézd meg a Bufferben, melyik csatornára készült.
- **Nincs Buffer:** ez bónusz, nyugodtan hagyd ki. Otthon a [teljes automatizálási útmutatóval](https://blog.brandiseer.com/use-cases/social-media-automation) pótolhatod.
- **Nem készül el a kampányterv:** használd a választott minta `campaign-plan.md` fájlját a [mentőútvonal](#recovery) szerint.

<a name="02-content-marketing.03-prepare-publishing--handoff"></a>

### Ezt viszed tovább

A `campaign-plan.md` a délutáni ügyfélszerzési modul bemenete (Blackhole Media): ebből készül a megkeresés üzenete. A letöltött képek a tieid; amikor jónak látod, kézzel vagy a Bufferrel közzéteheted őket.

<a name="02-content-marketing.03-prepare-publishing--extra"></a>

### Ha maradt időd

Kérd Claude-ot, hogy a [Brandiseer automatizálási útmutatója](https://blog.brandiseer.com/use-cases/social-media-automation) alapján vázolja fel, hogyan készülne el minden héten magától egy ilyen ötposztos csomag: milyen napokon, melyik csatornára, milyen témákkal.

<a name="recovery"></a>

## Segítség elakadáskor

1. Mentsd a saját eddigi munkádat (a már elkészült képek linkjeit és a szövegeket).
2. Válaszd ugyanazt a mintavállalkozást, amellyel elkezdtél dolgozni.
3. A `scenarios/<scenario>/outputs/` mappából vedd át az aktuális modul hiányzó kimenetét (`campaign-plan.md`).
4. A haladási naplóban jelöld: `completed_with_example`, végrehajtás: `simulation`.
5. Mondd el saját szavaiddal, mit készített volna a lépés, majd folytasd a következő leckével.

A mintavállalkozások kitaláltak, ezért Brandiseer-márkájuk nincs; a mentőcsomag a képek tervét tartalmazza, nem legenerált képet. Ha a saját márkáddal a kapcsolat működik, de az ötletek akadnak el, a minta témáival a saját márkádon is generálhatsz. Saját üzletről mintára váltáskor külön munkapéldányban a teljes kapcsolódó mintaláncot használd; ne keverd a minta árait a saját ajánlatoddal. A statikus csomag nem bizonyít működő partnerintegrációt.

<a name="examples"></a>

## Gyakorlópéldák

A közös, összefüggő kitalált példák a repó `scenarios/` mappájában találhatók; a modulhoz tartozó kimenet a `campaign-plan.md`. Élő próba: 2026. november 15., Brandiseer connector, design mód, 1K felbontás: a képek egyenként kb. 1–1,5 perc alatt, 5 kreditért készültek el. Egy ötposztos hét így kb. 25–35 kredit, az újragenerálásokkal együtt.

<a name="examples-1"></a>

### Kidolgozott példa: a Brandiseer saját márkájával

Így néz ki a második lecke kérdéssora és eredménye egy valódi futtatásban (Brandiseer márka, élő próba, 2026. november 15.).

| Kérdés | Válasz |
| --- | --- |
| Csatorna | Instagram |
| Posztszöveg nyelve | magyar |
| Képszöveg nyelve | magyar |
| Téma | 1. tipp: hogyan írj jó képkérést; 2. a workshop meghirdetése |
| Felhívás | „Próbáld ki: brandiseer.hu”, illetve „Jelentkezz most” |
| Hangnem | közvetlen, magabiztos, nem túlzó |
| Kerülendő | túlzó ígéret, angol szavak keverése |

Az első kép promptja, ahogy Claude megírta (csak tartalom és elrendezés, szín és stílus nélkül):

```text
Instagram-poszt tipp formátumban. Felül a cím: „Tipp: a képet írd le, ne a stílust”. Alatta két panel egymás mellett.
Bal panel „Így” felirattal, pipával és egy rövid példakártyával: „Latte faasztalon, az ablak mellett, felül a szöveg: Új őszi menü”.
Jobb panel „Ne így” felirattal, X-szel és egy áthúzott példakártyával: „meleg tónusú, minimalista, pasztell, elegáns betű”. Lent kis lábléc: „brandiseer.hu”.
```

A hozzá írt posztszöveg:

> Egy tipp, ami azonnal jobbá teszi az AI-képeidet: ne a stílust írd le, hanem azt, mi legyen a képen. A színeket, a betűket és a hangulatot a márkád adja, a Brandiseer ezt minden képnél magától hozza. Próbáld ki a saját márkáddal: brandiseer.hu

Eredmény: mindkét kép elsőre márkahű lett, a magyar ékezetes képszöveg hibátlan, újragenerálás nem kellett.

<a name="continue"></a>

## Folytatás

[Modulok](../README.md#modules)[Következő modul →](03-lead-generation.md)

Wenova × Brandiseer × Blackhole Media × EstiWise
