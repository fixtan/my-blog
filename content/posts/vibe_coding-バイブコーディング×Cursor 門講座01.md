---
title: "[Vibe Coding] バイブコーディング × Cursor 入門講座 01 (Cursorの導入と基本操作)"
slug: vibe_coding-cursor-practice01
date: 2025-06-06T16:00:00.000Z
summary: "バイブコーディング × Cursor 入門講座 01 (Cursorの導入と基本操作)"
description: "バイブコーディング × Cursor 入門講座 01 (Cursorの導入と基本操作)"
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
weight: 9
image: /images/uploads/vibe_coding-cursor-practice01.webp
---

<center>
<img src="/images/uploads/vibe_coding-cursor-practice01.webp"
     alt="バイブコーディング × Cursor 入門講座 01"
     style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>


##  Cursorとは何か？

AIアシスタントと対話しながらコードを書く、次世代のエディタ

VSCode（Visual Studio Code）をベースにしており、操作感はVSCodeとほぼ同じですが、
**「コードへのAIチャット統合機能」** が圧倒的に強化されています。

## できること（ざっくり）

| 機能                                       | 説明                                     |
| ------------------------------------------ | ---------------------------------------- |
| 🤖 コードにコメントするとAIが補完してくれる | `// make this responsive` → すぐ実装     |
| 💬 どこでもAIチャット                       | 画面右 or インラインで自然文から命令可能 |
| 🧪 テスト生成やデバッグも一緒にできる       | 自動テストコード生成も可                 |
| ✏️ 複数ファイルを横断してAIが編集           | 指定した範囲だけ・全体設計も理解する     |


## 1-1. インストール手順

### Step 1：公式サイトにアクセス

{{< link-card url="https://www.cursor.sh/" title="Cursor - The AI Code Editor" description="Built to make you extraordinarily productive, Cursor is the best way to code with AI." image="https://www.cursor.com/ja/opengraph-image.png?375711d39ab904b7" >}}

### Step 2：OSにあわせてダウンロード

- Windows：.exe ファイル
- macOS：.dmg ファイル
- Linux：AppImage or .deb

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-download.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-download.jpg"
         alt="Cursor ダウンロード"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br />
<br />

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-download2.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-download2.jpg"
         alt="Cursor ダウンロード"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




### Step 3：インストールして起動

1. 通常のアプリケーションと同様にインストール


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install01.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install01.jpg"
         alt="Cursor インストール 01"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install02.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install02.jpg"
         alt="Cursor インストール 02"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install03.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install03.jpg"
         alt="Cursor インストール 03"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install04.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install04.jpg"
         alt="Cursor インストール 04"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install05.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install05.jpg"
         alt="Cursor インストール 05"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install06.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install06.jpg"
         alt="Cursor インストール 06"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install07.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install07.jpg"
         alt="Cursor インストール 07"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>





2. 起動後、VSCodeそっくりな画面が立ち上がるはずです


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install08.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install08.jpg"
         alt="Cursor インストール 08"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

サインアップ


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install09.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install09.jpg"
         alt="Cursor インストール 09"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

#### 「Import from VS Code」か「Skip and continue」何方を選ぶか？

【おすすめ】Import from VS Code（VSCodeから設定を引き継ぐ）

- キーバインド（ショートカット）
- 拡張機能
- テーマ（カラースキーム）
- ユーザー設定（settings.json）

➡ VSCodeに慣れている方には最適です。
そのまま「Import from VS Code」をクリックして問題ありません。

🔸 Skip and continue（真っさらな状態から始める）

- 最小構成で起動したいとき用
- 拡張機能や設定をゼロから組み直したいときに

➡ VSCodeの設定を一切持ち込みたくない場合はこちらを選びます。

#### 🚀 今後に影響する？

- 後からでも設定や拡張機能はカスタマイズ可能です。
- 今の段階では「Import from VS Code」で大丈夫です。


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install10.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install10.jpg"
         alt="Cursor インストール 10"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## 1-2. OpenAI APIキーの設定

CursorはChatGPTのAPIキーを使ってAIとやり取りします。

インストール後、OpenAI APIキーの入力が出なかった場合は、以下の手順で手動設定できます。

### OpenAI APIキーの入力手順（手動）

1. 画面右上の歯車アイコン（⚙）をクリック
  - → メニューから Settings を選択

2. 左側の「Models」→「API  Keys」

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-settings01.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-settings01.jpg"
         alt="Cursor 設定 APIキー 01"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-settings02.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-settings02.jpg"
         alt="Cursor 設定 APIキー 02"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### Step 1：OpenAIのAPIキーを取得

👉 https://platform.openai.com/account/api-keys

