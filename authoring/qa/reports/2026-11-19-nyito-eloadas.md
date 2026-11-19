# Nyitó előadás: jegyzőkönyv

**Ticket:** WEN-1229. **Dátum:** 2026-11-19. **Ág:** `cspiya/wen-1229-7-nyito-eloadas-0900-ra-ai-alapok-llm`. **Állapot:** review. A javított változatot független ellenőr még nem nézte át, ezért nem ready.

## Megbízás

A 09:00-as, 20 perces nyitó előadás javítása nem fejlesztő cégtulajdonosoknak, sales- és marketingvezetőknek.

- A megjelenés, az elrendezés és a CSS-animáció marad.
- Minden blokkoló és fontos megállapítást javítani kell, a kisebbeket lehetőség szerint.
- A backpropagation, az attention és a Transformer diája egy nagy, közérthető mondattal és az animáció által megmutatott konkrét példával magyarázza a fogalmat. Egy „Melyik mire való?” sor választja szét a hármat.
- A tokenizálási dia valódi tokeneket és azonosítókat mutat, megnevezi a tokenizálót, és megmutatja a tokentől a vektorig vezető lépést.
- Az előadói jegyzet a résztvevői anyagok közé kerül, diánként teljes elmondható szöveggel.

## Review-körök

| Kör | Ki vizsgálta | Mit | Eredmény |
| --- | --- | --- | --- |
| Tartalmi r1 | Független Codex-reviewer | A diasor szakmai tartalma | REVISE |
| Diasor r1 | Független Codex-reviewer, `9594a04` | Mind a 22 dia, képkockákkal | REVISE (DK-01–DK-10) |
| Diasor r2 | Független Codex-reviewer, `dad035b` | A DK-01–DK-10 javítása | PASS, két kisebb ponttal (DK-11, DK-12) |
| Tulajdonosi ítélet | Tulajdonos | Tartalom | A megjelenés jó, a tartalom több helyen kérdéses, a három fogalom nem érthető a diáról |
| Szakértői review | Független Claude-reviewer, a `dad035b` revízión | Szakmai tartalom | 6 blokkoló, 11 fontos, 10 kisebb megállapítás |
| Első javítási kör | Készítő | Minden fenti megállapítás | Saját ellenőrzés, nem független review |
| Záróellenőrzés | Független reviewer, `6e9dd27` | Teljes diasor, forgatókönyv, jegyzet | REVISE: 2 blokkoló, 5 fontos, 4 kisebb |
| Második javítási kör | Készítő | A záróellenőrzés megállapításai | Saját ellenőrzés, független újraellenőrzés még nincs |

## Megállapítások és javítások

| Azonosító | Súly | Dia (új számozás) | Javítás |
| --- | --- | --- | --- |
| CR-01 | Blokkoló | 8 | Valódi `o200k_base` tokenek és azonosítók |
| CR-02 | Blokkoló | 8 | Új sor: azonosítóból tanult vektor |
| CR-03 | Blokkoló | 10 | Az ábra újraépítve: a tokenek a Figyelem részen át haladnak |
| CR-04 | Blokkoló | 11 | A harmadik lépésben a 36%-os token nyer az 58%-os ellen |
| CR-05 | Blokkoló | 11 | Valódi tokenek (`K`, `öszön`, `jük`, `!`), feliratozott oszlopok |
| CR-06 | Blokkoló | 18, 19 | Az Ellenőr beszélgetését a résztvevő nyitja meg |
| CR-07 | Fontos | 12 | Új cím, kimondja, hogy a modell nem emlékszik |
| CR-08 | Fontos | 8–10 | Új sorrend: tokenek, attention, Transformer |
| CR-09 | Fontos | 9 | „levele” példa két mondatban |
| CR-10 | Fontos | 7 | Kis javulás egy lépésben (24%-ról 31%-ra), visszafelé számolás minden kapcsolaton |
| CR-11 | Fontos | 6 | A kimenet esély, az utolsó réteg jelei eltérnek |
| CR-12 | Fontos | 2 | Generatív mély modellek keret, ⊃ jel helyett › |
| CR-13 | Fontos | 18 | A Karmester középen, minden átadás rajta megy át |
| CR-14 | Fontos | 17 | „Először kérdezz rá arra, ami hiányzik.” |
| CR-15 | Fontos | 22 | A teljes prompt a dián |
| CR-16 | Fontos | 5–12 | Az animációk egyszer futnak le, és a záróképen megállnak |
| CR-17 | Fontos | 10, 11 | A rétegek után megjelennek a következő szó esélyei |
| CR-18–CR-26 | Kisebb | 1, 3, 4, 5, 13, 14, 16, 19, 21 | A javasolt szöveg szerint |
| CR-27 | Kisebb | 8–12 | A forgatókönyv az új ábrákat írja le |
| DK-11 | Tulajdonosi | 19 | A „· vitatott” csak a Készítő forrásos válaszakor jelenik meg |
| DK-12 | Tulajdonosi | 12, jegyzet | „Ide kerülhet…” |

