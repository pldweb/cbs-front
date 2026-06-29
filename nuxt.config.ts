export default defineNuxtConfig({
  compatibilityDate: '2025-06-19',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://api.cbs.id/api',
    },
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true,
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      title: 'CBS — Menemukan Kedamaian Lewat Hijrah Finansial | Cahaya Berkah Semesta',
      htmlAttrs: { lang: 'id' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'CBS membantu keluarga Muslim menjaga rezeki, menumbuhkan keberkahan, dan mempersiapkan masa depan dunia serta akhirat melalui ekosistem Hijrah Finansial.',
        },
        {
          name: 'keywords',
          content:
            'Cahaya Berkah Semesta, CBS, Hijrah Finansial, Bisnis Halal, Ekosistem Syariah, Bisnis Tanpa Riba, Produk Halal Premium, Kemitraan CBS',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Cahaya Berkah Semesta' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'CBS — Gerakan Hijrah Finansial & Tiket Emas Baitullah' },
        {
          property: 'og:description',
          content:
            'Gerakan nasional untuk menjaga nilai rezeki, membangun komunitas, dan mempersiapkan perjalanan menuju Baitullah.',
        },
        { property: 'og:image', content: '/hero-illustration.png' },
        { property: 'og:site_name', content: 'Cahaya Berkah Semesta (CBS)' },
        { property: 'og:locale', content: 'id_ID' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CBS — Gerakan Hijrah Finansial & Tiket Emas Baitullah' },
        {
          name: 'twitter:description',
          content:
            'Gerakan nasional untuk menjaga nilai rezeki, membangun komunitas, dan mempersiapkan perjalanan menuju Baitullah.',
        },
        { name: 'twitter:image', content: '/hero-illustration.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/fav.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Amiri:wght@400;700&display=swap',
        },
      ],
    },
  },
})
