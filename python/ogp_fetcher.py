import requests
from bs4 import BeautifulSoup
import sys

def fetch_ogp(url):
    try:
        res = requests.get(url, timeout=5, headers={"User-Agent": "Mozilla/5.0"})
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "html.parser")
        ogp = {
            "title": soup.find("meta", property="og:title"),
            "description": soup.find("meta", property="og:description"),
            "image": soup.find("meta", property="og:image")
        }
        print("{{< link-card")
        print(f'    url="{url}"')
        print(f'    title="{ogp["title"]["content"] if ogp["title"] else "タイトル未取得"}"')
        print(f'    description="{ogp["description"]["content"] if ogp["description"] else "説明なし"}"')
        print(f'    image="{ogp["image"]["content"] if ogp["image"] else ""}"')
        print(">}}")
    except Exception as e:
        print(f"エラー: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("使い方: python ogp_fetcher.py [URL]")
    else:
        fetch_ogp(sys.argv[1])
