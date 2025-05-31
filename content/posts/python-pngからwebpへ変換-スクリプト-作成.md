---
title: "[Python] PNGからWebPへ変換 スクリプト 作成"
slug: Python-png-to-webp-conv
summary: アイキャッチ画像のサイズダウン用にPythonで、画像変換スクリプトを作成したメモです。
description: アイキャッチ画像のサイズダウン用にPythonで、画像変換スクリプトを作成したメモです。
date: 2025-05-31T08:32:00.000Z
draft: false
author: lain
categories:
  - Python
tags:
  - 画像変換
  - "WebP "
  - PNG
weight: 5
image: /images/uploads/python-png-to-webp-conv.webp
---
<center>
<img src="/images/uploads/Python-png-to-webp-conv.webp" alt=""  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>

## はじめに

AIにサイト診断してもらった際、画像サイズが大きい問題を指摘された為、勉強も兼ね Pythonで、画像変換スクリプトを作成したメモです。

リンクカード＋OGP設定をしたお陰で、各記事の画像を含む情報を取得できるようになったのは良いのですが、画像サイズの大きさがネックになり、サイズダウンする事でリンクカードの軽量化も期待できます。

現在、画像はオンラインクラウドサービスの Canva で作成しているのですが、1200x630pxのpng画像で620kb程と結構な容量があります。

## 過去、作成した \[ PNG to WebP ] スクリプト

昔、似たスクリプトを作成した記憶があり、HDDを調べるとPNGからWebPへ変換する物が見つかりました。

```python
# -*- coding: utf-8 -*-
import sys,re
from PIL import Image
TYPE:str = "png"

def WebpToPng(path,type):
    Image.open(path).convert("RGB")\
        .save(re.sub("\.(webp|WEBP)$","."+type,path),TYPE)

if ( __name__ == "__main__" ):
    [WebpToPng(path,TYPE) for path in sys.argv[1:]]
```

ドラッグアンドドロップにも対応しており、スクリプトファイルへ画像ファイルをドロップする事で、同一フォルダに変換された画像を作成する仕組みになっています。

## AIが作成した \[ WebP to PNG ] スクリプト

上記の過去に作ったコードをAIに見せた所、WebP から PNGへ逆に変換するコードを作成してくれました。

```python
# png_to_webp.py
import sys, re
from PIL import Image

def convert_to_webp(path):
    if not path.lower().endswith(".png"):
        print(f"スキップ：{path}")
        return
    new_path = re.sub("\.png$", ".webp", path, flags=re.IGNORECASE)
    try:
        Image.open(path).convert("RGB").save(new_path, "webp", quality=85, method=6)
        print(f"✔ 変換成功: {new_path}")
    except Exception as e:
        print(f"❌ 変換失敗: {path} | エラー: {e}")

if __name__ == "__main__":
    for path in sys.argv[1:]:
        convert_to_webp(path)
```

いつも一瞬でコードを作成してくれるので驚きですね…。

例外処理までつけてくれましたので、不具合があった時にも原因の特定が容易になります。

これを pyinstaller コマンドでEXEします。

> pyinstaller --noconsole --onefile Python-png-to-webp-conv.py 

<img src="/images/uploads/png-to-webp-conv.jpg" alt=""  loading="lazy" decoding="async" style="width:540px; height:auto; border:1px solid #ccc; border-radius:6px; " />
