---
title: "[Decap CMS] URLを短くする方法（Decap CMS＋Hugo）"
slug: DecapCMS-custom-slug
date: 2025-05-29T10:48:00.000Z
draft: false
author: lain
image: /images/uploads/decapcms-custom-slug.png
summary: デフォルトで記事タイトルがURLになり長くなってしまう為、短くする方法の紹介
categories:
  - 未分類
weight: 8
---
<center>
<a href="/images/uploads/decapcms-custom-slug.png" target="_blank">
<img src="/images/uploads/decapcms-custom-slug.png" alt="" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>
</center>

## はじめに

Decap CMSで記事を作成する際、デフォルトだと記事タイトルの日本語がそのままスラッグ（URL）に使われているために、URLがエンコードされて長くなってしまっています。
（例：%E4%BB%A5%E5%A4%96%E3%81%AE... のような部分）。

これを防ぎ短くわかりやすいURLに変更する方法の紹介です。

## ✅ URLを短くする方法（Decap CMS＋Hugo）

slug フィールドを使って URL を手動指定すると解決できます。

Decap CMS の記事作成画面に slug を追加して、任意の短いURL（英数字）を指定できます。

例: config.yml の collections に以下を追加

```
fields:
  - { label: "タイトル", name: "title", widget: "string" }
  - { label: "スラッグ", name: "slug", widget: "string", required: false }
```



<a href="/images/uploads/decapcms-custom-slug.jpg" target="_blank">
<img src="/images/uploads/decapcms-custom-slug.jpg" alt="" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px" />
</a>

そして slug を "decap-directory-edit" のように英語で入力すれば：
text
コピーする
編集する
https://humanxai.info/posts/decap-directory-edit/
のような 短くてシンプルなURL にできます。
