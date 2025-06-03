---
title: "[Hugo] Alpine.jsで検索モーダルを実装（Fuse.js対応）"
slug: hugo-alpine_js-fuse_js
summary: Hugo × Alpine.js × Fuse.js：軽量な検索モーダルの作り方
description: Hugo × Alpine.js × Fuse.js：軽量な検索モーダルの作り方
date: 2025-06-03T15:30:00.000Z
draft: false
author: lain
categories:
  - Hugo
tags:
  - 検索モーダル
  - Alpine.js
  - Fuse.js
weight: 3
image: /images/uploads/hugo-alpine_js-fuse_js.webp
---

<center>
  <img src="/images/uploads/hugo-alpine_js-fuse_js.webp" alt=" Hugo × Alpine.js × Fuse.js：軽量な検索モーダルの作り方"
   style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

## 導入の背景

Hugoでサイト作成をはじめた当初、検索機能をFuse.jsでトップページに追加したのですが、サイトが育っていくに従いデザインがあわなくなってきました。

ネットで情報調べてるとAlpine.jsを使った検索モーダルを実装してるサイトがデザインを崩さず検索機能を上手く取り入れていたのでうちもチャレンジしてみた記録です。

もし同様の悩みを書かてる方や、Alpine.jsの使い方、実装方法で悩まれている方がありましたらご参考ください。


## Alpine.jsとは？

AIによる回答：
Alpine.jsは、軽量でシンプルなJavaScriptフレームワークであり、Vue.jsやReactのような大規模フレームワークの機能を、小規模なUIコンポーネントに必要な最低限のコストで提供します。HTMLの属性内にデータやイベントの処理を記述できるため、非常に直感的で簡単に扱えます。

| 特徴               | 備考                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------- |
| 軽量               | ファイルサイズが小さく、ページロードへの影響が少ない.                                  |
| 直感的             | HTML属性内にデータやイベントの処理を記述するため、学習コストが低い                     |
| 柔軟性             | モーダルウィンドウ、ツールチップ、動的メニューなど、部分的なインタラクションに最適     |
| Vue.jsとの親和性   | Vue.jsのディレクティブなどを参考にしているため、Vue.jsの経験がある人はすぐに始められる |
| JavaScriptの必要性 | Alpine.jsでインタラクティブなUI/UXが実現できる場合、JavaScriptを記述せずに済む         |

Alpine.jsは、静的なWebページや軽量なインタラクションを追加したい場合に、特に適しています。


## 1：Alpine.js の導入（CDN方式）

### ① footer.html にcdn.min.jsを追加

layouts/partials/footer.html の末尾に追加：

```js
<!-- Alpine.js v3 CDN -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### ② 起動確認

サーバーを再起動して、consoleにエラーが出ていなければOK。

```
hugo server -D
```

## 2：モーダルのHTML構造（Alpine制御）

🔽 Alpine.js を使ったモーダル構成


### search-modal.htmlを作成

以下のHTMLを layouts/partials/search-modal.html に作成して保存してください：

```html
<div x-data="{ open: false }">
  <!-- 検索トリガーボタン（虫眼鏡アイコン） -->
  <button @click="open = true" class="search-toggle" aria-label="Search">
    🔍
  </button>

  <!-- モーダルウィンドウ本体 -->
  <div
    x-show="open"
    x-transition
    @keydown.escape.window="open = false"
    class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-xl shadow-lg relative">
      <!-- 閉じるボタン -->
      <button
        @click="open = false"
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
      >
        ✕
      </button>

      <!-- 検索ボックス -->
      <input
        type="text"
        placeholder="検索語を入力..."
        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        x-ref="searchInput"
        @keydown.window.slash.prevent="open = true; $nextTick(() => $refs.searchInput.focus())"
      >

      <!-- 検索結果（後でFuse.jsと連携） -->
      <div class="mt-4 max-h-60 overflow-y-auto text-sm text-left" id="searchResults">
        <!-- JavaScriptでここに検索結果を追加予定 -->
      </div>
    </div>
  </div>
</div>
```

### 補足情報

- x-data="{ open: false }" はモーダルの開閉状態を管理
- @click="open = true" で開く／@click="open = false" で閉じる
- @keydown.escape.window でESCキーで閉じられる
- / キーでも開く機能付き（実用的！）



## 3：CSSで背景ブラーや表示位置を調整

### 目的

- 背景をぼかして視覚的にモーダルであることを強調
- ウインドウ中央に検索ボックスを固定
- スクロール防止やスマホ対応の配慮

### Tailwind CSS クラスベースの確認

前ステップで書いたHTMLのモーダル定義内に含まれていたこの部分：
```html
<div
  x-show="open"
  x-transition
  @keydown.escape.window="open = false"
  class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
