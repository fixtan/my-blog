---
title: 自前のMSXサイトを運営する方法（WebMSX）
date: 2025-05-28 09:01:00
draft: false
author: lain
summary: WebMSXを活用しWEBサイトでMSXを動かす手順
categories:
  - Hugo
tags:
  - カスタマイ
---
## はじめに

GitHUBでWebMSXが公開されてるのを見て、自前のWEBサイトでWebMSXをカスタムし動かせないか？と思い立ち、実践してみた備忘録的メモです。

昔は、BlueMSXとかParaMSXなど、Windowsアプリとしてダウンロードしローカルで遊んでた時期がありましたが、今は、WEB上でかなりの完成度で動いてしまうのは、時代の流れを感じますね…。

WebMSX公式サイト

<https://webmsx.org/>

WebMSX(GitHUB)

<https://github.com/ppeccin/WebMSX/>

このサイトは、ChatGPTと協力して制作しており、今回も記事もAIの力を借りて行っています。

将来的にMSX時代からPC-98、X68000、Winodwsまでの時代の変化を再現できるようなapplicationだったり、WEBサービスを作れないかと考えています。
<br>

## 手っ取り早く動かす方法

少しズルいですが、iframeを使えば、簡単に実現できます。

```html
<iframe
  src="https://webmsx.org/"
  width="640"
  height="480"
  frameborder="0"
  allowfullscreen
></iframe>
```

ROMを読み込んで起動する事も可能です。

```html
<iframe
  src="https://webmsx.org/?ROM=https://yourdomain.com/roms/game.rom"
  width="640"
  height="480"
  frameborder="0"
  allowfullscreen
></iframe>
```

## 🧩目標:WebMSXを最小構成でホストする

 構成ファイル（スターターセット）

以下のファイルで構成します：

> webmsx-netlify/<br>
> ├─ index.html 　　　　　← WebMSX本体を読み込むページ<br>
> ├─ roms/<br>
> │    　　└── game.rom 　 ← 任意のROMファイル（自分で追加）<br>
> ├─ assets/<br>
> │   　　└── webmsx/　　← WebMSX本体（js/cssなど）<br>
> ├─ netlify.toml　　　　　← Netlify設定ファイル（optional）<br>
> └─ README.md<br>

## 🔨 スターター準備手順

### ① リポジトリ作成

GitHub上で空のリポジトリを作成（例：webmsx-netlify）


<a href="/images/uploads/image-16284.jpg" target="_blank">
  <img src="/images/uploads/image-16284.jpg" alt="NetlifyのDNS設定" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

a
