---
title: netlifyでのドメイン設定方法（ムームードメイン）
date: 2025-05-25T20:02:00.000Z
draft: false
author: lain
summary: netlifyでのドメイン設定方法の紹介
categories:
  - netlify
tags:
  - カスタマイズ
---
## はじめに

Netlifyで、静的ジェネレーター、Hugoを使いブログ作成をはじめ、形になってきたので、ドメインを取得してみました。

ドメイン取得には、以前契約したムームードメインを使いましたが、契約時にレンタルサーバーの契約が６か月発生するので、ご注意ください。
ドメインだけ取得したい場合は別のサイトを検討された方が良いかもしれません。

## ドメインを取得

ムームードメインで取得する場合は、以下のURLで希望ドメインを入力して検索。

<https://muumuu-domain.com/domain/search?domain>\[]

※以後、humanxai.infoを取得した前提で進めていきます。

## Netlify側で独自ドメインを設定

Netlify のダッシュボードにアクセス

対象のサイト（steady-malasada-〜〜）を選択

左メニュー → Domain settings → Add custom domain

humanxai.info を入力し「Verify」→「Add domain」

<a href="/images/images/uploads/イメージ16094.jpg" target="_blank">
  <img src="/images/uploads/イメージ16094.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Add a domain you already ownを選択

<a href="/images/images/uploads/イメージ16096.jpg" target="_blank">
  <img src="/images/uploads/イメージ16096.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Verifyをクリック。

<a href="/images/images/uploads/イメージ16098.jpg" target="_blank">
  <img src="/images/uploads/イメージ16098.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Add domainをクリック

<a href="/images/images/uploads/イメージ16100.jpg" target="_blank">
  <img src="/images/uploads/イメージ16100.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

ここまで来たらドメイン管理画面の方で設定。

<a href="/images/images/uploads/イメージ16101.jpg" target="_blank">
  <img src="/images/uploads/イメージ16101.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

## CNAME を設定する

ムームードメインにログイン

左メニューから「ムームーDNS」→「ムームーDNS設定変更」

対象ドメイン を選ぶ

表の一番下にある「カスタム設定」→「カスタム設定２」→「設定を追加する」

<a href="/images/images/uploads/イメージ16103.jpg" target="_blank">
  <img src="/images/uploads/イメージ16103.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

サブドメイン、種別「CNAME」、内容を入力して、設定を追加。

※設定反映には１時間以上、最大２日ぐらいかかる場合があります。

![](/images/uploads/イメージ16124.jpg)


<a href="/images/images/uploads/イメージ16103.jpg" target="_blank">
  <img src="/images/uploads/イメージ16124.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>




netlifyの設定画面に戻り、Verift DNS　configration をクリックして反映されれば成功です。

<a href="/images/images/uploads/イメージ16114.jpg" target="_blank">
  <img src="/images/uploads/イメージ16114.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>
