import CMS from "netlify-cms-app";
import React from "react";

// カスタムCSS読み込み（確認済）
if (typeof CMS !== 'undefined') {
  CMS.registerPreviewStyle("/admin/stylesCMS.css", { raw: true  });
}

// プレビュー用のテンプレートコンポーネントを定義
const BlogPostPreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const body = entry.getIn(["data", "body"]);
  return (
    <main className="main">
      <h1>{title}</h1>
      <div className="profile_inner">
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </main>
  );
};

// "blog" コレクションにプレビューを登録
CMS.registerPreviewTemplate("blog", BlogPostPreview);
