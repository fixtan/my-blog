const CMS = window.CMS;
const React = window.React;

// Netlify CMS に初期化後に実行されるように変更
if (typeof CMS !== 'undefined') {
  CMS.registerPreviewStyle('', { raw: true });

  window.addEventListener('load', () => {
    const iframe = document.querySelector('iframe[data-testid="preview-pane"]');
    if (iframe && iframe.contentDocument) {
      const styleTag = iframe.contentDocument.createElement("style");
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
          content: "★";
          margin-right: 0.4em;
          color: #2ecc71;
        }
      `;
      iframe.contentDocument.head.appendChild(styleTag);
    }
  });
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
