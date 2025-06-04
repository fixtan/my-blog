---
title: "[Hugo] ナビゲーションにカテゴリを追加し専用ページを作成"
slug: hugo-navigation-add-category
summary: Hugo でナビゲーションにカテゴリを追加し専用ページを作成する方法
description: Hugo でナビゲーションにカテゴリを追加し専用ページを作成する方法
date: 2025-06-04T12:00:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - ナビゲーションバー
  - プルダウンメニュー
  - カテゴリ
weight: 5
image: /images/uploads/hugo-navigation-add-category.webp
---

<center>
<img src="/images/uploads/hugo-navigation-add-category.webp"
     alt="Hugo でナビゲーションにカテゴリを追加し専用ページを作成する方法"
     loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

## はじめに

記事数と、カテゴリの数のの増加に伴い、トップページに表示される情報と記事数が肥大化してきました。

今回は、カテゴリページを別で作成し、各カテゴリへのリンクは、ナビゲーションバーからプルダウンメニューで選択する形式にしてみたいと思います。

今回の記事では、

- ナビゲーションに項目追加
- プルダウンを作成
- カテゴリページを作成する方法

の３つがメインになると思います。

情報が参考になれば幸いです。

## カテゴリセクションを削除

トップページからカテゴリセクションを削除します。

layouts/index.html または layouts/_default/list.html などにある

```
{{ range .Site.Taxonomies.categories }}
```

出力しているカテゴリブロックをコメントアウト or 削除。


```html
<!-- ✅ カテゴリ別 -->
<!--div class="section-block--category">
  <h2 class="section-heading section-heading--category">カテゴリ別の記事</h2>
  {{ range $name, $pages := .Site.Taxonomies.categories }}
  <h3 class="category-heading">{{ $name }}</h3>
  <section class="post-grid">
    {{ range $pages }} {{ if not (in $featuredLinks .RelPermalink) }} {{ partial
    "post-card.html" . }} {{ end }} {{ end }}
  </section>
  {{ end }}
</div-->
```


## メニュー「カテゴリ」を追加

ナビバーに「カテゴリ」メニューをプルダウン付きで追加します。

方法A：config.toml の [menu] に追加し、テンプレでループ

```
[[menu.main]]
  identifier = "categories"
  name = "カテゴリ"
  url = "/categories/"
  weight = 20
```
方法B：layouts/partials/header.html を直接編集して以下のように手動追加

```
<!-- ✅ 追加：カテゴリドロップダウン -->
<li class="group relative">
  <a href="#" class="nav-link">カテゴリ ▼</a>
  <ul class="absolute left-0 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
    {{ range $name, $taxonomy := .Site.Taxonomies.categories }}
      <li>
        <a href="{{ "/categories/" | relLangURL }}{{ $name | urlize }}/">
          {{ $name }}
        </a>
      </li>
    {{ end }}
  </ul>
</li>
```


Path: **assets\css\custom.css.html**<br />
Path: **assets\css\custom.css**<br />

```
/* ドロップダウンメニューのスタイル */
.group:hover ul {
  display: block;
}
.group ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 10rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  z-index: 50;
}
.group {
  position: relative;
}
.group ul li a {
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
}

.group ul li a:hover {
  background-color: #f5f5f5;
}
```

方法Aの方は上手く行かなかったので、方法Bにします。

<a href="/images/uploads/hugo-navigation-add-category-pulldown.jpg" target="_blank">
<img src="/images/uploads/hugo-navigation-add-category-pulldown.jpg"
         alt="ナビゲーションにカテゴリを追加（プルダウン付き）"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### 🧪カテゴリー数を追加表示

🧪 オプション：ドロップダウンにカテゴリー数を表示。

```
{{ range $name, $taxonomy := .Site.Taxonomies.categories }}
  <li>
    <a href="{{ "/categories/" | relLangURL }}{{ $name | urlize }}/">
      {{ $name }} ({{ len $taxonomy }})
    </a>
  </li>
{{ end }}
```
<a href="/images/uploads/hugo-navigation-add-category-pulldown2.jpg" target="_blank">
<img src="/images/uploads/hugo-navigation-add-category-pulldown2.jpg"
         alt="ドロップダウンにカテゴリー数を表示"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

