const CMS = window.CMS;
const React = window.React;

// ✅ 生CSSを直接 iframe に適用
if (typeof CMS !== 'undefined') {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    main.main { margin-top: 0; padding-top: 10px !important; }
    body, html { font-family: sans-serif; }
    .post-content p { margin-bottom: 1.25em; line-height: 1.8; }
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
      content: '★';
      margin-right: 0.4em;
      color: #2ecc71;
    }
  `;

  CMS.registerPreviewStyle(styleTag.innerHTML, { raw: true });
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
