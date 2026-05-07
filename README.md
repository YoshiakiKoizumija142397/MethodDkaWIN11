
MethodDka for Windows 11
高精度多項式計算ツール MethodDka の Windows 版です。
Aberth 法による高速収束と高精度演算を特徴とし、
最大 1000 次の多項式まで扱える高機能計算アプリケーションです。

📄 ライセンス
MIT License

📥 ダウンロード
最新版の Windows 版は以下から入手できます：

MSI インストーラー（Windows 11）

APPX パッケージ（Microsoft Store 互換）

⚠ 初回ダウンロード時の注意  
Windows SmartScreen やブラウザが
「一般的にダウンロードされていません」
と警告する場合があります。
これは新規アプリに対する一般的な注意表示であり、問題ありません。

📘 主な機能
🔹 高精度多項式計算
最大 1000 次までの多項式に対応

高精度浮動小数点演算

収束性の高い Aberth 法 を採用

🔹 多言語対応（i18n）
日本語 / 英語 UI 自動切替

英語版は現在開発中

ローカライズファイル（locales/ja.json, locales/en.json）による柔軟な翻訳管理

🔹 Windows 11 最適化
Windows 11 の UI/UX に合わせた設計

Electron によるクロスプラットフォーム基盤

高 DPI 環境での表示最適化

🛠 開発環境
Electron / Node.js

electron-builder による MSI / APPX ビルド

Windows 11 対応

GitHub 連携（main / feature / develop ブランチ運用）

🧪 ビルド方法（開発者向け）
コード
npm install
npm run build
出力物は dist/ フォルダに生成されます。

▶ 実行方法（開発者向け）
コード
npm start
Electron アプリとして起動します。

🌐 English Version (Work in Progress)
English UI is currently under development

The English interface is still being tested

English localization is in progress
