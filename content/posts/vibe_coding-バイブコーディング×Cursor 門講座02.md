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


##  1. Live Server導入->ブラウザで確認

目的：Cursorで生成したコードをすぐにブラウザで確認できる環境を作る。

### VSCode拡張機能「Live Server」をインストール


1. VSCode のサイドバー左側から拡張機能（四角いアイコン）をクリック
2. 検索バーに Live Server と入力
3. Ritwick Dey 氏による公式の Live Server をインストール

🔍 パッケージ名: ritwickdey.LiveServer

<a href="/images/uploads/vibe_coding-cursor-practice02-live_server01.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-live_server01.jpg"
         alt="VSCodeの拡張機能「Live Server」をインストール"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### Open with Live Serverで確認

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

### 表形式での比較

| 項目             | ChatGPT                      | Cursor                                  |
| ---------------- | ---------------------------- | --------------------------------------- |
| 会話スタイル     | フリースタイル対話           | プロジェクト文脈に基づく補完            |
| コード操作       | 出力されたコードを手動コピペ | コードをリアルタイムで直接編集（Apply） |
| 開発環境との統合 | なし（外部エディタ併用）     | VSCodeベースで完全統合                  |
| ファイル認識     | なし（会話文脈に限る）       | フォルダ構成・ファイル内容を読み込む    |
| Git対応          | なし                         | 統合（変更履歴を理解した提案が可能）    |
| Markdown要件定義 | 会話の中に埋め込む           | `.md`ファイルとして構造的に共有可能     |


### 機能面の違い

ChatGPT の特徴
- 汎用AIで、雑談や発想支援が得意
- ファイル管理や開発にはやや手間がかかる
- 自分で「何をどう聞くか」を組み立てる必要がある
- 過去の会話ログを文脈として引き継げる

Cursor の特徴
- コーディングに最適化された開発環境
- フォルダ単位での文脈保持が可能（全ファイルにアクセスできる）
- コード修正指示が Apply 一発で反映される
- Markdownによる要件定義との相性が非常に良い


※ Cursorは「ファイル＋AI対話」前提、ChatGPTは「単発プロンプト」<br>
※ コーディングタスクはCursor、アイデア発想や執筆タスクはChatGPTが得意

### 操作の流れの違い（比較図）

```
🟢 ChatGPT
  └─ 要件を会話で伝える
      └─ コードを出力
          └─ 自分でコピペして貼り付け
              └─ 実行・調整・再度相談

🔵 Cursor
  └─ 要件をMarkdownで記述
      └─ AIがコード提案（Applyで即反映）
          └─ 編集もAIと対話しながら進行
              └─ Git対応で変更履歴の追跡も可能
```


### どちらを使う？─併用のススメ

実はどちらか一方ではなく、併用することで最も効率が上がると実感しました。

- ChatGPT → 構想・下書き・記事用の対話
  - 例：要件定義の骨組みをMarkdownで一緒に作る
  - 例：バグの原因調査やアルゴリズムのアイデア出し

- Cursor → 開発・コード編集・動作確認
  - 例：実際のプロジェクトに組み込む
  - 例：コード分割・再利用の提案を受けて反映

🧪 実際の体験談として、今回の「ToDoアプリ」開発でもこの併用がとても有効でした。

### 実践上の使い分け

- ChatGPT
  - ✅ 発想支援
  - ✅ 要件整理
  - ✅ ブログや記事作成

- Cursor
  - ✅ アプリやUI制作
  - ✅ コードの差分更新
  - ✅ フォルダ構成を意識した開発

###  実体験からのヒント

📝 「ChatGPTはホワイトボード、Cursorは作業机」

どちらか一方では不十分。併用が最強
→ 想像と実装、両方に強い武器を持つことが重要。




## 3. 要件定義をMarkdownで書く

🎯 目的：AIに正確な指示を出すための「設計図」を書く

バイブコーディングでは、Markdownで要件を記述することが 会話の起点 になります。
これは単なるメモではなく、AIにとっての仕様書になります。

### なぜMarkdown？

- ✅ 読みやすく、見出し構造で整理しやすい
- ✅ Cursorが.mdファイルの構造を理解しやすい
- ✅ 将来的にブログやドキュメントにも再利用できる

### 実際のテンプレート（雛形）

以下は基本形です：

```
# プロジェクト名：ToDoアプリ

## 機能一覧
- タスクの追加
- タスクの削除
- タスクの完了チェック

## 使用技術
- HTML / CSS / JavaScript

## 要望
- シンプルでスマホ対応のUI
- ローカルストレージでデータ保存
```

### 書き方のコツ

