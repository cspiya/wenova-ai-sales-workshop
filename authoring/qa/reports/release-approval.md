# Résztvevői kiadás jóváhagyása

A teljes kiadási csomaghoz tartozó emberi döntés és bizonyíték. A szerkesztő tölti ki a tényleges review és főpróba után. A pending állapot szándékosan blokkolja a kiadást.

- Decision: pending
- Approver: pending
- Date: pending
- Materials SHA-256: pending

| Pont | Eredmény | Bizonyíték, pontos változat és próba |
| --- | --- | --- |
| T1 | Nem ellenőrzött | Helyi megnyitás és forrásellenőrzés szükséges |
| T2 | Nem ellenőrzött | Offline próba szükséges |
| T3 | Nem ellenőrzött | Helyi és szükséges külső linkek vizsgálata szükséges |
| T4 | Nem ellenőrzött | Teljes kész tananyag szükséges |
| T5 | Nem ellenőrzött | Asztali, mobil, nyomtatási és billentyűzetes próba szükséges |
| R1 | Nem ellenőrzött | Cél és eredmény reviewja szükséges |
| R2 | Nem ellenőrzött | Előfeltételek reviewja szükséges |
| R3 | Nem ellenőrzött | Promptok önálló próbája szükséges |
| R4 | Nem ellenőrzött | Kezdő olvasóval próba szükséges |
| R5 | Nem ellenőrzött | Feladat és kész feltételek próbája szükséges |
| R6 | Nem ellenőrzött | Mentőút próbája szükséges |
| R7 | Nem ellenőrzött | Állítások és végrehajtási mód reviewja szükséges |
| R8 | Nem ellenőrzött | Modulátadás próbája szükséges |
| P1 | Nem ellenőrzött | Megnevezett résztvevő időmért próbája szükséges |
| P2 | Nem ellenőrzött | Hiányos bemenet és mentőút eredménye szükséges |
| P3 | Nem ellenőrzött | Integrációs próba vagy indokolt nem alkalmazhatóság szükséges |
| P4 | Nem ellenőrzött | Szakmai jóváhagyó tényleges döntése szükséges |
| REHEARSAL | Nem ellenőrzött | Teljes tanulási út főpróbája szükséges |

Az ellenőrzött lenyomatot az AI számolja: `node authoring/qa/release.cjs --fingerprint`. Az eredményt csak a pontosan ehhez tartozó emberi elfogadás után rögzítjük. Anyagváltozás új ellenőrzést és új döntést igényel.
