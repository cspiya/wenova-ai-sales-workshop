# 01-business-foundations

[HTML-változat](01-business-foundations.html)

[Kapcsolódó tananyag](../../materials/modules/01-business-foundations.md)

<a name="notes"></a>

Belső oktatói jegyzet · review

**Státusz: review.** 09:20–10:30, 70 perc. Vezeti: Piya Csaba; körbejár: Kemény Krisztián.

<a name="notes-1"></a>

### Bemutató 09:20–09:28 (8 perc)

Egy kivetített Claude-projekt az IrodaLiget mintával. Forgatókönyv:

1. **Cég-DNS (2 perc):** a [kitalált DNS](../../materials/scenarios/office-plants/outputs/company-dna.md) 3. és 9. szakasza: forrás-ID és „Nincs megadva”. Mondat: „A hiány nem hiba, hanem teendő.”
2. **Karmester, Író, Ellenőr (3 perc):** a [szereptábla](../../materials/modules/01-business-foundations.md#team-model-1) és a [folyamattábla](../../materials/modules/01-business-foundations.md#team-model-3). Kulcsmondat: „A Karmester koordinál, az Író készít, az Ellenőr friss beszélgetésben minősít, te döntesz.” A friss kontextus oka: az ügyfél sem látja az Író indoklását.
3. **Mit kötünk be és miért (2 perc):** az [integrációs térkép](../../materials/modules/01-business-foundations.md#team-model-4) sorai: a nap végére minden sor él, vagy kézi úttal jelölt. Hangsúly: a küldés mindig emberi; a Sales Botból kampány nem indítható a Claude-ból.
4. **Mérés és visszacsatolás (1 perc):** [röviden](../../materials/modules/01-business-foundations.md#team-model-5): „Délután számokat teszünk mellé, hétfőn a számokból DNS-javítás lesz.” Részletesen az 5. blokkban.

Ne mutass élő Gmailt; a demó a [mintapostafiókkal](../../materials/scenarios/office-plants/outputs/mailbox-sample.md) és a [kész ellenőri jelentéssel](../../materials/scenarios/office-plants/outputs/review-sample.md) megy.

<a name="notes-2"></a>

### Gyakorlat: időkapuk

| Óra | Hol kell tartani? | Ha nem |
| --- | --- | --- |
| 09:40 | A Claude már kérdez a DNS-hez | [Promptsegítség](../../materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience--help): weboldal-szöveg bemásolása |
| 09:53 | A DNS letöltve és a projektben | A kivonatot (business-profile.md) a 10:27-es zárásban pótolja; a 03-as és 04-es blokknak ez kell |
| 10:07 | Hangprofil kész | [IrodaLiget hangprofil](../../materials/scenarios/office-plants/outputs/voice-profile.md) átírása |
| 10:20 | Az Ellenőr lefutott | Csak Író + Ellenőr, Karmester nélkül |

10:27–10:30 zárás, egy mondat a teremnek: „A DNS-t és a `business-profile.md`-t a projektben hagyjátok; Dani, Balázs és Máté ebből dolgozik.”

<a name="notes-3"></a>

### Gyakori hibák körbejáráskor

- **A Claude kitalál referenciát vagy árat:** mutasd meg a [kész feltételeket](../../materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience--check), és kérd a forrás-ID-t állításonként.
- **Túl sok ajánlat:** legfeljebb három, egy fő (O01). A [döntések](../../materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience--decisions) a résztvevőé.
- **A hangprofilban nevek vannak:** törlés, szerep a név helyett.
- **Az Ellenőr ugyanabban a beszélgetésben fut:** állítsd le, új beszélgetés. Ez a blokk legfontosabb tanulsága.
- **Az Ellenőr mindent MEGFELEL-re tesz:** kérdezd meg, ellenőrizte-e K1-et forrással; a „nem ellenőrizhető” nem teljesült.
- **Régi sablon a projektben a kitöltött mellett:** törlés.

<a name="notes-4"></a>

### Átadás a partnereknek

A 02-es, 03-as és 04-es blokk a projektben lévő `company-dna.md` és `business-profile.md` fájlra épít ([átadás](../../materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience--handoff)). Szólj a partner előadóinak, hány résztvevő dolgozik mintával (IrodaLiget), hogy a demófiókokat erre készítsék.

<a name="notes-5"></a>

### Cowork, vizuális eredmény, partnerkapcsolatok

- A résztvevők Cowork-munkamappában dolgoznak: az eredmények a `Munka/01-DNS/` mappába kerülnek, nem a projekt tudásába. Ha valaki claude.ai-projekt tartalékúton van, a letöltés–feltöltés lépést kell csinálnia.
- A kampányváz HTML a 03-as lecke „Ha maradt időd” része; a bemutatóban elég megmutatni, hogy a fájl a böngészőben nyílik.
- A „Wenova-kiegészítés a 02-es blokkhoz” csak akkor kerüljön elő, ha Sorok Dániel is így akarja. A Brandiseer connectort a 02-es blokkban a Brandiseer köti be; a pontos lépéseket és azt, hogy a kép a connectoron át visszajön-e, ő erősíti meg. A Buffer connector a Claude connectorlistájában van; a kép csatolását a Buffer-piszkozathoz nem próbáltuk.

## Kapcsolódó tananyagrészek

A hivatkozások a bal oldali tananyagnézetet a megfelelő szakaszra állítják.

- [Hogyan működik az AI-csapat?](../../materials/modules/01-business-foundations.md#team-model)
- [Cég-DNS a saját forrásaidból](../../materials/modules/01-business-foundations.md#01-business-foundations.01-offer-and-audience)
- [A hangod a küldött leveleidből](../../materials/modules/01-business-foundations.md#01-business-foundations.02-voice-profile)
- [Saját AI-csapat: Karmester, Író, Ellenőr](../../materials/modules/01-business-foundations.md#01-business-foundations.03-ai-workspace)
