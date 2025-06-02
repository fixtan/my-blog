---
title: "[VSCode] 基礎マスター講座 01 : ショートカット、編集の基本、Front Matter CMS"
slug: vscode-basic-course-01
summary: AIの指導による VSCode 基礎マスター講座 01 編集,ショートカット、Front Matter CMS
description: AIの指導による VSCode 基礎マスター講座 01 編集,ショートカット、Front Matter CMS
date: 2025-06-02T15:39:00.000Z
draft: false
author: lain
categories:
  - VSCode
tags:
  - 基礎学習
  - Front Matter CMS
  - Markdown
  - ショートカット
  - Hugo
weight: 8
image: /images/uploads/vscode-basic-course-01.webp
---
<center>
<a href="/images/uploads/" target="_blank">
<img src="/images/uploads/" 
     alt="【Decap CMS】content/posts 以外のディレクトリの記事を編集"
     style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>
</center>



## はじめに

[Decap CMS] によるネット環境での記事作成環境が整いつつあったのですが、CMS側のバグにより記事編集が思うようにできなくなった為、ローカル環境で、Hugoの記事作成をする環境を作成していて、VSCoddeで出来る事を知りました。

CMSのバグについては別件でまとめていて、AIの方でも記事を1つ書いてくれましたので、同様の問題でお困りの方がおられましたら其方を参照ください。

VSCodeで環境構築する際、AIの情報を聞いても不明瞭な点が結構あった為、VSCodeを一度ゼロから学ぼうと思い立ちAIに相談したところ、「VSCode基礎マスター講座」を開いてくれるとの事で、その学習内容を備忘録メモも兼ねて記事にしてみます。


## 📘 ステップ0：前提確認

### VSCode のインストール確認

※インストールずみなので割愛。

### Hugo プロジェクトをVSCodeで開ける状態か？

まず、Front Matter CMSプラグインをインストールします。
拡張機能マーケットプレイスを開き
**「Front Matter CMS」**<br>
と入力すると一番上に表示されるブルーのアイコンがそうです。

次に、「Front Matter CMS」の設定ファイルを作成します。
Hugoサーバーが起動する、ブログ記事のルートディレクトリに以下のフォルダ/ファイルを作成。

[My-blog]<br>
　└─[.frontmatter]<br>
　　　　└─[config.json]<br>


次に[config.json]内に以下を記述。
ほぼデフォルト設定のまま使ってますが、fieldsフィードはカスタムしてるので、その辺りは環境に合わせて変更してください。

```
{
  "contentFolder": "content",
  "mediaFolder": "static/images/uploads",
  "publicFolder": "/images/uploads",
  "collections": [
    {
      "name": "記事",
      "folder": "content/posts",
      "format": "md",
      "fields": [
        { "name": "title", "type": "string" },
        { "name": "slug", "type": "string" },
        { "name": "summary", "type": "string" },
        { "name": "description", "type": "string" },
        { "name": "date", "type": "datetime" },
        { "name": "draft", "type": "boolean" },
        { "name": "author", "type": "string" },
        { "name": "categories", "type": "list", "default": [] },
        { "name": "tags", "type": "list", "default": [] },
        { "name": "weight", "type": "number" },
        { "name": "image", "type": "string" }
      ]
    },
  ],
  "frontmatter.preview.host": "http://localhost:1313",
  "frontmatter.preview.port": 1313
}

```

重要なのは、
  "frontmatter.preview.host": "http://localhost:1313",
  "frontmatter.preview.port": 1313
の部分で、この記述がある事で、「Front Matter CMS」プラグインからHugoサーバーを起動できるようになります。

ここまで出来たらVSCodeからＨugoサーバーを起動し、プレビュー表示して見ます。

「Front Matter CMS」インストール完了後、VSCode左のアイコンリストに[FM]が表示されるのでクリック。

次に、

[コマンド] -> [サーバーを起動]

を実行すると、ターミナルが起動して、Hugoサーバーが動きます。

もしエラーが出る場合は、エラーメッセージを参考にHugo側の設定を見直して下さい。

VSCode左にあるアイコンから一番上の[エクスプローラー]を選択し、ブログフォルダのルートディレクトリを選択。
次に、[content]-[posts]の中から[.md]形式の記事を開きます。



ただ、Hugoで記事を表示する際にCSSでカスタム設定してる場合、実際の記事画面とは異なる為、Hugoサーバーのプレビューウインドウを表示します。

VSCode左にあるアイコンから[Front Matter CMS]を選択し、

[コマンド] -> [プレビューを表示]

