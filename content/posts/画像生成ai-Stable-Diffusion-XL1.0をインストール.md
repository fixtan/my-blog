---
title: "[画像生成AI] Stable Diffusion XL（SDXL）1.0をインストール"
slug: generative-AI_Stable-Diffusion-XL1_0-install
summary: "[画像生成AI] Stable Diffusion XL（SDXL）1.0のインストール方法"
description: "[画像生成AI] Stable Diffusion XL（SDXL）1.0のインストール方法"
date: 2025-06-05T12:00:00.000Z
draft: false
author: lain
categories:
  - 画像生成AI
tags:
  - ナビゲーションバー
  - プルダウンメニュー
  - カテゴリ
weight: 10
image: /images/uploads/generative-AI_Stable-Diffusion-XL1_0-install.webp
---

<center>
<img src="/images/uploads/generative-AI_Stable-Diffusion-XL1_0-install.webp"
     alt="[画像生成AI] Stable Diffusion XL（SDXL）1.0のインストール方法"
     loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

　つい先日、画像生成AI「Stable Diffusion」の最新バージョンが公開されたのでインストールしてみました。


{{< link-card url="https://ascii.jp/elem/000/004/147/4147167/" title="最新の画像生成AI「Stable Diffusion XL（SDXL）1.0」ついに公開　簡単に試す方法あります (1/2)" description="Stability AIは7月27日、新たな画像生成AIモデル「Stable Diffusion XL 1.0（SDXL 1.0）」をオープンソースで公開した。" image="https://ascii.jp/img/2023/07/27/3577751/xl/514dd7020461e35c.png?20200122" >}}


　既にネット記事やYoutubeでもインストール方法に関する情報が公開されてるので、その辺りを参考にしつつ備忘録的メモ。


## 推奨スペックとインストール環境


**ネット情報を元にした推奨スペック**

>RAM：32G<br>
>VRAM：12GB

GPUは、最低限 RTX3060以上あった方が良さそうです。


**うちのPCスペック**
| 項目 | 説明                                          |
| ---- | --------------------------------------------- |
| CPU  | Intel Core i7-12700K                          |
| MB   | ASRock Z690 Steel Legend                      |
| MEM  | hynix DDR4-2400 PC4-19200 16GBx2 (32GB)       |
| GPU  | 玄人志向 NVIDIA GeForce RTX4070Ti GDDR6X 12GB |
| SSD  | Samsung SSD 980 1TB PCIe Gen 3.0 ×4           |



## Stable Diffusion XL（SDXL）1.0をインストール

Stable Diffusion Webuiのインストール方法は、ネット上に多数あるので其方を参照。

旧バージョンを残したい場合は、フォルダごと丸コピーし、コピー先を「SDXL」などに変更。

[SDXL]⇒[Stable Diffusion]フォルダ内の「venv」はリネームするか、削除。

<a href="/images/uploads/368a64896ba4-20230729.jpg" target="_blank">
<img src="/images/uploads/368a64896ba4-20230729.jpg"
         alt="[SDXL]⇒[Stable Diffusion]フォルダ内の「venv」はリネームするか、削除"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


コマンドプロンプトを起動し、Stable Diffusionがインストールされたフォルダ内へ移動して

git pull

コマンドを実行。


<a href="/images/uploads//c1992910b9d5-20230729.jpg" target="_blank">
<img src="/images/uploads//c1992910b9d5-20230729.jpg"
         alt="git pull コマンドを実行"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



これで、v1.5.1 へアップデート完了。

次に、「webui-user.bat」を実行すると、Pythonのライブラリ関係を新規にダウンロードされ少し時間がかかるようです。


<a href="/images/uploads//bdfd68318dc2-20230729.jpgg" target="_blank">
<img src="/images/uploads/bdfd68318dc2-20230729.jpg"
         alt="「webui-user.bat」を実行"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



終了後、localhostアドレスの指定ポートで起動確認。

http://127.0.0.1:7860/

<a href="/images/uploads/af5c2e63548a-20230729.jpg" target="_blank">
<img src="/images/uploads/af5c2e63548a-20230729.jpg"
         alt="終了後、localhostアドレスの指定ポートで起動確認"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


version: v1.5.1  になっていれば無事終了。


## SDXL用の学習データをダウンロード

SDXL用の学習データ（モデルデータ）をダウンロード

{{< link-card url="https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/tree/main" title="stabilityai/stable-diffusion-xl-refiner-1.0 at main" description="説明なし" image="https://cdn-thumbnails.huggingface.co/social-thumbnails/models/stabilityai/stable-diffusion-xl-refiner-1.0.png" >}}

