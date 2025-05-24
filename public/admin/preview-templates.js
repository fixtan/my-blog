const CMS = window.CMS;

// プレビューCSSを文字列で指定（簡易確認用）
CMS.registerPreviewStyle('body { font-family: sans-serif; }', { raw: true });

// CMS初期化は必ず最後に
CMS.init();