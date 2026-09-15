# Közös adatátadás — 1. verzió

Minden output a résztvevő saját munkacsomagjába kerül. A példavállalkozás és az ügyfél azonosítója a láncon végig azonos.
A nyitott adat értéke `open`; nem nullából vagy kitalált számból számolunk. Pénz: pénznem, nettó/bruttó jelölés és egység mindig kell.

| Fájl | Kötelező mezők |
|---|---|
| business-profile.md | business_id, business_name, offer_id, offer, audience, problem, outcome, scope, exclusions, pricing_basis, channel, next_action, assumptions |
| sales-strategy.md | offer_id, audience, channel, message, next_action, success_metric |
| ai-work-instructions.md | goal, inputs, allowed_actions, review_points, missing_data_rule |
| brand-brief.md | business_id, voice, message, visual_direction |
| campaign-plan.md | offer_id, audience, posts, image_brief, video_outline, channel, call_to_action |
| leads.csv | lead_id, company, fit_reason, status, next_action |
| outreach.md | lead_id, first_message, followup, stop_condition |
| customer-brief.md | lead_id, offer_id, need, quantity, constraints, open_questions |
| proposal.md | proposal_id, lead_id, offer_id, scope, quantity, unit_price, currency, price_basis, total, assumptions, status |
| handoff.md | proposal_id, decision_status, owner, next_task, due |
| pipeline-review.md | case_id, results, execution_mode, evidence, gaps, next_step |

Az ajánlat számítását az árlista és a mennyiség alapján külön ellenőrizzük. A `draft` ajánlat nem elfogadott megrendelés.
Eszközspecifikus formátumból a modul végén a közös formátumba exportálunk vagy átalakítunk.
