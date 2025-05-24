---
title: 【トラブル対処】Thunderbolt AICでモニタが映らない→BIOS設定とEDID問題で解決
date: 2025-05-22T15:00:00+09:00
draft: false
image: /images/thumb1.jpg
author: lain
summary: ""
---

朝、PCを起動したらメインモニターが真っ暗…。

現在のグラフィックボードからモニタへの接続は、やや特殊で、ASRockのThunderbolt4 AICカードに、DisplayPortでGPUとケーブル接続し、Thunderbolt4 AICカード側はノーブランド（中華製）の「USB-C -> HDMI 変換 2 ポート」を繋ぎ、HDMIケーブルでモニタに繋ぐというややこしいつなぎ方をしてます。

つまり

**RTX4070Ti → Thunderbolt AIC → USB-C → HDMI変換 → モニタ（L887）**

という構成でしたが、突然映らなくなりました。

当初は、Thunderboltカードの故障を疑いましたが、デバイスマネージャーやThunderboltコントロールセンター上では正常に動作しているように見え、異常は確認できませんでした。

Microsoft Thunderbolt™ コントロール・センター 公式

<https://apps.microsoft.com/detail/9n6f0jv38ph1?hl=ja-JP&gl=JP>

ここで、故障原因として考えられるのは・・



## 原因①：BIOS設定


Thunderboltサポートが有効になっているか？
（ASRockマザーの場合、TBT設定がBIOSにあり）

Security Levelが「No Security」や「User Authorization」以外になっていないか

「認証待ち」状態で止まっていると、表示されないことがあります



## 原因②：Thunderboltコントロールセンター


「Thunderbolt コントロールセンター」アプリ インストールの有無と、「接続されたデバイス」や「Thunderboltポート」が表示されるか確認


***※Microsoft Storeからインストール可能***



## 原因③：ケーブル・接続不良


Thunderbolt 4 AICカードはマザーボードのTBTヘッダーと必ず接続する必要があり接続に問題がないかどうか。（チェック済み）

**⚠ これが接続されていないと Thunderbolt コントローラーが無効化される**



## 原因④：DisplayPortの接触


基礎的な事としてグラボ（RTX 4070Ti）→ Thunderbolt AICカードへの DisplayPort INケーブルはきちんと接続されているか？（チェック済み）

これが未接続、もしくは接触不良だと映像信号がカードに届かず映像出力できません。\
\
\
■とりあえず、BIOSの項目をチェック・・・

カードの接触不良を確認する前に、とりあえず、BIOS設定の「Thunderbolt Support」が有効になっているかを確認。

オンラインマニュアル（PDF）

<https://download.asrock.com/Manual/Z690%20Steel%20Legend.pdf>

[](https://download.asrock.com/Manual/Z690%20Steel%20Legend.pdf)マニュアルの７９ページにBIOSの「Advanced[](https://download.asrock.com/Manual/Z690%20Steel%20Legend.pdf)」に関する項目がありますが、ここで\
4.6.4 Intel(R) Thunderbolt（８６ページ）\
にカードの有効化にする項目があるので、これが無効になってる場合「有効化」。



![](/images/uploads/イメージ15913.jpg)
  <a href="/images/uploads/イメージ15913.jpg"><img src="/images/uploads/イメージ15913.jpg" width="300"></a>

![](/images/uploads/イメージ15914.jpg)



ここを確認したところ、無効化されていたので、有効化する事で復活しました。



## ■ 何故、無効化されたのか？

思い返せば、昨晩、電源ボックスのスイッチを切り電源を完全に落として一晩放置していたので、それが原因だったようです。

## ■ しかし、また再発・・・

復旧して喜んだのも束の間、USB-Cアダプターに２つ目のHDMIを接続すると、モニタを認識しなくなるトラブルが再発。\
\
液晶タブレットなど別の機器に接続すると何故か復活し、元のモニタ（L８８７）を接続すると完全に復旧し、再起動後も症状が出なくなりました。



## ■ 本当の原因は「EDID」？


EDIDはPCやGPUが接続されたモニタの仕様（解像度、リフレッシュレート、音声出力の有無など）を読み取るために使われており、電源を切ったことでキャッシュデータがリセットされた事で、映像信号の読み取りが上手くできなくなり、今回のような症状が出たと思われます。

※EDID読み込み失敗（信号が不安 or キャッシュが壊れる）



## ⚠️ よくあるEDIDトラブルの例


モニタが映らない・一瞬ついて消える：\
　EDID読み込み失敗（信号が不安定、キャッシュが壊れている）\
\
間違った解像度で表示される：

　古いモニタや中華アダプタが誤情報を送っている\
\
別のモニタに変えても挙動がおかしい：

　OS側にEDIDがキャッシュされている（Windowsが引きずってる）



## ■ EDID保持装置を使うと問題が解消されやすい

今回のような変換ケーブル、Thunderbolt4、USB-C経由によるHDMI変換から、DVIへの変換と、多重な映像変換をする事で、EDIDが不安定になったのが主な要因だと思われます。

今まで正常に動いていたのは、大元の電源を落とさず、マザーボード側に電源が供給されておりEDIDのキャッシュデータが保持されていて、そのデータをもとにモニタ側と通信できていたためだと思います。

今回のように電源を完全に切ってEDIDのキャッシュが削除されると再度EDIDと

**CONNECTPRO 3D対応HDMI EDID信号保持機 TMDS-EDID**
<https://www.amazon.co.jp/dp/B00HX3DK18>


## ★ まとめ

グラフィックボードとモニターの接続は、可能な限り変換アダプタを使わず、
シンプルな構成にすることで、EDIDに起因する問題を回避できます。

今回のように特殊な接続が必要な場合は、
EDIDキャッシュ保持装置の導入が有効です。

また、Thunderbolt AICを利用する構成では、BIOS設定が予期せず変更されている可能性もあるため、
**起動トラブル時はまずBIOS設定を確認することが有効**です。


