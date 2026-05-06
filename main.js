const { ipcMain } = require('electron');
const Decimal = require('./decimal.js');  // 必要ならパス調整

ipcMain.on('start-calculation', (event, data) => {
  try {
    // ここにあなたの計算ロジックを入れる
    const result = new Decimal(data.a).plus(new Decimal(data.b)).toString();

    event.sender.send('calculation-result', { success: true, result });
  } catch (err) {
    event.sender.send('calculation-result', { success: false, error: err.message });
  }
});
