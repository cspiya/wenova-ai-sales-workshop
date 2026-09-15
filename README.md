# Wenova AI Sales & Marketing Workshop

**Wenova × Brandiseer × Blackhole Media × EstiWise**

Négy hazai szakmai csapat közös, gyakorlati képzése magyar KKV-k, közép- és nagyvállalatok számára.
Egy konkrét termék vagy szolgáltatás AI-val támogatott marketing- és értékesítési folyamatát építjük fel.

**Állapot: szerkesztői alapcsomag.** A partnerblokkok kidolgozás alatt állnak. Egy teljes mintalecke
és három összefüggő, kitalált gyakorlóvállalkozás mutatja a közös módszert. A csomag még nem kész tanfolyam.

## Indulj innen

| Szerep | Következő lépés |
|---|---|
| Szakmai partner | [Teljes agenda](course/agenda.md), majd [szerzői útmutató](CONTRIBUTING.md) |
| Tananyagszerző | [Közös standard](standards/material-standard.md), majd [kidolgozott mintalecke](course/01-business-foundations/lessons/01-offer-and-audience.md) |
| Oktató | Az adott modul `instructor-guide.md` fájlja és a [közös ellenőrzőlista](standards/review-checklist.md) |
| Claude-kísérő előkészítője | [Kísérőutasítás](coach/instructions.md) és [technikai átadás](coach/setup.md) |

## Tanulási út

[Felkészülés](course/00-prework/overview.md) → [Üzleti alapok](course/01-business-foundations/overview.md)
→ [Tartalom](course/02-content-marketing/overview.md) → [Leadkezelés](course/03-lead-generation/overview.md)
→ [Ajánlat és átadás](course/04-proposals-handoff/overview.md) → [Folyamatpróba](course/05-pipeline-review/overview.md).

## Mi van a YAML-fájlokban?

A YAML rövid, géppel és emberrel is olvasható adatlap. A `course-map.yaml` a sorrendet és időkereteket,
a `partners.yaml` a partnereket, az egyes `module.yaml` fájlok a leckéket, bemeneteket és kimeneteket írják le.
A tananyag szövege Markdown (`.md`). A partneradatot egyszer javítjuk; a későbbi webes nézet és a coach
ugyanazt a forrást használhatja. A YAML jelenléte önmagában még nem valósít meg integrációt vagy automatikus haladáskövetést.

## Munkaterületek

- `course/`: tananyagforrás és szerkesztői forgatókönyvek.
- `standards/`, `templates/`: közös szabályok és minták.
- `coach/`: egységes tanulási kísérő.
- `scenarios/`: kizárólag kitalált üzleti példák és teljes mentőcsomagok.
- `integrations/`: partnerenként ellenőrizendő kapcsolatok.
- `participant-starter/`: másolható résztvevői kezdőcsomag; kitöltött személyes munka külön helyre kerül.
- `site/`: közös megjelenés előkészítése, még nem publikált tananyagoldal.

## Ellenőrzés és coach-csomag

```sh
python -m pip install -r requirements.txt
python scripts/validate.py
python scripts/build_coach_pack.py
```

A második parancs a szerkesztői alapokat ellenőrzi, nem igazolja a partnerintegrációkat.
A harmadik parancs a `dist/coach-pack.md` fájlt készíti el a közös forrásokból.

Szervező: **Wenova**. Szakmai partnerek: **Brandiseer, Blackhole Media, EstiWise**.
Újrafelhasználási és partneri márkahasználati feltételek: [RIGHTS.md](RIGHTS.md).
