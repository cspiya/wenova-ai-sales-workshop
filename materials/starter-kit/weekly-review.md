# Heti mérés és visszacsatolás

A heti átnézés zárja a kört: a számokból döntés lesz, a döntésből pedig változás a Cég-DNS-ben, az agentekben és a következő heti tervben. Hétfőnként 30 perc.

## Hol vannak a számok?

A „CRM – [cégnév]” táblázatban két lap van:

| Lap | Tartalom | Ki tölti? |
| --- | --- | --- |
| CRM | Soronként egy ügyféleset, szakasszal és forrással ([oszlopok](crm-template.csv)) | A CRM-agent, a te jóváhagyásoddal |
| Heti mérés | Hetente egy sor mérőszámonként ([sablon](metrics-template.csv)) | A Karmester javasolja, te hagyod jóvá |

A második lapot így hozod létre: a táblázat alján + (új lap), neve „Heti mérés”, majd Fájl → Importálás → Feltöltés: `metrics-template.csv`, importálási hely: „Jelenlegi munkalap cseréje”.

## Mit mérünk szakaszonként?

Kevés szám, amit tényleg meg tudsz nézni. A célértéket a saját első 2–4 hetedből állítod be, nem máshonnan átvett átlagból.

| Szakasz | Mérőszám | Honnan jön? | Mit árul el? |
| --- | --- | --- | --- |
| Tartalom | Megjelent posztok (M01), megjelenés (M02), reakció + komment (M03) | LinkedIn-statisztika; a Brandiseer vagy a Buffer, ha a 02-es blokkban bekötötted | Eljut-e az üzenet, és érdekel-e valakit |
| LinkedIn-megkeresés | Bejelölés (M04), elfogadás (M05), válasz (M06), érdeklődő válasz (M07) | Sales Bot | Jó-e a célzás (elfogadás) és az üzenet (válasz) |
| Bejövő érdeklődés | E-mail (M08), EstiWise-ajánlatkérés (M09) | CRM, EstiWise | Működik-e a tartalom és a weboldal |
| Ajánlat | Tervezet (M10), kiküldött (M11), megnyert (M12), érték (M13) | CRM, EstiWise | Hol esnek ki az ügyfelek |
| Sebesség | Első válasz átlagos ideje (M14) | Postás-átnézés | Elveszítünk-e érdeklődőt lassúság miatt |
| Minőség | Ellenőri BLOKKOLÓ/JAVÍTANDÓ (M15) az ellenőrzött szövegekből (M16) | Ellenőri jelentések | Elég jó-e a DNS és az Író utasítása |
| Idő | Megtakarított idő (M17) | Saját becslés | Megéri-e; becslés, nem mérés |

Arányok, amiket a Karmester számol: elfogadási arány = M05 / M04; válaszarány = M06 / M05; ajánlat → megnyert = M12 / M11; ellenőri visszadobási arány = M15 / M16.

## Heti átnézés: a prompt

A workshop-projektben, új beszélgetésben, a táblázat-connectort (és ha van, a Sales Bot és az EstiWise kapcsolatot) bekapcsolva:

```text
Karmester: heti átnézés.
Cél: egyoldalas heti jelentés és legfeljebb három javasolt változtatás. Kész, ha minden szám mellett ott a forrása, és minden javaslat mellett, hogy mit változtat.
Címzett: én, a cég vezetője; 5 perc alatt el akarom olvasni.
Forrás és határ: a „CRM – [cégnév]” táblázat CRM és Heti mérés lapja; a Sales Bot és az EstiWise kapcsolat, ha be van kapcsolva; a company-dna.md; az elmúlt heti ellenőri jelentések, ha bemásolom őket. Ami nincs meg: „Nincs megadva”, nem nulla.
Kimeneti séma:
1. Számok: a Heti mérés lap e heti sorai az előző héthez képest, és a négy arány.
2. A pipeline: ügyek szakaszonként, lejárt következő lépések.
3. Három megfigyelés, mindegyik egy számra hivatkozva.
4. Javaslatok, legfeljebb három, mindegyik egy helyre: Cég-DNS (ICP, ajánlat, hangnem, Mondjuk/Nem mondjuk), Ellenőr ellenőrzőlistája, jövő heti kampány- és teendőterv.
5. A jövő heti terv: 3–5 teendő agenttel és nappal.
Szabályok: javaslat nem döntés; semmit ne módosíts és ne küldj ki. Ha egy számhoz kevés az adat (például 10 alatti esetszám), mondd ki, hogy ebből még nem következik semmi.
Ellenőrzés: minden arányt a nyers számokból számolj újra, és írd mellé a képletet.
Mentés: a jelentést weekly-review-ÉÉÉÉ-HH-NN.md fájlként készítsd el; a Heti mérés lap új sorait csak a jóváhagyásom után írd be.
```

## Hogyan kerül vissza a folyamatba?

| Ha ezt látod | Ide nyúlsz | Példa |
| --- | --- | --- |
| Alacsony elfogadási arány a LinkedInen | Cég-DNS 2. szakasz (ICP), a Sales Bot szűrői | Szűkebb cégméret vagy más döntéshozói szint |
| Elfogadnak, de nem válaszolnak | Író, LinkedIn-üzenet műfaj; DNS 7. szakasz (kifogások) | Rövidebb első üzenet, más kérdés |
| Sok érdeklődés, kevés ajánlat | DNS 3. szakasz (ajánlat), EstiWise ügyfélkérdései | Egyszerűbb belépő ajánlat |
| Sok ajánlat, kevés megnyert | Ajánlat kísérőszövege, utánkövetés a heti tervben | Utánkövetés a 3. napon |
| Gyakori ellenőri BLOKKOLÓ | DNS 6. szakasz (Mondjuk / Nem mondjuk), az Ellenőr ellenőrzőlistája | Új tiltott ígéret a listán |
| Az Író hangja idegen | voice-profile.md | Új jellemző kifejezés, kerülendő szó |

Minden jóváhagyott változtatás után: a DNS verziószáma nő (0.1 → 0.2), és egy sor kerül a változásnaplóba (mi, miért, melyik számból). Az új DNS-fájlt cseréld le a projekt tudásában. Így a következő héten minden agent már az új változatból dolgozik.
