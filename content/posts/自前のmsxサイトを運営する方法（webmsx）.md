---
title: 自前でMSXサイトを作成（WebMSX）
date: 2025-05-28 09:01:00
draft: false
author: lain
summary: WebMSXを活用しWEBサイトでMSXを動かす方法の紹介
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

###  ② コマンドでローカルセットアップ（手動でも可）

```
git clone https://github.com/ppeccin/WebMSX.git
cd WebMSX

# public向けに最低限のファイルをコピー
mkdir ../webmsx-netlify
cp index.html ../webmsx-netlify/
cp -r src ../webmsx-netlify/assets/webmsx

# ROMフォルダ作成
mkdir ../webmsx-netlify/roms
# game.rom を入れる（任意）
```

### ③ index.html の編集

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>WebMSX Starter</title>
    <script src="assets/webmsx/webmsx.js"></script>
    <style>body { margin: 0; }</style>
  </head>
  <body>
    <script>
      WebMSX.run({
        'rom': 'roms/game.rom'
      });
    </script>
  </body>
</html>
```

### ④ netlify.toml 例（ルートを指定したい場合）

```
[build]
  publish = "."
```

## 🚀 デプロイ

作成した webmsx-netlify を GitHub に push

Netlify にログイン → 「New Site from Git」→ GitHub連携

ビルドコマンドなし、パブリッシュディレクトリは「/」

アップロードされたROMを読み込んで遊べるようになります。



