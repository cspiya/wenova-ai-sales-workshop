"""Create an uploadable source-based coach pack. No integration is provisioned."""
from pathlib import Path
import yaml

ROOT = Path(__file__).resolve().parents[1]
course = yaml.safe_load((ROOT / 'course/course-map.yaml').read_text(encoding='utf-8'))
paths = ['coach/instructions.md','coach/onboarding.md','coach/recovery.md','course/course-map.yaml','course/partners.yaml','standards/data-contracts.md','participant-starter/progress.json']
for entry in course['modules']:
    manifest = Path('course') / entry['manifest']
    module = yaml.safe_load((ROOT / manifest).read_text(encoding='utf-8'))
    paths += [str(manifest), str(manifest.parent / 'overview.md')]
    paths += [str(manifest.parent / lesson) for lesson in module['lessons']]
    paths += [str(manifest.parent / module['recovery'])]
paths += [str(p.relative_to(ROOT)) for p in sorted((ROOT/'scenarios').rglob('*')) if p.is_file()]
version = (ROOT/'VERSION').read_text().strip()
parts = [f'# Wenova workshop coach pack\n\nVersion: {version}\n\nAuthoring preview: draft lessons must not be presented as completed teaching material.']
for path in paths:
    text = (ROOT/path).read_text(encoding='utf-8')
    parts.append(f'\n---\n\nSource: {Path(path).as_posix()}\n\n{text}')
out = ROOT/'dist/coach-pack.md'
out.parent.mkdir(exist_ok=True)
out.write_text('\n'.join(parts), encoding='utf-8')
print(f'Built {out.relative_to(ROOT)} from {len(paths)} source files. Upload/access testing is still required.')
