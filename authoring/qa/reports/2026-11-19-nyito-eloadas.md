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
| Ez a javítás | Készítő | Minden fenti megállapítás | Saját ellenőrzés, nem független review |

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
| `npm test` | 31 tesztből 30 sikeres, 1 sikertelen |
| Böngésző | Chromium, 1920×1080, a 2–22. dia záróállapotban, az animált diák kimerevített köztes időpontokban is, összesen 37 képkocka, nincs kilógás |
| Előadói jegyzet és menetrend | 1440 és 390 px szélességen nincs vízszintes kilógás |

**A sikertelen teszt:** `every page carries exactly its own audience band and theme class`. Hibaüzenet: `use Markdown, not raw HTML: <!-- presentation: custom -->`. Ugyanez a teszt a munka előtti `0fab75a` összefésülésen is hibázik: a main új tesztje a custom deckre is lefut. A tesztet nem módosítottam, mert ez a minőségi kapu gazdájának döntése.

A `render.test.cjs` menetrendi elvárását a kért 09:00-as link miatt frissítettem.

## Nyitott pontok

1. Független review kell a javított diasorra és az előadói jegyzetre.
2. Az előadó visszaigazolása után futtatható az `--accept-custom`.
3. A fenti sikertelen teszt javításáról a kapu gazdája dönt.
4. Az `openai.com/index/chatgpt` automatikus megnyitása 403-as hibát adott, a ChatGPT 2022-es megjelenését innen nem ellenőriztem. A forrásjegyzék ezt jelzi.
5. A diasort kimerevített időpontokban néztem át. Vetítés előtt egyszer érdemes valós időben, projektoron végignézni.
6. Az `AGENTS.md` szerint oktatói tartalom nem kerül a `materials/` mappába. A jegyzet a megbízás kifejezett kérésére került oda, mert a résztvevők is olvashatják. A szabály és a kivétel összehangolása nyitott.
7. A helyi ellenőrzés Node 26-tal futott, a `package.json` Node 24-et ír elő.

## Ellenőrzött fájlok (SHA-256)

| Fájl | SHA-256 |
| --- | --- |
| `materials/presentations/00-nyito-eloadas.html` | `43814d9106de252dffeb2756941a81940829827aff6cfd09c0740eca4c90ed55` |
| `materials/presentations/00-nyito-eloadas.md` | `6999cc154753aeaa46307cbd54cd9e57de76c254a13550f18b386a6c7ad8eecc` |
| `materials/presentations/00-nyito-eloadas-jegyzet.md` | `0a12b895ca23cc333a10521e6a0f4d4d746fa0752b19f84d273cd5ac91a04f53` |
| `materials/presentations/00-nyito-eloadas-jegyzet.html` | `2d043220e303f067449b1bbf3f52403b3c91d8d98bfd02aec30fc78140ce2d3f` |
| `materials/schedule.md` | `e5bf64572d319a3d7d79f43c91b4f69f2df01894b17bd1d2505dbdda1b4cbd3b` |
| `materials/schedule.html` | `f841538cb4a23dc22f43f4d77789b69450bb419c842d28462a14a6b68048427c` |
