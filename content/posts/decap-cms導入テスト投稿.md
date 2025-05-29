---
title: Decap CMS導入テスト投稿
date: 2025-05-21T01:01:00.000Z
draft: false
author: lain
image: /images/uploads/00011-524648632.png
weight: 20
---
日本語入力テスト。

問題なく入力できるようです。
<!--more-->
**マークダウン入力テスト 太字もOK？**

画像アップロードテスト：Stable Diffusion version: v1.10.1 

![Stable Diffusion version: v1.10.1 ](/images/uploads/00011-524648632.png "Stable Diffusion version: v1.10.1 ")

コード入力：HTML

```chuck
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Netlify CMS</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <script>
      window.CMS_MANUAL_INIT = true;
    </script>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </head>
  <body>
    <script>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });

        window.netlifyIdentity.init();
      }
      window.CMS.init();
    </script>
    <div id="nc-root"></div>
  </body>
</html>
```
