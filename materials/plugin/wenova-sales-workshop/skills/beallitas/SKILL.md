---
name: beallitas
description: Induló felmérés az első „Kezdjük a felkészülést.” indításkor vagy a „Mérd fel a gépem.” kérésre.
---

# Induló felmérés

Kövesd a `Tananyag/AGENTS.md` és a `Tananyag/assistant.md` szabályait. A felkészülés első indításakor mérj fel, ha a `Munka/00-Felkeszules/felmeres.md` még nem létezik, vagy egy korábban indított blokk csak próbaeredményt mentett bele. Kézi kérésre vagy a skill közvetlen meghívásakor frissítsd a meglévő felmérést. A korábbi füstpróbák eredményét őrizd meg.

A felmérésre legfeljebb három percet szánj. Közben ne telepíts, ne adj hozzá kapcsolatot, ne lépj be, ne kérj jelszót vagy kulcsot, és ne futtass füstpróbát. Amit nem tudsz megállapítani, kérdezd meg, ha belefér, vagy jelöld „nem ellenőrzött”-ként. A válasz vagy jóváhagyás hiánya esetén folytasd a felmérést.

1. Ellenőrizd külön sorokban a felületet (Cowork vagy Claude Code), a résztvevő gépének operációs rendszerét, a kiválasztott munkamappát, a `Tananyag/` és `Munka/` mappákat, a sablonban felsorolt almappákat, valamint a gyökérutasítást és a munkamenetben érvényes utasításokat. A távoli futtatókörnyezet rendszeréből ne következtess a résztvevő gépére.
2. Olvasd ki a `Tananyag/VERSION` tartalmát. Ellenőrizd külön a plugin betöltését és a nyolc skill elérhetőségét (`karmester`, `beallitas`, `ceg-dns`, `hangprofil`, `tartalom`, `lead`, `ajanlat`, `folyamatproba`). A plugin csomagfájlja vagy ez az utasításfájl önmagában csak a csomag vagy a forrás meglétét igazolja. Ellenőrizd külön sorban a nyolc szerepfájlt a `Tananyag/starter-kit/agents/` mappában és a munkanapló sablonját. Az alügynökök indíthatóságát a munkamenetben látható képesség alapján jelöld. Egy szerepfájl megléte ehhez kevés.
3. A „Független reviewer (Codex)” sorban a `codex --version` parancsot csak akkor futtasd, ha a felület enged helyi parancsot futtatni a résztvevő gépén, és a résztvevő kifejezetten jóváhagyta. Ha elérhető, jegyezd fel a verziót és az „Ellenőr: Codex” választást. A verzió csak a parancs elérhetőségét igazolja. Ha a Codex hiányzik vagy nem ellenőrizhető, írj „Ellenőr: Claude, friss kontextus, részleges függetlenség” jelölést, és ezt mondd el a résztvevőnek is. Semmit ne telepíts és ne állíts át.
4. A `Tananyag/assistant.md` kapcsolatkapuja szerint vedd számba a 00–05-ös blokkokhoz tartozó kapcsolatokat. A hozzáadást és a belépést külön állapítsd meg. A pluginban szereplő cím még nem igazolja a hozzáadást vagy a belépést. Rögzítsd, amit a munkamenetben látsz. Ha nincs elég adat, írd ki, hogy „nem ellenőrzött”. A működést a megfelelő blokk elején próbáld ki.

## Mentés és továbblépés

A `Tananyag/starter-kit/felmeres.md` alapján mentsd a kitöltött táblázatot a `Munka/00-Felkeszules/felmeres.md` fájlba. Soronként adj ✅-t az igazolt állapotra, ⚠️-t a teendőre vagy a „nem ellenőrzött” tételre, ❌-t az igazolt hiányra. Írd mellé a teendőt, a blokkot és a mentőutat. A végén röviden, köznyelven foglald össze, mi van rendben, mi hiányzik, és mi ráér a saját blokkjáig.

A tényleges hiányokat és a gyakorlathoz szükséges, nem ellenőrzött tételeket a `Tananyag/assistant.md` haladási szabálya szerint jegyezd be a `Munka/00-Felkeszules/progress.json` fájl `gaps` listájába. Ha a munkamappa nem írható, add át az eredményeket letölthető fájlként. Az első indításkor a mentés vagy átadás után térj át a 00-s blokk kapcsolatkapujára. A kézi felmérést az összefoglalóval zárd. Hiány esetén a résztvevő a mentőúton folytathatja a blokkot.
