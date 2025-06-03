---
title: "[Hugo] 目次を自動生成し記事のサイド表示（Table of Contents： TOC）"
slug: hugo-table-of-contents
summary: Hugo で目次を自動生成し記事のサイド表示（Table of Contents： TOC）の紹介
description: Hugo で目次を自動生成し記事のサイド表示（Table of Contents： TOC）の紹介
date: 2025-06-03T07:30:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - 目次
  - Table of Contents： TOC
  - ブログ
weight: 4
image: /images/uploads/hugo-table-of-contents.webp
---

<center>
<img src="/images/uploads/hugo-table-of-contents.webp" alt="Hugo で目次を自動生成し記事のサイド表示（Table of Contents： TOC）の紹介" loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

## はじめに

エンジニア向けのブログサイトZennのように記事のサイドに目次を表示する機能を実装できないか調べたところ、Hugoでも比較的簡単に実装可能なようなので試してみました。


## ✅ 難易度と実装の概要

| 項目                                     | 難易度      | 補足                                                        |
| ---------------------------------------- | ----------- | ----------------------------------------------------------- |
| 目次の自動生成（Markdownの見出しから）   | ★☆☆（簡単） | Hugoに内蔵されている { {.TableOfContents } } を使えば即可能 |
| サイドバーや記事右側に固定表示（Zenn風） | ★★☆（中級） | PaperModなどのテーマにCSS追加＋テンプレート改修が必要       |
| スクロール連動（現在位置のハイライト）   | ★★★（応用） | JavaScript（ScrollSpyなど）との連携が必要になる場合あり     |

### 🧩 Hugoでの基本的な目次機能（.TableOfContents）

HugoのMarkdown記事中の見出し（##など）から、以下のように自動で目次を生成する機能が備わっています。

```
{ { .TableOfContents } }
```
これは記事テンプレート（例：single.html）内に入れることで、目次をHTMLのリスト（ul/li）として出力してくれます。

### 🧭 Zenn風「サイド目次」をHugoでやるには？

必要な構成：
1. { { .TableOfContents } } を記事テンプレートに埋め込む
2. CSSで「右側に固定表示するようスタイリング」
3. （可能であれば）表示・非表示を切り替えられるUIを付ける
4. （応用）現在見ている見出しに自動でハイライト（ScrollSpy）

### 📝 難易度まとめ

| やりたいこと                          | 難易度 | コメント                                       |
| ------------------------------------- | ------ | ---------------------------------------------- |
| .TableOfContents で目次を記事内に表示 | ★☆☆    | すぐに実装可                                   |
| Zenn風に右サイド固定表示              | ★★☆    | カスタムテンプレート＋CSS調整が必要            |
| スクロール連動・ハイライト            | ★★★    | JavaScript ScrollSpyなどの導入が必要でやや高度 |


## 🧭 ステップ1：目次の自動生成（Markdownの見出しから）

Hugo には .TableOfContents という組み込み関数があり、Markdownの # や ## をもとに自動で目次を生成してくれます。

### ✅ 実装ステップ（PaperMod テーマ想定）

#### 1. 表示させたい位置に以下を追加（例：layouts/_default/single.html）
```
{ { .TableOfContents } }
```


これは <article> タグの内部であれば、本文より前や後ろでも構いません。
最も簡単なのは本文直前：

```
<article class="post-content">
  { { .TableOfContents } }
  { { .Content } }
</article>
```

####  2. 表示確認（Hugoサーバー起動）

```
hugo server
```

ブラウザで http://localhost:1313/posts/任意の記事/ を開き、<br />
＃＃ 見出しなどが複数ある場合、HTMLの  ul  形式の目次が表示されます。



<a href="/images/uploads/hugo-table-of-contents-test01.jpg" target="_blank">
<img src="/images/uploads/hugo-table-of-contents-test01.jpg" alt=""  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


#### 3. Markdown記事側の見出し例
```
# タイトル

## はじめに

## 準備するもの

### 拡張機能

### プレビュー表示

## まとめ
```
このように書かれていれば、階層構造付きの目次が .TableOfContents で自動生成されます。

