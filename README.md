# nuxt.js-sandbox

[nuxt.js/examples/](https://github.com/nuxt/nuxt.js/tree/dev/examples/)

## 関連資料・記事

- [「結局 Nuxt.js って何がいいの？」に対する回答 by potato4d](https://slides.com/potato4d/vuejs_meetup7)
- [Vue.js Tokyo v-meetup #7 - 資料一覧 - connpass](https://vuejs-meetup.connpass.com/event/82065/presentation/)
- [Nuxt.js と Firebase で SPA×SSR×PWA× サーバーレスを実現する - DMM inside](https://inside.dmm.com/entry/2018/04/10/nuxt-firebase)

## Nuxt.js とは?

Vue.js アプリケーションを構築するためのフレームワーク。

### 主な機能

- Vue ファイルを利用できる
- コードを自動的に分割する
- サーバーサイドレンダリング
- 非同期データをハンドリングするパワフルなルーティング
- 静的ファイルの配信
- ES6/ES7 のトランスパイレーション
- JS と CSS のバンドル及びミニファイ
- Head 要素の管理
- 開発モードにおけるホットリローディング
- SASS、LESS、Stylus などのプリプロセッサのサポート
- HTTP/2 push headers ready
- モジュール構造で拡張できること

## ディレクトリ構造

### assets ディレクトリ

LESS や SASS、JavaScript、画像のようなコンパイルされていないファイルを入れる。ここに存在するものはwebpackの`file-loader`、もしくは`url-loader`経由で読み込まれることを前提としている。

### components ディレクトリ

Vue.js のコンポーネントファイルを入れる。Nuxt.js は`components`ディレクトリ内のコンポーネントの`data`メソッドに手を加えない。

### layouts ディレクトリ

アプリケーションのレイアウトファイルを入れる。

このディレクトリ名は変更できない。

### middleware ディレクトリ

アプリケーションのミドルウェアを入れる。ページやページグループ（レイアウト）をレンダリングするより前に実行されるカスタム関数を定義できる。

### pages ディレクトリ

アプリケーションのビュー及びルーティングファイルを入れる。

このディレクトリ名は変更できない。

### plugin ディレクトリ

ルートの Vue.js アプリケーションをインスタンス化する前に実行したい JavaScript プラグインを入れる。

### static ディレクトリ

静的ファイルを入れる。このディレクトリ内のファイルはいずれも`/`に配置される。

例: `/static/robots.txt`は`/robots.txt`に配置される

このディレクトリ名は変更できない。

### store ディレクトリ

Vuex ストアのファイルを入れる。このディレクトリ内に`index.js`を作成すると、Nuxt.js フレームワーク内で Vuex ストアのオプションが自動的に有効になる。

### nuxt.config.js ファイル

`nuxt.config.js`ファイルには Nuxt.js のカスタム設定を記述する。

このファイル名は変更できない。

### package.json ファイル

`package.json`ファイルにはアプリケーションが依存するパッケージやスクリプトを記述する。

このファイル名は変更できない。
