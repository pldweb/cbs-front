export default defineNuxtConfig({
  compatibilityDate: '2025-06-19',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
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
            'Cahaya Berkah Semesta (CBS) — Selaraskan urusan rezeki, ketenangan jiwa, dan masa depan keluarga melalui ekosistem bisnis yang halal dan penuh keberkahan.',
        },
        { property: 'og:title', content: 'CBS — Hijrah Finansial' },
        {
          property: 'og:description',
          content:
            'Bukan sekadar peluang bisnis, tetapi perjalanan menuju rezeki yang lebih halal, lebih berkah, dan lebih menenangkan.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Poppins:wght@400;500;600&family=Inter:wght@400;500&display=swap',
        },
      ],
    },
  },
})
