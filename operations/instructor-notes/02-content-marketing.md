# 02-content-marketing

[HTML-változat](02-content-marketing.html)

[Kapcsolódó tananyag](../../materials/modules/02-content-marketing.md)

<a name="notes"></a>

Belső oktatói jegyzet · review

**Státusz: review.** Előadó: Sorok Dániel (Brandiseer). Időpont: 10:45–12:15.

20 perc bemutató és élő demó + 3 × 20 perc gyakorlat + 10 perc ellenőrzés és kérdések.

<a name="notes-1"></a>

### Bemutató (20 perc)

1. **Probléma (3 perc):** a kkv-knak napi tartalom kell, de a márka minden csatornán máshogy néz ki; ügynökség lassú és drága, a ChatGPT és a Canva gyors, de általános.
2. **Piac (4 perc):** képgenerálók (ChatGPT, Gemini, Midjourney, Canva AI), márkaeszközök (Bloom). Mindegyik a nulláról indul minden kérésnél, vagy csak egyszeri pillanatképet készít a márkáról.
3. **Brandiseer (4 perc):** a weboldalból tanult, megmaradó márkaprofil; design mód; MCP, így Claude-ból vezérelhető; magyar termék, magyar támogatás.
4. **Bizonyíték (2 perc):** Komáromy Pékség: 5× több tartalom, 85%-kal kevesebb tervezési idő, eszközönként 1 € alatti költség.
5. **Élő demó (7 perc):** ugyanaz a folyamat, amit a résztvevők csinálnak, a BRANDISEER márkán: márkalista → Cég-DNS-összefoglaló és két kérdés → egy design kép → a hét többi posztjának táblázata. Előre generált tartalékképek legyenek kéznél a diák között, ha a hálózat lassú.

Mondandó, amit érdemes kimondani: „A márka a rendszerben él, nem a promptban. Te csak azt mondod meg, mi legyen a képen.”

<a name="notes-2"></a>

### Gyakorlat

- Minden leckénél mondd meg az aktuális feladatot, a mentendő eredményt és a kész feltételt.
- Az első lecke 3–5. percében járd körbe a termet: a leggyakoribb hiba a ki nem kapcsolt connector és az üres márkalista.
- A második leckében Claude a Cég-DNS-ből dolgozik, és csak a csatornát és a témát kérdezi; akinél hiányzik a `Munka/01-DNS/company-dna.md`, annál a Ha elakadtál pont segít. Figyeld, ki ír színt vagy stílust a képkérésbe; ez a modul fő tanulsága, mutasd meg egy résztvevő példáján.
- A harmadik leckében, amíg a három új kép készül, terelj mindenkit az első két kép letöltésére; a végén nézzék meg az öt posztot egymás mellett.
- Öt perc sikertelen hibaelhárítás után ajánld fel a mentőcsomagot; a saját munka maradjon meg.

<a name="notes-3"></a>

### Tesztelt működés és ismert hibák (2026. november 15., élő próba)

| Lépés | Eredmény | Idő | Költség |
| --- | --- | --- | --- |
| Márkalista, kreditegyenleg | működik | azonnal | 0 |
| Kép, design mód, 1K, logóval | működik, magyar szöveg pontos | 1–1,5 perc / kép | 5 kredit |
| Márka létrehozása weboldalból MCP-n (`brandiseer_create_brand`) | **nem működött**: három próbából háromszor azonnali INTERNAL_ERROR | – | 0 |

- A márkát ezért a résztvevők a regisztrációkor, a brandiseer.hu felületén veszik fel (Try My Brand → Add Brand). Ha a csütörtöki demó előtt a végpont javul, az MCP-s létrehozás opcionálisan bemutatható.
- Egy aszinkron képlekérdezés egyszer „Bad Gateway” hibát adott, a következő lekérdezés rendben lefutott. Ha egy résztvevőnél előfordul, Claude kérdezze le újra az állapotot.
- A WENOVA kód első hónapra Pro csomagot ad; ez fedezi a modul kreditigényét (kb. 6–10 kép, 30–50 kredit résztvevőnként).

<a name="notes-4"></a>

### Tartalékanyagok a demóhoz

A deckben előre generált, design módban készült képek vannak (címkép, probléma, működés, automatizáció, tipp-poszt, workshop-poszt), és a Komáromy-márkában készült mintaposztok. Ha a hálózat vagy a generálás lassú, ezekkel mutasd meg az eredményt, és a folyamatot élőben csak a promptig vidd végig.

### Partneri feladatok a nap előtt

- Brandiseer-regisztráció és connector-bekötés leírása az előzetes levélben (Wenova küldi kedden).
- Előadói próba a teljes folyamaton egy friss fiókkal, a Claude Desktopban.
- Tartalékképek a demóhoz a diák között.
- Mentorbeosztás: Sorok Dániel a teremben jár körbe; a technikai elakadásokat (connector, bejelentkezés) ő kezeli.

<a name="notes-5"></a>

### Átadás

Ellenőrizd, hogy mindenkinél elkészült a `campaign-plan.md`: ez a Blackhole Media délutáni moduljának bemenete. Akinél nem, az a minta `campaign-plan.md` fájljával menjen tovább.

## Kapcsolódó tananyagrészek

A hivatkozások a bal oldali tananyagnézetet a megfelelő szakaszra állítják.

- [A márkád a Brandiseerben](../../materials/modules/02-content-marketing.md#02-content-marketing.01-brand-brief)
- [Két márkahű poszt Claude-dal](../../materials/modules/02-content-marketing.md#02-content-marketing.02-create-content)
- [Egy hét posztjai és kampányterv](../../materials/modules/02-content-marketing.md#02-content-marketing.03-prepare-publishing)