- #H1 にプロジェクト名を書く
- ##H2 で構成要素（機能、要望、使用技術）を分類
- 箇条書きで要件を具体的に
- 迷ったら「あとで追加予定」と明記しておく（AIが補完してくれる）

### 構成案の段階でもOK

```
# ギャラリーアプリ（構想中）

## やりたいこと
- 画像をカード表示
- タグフィルターで絞り込み

## 技術候補
- JavaScript + CSS Grid
- JSONで画像データ管理

## 状況
- まだ手をつけていない
```

→ こういった構想段階でも、Cursorはコードを提案してくれます！


## 4. CursorでAI開発体験

目的：Markdownで定義した要件をもとに、実際にAIにコーディングを依頼し、開発体験を行う。

### フロー全体の流れ（図解）

```
📄 Markdownで要件を記述（todo-spec.mdなど）
     ↓
🤖 AIチャットにファイルをドラッグ or 開いて会話開始
     ↓
🧠 「この要件でHTML + CSS + JSコードを作って」と依頼
     ↓
💻 コード提案が生成される（Applyで即適用）
     ↓
🌐 Live Serverでブラウザ動作確認
     ↓
🔄 修正・改善をAIと対話しながら反映
```



### 1. 要件ファイルを準備

以下のような簡単な内容でOK：
（例：todo-spec.md）
```
# プロジェクト名：ToDoアプリ

## 機能
- タスク追加／削除
- 完了チェック
- ローカルストレージ保存

## 技術
- HTML / CSS / JavaScript
- レスポンシブ対応
```

### 2. ファイルをAIに読み込ませる
.mdファイルを左側のサイドバーで選択
またはチャット欄に ドラッグ＆ドロップ
表示された「この要件を元にアプリを作って」とチャット送信


<a href="/images/uploads/vibe_coding-cursor-practice02-ai_dev01.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-ai_dev01.jpg"
         alt="cursor: Markdownで定義した要件をもとに、実際にAIにコーディングを依頼"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 3. コード提案 → Apply

- HTML、CSS、JSの3ファイルが提案される場合が多い
- 「Apply」ボタンを押すと、自動的に新規ファイルとして追加される
- エディタに自動で挿入されたら即編集可能

※補足
昨日、同じ要件でmdを作成し、cursorへ投げていた為、すでに作成済みのファイルが３つあったので）、それを感知し、レスポンシブデザインへとやや機能を自動で拡張してくれたようです。


<a href="/images/uploads/vibe_coding-cursor-practice02-ai_dev02.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-ai_dev02.jpg"
         alt="cursor: Markdownで定義 → コード提案 → Apply"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 4. Live Server で確認

- index.html を右クリック → Open with Live Server
- 実際の動作をすぐ確認可能
- UIの見た目や動作に違和感があれば、そのまま修正依頼


<a href="/images/uploads/vibe_coding-cursor-practice02-ai_dev03.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-ai_dev03.jpg"
         alt="cursor:Live Server で確認"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice02-ai_dev04.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-ai_dev04.jpg"
         alt="cursor: Live Server → Cheome"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 5. 修正依頼のコツ

- 例：完了ボタンを押したらタスクがグレーアウトするようにして
- 例：スマホで表示崩れるから、flexじゃなくgridに変えて
- → AIが差分のみ提案してくれる


<a href="/images/uploads/vibe_coding-cursor-practice02-ai_dev05.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-ai_dev05.jpg"
         alt="cursor: 修正依頼"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### Tips：途中でエラーが出たら？

- そのまま「このエラーを直して」と伝えるとAIが対応してくれる
- わからない場合は「どこを直せばいい？」と聞くのもOK
- 追加機能も随時指示できる（例：「並び替え機能を追加して」）

意図的にjsファイル名を変更してエラーを発生させて、エラーを直してと伝えましたが、CSSを修正され、JSのエラーに気づかなかったので、developertoolのエラーメッセージを伝えると修正してくれました。


<a href="/images/uploads/vibe_coding-cursor-practice02-ai_dev06error-fix.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-ai_dev06error-fix.jpg"
         alt="cursor: 途中でエラーが出たら？"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




### 補足：Cursorの強み

- ファイル構成を見て最適なファイルにコードを追加してくれる
- マルチファイル対応なので、複雑なUIでも対応可能
- 「Apply」や「Explain」など、直感的なボタンが用意されていて使いやすい


###  まとめ

| 手順 | 操作内容                   | 結果           |
| ---- | -------------------------- | -------------- |
| 1    | Markdownで要件を記述       | 仕様書の完成   |
| 2    | ファイルを読み込ませる     | AIが理解開始   |
| 3    | 「この仕様で作って」と依頼 | コード自動生成 |
| 4    | Apply → Live Server確認    | 即動作チェック |
| 5    | 修正・改善を指示           | AIが差分修正   |





