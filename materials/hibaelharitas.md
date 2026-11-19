<!-- presentation -->
# Hibaelhárítás: ha elakadsz a Claude Desktopban

Először írd a Claude-nak: „Elakadtam.” Ha ez nem segít, szólj egy oktatónak. A helyeden, a saját gépeden segít.

## Tartalom

- [A tananyag letöltése leáll](#letoltes)
- [A Claude szerint nincs git](#git)
- [A plugin hiányzik vagy nem adható hozzá](#plugin)
- [A Karmester nem tudja elindítani az Írót vagy az Ellenőrt](#szerepek)
- [A Claude nem követi a workshop szabályait](#utasitasok)
- [Egy connector nem működik vagy belépést kér](#connector)
- [Windowson nem indul a Cowork](#cowork)
- [Nincs Codex a gépeden](#codex)
- [Elfogyott a használati keret](#keret)
- [A Claude engedélyt kér](#engedely)
- [Más gond akadt](#egyeb)

<a name="letoltes"></a>

## A tananyag letöltése leáll

**Ezt látod.** Beírtad a telepítő mondatot, de a letöltés hibával leáll.

**Mi lehet az oka.** A Claude hálózati beállításai miatt előfordulhat, hogy nem éri el a GitHubot.

**Ezt csináld.**

1. Nyisd meg a **Settings → Capabilities** menüt, és kapcsold be az **Allow network egress** kapcsolót.
2. A **Domain allowlist** beállítása legyen **Package managers only**.
3. Az **Additional allowed domains** listába add hozzá ezt a három címet:
   - `github.com`
   - `codeload.github.com`
   - `raw.githubusercontent.com`
4. Írd a Claude-nak: „Próbáld újra.”

**Ha így sem megy.** Töltsd le a tananyagot a böngésződben, és kövesd a [kézi ZIP-út](modules/00-prework.md#00-prework.01-install--help) lépéseit. A sorrend: külön mappába másolod, ellenőrzöd, kicseréled a régit, hiba esetén visszaállítod.

<a name="git"></a>

## A Claude szerint nincs git

**Ezt látod.** A telepítés közben a Claude jelzi, hogy nem éri el a `git` programot.

**Mi lehet az oka.** A `git`, amellyel a Claude először próbálja letölteni a fájlokat, hiányozhat a munkakörnyezetéből.

**Ezt csináld.** A Claude ZIP-ből is le tudja tölteni a tananyagot. Írd be: „Töltsd le ZIP-ből a tananyagot a telepítési útmutató szerint.”

**Ha így sem megy.** Kövesd a [kézi ZIP-út](modules/00-prework.md#00-prework.01-install--help) lépéseit. A sorrend itt is ugyanaz: külön mappa, ellenőrzés, csere, hiba esetén visszaállítás.

<a name="plugin"></a>

## A plugin hiányzik vagy nem adható hozzá

**Ezt látod.** Nem sikerül hozzáadnod a workshop pluginját, vagy a munkamenetben nem jelennek meg a szerepek és parancsok.

**Mi lehet az oka.** A hozzáadás megszakadt, vagy a munkamenet már a hozzáadás előtt megnyílt.

**Ezt csináld.** Nyisd meg a **Customize → Plugins → Add → Upload plugin** menüt. A `Tananyag/plugin/` mappából válaszd a `wenova-sales-workshop.plugin` fájlt. Utána nyiss **új munkamenetet** a workshop projektjében.

**Ha így sem megy.** Folytasd plugin nélkül. Használd a [szerepleírásokat](starter-kit/agents/README.md) és az ott megadott indítómondatokat.

<a name="szerepek"></a>

## A Karmester nem tudja elindítani az Írót vagy az Ellenőrt

**Ezt látod.** A Karmester nem tudja külön elindítani az Írót vagy az Ellenőrt.

**Mi lehet az oka.** Előfordulhat, hogy a Claude ebben a munkamenetben csak közvetlenül tudja követni a szerepek leírását.

**Ezt csináld.** Az Írót te indíthatod. Kezdd a kérésedet így: `Író:`, majd írd le a feladatot. Kérd el a Karmestertől az ellenőrzési csomagot. Nyiss új beszélgetést ugyanabban a projektben, kezdd az `Ellenőr: [műfaj]` mondattal, majd te másold át a csomagot. A műfaj lehet például levél vagy ajánlat.

**Ha így sem megy.** Szólj az oktatónak. Mutasd meg a mentett piszkozatot és az eredeti feladatot.

<a name="utasitasok"></a>

## A Claude nem követi a workshop szabályait

**Ezt látod.** A Claude például rossz mappába ment, vagy más céghez tartozó anyagból dolgozik.

**Mi lehet az oka.** A projekt utasítása hiányzik, vagy a munkamenet a beállítás mentése előtt indult.

**Ezt csináld.** Írd a workshop projektjének **Instructions** mezőjébe: „Kövesd a munkamappa AGENTS.md fájlját. A cégem neve: [cégnév].” A `[cégnév]` helyére a céged nevét írd. Mentsd, majd nyiss új munkamenetet a projektben.

**Ha így sem megy.** Nézd meg, hogy a projekt a `Wenova-AI-Sales-Workshop` mappára mutat-e, és a mappa gyökerében ott van-e az `AGENTS.md`. A [telepítési útmutató](TELEPITES.md) 5. szakasza segít az utasításfájlok pótlásában.

<a name="connector"></a>

## Egy connector nem működik vagy belépést kér

**Ezt látod.** A Claude nem tud olvasni egy szolgáltatásból, vagy a kapcsolat belépést kér.

**Mi lehet az oka.** A connector, vagyis a Claude kapcsolata a szolgáltatáshoz, még nincs hozzáadva, vagy újra be kell lépned.

**Ezt csináld.** A **Customize → Connectors** menüben vagy a workshop plugin **Connectors** fülén válaszd ki a kapcsolatot. Ha még hiányzik, kattints az **Add** gombra, majd a **Connect** gombra. A szolgáltató oldalán lépj be. Utána kérd meg a Claude-ot, hogy végezzen rövid olvasási próbát, például olvassa ki egy levél tárgyát.

**Ha így sem megy.** Kövesd az adott modul „Ha elakadtál” részét. Levelezésnél például dolgozhatsz bemásolt szöveggel vagy [mintapostafiókkal](scenarios/office-plants/outputs/mailbox-sample.md).

<a name="cowork"></a>

## Windowson nem indul a Cowork

**Ezt látod.** A Claude Desktop megnyílik, de a Cowork nem tud munkamenetet indítani.

**Mi lehet az oka.** A Coworknak virtualizációra van szüksége, hogy külön környezetben fusson. Lehet, hogy ez a funkció ki van kapcsolva a gépeden.

**Ezt csináld.** Folytasd Claude Code-ban a [Scoop-mentőút](CLAUDE-CODE.md#scoop) lépéseivel.

**Ha így sem megy.** Hozz létre projektet a claude.ai-on. A feltöltendő fájlokat a [felkészülési modul mentőútjában](modules/00-prework.md#00-prework.01-install--help) találod.

<a name="codex"></a>

## Nincs Codex a gépeden

**Ezt látod.** Az induló felmérésben a Claude jelzi, hogy nem talált Codexet.

**Mi lehet az oka.** A Codex nincs telepítve, vagy ebből a munkamenetből nem érhető el. Codex nélkül is folytathatod a workshopot.

**Ezt csináld.** Az Ellenőr szerepét a Claude kapja egy új beszélgetésben, a készítés előzményei nélkül. Így az ellenőrzés függetlensége részleges.

**Ha így sem megy.** Kérd meg az oktatót, hogy segítsen átadni az ellenőrzési csomagot az új beszélgetésbe.

<a name="keret"></a>

## Elfogyott a használati keret

**Ezt látod.** A Claude jelzi, hogy elérted a használati keretedet, és megáll a feladat.

**Mi lehet az oka.** A hosszú beszélgetés és a sok javítási kör több keretet használ el.

**Ezt csináld.** Amikor újra tudsz dolgozni, adj rövidebb feladatot, és kérj kevesebb javítási kört. Hosszú beszélgetés helyett nyiss újat, és vidd át a folytatáshoz szükséges fájlokat.

**Ha így sem megy.** Várd meg, amíg megújul a kereted. Ha rendszeresen elfogy, és több keretre van szükséged, válthatsz nagyobb keretű csomagra.

<a name="engedely"></a>

## A Claude engedélyt kér

**Ezt látod.** A Claude megáll, és jóváhagyást kér egy művelethez.

**Mi lehet az oka.** A művelethez még nincs engedélye.

**Ezt csináld.** Olvasd el, mit kér, és te dönts róla. Amit tartósan engedélyezel, azt a Claude újabb rákérdezés nélkül megteheti, a levélküldést is. A workshopon a levél piszkozat marad, amíg te nem döntesz a küldésről.

**Ha így sem megy.** Ha nem szeretnéd megadni az engedélyt, kérd a Claude-tól a modul kézi mentőútját.

<a name="egyeb"></a>

## Más gond akadt

**Ezt látod.** Elakadtál, de a fenti helyzetek közül egyik sem illik arra, amit látsz.

**Mi lehet az oka.** Lehet, hogy hiányzik egy beállítás, fájl vagy kapcsolat.

**Ezt csináld.** Írd be a Claude-nak: `/wenova-sales-workshop:beallitas`. A Claude a hiányokat a `Munka/00-Felkeszules/felmeres.md` fájlba írja.

**Ha így sem megy.** Ha a parancs nem érhető el, írd be: „Mérd fel a gépem.” Ha továbbra is elakadsz, mutasd meg az oktatónak, melyik lépésnél álltál meg.

[Vissza a tananyag kezdőlapjára](README.md)
