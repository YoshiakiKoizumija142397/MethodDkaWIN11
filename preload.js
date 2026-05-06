const { contextBridge, ipcRenderer } = require('electron');

// Renderer（index.html）→ Main（main.js）へ安全に送信
contextBridge.exposeInMainWorld('api', {
  startCalculation: (data) => ipcRenderer.send('start-calculation', data),

  // Main → Renderer へ結果を返す
  onCalculationResult: (callback) => {
    ipcRenderer.on('calculation-result', (event, result) => callback(result));
  }
});
