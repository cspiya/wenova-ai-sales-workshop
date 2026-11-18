<!-- presentation -->
# Hangügynök-labor: AI-telefonos asszisztens kipróbálása

**Állapot: draft.** A felület és a helyi segéd technikailag ellenőrzött; valódi API-kulccsal élő hanghívással ez a változat még nincs kipróbálva.

A labor egy böngészőben futó demó: egy magyarul beszélő AI-hangasszisztens telefonos értékesítési forgatókönyv szerint beszélget. Te veszed fel a „telefont”, vagy két AI-modell beszélget egymással: az egyik az eladó, a másik egy kitalált érdeklődő. Minden beszélgetés átirata, mérőszámai és (ha kéred) hangja elmentődik a böngésződben, utána egy szövegmodell értékeli, és javaslatot tesz a forgatókönyv javítására. Ez a kitekintő bemutatóhoz tartozik, nem kötelező gyakorlat. Valódi telefonhívás nincs.

## Megnyitás

- **A böngészőben:** [https://cspiya.github.io/wenova-ai-sales-workshop/materials/demos/voice-lab/app.htm](https://cspiya.github.io/wenova-ai-sales-workshop/materials/demos/voice-lab/app.htm). Ez a cím akkor él, amikor a tananyag-repóban a GitHub Pages be van kapcsolva, és ez a változat bekerült a közzétett ágba. Addig használd a helyi indítást.
- **A saját gépeden:** ebben a mappában `python server.py`, majd nyisd meg: `http://127.0.0.1:8765/`. Csak a Python szabványos könyvtára kell. A részletek lent, a [helyi futtatásnál](#helyi-futtatás).
- **A labor felülete:** [app.htm](app.htm). Fájlként (dupla kattintással) nem működik: weboldalként kell megnyitni, a Pages-címen vagy a helyi segéden keresztül.

Ajánlott böngésző: Chrome vagy Edge, mikrofonnal, **fülhallgatóval**. Hangszóróból a mikrofon visszahallja az ügynököt, és ez elrontja a mérést.

## Mit mutat a demó?

- **Ember ↔ modell:** te beszélsz egy hangmodellel a mikrofonon át. A modell az aktív forgatókönyvet kapja utasításként. A megszólítás mezőbe kitalált keresztnevet írhatsz; ha üresen hagyod, név nélkül köszön.
- **Modell ↔ modell, hang:** két élő hangmodell beszélget. Az eladó a forgatókönyvet kapja, az érdeklődő a kiválasztott personát. A böngésző az egyik modell hangját a másik bemenetére köti, a mikrofon nincs használatban; mindkettőt hallod.
- **Modell ↔ modell, csak szöveg:** gyors és olcsó szimuláció a szövegmodellel, megszólalásonként. Kérésre a böngésző magyar hangja felolvassa. Forgatókönyv-változatok gyors összevetésére jó, a hangmodellek viselkedését nem méri.
- **Forgatókönyv:** a beszélgetés előtt megnézheted és szerkesztheted. Minden mentés új verzió; a verziók összevethetők. Az **Új forgatókönyv írása** egy rövid megbízásból ír új változatot. A **Finomítás** a kiválasztott verziót javítja a kérésed vagy a legutóbbi elemzés alapján. Mindig az aktivált verzió jut el a modellekhez.
- **Persona:** a vevőszerep kitalált adatai: korosztály, munkakör, cégméret, iparág, hozzáállás (érdeklődő, szkeptikus, elfoglalt, árérzékeny, zavarodott), ellenvetések, laptop, online forma. A véletlenmag ugyanazt a personát adja vissza; a rögzített mezők új sorsoláskor sem változnak.
- **Mérés:** válaszidő (a másik fél beszédének végétől az ügynök első hangjáig), közbevágás, és ahol a szolgáltató jelzi, szerveresemény-alapú késleltetés.
- **Elemzés:** forgatókönyv-követés, minősítő kérdések, ellenvetések kezelése, nyomulósság, ténybeli pontosság (ár, dátum, helyszín, kupon), kimenet, és konkrét javaslatok. A **Javaslatok alkalmazása** gomb ezekből új forgatókönyv-verziót készít, amelyet átnézés után aktiválhatsz.

Az alapforgatókönyv a november 19-i workshop kampányához készült: néhány nappal a workshop előtti hívás, előbb minősítő kérdések, utána az ajánlat. Az egyetlen ajánlat a **LATE20 kupon**: húsz százalék a listaárból (96 000 Ft + ÁFA helyett 76 800 Ft + ÁFA, bruttó 97 536 Ft). Forrása: [prompts/sales-call-hu.md](prompts/sales-call-hu.md). A kimondott szövegben a márkanév fonetikusan, „Vínova” alakban szerepel, hogy a beszédszintézis jól ejtse; írásban Wenova.

## Honnan jönnek a kulcsok?

A demó oldala statikus, kulcs nincs benne és a repóban sincs. A hangmodellekhez rövid életű hitelesítő adat kell, ezt háromféleképpen kaphatja (Beállítások; automatikus módban ebben a sorrendben):

1. **Távoli broker:** egy kis szerver a Wenova kulcsaival, amely csak rövid életű tokent ad ki, hozzáférési kóddal. A Wenova brokere (`https://voice-lab-broker.vercel.app`) be van állítva; a hozzáférési kódot a workshopon kapod meg, és ezzel kulcs nélkül is kipróbálható. A felületét a [BROKER-API.md](BROKER-API.md) írja le.
2. **Helyi segéd:** `python server.py` a saját gépeden, a saját kulcsaiddal. Ugyanazt a felületet adja, mint a broker.
3. **Saját API-kulcs a böngészőben:** a kulcs csak ebben a böngészőben marad (alapból a lap bezárásáig; kérésre ezen az eszközön), és közvetlenül a szolgáltatóhoz megy. A **Kulcsok törlése** gomb eltávolítja. Saját kulcsnál a költség a te fiókodat terheli.

| Szolgáltató | Mire kell | Közvetlenül a böngészőből (saját kulccsal) | Brokerrel vagy helyi segéddel |
| --- | --- | --- | --- |
| OpenAI (GPT-Live `gpt-live-1`, Realtime) | hang, szövegmodell | igen: a kulcskiadó és a hívás végpontjai engedik a böngészős kérést (CORS) | igen |
| Google (Gemini Live `gemini-3.8-live`) | hang, szövegmodell | igen: ideiglenes token és WebSocket | igen |
| ElevenLabs (fiókban beállított ügynök) | hang, csak Ember ↔ modell | igen, ha megadod az ügynök azonosítóját | igen |

A böngészős elérést a végpontok CORS-válasza alapján ellenőriztük; teljes élő hívás ebben a változatban még nem volt.

## Adatvédelem

- A beszélgetés hangja a böngésződ és a választott szolgáltató között megy. Az átirat, a felvétel, az elemzés és a forgatókönyv-verziók csak a böngésződben tárolódnak (IndexedDB). Az Előzmények fülön exportálhatod (JSON) és letöltheted a felvételt; a Beállításokban mindent törölhetsz.
- Az elemzéshez és a forgatókönyv-íráshoz a szöveg a szövegmodell szolgáltatójához kerül.
- Csak saját teszthívásra és kitalált adatokkal használd. Valódi érdeklődő vagy ügyfél nevét, számát, beszélgetését ide ne vidd.
- A Google ingyenes szintjén a beszélgetést a Google felhasználhatja a termékei fejlesztésére. Valódi ügyféladattal ne használd.

## Helyi futtatás

```text
cd materials/demos/voice-lab
python server.py
```

Ezután nyisd meg: `http://127.0.0.1:8765/`. Leállítás: Ctrl+C. Másik port: `python server.py --port 8780`.

| Változó | Mire kell |
| --- | --- |
| `OPENAI_API_KEY` | GPT-Live, Realtime, OpenAI-szövegmodell |
| `GEMINI_API_KEY` vagy `GOOGLE_API_KEY` | Gemini Live, Gemini-szövegmodell |
| `ELEVENLABS_API_KEY`, `EL_AGENT_ID_REALTIME`, `EL_AGENT_ID_CASCADE` | ElevenLabs-ügynökök |
| `VOICE_LAB_TEXT_MODEL_OPENAI`, `VOICE_LAB_TEXT_MODEL_GOOGLE` | a szövegmodell azonosítója (alapból `gpt-5.4-mini`, illetve `gemini-3.8-flash`) |
| `VOICE_LAB_ACCESS_CODE` | ha meg van adva, a segéd csak ezzel a kóddal ad tokent |
| `VOICE_LAB_ALLOWED_ORIGINS` | mely weboldalak érhetik el a segédet (alapból a GitHub Pages-cím) |
| `VOICE_LAB_ENV` | az env-fájl útvonala (alapból a git-ignorált `.env.local` ebben a mappában; minta: `.env.example`) |
| `VOICE_LAB_DATA` | a helyi másolatok mappája (alapból a git-ignorált `.data/`) |

- A kulcsot környezeti változóban vagy az env-fájlban add meg; ne írd a kódba, és ne commitold.
- `python server.py --selftest --offline`: hálózat nélküli önellenőrzés (forgatókönyv, beállításforma, kulcsszűrés, fájlvédelem). `--offline` nélkül minden szolgáltatótól egyszer kér tokent, és csak az eredményt írja ki, értéket nem.
- A GitHub Pages-ről megnyitott oldal is használhatja a helyi segédet: Beállítások → Helyi segéd → Kapcsolat ellenőrzése. A Chrome ilyenkor engedélyt kérhet a helyi hálózat elérésére.

## Ismert korlátok

- Modell ↔ modell hangmódban a két modell egymás hangját hallja, mint egy telefonvonalon. A szerepváltást a modellek saját hangérzékelése (VAD) dönti el, ezért előfordul, hogy egymás szavába vágnak vagy mindketten várnak. A beszélgetés az eladó elköszönésekor, az időkorlátnál vagy a Leállítás gombra áll le.
- Modell ↔ modell hangmódban csak OpenAI- és Gemini-modell választható; az ElevenLabs-ügynökök csak Ember ↔ modell módban, mert a szerepüket a fiókban beállított ügynök adja.
- ElevenLabs-nál a forgatókönyv átadásához az ügynökben engedélyezni kell a prompt- és nyitómondat-felülírást. Ha ez ki van kapcsolva, kapcsold ki a felülírást is; ilyenkor az ügynök a saját, fiókban tárolt promptját használja, nem a labor forgatókönyvét.
- A GPT-Live munkamenetet a labor `session.close` üzenettel zárja. Ha a böngészős kapcsolat fel sem épül, a munkamenetet az OpenAI zárja le.
- A Gemini Live munkamenet legfeljebb 15 perces.
- A szövegmodell alapértelmezett azonosítója a beállításokban módosítható; a **Modellek listázása** gomb megmutatja, mi érhető el a kulccsal.

[Vissza a demókhoz](../README.md) · [Folyamatpróba modul](../../modules/05-pipeline-review.md)
