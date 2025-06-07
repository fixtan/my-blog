import requests
from bs4 import BeautifulSoup
import tkinter as tk
from tkinter import simpledialog
import pyperclip

def fetch_ogp(img):
    readable_shortcode = f"""
<a href="/images/uploads/{img}" >
<img src="/images/uploads/{img}"
         alt=""
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
"""

    pyperclip.copy(readable_shortcode)
    print("✅ クリップボードにコピーされました！")
    print(readable_shortcode)

# GUIポップアップ
root = tk.Tk()
root.withdraw()
img = simpledialog.askstring("ブログ用 IMGタグ生成", "画像ファイル名を入力してください：")
if img:
    try:
        fetch_ogp(img)
    except Exception as e:
        print("エラー:", e)
