---
title: Decap CMSとの格闘録 ― Duplicate問題とIndexedDBの残高の6時間
slug: DecapCMS-bug-Duplicate-IndexedDB-bug
summary: Decap CMSとの格闘録 ― Duplicate問題とIndexedDBの残高の6時間
description: Decap CMSとの格闘録 ― Duplicate問題とIndexedDBの残高の6時間
date: 2025-05-31T19:10:00.000Z
draft: false
author: lain
categories:
  - Decap CMS
tags:
  - Duplicate
  - IndexedDB
  - バグ
weight: 1
image: /images/uploads/avatar.png
---
# Decap CMSとの格闘録 ― Duplicate問題とIndexedDBの残高の6時間

※注意※このこの記事は、AIが全文書いています。

Decap CMSのバグと格闘した記録を私が書く気力がなかったので、全文書いてくださいとお願いしたところ、出力してくれた内容です。


---

## サイト構成

* Hugo + PaperMod
* Netlify (GitHub Pages + Git Gateway)
* Decap CMS (v3.x)
* custom CSS + preview-templates.js

---

## 発立

### 現象

* 任意の記事をDecap CMSで開い、変更せずに戻るだけで "Duplicate" が発生
* Netlifyのデプロイエラー (Exit code 2)
* IndexedDB 内にキャッシュが残るような動作、ServiceWorker の異常

---

## 対応箇条

### 1. Git reset & Netlify re-deploy

```bash
git reset --hard c43ba98
# (問題発生前の健全コミット)
git push origin main --force
```

* 健全な状態へ復元
* しかしCMSは復旧したのちに再発。

### 2. `identifier_field: title` をconfig.ymlに追加

```yaml
collections:
  - name: "post"
    label: "記事"
    folder: "content/posts"
    create: true
    identifier_field: title
```

→ 効果なし

### 3. ブラウザのクリーン

* IndexedDB
* Local/Session Storage
* Service Worker
* Cookie
* → 前回はこれで治ったが、今回は無効

---

## 探索: Decap CMSバージョン選択

* 3.6.0 → 失敗
* 3.4.0 → 失敗
* 3.3.1 → 最も動いたが、結局Duplicate再発

### 前提:

* preview-templates.js を `DOMContentLoaded` 後に読み込まないと `CMS.registerPreviewStyle` が失敗する

---

## 最終的な対応

### 1. CMS.init()の後に preview-templates.js 読み込み

```html
<script>
  CMS.init();
  const script = document.createElement("script");
  script.type = "module";
  script.src = "/admin/preview-templates.js";
  document.body.appendChild(script);
</script>
```

### 2. Decap CMSの使用を見直し

* CMSは「編集」ではなく「表示」のみにしよう
* 記事はローカルでVS Codeなどで書いてGit管理へ

---

## 感想

> 努力しても報われないことはよくある

その通りですが、この記録は実は「努力は逆コストな知見」をためてくれました。

> 「不要な歩みを通ることでしか、導けない地点がある」

素晴らしい構成のブログに追加される記録として、なるべく皆に分かりやすくするよう、我々もコピーできたら…と願います。

---

🧠 本記事は、ChatGPT による支援のもとで構成・編集されています。
実際の調査・検証・投稿は著者自身が行っています。
同様のエラーで悩む方の参考になれば幸いです。

