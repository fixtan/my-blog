---
title: "[Hugo] 遅延読み込み (Lazy loading)  をテンプレートに追加"
slug: Hugo-Lazy-loading
date: 2025-05-30T11:09:00.000Z
draft: false
author: lain
image: /images/uploads/hugo-lazy-loading.png
summary: 表示速度改善に効果的な画像の遅延読み込み (loading="lazy") をHugoのテンプレートに追加してみました
categories:
  - Hugo
tags:
  - カスタム
  - Lazy loading
  - 遅延読み込み
  - テンプレート
weight: 7
---
<center>
<img src="/images/uploads/hugo-lazy-loading.png" alt="" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

## はじめに

ブログサイトがかなり出来上がってきたので、AIにサイト診断をしてもらったところい付くか改善ポイントを教えて貰っいました。

その中の１つ、表示速度改善に効果的な画像の遅延読み込み (loading="lazy") をHugoのテンプレートに追加してみましたので、その備忘録的メモです。

Hugoで同じように静的なサイト構築をされてる方で、速度改善の問題に悩んでる方がいましたら、ご参考ください。

## Hugo + PaperModで loading="lazy" を導入

### ① layouts/_default/_markup/render-image.html を新規作成

存在しない場合、このファイルを作ることで、Markdownで挿入された画像の出力HTMLをカスタマイズできます。

> my-blog/<br>
> ├── layouts/<br>
> │ 　  　 └── _default/<br>
> │     　　　　　　  └── _markup/<br>
> │           　　　　　　　　　　└── **render-image.html**  ← これを新規作成<br>


### ② 中身に以下を記述
必要に応じて class="lazy-img" を指定し、CSSで見た目を調整することもできます（省略可）

```
<img src="{{ .Destination | safeURL }}"
     alt="{{ .Text }}"
     loading="lazy"
     decoding="async"
     class="lazy-img" />
```

### ③ 通常の img タグにも反映させたい場合（テーマのテンプレート内画像）

layouts/partials/ 以下などにある img タグにも、以下のように属性を追加します：

```
<img src="{{ . }}" alt="説明文" loading="lazy" decoding="async">
```
PaperModでは、たとえば layouts/partials/li.html や list.html / single.html などで img タグがあるか確認してください。

### ④ ビルドして確認

> hugo server

Chromeのデベロッパーツール → 「Elements」タブ で画像を確認すると、loading="lazy" が付いていれば成功です。

### 補足：WebPなどの圧縮画像も活用する場合

画像を .webp 形式などに変換しておくとさらに高速化できます。

## ブログのアイキャッチ画像に対応（PaperMod）

PaperModではブログ記事カード（おすすめ記事など）に使われるアイキャッチ画像は、Markdownとは別のテンプレートからHTMLが出力されているため、render-image.html では対応されません。

### 対応すべき箇所：カードUIでのアイキャッチ画像（例：おすすめ記事）

投稿一覧やおすすめ記事などに表示される img タグは、PaperModのこのあたりのテンプレートから出力されています：

```
themes/PaperMod/layouts/partials/
├── li.html               ← 記事一覧のカード用
├── featured.html         ← featured（おすすめ）セクション用（カスタムしてる場合あり）
```


### ① li.html や featured.html に loading="lazy" を追加

themes/PaperMod/layouts/partials/li.html か、カスタマイズ済なら 
layouts/partials/li.html などを開いて、以下のような行を探してください：

```
<img src="{{ .Params.images | first }}" alt="{{ .Title }}" class="post-thumb">
```
もしくは：
```
<img src="{{ $img }}" alt="{{ .Title }}" class="post-thumb">
```

これを次のように変更：

```
<img src="{{ .Params.images | first }}" alt="{{ .Title }}" class="post-thumb" loading="lazy" decoding="async">
```

### ② layouts/_default/baseof.html や single.html などのヒーロー画像もチェック（必要に応じて）

Hero画像にも loading="lazy" を追加できますが、最初に表示される1枚だけは敢えてlazyにしない方がUX的にはベターです（ページ上部の画像なので即読み込みした方がよいため）。

### ③ 反映確認

```
hugo server
```

## おまけ：CSSで .lazy-img を活かす

は読み込み中は薄く、表示時にフェードインさせる効果を加えるテクニック。

```
.lazy-img {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
.lazy-img[loading="lazy"]:not([src=""]) {
  opacity: 1;
}
```

