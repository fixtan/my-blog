---
title: "[Hugo] 記事に吹き出しメッセージを作る（Goテンプレート）"
slug: hugo-chat-bubble
date: 2025-06-06T09:00:00.000Z
summary: "Hugoで記事に吹き出しメッセージを作る方法の紹介（Goテンプレート）"
description: "Hugoで記事に吹き出しメッセージを作る方法の紹介（Goテンプレート）"
draft: false
author: lain
categories:
  - Human x AI
tags:
  - 吹き出しメッセージ
  - Goテンプレート
  - chat bubble
  - カスタム
  - CSS
  - HTML
weight: 10
image: /images/uploads/hugo-chat-bubble.webp
---


<center>
<img src="/images/uploads/hugo-chat-bubble.webp"
     alt="Hugoで記事に吹き出しメッセージを作る方法の紹介（Goテンプレート）"
     style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>

## はじめに

AIとの対話ログを記事として公開するにあたり、単純に文書の引用をするだけよりは、漫画のように吹き出しメッセージで対話してる感がある方がより視覚的にも分かりやすいと思い実装してみたメモです。

## HTML+CSSで実装

### 🧩 吹き出し対話CSSの構成プラン（Markdownでも再現可能）

 基本構成イメージ（HTMLベース）
```
<div class="chat-container">
  <div class="chat-row user">
    <div class="chat-icon">🧑‍💻</div>
    <div class="chat-bubble user-bubble">今日はバイブコーディングの動画を見てすごく衝撃を受けました。</div>
  </div>

  <div class="chat-row ai">
    <div class="chat-icon">🤖</div>
    <div class="chat-bubble ai-bubble">それは良い刺激ですね。Markdownの構造化とAIの連携がポイントですよ。</div>
  </div>
</div>
```

🎨 対応CSS（例）
```
.chat-container {
  margin: 1em 0;
  font-family: sans-serif;
}
.chat-row {
  display: flex;
  margin-bottom: 0.75em;
  align-items: flex-start;
}
.chat-row.user {
  flex-direction: row-reverse;
}
.chat-icon {
  width: 2em;
  text-align: center;
  font-size: 1.5em;
  margin: 0 0.5em;
}
.chat-bubble {
  padding: 0.75em 1em;
  border-radius: 1em;
  max-width: 80%;
  line-height: 1.4;
}
.user-bubble {
  background: #daf1ff;
  color: #004466;
}
.ai-bubble {
  background: #f0f0f0;
  color: #333;
}
```


### 📝 Markdownで書くには？

Markdownだけでは吹き出しを完全に制御するのは難しいですが、Hugo + HTML埋め込みOK設定がされていれば、記事内でそのままHTMLを使うことで実現できます。

🛠 実装手順まとめ（Hugo向け）
1. static/css/chat-bubble.css に上記CSSを保存

2. layouts/partials/head.html に次を追記：

```
<link rel="stylesheet" href="/css/chat-bubble.css" />
```

3. 記事内で <div class="chat-container">...</div> を使えば表示されます。


<a href="/images/uploads/hugo-chat-bubble.jpg" target="_blank">
<img src="/images/uploads/hugo-chat-bubble.jpg"
         alt="Hugoで記事に吹き出しメッセージを作る方法の紹介"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### 特に良かったポイント

- 💬 吹き出しのラウンド処理と背景色で視認性が高い

- 🧑‍💻🤖 アイコン＋セリフのコンビネーションがすぐ会話と分かる

- 🔗 タグ「#バイブコーディング」「#エッセイ」などの分類も◎



## Goテンプレートで実装

### Hugo向けショートコード例（chat.html）

path: layouts/shortcodes/chat.html

```
{{ $speaker := .Get "speaker" }}
{{ $icon := .Get "icon" }}

<div class="chat-row {{ $speaker }}">
  <div class="chat-icon">{{ $icon }}</div>
  <div class="chat-bubble {{ $speaker }}-bubble">
    {{ .Inner | markdownify }}
  </div>
</div>
```

### 記事Markdownでの使い方

{{</*
```
{{< chat speaker="user" icon="🧑‍💻" >}}
今日はバイブコーディングの動画を見てすごく衝撃を受けました。
{{< /chat >}}

{{< chat speaker="ai" icon="🤖" >}}
それは良い刺激ですね。Markdownの構造化とAIの連携がポイントですよ。
{{< /chat >}}
```
*/>}}

<a href="/images/uploads/hugo-chat-bubble2.jpg" target="_blank">
<img src="/images/uploads/hugo-chat-bubble2.jpg"
         alt="Hugoで記事に吹き出しメッセージを作る方法の紹介 Goテンプレートバージョン"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 🎨 CSSクラスはそのまま

- chat-row user / chat-row ai
- .user-bubble / .ai-bubble

CSSはそのままで、HTMLだけショートコードに入れ替えることで運用がグッとスマートになります。


## 応用案（Optional）

- speaker を "system" や "assistant" などにも拡張可能

- icon に絵文字でなく画像URLを渡す（オリジナルキャラ風）

- position="left" / "right" で左右配置を切替できるようにしても◎

