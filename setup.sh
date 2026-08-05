#!/bin/bash

echo "🔧 Memisahkan CSS dari index.html..."

# Backup original
cp index.html index.html.bak

# Ekstrak bagian CSS (antara <style> dan </style>)
sed -n '/<style>/,/<\/style>/p' index.html | sed '1d;$d' > css/temp-all.css

# Pisahkan CSS per komponen
# Variables & Base
awk '/:root/,/body \{$|^\* \{/' css/temp-all.css > css/variables.css
sed -n '/body {/,/overflow-x: hidden;/p' css/temp-all.css > css/base.css

# Components (buttons, cards, tags, badges)
sed -n '/\.btn {/,/\.btn-sm {[^}]*}/p' css/temp-all.css > css/components.css
sed -n '/\.card {/,/\.card:hover::before {[^}]*}/p' css/temp-all.css >> css/components.css
sed -n '/\.tag {/,/\.tag:hover {[^}]*}/p' css/temp-all.css >> css/components.css

# Layout (hero, nav, grid, sections, footer)
sed -n '/\.hero {/,/\.hero p\.summary {[^}]*}/p' css/temp-all.css > css/layout.css
sed -n '/\.section-header/,/section:hover \.section-header/p' css/temp-all.css >> css/layout.css
sed -n '/footer {/,/footer {[^}]*}/p' css/temp-all.css >> css/layout.css

# Animations
sed -n '/@keyframes/,/overflow-x: hidden;/p' css/temp-all.css > css/animations.css

# Responsive
sed -n '/@media/,/^<\/style>/p' css/temp-all.css | sed '$d' > css/responsive.css

# Gabungkan semua CSS jadi satu file teroptimasi
cat css/variables.css css/base.css css/components.css css/layout.css css/animations.css css/responsive.css > css/style.css

# Bersihkan
rm css/temp-all.css css/variables.css css/base.css css/components.css css/layout.css css/animations.css css/responsive.css

echo "✅ CSS berhasil dipisahkan ke css/style.css"
echo "📦 Ukuran file: $(wc -c < css/style.css) bytes"

# Hapus CSS inline dari index.html, ganti dengan link
python3 << 'PYEOF'
import re

with open('index.html', 'r') as f:
    html = f.read()

# Hapus <style>...</style>
html = re.sub(r'<style>.*?</style>', '', html, flags=re.DOTALL)

# Tambahkan <link> ke CSS external sebelum </head>
css_link = '    <link rel="stylesheet" href="css/style.css">\n</head>'
html = html.replace('</head>', css_link)

with open('index.html', 'w') as f:
    f.write(html)

print("✅ index.html diperbarui dengan link ke css/style.css")
PYEOF