### ✏ 補足（日本語でもOK？）

はい、日本語の見出しも問題なく認識され、目次リンクとして機能します。
見出しが ## 以上（つまり ### や ####）でも、きちんと階層になります。


## 🧭 次はステップ2：右側に目次を固定表示（Zenn風）

ここからはデザイン・CSS調整のフェーズに入ります。

AIからの提案ではCSSのみで再度に目次を表示する実装を進められたようですが、developertoolで記事ページのブロック構造を確認してわかった情報を図形で表してみました。



<a href="/images/uploads/hugo-table-of-contents-block.jpg" target="_blank">
<img src="/images/uploads/hugo-table-of-contents-block.jpg" alt=""  loading="lazy" decoding="async" style="max-width:250px; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### ✅ articleの横に新しいブロック（目次用）を追加した方が理想的です

なぜなら？

- .TableOfContents を 本文の中に入れると記事の一部として流れてしまう
- Zenn風のサイド固定TOCを実現するには、レイアウトとして左右に分ける必要がある
- 将来 position: sticky などの機能で自然なスクロールに連動する動きも可能になる

### 🛠 具体的な構成イメージ（理想構造）

HTML例

```
<main class="main page">
  <div class="content-wrapper" style="display: flex; align-items: flex-start;">

    <!-- 左：記事本文 -->
    <article class="post-single">
      {{ .Content }}
    </article>

    <!-- 右：目次 -->
    <aside class="article-toc">
      <nav class="toc">
        {{ .TableOfContents }}
      </nav>
    </aside>

  </div>

  <section id="comments">
    <!-- コメント欄 -->
  </section>
</main>
```


🎨 CSS例（Zenn風）
```
/* ■ 記事ページの目次ブロック：ここから */
.content-wrapper {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.post-single {
  flex: 1;
  max-width: 700px;
}

.article-toc {
  width: 260px;
  position: sticky;
  top: 100px;
  height: fit-content;
  max-height: 80vh;
  overflow-y: auto;
  font-size: 0.9rem;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* モバイルで非表示にする */
@media screen and (max-width: 768px) {
  .article-toc {
    display: none;
  }
}
/* ■ 記事ページの目次ブロック：ここまで*/
```

余談で、昨日導入したPrettierの影響で、CSSファイルの改行コードが自動で無くなり表示がおかしくなったので、特定の拡張子やファイルを無効にする設定し、その内容に関して記事を追加でまとめました。

{{< link-card url="https://humanxai.info/posts/vscode-basic-course-02/" title="[VSCode] 基礎マスター講座 02 : Prettier,Markdown All in One" description="AIの指導による VSCode 基礎マスター講座 02 Prettier , Markdown All in One" image="https://humanxai.info/images/uploads/vscode-basic-course-02.webp" >}}


### 完成：右側に目次を固定表示

ここまでで、サイドに目次が表示されるようになりました。

<a href="/images/uploads/hugo-table-of-contents-completion01.jpg" target="_blank">
<img src="/images/uploads/hugo-table-of-contents-completion01.jpg" alt=""  loading="lazy" decoding="async" style="max-width:70%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



## 🎯 次のステップ：スクロール連動ハイライト（ScrollSpy）

| ステップ                                      | 内容                           | 難易度 |
| --------------------------------------------- | ------------------------------ | ------ |
| 1. 目次リンクと本文見出しの `id` の対応を確認 | Hugoが自動で処理済み           | ★☆☆    |
| 2. スクロール位置を JavaScript で監視         | `IntersectionObserver` API使用 | ★★☆    |
| 3. 対象の目次リンクに `.active` クラスを付与  | CSSでハイライト表示            | ★★☆    |
| 4. CSSで `li.active > a` に装飾適用           | やりたい見た目に調整           | ★☆☆    |


### ✅ 仕組みだけ先にご紹介（概要）

