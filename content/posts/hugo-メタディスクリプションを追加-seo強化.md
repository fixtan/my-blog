---
title: "[Hugo] メタディスクリプションを追加 (SEO強化)"
slug: hugo-meta-description
date: 2025-05-30T12:20:00.000Z
draft: false
author: lain
image: /images/uploads/hugo-meta-description.png
summary: Hugoでメタディスクリプション(meta description)を追加する方法の紹介（SEO強化）
categories:
  - Hugo
tags:
  - メタディスクリプション
  - SEO
  - meta description
weight: 9
---
<center>
<img src="/images/uploads/hugo-meta-description.png" alt="[Hugo] メタディスクリプションを追加 (SEO強化)"  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; "/>
</center>

## はじめに

WEBのサイト診断をした際に、指摘を受けたメタディスクリプション(meta description)をHugoで追加してみます。

## 目的

Google検索などの「スニペット（検索結果の要約）」に使われる説明文を明示的に指定して、検索時のクリック率UPや情報伝達力を向上させることが目的です。

検索エンジンに好まれる文字数
- PC検索結果：全角換算で約120～130文字
- モバイル検索：約70～80文字前後が理想


## 実装手順（PaperMod向け）

### ① layouts/partials/head.html を開く

その中に次のような <meta> タグを追加（または修正）

```
<!-- SEO: meta description -->
{{- with .Description | default .Summary | default site.Params.description -}}
<meta name="description" content="{{ . | plainify | truncate 130 }}">
{{- end -}}
```

> 解説
> - .Description は各記事の description フロントマター
> - なければ .Summary（自動抜粋）
> - それもなければ config.yml の params.description
> - 最終的に最大130文字で切る（検索結果で途切れないように）



### ② 各記事のフロントマター（content/posts/*.md）に description を追記

```
---
title: "遅延読み込み (Lazy Loading) を Hugo に導入する方法"
description: "Hugo + PaperMod テーマで画像の遅延読み込みを実装して表示速度を向上させる方法を紹介します。"
date: 2025-05-30
tags: ["Hugo", "SEO", "パフォーマンス"]
---
```

### ③ グローバル設定（サイト全体）

config.toml または config/_default/params.toml にも fallback の description を設定しておくと安心：

```
[params]
  description = "Human × AI の対話を通じて、AI活用やブログ制作、技術実験の軌跡を記録しています。"
```

## 確認

hugo server で起動

ブラウザの「ページのソースを表示」で <meta name="description"> を確認

Chromeの「検証（F12）」→「Elements」→ <head> 内でチェック


## 課題

現在の設定では、記事ファイル(.md)をエディタで直接編集する必要があり、非常に面倒なので、Decap CMSの記事投稿フォームからdescription を編集できるようにします。

Hugoとは別のカテゴリになるので、興味のある方は別途、其方の記事を参照ください。

>** [Decap CMS] description を編集できるようにする** [2025-05-30]<br>
<https://humanxai.info/posts/decapcms-add-description/><br>