<a href="/images/uploads/37825564505c-20230729.png" target="_blank">
<img src="/images/uploads/37825564505c-20230729.png"
         alt="終了後、localhostアドレスの指定ポートで起動確認"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>




https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/tree/main

<a href="/images/uploads/6307b4f4599a-20230729.jpg" target="_blank">
<img src="/images/uploads/6307b4f4599a-20230729.jpg"
         alt=""
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


保存先：

> \stable-diffusion-webui\models\Stable-diffusion\


## 動作テスト（1024x1024px）

「Stable Diffusion checkpoint」から保存したモデルデータを選択。

画像サイズ（Width , Height)を最小値の1024 x 1024に変更。

プロンプトに適当なキーワードを入れて、Generateボタン。

実行結果はこんな感じで、生成されるまでの時間は、15秒ほど。
<a href="/images/uploads/5b1a7600edf1-20230729.jpg" target="_blank">
<img src="/images/uploads/5b1a7600edf1-20230729.jpg"
         alt="実行結果"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/e0608908fbc7-20230729.jpg" target="_blank">
<img src="/images/uploads/e0608908fbc7-20230729.jpg"
         alt="実行結果:コマンドプロンプト"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


GPU、VRAM、メモリ使用率：
<a href="/images/uploads/4cd7694e3fb1-20230729.jpg" target="_blank">
<img src="/images/uploads/4cd7694e3fb1-20230729.jpg"
         alt="GPU、VRAM、メモリ使用率："
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## 動作テスト（FHD: 1920x1080px）

FHD（1920x1080px）も試してみましたが生成時間は44秒ぐらいでした。

リソースモニタを見ると、GPU（３D）の使用率がMAXな他、DDR4 32GBの使用率も一時期的にMAXの32GBをほぼ使い切ってるようです。

GPU＋VRAMも重要ですが、メインメモリも32GBだときつそうなので増設した方がいいかもしれません。

<a href="/images/uploads/cd6ce7e4ac51-20230729.jpg" target="_blank">
<img src="/images/uploads/cd6ce7e4ac51-20230729.jpg"
         alt="動作テスト（FHD: 1920x1080px）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/d1db22e68688-20230729.jpg" target="_blank">
<img src="/images/uploads/d1db22e68688-20230729.jpg"
         alt="動作テスト（FHD: 1920x1080px）コマンドプロンプト"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/260708d8711d-20230729.jpg" target="_blank">
<img src="/images/uploads/260708d8711d-20230729.jpg"
         alt="動作テスト（FHD: 1920x1080px）リソースモニタ"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## まとめ

　以上、駆け足で簡単ですが、自宅のメインマシンンにStable Diffusion XL（SDXL）1.0をインストール＋動作確認の備忘録的なメモでした。

　この記事の対象読者は、恐らくStable Diffusion XL（SDXL）をローカル環境で動かしたい方で、PCスペックの参考まで。

 ネット上の情報を読んでいても、RTX4070Ti 12GB でもパワー不足という情報が見られましたが、うちでとりあえず動かしてみた感じでは、何とか使えるレベルで、FHDの画像も44秒と実用的な数字は出てるようです。

 ただ、リソースモニタの画像通り、GPUやVRAM、メインメモリの使用率はほぼMAXで使い切っていますので、ギリギリ動くスペックと考えた方が良さそうで、更にピクセル数を上げると、多分ERRORで落ちて画像生成できない気がします。

　あと、今回はバックグラウンドで、アプリを何も動かしてない状態で試していますので、Android Studio など重いアプリを動かしつつ、画像生成AIを活用したいような場合には、スペック不足で、最悪、メモリのスワップが起こりそうな気がします。



## 追記：メモリ増設（DDR4 32GB　-> 64GB）(2023/8/4～)

　前回の記事の通り、メインメモリ32GBをほぼ使い切ってスワップしそうだったので、アマゾンで以下のメモリを購入してみました。

https://www.amazon.co.jp/gp/product/B0BB21KR4K?psc=1&tag=fixtan-22&th=1&linkCode=osi

　メモリの相性問題は最近パソコンでは起こりにくいようですが、念の為、全て新品に買い替えて、全部同じメーカーの同じロットでそろえています。

<a href="/images/uploads/8078b1bbee65-20230805.jpg" target="_blank">
<img src="/images/uploads/8078b1bbee65-20230805.jpg"
         alt="メモリ増設（DDR4 32GB　-> 64GB）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/a424fb5a5af4-20230805.jpg" target="_blank">
