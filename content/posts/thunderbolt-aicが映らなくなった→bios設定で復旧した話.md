---
title: Thunderbolt AICが映らなくなった→BIOS設定で復旧した話
date: 2025-05-22T09:54:00.000Z
draft: true
---
朝、PCを起動したらメインモニターが真っ暗。



現在のグラフィックボードからモニタへの接続は、やや特殊で、ASRockのThunderbolt4 AICカードに、DisplayPortでGPUとケーブル接続し、Thunderbolt4 AICカード側はノーブランド（中華製）の「USB-C -> HDMI 変換 2 ポート」を繋ぎ、HDMIケーブルでモニタに繋ぐというややこしいつなぎ方をしてます。



つまり

**RTX4070Ti → Thunderbolt AIC → USB-C → HDMI変換 → モニタ（L887）**

という構成だったが、**突然映らなくなった**　という感じです。

最初はThunderboltカードの故障を疑いましたが、デバイスマネージャーや、Thunderboltコントロールセンターからみると正常に動いてるように見えて異常は見当たらなかったです。

Microsoft Thunderbolt™ コントロール・センター 公式

<https://apps.microsoft.com/detail/9n6f0jv38ph1?hl=ja-JP&gl=JP>

BIOS設定の「Thunderbolt Support」が無効になっていただけだった。

思い返せば、電源を完全に落として一晩放置していた……。

（以下、BIOS設定の変更手順、コントロールセンターでの確認手順、接続構成、原因の考察）
