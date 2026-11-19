# Cég-DNS – IrodaLiget

**KITALÁLT oktatási minta.** Az IrodaLiget nem létező vállalkozás; minden adat, ár és levél kitalált. Ezen mutatjuk meg, hogyan néz ki egy kitöltött Cég-DNS forrás- és hiányjelöléssel.

## 0. Metaadat

| Mező | Érték |
| --- | --- |
| Verzió | 0.1 |
| Státusz | tervezet (oktatási minta) |
| Gazda | Ügyvezető (kitalált) |
| Utolsó módosítás | 2026-11-19 |
| Kapcsolódó fájlok | [voice-profile.md](voice-profile.md), [business-profile.md](business-profile.md), [sales-strategy.md](sales-strategy.md) |

## 1. Kik vagyunk

Budapesti kisvállalkozás, amely 10–40 fős irodák szobanövényeit gondozza havi előfizetéssel. (Forrás: F-01)

## 2. Kinek adunk el (ICP)

| Szempont | Leírás | Forrás |
| --- | --- | --- |
| Iparág | Irodai munkahelyek: tanácsadók, ügyvédi irodák, kisebb szoftvercégek | F-01 |
| Cégméret | 10–40 fő, egy irodai telephely | F-01 |
| Földrajz | Budapest | F-01 |
| Döntéshozó | Irodavezető vagy ügyvezető | F-01 |
| Fő probléma | A növények gondozása gazdátlan: senkinek nem feladata, a növények elhalnak | F-01, F-04 |
| Vásárlási jel | Irodaköltözés, felújítás, új irodavezető | Nincs megadva |
| Kizáró jel | 20 növénynél többet igénylő iroda (az alapcsomag nem fedi) | F-02 |

## 3. Mit adunk el

| offer_id | Ajánlat | Mit kap az ügyfél | Kizárások | Árazási alap | Forrás |
| --- | --- | --- | --- | --- | --- |
| office-plants-O01 | Havi irodai növénygondozás | Havi két gondozási látogatás legfeljebb 20 növényhez: öntözés, tápoldat, levéltisztítás, állapotjelzés | Növénycsere és beszerzés | 40 000 HUF nettó / hónap | F-02 |

20 növény feletti igényre ár: Nincs megadva. Ilyenkor felmérést kérünk, árat nem mondunk.

## 4. Bizonyíték

- Nincs megadva. A mintavállalkozásnak nincs engedélyezett referenciája; kitalált ügyfelet nem hozunk példának.

## 5. Hangnem röviden

- Tegeződő, közvetlen, rövid mondatok. (Forrás: F-04, részletesen: voice-profile.md)
- Három jelző: barátságos, gyakorlatias, nyugodt.
- Jellemző mondat: „Szívesen ránézek, mikor lenne jó egy 15 perces bejárás?”

## 6. Mit mondunk, mit nem mondunk

| Mondjuk | Nem mondjuk |
| --- | --- |
| Havi két látogatás, legfeljebb 20 növény (F-02) | „Garantáljuk, hogy egy növény sem pusztul el” |
| Az első bejárás ingyenes (F-01) | Kedvezmény vagy akció jóváhagyás nélkül |
| A gondozás után rövid állapotjelzést küldünk (F-01) | Ügyfélnév vagy „már X iroda bízik bennünk” |
|  | Növénybeszerzés vagy -csere vállalása |

## 7. Gyakori kérdések és kifogások

| Kérdés vagy kifogás | Rövid válaszunk | Forrás |
| --- | --- | --- |
| „Mennyibe kerül?” | 40 000 Ft + áfa havonta, legfeljebb 20 növényig. | F-02 |
| „Nekünk 25 növényünk van.” | Ehhez bejárás kell; az árat utána adjuk meg. | F-02 |
| „Mi van, ha elpusztul egy növény?” | Jelezzük, és javaslatot adunk; cserét nem vállalunk. | F-01 |
| „Felmondható?” | Nincs megadva | – |

## 8. Források

| ID | Forrás | Típus | Dátum |
| --- | --- | --- | --- |
| F-01 | IrodaLiget weboldal szövege (kitalált) | weboldal | 2026-11 |
| F-02 | [Árlista](../price-list.csv) | fájl | 2026-11 |
| F-03 | Korábbi ajánlat: [proposal.md](proposal.md) | fájl | 2026-11 |
| F-04 | Küldött levelek: [mailbox-sample.md](mailbox-sample.md), 5 levél | levelezés | 2026-10 – 2026-11 |
| F-05 | A mintacég ügyvezetőjének kitalált közlése és az [értékesítési terv](sales-strategy.md) | oktatási minta | 2026-11 |

## 9. Hiányok és nyitott kérdések

| Hiány | Ki pótolja | Meddig |
| --- | --- | --- |
| Felmondási feltétel | Ügyvezető | 2026-11-26 |
| 20 növény feletti árazás | Ügyvezető | 2026-11-26 |
| Engedélyezett referencia | Ügyvezető | Nincs megadva |
| Vásárlási jelek ellenőrzése | Sales | 2026-12-03 |

## 10. Változásnapló

| Verzió | Dátum | Változás | Ki |
| --- | --- | --- | --- |
| 0.1 | 2026-11-19 | Első változat a workshopon (minta) | Ügyvezető (kitalált) |

## 11. A cég következő célja

Több bejárást szeretnénk egyeztetni 10-40 fős budapesti irodákkal. Hetente megnézzük, hány bejárást egyeztettünk, és az első négy hét után tűzünk ki célértéket. (F-05)

## 12. Az ügyfélszerzés fő lépései

1. A LinkedInen kiválasztjuk az ajánlathoz illő irodákat. (F-05)
2. Rövid megkeresésben 15 perces, ingyenes bejárást javaslunk. (F-01, F-05)
3. A bejáráson felmérjük a növények számát és gondozási igényét. (F-05)
4. A felmérés alapján elkészítjük a havi gondozás ajánlattervezetét. (F-03, F-05)

## 13. Hol kell embernek döntenie?

Az ajánlattervezet előtt az ügyvezető dönt arról, hogy a felmért igény belefér-e a havi csomagba. Húsz növény felett a külön árat ő hagyja jóvá. (F-02, F-05)