<img src="/images/uploads/a424fb5a5af4-20230805.jpg"
         alt="メモリ増設（DDR4 32GB　-> 64GB）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/63ef933ee235-20230805.jpg" target="_blank">
<img src="/images/uploads/63ef933ee235-20230805.jpg"
         alt="メモリ増設（DDR4 32GB　-> 64GB）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

PCに取り付け。
余談ですが、自作PCユーザーにとっては常識的な事ですが、パソコンのマザーボードを弄る場合は、必ずメイン電源を落として電源を完全に切った後、5分ぐらい置いてから作業した方がいいです。（良く分からない場合は、コンセントを抜く）

パソコンをシャットダウンした状態でも、マザーボードは通電しており、この状態でメモリを交換したり、拡張カードの増設なんかを行うと故障原因になります。（過去経験あり）

<a href="/images/uploads/ec5fe57ab9c4-20230805.jpg" target="_blank">
<img src="/images/uploads/ec5fe57ab9c4-20230805.jpg"
         alt=""
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

　交換完了後、電源を入れて動作チェック。

　メモリ増設後、初回起動時は数分程度、時間がかかります。
　BIOSが立ち上がり、DDR4 64GBの認識確認。

<a href="/images/uploads/ad5212786fb2-20230805.jpg" target="_blank">
<img src="/images/uploads/ad5212786fb2-20230805.jpg"
         alt=""
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

<a href="/images/uploads/3471612d6457-20230805.jpg" target="_blank">
<img src="/images/uploads/3471612d6457-20230805.jpg"
         alt=""
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## ベンチマーク（DDR4-2400 -> DDR4-3200）

　前回のメモリは、DDR4-2400だったのですが、今回は、DDR4-3200で、若干性能アップしたので試しにベンチマークを計測。

**DDR4-2400**

<a href="/images/uploads/0826f4b11049-20230805.jpg" target="_blank">
<img src="/images/uploads/0826f4b11049-20230805.jpg"
         alt="ベンチマーク（DDR4-2400 -> DDR4-3200）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


**DDR4-3200**

<a href="/images/uploads/910778eea0bf-20230805.jpg" target="_blank">
<img src="/images/uploads/910778eea0bf-20230805.jpg"
         alt="ベンチマーク（DDR4-2400 -> DDR4-3200）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


　DDR4-3200の方が、若干早いようです。
　SDXLを何時間もフルで動かすような場合は、生成画像枚数に差が出るかもしれませんが、普通に使う分にはほとんど変わらないと思います。

  というか、画像生成中は、GPUにかなり負担がかかってるので、長時間動かし続けるような使い方は、グラボの寿命を縮めそうで辞めておかれた方がいいかもしれません。

## GPUに負荷をかけると寿命が縮むのか？（追記：2023/8/7）

  GPUに負荷がかかった状態で長時間運用する場合、GPUの寿命が縮むかどうか調べて見ましたが、OC（オーバークロック）せず、定格で規定温度内で運用するなら、それほど問題は無いようです。
　注意すべき点は「温度」で、RTX4070Tiの最大温度を調べて見ると９０度のようです。

 **Nvidia公式サイト：**

{{< link-card url="https://www.nvidia.com/ja-jp/geforce/graphics-cards/40-series/rtx-4070-4070ti/" title="NVIDIA GeForce RTX 4070 ファミリ グラフィックスカード" description="GeForce RTX 4070 Ti SUPER, RTX 4070 SUPER, RTX 4070 Ti, and RTX 4070" image="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/40-series/rtx-4070-4070ti/geforce-rtx-4070-super-og-1200x630.jpg" >}}

　仕様⇒詳細をクリックすると温度情報を確認できます。

<a href="/images/uploads/a2a87dc01f8e-20230807.jpg" target="_blank">
<img src="/images/uploads/a2a87dc01f8e-20230807.jpg"
         alt="GPUに負荷をかけると寿命が縮むのか？（追記：2023/8/7）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


  RTX30系も同じように90度ぐらいのようなので、ゆとりを見て80度以下をキープできる環境を作れば良さそうな気がします。

**GPUの温度は何度までが安全ライン？グラボの温度の確認方法まとめ**

{{< link-card url="https://digitaldiy.jp/article/firstdiy/13435/" title="GPUの温度は何度までが安全ライン？グラボの温度の確認方法まとめ" description="PCにとって「温度」は非常に重要な項目であり、許容範囲を超えてしまうと安全装置が作動し、最悪パーツが壊れてしまう場合があります。特に夏の時期は気温が高いため、自作erには無視できないポイントです。そこで今回はGPUの温度の限界と許容範囲を超えた場合どうなるのか、さらに温度を下げるためのコツについて紹介していきます。" image="https://digitaldiy.jp/wp-content/uploads/2021/06/thum_digitaldiy_210610_002.jpg" >}}




