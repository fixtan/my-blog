---
title: "[画像生成AI] Stable Diffusion Checkpoint 導入ガイド"
slug: generative-AI_Stable-Diffusion-checkpoint-install
summary: "[画像生成AI] Stable Diffusion Checkpoint 導入ガイド"
description: "[画像生成AI] Stable Diffusion Checkpoint 導入ガイド"
date: 2025-06-05T13:00:00.000Z
draft: false
author: lain
categories:
  - 画像生成AI
tags:
  - Stable Diffusion
  - Checkpoint
  - インストール
  - 環境構築
weight: 10
image: /images/uploads/generative-AI_Stable-Diffusion-checkpoint-install.webp
---

<center>
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install.webp"
     alt="[画像生成AI] Stable Diffusion Checkpoint 導入ガイド"
     loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

## 0. はじめに

昔、Zennで書いた記事を、此方へ移植したのですが、情報が古くなってるので現在使用してる「Stable Diffusion Checkpoint」ように新たに備忘録も兼ねてインストールメモを作成しました。

過去記事は、以下で公開中ですので、Stable Diffusion XL（SDXL）1.0 に興味のある方はご参考ください。

{{< link-card url="https://humanxai.info/posts/generative-ai_stable-diffusion-xl1_0-install/" title="[画像生成AI] Stable Diffusion XL（SDXL）1.0 インストール" description="[画像生成AI] Stable Diffusion XL（SDXL）1.0のインストール方法" image="https://humanxai.info/images/uploads/generative-AI_Stable-Diffusion-XL1_0-install.webp" >}}


### なぜ「Checkpoint版」を使うのか？

従来のStable Diffusionで画像学習データを記録した物を「モデル」と呼ばれていますが、Checkpointの特徴は、生成画像のスタイルを指定できることで、従来の物に比べキャラクター生成や特化モデルを使いやくより利用ユーザーの希望に近い画像を生成できるようになります。

Checkpointでも、Civitaiなどで公開されている、世界中のユーザーが作成したモデルを利用する事が出来るほか、LoRAデータの利用も可能です。

SDXLと比較した場合、後期の改良バージョンである為、より動作が軽く、モデルやLoRAも豊富になっています。



### この記事で扱う内容（対象者）

この記事を書いている私のPC環境が、Windows11になっていますので、主にWindowsユーザー向けの情報となります。
Linux（Ubuntu）環境もありますが、GPU環境が整っていない為、ここでは割愛しますが、基本的にPython環境があれば動作しますし、画像生成はWEB UI上で行いますので、ほぼ同じ手順で動くようになると思います。

PythonやGitがよく分からなくても基本は手順通りにコマンドを入力していけば動作しますので、コマンドプロンプトの操作を勉強する目的としても良いと思います。


## 1. 動作環境と前提条件


- OS：Windows 10/11
- 推奨VRAM：6GB以上（最低動作の目安も記載）
- Python 3.10（重要）
- Git（インストール済であると仮定 or ダウンロードリンク）

従来のStable Diffusion同様、グラフィックボードは、VRAM 6GB以上を必要としますので、RTX3060以上のGPUが必要です。

公式には Python 3.10 を推奨。3.11 以上では起動に失敗することがあります。
「webui-user.bat」から Python バージョンを指定したい場合は「venv」環境を事前に構築しておくと安心。




## 2. インストール手順（初期セットアップ）

インストールを進めていきます。

コマンドプロンプトを起動。

>Windowsキーを押してスタートメニューを開き、「cmd」と入力して検索

起動したら

cd のコマンドで、Cドライブのルートディレクトリへ移動

> cd ../..

次に インストールするディレクトリを作成。

ここでは、sd というディレクトリを作り、その中にインストールすると仮定して進めていきます。
mkdirコマンドで、sdディレクトリを作成します。

> mkdir sd

次に作成したsdフォルダへ移動

> cd sd

<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-cmd1.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-cmd1.jpg"
         alt="インストール手順（コマンドプロンプト）"
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



### 2-1. GitHub からWebUIをクローン

git cloneコマンドでgithubからクローンを作成します。

>git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git

<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-cmd-git-clone.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-cmd-git-clone.jpg"
         alt=""
        loading="lazy" decoding="async" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

stable-diffusion-webuiへ移動し、ファイル確認
(エクスプローラーかた確認でも構いません)

>cd stable-diffusion-webui<br />
>dir
>
<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-cmd2.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-cmd2.jpg"
         alt="stable-diffusion-webuiへ移動し、ファイル確認"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

### 2-2. webui-user.bat を実行

コマンドプロンプトで、webui-user.batと入力してエンターキーを押しバッチファイルを実行します。

> webui-user.bat


自動的に Python 環境構築・モデルダウンロードが開始されます。

※完了まで時間がかかる場合あり

<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-webiu-user_bat.jpg">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-webiu-user_bat.jpg"
         alt="webui-user.batと入力してエンターキーを押しバッチファイルを実行"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>



全ての処理が終わりと、自動的にブラウザでStable Diffusion checkpointが開きます。
手動で開く場合、URLは以下になります。

 <http://127.0.0.1:7860/>

{{< link-card url="http://127.0.0.1:7860/" title="Stable Diffusion" description="" image="" >}}


<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-web.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-web.jpg"
         alt="自動的にブラウザでStable Diffusion checkpointが開きます"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 補足：

- 初回起動は数分かかる
- 失敗した場合はエラーメッセージを読み検索、もしくはAIに聞くなど。

## 3. Checkpointモデルのダウンロードと配置



