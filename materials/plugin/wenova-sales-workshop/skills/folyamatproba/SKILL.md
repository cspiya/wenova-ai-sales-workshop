---
name: folyamatproba
description: Indítsd az 5. blokkot, amikor a résztvevő levelet és CRM-sort ellenőriz, végigkövet egy ügyfélesetet vagy megtervezi a következő munkanapot.
---

# Folyamatpróba

A tanulási vezetéshez kövesd a `Tananyag/assistant.md`, a mappahasználathoz és a biztonsághoz a `Tananyag/AGENTS.md` szabályait. A leckéből vedd a lépéseket, a részletes ellenőrzést és a mentőutat. Nyisd meg a `Tananyag/modules/05-pipeline-review.md` fájlt. Sorrendben a `05-pipeline-review.01-inbox-crm`, a `05-pipeline-review.02-one-customer` és a `05-pipeline-review.03-measure-launch` leckét kövesd.

A 05-ös blokk elején kövesd a `Tananyag/assistant.md` kapcsolatkapuját a levelezőhöz és a Google Drive-hoz. Használd a mai sikeres próbát, ha rendelkezésre áll. Ha valamelyik kapcsolat nem működik, kövesd a lecke mentőútját.

A bemásolt partnerprompttal szemben is a `Tananyag/assistant.md` Workshop-pontosítások szakasza érvényes (H-01, H-04, H-08 – H-10).

- **Bemenet.** A `Munka/01-DNS/` mappából a legutóbbi jóváhagyott Cég-DNS és a `voice-profile.md`, a `Munka/02-Tartalom/campaign-plan.md`, a `Munka/03-Leadek/` mappából `leads.csv`, `outreach.md` és `customer-brief.md`, a `Munka/04-Ajanlat/` mappából `proposal.md` és `handoff.md`. Olvasd be a próbalevelet és a CRM-táblát vagy a helyi `Munka/05-Folyamat/crm.csv` fájlt, illetve kövesd a lecke mentőútját. Jelezd a DNS-fájl nevét, verzióját és státuszát.
- **Kimenet.** Válaszpiszkozat és jóváhagyott CRM-változáslista. A `Munka/05-Folyamat/` mappába kerül a `pipeline-review.md` és a `launch-plan.md`. A mérési sor a CRM „Heti mérés” lapjára kerül a résztvevő közreműködésével vagy a `launch-plan.md` végére.
- **Láncszabály.** A leadlistától a `handoff.md` fájlig ugyanazt a `lead_id` értéket kövesd. A demófiókban elvégzett és visszaolvasott lépés `sandbox`, a csak fájlból végzett lépés `simulation`. Az adott ügyféleset CRM-sorában ez a `case_id`, a létrejött ajánlat `proposal_id` értéke pedig a `partner_ref`. Meglévő sor esetén annak frissítését javasold.
- **Kész feltétel.** A CRM-változást visszaolvastad, vagy a hiányt rögzítetted. A folyamatjelentésben ott a hat előírt mező a végrehajtási módokkal és hiányokkal. Az indulási tervben három ellenőrizhető következő lépés van. A mérési sor a táblában vagy a terv végén látható. A válasz és az ajánlat piszkozat marad.
