const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(process.resourcesPath, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    }
  });

  win.loadFile('index.html');

  // ▼ OS 言語判定（ja / en）
  const locale = app.getLocale();
  const isJapanese = locale.startsWith('ja');

  // ▼ help ファイルを自動選択
  const helpFile = isJapanese
    ? path.join(process.resourcesPath, 'help', 'help_ja.html')
    : path.join(process.resourcesPath, 'help', 'help_en.html');

  const template = [
    {
      label: 'ファイル',
      submenu: [
        { role: 'quit', label: '終了' }
      ]
    },
    {
      label: '表示',
      submenu: [
        { role: 'reload', label: '再読み込み' },
        { role: 'toggledevtools', label: '開発者ツール' },
        { type: 'separator' },
        { role: 'resetzoom', label: 'ズームをリセット' },
        { role: 'zoomin', label: 'ズームイン' },
        { role: 'zoomout', label: 'ズームアウト' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: '全画面表示' }
      ]
    },
    {
      label: 'ヘルプ',
      submenu: [
        {
          label: 'MethodDka ヘルプを開く',
          click: () => {
            const helpWin = new BrowserWindow({
              width: 900,
              height: 700
            });
            helpWin.loadFile(helpFile);
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
