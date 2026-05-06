const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),   // ← ここが最重要
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile('index.html');

  // メニュー設定
  const isJapanese = app.getLocale().startsWith('ja');

  const template = [
    {
      label: isJapanese ? 'ファイル' : 'File',
      submenu: [
        { role: 'quit', label: isJapanese ? '終了' : 'Quit' }
      ]
    },
    {
      label: isJapanese ? 'ヘルプ' : 'Help',
      submenu: [
        {
          label: isJapanese ? 'MethodDka ヘルプを開く' : 'Open MethodDka Help',
          click: () => {
            const basePath = app.isPackaged
              ? process.resourcesPath
              : __dirname;

            const helpFile = isJapanese
              ? path.join(basePath, 'help', 'help_ja.html')
              : path.join(basePath, 'help', 'help_en.html');

            if (fs.existsSync(helpFile)) {
              shell.openPath(helpFile);
            } else {
              console.error('Help file not found:', helpFile);
            }
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
