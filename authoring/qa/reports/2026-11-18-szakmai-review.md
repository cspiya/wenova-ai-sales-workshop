# Szakmai felépítés és Wenova-standardok (WEN-1222)

**Ítélet: PASS** a `0bd553e` revízión, a Wenova saját anyagára. Az előadók anyagában talált hibák nyitottak, lista: `authoring/qa/reports/2026-11-19-eloadoi-hibalista.md`.

| Adat | Érték |
| --- | --- |
| Ticket | WEN-1222, szülő: WEN-1220 |
| Kiinduló revízió | `a8a73c4` |
| Maker | Codex `gpt-6.2-sol` |
| Független reviewer | Codex `gpt-6.2-astra`, saját kontextusban, a maker következtetése nélkül |

## Brief

A tananyag didaktikai felépítésének, a blokkok közötti láncnak, az időkeretnek, a szakmai helyességnek és a Wenova-standardoknak a vizsgálata modulonként, az R1–R8 szempontok szerint.

## Tulajdonosi döntések

| Azonosító | Döntés |
| --- | --- |
| WEN-1220/D2 | A hangdemóban a LATE20 kupon 20%. |
| WEN-1220/D4 | A hangdemó csak modell–modell módban fut, ha reggel a vetítőgépen működik. |
| WEN-1220/D8, D9 | Az előadók anyagában az eredeti tartalom marad. Tartalmi módosítás csak egyeztetés után készülhet. |
| WEN-1220/D11, D12 | A „hangprofil” helyett márkahang, az „üzleti alaplap” helyett cégprofil a teljes tananyagban. |
| WEN-1220/D13 | Az előadói anyagok és a Wenova anyagai közötti ellentmondásokat a Wenova saját utasításai kezelik. |

## Körök

| Kör | Revízió | Ítélet | Eredmény |
| --- | --- | --- | --- |
| Audit | `a8a73c4` | FAIL | 7 BLOKKOLÓ, 18 FONTOS, 5 KISEBB |
| 1. | `4a7e15d` | REVISE | 24 pontból 23 megszűnt, 5 új FONTOS pont |
| 2. | `b55578b` | REVISE | Az SR-05 részben nyitott, új FONTOS pont az SR-08 |
| 3. | `3f4d8a0` | Nem külön kör | A javítások a végső ellenőrzésben kerültek igazolásra |
| Végső 1. | `a8af1ea` | REVISE | SR-05 és SR-08 PASS, 2 FONTOS és 3 kisebb pont az 05-ös modulban és a hibalistában |
| Végső 2. | `0bd553e` | **PASS** | Mind az öt pont megszűnt |

## Megállapítások a Wenova saját anyagában

A 00-ás, 01-es és 05-ös modul, a kezdőlap, a napirend, a starter-kit, a három minta és a közös szabályok javítása elkészült. A három mintacég lánca végig egyezik: `lead_id`, `offer_id`, `proposal_id`, nettó összeg, felelős és határidő.

## Nyitott pontok

| Azonosító | Súlyosság | Tartalom |
| --- | --- | --- |
| SZ-01 | BLOKKOLÓ | A telepítés forrása a `main` ág. A WEN-1223 kezeli. |
| H-01–H-12 | Lásd a hibalistát | Az előadók fájljaiban maradt hibák. A javításhoz az előadók egyetértése kell. |
| SZ-26–SZ-30, SR-06, SR-09 | KISEBB | Nyelvi és pontosítási javaslatok, részben az előadók anyagában. |

## Ellenőrzések a `0bd553e` revízión

| Parancs | Eredmény |
| --- | --- |
| `npm run check` | PASS, 22 oldal, 1220 helyi hivatkozás, 20 lecke |
| `npm test` | 10/10 sikeres |
| Bájtösszehasonlítás a hat előadói fájlon | A két szakkifejezés 10 cseréje után egyezik az eredetivel |

## Nem ellenőrzött

Időmért résztvevői próba, fiókos végigpróba, élő partnerkapcsolatok, vetítőgépes hangpróba.

## Félreértések és tanulságok

| Mi történt | Ok | Megoldás | Tanulság |
| --- | --- | --- | --- |
| A javítások tartalmilag módosították a többi előadó anyagát. | A brief a teljes tananyagot jelölte ki, a szakmai gazdát nem tisztáztuk. | Az eredeti tartalom visszaállt, a hibák listába kerültek. | Tartalmi hatókör előtt tisztázni kell, kié az anyag. |
| A szakkifejezések szó szerinti fordítások maradtak. | A korábbi egyeztetés nem került át a tananyag szabályaiba. | Egységes csere és fogalommeghatározás. | A terminológiai döntést azonnal rögzíteni kell a közös szabályokban. |
