export default {

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vee-validate-nuxt-with-jest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover' },
      { hid: 'og:title', name: 'og:title', content: 'vee-validate-nuxt-with-jest' },
      { hid: 'description', name: 'description', content: 'Vee Validate Nuxt with Jest.' },
      { hid: 'og:description', name: 'og:description', content: 'Vee Validate Nuxt with Jest.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { mode: 'client', src: '@/plugins/vue-axios' },
    { mode: 'client', src: '@/plugins/vee-validate' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{
    path: '~/components',
    pathPrefix: false
  }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Day JS config
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: [
      'utc',
      'timezone',
      'relativeTime',
      'advancedFormat',
      'localizedFormat'
    ]
  },

  // Generate a fallback
  generate: {
    fallback: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
