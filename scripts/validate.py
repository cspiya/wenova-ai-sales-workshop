"""Validate authoring foundations, not external integrations or teaching readiness."""
from pathlib import Path
import csv
import json
import re
import yaml

ROOT = Path(__file__).resolve().parents[1]
errors = []
def check(condition, message):
    if not condition:
        errors.append(message)
def read_yaml(path):
    return yaml.safe_load(path.read_text(encoding='utf-8'))

course = read_yaml(ROOT / 'course/course-map.yaml')
partners = read_yaml(ROOT / 'course/partners.yaml')['partners']
partner_ids = {p['id'] for p in partners}
check(len(partner_ids) == len(partners) == 4, 'Exactly four unique partners required')
check(next(p for p in partners if p['id'] == 'blackhole-media')['name'] == 'Blackhole Media', 'Blackhole Media spelling')
headings = ['Ezt készíted el','Erre lesz szükséged','Így működik','Ezekről te döntesz','Ezt kérd Claude-tól','Haladj végig ezeken','Ellenőrizd az eredményt','Ha elakadtál','Ezt viszed tovább','Ha maradt időd']
known_outputs = set()
lesson_ids = set()
manifests = {}
draft_count = 0
for entry in course['modules']:
    path = ROOT / 'course' / entry['manifest']
    check(path.exists(), f'Missing manifest {path}')
    if not path.exists():
        continue
    m = read_yaml(path)
    manifests[m['id']] = m
    check(m['id'] == entry['id'] == path.parent.name, f'Module ID mismatch {path}')
    check(m['partner'] in partner_ids, f'Unknown partner {path}')
    check(m['status'] in ['draft','review','ready'], f'Invalid module status {path}')
    check(set(m['inputs']) <= known_outputs, f'Inputs unavailable from earlier modules: {m["id"]}')
    known_outputs.update(m['outputs'])
    check((path.parent / m['recovery']).exists(), f'Missing recovery {path}')
    lesson_minutes = 0
    for lesson in m['lessons']:
        lp = path.parent / lesson
        check(lp.exists(), f'Missing lesson {lp}')
        if not lp.exists():
            continue
        content = lp.read_text(encoding='utf-8')
        front = re.match(r'\A---\n(.*?)\n---\n', content, re.S)
        check(bool(front), f'Missing frontmatter {lp}')
        if not front:
            continue
        lm = yaml.safe_load(front.group(1))
        check(lm['id'] not in lesson_ids, f'Duplicate lesson ID {lm["id"]}')
        lesson_ids.add(lm['id'])
        check(lm['id'] == m['id'] + '.' + lp.stem, f'Lesson ID mismatch {lp}')
        check(lm['status'] in ['draft','review','ready'], f'Invalid lesson status {lp}')
        check(m['status'] != 'ready' or lm['status'] == 'ready', f'Ready module contains unfinished lesson {lp}')
        draft_count += lm['status'] == 'draft'
        lesson_minutes += lm['duration_minutes']
        found = re.findall(r'^## (.+)$', content, re.M)
        check(found == headings, f'Wrong lesson structure {lp}')
    if m['duration_minutes'] == 90:
        check(lesson_minutes == 60, f'Practice time must total 60 minutes: {m["id"]}')

last_end = None
scheduled = []
for slot in course['schedule']:
    def minute(s):
        h, m = map(int, s.split(':'))
        return h * 60 + m
    start, end = minute(slot['start']), minute(slot['end'])
    check(end > start, 'Nonpositive schedule slot')
    if last_end is not None:
        check(start == last_end, f'Schedule gap or overlap at {slot["start"]}')
    last_end = end
    if 'module' in slot:
        scheduled.append(slot['module'])
        check(end-start == manifests[slot['module']]['duration_minutes'], f'Schedule duration mismatch {slot}')
check(scheduled == [e['id'] for e in course['modules'] if e['id'] != '00-prework'], 'Schedule order mismatch')

progress = json.loads((ROOT / 'participant-starter/progress.json').read_text(encoding='utf-8'))
check(progress['current_lesson'] in lesson_ids, 'Invalid starting lesson')
check(progress['course_version'] == (ROOT / 'VERSION').read_text().strip(), 'Starter version mismatch')

def fields(path):
    return dict(re.findall(r'^([a-z_]+):\s*(.*)$', path.read_text(encoding='utf-8'), re.M))
scenario_ids = []
for scenario in sorted((ROOT / 'scenarios').iterdir()):
    if not scenario.is_dir():
        continue
    scenario_ids.append(scenario.name)
    out = scenario / 'outputs'
    check(known_outputs <= {p.name for p in out.iterdir()}, f'Incomplete recovery chain {scenario.name}')
    with (scenario / 'price-list.csv').open(encoding='utf-8', newline='') as f:
        price = next(csv.DictReader(f))
    with (out / 'leads.csv').open(encoding='utf-8', newline='') as f:
        leads = list(csv.DictReader(f))
    check(len(leads) == 5, f'Expected five sample leads: {scenario.name}')
    lead_ids = {x['lead_id'] for x in leads}
    brief, proposal, handoff = [fields(out / p) for p in ['customer-brief.md','proposal.md','handoff.md']]
    check(brief['lead_id'] == proposal['lead_id'] and brief['lead_id'] in lead_ids, f'Lead chain mismatch {scenario.name}')
    check(brief['offer_id'] == proposal['offer_id'] == price['offer_id'], f'Offer chain mismatch {scenario.name}')
    check(handoff['proposal_id'] == proposal['proposal_id'], f'Proposal handoff mismatch {scenario.name}')
    check(float(proposal['unit_price']) == float(price['unit_price']), f'Wrong sample price {scenario.name}')
    check(float(proposal['total']) == float(proposal['quantity']) * float(proposal['unit_price']), f'Wrong sample total {scenario.name}')
    check(proposal['status'] == 'draft' and handoff['decision_status'] == 'draft', f'Sample implies acceptance {scenario.name}')
check(len(scenario_ids) == 3, 'Expected three scenarios')

for p in ROOT.rglob('*'):
    if not p.is_file() or any(x in p.parts for x in ['.git','.venv','__pycache__','dist']):
        continue
    check(p.name.isascii() and ' ' not in p.name, f'Non-English/space filename {p}')
    if p.suffix == '.md':
        content = p.read_text(encoding='utf-8')
        for target in re.findall(r'\]\(([^)]+)\)', content):
            if '://' in target or target.startswith(('#','mailto:')):
                continue
            check((p.parent / target.split('#')[0]).exists(), f'Broken local link {p}: {target}')

if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(manifests)} modules, {len(lesson_ids)} lessons, {len(scenario_ids)} coherent scenarios, schedule and local links.')
print(f'Authoring state: {draft_count} draft lessons; external integrations and teaching readiness not validated.')
