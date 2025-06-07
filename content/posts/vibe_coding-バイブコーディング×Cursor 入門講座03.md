---
title: "[Vibe Coding] バイブコーディング × Cursor 入門講座 03 (Webで動くチャットUIを作る)"
slug: vibe_coding-cursor-practice03
date: 2025-06-07T12:01:00.000Z
summary: "バイブコーディング × Cursor 入門講座 03 「Webで動くチャットUIを作る」─ 静的サイトでもリアルに動く！AI対話UIのはじめかた"
description: "バイブコーディング × Cursor 入門講座 03 「Webで動くチャットUIを作る」─ 静的サイトでもリアルに動く！AI対話UIのはじめかた"
draft: false
author: lain
categories:
  - バイブコーディング
tags:
  - Vibe Coding
  - 入門講座
  - Cursor
  - OpenAI
  - チャットアプリ
  - ChatGPT
weight: 9
image: /images/uploads/vibe_coding-cursor-practice03.webp
---

<center>
<img src="/images/uploads/vibe_coding-cursor-practice03.webp"
     alt="バイブコーディング × Cursor 入門講座 03 (Webで動くチャットUIを作る) ─ 静的サイトでもリアルに動く！AI対話UIのはじめかた"
     style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>


## はじめに

### これまでの振り返りと目標

前回の記事で、チャットアプリのフロントエンドを作成するところまで勧めており、今回はその続きです。<br>
詳細は以下の前回の記事を参照ください。

{{< link-card url="https://humanxai.info/posts/vibe_coding-cursor-practice02/" title="[Vibe Coding] バイブコーディング × Cursor 入門講座 02 (実践の次へ ─ 応用・連携・理解)" description="バイブコーディング × Cursor 入門講座 02 (実践の次へ ─ 応用・連携・理解を深める)" image="https://humanxai.info/images/uploads/vibe_coding-cursor-practice02.webp" >}}

完成サンプルのデモも公開中です。

{{< link-card url="https://humanxai.info/sample/chatui/" title="Cursor 実践：ミニWebアプリ" description="吹き出しUIチャット（対話録表示に応用）" image="/images/thumb1.jpg" >}}


目標としては、ChatGPT（OpenAI）とAPI接続によるAI対話化まで進めていく予定です。<br>

技術的な面で挫折した場合も、失敗事例としても参考になると思いますのでそのまま公開する予定です。


## 1. HTML/CSSによるチャットUIの再設計

このステップでは、既存のチャットUIを Tailwind CSS を活用して洗練されたものに再設計し、見た目とユーザビリティの両面から改善していきます。

### 目的

- モダンでシンプルなデザインにすることで、ユーザーのストレスを減らす
- モバイルでも快適に動作するレスポンシブな設計を目指す
- 吹き出しUI＋モーダル表示によって、自然な対話体験を提供


### Tailwind CSS を用いたレイアウト設計

Tailwind CSSは、ユーティリティファーストなCSSフレームワークで、複雑なCSSを記述することなく、クラス指定だけでデザインが完結します。

以下は主なUIパーツとTailwindの活用例です：

| UI要素                 | Tailwindクラスの例                                                      | 説明                                   |
| ---------------------- | ----------------------------------------------------------------------- | -------------------------------------- |
| チャットバブル（自分） | `bg-blue-500 text-white rounded-lg p-2`                                 | 自分の発言を青い吹き出しで強調         |
| チャットバブル（相手） | `bg-gray-200 text-gray-800 rounded-lg p-2`                              | 相手（AI）の発言を目立たせず自然に表示 |
| 入力フォーム           | `border rounded w-full p-2 focus:outline-none`                          | シンプルで美しい入力欄                 |
| モーダルウィンドウ     | `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center` | 画面中央に半透明のオーバーレイ         |


###  スマホ対応のレスポンシブ設計

Tailwindでは sm:, md:, lg: などのブレークポイントを使って簡単にレスポンシブ対応が可能です。

```
<div class="max-w-md w-full sm:max-w-lg lg:max-w-2xl mx-auto">
  <!-- コンテンツ -->
</div>
```
このように、画面サイズに応じて最適な表示幅を調整できます。

###  吹き出し／モーダルUIの強化

UIの強化ポイント：

- チャットがスクロールで追従する（overflow-y-scroll＋max-height）
- 吹き出しの向きを変えて対話っぽく（flex justify-start / justify-end）
- メッセージのアニメーション表示（Tailwindの transition, duration-300 など）



<a href="/images/uploads/vibe_coding-cursor-practice03-request01.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice03-request01.jpg"
         alt="Cursor:Webで動くチャットUIを作る-吹き出し／モーダルUIの強化>"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/vibe_coding-cursor-practice03-request02.jpg" >
