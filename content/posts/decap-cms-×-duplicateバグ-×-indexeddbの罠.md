---
title: Decap CMS × Duplicateバグ × IndexedDBの罠
slug: DecapCMS-Duplicate-IndexedDB
summary: Decap CMSで「Duplicate」でしか記事修正できなくなった問題の原因と修正方法
description: Decap CMSで「Duplicate」でしか記事修正できなくなった問題の原因と修正方法
date: 2025-05-31T13:07:00.000Z
draft: false
author: lain
categories:
  - Decap CMS
tags:
  - Duplicate
  - IndexedDB
  - developertool
  - Chrome
weight: 2
image: /images/uploads/decapcms-duplicate-indexeddb.webp
---
<center>
<img src="/images/uploads/decapcms-duplicate-indexeddb.webp" alt=""  loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; " />
</center>

## はじめに

Decap CMSで記事編集途中、Goテンプレートの記述ミスによるNetlifyでのデプロイ時のERRORが頻発。

Netlifyでデプロイするとどうしても時間がかかるので、ローカル環境でチェックした方が早いと、

>  git pull origin main

としてローカルで記事のエラー個所を特定して、１つずつ修正し正常にでデプロイできる状態になったのを確認した後、

> git add .<br>
> git commit -m "fix: xxx.md"<br>
> git push origin main<br>

し、Netlifyで自動デプロイが正常に終了。

ほっと肩を撫でおろしたのも束の間、Decap CMSで「Duplicate」でしか記事修正できなくなってしまい、AIに相談し問題の特定との修正した時の備忘録メモです。

Duplicateというのは重複という意味で、これを押すと記事が二重に作成されてしまい、尚且つ、この現象がすべての記事で発生するようになり、非常に困った事になりました。

同様の問題に直面してる方は、結構いる気がしますので、記事にして公開しておきますので、お困りの方がいましたら、ご参考ください。

## AIに相談してみた

AIの回答：

> すべての記事が「Duplicate」でしか投稿できなくなっているという現象は、通常のDecap CMSの動作ではなく、構成ファイルの破損・不整合またはGitの状態とCMSの管理の齟齬が原因で発生している可能性が高いです。

### ✅ 原因として考えられる主なパターン

| 原因候補                                                              | 説明                                                                                            |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ① .md ファイルは存在しているが、Decap CMSのUUID管理情報が失われている | CMSは内部的に記事のIDやファイル名を追跡していて、それが一致しないと「新規扱い」になることがある |
| ② Gitリポジトリの履歴とDecap CMSの状態にズレがある                    | 例えば、ファイル名を変更したり、ローカルで追加 → Gitで未push → CMSからは未認識、など            |
| ③ config.yml の collections: 定義に問題がある                         | slug や identifier_field がうまく機能していない可能性                                           |
| ④ CMSキャッシュ or Netlifyのキャッシュが不整合を起こしている          | 特に Published 状態が反映されてない場合に出やすい                                               |

この中で原因となったのは、言うまでもなく

> ② Gitリポジトリの履歴とDecap CMSの状態にズレがある

が該当。

## 対処方法

### ✅ 1. config.yml の collections: 設定を確認

以下をチェック：

```
collections:
  - name: "post"
    label: "記事"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"
    identifier_field: title  # ← なければ追加
```

 **identifier_field: title**  を入れることで、タイトルを一意のIDとして使うようCMSに指示できます。

slug のテンプレートが壊れている場合、認識ミスで「新規記事扱い」される可能性あり。

### ✅ 2. Decap CMSキャッシュのクリア

* ブラウザのキャッシュを削除（特に IndexedDB）
* あるいはシークレットモードで Decap CMS を開いてみて動作確認

### ✅ 3. Netlifyのビルドキャッシュクリア

Netlifyで手動で以下を実行：

1. Deploys → 該当の「Failed」または最新の「Published」Deployを開く
2. 右上の「Retry deploy」メニューから Clear cache and deploy site を選択

これで古いビルド・CMSのキャッシュがクリアされます。

