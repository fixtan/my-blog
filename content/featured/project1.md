---
title: FramePack-eichiによるAIアニメーション
date: 2025-05-27T22:01:00.000Z
draft: false
author: lain
summary: FramePack-eichiでAIアニメーションを作成する方法の紹介、及び、画像生成AIの活用方法
description: FramePack-eichi を活用したAIアニメーションの制作事例と手順。
categories:
  - AI
tags:
  - FramePack
  - Stable Diffusion
weight: 1
image: /images/uploads/FramePack-eichi-01.png
---
<center>
<img src="/images/uploads/framepack-eichi-01.png" alt="FramePackによるAIアニメーション" style="max-width:80%; height:auto; border:1px solid #ccc; border-radius:6px;" />
</center>

## はじめに

2025年4月17日、AI界隈で著名なイリヤスフィール氏が、ローカル環境で動作する動画生成AI「FramePack」を発表し、AI界隈で話題になりました。

それまでの動画生成AIでは、ハイエンドなGPUを搭載したパソコン（特に多くのVRAMを積んでいるモデル）でなければ動作させる事が困難でしたが、FramePackは、VRAMが6GBの環境でも動画を作成できる点で注目を浴び評価され、生成AI界隈に新たな波を起こしています。

うちのPC環境では、GPUは NvidiaのRTX4070Ti（VRAM 12GB）を使用しており、FramePackの動作要件を満たしており、インストールから動画生成するまで手順を軽くまとめてみました。


##  FramePack の概要・特徴


- 画像1枚から最大120秒の動画生成可能
- 最低6GBのGPUメモリで動作
- TeaCacheを使用すれば1フレーム約1.5秒で生成可能


##  FramePack推奨スペック

| 項目              | 内容                            |
| ----------------- | ------------------------------- |
| GPU               | NVIDIA RTX 30XX / 40XX / 50XX   |
| VRAM（GPUメモリ） | 最低6GB（生成速度は容量に比例） |
| OS                | Windows 10 / 11 / Linux         |
| Python            | Version 3.10                    |
| ストレージ        | 65GB～（モデル含め約64GB）      |
| メモリ（RAM）     | 最低16GB（推奨は32～64GB）      |

CPUは RTX3060をベースとしても最低 第10世代のIntel CPUがあった方が安心だと思います。<br>
※13世代CPUに関しては、上位モデルで不都合の報告がある為、注意。



## FramePack‑eichiとは

lllyasviel氏のFramePackをベースに、nirvash氏の改良版をさらに強化した動画生成AIフレームワークです。

**■FramePack‑eichiの特徴**

>- 多言語対応 - 日本語、英語、繁体字中国語のUIをサポート
>- 柔軟な動画長設定 - 1〜20秒の各セクションモードに対応
>- セクションフレームサイズ設定 - 0.5秒モードと1秒モードを切り替え可能
>- オールパディング機能 - すべてのセクションで同じパディング値を使用可能

FramePack-eichiの最大の特徴は、キーフレーム(複数設定可能)を設定できる事で、
動画の開始画像（必須）と終了画像に加えて、中間のキーフレームを設定することにより、アニメーションの流れを細かくコントロールすることが可能になります。


## 実際に動かした環境

この記事を書いている私のPC環境：

| 項目  | 内容                            |
| ----- | ------------------------------- |
| CPU： | Core i7-12700K                  |
| MB：  | ASRock Z690 Steel Legend        |
| MEM： | ArkARD4-U32G48HB-24R-D DDR4 64G |
| GPU： | GK-RTX4070Ti-E12GB/WHITE/TP     |


FramePackで1秒（33フレーム）の動画を生成するのに1分30秒程度かかっています。
VRAMも重要ですが、メモリは当初32GBでしたが、Stable Diffusionで画像生成をした際に、解像度を上げるとメモリ不足になった経験があり、その際に容量アップで64Gにしています。

FramePack‑eichiに関しても、生成時にはかなりメモリを消費するので、32GB～64GBあった方が安心だと思います。


## 動画作成までの流れ


### Stable Diffusionで画像生成

スマホなどで撮った写真から動画生成してもいいのですが、今回はStable Diffusionで画像生成し、それを動画生成AIで動かしてみます。


CyberRealistic Ponyとは、Stable Diffusionで画像を生成する際に使用するPony系のモデルの1つになります。単にリアルな表現を追求するだけでなく、プロンプトの忠実な再現など、ユーザビリティの向上にも重点を置いている点が特徴




## AIアニメーションのデモ

以下はFramePack-eichiで生成したMP4動画のデモです。

<div class="video-frame">
  <video controls width="100%" preload="metadata">
    <source src="/videos/FramePack-eichi-01.mp4" type="video/mp4">
    お使いのブラウザは動画の再生に対応していません。
  </video>
</div>


## 現状の限界点・特徴的な制約

- 複数キャラの独立した動きが難しい

- シーンの一貫性（例：猫が横切るなど）

- 逆に、だからこそ省リソースで動作する利点

## まとめ＋今後の展望

- 課題（多キャラ制御、連続動作など）

- 期待（eichiの進化、次世代FramePack など）

