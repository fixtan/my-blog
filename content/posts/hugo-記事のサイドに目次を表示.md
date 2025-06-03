---
title: "[Hugo] 目次を自動生成し記事のサイド表示（Table of Contents： TOC）"
slug: hugo-table-of-contents
summary: Hugo で目次を自動生成し記事のサイド表示（Table of Contents： TOC）の紹介
description: Hugo で目次を自動生成し記事のサイド表示（Table of Contents： TOC）の紹介
date: 2025-06-03T07:30:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - 目次
  - Table of Contents： TOC
  - ブログ
weight: 4
image: /images/uploads/
---



## はじめに

エンジニア向けのブログサイトZennのように記事のサイドに目次を表示する機能を実装できないか調べたところ、Hugoでも比較的簡単に実装可能なようなので試してみました。


## ✅ 難易度と実装の概要

| 項目                                     | 難易度      | 補足                                                        |
| ---------------------------------------- | ----------- | ----------------------------------------------------------- |
| 目次の自動生成（Markdownの見出しから）   | ★☆☆（簡単） | Hugoに内蔵されている { {.TableOfContents } } を使えば即可能 |
| サイドバーや記事右側に固定表示（Zenn風） | ★★☆（中級） | PaperModなどのテーマにCSS追加＋テンプレート改修が必要       |
| スクロール連動（現在位置のハイライト）   | ★★★（応用） | JavaScript（ScrollSpyなど）との連携が必要になる場合あり     |

### 🧩 Hugoでの基本的な目次機能（.TableOfContents）

HugoのMarkdown記事中の見出し（##など）から、以下のように自動で目次を生成する機能が備わっています。

```
{ { .TableOfContents } }
```
これは記事テンプレート（例：single.html）内に入れることで、目次をHTMLのリスト（ul/li）として出力してくれます。

### 🧭 Zenn風「サイド目次」をHugoでやるには？

必要な構成：
1. { { .TableOfContents } } を記事テンプレートに埋め込む
2. CSSで「右側に固定表示するようスタイリング」
3. （可能であれば）表示・非表示を切り替えられるUIを付ける
4. （応用）現在見ている見出しに自動でハイライト（ScrollSpy）

### 📝 難易度まとめ

| やりたいこと                          | 難易度 | コメント                                       |
| ------------------------------------- | ------ | ---------------------------------------------- |
| .TableOfContents で目次を記事内に表示 | ★☆☆    | すぐに実装可                                   |
| Zenn風に右サイド固定表示              | ★★☆    | カスタムテンプレート＋CSS調整が必要            |
| スクロール連動・ハイライト            | ★★★    | JavaScript ScrollSpyなどの導入が必要でやや高度 |


## 🧭 ステップ1：目次の自動生成（Markdownの見出しから）

Hugo には .TableOfContents という組み込み関数があり、Markdownの # や ## をもとに自動で目次を生成してくれます。

### ✅ 実装ステップ（PaperMod テーマ想定）

#### 1. 表示させたい位置に以下を追加（例：layouts/_default/single.html）
```
{ { .TableOfContents } }
```


これは <article> タグの内部であれば、本文より前や後ろでも構いません。
最も簡単なのは本文直前：

```
<article class="post-content">
  { { .TableOfContents } }
  { { .Content } }
</article>
```

####  2. 表示確認（Hugoサーバー起動）

```
hugo server
```

ブラウザで http://localhost:1313/posts/任意の記事/ を開き、<br />
＃＃ 見出しなどが複数ある場合、HTMLの  ul  形式の目次が表示されます。



<a href="/images/uploads/hugo-table-of-contents-test01.jpg" target="_blank">
<img src="/images/uploads/hugo-table-of-contents-test01.jpg" alt=""  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


#### 3. Markdown記事側の見出し例
```
# タイトル

## はじめに

## 準備するもの

### 拡張機能

### プレビュー表示

## まとめ
```
このように書かれていれば、階層構造付きの目次が .TableOfContents で自動生成されます。

### ✏ 補足（日本語でもOK？）

はい、日本語の見出しも問題なく認識され、目次リンクとして機能します。
見出しが ## 以上（つまり ### や ####）でも、きちんと階層になります。


## 🧭 次はステップ2：右側に目次を固定表示（Zenn風）

ここからはデザイン・CSS調整のフェーズに入ります。

AIからの提案ではCSSのみで再度に目次を表示する実装を進められたようですが、developertoolで記事ページのブロック構造を確認してわかった情報を図形で表してみました。



<a href="/images/uploads/hugo-table-of-contents-block.jpg" target="_blank">
<img src="/images/uploads/hugo-table-of-contents-block.jpg" alt=""  loading="lazy" decoding="async" style="max-width:250px; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### ✅ articleの横に新しいブロック（目次用）を追加した方が理想的です

なぜなら？

- .TableOfContents を 本文の中に入れると記事の一部として流れてしまう
- Zenn風のサイド固定TOCを実現するには、レイアウトとして左右に分ける必要がある
- 将来 position: sticky などの機能で自然なスクロールに連動する動きも可能になる

### 🛠 具体的な構成イメージ（理想構造）

HTML例

```
<main class="main page">
  <div class="content-wrapper" style="display: flex; align-items: flex-start;">

    <!-- 左：記事本文 -->
    <article class="post-single">
      {{ .Content }}
    </article>

    <!-- 右：目次 -->
    <aside class="article-toc">
      <nav class="toc">
        {{ .TableOfContents }}
      </nav>
    </aside>

  </div>

  <section id="comments">
    <!-- コメント欄 -->
  </section>
</main>
```


🎨 CSS例（Zenn風）
```
.content-wrapper {
  display: flex;
  gap: 2rem;
}

.post-single {
  flex: 1;
  max-width: 700px;
}

.article-toc {
  width: 260px;
  position: sticky;
  top: 100px;
  max-height: 80vh;
  overflow-y: auto;
  font-size: 0.9rem;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
}
```


