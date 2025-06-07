---
title: "[Vibe Coding] バイブコーディング × Cursor 入門講座 02 (実践の次へ ─ 応用・連携・理解)"
slug: vibe_coding-cursor-practice02
date: 2025-06-07T07:00:00.000Z
summary: "バイブコーディング × Cursor 入門講座 02 (実践の次へ ─ 応用・連携・理解を深める)"
description: "バイブコーディング × Cursor 入門講座 02 (実践の次へ ─ 応用・連携・理解を深める)"
draft: false
author: lain
categories:
  - バイブコーディング
tags:
  - Vibe Coding
  - 入門講座
  - Cursor
  - OpenAI
  - Markdown
  - 要件定義
  - 応用
  - 連携
weight: 9
image: /images/uploads/vibe_coding-cursor-practice02.webp
---

<center>
<img src="/images/uploads/vibe_coding-cursor-practice02.webp"
     alt="バイブコーディング × Cursor 入門講座 02 (実践の次へ ─ 応用・連携・理解)"
     style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>


##  1. Live Server を導入してブラウザで動作確認

目的：Cursorで生成したコードをすぐにブラウザで確認できる環境を作る。

### VSCodeの拡張機能「Live Server」をインストール


1. VSCode のサイドバー左側から拡張機能（四角いアイコン）をクリック
2. 検索バーに Live Server と入力
3. Ritwick Dey 氏による公式の Live Server をインストール

🔍 パッケージ名: ritwickdey.LiveServer

<a href="/images/uploads/vibe_coding-cursor-practice02-live_server01.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-live_server01.jpg"
         alt="VSCodeの拡張機能「Live Server」をインストール"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### index.html を右クリック → 「Open with Live Server」で動作確認

1. 作成済みの index.html をエクスプローラで開く
2. ファイルを右クリック → 「Open with Live Server」を選択


<a href="/images/uploads/vibe_coding-cursor-practice02-live_server02.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-live_server02.jpg"
         alt="index.html を右クリック → 「Open with Live Server」で"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


3. デフォルトのブラウザが自動で起動し、ページが表示される

🧪 ページが開かない場合は、ブラウザで http://127.0.0.1:5500/ にアクセスしてみてください。


<a href="/images/uploads/vibe_coding-cursor-practice02-live_server03.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-live_server03.jpg"
         alt="デフォルトのブラウザが自動で起動し、ページが表示される"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### 自動リロードの利便性を体感

- index.html や style.css、app.js を編集 → 保存するだけで即時ブラウザに反映

- ページを再読み込みする手間が不要になる

- CSSなどのスタイリング確認が圧倒的に楽になる

👀 特にバイブコーディングのような「即試行錯誤 → すぐに確認」が重要な作業において、Live Server は欠かせません。


### 補足：Live Server の設定・応用

💡 ポート番号やルートパスのカスタマイズ

.vscode/settings.json に設定を書くことで、ポート固定やデフォルトブラウザ指定が可能

```
{
  "liveServer.settings.port": 5501,
  "liveServer.settings.browser": "chrome"
}
```

⚠️ Hugoプロジェクトとの混在注意点

Hugo でも localhost:1313 でサーバを起動するため、Live Server のポートが重複すると競合します。

その場合は、Live Server 側で別ポート（例: 5500→5501）を指定すると回避できます。



📌 補足記事に追記するなら：

Live Server の設定方法

Hugo や他の静的サイトと混在する場合の注意点

以上が Live Server 導入の基本操作です。
この後の Cursor 活用では、生成した HTML/CSS/JS を Live Server でリアルタイム確認しながら、修正→反映→テストという流れが自然になります。




## 2. ChatGPTとCursorの違いを整理する

目的：今後の使い分け判断に役立つ「強みと弱み」を理解する。

### 表形式での比較（前回提示した表を活用）

### Cursorは「ファイル＋AI対話」前提、ChatGPTは「単発プロンプト」

### コーディングタスクはCursor、アイデア発想や執筆タスクはChatGPTが得意

📌 補足記事に追記するなら：

使い分けの具体的事例（例えばHTML構造の提案→Cursor、コンテンツ文章→ChatGPT）

## 3. Cursorの設定・使いこなし（オプション）

目的：Cursorをより快適に使いこなす準備。

### よく使うコマンド・ショートカットを整理

### 日本語UIの有無・設定確認（Cursorは英語中心）

### API Key の保存状態の再確認（消えてしまう場合の対処）

## 4. バイブコーディングが活きる開発ジャンル

目的：今後どんなことに応用できそうか、視野を広げる。

### Markdown × WebUI制作（ブログ連携）

### CSSデザイン設計（Hugoテーマ開発への応用）

### 教育・技術ドキュメントとの統合

### AIによるプロトタイピング（LP、作品ページ）

## 5. Hugoとの連携アイデアを考える

目的：今までの技術を活かしたプロジェクトに展開する。

### Cursorで作ったコードをHugoの layouts や shortcodes に転用

### Markdownで要件定義 → Hugo記事化 のワークフロー整備

### Hugo記事制作のテンプレート生成にAIを使う流れの構想
