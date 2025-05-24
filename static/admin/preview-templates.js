const CMS = window.CMS;
const React = window.React;

// 生CSSを変数化
const rawCSS = `
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

// プレビュー用スタイル適用関数
function injectStyleToPreviewPane() {
  const iframe = document.querySelector('iframe[data-testid="preview-pane"]');
  if (iframe && iframe.contentDocument) {
    const styleTag = iframe.contentDocument.createElement("style");
    styleTag.innerHTML = rawCSS;
    iframe.contentDocument.head.appendChild(styleTag);
  }
}

// プレビュー更新イベントのたびにスタイルを適用
CMS.registerPreviewStyle('', { raw: true }); // 空でも必須
CMS.registerPreviewTemplate("blog", ({ entry }) => {
  setTimeout(() => injectStyleToPreviewPane(), 500); // 遅延実行がポイント

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
});