名前は「Cursor」にしました。

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-apikey.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-apikey.jpg"
         alt="Cursor 設定 OpenAI API KEY "
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### Step 2：Cursor起動時に表示される「APIキーを入力」画面にコピペ

入力後は保存されるので次回から不要です

>✅ GPT-4（gpt-4-0125-previewなど）にも対応しています（料金に注意）

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-apikey2.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-apikey2.jpg"
         alt="Cursor 設定 OpenAI API KEY 2"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


#### 補足：CursorのAPIキー保存挙動

- 「Verify」で正常に通過すれば、内部的に保存されています。
- 設定画面を閉じて再度開くと セキュリティの都合上「空」に見えるだけ です。
- 実際には ~/.cursor ディレクトリなどのローカル設定にキーが保存されています。


#### 動作確認の方法（簡単テスト）

右上の New Chat に
　　📝「このエディタで何ができますか？」
　　など入力して送信

AIがレスポンスすれば 連携完了！


チャット画面がない場合は以下。

1. View -> Open View
2. New Chat

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-newchat1.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-newchat1.jpg"
         alt="Cursor チャット動作テスト1"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>
<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-newchat2.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-newchat2.jpg"
         alt="Cursor チャット動作テスト2"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>
<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-newchat3.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-newchat3.jpg"
         alt="Cursor チャット動作テスト3"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>


## 1-3. 最初に試すおすすめ操作

### ① コードにコメントを打って、AIに書いてもらう

```
// create a responsive navigation bar
```
これだけで、AIがナビゲーションバーを生成します。



###  ② チャットから直接依頼する

- 右下または右サイドバーにある「Chat」ボタンを押す

- 「3つのカードを並べて、ホバーで色が変わるデザインにして」などと書く

### ③ .md ファイルで要件を作る（次回以降で詳しく）

```
# ToDoアプリの要件定義

## 機能
- タスクを追加できる
- タスクを削除できる
- タスクの完了状態を切り替えられる

## UI
- 入力フォーム（テキストボックス＋追加ボタン）
- タスクリスト（各タスクに完了チェック＋削除ボタン）

## 技術スタック
- HTML / CSS / JavaScript（Vanilla）
```
このようなMarkdown要件から、プロトタイプを生成可能。

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md01.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md01.jpg"
         alt=".md ファイルで要件を作る 01"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>
WEB(Hugo)用に作成した、my-blogフォルダ内に、cursorフォルダを作り、その中にtodo-spec.mdを作成。
ファイル作成後に画面左下にgit云々のメッセージがあり、cursorがGIT用に作られたフォルダである事を感知したようです。

#### ✅ 確認まとめ
| 項目                  | 状態                                                |
| --------------------- | --------------------------------------------------- |
| `todo-spec.md` の構成 | Markdown構文も見出しも適切 ✅                        |
| 保存場所              | `my-blog/cursor/` → ローカル環境での管理にも最適 ✅  |
| Git連携               | CursorがGitリポジトリを自動認識（メッセージ表示） ✅ |
| エディタ右側のAI      | プロンプト応答も確認済み ✅                          |



#### 🔹3. 要件定義をAIに読ませて構造化する

Markdownファイルを「プロンプトの前提知識（コンテキスト）」として与えた上で、AIに以下のように指示

1. 右のAIチャットエリア下部の ＋ Add Context をクリック
todo-spec.md を選択（またはドラッグで追加）

2. チャット欄に入力

```
この要件定義をもとに、ToDoアプリのHTML/CSS/JS構造を提案してください。
まず、全体構成を箇条書きで提示し、その後にベースコードを作ってください。
```

補足：

- 構造を最初に提示させることで、コード生成の見通しが立ちやすくなります。
- 生成されたコードは、Cursor内で直接実行・修正・再指示が可能です。



<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md02.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md02.jpg"
         alt=".md ファイルで要件を作る 02"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>
<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md03.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md03.jpg"
         alt=".md ファイルで要件を作る 03"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

mdファイル選択後、プロンプトを投げるとコードを自動生成。

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md04.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md04.jpg"
         alt=".md ファイルで要件を作る 04"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

現在の状況
- todo-spec.md に要件定義 → AIが正しく解釈して構成を理解
- チャットウィンドウ右側で：
  - app.js（JavaScript）
  - index.html（HTML）
  - style.css（CSS）
- それぞれのコードが提示されており、ChatGPTのように自然な説明付きで表示

次にできること（おすすめ順）
1. ファイルへ自動反映（Apply）
  - 各コードブロックの上部にある「Apply to todo-spec.md」などのボタンを押すと、コードを選択したファイルや新規ファイルに挿入可能。

2. プロジェクト構造を作る
  - 同じフォルダに以下を作成：

```
index.html
style.css
app.js
```
  - 提案されたコードをコピペまたはApplyで配置。

