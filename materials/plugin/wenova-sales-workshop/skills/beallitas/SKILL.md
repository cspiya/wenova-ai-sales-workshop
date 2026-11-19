---
name: beallitas
description: Futtass indulási állapotellenőrzést, amikor a résztvevő a felkészülés ellenőrzését kéri, vagy azt szeretné tudni, hogy megvannak-e a mappák, az agentek és a kapcsolatok.
---

# Beállítások ellenőrzése

A tanulási vezetéshez kövesd a `Tananyag/assistant.md`, a mappahasználathoz és a biztonsághoz a `Tananyag/AGENTS.md` szabályait. A leckéből vedd a lépéseket, a részletes ellenőrzést és a mentőutat. Nyisd meg a `Tananyag/modules/00-prework.md` fájlt a `00-prework.05-coach-check` leckénél.

- Ellenőrizd külön sorban a `Tananyag/` és a `Munka/` mappát, a munkamappa gyökerében az `AGENTS.md` fájlt és a projekt utasításait.
- A `Tananyag/starter-kit/agents/` mappában keresd meg a nyolc szerepfájlt. Mindegyik külön sort kapjon: Karmester (`orchestrator.md`), Író (`writer.md`), Ellenőr (`reviewer.md`), CEO (`ceo.md`), Marketing (`marketing.md`), Sales (`sales.md`), Postás (`inbox.md`), CRM (`crm.md`). A fájl megléte csak a szerepleírás meglétét igazolja.
- Külön sorban ellenőrizd a `Tananyag/starter-kit/munkanaplo.md` sablon meglétét.
- A plugin: ha ez a skill fut, a plugin telepítve van. Írd ki, látod-e a hét alügynököt (`writer`, `reviewer`, `ceo`, `marketing`, `sales`, `inbox`, `crm`) és a négy connector-címet (Brandiseer, Sales Bot, EstiWise, Buffer). A nem csatlakoztatott connector ⚠️, a teendő Coworkben a plugin Connectors füle (Add, Connect, belépés), Claude Code-ban a `/mcp` menü.
- A connector a Claude kapcsolata egy másik rendszerhez. Ellenőrizd külön a levelező olvasását (Gmail vagy Outlook), a levélküldés `Blocked` beállítását, a Drive-on a CRM-tábla olvasását és a Buffer elérhetőségét, ha használjátok. Az olvasási próba eredményéhez elég a visszaigazolás, a levél tartalmát hagyd ki. A küldés tiltását csak közvetlenül látható beállítás alapján jelöld, próbaküldés nélkül.
- Brandiseer, Sales Bot és EstiWise esetén azt jelezd, ha a kapcsolat látható. A működés próbája a megfelelő blokkban történik. Jelszót, API-kulcsot vagy belépőkódot ne kérj.
- Minden tételhez ✅ vagy ⚠️ kerüljön. ✅ akkor jár, ha láttad a sorban megnevezett állapotot vagy az olvasás eredményét. ⚠️ mellett mondd el, mi hiányzik vagy miért nem ellenőrizhető, és add meg az egy következő teendőt. A Buffer hiánya, ha nem használjátok, a továbblépést nem akadályozza.
- Az ellenőrzés akkor kész, ha minden sorhoz van megfigyelés vagy konkrét teendő. A kimaradt próbákat vedd fel a haladási napló `gaps` listájába a `Tananyag/assistant.md` szerint. Jelöld a végrehajtási módot: `live`, `sandbox` vagy `simulation`.
