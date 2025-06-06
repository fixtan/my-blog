---
title: "[Vibe Coding] バイブコーディング × Cursor 入門講座 01 (Cursorの導入と基本操作)"
slug: vibe_coding-cursor-practice01
date: 2025-06-06T9:00:00.000Z
summary: "バイブコーディング × Cursor 入門講座 01 (Cursorの導入と基本操作)"
description: "バイブコーディング × Cursor 入門講座 01 (Cursorの導入と基本操作)"
draft: false
author: lain
categories:
  - バイブコーディング
tags:
  - バイブコーディング
  - Vibe Coding
  - Cursor
  - 入門講座
weight: 9
image: /images/uploads/vibe_coding-cursor-practice01.webp
---


<center>
<img src="/images/uploads/vibe_coding-cursor-practice01.webp"
     alt="バイブコーディング × Cursor 入門講座 01"
     style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>


##  Cursorとは何か？

AIアシスタントと対話しながらコードを書く、次世代のエディタ

VSCode（Visual Studio Code）をベースにしており、操作感はVSCodeとほぼ同じですが、
**「コードへのAIチャット統合機能」** が圧倒的に強化されています。

## できること（ざっくり）

| 機能                                       | 説明                                     |
| ------------------------------------------ | ---------------------------------------- |
| 🤖 コードにコメントするとAIが補完してくれる | `// make this responsive` → すぐ実装     |
| 💬 どこでもAIチャット                       | 画面右 or インラインで自然文から命令可能 |
| 🧪 テスト生成やデバッグも一緒にできる       | 自動テストコード生成も可                 |
| ✏️ 複数ファイルを横断してAIが編集           | 指定した範囲だけ・全体設計も理解する     |


## 1-1. インストール手順

### Step 1：公式サイトにアクセス

{{< link-card url="https://www.cursor.sh/" title="Cursor - The AI Code Editor" description="Built to make you extraordinarily productive, Cursor is the best way to code with AI." image="https://www.cursor.com/ja/opengraph-image.png?375711d39ab904b7" >}}

### Step 2：OSにあわせてダウンロード

- Windows：.exe ファイル
- macOS：.dmg ファイル
- Linux：AppImage or .deb

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-download.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-download.jpg"
         alt="Cursor ダウンロード"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br />
<br />

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-download2.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-download2.jpg"
         alt="Cursor ダウンロード"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




### Step 3：インストールして起動

1. 通常のアプリケーションと同様にインストール


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install01.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install01.jpg"
         alt="Cursor インストール 01"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install02.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install02.jpg"
         alt="Cursor インストール 02"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install03.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install03.jpg"
         alt="Cursor インストール 03"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install04.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install04.jpg"
         alt="Cursor インストール 04"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install05.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install05.jpg"
         alt="Cursor インストール 05"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install06.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install06.jpg"
         alt="Cursor インストール 06"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>
<br>

<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install07.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install07.jpg"
         alt="Cursor インストール 07"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

2. 起動後、VSCodeそっくりな画面が立ち上がるはずです


<a href="/images/uploads/vibe_coding-cursor-practice01-cursor-install07.jpg" target="_blank">
<img src="/images/uploads/vibe_coding-cursor-practice01-cursor-install07.jpg"
         alt="Cursor インストール 07"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>