**A javítási folt ellenőrzése során talált további hibák:**

- A 11. dia csökkentett mozgású záróképén az oszlopmagasságok nem egyeztek a feliratokkal. Javítva.
- A tartalomjegyzék a régi címeket és a régi sorrendet mutatta. Javítva.
- A folt a Transformer tokenjeit egymás után mozgatta, ez ellentmondott a párhuzamos feldolgozásnak. Az ábra újraépítve, a tokenek együtt haladnak.

**Elutasított megállapítás:** nincs.

**Eltérés a javasolt szövegtől:**

- A 7. dia címe „Így tanul a hibából”, mert a tulajdonos a fogalom céljának kimondását kérte.
- A 9. dia harmadik felirata rövidebb, és kimondja, hogy a modell tokenekkel számol.
- A 10. dián a javasolt ábra helyett új ábra készült.

## Tényellenőrzés

Megnyitott elsődleges források: GPT-3 (2.1. táblázat, D.1. táblázat), Attention Is All You Need, Deep Learning 6.5. szakasz, Chinchilla (1. táblázat), AlexNet, GPT-4 műszaki jelentés, Dartmouth-javaslat, Claude szószedet, OpenAI Conversation state, Why Language Models Hallucinate, InstructGPT, tiktoken.

A tokeneket és az azonosítókat `tiktoken 0.14.0` csomaggal újra lefuttattam, a dekódolás minden mondatnál visszaadta az eredeti szöveget.

## Ellenőrzések

| Ellenőrzés | Eredmény |
| --- | --- |
| `npm run render` | Az oldalak elkészültek, a parancs a custom deck elfogadására vár: `Run npm run render; stale HTML: materials/presentations/00-nyito-eloadas.html (custom: review script correspondence, then --accept-custom)` |
| `npm run check` | Ugyanez az üzenet |
| Hivatkozások és résztvevői határ (`check-repository`) | 0 hiba |
| `npm test` | 32 tesztből 32 sikeres |
| Böngésző | Chromium, 1920×1080, a 2–22. dia záróállapotban, az animált diák kimerevített köztes időpontokban is, nincs kilógás. A második körben a 7., 9., 10., 11., 17., 18., 19. és 21. dia újra, a 11. dián a választási keret körüli képkockákkal |
| Előadói jegyzet és menetrend | 1440 és 390 px szélességen nincs vízszintes kilógás |

A `render.test.cjs` menetrendi elvárását a kért 09:00-as link miatt frissítettem.

## Záróellenőrzés és második javítási kör

**Ítélet:** REVISE a `6e9dd27` revízión.

