const path = require('path');
const { contextBridge, ipcRenderer } = require('electron');

// ▼ decimal.js を読み込む（あなたの元のコード）
window.addEventListener('DOMContentLoaded', () => {
    const decimalPath = path.join(process.resourcesPath, 'decimal.js');
    const script = document.createElement('script');
    script.src = decimalPath;
    document.head.appendChild(script);
});

// ▼ i18n：OS の言語を renderer に渡す API
contextBridge.exposeInMainWorld('localeAPI', {
    getLocale: () => ipcRenderer.sendSync('get-locale')
});