>
```
この中で以下が効いています：

| クラス名                           | 内容                                  |
| ---------------------------------- | ------------------------------------- |
| `fixed inset-0`                    | 全画面覆う（top/bottom/left/right 0） |
| `z-50`                             | 最前面に表示                          |
| `bg-black/60`                      | 背景に半透明な黒                      |
| `backdrop-blur-sm`                 | 背景ブラー（ぼかし）                  |
| `flex items-center justify-center` | モーダルを画面中央に配置              |

### モーダルボックス部分

```html
<div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-xl shadow-lg relative">
```

これにより、モーダル本体は：
- 白背景（ダークモードは濃グレー）
- 丸角＋影＋適度な余白
- 横幅は最大 max-w-xl（=約36rem）、画面サイズに応じて w-full で拡縮

### カスタムCSSで微調整したい場合

もし Tailwind CSS を使っていない環境であれば、次のようなCSSを custom.css に追記できます：

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-box {
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 640px;
  width: 100%;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
  position: relative;
}
```

### 動作チェック

- モーダルが中央表示されるか
- 背景がぼかされるか
- ESCや✕ボタンで閉じられるか
- 表示されたままスクロールできないこと（今後調整）


##  4：Fuse.js を使って検索機能を追加（インデックス化＋検索表示）

検索処理の「JavaScriptロジックの中身の理解」(解説)

Alpine.jsとFuse.jsを連携させて、インデックス（/index.json）を検索対象とする機能を実装します。

```js
<script>
document.addEventListener("alpine:init", () => {
  Alpine.data("searchModal", () => ({
    isOpen: false,
    query: "",
    results: [],
    idx: null,
    open() {
      this.isOpen = true
      this.$nextTick(() => this.$refs.searchInput.focus())
    },
    close() {
      this.isOpen = false
      this.query = ""
      this.results = []
    },
    async init() {
      const response = await fetch("/index.json")
      const data = await response.json()
      this.idx = new Fuse(data, {
        keys: ["title", "description", "content"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.4
      })
    },
    search() {
      if (!this.idx || this.query.trim().length === 0) {
        this.results = []
        return
      }
      this.results = this.idx.search(this.query.trim()).map(r => r.item)
    }
  }))
})
</script>
```

上記のコードでは以下を行っています：

✅ 主な処理内容

| 処理                 | 説明                                                                              |
| -------------------- | --------------------------------------------------------------------------------- |
| `init()`             | ページロード時に `/index.json` を取得し、Fuse.js のインスタンス `this.idx` を生成 |
| `open()` / `close()` | モーダルの開閉処理、検索状態のリセット                                            |
| `search()`           | 入力されたクエリ文字列を使って検索実行、結果を `results` に代入                   |


✅ 補足ポイント
- keys: ["title", "description", "content"]：検索対象のフィールドを指定（記事のタイトル・説明・本文）
- threshold: 0.4：マッチの曖昧さ。数値を小さくするほど厳密に検索される
- includeMatches: true：マッチ部分をハイライト表示したい場合に便利（今回は未使用）

✅ 表示には何が必要？

次のステップでは、results を .x-for でリスト表示させる必要があります。


## 5：検索結果の表示（Alpine.js + Fuse.js）

ここでは results 配列に入っている検索結果を、検索モーダルの中に一覧表示させます。
Alpine.js の x-for ディレクティブを使って、result オブジェクトの情報をループで展開します。

### 🔧 実装する場所

layouts/partials/search-modal.html の中の、div class="modal-body" など、
検索ボックスのすぐ下が理想的です。


### 追加するHTMLコード例

```html
<!-- 検索結果表示 -->
<ul class="search-results">
  <template x-for="result in results" :key="result.item.permalink">
    <li class="search-result">
      <a :href="result.item.permalink" class="search-result-link">
        <h3 x-text="result.item.title"></h3>
        <p x-text="result.item.summary"></p>
      </a>
    </li>
  </template>
</ul>
```

### 各要素の説明

| 要素                           | 意味や用途                                   |
| ------------------------------ | -------------------------------------------- |
| `x-for="result in results"`    | Fuse.jsの検索結果をループ処理                |
| `:key="result.item.permalink"` | 各項目にユニークキーを割り当て、再描画効率化 |
| `x-text="..."`                 | 動的にタイトル・要約などをバインドして表示   |
| `result.item.permalink`        | Hugo 側で用意したページURL                   |


### CSSによるスタイリング（後から調整）

以下のようなクラスで、検索結果の見た目を整えることができます（例）：
```css
.search-results {
  margin-top: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  padding: 0;
}

.search-result {
  margin-bottom: 1.2rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

.search-result-link {
  text-decoration: none;
  color: inherit;
}

.search-result-link h3 {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
}

.search-result-link p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
```

### 確認ポイント