| Azonosító | Súly | Hely | Megállapítás | Javítás |
| --- | --- | --- | --- | --- |
| B1 | Blokkoló | 10. dia | A dia szavakat mutatott a modell bemeneteként és kimeneteként, és összemosta a párhuzamos számítást a válasz egymás utáni lépéseivel | Új nagy mondat, valódi `K`, `öszön`, `jük` tokenek, a következő token esélyei: `!` 64%, `␣a` 28%, `,` 8%, kitalált esélyként jelölve |
| B2 | Blokkoló | 11. dia | A döntő pillanatban a keret az `et` tokenen állt, miközben a `jük` került a válaszba | Új keretidőzítés, a 4/4 felirat és a stopjel 80%-nál indul, új felirat a harmadik választásnál |
| F1 | Fontos | 7., 9., 10. dia, jegyzet | A fogalmi összefoglaló összemosta a lépéseket | Új összehasonlító sáv, új 9. diai mondat, pontosított rövid válaszok |
| F2 | Fontos | 18., 19. dia | A kézi átadás az ábrán nem látszott | Felirat mindkét dián, a 19. dián kiemelt Ember sáv az átadás alatt |
| F3 | Fontos | 12. dia, jegyzet | A beszédszöveg nem fért a megadott másodpercekbe | Rövidebb szöveg a négy időszakra |
| F4 | Fontos | Előadói jegyzet | A jegyzet résztvevői elhelyezése nyitott | **Elutasítva.** A tulajdonos döntése: a résztvevők olvashatják az előadói jegyzetet, ezért az a `materials/presentations/` mappában marad a jelenlegi címmel és szerkezettel |
| F5 | Fontos | Forgatókönyv, jegyzet | Az animáció indítása böngészőfüggő | Vetítési utasítás: Chrome 133 vagy újabb |
| K1 | Kisebb | Forgatókönyv | A mozgás és a CSS-időzítés hossza eltért | Pontosított időadatok az 5., 6. és 12. diánál |
| K2 | Kisebb | 2. dia, jegyzet | A modellfajták átfedése hiányzott | Kiegészített beszédszöveg és rövid válasz |
| K3 | Kisebb | 3. dia, jegyzet | Alá nem támasztott általánosítás a modellméretről | Csere a GPT-4 példájára |
| K4 | Kisebb | 17., 21. dia | Két vetített megfogalmazás pontatlan volt | „Két mondat, amivel elindulsz” és „Kb. 4,7-szer annyi tanítótoken: 1400 milliárd és 300 milliárd” |

A 10. dia tokenjeit `tiktoken 0.14.0` csomaggal, `o200k_base` kódolással újra ellenőriztem: `K` 42, `öszön` 193270, `jük` 124049, `!` 0, `␣a` 261, `,` 11.

A 3. dia beszédszövegében a K3 cseréjét a mondat összefüggéséhez igazítottam, a rövid válasz szó szerint a javasolt szöveg.

## Léptékdiák

A tulajdonos kérésére három dia mutatja a növekedést nagyságrendekben. A diasor 24 diás lett: 22 fő dia és 2 tartalék. A fő rész továbbra is 20:00. A jegyzőkönyv korábbi táblázatai a bővítés előtti diaszámokat használják, a régi 4–22. dia most a 6–24.

| Új dia | Tartalom | Összevethetőségi korlát a dián vagy a jegyzetben |
| --- | --- | --- |
| 3. Számítási kapacitás | Műveletek, tranzisztorok, memória, merevlemez logaritmikus sávokon | A műveletek sorának mércéje változik, az azonos mérővel számolt Linpack-szakasz 7,6 nagyságrend |
| 4. A digitalizált adat | Tárolókapacitás 1986–2007, tölcsér: létező, nyilvános, dokumentált tanítóanyag | A tárolt és az éves adat nem szorozható össze, a nyilvános adat lehet jogvédett, a zárt modellek adatai nem ismertek |
| 5. A modellek mérete | Paraméterek egy logaritmikus vonalon, tanítóadat saját mértékegységben | A mértékegységek nem válthatók át, a GPT-4 nem publikált, tokenenként csak a paraméterek egy része aktív |

**A régi 3. dia tartalma:** a GPT-3 300 milliárd tokenje az új 5. dián maradt. A 175 milliárd paraméter a vonalon szerepel. A 3,14 × 10²³ művelet és a tízmillió éves átszámítás a jegyzet 5. diájához került.