## 画像生成テスト（1024x1024px）

前回同様、1024x1024pxで画像生成テスト。

<a href="/images/uploads/5c5a394f6d7a-20230805.jpg" target="_blank">
<img src="/images/uploads/5c5a394f6d7a-20230805.jpg"
         alt="画像生成テスト（1024x1024px）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


メモリは、30GBをオーバー。

<a href="/images/uploads/7f0ae8b5e91c-20230805.jpg" target="_blank">
<img src="/images/uploads/7f0ae8b5e91c-20230805.jpg"
         alt="画像生成テスト（1024x1024px）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



## 画像生成テスト FHD（1980x1080px）

次は、FHD（1980x1080px）。

<a href="/images/uploads/dbfb1ad193c1-20230805.jpg" target="_blank">
<img src="/images/uploads/dbfb1ad193c1-20230805.jpg"
         alt="画像生成テスト FHD（1980x1080px）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


一時的ではありますが、約40GBのメモリを使用。

<a href="/images/uploads/1c9fac393627-20230805.jpg" target="_blank">
<img src="/images/uploads/1c9fac393627-20230805.jpg"
         alt="画像生成テスト FHD（1980x1080px）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## 画像生成テスト MAX（2048x2048px）

前回はメモリ不足で諦めたMAXの「2048x2048px」にも挑戦。
テストで動かしてるので、画像がおかしいのはご了承ください。

<a href="/images/uploads/380ede87d6e7-20230805.jpg" target="_blank">
<img src="/images/uploads/380ede87d6e7-20230805.jpg"
         alt="画像生成テスト MAX（2048x2048px）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


メモリは過去最高の約54GBを使用。


<a href="/images/uploads/0ca6a925fe91-20230805.jpg" target="_blank">
<img src="/images/uploads/0ca6a925fe91-20230805.jpg"
         alt="画像生成テスト MAX（2048x2048px）リソースモニタ"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


## 内蔵GPU「Intel UHD Graphics770」でメモリ消費

　スクショを見て気づかれた方も多いかと思うのですが、GPUに関しては、RTX4070Ti以外に、CPU内蔵GPU「Intel UHD Graphics770」を同時に使用してる為、メインメモリの一部はGPUで使用されています。

　なので、内蔵GPUを使わなければ、32GBでも問題ないかもしれません。

<a href="/images/uploads/a11687b565c8-20230806.jpg" target="_blank">
<img src="/images/uploads/a11687b565c8-20230806.jpg"
         alt="内蔵GPU「Intel UHD Graphics770」でメモリ消費"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


　余談ですが、外付けGPUと、内蔵GPUを同時に利用するとトラブルが起こりやすいので余りお勧めはしません。
　昔、同時使用してて不都合が起きて最悪起動しなくなったこともあります。
　（BIOSで片方のGPUを無効化したところ正常に動作）

　最近のパソコン（マザーボード）は高性能化して、メモリの相性問題なども起こりにくく、トラブルが減っていますが、一応、同じ様な使い方を検討される場合、ご注意ください。



　ASCIIの方でSDXL 1.0 のインストールを含め、詳細な記事が公開されたようなのでそちらを見られたが方がいいかもです。

{{< link-card url="https://ascii.jp/elem/000/004/147/4147298/" title="最新の画像生成AI「SDXL 1.0」実写系イラストのクオリティがすごい！！ (1/3)" description="Stability AIが7月27日に公開した画像生成AI最新モデル「Stable Diffusion XL 1.0（SDXL 1.0）」レビュー。SDXLに対応したAUTOMATIC1111氏の「Stable Diffusion web UI」で、環境を構築して試した。" image="https://ascii.jp/img/2023/07/28/3578382/xl/d5e81ff96840995e.jpg?20200122" >}}

https://www.amazon.co.jp/gp/product/B0BB21KR4K?psc=1&tag=fixtan-22&th=1&linkCode=osi

https://www.amazon.co.jp/dp/B09FXNVDBJ?psc=1&tag=fixtan-22&th=1&linkCode=osi

https://www.amazon.co.jp/dp/B09JM6L6MH?psc=1&tag=fixtan-22&th=1&linkCode=osi

https://www.amazon.co.jp/dp/B0C1GVNLVK?psc=1&tag=fixtan-22&th=1&linkCode=osi

https://www.amazon.co.jp/dp/B08XY3QQBK?psc=1&tag=fixtan-22&th=1&linkCode=osi
