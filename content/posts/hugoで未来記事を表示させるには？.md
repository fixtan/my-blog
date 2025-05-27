---
title: "Hugoで未来記事を表示させるには？ "
date: 2025-05-26 10:20:00
draft: false
author: lain
image: /images/uploads/hugo-futurearticle.png
summary: Hugoで未来記事を表示させる方法の紹介（config.toml）
categories:
  - Hugo
tags:
  - カスタマイズ
weight: 20
---
<a href="/images/uploads/hugo-futurearticle.png" target="_blank">
  <img src="/images/uploads/hugo-futurearticle.png" alt="NetlifyのDNS設定" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

## はじめに

netlify + Decap CMSで記事を作成する際、日付を\[NOW]ボタンで選択すると、現在時刻が表示されますが、世界標準時と日本の時差が９時間ある為、このままの日時では、９時間経過しないと記事が表示されません。

Decap CMS にはタイムゾーン指定の機能がないため、手動で９時間引いた時刻を設定するなどしていました。

## 未来記事を表示できるようにする

設定ファイルの「config.toml」にオプション設定を追加する事で、未来記事を表示できるようになります。

> \my-blog\config.toml

設定に以下を追加

**buildFuture = true**

これで未来記事を表示できるようになります。

![](/images/uploads/config.toml.jpg "Hugoで未来記事を表示できるようにする")
