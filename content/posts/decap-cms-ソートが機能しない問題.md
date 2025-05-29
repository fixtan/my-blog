---
title: "[Decap CMS] ソートが機能しない問題"
slug: DecapCMS- sort-trouble
date: 2025-05-29T18:03:00.000Z
draft: false
author: lain
image: /images/uploads/decapcms-sort-trouble.png
summary: Decap CMSでソート機能が上手く動かない原因と解決方法の紹介
categories:
  - Decap CMS
tags:
  - カスタム
  - ソート
weight: 9
---
<center>
<img src="/images/uploads/decapcms-sort-trouble.png" alt="" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>


## はじめに

Decap CMSには、ソート機能があるのですが、導入当初からうまく機能していなかったようなので、問題を調べて解決までの流れを備忘録記事にまとめました。

## AIに相談

AIに聞いてみると以下のような回答：

>Decap CMS（旧 Netlify CMS）の管理画面で「日付順ソートが効かない」または「投稿一覧の順序がバラバラになる」問題は、config.yml で指定する sortable_fields や sortable の扱い、および date フィールドの定義の不備が原因であることがよくあります。


## ✅ 原因と対策

Decap CMS（旧 Netlify CMS）は、コレクションの一覧ビューでソート可能な項目を制限しています。

この sortable_fields を config.yml に明示しない場合

** 日付やタイトルでソートできない（あるいは不安定） **

ソートは一応 UI 上には出るけど「効かない or 順序が壊れる」ようです。

調べて見ると、以下のようになっており、

```
collections:
  - name: "post"
    label: "記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"

    fields:
      - { label: "タイトル", name: "title", widget: "string" }
      - { label: "スラッグ", name: "slug", widget: "string", required: false }
      - { label: "日付", name: "date", widget: "datetime" }
      - { label: "下書き", name: "draft", widget: "boolean", default: false }
      - { label: "著者", name: "author", widget: "string", default: "lain" }
      - { label: "画像", name: "image", widget: "image" }
      - { label: "概要", name: "summary", widget: "text", required: false }
      - { label: "本文", name: "body", widget: "markdown" }  
      - { label: "カテゴリ", name: "categories", widget: "list", default: ["未分類"] }
      - { label: "タグ", name: "tags", widget: "list" , field: { name: "tag", widget: "string" } }
      - { label: "表示順（weight）", name: "weight", widget: "number", required: false, default: 20 }

```

sortable_fieldsが抜けていたため、追加

```
collections:
  - name: "post"
    label: "記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"
    sortable_fields: ["date", "title", "author"]
    fields:
      - { label: "タイトル", name: "title", widget: "string" }
      - { label: "スラッグ", name: "slug", widget: "string", required: false }
      - { label: "日付", name: "date", widget: "datetime" }
      - { label: "下書き", name: "draft", widget: "boolean", default: false }
      - { label: "著者", name: "author", widget: "string", default: "lain" }
      - { label: "画像", name: "image", widget: "image" }
      - { label: "概要", name: "summary", widget: "text", required: false }
      - { label: "本文", name: "body", widget: "markdown" }  
      - { label: "カテゴリ", name: "categories", widget: "list", default: ["未分類"] }
      - { label: "タグ", name: "tags", widget: "list" , field: { name: "tag", widget: "string" } }
      - { label: "表示順（weight）", name: "weight", widget: "number", required: false, default: 20 }

```

これで git push し、netlifyでクリーンデプロイ。

## 日付をISO 8601形式に統一

上手く行くと思ったのですが、まだ解決しなかったので、さらに調べると、記事の日付のフォーマットがバラバラになっていたようなので、仕方なく ISO 8601形式（または YYYY-MM-DD）に統一しました。

これで一応、最新記事が一番上に表示されるようになりました。

ただ、やや動作は不安定で、何度かソートすると記事がバラバラになり、その後に昇順で並ぶようです…。

## Githubのソートに関するトラブルTip


githubにソート問題のトラブルTipがありました。

>Sorting with custom date format seems wrong #4637
><https://github.com/decaporg/decap-cms/issues/4637>

やや古い情報ですが、

>So is what I'm seeing that the current workaround would be for me to convert all my dates to YYYY-MM-DD so that sorting as a string works as expected? I currently have everything as MM/DD/YYYY, but I could run a regex replace on my date fields if that will solve my sorting problem.
>
>Yeah that seems to be the case. Don't mix and match the format. Either use ISO format or custom format (e.g. YYYY-MM-DD HH:mm:ss)

との事で、一応、ISO 8601形式に統一して、それっぽく動いてるようなので一応これで行きたいと思います。



## ✅ Decap CMSのソートの裏側（ざっくり技術構造）

※Decap CMSのソート技術に関するAIの回答内容の引用です

です。つまり：

🔄 データ取得方法
- 記事ファイル（Markdown）を [GitHub API or Git Gateway] で取得
- JavaScript（React）で一覧を生成して表示
- ソートは 内部的にJavaScriptで配列をソート

🧠 ソート処理の実情
JavaScriptの Array.prototype.sort() に近い処理をしており、

```
posts.sort((a, b) => new Date(a.date) - new Date(b.date))
```

…みたいな処理を内部でしてると考えられます。

💥 問題になるのは？
- 日付が混在（ISO形式・"YYYY-MM-DD"・"2025/05/01"など）
- 日付が string 型として比較されるケース
- 内部で Date.parse() が失敗するフォーマットがある
- 言語設定・ローカライズの影響（en-US vs ja-JP）

❗だから「文字列としての安定比較」が必要
あなたが引用されたGitHubの回答がまさにそれです：

> 「すべての date を YYYY-MM-DD か YYYY-MM-DDTHH:mm:ss に揃えれば、文字列として安定にソートできる」


