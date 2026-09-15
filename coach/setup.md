# Claude-csomag átadása és próba

Ez a repó önmagában nem töltődik be automatikusan Claude-ba, és nem ad eszközjogosultságot.
A `scripts/build_coach_pack.py` a közös forrásokból egy `dist/coach-pack.md` anyagot készít.
Ezt és a participant-starter személyes másolatát a választott Claude-környezet dokumentált feltöltési módjával kell átadni.
A konkrét fiók/csomag és betöltési mód a technikai főpróbán rögzítendő.

## Kötelező próba

1. Új beszélgetés, tananyagcsomag és progress.json átadása.
2. „Hol tartok?” kérdésre a helyes lecke megjelenik.
3. A mintalecke végén frissített napló és elmentett output készül.
4. Másik új beszélgetés ugyanebből a naplóból a helyes következő lépést adja.
5. Hiányzó outputnál visszakérdez; draft leckét nem ad elő kész tananyagként.
6. Fiók nélküli módban nem állít sikeres platformküldést.

Ha nincs automatikus fájlmentés, a résztvevő elmenti a coach által visszaadott naplót.
Ha a csomag túl nagy a választott felülethez, modulonként kell átadni, ugyanazzal a közös kísérőutasítással és naplóval.
