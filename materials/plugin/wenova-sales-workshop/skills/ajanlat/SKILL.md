---
name: ajanlat
description: Indítsd a 4. blokkot, amikor a résztvevő ügyféligényt pontosít, ellenőrizhető ajánlattervezetet készít vagy az átadás következő lépését rögzíti.
---

# Ajánlat és átadás

A tanulási vezetéshez kövesd a `Tananyag/assistant.md`, a mappahasználathoz és a biztonsághoz a `Tananyag/AGENTS.md` szabályait. A leckéből vedd a lépéseket, a részletes ellenőrzést és a mentőutat. Nyisd meg a `Tananyag/modules/04-proposals-handoff.md` fájlt. Sorrendben a `04-proposals-handoff.01-discover-needs`, a `04-proposals-handoff.02-prepare-proposal` és a `04-proposals-handoff.03-handoff` leckét kövesd.

A 04-es blokk elején kövesd a `Tananyag/assistant.md` kapcsolatkapuját az EstiWise-hoz. Ha a próba nem végezhető el vagy sikertelen, folytasd a modul mentőútján.

- **Bemenet.** A `Munka/01-DNS/business-profile.md`, a `Munka/03-Leadek/customer-brief.md` és `leads.csv`, a megadott weboldal és árlista a `Munka/00-Felkeszules/forrasok/` mappából, valamint az elérhető EstiWise-kapcsolat vagy a lecke mentőútja. A modulban esetleg szükséges közzétételt vagy élesítést a résztvevő végzi.
- **Kimenet.** A `Munka/04-Ajanlat/` mappában `proposal.md` és `handoff.md`. Ha az igény pontosítását is mented, a `Munka/03-Leadek/customer-brief.md` új verziójába írd.
- **Láncszabály.** A `customer-brief.md` fájlból az `offer_id` és a leadlistából továbbvitt `lead_id` kerül az ajánlatba. Ugyanezt a `lead_id` értéket írd az átadásba. A `proposal_id` forrása a létrejött ajánlattervezet, mintás gyakorlásnál a kiválasztott ajánlatminta. Az átadás az ajánlatfájl értékét viszi tovább. Ha nincs azonosító vagy forrásolt ár, írd ki, hogy "Nincs megadva", és kérdezz.
- **Kész feltétel.** A tervezetben egyezik az igény, a mennyiség, az egységár, a pénznem, az áralap és a számítás. A státusz `draft`. Az átadásban az azonosítók mellett konkrét következő feladat, felelős és határidő szerepel. Az ajánlat piszkozat marad.
