# Hibalista az előadói anyagokhoz

**Workshop:** AI Sales & Marketing Workshop, 2026-11-19. **Vizsgált revízió:** `a8a73c4`, az előadók eredeti anyaga. **Ticket:** WEN-1220 (D9, D13).

Az előadók anyaga az eredeti tartalommal marad. A Wenova a hibák hatását a saját utasításaiban kezeli (`materials/assistant.md`, `materials/AGENTS.md`, a plugin skilljei). Az előadói fájlokat csak az érintett előadó egyetértése után javítjuk.

**Súlyosság:** BLOKKOLÓ: a résztvevő elakad vagy rossz eredményt kap. FONTOS: zavaró, de van kerülőút. KISEBB: pontosítás.

## Brandiseer (02-es blokk)

| Sorszám | Súlyosság | Hely | Eredeti szöveg | Mi a gond | Javasolt szöveg |
| --- | --- | --- | --- | --- | --- |
| H-01 | BLOKKOLÓ | `materials/modules/02-content-marketing.md:241` | „Először olvasd el a Munka/01-DNS/ mappából: company-dna.md, voice-profile.md, sales-strategy.md.” | A 01-es blokk a jóváhagyott Cég-DNS-t új verzióként menti (`company-dna-v0.1b.md`), így a poszt a régi változatból készülhet. | „Először olvasd el a legutóbb jóváhagyott Cég-DNS-t, a márkahangot és az ugyanahhoz a céghez tartozó értékesítési stratégiát a Munka/01-DNS/ mappából.” |
| H-02 | KISEBB | `materials/modules/02-content-marketing.md:365` | „Ne ütemezd és ne publikáld.” | A tiltás a gyakorlat védelme, de a résztvevő nem tudja, mi történik, ha mégis engedélyezi. | A mondat marad, utána: „Ez a gyakorlat alatti védelem. Ha mégis engedélyezed az ütemezést vagy a publikálást, a posztok kimennek a bekötött fiókjaidra és oldalaidra.” |

## Blackhole Media (03-as blokk)

| Sorszám | Súlyosság | Hely | Eredeti szöveg | Mi a gond | Javasolt szöveg |
| --- | --- | --- | --- | --- | --- |
| H-03 | BLOKKOLÓ | `materials/modules/03-lead-generation.md:118`, `:130` | „A jóváhagyásom után a jó leadeket állítsd Interested státuszra a Sales Botban” | Az illeszkedő, de még nem válaszoló cég érdeklődőként jelenik meg, ez torzítja a heti mérést. | „A jóváhagyásom után készíts leads.csv tartalmat […]. Az illeszkedést a CSV-ben `qualified` értékkel jelöld. Az Interested státuszt csak érdeklődő válasz után állítsd be.” |
| H-04 | BLOKKOLÓ | `materials/modules/03-lead-generation.md:209`, `:297` | „Válassz ki egy érdeklődő választ, és írj rá válaszjavaslatot.” | A megkeresés az egyik céghez, a válasz és az ajánlat egy másikhoz tartozhat. A 05-ös záró próba ezt hibaként megállítja. | „Válaszd ki annak a leadnek a válaszát, amelyhez az outreach.md készült, és írj rá válaszjavaslatot.” A gyakorló válasz a kiválasztott `lead_id`-hez érkezzen. |
| H-05 | BLOKKOLÓ | `materials/modules/03-lead-generation.md:140` | „Legalább három lead `qualified`, és meg tudod mondani, miért.” | Mindhárom mintában két lead `qualified`, három `open`, így a kész feltétel csak hibás minősítéssel teljesíthető. | „Mind az öt leadről indokolt döntés született (`qualified` vagy `open`).” |
| H-06 | BLOKKOLÓ | `materials/modules/03-lead-generation.md:324` | „használd a minta ügyféligényt” (a link az IrodaLiget `customer-brief.md` fájljára mutat) | A mentőút mindig az IrodaLiget mintájára visz, a másik két mintával dolgozó résztvevőnél is. | „használd a kiválasztott mintacéged `outputs/customer-brief.md` fájlját” |
| H-07 | KISEBB | `materials/modules/03-lead-generation.md:82` | „A fiókot előre létrehoztuk; a belépő linket e-mailben kaptad meg.” | A résztvevők a hozzáférést a helyszínen, a blokk elején kapják. | „A fiókot előre létrehoztuk, a hozzáférést a blokk elején a helyeden megkapod.” |

## EstiWise (04-es blokk)

| Sorszám | Súlyosság | Hely | Eredeti szöveg | Mi a gond | Javasolt szöveg |
| --- | --- | --- | --- | --- | --- |
| H-08 | BLOKKOLÓ | `materials/modules/04-proposals-handoff.md:212` | „Az azonosítókat a customer-brief.md-ből vedd.” | A `proposal_id` ekkor még nincs a fájlban, így a résztvevő kitalált azonosítót adhat meg. | „A `lead_id` és az `offer_id` a customer-brief.md-ből jöjjön, a `proposal_id` az elkészült EstiWise-tervezetből, fájlos gyakorlatnál a választott minta proposal.md fájljából.” |
| H-09 | BLOKKOLÓ | `materials/modules/04-proposals-handoff.md:303` | „proposal_id, decision_status, owner, next_task, due” | Az átadásból hiányzik a `lead_id`, ezért a 05-ös záró próba megáll. | „lead_id, proposal_id, decision_status, owner, next_task, due” |
| H-10 | FONTOS | `materials/modules/04-proposals-handoff.md:361` | „a naplóban ilyenkor is `simulation` a végrehajtási mód” | A demófiókban ténylegesen elvégzett lépés a közös szabály szerint `sandbox`. | „A demófiókban elvégzett és visszaolvasott lépés `sandbox`, a csak fájlból végzett lépés `simulation`.” |
| H-11 | KISEBB | `materials/modules/04-proposals-handoff.md:37` | „a felkészülés során létrehozott EstiWise-fiók és Claude-kapcsolat” | A felkészülés szerint a Claude-kapcsolatot a 04-es blokkban kötjük be, a fiók a workshopon is létrehozható. | „EstiWise-fiók (a workshopon is létrehozható). A Claude-kapcsolatot a blokkban együtt kötjük be.” |

## Minden előadói anyag

| Sorszám | Súlyosság | Hely | Eredeti szöveg | Mi a gond | Javítás |
| --- | --- | --- | --- | --- | --- |
| H-12 | FONTOS | A 02-es, 03-as és 04-es modul és oktatói jegyzet | „hangprofil”, „üzleti alaplap” | Szó szerinti fordítások, és nem világos a viszonyuk a Cég-DNS-hez. | A tulajdonos döntése alapján a teljes tananyagban **márkahang** és **cégprofil** szerepel. A cégprofil a Cég-DNS-ből készült rövid, mezőkre bontott kivonat. |
