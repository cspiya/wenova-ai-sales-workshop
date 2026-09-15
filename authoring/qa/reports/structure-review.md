# Szerkezeti és megosztási ellenőrzés

**Dátum:** 2026. szeptember 15. · **Ellenőrző:** Codex, statikus fájl- és programellenőrzés.

**Eredmény:** a szerkezet és a helyi hivatkozások megfelelnek. A tananyag szakmai elfogadása és a tényleges böngészős próba továbbra is nyitott.

## Elvégzett ellenőrzések

- 17 HTML-fájl: alapvető tagpárok, egy főcím, egyedi horgonyazonosítók.
- 274 helyi fájl- és horgonyhivatkozás ellenőrizve.
- 126 résztvevői hivatkozás: mind a materials csomagon belül marad.
- 6 modul, 16 stabil leckeazonosító. A haladási napló kezdőleckéje megtalálható.
- A modulok közös CSS-t használnak. A résztvevői HTML-fájlokban nincs iframe vagy script, amely oktatói jegyzetet töltene be.
- A hat belső oktatói oldal a megfelelő résztvevői modult nyitja meg. A szakaszhivatkozások léteznek; a tananyagszöveg nincs átmásolva a jegyzetekbe.
- A validate.test.cjs pozitív/hibás mintái és a check-repository.test.cjs megosztási határtesztjei sikeresek. Hibás CSS, horgony, ismétlődő azonosító, külső script és belső fájlra mutató résztvevői link felismerve.

## Nyitott próbák

- A böngészővezérlő apps=[] és browsers=[] állapotot adott. Asztali, mobil, nyomtatási, billentyűzetes és iframe-megjelenítési próba nem történt.
- A külső linkek élő elérhetőségét ez a szerkezeti ellenőrzés nem igazolja.
- A draft leckék szakmai kidolgozása, a mintalecke [tartalmi reviewjának](sample-review.md) blokkolói, az emberi időmért próba és a teljes tanulási lánc átvétele nyitott.
- A külön publikus repo nem jött létre. A tényleges publikálás előtt a jóváhagyott materials másolatát a kiadási célhelyen is ellenőrizni kell.
- A partneri email elkészült tervezet; címzettek és a megosztott GitHub-változat ellenőrzése után küldhető. Éles kampány és partnereszköz-használat nincs ezzel a jelentéssel igazolva.

## Ellenőrzött helyi változatok

Git alap: 85d1517566954ecba63ae882aaef624ff5665a98. A vizsgált fájlok helyi módosítások; az alábbi SHA-256 azonosítók határozzák meg a vizsgált állapotot.

| Fájl | SHA-256 |
|---|---|
| authoring/index.html | 4fcbff7033e4806decdbc89b223212670c1606028059335b562267fbebe705e9 |
| index.html | 7e6e4af2c63b7c2640893ea5243782f71a368c19710241cc2143ed984ff7af95 |
| materials/assets/notebook.css | c274c4ca1caf7a4f7cc4e4e14ed3f51ca5c49375a82333d55471e2840ce7a854 |
| materials/index.html | 02c941478af1d56c943774639534416ef559047ed55cf7b7c407649f6d5174d4 |
| materials/modules/00-prework.html | 6c96a2d012da98a9b81eaaa0ab998864b4f9e9dfd14d3fc2a2ae11c0a6e22b78 |
| materials/modules/01-business-foundations.html | 61d835e2f571301bf8c3dd63055322710d2645656750e823938fa6b523417647 |
| materials/modules/02-content-marketing.html | 80c523ef53f34ee332b3eaf97fcdd5c3b0ac11ba583119fd70b0b881c6d4dfa9 |
| materials/modules/03-lead-generation.html | 84f7acc49ed34fd56fcb9bbf7f3a6eeeb4fca0b324798bd672527241edde61a2 |
| materials/modules/04-proposals-handoff.html | 5bbef631710506282697344b417888dce6c5ca255f672767c6c3bd7b01a22728 |
| materials/modules/05-pipeline-review.html | 1161d1d9f2782b0c95bfedd88c40122d5e2975fd146e8bcfdd0a1616c8ea0714 |
| operations/index.html | 73d42e67992e16e2b1a6d997dedcb0435155f22e6d8e2beaf10b418086863106 |
| operations/instructor-notes/00-prework.html | cefcddaeadae35ddeb530fa0d8bb180960c4ca915c6ae10a6c1fbecb579197b0 |
| operations/instructor-notes/01-business-foundations.html | e2b5934b21a6f46547d39a0c59bcf27b36f2c27727bf4e20826e2b21615524a4 |
| operations/instructor-notes/02-content-marketing.html | 9ce56e55d7f14665e630e85c0c1a1f45e5a1b58f5ee8051cd1673c57f22941f1 |
| operations/instructor-notes/03-lead-generation.html | 85e6385ef2c956a28d68a04704add6a3aef1de99a1833936a252a74d8e267628 |
| operations/instructor-notes/04-proposals-handoff.html | 5939366c71f2ab40c2f65a98d84f782c8dd382d4736d166a862e4d8db3ca19fa |
| operations/instructor-notes/05-pipeline-review.html | 45e98fd8346717a73a685c87adedb9d0a6506f521b1289f22df4373104c6ded6 |
| operations/instructor-notes/notes.css | ae1849be1e24e4eb6e30a4654a99c69eca5a69d4edd0552d6c0dd33351727b79 |
