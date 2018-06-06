module.exports = {
  // ページのheadを指定
  head: {
    title: 'Nuxtjs SSR Firebase Functions',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.muicss.com/mui-0.9.35/css/mui.min.css',
      },
    ],
  },
  // Nuxt.jsのデフォルトのローディングコンポーネントをカスタマイズ
  loading: {
    color: '#3B8070',
  },
  // グローバルに利用したい（どのファイルからでもインクルードできる）CSS ファイル/モジュール/ライブラリを指定する
  css: [
    {
      src: '@/assets/styles/main.css',
      lang: 'css',
    },
  ],
  // Nuxt.jsアプリケーションのdistディレクトリを定義する
  buildDir: '../prod/server/nuxt',
  // webpackの設定をカスタマイズ
  build: {
    // ?
    publicPath: '/assets/',
    // Vue Server Rendererガイドラインを使用して共通のCSS抽出を有効にする
    // https://ssr.vuejs.org/guide/css.html
    extractCSS: true,
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: [
        [
          'transform-runtime',
          {
            polyfill: true,
            regenerator: true,
          },
        ],
      ],
    },
  },
};