**A telefonos állítás:** az az állítás, hogy egy telefon felér egy húsz évvel ezelőtti csúcsgéppel, hamis, ezért nem szerepel. A 2006. novemberi világelső 4 922-szer gyorsabb a mért telefonchipnél. A dián a kutatás ajánlott mondata áll a feltételeivel, a jegyzetben pedig várható kérdésként a helyes válasz.

**A léptékadatok forrásai:** a számok a WEN-1229 léptékkutatásából származnak. Ezeket a forrásokat ebben a körben nem nyitottam meg újra.

| Jel | Adat | Forrás |
| --- | --- | --- |
| F21 | IBM 701: több mint 16 000 összeadás másodpercenként. | [IBM 700 Series](https://www.ibm.com/history/700) |
| F22 | TOP500, 1993. június: első hely 59,7 GFLOPS, második hely 30,4 GFLOPS. | [TOP500 List, June 1993](https://top500.org/lists/top500/list/1993/06/) |
| F23 | TOP500, 2006. november: BlueGene/L, 280,6 TFLOPS. | [TOP500 List, November 2006](https://top500.org/lists/top500/2006/11/) |
| F24 | TOP500, 2026. november: LineShine, 2 198,4 PFLOPS. | [TOP500 List, November 2026](https://top500.org/lists/top500/2026/11/) |
| F25 | Intel 4004: 2 300 tranzisztor. | [Intel Microprocessor Quick Reference Guide](https://www.intel.com/pressroom/kits/quickreffam.htm) |
| F26 | NVIDIA Rubin GPU: 336 milliárd tranzisztor, két szilíciumlapka egy tokban. | [Inside NVIDIA Rubin GPU Architecture](https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/) |
| F27 | IBM 701: 2 048 darab 36 bites szó, kb. 9,2 kB. Másodlagos forrás. | [IBM 701](https://en.wikipedia.org/wiki/IBM_701) |
| F28 | Cray-1: legfeljebb 1 048 576 darab 64 bites szó, azaz 8 MiB. | [Cray-1 Hardware Reference Manual, HR-0004-F](https://cray.modularcircuits.com/cray_docs/hw/cray-1/HR-0004-F-CRAY-1_Computer_Systems_Hardware_Reference_Manual-May_1982.pdf) |
| F29 | El Capitan: 5 898 240 GiB memória, kb. 6,3 PB. | [El Capitan](https://hpc.llnl.gov/hardware/compute-platforms/el-capitan) |
| F30 | IBM 350 RAMAC, 1956: 3,75 MB. | [First commercial hard disk drive shipped](https://www.computerhistory.org/storageengine/first-commercial-hard-disk-drive-shipped/) |
| F31 | Seagate Mozaic 4+: 44 TB. | [Seagate Mozaic 4+](https://www.seagate.com/stories/articles/seagate-delivers-industrys-highest-capacity-hard-drives-with-next-generation-mozaic-4/) |
| F32 | Az A18 Pro lapka az iPhone 16 Pro-ban. | [Apple debuts iPhone 16 Pro](https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/) |
| F33 | Apple A18 Pro: mért HPL Linpack, 57,012 GFLOPS, dupla pontosság, MacBook Neóban. | [A18 Pro HPL benchmark](https://github.com/geerlingguy/top500-benchmark/issues/95) |
| F34 | Galaxy S26 Ultra: 16 GB memória. | [Samsung Galaxy S26 comparison](https://www.samsung.com/us/support/answer/ANS10010342/) |
| F35 | A világ tárolókapacitása: 1986: 2,6 EB, 0,8% digitális. 2007: 295 EB, 94% digitális. | [The World’s Technological Capacity to Store, Communicate, and Compute Information](https://www.uvm.edu/pdodds/research/papers/others/2011/hilbert2011a.pdf) |
| F36 | 2002: a digitális tárolás megelőzi az analógot. | [How much information is there in the world?](https://today.usc.edu/how-much-information-is-there-in-the-world) |
| F37 | 2023: 132,4 ZB létrehozott, rögzített, másolt és fogyasztott adat, IDC-becslés. | [IDC #US52554824e, harmadik félnél tárolt másolat](https://techcontentwave.com/files/1763389937_64b594fd4f7f5607256a.pdf) |
| F38 | Common Crawl teljes archívuma: több mint 10 PB. | [Common Crawl: About](https://commoncrawl.org/about) |
| F39 | A Common Crawl felhasználójának tiszteletben kell tartania harmadik felek szerzői jogait. | [Common Crawl: Terms of Use](https://commoncrawl.org/terms-of-use) |
| F40 | LLaMA 65B: 65,2 milliárd paraméter, 1,4 billió feldolgozott token, 4,7 TB tanítóanyag az 1. táblázat összegeként. | [LLaMA: Open and Efficient Foundation Language Models](https://arxiv.org/pdf/2302.13971) |
| F41 | LeNet-5: 60 000 paraméter, 60 000 tanítókép. | [Gradient-Based Learning Applied to Document Recognition](http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf) |
| F42 | GPT-1: 117 millió paraméter, több mint 7 000 könyv. | [Improving Language Understanding by Generative Pre-Training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) |
| F43 | GPT-2: 1,542 milliárd paraméter, több mint 8 millió dokumentum, 40 GB. | [Language Models are Unsupervised Multitask Learners](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) |
| F44 | DeepSeek-V4-Pro: 1,6 billió paraméter, 49 milliárd aktív, több mint 32 billió token. | [DeepSeek-V4-Pro modellkártya](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) |
| F45 | Kimi K3: 2,8 billió paraméter, 104 milliárd aktív. | [Kimi K3 modellkártya](https://huggingface.co/moonshotai/Kimi-K3) |
| F03 | AlexNet: 60 millió paraméter, 1,2 millió kép. | [ImageNet Classification with Deep Convolutional Neural Networks](https://papers.nips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf) |
| F06 | GPT-3: 175 milliárd paraméter, 300 milliárd feldolgozott token. | [Language Models are Few-Shot Learners](https://arxiv.org/pdf/2005.14165) |
| F08 | GPT-4: a modell mérete és az adathalmaz nem publikált. | [GPT-4 Technical Report](https://arxiv.org/pdf/2303.08774) |

## Nyitott pontok

1. Független újraellenőrzés kell a második javítási kör és a léptékdiák revízióján. A léptékkutatásnak sincs még független felülvizsgálata.
2. Az előadó visszaigazolása után futtatható az `--accept-custom`.
3. A diasort kimerevített időpontokban néztem át. Vetítés előtt egyszer érdemes valós időben, projektoron végignézni.
4. A helyi ellenőrzés Node 26-tal futott, a `package.json` Node 24-et ír elő.

## Ellenőrzött fájlok (SHA-256)

| Fájl | SHA-256 |
| --- | --- |
| `materials/presentations/00-nyito-eloadas.html` | `11e35b954e6c9ec5112c72812f7e0a5a8c145114e0e6fdca25831d6195a862c3` |
| `materials/presentations/00-nyito-eloadas.md` | `6de9a8faa5bca1c3e5a3c047f08598f63ac823cc02a792d62eecf0809a8ac0f9` |
| `materials/presentations/00-nyito-eloadas-jegyzet.md` | `ecafb6a4f857a222e60213b119bc6d00af072265934fdc642a53d0e5ae4742e9` |
| `materials/presentations/00-nyito-eloadas-jegyzet.html` | `a87123ded1a9279cd7e7cf5ac522237de4e2e174f3f7f79e2b6f8b33b655a955` |
| `materials/schedule.md` | `c37b02f2c201289d9113be8a656f99e88de19eedc0e8d0be9fac9c17385ff9d6` |
| `materials/schedule.html` | `8738b1a3642bbdc58d9861b9fde27f09d5606c5177511eab90c33540b0775d2c` |
