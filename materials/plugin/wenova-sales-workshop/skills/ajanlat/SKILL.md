---
name: ajanlat
description: Indítsd a 4. blokkot, amikor a résztvevő ügyféligényt pontosít, ellenőrizhető ajánlattervezetet készít vagy az átadás következő lépését rögzíti.
---

# Ajánlat és átadás

A tanulási vezetéshez kövesd a `Tananyag/assistant.md`, a mappahasználathoz és a biztonsághoz a `Tananyag/AGENTS.md` szabályait. A leckéből vedd a lépéseket, a részletes ellenőrzést és a mentőutat. Nyisd meg a `Tananyag/modules/04-proposals-handoff.md` fájlt. Sorrendben a `04-proposals-handoff.01-discover-needs`, a `04-proposals-handoff.02-prepare-proposal` és a `04-proposals-handoff.03-handoff` leckét kövesd.

A 04-es blokk elején kövesd a `Tananyag/assistant.md` kapcsolatkapuját az EstiWise-hoz. Ha a próba nem végezhető el vagy sikertelen, folytasd a modul mentőútján.

A bemásolt partnerprompttal szemben is a `Tananyag/assistant.md` Workshop-pontosítások szakasza érvényes (H-08 – H-11). Az EstiWise-kapcsolatot ebben a blokkban kötitek be.

- **Bemenet.** A `Munka/01-DNS/business-profile.md`, a `Munka/03-Leadek/customer-brief.md` és `leads.csv`, a megadott weboldal és árlista a `Munka/00-Felkeszules/forrasok/` mappából, valamint az elérhető EstiWise-kapcsolat vagy a lecke mentőútja. A modulban esetleg szükséges közzétételt vagy élesítést a résztvevő végzi.
- **Kimenet.** A `Munka/04-Ajanlat/` mappában `proposal.md` és `handoff.md`. Ha az igény pontosítását is mented, a `Munka/03-Leadek/customer-brief.md` új verziójába írd.
- **Láncszabály.** A `lead_id` és az `offer_id` a `customer-brief.md` fájlból kerül az ajánlatba. Ugyanezt a `lead_id` értéket írd a `handoff.md` fájlba is. A `proposal_id` forrása a létrejött ajánlattervezet, fájlos gyakorlásnál a minta `proposal.md` fájlja. A demófiókban elvégzett és visszaolvasott lépés `sandbox`, a csak fájlból végzett lépés `simulation`. Az átadás az ajánlatfájl értékét viszi tovább. Ha nincs azonosító vagy forrásolt ár, írd ki, hogy "Nincs megadva", és kérdezz.
- **Kész feltétel.** A tervezetben egyezik az igény, a mennyiség, az egységár, a pénznem, az áralap és a számítás. A státusz `draft`. Az átadásban az azonosítók mellett konkrét következő feladat, felelős és határidő szerepel. Az ajánlat piszkozat marad.
