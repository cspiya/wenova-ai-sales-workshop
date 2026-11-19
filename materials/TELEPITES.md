# Telepítés – futtatókönyv a Claude-nak

A résztvevő ezt az egy mondatot írja a Claude Desktop Cowork-munkamenetébe (vagy a Claude Code-ba):

```text
Telepítsd a workshop tananyagát: https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md
```

Innentől ez a fájl a Claude-nak szól. Kövesd lépésről lépésre. Minden lépés után egy sorban közöld az eredményt (✅ vagy ⚠️). Ugyanez a futtatókönyv frissít is: ha a tananyag már telepítve van, az új változatot teszi a helyére, a `Munka/` mappához nem nyúl.

## Rögzített adatok

| Mi | Érték |
| --- | --- |
| Forrás (git) | `https://github.com/cspiya/wenova-ai-sales-workshop.git`, ág: `main` |
| Forrás (ZIP) | `https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip` |
| Böngészhető mappa | `https://github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials` |
| Amit telepítesz | Csak a repó `materials/` mappájának tartalma |
| Munkamappa neve | `Wenova-AI-Sales-Workshop` (Windows: `C:\Users\<felhasználó>\Wenova-AI-Sales-Workshop`, macOS: `/Users/<felhasználó>/Wenova-AI-Sales-Workshop`) |
| Szerkezet | `Wenova-AI-Sales-Workshop/Tananyag/` (tananyag, csak olvasható) és `Wenova-AI-Sales-Workshop/Munka/` (a résztvevő eredményei) |

## 1. Hol vagyunk?

- **Cowork:** a munkamappa az a helyi mappa, amelyet a résztvevő a munkamenethez vagy a Cowork-projekthez csatolt. Ha nincs csatolt mappa, állj meg, és mondd el: „Hozz létre a dokumentumaid mellett egy `Wenova-AI-Sales-Workshop` nevű mappát, majd a Claude-ban: Projects → + → Use an existing folder, válaszd ki ezt a mappát, és ebben a projektben írd újra a telepítő mondatot.”
- **Claude Code:** a munkamappa az aktuális könyvtár. Ha a neve nem `Wenova-AI-Sales-Workshop`, kérdezd meg, létrehozod-e a fenti útvonalon; ha igen, hozd létre, és kérd meg a résztvevőt, hogy indítsa újra a Claude Code-ot abban a mappában.
- Ha a munkamappába nem tudsz írni: állj meg, és kérj egy másik, írható mappát.

## 2. Mi van már ott?

- Ha létezik `Munka/`: nem nyúlsz hozzá. Ez a résztvevő munkája.
- Ha létezik `Tananyag/VERSION`: olvasd ki a régi verziót. Ez frissítés lesz.
- Más fájlokhoz a munkamappában nem nyúlsz, kivéve a gyökérben lévő `AGENTS.md` és `CLAUDE.md` fájlt (5. lépés).

## 3. Letöltés ideiglenes helyre

Ideiglenes mappát használj a munkamappán kívül (Cowork: a saját környezeted ideiglenes mappája; Claude Code: az operációs rendszer ideiglenes mappája).

1. Első próbálkozás: `git clone --depth 1 https://github.com/cspiya/wenova-ai-sales-workshop.git <ideiglenes>/repo`
2. Ha nincs git: töltsd le a ZIP-et (`curl -L -o <ideiglenes>/ws.zip <ZIP-cím>`; Windows PowerShellben `Invoke-WebRequest -Uri <ZIP-cím> -OutFile <ideiglenes>\ws.zip`), és csomagold ki (`unzip`; Windows PowerShellben `Expand-Archive`). A kicsomagolt mappa neve `wenova-ai-sales-workshop-main`.
3. Ellenőrizd, hogy létezik a `materials/VERSION`, a `materials/index.html` és a `materials/modules/` mappa.

