#  JavaScriptによるチャット入力処理の実装

## 目的
- ユーザーがメッセージを入力 → 送信 → 画面に表示されるまでの一連のフローを実装
- 擬似的にAIの返信も生成して表示（後でChatGPT APIに差し替え可能な構造）

## 実装ステップ（index.htmlに直接記述）
- 以下の追加・変更を行ってください：

### ステップ1：inputとbuttonを取得
```
const inputField = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button.bg-blue-500');
```
### ステップ2：イベントで送信処理
```
sendButton.addEventListener('click', () => {
    const text = inputField.value.trim();
    if (text !== '') {
        addMessage('user', text);
        inputField.value = '';

        // 疑似的なAIレスポンス（2秒後に返信）
        setTimeout(() => {
            addMessage('ai', `「${text}」に関する情報を検索しています…`);
        }, 1000);
    }
});
```
### ステップ3：メッセージ表示関数
```
function addMessage(sender, text) {
    const container = document.createElement('div');
    container.className = `flex items-start ${sender === 'user' ? 'justify-end' : 'justify-start'} space-x-2 message-animation`;

    const bubble = document.createElement('div');
    bubble.className = `${sender === 'user' ? 'bg-green-50' : 'bg-blue-50'} rounded-lg p-3 max-w-[70%] shadow-sm`;
    bubble.innerHTML = `<p class="text-gray-800">${text}</p>`;

    const icon = document.createElement('div');
    icon.className = 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center';
    icon.classList.add(sender === 'user' ? 'bg-green-100' : 'bg-blue-100');
    icon.textContent = sender === 'user' ? '🧑‍💻' : '🤖';

    if (sender === 'user') {
        container.appendChild(bubble);
        container.appendChild(icon);
    } else {
        container.appendChild(icon);
        container.appendChild(bubble);
    }

    chatContainer.appendChild(container);
}
```

## 補足：改善のポイント
- Enterキーで送信できるようにする
- 空送信防止
- スクロール追従はすでに実装済でOK

## 統合後の動作確認チェックリスト
- メッセージ送信で吹き出しが右側に出る
- 1秒後にAI側の返信が左側に出る
- 自動スクロールする
- ページをリロードしてもCSSやUIが崩れない
