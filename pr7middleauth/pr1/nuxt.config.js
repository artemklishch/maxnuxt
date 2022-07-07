const pkg = require('./package')

module.exports = {
  // mode: 'spa',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "WD Goal",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "My cool blog" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: false, // by the way we deisable the progress bar
  loading: { color: 'red', height: "4px", duration: 5000 },
  loadingIndicator: { // it works if mode is settled to 'spa'
    name: "circle",
    color: "yellow"
  },

  /*
  ** Global CSS
  */
  css: [
    "~assets/styles/main.css" // global styles 
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     '~plugins/core-components.js',
     '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    baseURL: process.env.BASE_URL || 'https://maxreact1-default-rtdb.firebaseio.com',
    credentials: false // чтоб не сохраняло куки
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env:{
    baseUrl: process.env.BASE_URL || 'https://maxreact1-default-rtdb.firebaseio.com'
  },
  // generate:{} // this is to setlle roiting
  // rootDir:'/'// we can change this path
  router: {
    // base: "",
    // extendRoutes(routes, resolve){
    //   routes.push({
    //     path: "*",
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // }
    // linkActiveClass: "nice-active"
  },
  // srcDir:"client-app/"
  transition:  {
    name: "fade", // css class
    mode: "out-in"
  }
}
