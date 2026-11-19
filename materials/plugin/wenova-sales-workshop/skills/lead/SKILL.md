---
name: lead
description: Indítsd a 3. blokkot, amikor a résztvevő lehetséges ügyfeleket minősít, megkeresési piszkozatot készít vagy választ dolgoz fel.
---

# Ügyfélszerzés és leadkezelés

A tanulási vezetéshez kövesd a `Tananyag/assistant.md`, a mappahasználathoz és a biztonsághoz a `Tananyag/AGENTS.md` szabályait. A leckéből vedd a lépéseket, a részletes ellenőrzést és a mentőutat. Nyisd meg a `Tananyag/modules/03-lead-generation.md` fájlt. Sorrendben a `03-lead-generation.01-qualify-leads`, a `03-lead-generation.02-personalize-outreach` és a `03-lead-generation.03-process-reply` leckét kövesd.

A 03-as blokk elején kövesd a `Tananyag/assistant.md` kapcsolatkapuját a Sales Bothoz. Ha a próba nem végezhető el vagy sikertelen, folytasd a lecke mintájával.

A bemásolt partnerprompttal szemben is a `Tananyag/assistant.md` Workshop-pontosítások szakasza érvényes (H-03 – H-07). A Sales Bot hozzáférését a résztvevő a blokk elején kapja meg.

- **Bemenet.** A `Munka/01-DNS/business-profile.md`, a `Munka/02-Tartalom/campaign-plan.md`, a Sales Botban elérhető leadek és gyakorló válaszok vagy a lecke mintái.
- **Kimenet.** A `Munka/03-Leadek/` mappában `leads.csv`, `outreach.md` és `customer-brief.md`.
- **Láncszabály.** Az első leckében a minősítést a CSV `status` mezőjében rögzítsd `qualified` vagy `open` értékkel. Az `Interested` beállítását a válaszfeldolgozó leckéig hagyd ki. A Sales Botban csak megfigyelt, érdeklődést mutató válasz után és jóváhagyással jelölj `Interested` státuszt. A válasz, a megkeresés és az ügyféligény ugyanahhoz a `lead_id` értékhez tartozzon. A mentőút az aktív `scenario_id` mintáját használja.
- **Kész feltétel.** Mind az öt leadről indokolt döntés született. Mintával két `qualified` lead érvényes eredmény. A megkeresés piszkozat, benne a leállási feltétel. Az ügyféligény megfigyelt vagy jelölt mintaválaszból származik, nyitott kérdésekkel. A kampány tervezet marad, küldés nem történik.