### 3-1. Civitai で .safetensors を入手

以下の civitai サイトをブラウザで開きます。


{{< link-card url="https://civitai.com/models" title="Civitai Models | Discover Free Stable Diffusion & Flux Models" description="Browse from thousands of free Stable Diffusion & Flux models, spanning unique anime art styles, immersive 3D renders, stunning photorealism, and more" image="/images/noimage.webp" >}}


上部メニューのModelsを選択し、右上にある Filters を選択。

下に表示されたメニューの中から、Checkpointを選択すると該当モデルのみ表示されるようになります。

<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-civitai.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-civitai.jpg"
         alt="Civitai で .safetensors を入手"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

今回はリストの中から
「CyberRealistic Pony」
をダウンロードします。

{{< link-card url="https://civitai.com/models/443821/cyberrealistic-pony" title="CyberRealistic Pony - v11.0 | Stable Diffusion Checkpoint | Civitai" description="You can run CyberRealistic Pony and use its API on SinkIn: https://sinkin.ai/m/Z9jVny2 🐴 CyberRealistic Pony Pony Diffusion just got a glow-up. Cyb..." image="/images/noimage.webp" >}}



<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-civitai-pony.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-civitai-pony.jpg"
         alt="CyberRealistic Pony"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


ダウンロードしたモデルデータは、

> C:\sd\stable-diffusion-webui\models\Stable-diffusion

に保存します。




<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-civitai-modelpath.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-civitai-modelpath.jpg"
         alt="Stable-diffusion モデルデータ保存場所"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 3.2. 画像生成テスト

ここまでで、動作環境が整ったので、実際に画像を作成して見ます。

ブラウザで表示されている Stable Diffusion checkpoint の画面上で、右上にある更新ボタンをクリック。

すると先程ダウンロードした CyberRealistic Ponyが表示されるので、選択。

暫く読み込みに時間がかかります。

デフォルトで、txt2img のタブが選択されていると思うので、その下にあるプロンプト入力ウインドウに以下のメッセージを入力。

```
score_9_up, score_8_up, score_7_up, score_6_up,
1girl, 25 years old Japanese girl, cute face, perfect face, (round face:1.2), sexy, (adult:1.2), pale skin, big round eyes, dark brown eyes,
(three quarter view), detailed face, portrait, face focus, looking at viewer, blush, shy smile, close up, long hair, twintails, low twintails, short twintails, dark brown hair, sidelocks, hair between eyes, hair ribbon, white ribbon, white camisole, frilled camisole,  flower field, field, white lace collar, strong sunlight,upper_body, small_breasts, arm_around_waist, breasts focus, earrings, eyeliner, long_eyelashes,
```

以下のネガティブプロンプトを入れるとより精度が上がります。
```
score_6, score_5, score_4, pony, furry, monochrome, curvy, fat, pubic hair, watermark,
artist name, ugly, ugly face, mutated hands, low res, bad anatomy, bad eyes, blurry face, unfinished, sketch, greyscale, (deformed),
```


<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-run.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-run.jpg"
         alt="画像生成テスト"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

「Generate」ボタンをクリックすると、画像生成が始まります。




<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-view.jpg" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-view.jpg"
         alt="「Generate」ボタンをクリックで、画像生成"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>

完成した画像サンプル。

<a href="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-view2.png" target="_blank">
<img src="/images/uploads/generative-AI_Stable-Diffusion-checkpoint-install-view2.png"
         alt="「Generate」ボタンをクリックで、画像生成(完成品)"
        loading="lazy" decoding="async" style="max-width:50%; height:auto; border:1px solid #ccc; border-radius:6px; box-shadow: 5px 5px 10px #666" />
</a>


### 3-3. 追加モデル導入方法

Civitai などで気になるモデル（拡張子：.safetensors または .ckpt）をダウンロードし、
「stable-diffusion-webui/models/Stable-diffusion/」に配置。

再起動後に [左上のドロップダウン] から選択できます。



## 4. 推奨拡張機能（Optional）

- ControlNet
- LoRA
- Supermerger
- ADetailer（顔補正）
- 拡張機能の導入方法（WebUI → Extensions → Install from URL）


## 5. よくあるトラブルと対処法

- Pythonバージョンが違う → webui-user.bat 実行前に確認
- VRAM不足 → --medvram オプション追加
- 黒い画面のまま進まない → launch.py 実行ログ確認
- RuntimeError: "LayerNormKernelImpl" ...（NVIDIAドライバ不一致）
- launch.pyが止まる→管理者権限での実行 or セキュリティソフトの影響
- 起動後にページが開かない→ファイアウォール例外やポート競合


## 6. おわりに（まとめ）

- Checkpoint版は最も情報が多く、初心者に最適
- 複雑なことをしない限り、初期設定だけで十分動く
- 今後は「LoRA」「Prompt」「ControlNet」などの活用を予定


## 次のステップ

-  [LoRAモデルの導入と使い方（CivitaiなどでDL→配置）]
-  [ControlNetの導入＆使い方（ポーズ制御やポーズ変換）]
-  [生成画像をFramePackへ渡して動画にする方法]
-  [Promptベースの画像生成 Tips（呪文例やNegative Promptの考え方）]
-  [FramePack連携：生成した画像を動画へ落とし込む流れ]


<!--
## 小ネタとして記事化してもよさそうな内容

webui-user.bat によく使う起動オプション一覧（例：--medvram や --xformers）

「automatic1111」が何を意味するか？ → GitHub名だが由来も面白いかも

outputs/ フォルダの整理方法（生成画像の保存先と管理）
-->