**Ha a letöltés hálózati hiba miatt nem sikerül (Cowork):** mondd el a résztvevőnek: „Beállítások → Képességek (Settings → Capabilities): kapcsold be az Allow network egress kapcsolót, a Domain allowlist legyen Package managers only (ez engedi a github.com-ot), vagy add hozzá a github.com-ot az Additional allowed domains listához. Utána írd: Próbáld újra.” Ha így sem megy, ugorj a [kézi útra](#kezi-ut).

## 4. A tananyag a helyére

1. Ha van régi `Tananyag/`: ne töröld. Nevezd át `Tananyag-<régi verzió>-<ÉÉÉÉHHNN-ÓÓPP>` névre. A résztvevő később maga törölheti.
2. Hozd létre az új `Tananyag/` mappát, és másold bele a letöltött `materials/` mappa **tartalmát** (nem magát a `materials` mappát). Mást a repóból ne másolj.
3. A `Munka/` mappát, ha nincs, hozd létre ezekkel az almappákkal: `00-Felkeszules`, `01-DNS`, `02-Tartalom`, `03-Leadek`, `04-Ajanlat`, `05-Folyamat`. Meglévő `Munka/` mappában csak a hiányzó almappákat hozd létre.

## 5. Utasításfájlok a gyökérbe

Másold a `Tananyag/AGENTS.md` és a `Tananyag/CLAUDE.md` fájlt a munkamappa gyökerébe. Ha ott már van eltérő tartalmú `AGENTS.md` vagy `CLAUDE.md`, előbb nevezd át `.regi` végződésűre.

## 6. Ellenőrzés

Közöld ✅/⚠️ jelöléssel:

- `Tananyag/VERSION` tartalma (és a régi verzió, ha frissítés volt);
- a `Tananyag/` fájljainak száma (legalább 90 legyen);
- megvan-e: `Tananyag/index.html`, `Tananyag/README.md`, `Tananyag/AGENTS.md`, `Tananyag/assistant.md`, `Tananyag/modules/00-prework.md` … `05-pipeline-review.md`, `Tananyag/starter-kit/agents/` öt agentfájlja, `Tananyag/assets/notebook.css`;
- a `Munka/` érintetlen maradt (fájlszám előtte és utána);
- a gyökérben ott az `AGENTS.md` és a `CLAUDE.md`.

Az ideiglenes letöltést törölheted, mert a munkamappán kívül van.

## 7. Mondd meg, mi a következő lépés

Pontosan ezt add át, a tényleges útvonalakkal:

1. „Nyisd meg a böngészőben: `<munkamappa>/Tananyag/index.html` (dupla kattintás a fájlkezelőben). Ez a tananyag.”
2. Cowork esetén: „A Cowork-projekt beállításaiban (Instructions) írd be: »Kövesd a munkamappa AGENTS.md fájlját. A cégem neve: [cégnév].« Mentsd.” Claude Code esetén ez nem kell: a `CLAUDE.md` betölti az `AGENTS.md`-t.
3. „Írd be: Kezdjük a felkészülést.”

<a name="kezi-ut"></a>

## Kézi út (ha a Claude nem tud letölteni)

Ezt a résztvevő csinálja, kb. 3 perc:

1. Böngészőben nyisd meg: `https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip`. A letöltés magától elindul.
2. **Windows:** a Letöltések mappában jobb klikk a `wenova-ai-sales-workshop-main.zip` fájlon → **Összes kibontása** → **Kibontás**. **macOS:** dupla kattintás a ZIP-en.
3. Nyisd meg a kibontott `wenova-ai-sales-workshop-main` mappát, azon belül a `materials` mappát.
4. Jelöld ki a `materials` mappa teljes tartalmát (Ctrl+A, macOS: Cmd+A), másold (Ctrl+C / Cmd+C).
5. A `Wenova-AI-Sales-Workshop` mappádban hozz létre egy `Tananyag` mappát, nyisd meg, illeszd be (Ctrl+V / Cmd+V).
6. Hozz létre mellette egy üres `Munka` mappát.
7. A Claude-ban írd: „A Tananyag/TELEPITES.md 4. szakasza szerint hozd létre a Munka hat almappájából a hiányzókat. Hagyd a helyén a bemásolt Tananyag mappát, majd folytasd az 5–7. szakasszal.”

## Ha végképp nem megy

A tananyag böngészőben is olvasható: `https://github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials`. A gyakorlatok a claude.ai-projekttel is végigjárhatók (tartalékút a felkészülési modulban). Szólj egy oktatónak, aki a helyeden segít.