## カテゴリ名に絵文字を付ける


カテゴリ名に絵文字を直接含めてみます。

### ① Hugoテンプレート

Hugoテンプレートで以下のように dict（連想配列）を定義：
```
{{ $icons := dict
  "AI" "🤖"
  "HUGO" "🛠️"
  "DECAP CMS" "🧩"
  "PYTHON" "🐍"
  "VSCode" "📝"
  "ブログ" "📘"
}}
```
そして表示する部分でこうします：
```
{{ range $name, $taxonomy := .Site.Taxonomies.categories }}
  <li>
    <a href="{{ "/categories/" | relLangURL }}{{ $name | urlize }}/">
      {{ index $icons $name }} {{ $name }} ({{ len $taxonomy }})
    </a>
  </li>
{{ end }}
```

#### ✅ メリット

- ファイル追加不要
- 手軽・シンプル・早い

#### ⚠ デメリット

- カテゴリ名が日本語・英語混在だと表記ゆれ注意（例："Python" vs "PYTHON"）
- アイコンの変更にはテンプレート修正が必要

###  ② YAMLやJSONでアイコンを指定

もっと拡張性を求める場合は、以下のようにデータファイルを使います：

例：data/categoryIcons.yml

```
"ai": "🤖"
"hugo": "🛠️"
"python": "🐍"
"ブログ": "📘"
"vscode": "📝"
"decap cms": "🧩"
```

そしてテンプレートで：
```
{{ $icons := site.Data.categoryIcons }}
{{ range $name, $taxonomy := .Site.Taxonomies.categories }}
  <li>
    <a href="{{ "/categories/" | relLangURL }}{{ $name | urlize }}/">
      {{ index $icons $name }} {{ $name }} ({{ len $taxonomy }})
    </a>
  </li>
{{ end }}
```

#### ✅ メリット

- カテゴリ名とアイコンをテーマから分離できる
- 多言語・変更が柔軟に管理可能

### カテゴリ名を取得する方法

カテゴリリストで表示される内容と、実際の文字列が違うようでアンマッチが発生して上手く行かない場合は、以下Goテンプレートを実行すると表示できます。
基本的に半角英数字は、全て小文字にすれば問題なさそうです。

```
<ul>
  {{ range $name, $taxonomy := .Site.Taxonomies.categories }}
    <li>{{ $name }}</li>
  {{ end }}
</ul>
```



### 結論とおすすめ

| 目的                       | 方法                                |
| -------------------------- | ----------------------------------- |
| 手軽に導入・すぐに使いたい | ✅ **方法1（テンプレ内でdict定義）** |
| 将来的に拡張・分離したい   | ✅ **方法2（dataフォルダ＋YAML）**   |


別ファイルで管理した方が良さそうなので方法２の方で実装してみました。


## カテゴリ専用ページ作成

デフォルト設定では、各カテゴリページを開いてもトップページと同じ構成で表示されてしますので専用ページを作成します。


### ①テンプレートファイルを設置

layouts/_default/terms.html や layouts/_default/list.html をカスタマイズする代わりに、
以下の専用テンプレートファイルを追加します：

[PATH] 📄 layouts/_default/taxonomy.html

```
{{ define "main" }}
  <h1 class="section-title">カテゴリ: {{ .Title }}</h1>

  <div class="post-cards">
    {{ range .Pages }}
      <article class="post-card">
        <a href="{{ .RelPermalink }}">
          <h2>{{ .Title }}</h2>
          <p>{{ .Params.summary | default .Summary }}</p>
        </a>
      </article>
    {{ end }}
  </div>
{{ end }}
```

💡 .Pages には該当カテゴリに属する記事のみが入ります。


<a href="/images/uploads/hugo-navigation-add-category-pages.jpg" target="_blank">
<img src="/images/uploads/hugo-navigation-add-category-pages.jpg"
         alt="カテゴリ専用ページ作成"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### ②ページデザイン変更