## 5. 実践：ミニWebアプリを作ってみる

目的：実用的なWebアプリをバイブコーディングで構築し、Cursorの活用力をさらに高める。

### どのアプリを作る
候補：

- ✅ ToDoアプリ（基本形／復習）
- 💬 吹き出しUIチャット（対話録表示に応用）
- ⏰ タイマー／アラーム（setTimeout/setInterval）
- 🖼 画像ギャラリー（CSSグリッド × JavaScript切替）

今回は、**「吹き出しチャットUI」**のリッチバージョンを選び、以下のような機能強化を試してみましょう


###  1：要件定義（Markdownで構造化）

```
# 吹き出しチャットUI（改良版）

## 機能
- ユーザーとAIの対話形式を再現する
- アイコン・色・位置で会話を判別できる
- スマホでもレスポンシブ対応
- 会話はHTML側で記述（動的処理なし）

## レイアウト
- 左：AI（🤖）
- 右：ユーザー（🧑‍💻）
- 吹き出しに影／丸みを加える

## スタイル
- モダンな配色（明暗対応）
- 各キャラクターに固有の背景色
- CSSアニメーション（任意）

## 構成ファイル
- index.html
- style.css
```

<a href="/images/uploads/vibe_coding-cursor-practice02-make_app01.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app01.jpg"
         alt=" Cursor 実践：ミニWebアプリ:要件定義（Markdownで構造化）"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 2：生成→確認→Live Serverで確認

Cursorで生成 → コード確認・Live Serverで動作確認
チャット欄に以下を入力：
```
このchatui-spec.mdに従ってHTML/CSSでUIを作ってください。
```


<a href="/images/uploads/vibe_coding-cursor-practice02-make_app02.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app02.jpg"
         alt="Cursor 実践：ミニWebアプリ:生成→確認→Live Serverで確認"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br />
<a href="/images/uploads/vibe_coding-cursor-practice02-make_app03.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app03.jpg"
         alt="Cursor 実践：ミニWebアプリ:生成→確認→Live Serverで確認2"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


生成されたファイルをLive Serverで確認。違和感やミスがあれば、具体的な修正点を再指示してみましょう。<br />
（例：「ユーザー側の吹き出しの背景が濃すぎるので薄くして」など）。



<a href="/images/uploads/vibe_coding-cursor-practice02-make_app04.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app04.jpg"
         alt="Cursor 実践：ミニWebアプリ:生成→確認→Live Serverで確認3"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### 3：仕上げとコード理解

- HTML構造のブロック単位の説明を依頼
- CSSの変数化やMedia Queryの追加など、応用的な改善を依頼


<a href="/images/uploads/vibe_coding-cursor-practice02-make_app05.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app05.jpg"
         alt="Cursor 実践：ミニWebアプリ:HTML構造のブロック単位の説明を依頼"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

- より高度なテーマにしたい場合は Tailwind CSS 対応や、モーダル表示への変更もOK

<a href="/images/uploads/vibe_coding-cursor-practice02-make_app06.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app06.jpg"
         alt="Cursor 実践：ミニWebアプリ:Tailwind CSS 対応、モーダル表示へ変更"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

Tailwind CSS対応と、モーダル表示への変更した物をLive Serverで確認。


<a href="/images/uploads/vibe_coding-cursor-practice02-make_app07.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app07.jpg"
          alt="Cursor 実践：ミニWebアプリ:Tailwind CSS対応と、モーダル表示への変更した物をLive Serverで確認"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



<a href="/images/uploads/vibe_coding-cursor-practice02-make_app08.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice02-make_app08.jpg"
         alt="Cursor 実践：ミニWebアプリ:Tailwind CSS対応と、モーダル表示への変更した物をLive Serverで確認2"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

### 4：動作サンプル

以下のURLで製作したサンプルを確認できます。

{{< link-card url="https://humanxai.info/sample/chatui/" title="Cursor 実践：ミニWebアプリ" description="吹き出しUIチャット（対話録表示に応用）" image="/images/thumb1.jpg" >}}


## 6. 次回予告

### Webで動くチャットUIを作る

いい感じでAIと対話形式のUIのフロントが出来たので、今度はバックエンドでJavaScriptなどを活用して、AIと会話できる所まで進めたいと思います。

以上を踏まえ、次回

> **「バイブコーディング × Cursor 入門講座 03：Webで動くチャットUIを作る」**<br />
> 静的サイトでもリアルに動く！AI対話UIのはじめかた

を予定しています。
