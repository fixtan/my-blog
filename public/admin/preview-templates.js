// 旧　未対応？
//import CMS from "netlify-cms-app";
//import React from "react";

// 新　対応？
const CMS = window.CMS;
const React = window.React;

// ✅ stylesCMS.css の内容をここに直接書く
const customStyles = `
  main.main {
    margin-top: 0;
    padding-top: 10px !important;
  }
  body, html {
    font-family: sans-serif;
  }
  .post-content p {
    margin-bottom: 1.25em;
    line-height: 1.8;
  }
  h1, h2, h3 {
    font-weight: bold;
    border-left: 4px solid #3498db;
    padding-left: 0.75em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.5;
  }
  h2::before {
    margin-right: 0.5em;
    color: #3498db;
  }
  h3::before {
    content: "◆";
    margin-right: 0.4em;
    color: #2ecc71;
  }
`;

// ✅ 生CSSを直接 iframe に適用
if (typeof CMS !== 'undefined') {
  CMS.registerPreviewStyle(customStyles, { raw: true });
}

// プレビュー用テンプレート
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

CMS.registerPreviewTemplate("blog", BlogPostPreview);
