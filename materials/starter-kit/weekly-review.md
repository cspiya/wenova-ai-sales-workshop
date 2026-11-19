# Heti mérés és visszacsatolás

A heti átnézés zárja a kört: a számokból döntés lesz, a döntésből pedig változás a Cég-DNS-ben, az agentekben és a következő heti tervben. Hétfőnként 30 perc.

## Hol vannak a számok?

A „CRM – [cégnév]” táblázatban két lap van:

| Lap | Tartalom | Ki tölti? |
| --- | --- | --- |
| CRM | Soronként egy ügyféleset, szakasszal és forrással ([oszlopok](crm-template.csv)) | A CRM-agent CSV-sorokat ad, te bemásolod |
| Heti mérés | Hetente egy sor mérőszámonként ([sablon](metrics-template.csv)) | A Karmester sorokat javasol, te bemásolod |

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
| Minőség | Visszaadott egyedi szövegek (M15) az ellenőrzött egyedi szövegekből (M16) | Saját ellenőri rekordok | Elég jó-e a DNS és az Író utasítása |
| Idő | Megtakarított idő (M17) | Saját becslés | Megéri-e; becslés, nem mérés |

A Karmester azonos időszak adataiból számolja az elfogadási arányt (M05 / M04), a válaszarányt (M06 / M05) és az ellenőri visszadobási arányt (M15 / M16). Nulla vagy hiányzó nevezőnél az arány „nem számítható”.

Az M16 az adott héten ellenőrzött saját szövegek egyedi azonosítóit számolja. Az M15 ebből a halmazból azokat az azonosítókat számolja, amelyekhez azon a héten legalább egy `BLOKKOLÓ` vagy `JAVÍTANDÓ` ítélet tartozik. Az ítélet dátuma alapján válaszd ki a heti sorokat. Ha egyetlen szöveg v1 verziója `JAVÍTANDÓ`, a v2 pedig ugyanazon a héten `MEGFELEL`, a `post-review.md` mindkét sora ugyanahhoz az azonosítóhoz tartozik. Ekkor M15 = 1 és M16 = 1, vagyis az arány 100%. Két visszaadott verzió is egy visszaadott szövegnek számít.

A héten kiküldött ajánlat (M11) és a héten megnyert ügy (M12) két külön darabszám. A számokhoz kiküldési, illetve megnyerési eseménydátum kell. A CRM aktuális szakasza és az utolsó módosítás dátuma erre kevés. Az ajánlati konverzióhoz válaszd ki az azonos héten kiküldött ajánlatokat. A követés végén ezek közül számold meg az addig megnyerteket, és oszd el a kiválasztott ajánlatok számával. Eseménydátum vagy nem nulla nevező hiányában a konverzió „nem számítható”.

## Heti átnézés: a prompt

A workshop-projektben, új beszélgetésben, a Google Drive connectort (és ha van, a Buffer, a Sales Bot és az EstiWise kapcsolatot) bekapcsolva:

```text
Karmester: heti átnézés.
Cél: egyoldalas heti jelentés és legfeljebb három javasolt változtatás. Kész, ha minden szám mellett ott a forrása, és minden javaslat mellett, hogy mit változtat.
Címzett: én, a cég vezetője; 5 perc alatt el akarom olvasni.
Forrás és határ: a „CRM – [cégnév]” táblázat CRM és Heti mérés lapja; a Sales Bot és az EstiWise kapcsolat, ha be van kapcsolva; a company-dna.md; a mért hét saját ellenőri rekordjai, ha bemásolom őket. Ami nincs meg: „Nincs megadva”, nem nulla.
Kimeneti séma:
1. Számok: a Heti mérés lap e heti sorai az előző héthez képest, és a forrásból kiszámítható arányok. Az M11 és M12 külön darabszám. Ajánlati konverziót csak azonos kiküldési hét ajánlataiból számolj, dokumentált kiküldési és megnyerési eseménydátumokkal és egy rögzített zárónappal. Nulla vagy hiányzó nevezőnél írd: „nem számítható”.
   Az ítélet dátuma alapján válaszd ki a mért héten született tényleges döntéseket. Minden döntés sora tartalmazza a szövegazonosítót, a vizsgált verziót, az ítélet dátumát és az ítéletet. Az „ellenőrzésre vár” megjegyzést hagyd ki. Az M16-hoz számold meg az így ellenőrzött saját szövegek egyedi azonosítóit. Az M15-höz ezek közül számold meg azokat az egyedi azonosítókat, amelyek a mért héten legalább egyszer BLOKKOLÓ vagy JAVÍTANDÓ ítéletet kaptak. A szöveg akkor is beleszámít az M15-be, ha egy későbbi verziója ugyanazon a héten MEGFELEL. Ha a forrásokból az arány nem állapítható meg, írd: „nem számítható”.
2. A pipeline: ügyek szakaszonként, lejárt következő lépések.
3. Három megfigyelés, mindegyik egy számra hivatkozva.
4. Javaslatok, legfeljebb három, mindegyik egy helyre: Cég-DNS (ICP, ajánlat, hangnem, Mondjuk/Nem mondjuk), Ellenőr ellenőrzőlistája, jövő heti kampány- és teendőterv.
5. A jövő heti terv: 3–5 teendő agenttel és nappal.
Szabályok: javaslat nem döntés; semmit ne módosíts és ne küldj ki. Ha egy számhoz kevés az adat (például 10 alatti esetszám), mondd ki, hogy ebből még nem következik semmi.
Ellenőrzés: minden arányt a nyers számokból számolj újra, és írd mellé a képletet.
Mentés: a jelentést weekly-review-ÉÉÉÉ-HH-NN.md fájlként készítsd el; a Heti mérés lap új sorait CSV-formában add át, én másolom be.
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

Minden jóváhagyott változtatás után: a DNS verziószáma nő (0.1 → 0.2), és egy sor kerül a változásnaplóba (mi, miért, melyik számból). A következő munkamenet előtt a `progress.json` új változatában jelöld ki az új DNS-fájlt. Ha webes Claude-projektben dolgozol, töltsd fel az új fájlt és a naplót is.