<img src="/images/uploads/vibe_coding-cursor-practice03-request02.jpg"
         alt="Cursor:Webで動くチャットUIを作る-吹き出し／モーダルUIの強化2>"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

完成品をgifアニメにしてみました。

<a href="/images/uploads/vibe_coding-cursor-practice03-request01.gif" >
<img src="/images/uploads/vibe_coding-cursor-practice03-request01.gif"
         alt="Cursor:Webで動くチャットUIを作る-吹き出し／モーダルUIの強化>"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 理由とメリット：
- 修正箇所が明確：Cursorは具体的なUI修正に強いです。上記のように意図を簡潔に伝えることで、DOM構造やTailwindのクラスを自動調整してくれます。
- レスポンシブ設計の一部になる：スクロールや左右配置はモバイルビューでも効果的。
- Tailwindのクラス適用はCursorが得意：一括置換・追加処理も迅速です。

### 補足

Tailwind CSS の導入メモ

現在はCDNで読み込んでいます：
```
<script src="https://cdn.tailwindcss.com"></script>
```

これで開発初期の高速プロトタイピングには十分ですが、ビルド最適化（本番用）には PostCSS などを使ったビルド型導入が望ましいです（今はCDNでOKです）。

Tailwindはクラス名が多くなりやすいので、class="..."の中の記述が煩雑になったら「このクラス整理して」と頼むのも有効です。


### 完成サンプル（参考）

すでに構築済みの /static/sample/chatui/ のスタイルをベースに、次は /chatui-ai/ に発展させていきます。

💡公開済みデモ：
<https://humanxai.info/sample/chatui/>





## 2. JavaScriptによるチャット入力処理の実装

### 目的

- ユーザーがメッセージを入力 → 送信 → 画面に表示されるまでの一連のフローを実装
- 擬似的にAIの返信も生成して表示（後でChatGPT APIに差し替え可能な構造）

### 実装ステップ（index.htmlに直接記述）

以下の追加・変更を行ってください：

#### ステップ1：inputとbuttonを取得

```
const inputField = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button.bg-blue-500');
```

#### ステップ2：イベントで送信処理

```
sendButton.addEventListener('click', () => {
    const text = inputField.value.trim();
    if (text !== '') {
        addMessage('user', text);
        inputField.value = '';

        // 疑似的なAIレスポンス（2秒後に返信）
        setTimeout(() => {
            addMessage('ai', `「${text}」に関する情報を検索しています…`);
        }, 1000);
    }
});
```

#### ステップ3：メッセージ表示関数

```
function addMessage(sender, text) {
    const container = document.createElement('div');
    container.className = `flex items-start ${sender === 'user' ? 'justify-end' : 'justify-start'} space-x-2 message-animation`;

    const bubble = document.createElement('div');
    bubble.className = `${sender === 'user' ? 'bg-green-50' : 'bg-blue-50'} rounded-lg p-3 max-w-[70%] shadow-sm`;
    bubble.innerHTML = `<p class="text-gray-800">${text}</p>`;

    const icon = document.createElement('div');
    icon.className = 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center';
    icon.classList.add(sender === 'user' ? 'bg-green-100' : 'bg-blue-100');
    icon.textContent = sender === 'user' ? '🧑‍💻' : '🤖';

    if (sender === 'user') {
        container.appendChild(bubble);
        container.appendChild(icon);
    } else {
        container.appendChild(icon);
        container.appendChild(bubble);
    }

    chatContainer.appendChild(container);
}
```


一連の実装方法をマークダウン形式で作成しました。

> **MarkDown-File**: <a href="/download/chatui-js-spec.md">chatui-js-spec.md</a>

これをCursorへドロップしこのファイルを元に実装してくださいと要求。




テキスト入力欄・送信ボタン・Enterキーで送信

自動スクロール・メッセージ追加

入力欄リセット・バリデーション

## 3. ChatGPT APIとの連携（構想段階でもOK）
fetchでPOSTリクエストを送る

APIキーの扱い（セキュリティの注意点）

応答メッセージの取得・表示

## 4. Hugoとの統合（オプション）
/static/内に配置してブログ上で動作させる方法

Hugo shortcodeで埋め込み表示する構想

Web UIとしての配布・共有案

## 5. 振り返りと今後の可能性
学んだことの整理

Hugoや静的サイトでのインタラクション強化のヒント

シリーズの今後の展望（Hugo連携／開発ジャンル考察）

## ✍️ 備考：並行してまとめると良い内容（別記事や付録にしてもOK）
Cursorの便利なショートカット・設定まとめ

ChatGPTとの違いや使い分け

## よくあるエラーと対処法

## Tailwind CSSの導入Tips
