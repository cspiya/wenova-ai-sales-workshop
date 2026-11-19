# Munkanapló: WEN-1225: előre konfigurált agentikus keretrendszer

| Mező | Érték |
|---|---|
| Jegy | WEN-1225 (szülő: WEN-1220) |
| Ág | `cspiya/wen-1225-5-elore-konfiguralt-agentic-keretrendszer` |
| Méret és módszer | közepes (maker agent, a független review a koordinátornál) |
| Indította | koordinátor agent, 2026-11-19 |
| Állapot | emberre és független reviewra vár |

## Kérés

Telepíthető plugin a workshophoz: marketplace, négy connector-cím, hét alügynök, nyolc skill, a másolatokat újrageneráló build és az eltérést kimutató teszt. A WEN-1221/D2 ütemezési döntés beépítése, a nem modul szövegek frissítése nyolc szerepre.

## Lépések

| # | Dátum | Session | Lépés | Eredmény |
|---|---|---|---|---|
| 1 | 2026-11-19 | 6b54de9a | A másik maker szerepfájljainak és skilljeinek külön commitja | `b0fea85` |
| 2 | 2026-11-19 | 6b54de9a | Marketplace, plugin, `authoring/qa/plugin.cjs`, `plugin.test.cjs`, szövegek | `34e1b45` |
| 3 | 2026-11-19 | 6b54de9a | A tiszta profilos próba hibájának javítása az Író műfaji szabályában | `61dc6b8` |

## Döntések

| Azonosító | Dátum | Döntés | Döntéshozó típusa és szerepköre | Indoklás | Alapja | Leváltja | Forrás |
|---|---|---|---|---|---|---|---|
| WEN-1225/D3 | 2026-11-19 | A `.plugin` csomag tömörítés nélküli ZIP, rögzített időbélyeggel | AI (maker) | A bájtazonos összehasonlítás így nem függ a Node zlib-verziójától. Alternatíva: tartalom szerinti összevetés, ez bonyolultabb teszt lett volna | Reprodukálható build követelménye | nincs | 6b54de9a session |
| WEN-1225/D4 | 2026-11-19 | Az `orchestrator.md` és a `crm.md` relatív linkje kódos útvonal lett | AI (maker) | A bájtazonos másolat a plugin mappájában törött linket adott volna, a kapu kódja így változatlan maradt | Kapu linkellenőrzése | nincs | 6b54de9a session |

## Review körök

Független review még nem futott. A maker saját ellenőrzése nem számít függetlennek.

## Félreértések és javítások

| # | Mikor, hol | Szándék | Mi történt | Ki vette észre | Ok | Javítás | Tanulság |
|---|---|---|---|---|---|---|---|
| C1 | 2026-11-19, tiszta profilos próba; 6b54de9a; Opus 5.5 | A poszt egy körben átmenjen, ha a tények rendben vannak | Az Ellenőr a hiányzó példa miatt kört veszített, miközben kitalált ügyféltörténet tilos | maga az agent | hiányzó kontextus (`missing context`) | Az Író műfaji szabálya kimondja, hogy a példa a szolgáltatás tartalmából is jöhet | Egymásnak feszülő szabályt próbafutás mutat ki, szövegolvasás nem |

## Tesztek

Vizsgált revízió: `61dc6b8`. `npm run render`, `npm run check` (22 HTML-oldal, 1200 helyi hivatkozás, 20 lecke) és `npm test` (15 sikeres, 0 hibás), helyben Node 26 alatt. `claude plugin validate` a marketplace-re és a pluginra: sikeres, figyelmeztetésekkel. Korlát: a CI Node 24 alatt fut, ezt helyben nem futtattam.

## Tanulságok és javasolt feladatok

- A kiadási csomag (`release.cjs`) a ponttal kezdődő fájlokat kihagyja, így a plugin mappájából hiányzik a `.claude-plugin/plugin.json` és a `.mcp.json`. Külön feladat javasolt.
