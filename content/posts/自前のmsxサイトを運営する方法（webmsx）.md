---
title: "[WebMSX] 自前でMSXサイトを作成"
slug: WebMSX-Hugo-Netlify
date: 2025-05-28T20:02:00.000Z
draft: false
author: lain
image: /images/uploads/i-catch_webmsx.png
summary: WebMSXを活用しWEBサイトでMSXを動作させる方法の紹介
categories:
  - MSX
tags:
  - WebMSX
  - Hugo
  - GitHub
  - Netlify
weight: 2
---
<center>
  <img src="/images/uploads/i-catch_webmsx.png" alt="NetlifyのDNS設定" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>


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

### ② コマンドでローカルセットアップ（手動でも可）

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

アップロードされたROMを読み込んで遊べるようになります。

## 問題発生

と、ここまでは、AIの指示通りにやったのですが、この方法だとwebmsx.jsが見つからない為、起動する事が出来ないように見えました。

改めて、git cloneしたフォルダ内を確認すると、

\WebMSX\release\stable\6.0\embedded

フォルダ内に、

・wmsx.js

・index.html

というファイルがあり、これをブラウザで実行するとMSXエミュレーターが起動するようです。

## 改めて整理

wmsx.jsがコアファイルのようなので、これを使う事にします。

ディレクトリ内で配置する場所についてですが、今まで、ダウンロードした、jsファイルは、

> /(blog name)/static/js/

に全て配置しています。（検索用に使う lunr.min.js など）

なので、ここにしてはどうかAIに聞くと  **管理の一貫性**  的に考えてもベターなので、ここへ配置します。

そうすると、

```
<!DOCTYPE html>
<html>

    <headlang="en">

    ...

    </head>

    <body>

        <div id="wmsx" style="text-align: center; margin: 20px auto 0;">
            <div id="wmsx-screen" style="box-shadow: 2px 2px 10px rgba(0, 0, 0, .7);"></div>
        </div>

        <script src="/js/wmsx.js"></script>

    </body>

</html>
```

で動くようになると思います。

![](/images/uploads/wmsx.js.jpg)

## 完成

以下のURLにアクセスするとwebmsxが起動します。

<https://humanxai.info/webmsx/>

ブログに埋め込むことも可能で、

```
<iframe
  src="/webmsx/index.html"
  width="640"
  height="480"
  style="border: none; box-shadow: 2px 2px 10px rgba(0,0,0,0.5); margin: auto; display: block;">
</iframe>
```

とやれば以下のような感じで起動します。

<iframe
  src="/webmsx/index.html"
  width="640"
  height="480"
  style="border: none; box-shadow: 2px 2px 10px rgba(0,0,0,0.5); margin: auto; display: block;">
</iframe>

ただ、ブログ記事内に以下のように書く場合、スクリプトコードが安全の為、無効化されるので無理なようです。

```
<div id="wmsx" style="text-align: center; margin: 20px auto 0;">
  <div id="wmsx-screen" style="box-shadow: 2px 2px 10px rgba(0,0,0,0.5);"></div>
</div>
<script src="/js/wmsx.js"></script>
```

## iframe ラッパーを Hugo の shortcode にする（埋め込み簡略化）

layouts/shortcodes/msx.html に以下のように記述：

```
<iframe
  src="/webmsx/index.html?ROM=/roms/{{ .Get "rom" }}"
  width="640"
  height="480"
  style="border:none; box-shadow: 2px 2px 10px rgba(0,0,0,0.5); margin: auto;">
</iframe>
```

以後
```markdown
 { {< msx rom="MSXdev23_PentacornQuest_v1.1.rom" > } }
```
で上記のHTMLファイルを読み込めるようになります。


## 📁 WebMSXの読み込み形式について（参考）

>　?ROM=filename.rom → ROMイメージ（カセット）
>
>　?DISK=filename.dsk → ディスクイメージ
>
>　?TAPE=filename.cas → テープ（カセット）イメージ

## WebMSXコードを貼り付ける方法

自作や公開されているBASICコードを、WebMSXで動かしたい場合。

> [Alt] + V

でペーストモードになるので、その際に、

> [Ctrl] + V

で貼り付けできます。

## 余談：著作権フリーのMSX向けROM・DISK素材


### 🕹 1. 【MSXdev】公式コンテスト作品

MSXdev（https://msxdev.org） は、毎年行われるMSXゲーム開発コンテストです。

多くの作品は 無料でROM形式で公開 されており、合法的にWebMSXなどで遊べます。


#### 🎮 おすすめ作品例（全てフリー）

- "The Menace from Triton"

  - 横スクロールのシューティング（2018年 MSXdev）

- "Lilly's Saga"
  - ドットアートが美しいアクションRPG（2021年）

- "Wing Warriors"
  - 2人対戦シューティング（2015年）


#### 🔗 ダウンロードページ
- <https://msxdev.org/msxdev23/>
- <https://msxdev.org/download/>



<br>

### 🗂 2. 【MSX Resource Center（MRC）】

<https://www.msx.org/>


古くからあるコミュニティ。

Homebrew（自作ソフト）作品多数あり、合法的に再配布可能なものが多いです。

検索で "ROM", "BAS", "Homebrew" などを入れて探すと見つかります。
