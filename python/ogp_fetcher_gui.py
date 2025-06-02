import requests
from bs4 import BeautifulSoup
import tkinter as tk
from tkinter import simpledialog
import pyperclip

def fetch_ogp(url):
    res = requests.get(url, timeout=5, headers={"User-Agent": "Mozilla/5.0"})
    res.encoding = res.apparent_encoding
    soup = BeautifulSoup(res.text, "html.parser")
    title = soup.find("meta", property="og:title")
    desc = soup.find("meta", property="og:description")
    image = soup.find("meta", property="og:image")

    # 改行付きで表示（人間用）
    readable_shortcode = f"""
{{{{< link-card 
    url="{url}" 
    title="{title['content'] if title else 'タイトル未取得'}" 
    description="{desc['content'] if desc else '説明なし'}" 
    image="{image['content'] if image else ''}" 
>}}}}"""
    # 改行とインデントを除去してコピー用に整形
    compact_shortcode = readable_shortcode.replace("\n", "").replace("  ", "").strip()

    pyperclip.copy(compact_shortcode)
    print("✅ クリップボードにコピーされました！")
    print(readable_shortcode)

# GUIポップアップ
root = tk.Tk()
root.withdraw()
url = simpledialog.askstring("OGPカード生成", "URLを入力してください：")
if url:
    try:
        fetch_ogp(url)
    except Exception as e:
        print("エラー:", e)
