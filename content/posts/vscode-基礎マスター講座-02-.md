---
title: "[VSCode] 基礎マスター講座 02 : Prettier,Markdown All in One"
slug: vscode-basic-course-02
summary: AIの指導による VSCode 基礎マスター講座 02 Prettier , Markdown All in One
description: AIの指導による VSCode 基礎マスター講座 02 Prettier , Markdown All in One
date: 2025-06-02T16:39:00.000Z
draft: false
author: lain
categories:
  - VSCode
tags:
  - Prettier
  - Markdown All in One
  - markdownlint
  - Markdown Preview Enhanced
weight: 8
image: /images/uploads/vscode-basic-course-02.webp
---

 <a href="/images/uploads/vscode-basic-course-02.webp" target="_blank">
<img src="/images/uploads/vscode-basic-course-02.webp" alt="AIの指導による VSCode 基礎マスター講座 02 Prettier , Markdown All in One"  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

## はじめに

前回の続きをやっていきます。

本講座の講師は「ChatGPT 4o」で、受講生である私のスキルや、Hugo でのローカル記事作成環境を作る事や、操作に慣れることをベースに基本から学習する内容になっていますので、Hugo 関連情報が多くなってますがご了承ください。

{{< link-card url="https://humanxai.info/posts/vscode-basic-course-01/" title="[VSCode] 基礎マスター講座 01 : ショートカット、編集の基本、Front Matter CMS" description="AIの指導による VSCode 基礎マスター講座 01 編集,ショートカット、Front Matter CMS" image="https://humanxai.info/images/uploads/vscode-basic-course-01.webp" >}}

## 🧭 ステップ 2：拡張機能の活用と設定調整

### 1. Prettier（コード整形）

Prettier は、コードのフォーマットを自動で整えてくれる拡張機能です。特に、Markdown や HTML、CSS などの整形に役立ちます。

**✅ インストール方法**

1. VSCode の左側の拡張機能アイコン（四角形が 4 つ並んだアイコン）をクリック。
2. 検索バーに「Prettier」と入力。
3. 「Prettier - Code formatter」を選択し、インストール。

 <a href="/images/uploads/vscode_prettier-code-formatter.jpg" target="_blank">
<img src="/images/uploads/vscode_prettier-code-formatter.jpg" alt="Prettier - Code formatter"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br />
<br />

**⚙️ 設定方法**

1. Ctrl + , で設定を開く。
2. 検索バーに「Format On Save」と入力。
3. 「Editor: Format On Save」にチェックを入れる。

 <a href="/images/uploads/vscode-editor-format-on-save.jpg" target="_blank">
<img src="/images/uploads/vscode-editor-format-on-save.jpg" alt="Prettier - Code formatter"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

4. 「Editor: Default Formatter」を「Prettier - Code formatter」に設定。

 <a href="/images/uploads/vscode-editor-default-formatter.jpg" target="_blank">
<img src="/images/uploads/vscode-editor-default-formatter.jpg" alt="Prettier - Code formatter"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

これで、ファイル保存時に自動でコードが整形されるようになります。

### 2. Markdown All in One（目次生成・補完）

Markdown All in One は、Markdown の編集を効率化するための拡張機能です。

目次の自動生成や、見出しの補完、リストの自動補完など、多くの便利な機能が備わっています。

#### ✅ インストール方法

1. 拡張機能アイコンをクリック。
2. 検索バーに「Markdown All in One」と入力。
3. 該当の拡張機能を選択し、インストール。

 <a href="/images/uploads/vscode-markdown-all-in-one.jpg" target="_blank">
<img src="/images/uploads/vscode-markdown-all-in-one.jpg" alt="Markdown All in One（目次生成・補完）"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

#### ⚙️ 主な機能とショートカット

