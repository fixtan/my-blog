const CMS = window.CMS;

// 適用する CSS を文字列で定義
const rawCSS = `
  body { font-family: sans-serif; }
  main.main { margin-top: 0; padding-top: 10px !important; }
`;

// プレビュー iframe に CSS を適用する関数
function applyPreviewStyles() {
  const iframe = document.querySelector('iframe[data-testid="preview-pane"]');
  if (iframe && iframe.contentDocument) {
    const styleTag = iframe.contentDocument.createElement('style');
    styleTag.innerHTML = rawCSS;
    iframe.contentDocument.head.appendChild(styleTag);
  }
}

// CMS 初期化前にスタイル登録（これは iframe ではない）
CMS.registerPreviewStyle(rawCSS, { raw: true });

// CMS 初期化後、一定時間後に CSS を iframe に挿入（200〜500ms程度が妥当）
CMS.registerPreviewTemplate("blog", (entry) => {
  setTimeout(applyPreviewStyles, 500);

  const title = entry.getIn(["data", "title"]);
  const body = entry.getIn(["data", "body"]);

  return `
    <main class="main">
      <h1>${title}</h1>
      <div class="profile_inner">
        ${body}
      </div>
    </main>
  `;
});

CMS.init();  // 必ず registerPreviewTemplate の後