1. モーダルを開く（🔍 または /）
2. 検索文字列を入力
3. results に一致があると、一覧がリアルタイム表示される
4. 各結果をクリックで記事に遷移できる


## 6：検索ロジックと Alpine.js 連携（Fuse.js）

### 目的
- 検索インデックスを読み込む（index.json）
- ユーザーの入力を元に Fuse.js で検索を実行
- results に検索結果を保存し、Alpine.js 側で描画

### 1. assets/js/searchComponent.js を新規作成

以下のコードを assets/js/searchComponent.js に保存


```js
function searchComponent() {
  return {
    searchQuery: "",
    results: [],
    fuse: null,

    async init() {
      const response = await fetch("/index.json");
      const data = await response.json();

      this.fuse = new Fuse(data, {
        keys: ["title", "summary", "content"],
        includeMatches: true,
        threshold: 0.3,
      });
    },

    search() {
      if (this.fuse && this.searchQuery.trim() !== "") {
        const searchResults = this.fuse.search(this.searchQuery);
        this.results = searchResults.map(r => r.item);
      } else {
        this.results = [];
      }
    },
  };
}
```
 検索対象キーは "title", "summary", "content" です。必要に応じてカスタマイズできます。


### 2. 上記 JS を static/js/ に移動して読み込む

assets/js/ ではブラウザが直接読み込めないため、searchComponent.js を

**static/js/searchComponent.js** にコピーしてください。

layouts/partials/search-modal.html の <script> に以下を追加：

{{</* /raw */>}}
```js
<script src="/js/searchComponent.js" defer></script>
```
{{</* /raw */>}}


### 3. search-modal.html のルートに x-data="searchComponent()" を追加

```
<div x-data="searchComponent()" x-init="init()" class="open false">
```

### 4. 検索欄に入力時に search() を発火させる

<input> タグを以下のように変更します：

```
<input
  type="text"
  placeholder="検索語を入力..."
  class="..."
  x-model="searchQuery"
  @input.debounce.300ms="search"
/>
```

### ここまでのポイント

| 項目                               | 状態   |
| ---------------------------------- | ------ |
| `searchComponent()` 関数定義       | ✅ 済み |
| `x-data="searchComponent()"`       | ✅ 済み |
| Fuse.jsでインデックス構築と検索    | ✅ 済み |
| `searchQuery` にバインド＋検索処理 | ✅ 済み |


### トラブル対処（表示されない・動かない）

上手く動かなかったので、最終的に修正して以下で動くようになりました。

> \static\js\searchComponent.js

```js
function searchComponent() {
  return {
    open: false,
    searchQuery: "",
    results: [],
    fuse: null,

    init() {
      fetch("/index.json")
        .then((res) => res.json())
        .then((data) => {
          this.fuse = new Fuse(data, {
            keys: ["title", "summary", "content"],
            includeScore: true,
            threshold: 0.3,
          });
        });
    },

    search() {
      if (this.searchQuery.trim() === "" || !this.fuse) {
        this.results = [];
        return;
      }
      this.results = this.fuse.search(this.searchQuery);
    },
  };
}

```

> layouts\partials\search-modal.html

```
<!-- ✅ Alpine.js のスコープを一つにする -->
<div x-data="searchComponent()" x-init="init()" class="open false">
  <!-- モーダルトリガー -->
  <button @click="open = true" class="search-toggle" aria-label="Search">
    🔍
  </button>

  <!-- モーダル本体 -->
  <div
    x-show="open"
    class="modal-overlay fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
    x-transition
    @keydown.escape.window="open = false"
  >
    <div
      class="modal-box bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-xl shadow-lg relative"
    >
      <!-- ✕ 閉じる -->
      <button
        @click="open = false"
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
      >
        ✕
      </button>

      <!-- 🔍 検索ボックス -->
      <input
        type="text"
        placeholder="検索語を入力..."
        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        x-model="searchQuery"
        @input.debounce.300ms="search"
        x-ref="searchInput"
        @keydown.window.slash.prevent="open = true; $nextTick(() => $refs.searchInput.focus())"
      />

      <!-- 🔎 検索結果 -->
      <ul class="search-results">
        <template
          x-for="result in results"
          :key="result?.item?.permalink || result?.refIndex || result"
        >
          <li class="search-result" x-show="result?.item">
            <a :href="result.item.permalink" class="search-result-link">
              <h3 x-text="result.item.title"></h3>
              <p x-text="result.item.summary"></p>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</div>

<script src="/js/searchComponent.js" defer></script>
```






## 7：検索結果のスタイル調整







## Fuse.jsやLunr.jsとの比較

## コード解説（モーダル＋ブラー＋入力）

## カスタマイズ例（背景色やサイズ変更）



## 完成スクリーンショット／動作動画

## テンプレートのダウンロード or GitHubリンク

