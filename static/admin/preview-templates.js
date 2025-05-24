const CMS = window.CMS;

CMS.registerPreviewStyle('body { font-family: sans-serif; }', { raw: true });

// 必ず CMS.init() より前に registerPreviewStyle を呼び出す
CMS.init();