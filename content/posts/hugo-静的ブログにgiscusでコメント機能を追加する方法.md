---
title: "[Hugo] 静的ブログにgiscusでコメント機能を追加する方法"
slug: hugo-giscus
summary: 静的サイトジェネレーター Hugoにコメント機能をgiscusで実装する方法の紹介
description: 静的サイトジェネレーター Hugoにコメント機能をgiscusで実装する方法の紹介
date: 2025-05-31T09:40:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - giscus
  - コメント
  - JavaScript
weight: 3
image: /images/uploads/avatar.png
---
## はじめに

Hugoに以前から追加したかったコメント機能を追加してみましたのでその備忘録メモです。

AIに相談したところ、いくつか選択候補を紹介してもらいましたが、一番お勧めっぽいgiscusをとりあえず導入して見ます。

## giscus ってなに？

GitHub Discussions を使った軽量なコメントシステムで、Hugoのような静的なサイトにも導入する事が出来、Githubのアカウントがあれば簡単に使えてコメントも出来るようになります。

Githubのアカウントが必要になるので、その点がネックですが、匿名での投稿防止の他、セキュリティ管理も出来る為、安心して利用できるのがメリットです。<br>
<br>

## 🧩 giscus の魅力

* 静的ブログでもOK（JSで動的読み込み）
* GitHub Discussionsを使うのでスパム対策も強い
* デザインが自然
* コメント管理はGitHubでできる！

## 📝 giscus のコメント管理方法

 giscusのコメント管理は、GitHub Discussions上で行います。

* コメント投稿 → GitHub Discussions に自動でスレッドが生成
* 管理者は GitHub 上でそのスレッドにアクセス・返信・削除可能
* 通知も GitHub 通知に届く（もしくはメール連携）

## 🧩 コメントに関する課題と対策

| 課題       | 解決策                                 |
| -------- | ----------------------------------- |
| スパム対策    | GitHubアカウント必須にする（giscus/utterances） |
| モデレーション  | GitHub Discussions で管理              |
| 管理負担     | 通知ON＋リンク付き一覧で簡単管理                   |
| 静的表示との相性 | JSで読み込むので静的でも問題なし                   |

## 📌  Hugo + giscus 導入の流れ（概要）

1. GitHub Discussions を有効化（公開リポジトリ）
2. giscus.app でスクリプト生成（Hugo用にカスタマイズ）
3. layouts/partials/comments.html を作成
4. single.html の末尾で {{ partial "comments.html" . }} を読み込む
5. custom.css でコメント部分のスタイル調整（任意）

## STEP 1：GitHub Discussions を有効化（公開リポジトリ）

対象のブログ用リポジトリ（例：fixxtan/my-blog）へアクセス

> Settings → Features 

に進む

「Discussions」にチェックを入れて有効化する


 <a href="/images/uploads/github-discussions1.jpg" target="_blank">
<img src="/images/uploads/github-discussions1.jpg" alt="GitHub Discussions を有効化"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




✅ GitHub Discussions が https://github.com/ユーザー名/リポジトリ/discussions で利用可能になります


<a href="/images/uploads/github-discussions2.jpg" target="_blank">
<img src="/images/uploads/github-discussions2.jpg" alt="https://github.com/ユーザー名/リポジトリ/discussionsで利用可能に"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## STEP 2：giscus.app でスクリプト生成（Hugo用にカスタマイズ）

### giscusアプリをインストール

{{< link-card
    url="https://github.com/apps/giscus"
    title="Build software better, together"
    description="GitHub is where people build software. More than 150 million people use GitHub to discover, fork, and contribute to over 420 million projects."
    image="https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png"
>}}


### giscus 公式サイトで必要情報を入力

{{< link-card
    url="https://giscus.app/"
    title="giscus"
    description="A comments widget built on GitHub Discussions."
    image="https://opengraph.githubassets.com/4f866d5b634e7cd5422af77f8dbfb6d48dd288b7c5c18326544c1973210320ed/giscus/giscus"
>}}

ページを開き、下記情報を入力：

|項目|設定例|
|---|---|
|Repository|	fixxtan/my-blog（あなたのGitHub）|
|Category|	General（Discussions内カテゴリ）|
|Mapping|	pathname（記事URLに連動）|
|Theme|	light または preferred_color_scheme|
|Language|	ja（日本語対応）|




なぜDisqusではなくgiscusなのか（軽量・GitHub管理）

GitHub Discussionsの有効化手順

giscus.appでスクリプトを生成する方法

Hugoへの組み込み方（partial + single.html）

カスタマイズ（テーマ・カテゴリなど）

コメントがどこに保存され、どう管理できるのか
