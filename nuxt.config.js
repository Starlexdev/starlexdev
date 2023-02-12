export default {
  target: 'server',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'StarLex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'StarLex\'s portfolio.'  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/main.css'
  ],
  plugins: [
    {src: '~/plugins/analytics.js', mode: 'client'}
  ],
  components: true,
  build: {
  }
}
