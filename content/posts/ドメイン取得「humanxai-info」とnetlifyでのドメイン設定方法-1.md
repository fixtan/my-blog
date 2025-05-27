---
title: netlifyでのドメイン設定方法
date: 2025-05-26 08:17:00
draft: false
author: lain
image: /images/uploads/はてなブログ　アイキャッチ画像　はてブ　blog-8-.png
summary: netlifyでのドメイン設定方法の紹介
categories:
  - netlify
tags:
  - カスタマイズ
weight: 4
---
<a href="/images/uploads/はてなブログ　アイキャッチ画像　はてブ　blog-4-.png" target="_blank">
  <img src="/images/uploads/はてなブログ　アイキャッチ画像　はてブ　blog-4-.png" alt="NetlifyのDNS設定" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

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

<a href="/images/uploads/イメージ16094.jpg" target="_blank">
  <img src="/images/uploads/イメージ16094.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Add a domain you already ownを選択

<a href="/images/uploads/イメージ16096.jpg" target="_blank">
  <img src="/images/uploads/イメージ16096.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Verifyをクリック。

<a href="/images/uploads/イメージ16098.jpg" target="_blank">
  <img src="/images/uploads/イメージ16098.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Add domainをクリック

<a href="/images/uploads/イメージ16100.jpg" target="_blank">
  <img src="/images/uploads/イメージ16100.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

ここまで来たらドメイン管理画面の方で設定。

<a href="/images/uploads/イメージ16101.jpg" target="_blank">
  <img src="/images/uploads/イメージ16101.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

## CNAME を設定する

ムームードメインにログイン

左メニューから「ムームーDNS」→「ムームーDNS設定変更」

対象ドメイン を選ぶ

表の一番下にある「カスタム設定」→「カスタム設定２」→「設定を追加する」

<a href="/images/uploads/イメージ16103.jpg" target="_blank">
  <img src="/images/uploads/イメージ16103.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

サブドメイン、種別「CNAME」、内容を入力して、設定を追加。

※設定反映には１時間以上、最大２日ぐらいかかる場合があります。

<a href="/images/uploads/イメージ16124.jpg" target="_blank">
  <img src="/images/uploads/イメージ16124.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

netlifyの設定画面に戻り、Verift DNS　configration をクリックして反映されれば成功です。

<a href="/images/uploads/イメージ16114.jpg" target="_blank">
  <img src="/images/uploads/イメージ16114.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

上の画像が下の様になれば成功。

<a href="/images/uploads/netlify-dns-setting.jpg" target="_blank">
  <img src="/images/uploads/netlify-dns-setting.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

## DNS checker

序にDNS checkerサイトでドメインを確認しておくと安心。

https://dnschecker.org/#A/humanxai.info

<a href="/images/uploads/netlify-dns-setting-dnschecker.jpg" target="_blank">
  <img src="/images/uploads/netlify-dns-setting-dnschecker.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

## ドメインにアクセスすると警告（SSL証明書）

一連の設定が完了するとドメインでWEBにアクセスできるようになりますが、初期段階では以下のような警告画面が出る場合があります。

<a href="/images/uploads/ssl-warning.jpg" target="_blank">
  <img src="/images/uploads/ssl-warning.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

🔐 警告の理由：「SSL証明書の発行プロセスがまだ完全に完了していない」
Netlify の「SSL/TLS certificate」セクションに：

> ✅ DNS verification was successful
>
> 🚫 でも証明書がまだ provision（発行）されていない

という状態なので、https 通信が有効化される前段階です。

### ✅ 解決方法

SSL証明書の発行には数分～最大24時間ほどかかる場合がありますので暫く待つ必要があります。

ちなみにうちの場合は１時間ぐらいで警告が消え表示されるようになりました。

## ドメインにアクセスできなくなる

暫くするとドメインにアクセスできなくなる不都合が出た為、netlify側でDNSの設定をするように変更。

ドメインマネージメントの画面から、

> optionss -> Set up Netlify DNS

を選択。画像では、www.humanxai.info になってますが、正確には、**.humanxai.info** の方。

<a href="/images/uploads/netlify-domain-dns.jpg" target="_blank">
  <img src="/images/uploads/netlify-domain-dns.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

<a href="/images/uploads/netlify-domain-dns2.jpg" target="_blank">
  <img src="/images/uploads/netlify-domain-dns2.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

<a href="/images/uploads/netlify-domain-dn3.jpg" target="_blank">
  <img src="/images/uploads/netlify-domain-dn3.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

<a href="/images/uploads/netlify-domain-dns4.jpg" target="_blank">
  <img src="/images/uploads/netlify-domain-dns4.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

Update your domain's name servers まで進めたらネームサーバリストをメモ。

ムームードメインの「ネームサーバ設定変更」を選択し「GMOペパポ以外のネームサーバを使用する」を選択するとネームサーバ入力欄が出るので、先程メモしたネームサーバを設定。

<a href="/images/uploads/mu-mu-domein-namesever.jpg" target="_blank">
  <img src="/images/uploads/mu-mu-domein-namesever.jpg" alt="NetlifyのDNS設定" style="max-width:90%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</a>

設定保存したら、Netlifyのドメイン設定画面に戻りRetry DNS verification をクリック。



設定反映されるまで最小で１時間、最大で２日ぐらいかかるようなので、更新完了するまで暫く待ちます。

以上、ドメイン取得からnetlifyでのドメイン設定や、ドメインサイトでのCNAME設定など、一連の流れを紹介しました。

ご参考になれば幸いです。
