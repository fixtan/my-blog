---
title: "[Hugo] ページ推移用のボタンを作成"
slug: Hugo-Page-transition-button
date: 2025-05-29T16:45:00.000Z
draft: false
author: lain
image: /images/uploads/hugo-page-transition-button.png
summary: hugo のデフォルト機能であるページネーション機能を実装した備忘録的メモです
categories:
  - Hugo
tags:
  - カスタム
  - ページネーション
weight: 9
---
<center>
<img src="/images/uploads/hugo-page-transition-button.png" alt="" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>

## はじめに

Decap CMSで記事をコツコツと書いてるのですが、気づけば記事数が１ページに収まらない数になりかけてきた為、２ページ目に画面を推移し、表示を切り替えるようにHugoのデフォルト機能を使いってみました。

## config.toml に paginate を追加

表示件数をコントロールするには、設定ファイルに次を追加します：

```
[pagination]
  pagerSize = 9
```

pagerSize の数値は１ページに表示する件数で、この設定では記事を９つ表示します。

## htmlを修正

うちでは、list.htmlの中で、記事を表示しているので、該当開所を修正します。

> layouts_default\list.html

 **※ 編集する html ファイルは環境によって異なると思うので、ご注意ください**

content/posts/ 以下の記事を対象として記事を抽出し、post-card.htmlでカードを作成しています。

```
{{ $paginator := .Paginate (where .Site.RegularPages "Section" "posts") }}
<section class="post">
  {{ range $paginator.Pages }}
    {{ partial "post-card.html" . }}
  {{ end }}
</section>
```

ちなに post-card.html は以下のようになってます。

```
<article class="post-card">
  <a href="{{ .RelPermalink }}" class="full-link" aria-label="{{ .Title }}"></a>

  <div class="thumb-wrapper">
    {{ if .Params.image }}
      <img src="{{ .Params.image }}" alt="{{ .Title }}" class="post-thumb">
    {{ else }}
      <img src="/images/noimage.jpg" alt="No image" class="post-thumb">
    {{ end }}
  </div>

  <h3 class="post-title">
    <a href="{{ .RelPermalink }}">{{ .Title }}</a>
  </h3>

  <p class="post-date">{{ .Date.Format "2006-01-02" }} | {{ .Params.author }}</p>

  {{ if and (.Params.summary) (ne (.Params.summary | plainify | trim " \n\r\t") "") }}
    <p class="summary">{{ .Params.summary }}</p>
  {{ else }}
    <p class="summary">{{ .Summary | default "(抜粋がありません)" }}</p>
  {{ end }}

  <div class="meta-wrapper">
    {{ with .Params.categories }}
      <p class="post-meta">カテゴリ：
        {{ range . }}<span class="tag">{{ . }}</span>{{ end }}
      </p>
    {{ end }}
    {{ with .Params.tags }}
      <p class="post-meta">タグ：
        {{ range . }}<span class="tag">#{{ . }}</span>{{ end }}
      </p>
    {{ end }}
  </div>
</article>
```

次にページ移動ボタンを表示させる場所に、以下を記述。
これで、最初、ページ番号、次へのリンクボタンが出現します。

```
<!-- ✅ ページネーションナビ -->
{{ if gt $paginator.TotalPages 1 }}
  <nav class="pagination">
    {{ with $paginator.First }}
      <a class="page-link" href="{{ .URL }}">&laquo; 最初</a>
    {{ end }}


    {{ range $paginator.Pagers }}
      <a class="page-number {{ if eq . $paginator }}active{{ end }}" href="{{ .URL }}">{{ .PageNumber }}</a>
    {{ end }}


    {{ with $paginator.Next }}
      <a class="page-link" href="{{ .URL }}">次へ &raquo;</a>
    {{ end }}
  </nav>
{{ end }}
```

装飾などはCSSを記述する事でカスタム可能です。

実際の動作画面は、このブログのトップページの最新記事の下を見ると確認できます。

## 最後に

異常簡単ですが、Hugoのページネーション機能を使った比較的難易度の低いページ推移機能の紹介でした。

Hugoのバージョンにより記述方法が異なったり、上手く動かない場合があるので、詳しくは公式サイトを見られた方が良いかもしれません。

ちなみに、私の方はAI聞きながら実装したので、ChatGPTに聞くのもありだと思います。
