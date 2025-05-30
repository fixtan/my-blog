---
title: "[Hugo] リンクをカード風に表示する"
slug: hugo-link-card
summary: Hugoのショートコードを使って、リンクをカード風に表示する方法の紹介。
description: Hugoのショートコードを使って、リンクをカード風に表示する方法の紹介。
date: 2025-05-30T15:49:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - リンクカード
  - ショートコード
weight: 20
image: /images/uploads/avatar.png
---


## はじめに

サイトをOGPに対応させたことで、Twitterでリンクを貼る際に画像を含めたOGP情報を表示できるようにしました。

それと同様に、ブログ記事内のURLに関してもカード風の表示にできないか試した際の備忘録メモです。

## [Decap CMS] のリンクカード対応の有無


Decap CMS（旧 Netlify CMS）単体では、WYSIWYGエディタ内で OGPカード表示までは対応していません。



| 項目 | WordPress | Decap CMS（Hugo）|
| ---- | ---- | ---- |
| OGPカードの自動展開表示|✅ ブロックエディタで対応済|❌ Markdownエディタでは未対応|
|自動Embedプレビュー|✅ TwitterやYouTubeなど埋め込み可|❌ Markdown記述のまま扱われる|
|カード表示の反映場所|編集画面・表示画面両方|表示画面（サイト側）でのみ反映される|


## 代替策・できること

CMSエディタで「リンクをカード風に表示する」機能はないが、自作できる<br>

 Hugoのショートコードを使って、こんな感じのカードを表示可能：

```
{{< link-card url="https://humanxai.info/posts/hugo-meta-description/" >}}
```
shortcodes/link-card.html を作ることで、リンクカード風のHTMLを生成できます（OpenGraph取得含む）。


## 自作ショートコードでOGPカード風リンクを作る（例）

 ** layouts/shortcodes/link-card.html** を作成：

```
{{ $url := .Get "url" }}
<article class="link-card">
  <a href="{{ $url }}" target="_blank" rel="noopener">
    <div class="link-card-content">
      <strong>{{ $url }}</strong><br>
      <span>リンクのOGPタイトルをここに</span>
    </div>
  </a>
</article>

```


