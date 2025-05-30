---
title: "[Hugo] OGP（Open Graph Protocol）対応方法 [SNS]"
slug: Hugo-OGP
summary: "[Hugo] でOGP用のメタタグを設定する方法の紹介。"
description: "[Hugo] でOGP用のメタタグを設定する方法の紹介。"
date: 2025-05-30T14:19:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - OGP
  - SEO
weight: 8
image: /images/uploads/hugo-ogp.png
---
<center>
<img src="/images/uploads/Hugo-OGP.png" alt="\[Hugo] でOGP用のメタタグを設定する方法の紹介。"  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>

## はじめに

SNSなどでリンクをシェアする際に挿入されるOGP（Open Graph Protocol）へ対応する方法のメモです。

共有時の見た目を整えるために、以下のメタタグを追加してみます。

## OGP（Open Graph Protocol）

主に追加する項目は以下になります。

| タグ名            | 役割                                      |
| -------------- | --------------------------------------- |
| og:title       | 記事のタイトル                                 |
| og:description | 記事の要約（SEO用と兼用可）                         |
| og:image       | サムネイル画像（SNSで表示される）                      |
| og:url         | ページのURL（明示しても良い）                        |
| twitter:card   | Twitter向けの表示スタイル（summary_large_image推奨） |

## 実装手順

 **layouts/partials/head.html** に追記

```html
<!-- OGP (Open Graph Protocol) -->
<meta property="og:title" content="{{ .Title | default site.Title }}">
{{- with .Description | default .Summary | default site.Params.description -}}
  <meta property="og:description" content="{{ . | plainify | truncate 130 }}">
{{- end }}
<meta property="og:type" content="article">
<meta property="og:url" content="{{ .Permalink }}">
<meta property="og:site_name" content="{{ site.Title }}">

{{ with .Params.image }}
  <meta property="og:image" content="{{ . | absURL }}">
{{ else }}
  <meta property="og:image" content="{{ "images/default-ogp.png" | absURL }}">
{{ end }}

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ .Title | default site.Title }}">
<meta name="twitter:description" content="{{ .Description | default .Summary | default site.Params.description | plainify | truncate 130 }}">
{{ with .Params.image }}
  <meta name="twitter:image" content="{{ . | absURL }}">
{{ else }}
  <meta name="twitter:image" content="{{ "images/default-ogp.png" | absURL }}">
{{ end }}
```


## OGP画像の作成方法


私は、オンラインサービスのcanvaを利用しました。

<https://www.canva.com/>

OGP画像のサイズは、「1200 x　630px」で、新規デザイン作成の際に、カスタム設定を選ぶと、カンバスサイズを設定できます。

作成した画像は、default-ogp.png　にリネームし、static/images/へ配置します。


