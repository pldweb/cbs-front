<script setup lang="ts">
const route = useRoute()
const title = computed(() => String(route.params.slug).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))

useSeoMeta({
  title: () => `${title.value} | Blog CBS`,
  description: 'Artikel edukasi CBS tentang Hijrah Finansial, emas, wakaf, umrah, Baitullah, dan komunitas.',
})
</script>

<template>
  <main class="bg-warm">
    <CbsHeader />
    <article class="section-shell max-w-3xl pt-32 pb-20">
      <NuxtLink to="/blog" class="text-sm font-bold text-gold">← Kembali ke Blog</NuxtLink>
      <h1 class="mt-6 text-4xl font-bold leading-tight text-ink md:text-6xl">{{ title }}</h1>
      <p class="mt-5 text-sm font-semibold text-muted">Estimasi baca 4 menit • CBS Edukasi</p>
      <div class="prose prose-emerald mt-10 max-w-none rounded-[2rem] bg-white p-8 leading-8 text-muted shadow-soft">
        <p>
          Artikel ini disiapkan sebagai placeholder SEO-friendly untuk konten edukasi CBS. Konten final dapat ditarik dari endpoint <code>GET /api/articles/{slug}</code> ketika backend siap.
        </p>
        <p>
          Fokus edukasi CBS adalah membantu keluarga Muslim memahami rezeki, aset, komunitas, wakaf, dan persiapan Baitullah dengan bahasa yang tenang, praktis, dan membumi.
        </p>
      </div>
    </article>
    <CbsFooter />
  </main>
</template>
