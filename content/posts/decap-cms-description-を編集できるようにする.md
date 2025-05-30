---
title: "[Decap CMS]  description を編集できるようにする"
slug: DecapCMS-add-description
date: 2025-05-30T13:07:00.000Z
draft: false
author: lain
image: /images/uploads/avatar.png
summary: "[Decap CMS]で description を編集できるようにする方法の紹介"
categories:
  - Decap CMS
tags:
  - SEO
  - description
  - メタディスクリプション
  - Hugo
weight: 7
---

### はじめに

別の記事で、Hugoにメタディスクリプション(meta description)を実装する方法を紹介しましたが、各記事にdescriptionを設定する際、現状では手動で記事を編集する必要があり、非常に手間がかかる為、CMS上で編集できるようにしてみました。

同じような悩みを抱えている方がありましたら、ご参考ください。

## Decap CMS から description を編集できるようにする

これを実現するには、config.yml に description フィールドを追加すればOKです。

## 🔧 対応方法 (config.yml)


Decap CMS 設定ファイル（通常 static/admin/config.yml）の中で、以下のような fields: に description を追加してください。

```
collections:
  - name: "posts"
    label: "投稿記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "タイトル", name: "title", widget: "string" }
      - { label: "説明文", name: "description", widget: "text", required: false, hint: "検索エンジンに表示される要約。80〜130文字程度がおすすめ。" }
      - { label: "日付", name: "date", widget: "datetime" }
      - { label: "タグ", name: "tags", widget: "list", required: false }
      - { label: "本文", name: "body", widget: "markdown" }

```

✅ 効果
- CMS画面に「説明文（description）」という入力欄が追加されます。
- 入力した内容は記事の Front Matter に description: として保存されます。
- 自動的に head.html に反映され、検索エンジン用の <meta> タグが生成されます。

📝 補足
- 必須項目にする必要はありません（required: false）
- 説明文がない場合でも .Summary や params.description が代用されるため安心
- 複数のコレクション（featured, projects など）を使っている場合は、それぞれに追加可能です


