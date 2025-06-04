---
title: "[Decap CMS] Config Errors: 'collections[0].fields' fields names must be
  unique"
slug: DecapCMS-Error-01
date: 2025-05-24T12:18:00.000Z
draft: false
author: lain
image: /images/uploads/はてなブログ　アイキャッチ画像　はてブ　blog-3-.png
summary: Netlify CMS/Decap CMSのカスタム中、ログインしようとするとエラーメッセージがでた際のトラブルTip
categories:
  - Decap CMS
tags:
  - ERROR
  - collections
  - config.yml
weight: 9
---
<center><img src="/images/uploads/はてなブログ　アイキャッチ画像　はてブ　blog-3-.png" width="80%"></center>



Netlify CMSのカスタム中、ログインしようとするとエラーメッセージ。

`Error loading the CMS configuration
Config Errors:
'collections[0].fields' fields names must be unique
Check your config.yml file.`
<br>

![](/images/uploads/イメージ16068.jpg)

<br>

## 原因

ブログに「タグ + カテゴリ」を追加しようとした際に起こったエラーのようで

/static/admin/config.yml

に、

```
collections:
  - name: "posts"
    label: "記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "タイトル", name: "title", widget: "string" }
      - { label: "日付", name: "date", widget: "datetime" }
      - { label: "下書き", name: "draft", widget: "boolean", default: false }
      - { label: "著者", name: "author", widget: "string", default: "lain" }
      - { label: "アイキャッチ画像", name: "image", widget: "image", required: false }
      - { label: "概要（抜粋）", name: "summary", widget: "string", required: false, default: "（抜粋がありません）" }
      - { label: "カテゴリ", name: "categories", widget: "list", required: false, default: ["その他"] }
      - { label: "タグ", name: "tags", widget: "list", required: false }
      - { label: "本文", name: "body", widget: "markdown" }

      - label: "カテゴリ"
        name: "categories"
        widget: "list"
        required: false

      - label: "タグ"
        name: "tags"
        widget: "list"
        required: false
```

を追加したのですが、

「カテゴリ」と「タグ」を２つの追加してしまったのが原因のようです。

## ✨ どちらを残すべき？

今後管理のしやすさやコメントの追加を考えるなら、インデント記法（長い書き方）の方が、構造の可視性と拡張性に優れています。

### ✅ 1. コメントを追加しやすい

* label: "タグ"
  name: "tags"
  widget: "list"
  required: false

ポイント： 短縮記法ではコメントが付けづらい・読みづらくなります。

### ✅ 2. 後でフィールドを増やしたいとき柔軟

* label: "画像"
  name: "image"
  widget: "image"
  required: false
  media_folder: "static/uploads"
  public_folder: "/uploads"

ポイント： 設定項目が増えてもインデント記法なら綺麗に保てます。

### ✅ 3. 誤りに気付きやすい

構造が1行に詰まっていないので、nameの重複や設定ミスを目視で発見しやすいです。

### ✅ 逆に短縮記法が向いてるのは？

・単純で繰り返しの多いフィールドだけ（例：タイトルや日付）
・読みやすさより行数の短さを優先したいとき

## 💡 実運用のおすすめスタイル

・title, date, draft → 短縮記法でもOK（シンプルなので）
・categories, tags, image, body, カスタム項目 → インデント記法で拡張性重視

## 🎯 まとめ

### インデント記法

　特徴：　読みやすい・コメント追加OK
　場面：　中〜大規模CMS設定、保守が必要な場合

### 短縮記法

　特徴：　行数少なめ・軽い設定に便利
　場面：　小規模プロジェクトや一時的な用途

以上を踏まえ、以下に変更。

```
collections:
  - name: "posts"
    label: "記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"
    fields:
      - label: "タイトル"
        name: "title"
        widget: "string"

      - label: "日付"
        name: "date"
        widget: "datetime"

      - label: "下書き"
        name: "draft"
        widget: "boolean"
        default: false

      - label: "著者"
        name: "author"
        widget: "string"
        default: "lain"

      - label: "アイキャッチ画像"
        name: "image"
        widget: "image"
        required: false

      - label: "概要（抜粋）"
        name: "summary"
        widget: "string"
        required: false
        default: "（抜粋がありません）"

      - label: "カテゴリ"
        name: "categories"
        widget: "list"
        required: false
        default: ["その他"]

      - label: "タグ"
        name: "tags"
        widget: "list"
        required: false

      - label: "本文"
        name: "body"
        widget: "markdown"
```

git push して、netlify でデプロイし無事解決しました。
