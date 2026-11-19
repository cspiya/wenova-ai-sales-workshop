# Wenova Sales Workshop plugin

Az AI Sales & Marketing Workshop résztvevőinek készült csomag. A workshop szerepeit, a blokkok skilljeit és a partnerrendszerek kapcsolati címét adja a Claude-hoz. A tananyagot nem tartalmazza: a skillek a munkamappa `Tananyag/` és `Munka/` mappájából dolgoznak, ezért előbb a tananyagot kell telepíteni.

## Mi van benne?

| Rész | Tartalom |
| --- | --- |
| Skillek (8) | `karmester`, `beallitas`, `ceg-dns`, `hangprofil`, `tartalom`, `lead`, `ajanlat`, `folyamatproba` |
| Alügynökök (7) | `writer` (Író), `reviewer` (Ellenőr), `ceo` (CEO), `marketing` (Marketing), `sales` (Sales), `inbox` (Postás), `crm` (CRM) |
| Connector-címek (4) | Brandiseer, Sales Bot, EstiWise, Buffer (a Buffer választható) |

A Karmester skillként fut a fő beszélgetésben, onnan indítja az Írót, és az induló felmérés alapján választ Ellenőrt. Egy feladaton legfeljebb három kör fut, utána a résztvevő dönt.

## Hozzáadás

- **Cowork:** Customize → Plugins → Add → Add marketplace, a cím `cspiya/wenova-ai-sales-workshop`, majd Install. Tartalék: Add → Upload plugin, a `wenova-sales-workshop.plugin` fájllal. Utána új munkamenetet kell nyitni.
- **Claude Code:** `claude plugin install wenova-sales-workshop --marketplace cspiya/wenova-ai-sales-workshop`, majd újraindítás vagy `/reload-plugins`.

Az első „Kezdjük a felkészülést.” indítás felméréssel kezdődik. Később a „Mérd fel a gépem.” mondattal vagy a `/wenova-sales-workshop:beallitas` paranccsal kérheted újra.

## Mi marad kézi?

A plugin a connectorok címét hozza, a kapcsolatot nem hozza létre. Coworkben a plugin Connectors fülén connectoronként Add, Connect és belépés kell, Claude Code-ban a `/mcp` menüben szolgáltatásonként belépés. A Gmail és a Google Drive nincs a pluginban, ezeket a Customize → Connectors felületen kell bekötni. A levelező írási eszközeit a résztvevő állítja Blocked értékre.

## Adatok és határok

A plugin nem tartalmaz jelszót, kulcsot vagy ügyféladatot. A kapcsolódó szolgáltatásokba csak az kerül, amit a résztvevő a saját fiókjában jóváhagy. Levelet és üzenetet a Claude nem küld, azonnali közzétételt nem indít. Posztot csak a csatorna, a szöveg és az időpont kifejezett jóváhagyása után ütemezhet, és ami be van ütemezve, az ténylegesen megjelenik.
