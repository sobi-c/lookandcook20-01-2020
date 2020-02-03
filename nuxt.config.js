const getAppRoutes = require('./static/getRoutes.js')
const getcuisineRoutes = require('./static/getCuisine.js')
const getcollectionRoutes = require('./static/getcollection.js')
const getcategoryRoutes = require('./static/getCategory.js')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'lookandcook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Step by step video recipe' },
      {name : 'google-site-verification', content:'Nc3K9jSjXPnfUE2SOi1G0Rvzs3KRJzJR5fQUiCmMHSk'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:'https://cdn.jwplayer.com/libraries/WQD3scG6.js'
      }
      /*,
      {
        src:'//bcdn.grmtas.com/pub/ga_pub_11806.js'
      } */
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
   plugins: [
    
    { src: '~/plugins/autocomplete-vue.js', mode: 'client' },
    { src: '~/plugins/adsense.js', mode: 'client' }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // CSS file in the project
    '@/assets/css/custom.css',
    '@/assets/css/admin.css',
    '@/assets/fonts/font-awesome/css/font-awesome.css'
  ],  
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-54122587-1'
    }],
    [
      'nuxt-facebook-pixel-module', {
        track: 'PageView',
        pixelId: '147158279111969',
        disabled: false
      }
    ]
  ],
  sitemap: {
           path: '/recipe-category-sitemap.xml',
               routes: getcategoryRoutes,
               exclude:['/admin/**','/admin','page/**','/signin','/signup','/ad','/search','/resetpassword','/signinold','/signupold','/notallow','/myrecipes','/cook']

        /*sitemaps: [
            {
              path: '/recipe-sitemap.xml',
               routes: getAppRoutes,
               exclude:['/admin/**','/admin','page/**','/signin','/signup','/ad','/search','/resetpassword']
            },
            {
              path: '/recipe-cuisine-sitemap.xml',
               routes: getcuisineRoutes,
               exclude:['/admin/**','/admin','page/**','/signin','/signup','/ad','/search','/resetpassword']
            },
            {
              path: '/recipe-collection-sitemap.xml',
               routes: getcollectionRoutes,
               exclude:['/admin/**','/admin','page/**','/signin','/signup','/ad','/search','/resetpassword']
            },
            { 
              path: '/recipe-category-sitemap.xml',
               routes: getcategoryRoutes,
               exclude:['/admin/**','/admin','page/**','/signin','/signup','/ad','/search','/resetpassword']
            }
        ] */
             },
  debug: {
  enabled: true,
  sendHitTask: true
  },
  server: {
    port: 3001, // default: 3000
    host: '::', // default: localhost
  },
  env:{
    baseUrl:process.env.BASE_URL || 'http://18.221.50.168:3001',
    apiUrl:'http://54.201.146.116:1337'    
  }
}

