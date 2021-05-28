
require('dotenv').config();
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"},
    
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
     '~/assets/css/prism.css',
    { src: '~assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/markdown-it',
    '~/plugins/firebase',
    '~/plugins/auth',
    { src: '@/plugins/vue-chartjs.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '@/plugins/pagenate.js', ssr: false },
    { src: '@/plugins/vue-mavon-editor.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
  ],
  axios: {
  },
  /*
  ** Nuxt.js modules
  */
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

