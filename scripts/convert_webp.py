#!/usr/bin/env python3
"""Batch convert optimized JPGs to WebP in images/opt/webp/ using Pillow."""
import os
from PIL import Image

SRC_DIR = os.path.join(os.path.dirname(__file__), '..', 'images', 'opt')
OUT_DIR = os.path.join(SRC_DIR, 'webp')
os.makedirs(OUT_DIR, exist_ok=True)

for fname in os.listdir(SRC_DIR):
    if not (fname.lower().endswith('.jpg') or fname.lower().endswith('.jpeg')):
        continue
    src = os.path.join(SRC_DIR, fname)
    base = os.path.splitext(fname)[0]
    out = os.path.join(OUT_DIR, base + '.webp')
    try:
        with Image.open(src) as im:
            im.save(out, 'WEBP', quality=82, method=6)
            print('Wrote', out)
    except Exception as e:
        print('Error converting', src, e)
