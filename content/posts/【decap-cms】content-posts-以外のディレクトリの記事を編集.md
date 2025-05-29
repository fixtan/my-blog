---
title: 【Decap CMS】content/posts 以外のディレクトリの記事を編集
slug: decap-directory-edit
date: 2025-05-29T08:55:00.000Z
draft: false
author: lain
image: /images/uploads/decapcms-custom-01.png
summary: Decap CMSでcontent/posts 以外のディレクトリ記事を編集する方法の紹介
categories:
  - Decap CMS
tags:
  - カスタム
  - ブログ
weight: 9
---
<center>
<a href="/images/uploads/decapcms-custom-01.png" target="_blank">
  <img src="/images/uploads/decapcms-custom-01.png" alt="【Decap CMS】content/posts 以外のディレクトリの記事を編集" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a></center>




## はじめに


Hugo + GitHub + Netlify + Decap CMSという特殊な環境でブログを作成し、記事を書いてるのですが、最初は凄く戸惑いましたが、今となってはかなり慣れてきてgitコマンドも普通に叩き、Netlify の英語だらけのメッセージも毎日見てるので慣れてきて、デプロイチェックとか、独自ドメインを設定するまでに至ってます。


MarkDownの記述にも慣れてきたので、過去にZennで書いた記事を此方へ移植しようかなとも思ってます。


前置きは置いておいて、Decap CMSは、デフォルトではcontent/posts 以外のディレクトリに配置されたブログ記事を編集できない仕様になってますが、AIに聞いたところconfig.ymlを編集する事で、別のフォルダの記事を編集可能になるようです。


ネット上にNetlify + Decap CMSに関する情報が殆どないのもあり、今回も記事ネタとして作業工程を紹介したいと思います。


もし参考にあれば幸いです。


## content/(Hogeh) の記事を CMS から編集したい


タイトル通り、content/posts以外の場所にある記事をDecap CMSから編集する方法です。


ここでは、「 **content/featured** 」というディレクトリにある記事を編集する前提で進めていきます。


まず、Decap CMSの設定ファイルである、config.ymlをVScodeなどのエディタで開きます。


大体ローカル内では以下のようなパスになってると思います。


>  **\my-blog\static\admin\config.yml** 


config.yml の collectionsセクションを探します。
大体、デフォルト設定だと最後の方にあると思います。


```
[...]


collections:
  - name: "post"
    label: "記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"


    fields:
      - { label: "タイトル", name: "title", widget: "string" }
      - { label: "日付", name: "date", widget: "datetime" }
      - { label: "下書き", name: "draft", widget: "boolean", default: false }
      - { label: "著者", name: "author", widget: "string", default: "lain" }
      - { label: "画像", name: "image", widget: "image" }
      - { label: "概要", name: "summary", widget: "text", required: false }
      - { label: "本文", name: "body", widget: "markdown" }  
      - { label: "カテゴリ", name: "categories", widget: "list", default: ["未分類"] }
      - { label: "タグ", name: "tags", widget: "list" , field: { name: "tag", widget: "string" } }
      - { label: "表示順（weight）", name: "weight", widget: "number", required: false, default: 20 }
```


ここに以下のような項目を追加。
fieldsはお好みで追加してください。


```
- name: "featured"
  label: "ラベル名"
  folder: "content/featured"
  create: true
  slug: "{{slug}}"
  fields:
    - { label: "タイトル", name: "title", widget: "string" }
    - { label: "日付", name: "date", widget: "datetime" }
    - { label: "本文", name: "body", widget: "markdown" }
    - { label: "表示順（weight）", name: "weight", widget: "number", required: false }
    - { label: "タグ", name: "tags", widget: "list", field: { name: "tag", widget: "string" }, required: false }
```


この設定を config.yml の collections セクションに追加すると、CMSのサイドバーに「注目プロジェクト」が出てくるようになります。
