import json
import re

with open('docs/contact_form_dispatcher.html', 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'const prospects = (\[.*?\]);', content, flags=re.DOTALL)
assert m, 'Prospects array not found'
prospects = json.loads(m.group(1))
assert len(prospects) == 300, f'Expected 300, got {len(prospects)}'
assert prospects[0]['id'] == 1, 'First lead ID != 1'
assert prospects[199]['id'] == 200, 'Lead 200 altered!'
assert prospects[299]['id'] == 300, 'Lead 300 altered!'

elements = ['total-count', 'contacted-count', 'sent-today-count', 'unreachable-count', 'due-today-count', 'progress-bar']
for el in elements:
    assert f'id="{el}"' in content, f'{el} missing from HTML'

print('Verification SUCCESS:')
print(f'- Total prospects in dispatcher: {len(prospects)}')
print(f'- Lead #1: {prospects[0]["name"]} ({prospects[0]["city"]})')
print(f'- Lead #200: {prospects[199]["name"]} ({prospects[199]["city"]})')
print(f'- Lead #300: {prospects[299]["name"]} ({prospects[299]["city"]})')
print('- All 6 metrics DOM elements successfully present.')
