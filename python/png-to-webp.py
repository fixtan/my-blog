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
