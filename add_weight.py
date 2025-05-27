import os
import glob

# === 投稿フォルダのパス ===
posts_dir = os.path.join("content", "posts")

# === .mdファイルをすべて取得 ===
files = glob.glob(os.path.join(posts_dir, "*.md"))

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    if any("weight:" in line for line in lines):
        print(f"✅ weight 既にあり → {filepath}")
        continue  # 既に weight がある場合はスキップ

    # YAML front matter の終了位置（2個目の "---"）を探す
    insert_index = None
    dash_count = 0
    for i, line in enumerate(lines):
        if line.strip() == "---":
            dash_count += 1
            if dash_count == 2:
                insert_index = i
                break

    if insert_index:
        lines.insert(insert_index, "weight: 20\n")
        with open(filepath, "w", encoding="utf-8") as f:
            f.writelines(lines)
        print(f"📝 weight 追加 → {filepath}")
    else:
        print(f"⚠ YAMLヘッダが見つからない → {filepath}")

print("\n🎉 処理完了。weight: 20 を未設定記事に追加しました。")