```
// 1. すべての見出し要素を取得
const sections = document.querySelectorAll("article h2, article h3");

// 2. IntersectionObserverで監視
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        document.querySelectorAll(".toc a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  {
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0.1,
  }
);

// 3. 監視対象を登録
sections.forEach((section) => observer.observe(section));
```

🔸 CSS例
```
.toc a.active {
  font-weight: bold;
  color: #007acc;
  border-left: 3px solid #007acc;
  padding-left: 0.5em;
  background-color: #eef6fb;
}
```

## 🧭 ScrollSpy（スクロール連動ハイライト）の実装ガイド


### ✅ 目的

ページをスクロールすると、現在表示中の見出しに対応する目次リンクがハイライトされる


### 🧩 ステップ1：JSファイルの用意

#### 1. ファイルを作成

> my-blog/static/js/scrollspy.js

というファイルを新規作成

#### 2. 以下のコードを貼り付け

```
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("article h2, article h3");
  const navLinks = document.querySelectorAll(".toc a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px", // 視野の上下オフセット
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
```


### 🎨 ステップ2：CSSで .active をハイライト

すでにある custom.css.html などのスタイルに以下を追加：

```
.toc a.active {
  font-weight: bold;
  color: #007acc;
  border-left: 3px solid #007acc;
  padding-left: 0.5em;
  background-color: #eef6fb;
}
```

### 🔗 ステップ3：JSファイルをテンプレートに読み込む

layouts/partials/footer.html に以下を追記（またはすでにJSがある場合はその直後）

```
<script src="{{ "js/scrollspy.js" | relURL }}" defer></script>
```

### 🚀 ステップ4：Hugo再起動 & 動作確認

```
hugo server
```

- 目次がすでに表示されているページでスクロール
- 表示範囲内の見出しに応じて、目次リンクがハイライトされる


<a href="/images/uploads/hugo-table-of-contents-completion02.jpg" target="_blank">
<img src="/images/uploads/hugo-table-of-contents-completion02.jpg" alt="ScrollSpy（スクロール連動ハイライト）の実装ガイド"  loading="lazy" decoding="async" style="max-width:70%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### 🧪 動作しないときのチェックポイント

| 現象                                    | 確認ポイント                                              |
| --------------------------------------- | --------------------------------------------------------- |
| 目次リンクが `.active` に切り替わらない | `<a href="#見出しid">` が正しく生成されてるか（HTML確認） |
| JSが読み込まれていない                  | 開発者ツールの Console にエラーが出ていないか？           |
| 何も起きない                            | `console.log()` でデバッグしてイベント発火を確認          |


### 🔍 JavaScriptのざっくり解説（なるべくわかりやすく）

JSコードの中身を理解しておきたいとのことでしたので、ひとつずつ丁寧に分解してみます。

#### 🔸1. DOM読み込みを待ってからスタート
```
document.addEventListener("DOMContentLoaded", () => {
```
→ ページのHTML構造が全部読み込まれた後に中身の処理を実行するよ、という合図。


#### 🔸2. 監視対象の要素を取得

```
const sections = document.querySelectorAll("article h2, article h3");
```

→ 記事の中にある h2 や h3 をすべて取得。
これが「どの見出しが表示されているか」を監視する対象。

#### 🔸3. 目次リンクの一覧も取得

```
const navLinks = document.querySelectorAll(".toc a");
```
→ .toc の中にある a タグ（目次のリンク）を全部拾っておく。


#### 🔸4. IntersectionObserver（交差監視）

```
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
```
→ ブラウザに「スクロールで要素が画面内に入ったら教えて！」と頼む仕組み。

