import CMS from "netlify-cms-app";

// 既存の CSS を読み込む
// ダミーCSS文字列（これで読み込まれてるか確認）
CMS.registerPreviewStyle("* { outline: 5px dashed magenta !important; }", { raw: true });