- 目次の自動生成：Ctrl + Shift + P → 「Create Table of Contents」
- 見出しレベルの変更：

  - レベルアップ：Ctrl + Shift + ]
  - レベルダウン：Ctrl + Shift + [

- リストの自動補完：リストの次の行に自動で記号が挿入されます。
- ェックリストの切り替え：Alt + C

### 3. settings.json の基本設定

VSCode の設定は、settings.json ファイルを編集することでカスタマイズできます。

#### ✅ 開き方

1. Ctrl + Shift + P を押してコマンドパレットを開く。

2. 「Preferences: Open Settings (JSON)」と入力し、選択。

⚙️ 例：Markdown に特化した設定

```json
{
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "editor.wordWrap": "on",
  "editor.renderWhitespace": "all"
}
```

この設定により、Markdown ファイル保存時に自動でフォーマットが適用され、長い行は折り返され、空白文字も表示されるようになります。

## ✅ 次のステップ

これらの設定が完了したら、実際に Markdown ファイルを編集し、各機能が期待通りに動作するか確認してみてください。

また、さらに効率的な編集を目指す場合は、以下の拡張機能の導入も検討してみてください：

- markdownlint：Markdown の文法チェックを行う拡張機能。

- Markdown Preview Enhanced：Markdown のプレビュー機能を強化する拡張機能。

## おまけ: AIからの提案

settings.jsonに追記して、AIに見せると、改善案を教えてくれたのでその紹介です。



 <a href="/images/uploads/vscode-settings-json.jpg" target="_blank">
<img src="/images/uploads/vscode-settings-json.jpg" alt="Markdown All in One（目次生成・補完）"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



✅ 評価と解説

🔹 全体的にOKな点

```
"editor.minimap.enabled": false,
"security.workspace.trust.enabled": false,
```

- サイドのミニマップを非表示にする設定や、
- 信頼されていないワークスペースの警告を無効化する設定もあり、操作の快適性が上がっています。

🔹 Python設定
```
"[python]": {
  "editor.formatOnType": true
}
```
- Pythonファイルでインデント時の自動フォーマットが有効。
→ これは pylance や black を入れていると、さらに効果的になります。

🔹 Markdown関連

```
"[markdown]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "yzhang.markdown-all-in-one"
}
```
- Markdownファイルに対して、保存時のフォーマットが有効。
- フォーマッターも Markdown All in One に指定済でOKです！

🔹 共通設定

```
"editor.wordWrap": "on",
"editor.renderWhitespace": "all"
```
- 行が長くなったときの自動折り返しが有効。
- 半角スペースやタブを視覚的に表示（空白の見落とし防止に便利）。


### 💡 アドバイス（改善の余地）

現状でも十分素晴らしいのですが、もしもう少しだけ補足したい場合：

1. "editor.tabSize" の追加（インデント幅）

```
"editor.tabSize": 2,
```
- MarkdownやHTMLでは 2 の方が見やすいケースも多いです（お好みで）。


2. "files.trimTrailingWhitespace" の追加（無駄な空白削除）

```
"files.trimTrailingWhitespace": true,
```
- 行末の不要なスペースを自動で削除してくれます。

3. "files.insertFinalNewline"（末尾に改行を入れる）
```
"files.insertFinalNewline": true,
```
- UNIX系の慣習として、ファイル末尾に空行が1つあるのが一般的。



✅ 現在の追加ポイントとその効果
| 設定                                 | 内容                     | 効果                                  |
| ------------------------------------ | ------------------------ | ------------------------------------- |
| "editor.tabSize": 2                  | タブ幅を2スペースに      | Markdown・HTML等の見た目がすっきり    |
| "files.trimTrailingWhitespace": true | 行末の無駄な空白を削除   | 不要な空白を自動でクリーンアップ      |
| "files.insertFinalNewline": true     | ファイル末尾に改行を追加 | UNIX系の標準に準拠、Gitでの差分が安定 |


## 📘 次のステップ（ステップ2-2）候補

この勢いで、次のような内容に進むこともできます：

### 🔸 ステップ2-2：拡張機能ごとの便利な使い方
- Markdown All in One の TOC（目次）自動生成
- Prettier のフォーマッタ切替や無視ルール（.prettierignore）の書き方
- Path Intellisense の効果的な使い方

または

### 🔸 ステップ3：プロジェクト単位の .vscode/settings.json 運用

- ユーザー全体の設定ではなく、プロジェクト単位で設定を切り分ける
- チームでの共有やCMS別設定などに便利

<br>

---