トップページで作成した、カテゴリページ用のHTMLデータを移植します。

```
{{ define "main" }}
  <div class="section-block--category">
    <h2 class="section-heading section-heading--category">カテゴリ：{{ .Title }}</h2>

    <section class="post-grid">
      {{ range .Pages }}
        {{ partial "post-card.html" . }}
      {{ end }}
    </section>
  </div>
{{ end }}
```

CSS

```
/* カテゴリ別:タイトル装飾 */
.section-heading--category {
  background: #f5e6ff;              /* 背景を淡く紫に */
  border-left: 6px solid #8e44ad;   /* 縦線の強調 */
  padding: 0.6em 1em;
  font-size: 1.6rem;
  margin-top: 20px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06); /* 立体感 */
  border-radius: 4px;
}
/* カテゴリ別:背景装飾 */
.section-block--category {
  background-color: #faf3ff;  /* カテゴリ全体を薄い背景で囲う */
  padding: 0.1rem 1.5rem 0.1rem 1.5rem ; /* padding: 1rem 1.5rem; */
  border-radius: 6px;
  margin-bottom: 2rem;
}

.card-badge--recommended {
  background-color: #4ecdc4;
  color: white;
}

.card-badge--featured {
  background-color: #007acc;
}

.category-heading {
  font-size: 1.4rem;
  margin-top: 2rem;
  border-bottom: 1px dashed #ccc;
}

.post-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 3rem;
}

.post-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  padding: 1rem;
  width: calc(33% - 1rem);
  box-sizing: border-box;
  transition: transform 0.2s;
}

.post-card:hover {
  transform: translateY(-4px);
}
```

変更語以下のようになります。

<a href="/images/uploads/hugo-navigation-add-category-pages2.jpg" target="_blank">
<img src="/images/uploads/hugo-navigation-add-category-pages2.jpg"
         alt="カテゴリ専用ページ:ページデザイン変更"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



## ページネーション（ページ送り）

トップページの最新記事でも作成した、ページネーションと同じ機能を実装します。

テンプレート側：.Paginate .Pages を使う

```
{{ define "main" }}
  <div class="section-block--category">
    <h2 class="section-heading section-heading--category">カテゴリ：{{ .Title }}</h2>

    <section class="post-grid">
      {{ range .Paginator.Pages }}
        {{ partial "post-card.html" . }}
      {{ end }}
    </section>

    <!-- ✅ ページネーションナビ -->
    {{ $paginator := .Paginator }}
    {{ if gt $paginator.TotalPages 1 }}
      <nav class="pagination">
        {{ with $paginator.First }}
          <a class="page-link" href="{{ .URL }}">&laquo; 最初</a>
        {{ end }}

        {{ range $paginator.Pagers }}
          <a class="page-number {{ if eq . $paginator }}active{{ end }}" href="{{ .URL }}">
            {{ .PageNumber }}
          </a>
        {{ end }}

        {{ with $paginator.Next }}
          <a class="page-link" href="{{ .URL }}">次へ &raquo;</a>
        {{ end }}
      </nav>
    {{ end }}

  </div>
{{ end }}

```
CSS
```
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.page-link,
.page-number {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
  text-decoration: none;
}
.page-number.active {
  background-color: #007acc;
  color: white;
  font-weight: bold;
}
.page-link:hover,
.page-number:hover {
  background-color: #f0f0f0;
}
```


 1ページあたりの件数設定

config.toml に次を追加：

```
### １ページに表示する件数
[pagination]
  pagerSize = 9
```

これで、9件以上記事がある場合、下にページネイション用のリンクが作成されます。

<a href="/images/uploads/hugo-navigation-add-category-pages3.jpg" target="_blank">
<img src="/images/uploads/hugo-navigation-add-category-pages3.jpg"
         alt="ページネーション（ページ送り）"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## 今後の課題

1. ✅ カテゴリ説明文の追加（任意）
2. ✅ OGP・メタディスクリプション対応
3. ✅ カテゴリーヘッダにアイコンを付ける
4. ✅ ソート切り替え（新しい順・人気順など）
5. ✅ モバイルレイアウト確認
