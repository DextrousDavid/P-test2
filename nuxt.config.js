/* eslint-disable prettier/prettier */
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const webpackPlugins = () => {
//   const plugins = [];
//   plugins.push(new VuetifyLoaderPlugin());
//   return plugins;
// };
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Cloudenly - Grow Your Business With Ease',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid:
          'Cloudenly - Grow Your Business With Ease',
        name:
          'Cloudenly - Grow Your Business With Ease',
        content:
          'Cloudenly - Grow Your Business With Ease',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~plugins/vuetify.js', '~plugins/vue-tel-input.js', { src: '~plugins/vue-verification-code-input', ssr: false}],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module

    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    // ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  vuetify: {
    customVariables: [],
    treeShake: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // plugins: webpackPlugins(),
    // transpile: [/^vuetify/],
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      })
      // ,
      // config.plugins.push(
      //   new VuetifyLoaderPlugin()
      // )
    },
    // ,
    //   parallel: true,
    // plugins: [
    // 	new VuetifyLoaderPlugin(),
    // ],
    // transpile: [/^vuetify/]
  },
}