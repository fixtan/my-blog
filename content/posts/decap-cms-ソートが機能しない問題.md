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