を選択すると、画面右側に、Hugoサーバーのプレビューウインドウが表示されるので現在編集中の記事を選択すれば、実際の記事画面を見ながら作成する事が出来ます。

 <a href="/images/uploads/vscode-hugo-view.jpg" target="_blank">
<img src="/images/uploads/vscode-hugo-view.jpg" alt="Hugoサーバーのプレビューウインドウ"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




### Markdownプレビュー（Ctrl+K V）の動作確認

記事をひらいた状態で「Ctrl+K、V」と入力すると、Markdownプレビューを開くことが出来きま、画面分割して表示すればプレビューを参照しつつ記事を書くことが出来ます。


<a href="/images/uploads/vscode-markdown-view.jpg" target="_blank">
<img src="/images/uploads/vscode-markdown-view.jpg" alt="Hugoサーバーのプレビューウインドウ"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

## 📗 ステップ1：編集の基本操作


### 📝『VSCode基礎マスター講座』ステップ1：編集の基本操作編

まずは基礎的な操作から慣れていきましょう。<br>
以下の操作を実際に行ってみてください。

#### ① ファイル・フォルダの基本操作（左ペイン）

- 左側の エクスプローラー（ファイルツリー） を使って、新規ファイルやフォルダを作成します。
- 例：content/posts 内に新規ファイル test.md を作成。

**手順**

1. VSCodeの左ペインのファイルツリーで「content/posts」を右クリック。
2. 「新しいファイル」を選択して、test.md と入力して作成。



#### ② Markdownファイルの編集とプレビュー

- Markdownを編集し、即座にプレビューする方法を習得します。

手順

1. 新しく作ったtest.mdを開き、以下の内容を入力します。

```
# はじめてのMarkdown

- 箇条書き1
- 箇条書き2
- 箇条書き3
```


2. プレビューを表示

- ショートカットキー：Ctrl+K → V（Windowsの場合）
- または右上のアイコンからMarkdownプレビューを表示。


#### ③ VSCode基本ショートカット（頻出ショートカット）

VSCodeの効率を上げるために、最低限の基本ショートカットを覚えておきましょう。

|操作|	ショートカット|	説明|
|---|---|---|
|コマンドパレット|	Ctrl+Shift+P|	VSCodeのすべてのコマンドを検索・実行|
|クイックオープン|	Ctrl+P|	ファイルを名前で即座に検索・開く|
|設定画面を開く|	Ctrl+,|	VSCode設定画面を表示|
|ターミナルを開く|	Ctrl+@ または Ctrl+Shift+@|	VSCode内に内蔵ターミナルを表示|



## 📌 実践していただくこと（まとめ）

この3つを実際にやってみて、以下を報告していただけると次のステップに進みやすいです：

「test.md」ファイルの作成に成功したか？

Markdownの内容を入力し、プレビュー表示が確認できたか？

基本ショートカットが使えるかを試した感想や、特に覚えておきたいと感じたショートカットなど


## 問題点

ターミナルを開く	Ctrl+@ または Ctrl+Shift+@　が動作しない問題発生。

環境は、OS：Windows11で、キーボードは、apple magickeyboard、Logicool G913TKLで２つとも動作しない。


## 🛠 ショートカットキー問題（ターミナルを開く）の解決法

ご使用のキーボードがApple Magic KeyboardやLogicool G913TKLという特殊な環境のため、デフォルトのショートカットキーが機能しない可能性があります。

### ⚙ 対処方法①（別のショートカットキーを試す）
Windows環境では、VSCodeでターミナルを開く標準のショートカットは以下があります。

Ctrl + `（バッククオート）

一般的にはこのショートカットキーが推奨です。

まずはこちらを試してみてください。

### ⚙ 対処方法②（ショートカットキーのカスタマイズ）
もし、上記でも開かない場合、ショートカットキーを手動でカスタマイズできます。

手順：

Ctrl + Shift + P で 「コマンドパレット」 を開く。

「keyboard shortcuts」と入力し、「基本設定: キーボード ショートカットを開く」を選択。

検索バーで「ターミナルを開く」と入力し、「workbench.action.terminal.toggleTerminal」を探します。

クリックして好きなキーの組み合わせに変更（例：Ctrl+Alt+Tなど）。

### 💡 ショートカットキーの設定例（推奨）

以下の設定がWindowsで使いやすくおすすめです。

|操作	|ショートカット|
|-|-|
|ターミナルを開く|	Ctrl + Alt + T|
|ファイル検索（クイックオープン）|	Ctrl + P（標準）|
|コマンドパレット|	Ctrl + Shift + P（標準）|

