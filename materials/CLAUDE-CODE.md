<!-- presentation -->
# Haladó út: Claude Code a terminálban

**Mentőút.** A nap kötelező módja a Claude Desktop Cowork. Ezt az utat akkor használd, ha a Cowork a gépeden nem indul ([Windows-mentőút Scooppal](#scoop)), vagy ha szívesen dolgozol a terminálban (karakteres képernyőn). Ugyanazt a tananyagot, ugyanazokkal a lépésekkel járod végig, csak a Claude Code-ban.

## Mikor jó ez neked?

- Ismered a terminált (Windowson PowerShell, macOS-en Terminal), vagy szeretnéd megtanulni.
- Azt szeretnéd, hogy a Claude közvetlenül a saját gépeden, a munkamappádban dolgozzon, és a változásokat fájlonként lásd.
- Pro, Max vagy magasabb Claude-előfizetésed van. Az ingyenes csomag nem tartalmazza a Claude Code-ot.

## 1. Telepítés (5 perc)

A hivatalos parancsok ([Claude Code telepítési leírás](https://code.claude.com/docs/en/setup)):

| Rendszer | Parancs |
| --- | --- |
| Windows, PowerShell | `irm https://claude.ai/install.ps1 \| iex` |
| Windows, CMD | `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd` |
| macOS | `curl -fsSL https://claude.ai/install.sh \| bash` |
| macOS, Homebrew | `brew install --cask claude-code` |
| Windows, WinGet | `winget install Anthropic.ClaudeCode` |

Utána nyiss **új** terminálablakot, és ellenőrizd: `claude --version`. Ha a `claude` parancs ismeretlen, a leírás „Fix your PATH” része segít. Windowson a Git for Windows nem kötelező; nélküle a Claude Code PowerShell-lel dolgozik. Rendszergazdai jog nem kell.

<a name="scoop"></a>

## Mentőút Windowson: Claude Code Scooppal

Akkor használd, ha a Cowork nem indul a gépeden. A Scoop egy ingyenes programtelepítő, amely a saját felhasználói mappádba dolgozik, ezért rendszergazdai jog nem kell. Minden parancsot egy sima **PowerShell** ablakba másolj: Start menü, írd be, hogy PowerShell, és nyisd meg. Ne válaszd a „Futtatás rendszergazdaként” lehetőséget.

**1. A Scoop telepítése.** Ez az egy sor közvetlenül a memóriából futtatja a hivatalos telepítőt, fájlt nem ment le, ezért nem jön elő a „letöltött fájl nem futtatható” hiba.

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force; Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

- **Akkor jó, ha** ezt látod: `Scoop was installed successfully!`
- **Ha azt írja, hogy már telepítve van:** ugorj a 2. lépésre.
- **Ha rendszergazdai ablakra panaszkodik:** zárd be, és nyiss sima PowerShell ablakot.

**2. A Claude Code és ami kell hozzá.** A `7zip` a csomagok kibontásához, a `git` a Scoop csomaglistáihoz kell, a `claude-code` maga a Claude Code.

```powershell
scoop install 7zip git claude-code
```

- **Akkor jó, ha** a végén ezt látod: `'claude-code' (…) was installed successfully!`
- **Ha megszakad:** futtasd újra ugyanezt a sort, a kész csomagokat átugorja.

**3. Ellenőrzés.**

```powershell
claude --version
```

- **Akkor jó, ha** egy verziószámot látsz, utána `(Claude Code)` felirattal.
- **Ha a `claude` parancs ismeretlen:** zárd be az ablakot, nyiss újat, és próbáld újra.

Ezután folytasd a [belépéssel](#2-belépés) és a [tananyag telepítésével](#3-a-tananyag-telepítése-egy-mondattal).

**4. Választható: videó hanggal és narrációval.** Ezekre a napi feladatokhoz nincs szükség.

```powershell
scoop install ffmpeg sox espeak-ng whisper-cpp nodejs-lts uv
```

| Csomag | Mire való? |
| --- | --- |
| `ffmpeg` | Videó és hang vágása, átalakítása, összefűzése |
| `sox` | Hangfájlok átalakítása és szerkesztése |
| `espeak-ng` | Gépi felolvasás szövegből, sok nyelven |
| `whisper-cpp` | Beszéd átírása szöveggé, például felirathoz |
| `nodejs-lts` | Node.js, sok videókészítő eszköz erre épül |
| `uv` | Python-eszközök gyors telepítése |

Ellenőrzés: `scoop list`. **Akkor jó, ha** mind a hat csomag ott van a listában a verziószámával. Ha egy csomag hibát ad, a Claude Code enélkül is működik: futtasd újra a sort, vagy hagyd ki azt a csomagot.

## Mentőút macOS-en

Nyisd meg a **Terminal** alkalmazást, és másold be a hivatalos telepítő sort:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Utána nyiss új Terminal-ablakot, és írd be: `claude --version`. **Akkor jó, ha** egy verziószámot látsz. Ha a `claude` parancs ismeretlen, nézd meg a [telepítési leírás](https://code.claude.com/docs/en/setup) „Fix your PATH” részét, vagy szólj egy oktatónak.

## 2. Belépés

Írd be: `claude`. A böngészőben lépj be a Pro vagy Max Claude-fiókoddal. Jelszót a terminálba ne írj.

## 3. A tananyag telepítése egy mondattal

1. Hozd létre a munkamappát, és lépj bele:
   - Windows (PowerShell): `mkdir $HOME\Wenova-AI-Sales-Workshop; cd $HOME\Wenova-AI-Sales-Workshop`
   - macOS: `mkdir -p ~/Wenova-AI-Sales-Workshop && cd ~/Wenova-AI-Sales-Workshop`
2. Indítsd: `claude`. Amikor rákérdez, jelöld megbízhatónak a mappát.
3. Írd be:

```text
Telepítsd a workshop tananyagát: https://raw.githubusercontent.com/cspiya/wenova-ai-sales-workshop/main/materials/TELEPITES.md
```

A Claude Code a saját gépeden tölti le és csomagolja ki a tananyagot a `Tananyag/` mappába, létrehozza a `Munka/` mappát, és a gyökérbe másolja a `CLAUDE.md` és `AGENTS.md` fájlt. Minden parancs előtt engedélyt kér: olvasd el, mit futtatna, és csak akkor engedd, ha érted. A futtatókönyv: [TELEPITES.md](TELEPITES.md).

4. A futtatókönyv a plugint is felteszi. Ellenőrzés: `claude plugin list`, a listában ott a `wenova-sales-workshop`.
5. Lépj ki (`/exit`), és indítsd újra a `claude` parancsot ugyanebben a mappában. A Claude Code ekkor automatikusan betölti a `CLAUDE.md` fájlt, az pedig az `AGENTS.md`-t: így tudja a mappaszabályokat, az indítómondatokat és a biztonsági szabályokat.

## 4. Connectorok

- **A claude.ai-on bekötött connectorok** (Gmail vagy Microsoft 365, Google Drive) a Claude Code-ban is megjelenhetnek, ha ugyanazzal a fiókkal léptél be. A `/mcp` paranccsal nézd meg, mi látszik, és ott kapcsolhatod ki, ami nem kell.
- **Brandiseer, Sales Bot, EstiWise, Buffer:** a címüket a plugin hozza, külön hozzáadni nem kell. A `/mcp` menüben szolgáltatásonként lépj be a böngészőben. A partnerekhez elég a saját blokkjuk elején belépni, a Buffer választható.

## 5. Engedélyek

Az engedélyek a te döntésed. A kényelmes automatizáláshoz engedélyek kellenek, a teljes engedély is elfogadható. Amit engedélyezel, azt a Claude kérdés nélkül megteheti, a levélküldést is. A Claude a kérésed nélkül ekkor sem küld és nem publikál. A beállításokat a `/permissions` paranccsal nézheted meg és módosíthatod.

## 6. Így dolgozol a blokkokban

- Indítómondatok ugyanazok: „Kezdjük a felkészülést”, „Kezdjük az 1. blokkot”, „Hol tartok?”, „Karmester: …”, „Író: …”, és így tovább.
- Az eredmények a `Munka/` mappába kerülnek; a Claude Code minden fájlírás előtt megmutatja a változást. Nézd át, és csak utána engedd.
- A vizuális eredmények (kampányáttekintés, posztelőnézet, a nap összefoglalója) HTML-fájlok a `Munka/` alatt. Nyisd meg őket a böngészőben (dupla kattintás); claude.ai-os artifact itt nincs.
- Az Ellenőrt új munkamenetben futtasd: `/clear`, vagy nyiss új terminálablakot, és ott indíts új `claude` munkamenetet.
- Hasznos parancsok: `/mcp` (connectorok), `/permissions` (engedélyek), `/clear` (új, tiszta beszélgetés), `/resume` (korábbi beszélgetés folytatása), `/exit` (kilépés). A `/init` parancs itt nem kell: a `CLAUDE.md` már megvan.

## 7. Ütemezett feladatok

- A **Claude Desktop Code fülén** van **Scheduled** oldal. Ott a feladat a saját gépeden, a munkamappádban is futhat („Only on this computer”); ehhez a gépnek ébren kell lennie, és az alkalmazásnak nyitva ([leírás](https://code.claude.com/docs/en/desktop-scheduled-tasks)).
- A terminálban a `/loop` csak a nyitott munkamenet alatt ismétel; hosszabb távra a fenti Desktop-feladat vagy a felhőben futó ütemezett feladat való.
- Kész promptok: [ütemezett feladatok](starter-kit/scheduled-tasks.md). Ugyanaz a szabály: csak olvas, összefoglal, piszkozatot ír; nem küld.

## 8. Biztonság röviden

- Jelszót, API-kulcsot, belépőkódot soha ne írj a terminálba vagy a beszélgetésbe.
- Tudd, mit engedélyeztél: amit engedélyezel, azt a Claude kérdés nélkül megteheti.
- Ha valami furcsát kér a Claude (törlés, ismeretlen parancs), utasítsd el, és kérdezz egy oktatót.

[Vissza a felkészüléshez](modules/00-prework.md) · [A tananyag kezdőlapja](README.md)
