---
title: "[Hugo] favicon.ico の 404 対策 作成 [ERROR]"
slug: hugo-404-favicon
summary: DeveloperToolで favicon.ico の 404 が出るのでアイコンを作成してみました
description: |
  favicon.ico の作成方法の紹介。（DeveloperToolの404エラー対策）
date: 2025-05-30T13:42:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - favicon.ico
  - favicon
  - "404"
weight: 9
image: /images/uploads/hugo-404-favicon.png
---
<center>
<img src="/images/uploads/hugo-404-favicon.png" alt=""  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>

## はじめに

Hugoをローカル環境で動かし度々テストしてて、chromeのDeveloperToolを開くと度々表示される favicon.ico の 404 エラーを消すために、アイコンを作成してみました。

## アイコン作成方法

今回は、此方のWEBサイトを利用させていただきました。

> ■Favicon ジェネレーター<br>
> <https://favicon-generator.mintsu-dev.com/>

ここ対象画像をドロップして 「16 × 16px」か「32 × 32px」のサイズで作成すれば問題ないようです。

16pxが対応ブラウザが多いようで互換性を重視する場合は、このサイズが良いですが、小さすぎて解像度が低いのと、最近の端末は「32 × 32px」にほぼ対応してるようなので、「32 × 32px」で作成。<br>
ファイル名は、「 **favicon.ico** 」にしておきます。

 <a href="/images/uploads/favicon-generator.jpg" target="_blank">
<img src="/images/uploads/favicon-generator.jpg" alt="Favicon ジェネレーター"  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

## favicon.ico の404対策

作成したアイコン(favicon.ico) を

> static/favicon.ico

を設置

更に、layouts/partials/head.html に明示的に指定

```
<link rel="icon" href="/favicon.ico" type="image/x-icon">
```
