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
| Amit telepítesz | Csak a repó `materials/` mappájának tartalma, a rejtett fájlokkal együtt (`.claude-plugin`, `.mcp.json`) |
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
2. Ha nincs git: töltsd le a ZIP-et (`curl -L -o <ideiglenes>/ws.zip <ZIP-cím>`; Windows PowerShellben `Invoke-WebRequest -Uri <ZIP-cím> -OutFile <ideiglenes>\ws.zip`), és csomagold ki (`unzip`; Windows PowerShellben `Expand-Archive`). A kicsomagolt mappa neve `wenova-ai-sales-workshop-main`. A ZIP-cím a `codeload.github.com` címre irányít át, ezért ehhez ez a domain is kell.
3. Ellenőrizd, hogy létezik a `materials/VERSION`, a `materials/index.html` és a `materials/modules/` mappa.

**Ha a letöltés hálózati hiba miatt nem sikerül (Cowork):** mondd el a résztvevőnek: „Beállítások → Képességek (Settings → Capabilities): kapcsold be az Allow network egress kapcsolót, a Domain allowlist legyen Package managers only (ez engedi a github.com-ot), vagy add hozzá a github.com-ot az Additional allowed domains listához. Utána írd: Próbáld újra.” Ha a `git clone` nem megy, és a ZIP-letöltés is elakad, a `codeload.github.com` címet is add hozzá az Additional allowed domains listához. Ha így sem megy, ugorj a [kézi útra](#kezi-ut).

## 4. A tananyag a helyére

1. Ha van régi `Tananyag/`: ne töröld. Nevezd át `Tananyag-<régi verzió>-<ÉÉÉÉHHNN-ÓÓPP>` névre. A résztvevő később maga törölheti.
2. Hozd létre az új `Tananyag/` mappát, és másold bele a letöltött `materials/` mappa **teljes tartalmát, a rejtett fájlokkal együtt** (`.claude-plugin`, `.mcp.json`), de magát a `materials` mappát ne. Például: `cp -R <ideiglenes>/repo/materials/. Tananyag/`; Windows PowerShellben `Copy-Item -Path <ideiglenes>\repo\materials\* -Destination Tananyag -Recurse -Force`. Mást a repóból ne másolj.
3. A `Munka/` mappát, ha nincs, hozd létre ezekkel az almappákkal: `00-Felkeszules`, `01-DNS`, `02-Tartalom`, `03-Leadek`, `04-Ajanlat`, `05-Folyamat`. Meglévő `Munka/` mappában csak a hiányzó almappákat hozd létre.

## 5. Utasításfájlok a gyökérbe

Másold a `Tananyag/AGENTS.md` és a `Tananyag/CLAUDE.md` fájlt a munkamappa gyökerébe. Ha ott már van eltérő tartalmú `AGENTS.md` vagy `CLAUDE.md`, előbb nevezd át `.regi` végződésűre.

## 6. Ellenőrzés

Közöld ✅/⚠️ jelöléssel:

- `Tananyag/VERSION` tartalma (és a régi verzió, ha frissítés volt);
- a `Tananyag/` fájljainak száma a rejtett fájlokkal együtt (legalább 153 legyen);
- megvan-e: `Tananyag/index.html`, `Tananyag/README.md`, `Tananyag/AGENTS.md`, `Tananyag/assistant.md`, `Tananyag/modules/00-prework.md` … `05-pipeline-review.md`, `Tananyag/starter-kit/agents/` nyolc agentfájlja (`orchestrator`, `writer`, `reviewer`, `ceo`, `marketing`, `sales`, `inbox`, `crm`), `Tananyag/assets/notebook.css`;
- megvan-e a plugin: `Tananyag/plugin/wenova-sales-workshop.plugin`, és a `Tananyag/plugin/wenova-sales-workshop/` mappában a `.claude-plugin/plugin.json`, a `.mcp.json`, az `agents/` hét fájlja és a `skills/` nyolc `SKILL.md` fájlja. Kézi másolásnál a rejtett fájlok hiányozhatnak: ez ⚠️, de nem akadály, mert a feltöltéshez a `.plugin` fájl elég;
- a `Munka/` érintetlen maradt (fájlszám előtte és utána);
- a gyökérben ott az `AGENTS.md` és a `CLAUDE.md`.

Az ideiglenes letöltést törölheted, mert a munkamappán kívül van.

## 6/a. A csapat hozzáadása (plugin)

A plugin adja a Karmestert, az Írót, az Ellenőrt, a CEO, a Marketing és a Sales szerepet, a blokkok skilljeit és a négy partner-connector címét. A sorrend kötött: **előbb plugin, utána Instructions, utána új munkamenet.**

**Cowork:** a plugint te nem tudod hozzáadni, ezt a résztvevő kattintja végig. Add át pontosan ezt:

1. „Bal oldalt Customize → Plugins → Add → Add marketplace.”
2. „A címhez írd be: `cspiya/wenova-ai-sales-workshop`, majd add hozzá.”
3. „A listában a **Wenova Sales Workshop** pluginnál kattints az Install gombra.”
4. „Ha ez nem megy: Customize → Plugins → Add → Upload plugin, és válaszd ki a `Tananyag/plugin/wenova-sales-workshop.plugin` fájlt.”

**Claude Code:** kérj engedélyt, majd futtasd:

```text
claude plugin install wenova-sales-workshop --marketplace cspiya/wenova-ai-sales-workshop
```

Ha ez hibát ad, két lépésben próbáld: `claude plugin marketplace add cspiya/wenova-ai-sales-workshop`, majd `claude plugin install wenova-sales-workshop@wenova-workshop`. Ellenőrzés: `claude plugin list`. A betöltéshez `/reload-plugins` vagy a Claude Code újraindítása kell.

**Ha a plugin nem adható hozzá:** ne állj meg, a nap plugin nélkül is végigvihető. A szerepeket az indítómondatok (`Karmester: …`, `Író: …`, `CEO: …`) és a `Tananyag/starter-kit/agents/` fájljai adják, az Ellenőr új beszélgetésben fut. Jelöld ⚠️ jellel, és írd be a `plugin_not_installed` tételt a `Munka/00-Felkeszules/progress.json` fájl `gaps` listájába (ha nincs ilyen fájl, a `Tananyag/starter-kit/progress.json` alapján hozd létre).

### Mi marad kézi?

Ezt mondd el a résztvevőnek is, a saját felületére szabva. Ne ígérj ennél többet.

| Felület | Mondd ezt | Ezt ne mondd |
| --- | --- | --- |
| **Cowork** | „Egy mondat felteszi a tananyagot. A csapatodat néhány kattintással adod hozzá, utána minden szolgáltatásnál egyszer jóváhagyod a kapcsolatot, és belépsz.” | „Egy kattintás mindent telepít.” „Csak be kell jelentkezned.” |
| **Claude Code** | „Egy parancs felteszi a csapatot és a kapcsolatok címét. Utána szolgáltatásonként belépsz a `/mcp` menüben.” | „Semmit nem kérdez”: a mappabizalom és a parancsengedélyek megmaradnak. |
| **claude.ai (tartalék)** | „A skillek és a connectorok működnek, az Ellenőrt új beszélgetésben futtatod.” | „Az ismétlő ciklus automatikus”: a chat az alügynököket nem tölti be. |
| **Team vagy Enterprise fiók** | „A connectorokat a szervezet tulajdonosának előbb engedélyeznie kell.” | „Te magad hozzáadhatod.” |

Kézi marad minden felületen: a szolgáltatói belépés és a levelező írási eszközeinek tiltása. Coworkben kézi még a mappa és a projekt létrehozása, a plugin hozzáadása, a projekt Instructions mezője, a Gmail és a Drive bekötése (Customize → Connectors), valamint a plugin Connectors fülén connectoronként az Add és a Connect. A partner-connectorokat elég a saját blokkjuk elején bekötni.

## 7. Mondd meg, mi a következő lépés

Pontosan ezt add át, a tényleges útvonalakkal:

1. „Nyisd meg a böngészőben: `<munkamappa>/Tananyag/index.html` (dupla kattintás a fájlkezelőben). Ez a tananyag.”
2. „Add hozzá a csapatot a 6/a lépés szerint.” Claude Code-ban ezt te végzed el, engedélykérés után.
3. Cowork esetén: „A Cowork-projekt beállításaiban (Instructions) írd be: »Kövesd a munkamappa AGENTS.md fájlját. A cégem neve: [cégnév].« Mentsd.” Claude Code esetén ez nem kell: a `CLAUDE.md` betölti az `AGENTS.md`-t.
4. „Nyiss új munkamenetet ebben a projektben, hogy a plugin és az utasítás betöltődjön.” Claude Code-ban: `/reload-plugins` vagy újraindítás.
5. „Írd be: Kezdjük a felkészülést. Az első indítás rövid felméréssel kezdődik. A Claude feljegyzi, mi áll készen, mi hiányzik, és mit elég a saját blokkjában elintézni.”
6. „Ha később újra szeretnéd ellenőrizni a beállításokat, írd be: Mérd fel a gépem.”

<a name="kezi-ut"></a>

## Kézi út (ha a Claude nem tud letölteni)

Ezt a résztvevő csinálja, kb. 3 perc:

1. Böngészőben nyisd meg: `https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip`. A letöltés magától elindul.
2. **Windows:** a Letöltések mappában jobb klikk a `wenova-ai-sales-workshop-main.zip` fájlon → **Összes kibontása** → **Kibontás**. **macOS:** dupla kattintás a ZIP-en.
3. Nyisd meg a kibontott `wenova-ai-sales-workshop-main` mappát, azon belül a `materials` mappát.
4. Jelöld ki a `materials` mappa teljes tartalmát (Ctrl+A, macOS: Cmd+A), másold (Ctrl+C / Cmd+C). A macOS Finder a ponttal kezdődő rejtett fájlokat nem másolja: ez nem baj, a plugin feltöltéséhez a `plugin/wenova-sales-workshop.plugin` fájl elég.
5. A `Wenova-AI-Sales-Workshop` mappádban hozz létre egy `Tananyag` mappát, nyisd meg, illeszd be (Ctrl+V / Cmd+V).
6. Hozz létre mellette egy üres `Munka` mappát.
7. A Claude-ban írd: „A Tananyag/TELEPITES.md 4. szakasza szerint hozd létre a Munka hat almappájából a hiányzókat. Hagyd a helyén a bemásolt Tananyag mappát, majd folytasd az 5., 6., 6/a és 7. szakasszal.”

## Ha végképp nem megy

A tananyag böngészőben is olvasható: `https://github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials`. A gyakorlatok a claude.ai-projekttel is végigjárhatók (tartalékút a felkészülési modulban). Szólj egy oktatónak, aki a helyeden segít.