### ✅ 4. Gitリポジトリの状態と照合

* ローカルで git status を確認
* 記事 .md ファイルが意図せず「Untracked」状態になっていないかチェック
* git pull --rebase などでリモートの最新と一致させてから再度 git push

## ✅ 今後の再発防止策（やや慎重に見積もって）

| 操作                                | 注意点                                           |
| ----------------------------------- | ------------------------------------------------ |
| VSCodeなどで .md を直接修正         | 修正後は必ず git add → git commit → git push     |
| CMSと同時に記事を触る場合           | CMS or GitHub のどちらか一方で完結させるのが安全 |
| ファイル名の変更（スラッグ変更）    | CMSが記事を別物と見なすので、編集履歴が切れる    |
| published: true がFrontmatterにない | CMSが「下書き」と見なすこともあり                |

## それでも直らず

config.yml に
collections:

* name: "post"
  　...
      identifier_field: title

を追加して、git push
デプロイと、Netlifyのビルドキャッシュクリアを実行、それでも直らず。
Chromeのキャッシュ削除も実行。

ただ、別のブラウザ　Brave　からDecapCMSをひらくと通常通り記事の修正が可能。

つまり、Decap CMS側の問題ではなく、ローカルブラウザ側の問題である事が発覚。

## IndexedDB or LocalStorage のキャッシュ不整合

AIの回答：

> 今回の症状は「Chrome側のローカルストレージ（IndexedDB or LocalStorage）のキャッシュ不整合」が原因である可能性が非常に高いです。

### ✅ 状況の整理

| 現象                           | 説明                                                   |
| ------------------------------ | ------------------------------------------------------ |
| identifier_field: title を設定 | ✅ これは正しい対応（記事IDを明示）                     |
| Gitへ正常にPush済み            | ✅ リモートとCMS間のズレは解消されているはず            |
| Braveでは正常動作              | 🧠 Decap CMS自体は問題なく動作中と確認                  |
| Chromeだけ「Duplicate」になる  | 🚨 ローカルに古いキャッシュ情報が残っている典型的な状態 |

### ✅ 原因：Decap CMS のキャッシュの仕組み

Decap CMSは ログイン状態・編集中の記事データ・識別情報 をブラウザに以下の形式で保存しています：

* IndexedDB（最も影響大）
* LocalStorage
* Service Worker の一時データ（あり得ます）

このため、ページキャッシュやCookieをクリアするだけでは不十分なケースが多く、以下のような手順が必要です。

## ✅ 解決方法：ChromeでDecap CMSのキャッシュ完全削除

ChromeのDevToolsからIndexedDBを削除

1. CMS画面（例：https://humanxai.info/admin/）を開いた状態で
   F12 → DevTools を起動
2. 上部タブで「Application（アプリケーション）」を選択
3. 左サイドバーから：

   * 「Storage」→「Clear site data」にチェックを入れて「Clear site data」
   * 「IndexedDB」→ すべてのデータベースを右クリック → 「Delete」
4. 再読込（Ctrl + Shift + R）



 <a href="/images/uploads/image-16454.jpg" target="_blank">
<img src="/images/uploads/image-16454.jpg" alt="ChromeでDecap CMSのキャッシュ完全削除"  loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


これで無事解決しました。

developertoolにこんな項目があるとは全く知りませんでした。

ChatGPT先生恐るべし…。

以下、解決後の補足情報です。

### IndexedDBは何を保存しているのか？

→ Decap CMSは記事キャッシュやステート管理情報をIndexedDBに保存しており、編集途中の履歴・オートセーブなどもこの中。

### なぜidentifier_field: titleでは直らなかったのか？
→ クライアント側（ブラウザ）にキャッシュが残っていて、サーバーの状態と同期しなくなっていたため。

### トラブルの発生タイミング
→ GitHub側のMarkdown記事は正しく反映されていても、Decap CMSのローカルDBが古いままで状態が壊れていた。

AIと対話しながらブログサイトを構築してますが、内部構造に精通してるので物凄く勉強になります。


