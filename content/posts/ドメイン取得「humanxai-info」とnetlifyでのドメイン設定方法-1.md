---
title: ドメイン取得「humanxai.info」とnetlifyでのドメイン設定方法
date: 2025-05-25T20:02:00.000Z
draft: false
author: lain
summary: humanxai.infoドメインを取得したので、netlifyでのドメイン設定方法の紹介
categories:
  - netlify
tags:
  - カスタマイズ
---
✅ ステップ1：Netlify側で独自ドメインを設定
Netlify のダッシュボードにアクセス

対象のサイト（steady-malasada-〜〜）を選択

左メニュー → Domain settings → Add custom domain

humanxai.info を入力し「Verify」→「Add domain」

![](/images/uploads/イメージ16094.jpg)

Add a domain you already ownを選択

![](/images/uploads/イメージ16096.jpg)

Verifyをクリック。

![](/images/uploads/イメージ16098.jpg)

Add domainをクリック

![](/images/uploads/イメージ16100.jpg)



ここまで来たらドメイン管理画面の方で設定。



![](/images/uploads/イメージ16101.jpg)




### 🔧 手順：CNAME を設定する

ムームードメインにログイン

左メニューから「ムームーDNS」→「ムームーDNS設定変更」

対象ドメイン を選ぶ

表の一番下にある「カスタム設定」→「カスタム設定２」→「設定を追加する」

![](/images/uploads/イメージ16103.jpg)



サブドメイン、種別「CNAME」、内容を入力して、設定を追加。

※設定反映には１時間以上、最大２日ぐらいかかる場合があります。

![](/images/uploads/イメージ16111.jpg)



netlifyの設定画面に戻り、Verift DNS　configration をクリックして反映されれば成功です。



![](/images/uploads/イメージ16114.jpg)