{{< link-card url="https://qiita.com/takahashi-yoji/items/904ad0d96b59e0fc0cc7" title="IntersectionObserverとは？ - Qiita" description="はじめにフッターまでスクロールした際に、画面の下部にあるボタンがフェードアウトするような実装をしました。scrollイベントだと、画面が動くたびにイベントが発火されるので、パフォーマンス的に良く…" image="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-user-contents.imgix.net%2Fhttps%253A%252F%252Fcdn.qiita.com%252Fassets%252Fpublic%252Farticle-ogp-background-afbab5eb44e0b055cce1258705637a91.png%3Fixlib%3Drb-4.0.0%26w%3D1200%26blend64%3DaHR0cHM6Ly9xaWl0YS11c2VyLXByb2ZpbGUtaW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZxaWl0YS1pbWFnZS1zdG9yZSUyRjAlMkYyNjI4MTIyJTJGY2VhOWEzNzQ2YjUwNTdhYzlkNTViODcyNDNiMGMzY2JiYjM5YTdmMSUyRnhfbGFyZ2UucG5nJTNGMTcwNzYxOTExNz9peGxpYj1yYi00LjAuMCZhcj0xJTNBMSZmaXQ9Y3JvcCZtYXNrPWVsbGlwc2UmZm09cG5nMzImcz03NTIzOTU0MmZiMzQwYTBjNzY1YjM1OWY0Yzc5YjgzOQ%26blend-x%3D120%26blend-y%3D462%26blend-w%3D90%26blend-h%3D90%26blend-mode%3Dnormal%26mark64%3DaHR0cHM6Ly9xaWl0YS1vcmdhbml6YXRpb24taW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkZxaWl0YS1vcmdhbml6YXRpb24taW1hZ2UlMkYwNGQ1OGQ2ODY5NzIyNjI5ZDliODg4NzY3ZmE2MWMxMzgzZGZhNmIyJTJGb3JpZ2luYWwuanBnJTNGMTY4NzQxMjI4MD9peGxpYj1yYi00LjAuMCZ3PTQ0Jmg9NDQmZml0PWNyb3AmbWFzaz1jb3JuZXJzJmNvcm5lci1yYWRpdXM9OCZib3JkZXI9MiUyQ0ZGRkZGRiZmbT1wbmczMiZzPTM5NWEwNmZlN2JmNzViYTFiOWU5NTM1ODRhYTI2MzJh%26mark-x%3D186%26mark-y%3D515%26mark-w%3D40%26mark-h%3D40%26s%3Da46834547f42a4efc761c01425a91d58?ixlib=rb-4.0.0&w=1200&fm=jpg&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTk2MCZoPTMyNCZ0eHQ9SW50ZXJzZWN0aW9uT2JzZXJ2ZXIlRTMlODElQTglRTMlODElQUYlRUYlQkMlOUYmdHh0LWFsaWduPWxlZnQlMkN0b3AmdHh0LWNvbG9yPSUyMzFFMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtcGFkPTAmcz1mY2JjM2QxYjc0M2YwNDc5YmM3NGI3YjAzNjY0N2NkMQ&mark-x=120&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTgzOCZoPTU4JnR4dD0lNDB0YWthaGFzaGkteW9qaSZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1wYWQ9MCZzPTRlNTllOWQ3YjljNDIyNzk4N2UwOTRlZjVmNzgxNDM4&blend-x=242&blend-y=454&blend-w=838&blend-h=46&blend-fit=crop&blend-crop=left%2Cbottom&blend-mode=normal&txt64=5qCq5byP5Lya56S-UmVsaWM&txt-x=242&txt-y=539&txt-width=838&txt-clip=end%2Cellipsis&txt-color=%231E2121&txt-font=Hiragino%20Sans%20W6&txt-size=28&s=a549425017d335439522f9dea1d08383" >}}

#### 🔸5. どの目次リンクをハイライトするか判定

```
const id = entry.target.getAttribute("id");
navLinks.forEach((link) => {
  link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
});
```
→ 現在画面に映ってる見出しのIDと一致する目次リンクだけ .active を付ける。

#### 🔸6. 最後に全部の見出しを監視開始

```
sections.forEach((section) => observer.observe(section));
```

#### 💡 イメージとしては…

「画面に映った見出し」をトラッキングして、対応する目次に青い下線や背景色をつけてるだけです。