3. Live Serverなどで動作確認
  - HTMLをブラウザで開いて、実際にToDoアプリを操作してみる。

4. AIへのフィードバック or 改修依頼

  - 右側チャットに以下のように入力：

```
チェックしたタスクはリストの一番下に移動するようにして。
```
または
```
削除ボタンをもっと目立たせてください（CSS変更）
```

初めてで不慣れな為、3つのファイルは、手動でコピペして作成・動作を確認。
index.htmlファイルをChromeにドロップした結果。

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md05.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md05.jpg"
         alt=".md ファイルで要件を作る 05"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md06.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md06.jpg"
         alt=".md ファイルで要件を作る 06"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>


 #### バイブコーディングの本質

- 🎯 要件定義 → 自然文で伝える
- ⚙️ AIが設計・実装 → ファイルに展開
- 🔁 ユーザーが操作しながら微修正・拡張を指示

ここまでで、第一歩をクリア。


###　操作ミス

「Apply to todo-spec.md」を押すと、緑色の入力ボックスが表示される。

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-md05-1.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-md05-1.jpg"
         alt=".md ファイルで要件を作る 06"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

緑色の枠は「AI提案のコードをこの位置に挿入するプレビュー」。

今の状態
- Apply to todo-spec.md を押したことで、挿入対象ファイルが todo-spec.md に指定されてしまった。
- つまり、「index.html のコードを todo-spec.md に貼り付けようとしている状態」です。
- これは誤りです。HTMLやCSS、JSは .md（マークダウン）に貼るのではなく、それぞれの専用ファイルを作成すべきです。

正しい手順（今後の流れ）
1. プロジェクトフォルダに以下のファイルを新規作成
  - index.html
  - style.css
  - app.js

2. それぞれのコードをコピー＆ペースト

  - Cursorの右側チャットウィンドウに表示されたコードブロックからコピー。
  - 対応するファイルへ貼り付け。

3. または：
  - コードブロック右上にある … から Apply to file を選んで、目的のファイル（例：index.html）を選択。


 操作の補足
- 緑のボックスは「仮挿入」状態です。
- クリックで確定挿入、またはキャンセル可能。
- 間違ったファイルを指定してしまったら、コードブロック右上のボタン（Apply to file）を再度選び直すことで回避できます。



## 1-4. 日本語でも使えるの？

はい、日本語でも十分動作します。

ただし、プロンプトの精度を高めたい時は以下のように調整するとベター：

| × あいまい指示   | ○ 改善されたプロンプト                          |
| ---------------- | ----------------------------------------------- |
| ボタンを設置して | `右上に「ログイン」ボタンを追加してください。`  |
| 綺麗なデザインで | `Card UIを使ったモダンなデザインでお願いします` |


### 日本語化

メニュー:「View」→「Command Palette」<br>
※ ショートカット（コマンドパレット）: (Ctrl+Shift+P)

<a href="/images/uploads/vibe_coding-cursor-practice01-language01.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-language01.jpg"
         alt="cursor 日本語化 01"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

リストから「Configure Display Language」を選択。

<a href="/images/uploads/vibe_coding-cursor-practice01-language02.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-language02.jpg"
         alt="cursor 日本語化 02"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

日本語が表示されない場合。

<a href="/images/uploads/vibe_coding-cursor-practice01-language03.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-language03.jpg"
         alt="cursor 日本語化 03"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

コマンドパレット (Ctrl+Shift+P)　→　「install extensions」

<a href="/images/uploads/vibe_coding-cursor-practice01-language04.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-language04.jpg"
         alt="cursor 日本語化 04"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

VSCodeの拡張機能のインストールと同じ画面が開くので「japanese」と入力し表示された物をインストール。

<a href="/images/uploads/vibe_coding-cursor-practice01-language05.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-language05.jpg"
         alt="cursor 日本語化 05"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

インストール後、コマンドパレットから、「Configure Display Language」を選択すると日本語が表示され適用。

<a href="/images/uploads/vibe_coding-cursor-practice01-language06.jpg">
<img src="/images/uploads/vibe_coding-cursor-practice01-language06.jpg"
         alt="cursor 日本語化 06"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




## よく使うショートカット

| 操作内容               | ショートカット（Win/Mac）    |
| ---------------------- | ---------------------------- |
| AIチャット起動         | `Cmd/Ctrl + Shift + L`       |
| インラインでAI呼び出し | `Cmd/Ctrl + I`               |
| コードに対するAI編集   | `Cmd/Ctrl + J`（範囲選択後） |


## 今後の展開

Cursorはただのエディタではなく、

- コーディング補助

- リファクタリング

- テスト

- UI/UX調整

などの全てをAIパートナーと共に行う新しい開発体験を提供します。
