<script setup lang="ts">
const articles = [
  { slug: 'menjaga-nilai-rezeki-dengan-emas', category: 'Emas', title: 'Menjaga Nilai Rezeki Dengan Emas', excerpt: 'Cara sederhana memahami emas sebagai alat menjaga nilai dalam rencana keluarga.' },
  { slug: 'apa-itu-hijrah-finansial', category: 'Hijrah Finansial', title: 'Apa Itu Hijrah Finansial?', excerpt: 'Framework berpikir untuk menata pemasukan, pengeluaran, aset, komunitas, dan keberkahan.' },
  { slug: 'roadmap-menuju-baitullah', category: 'Baitullah', title: 'Roadmap Menuju Baitullah', excerpt: 'Tujuh langkah yang membuat target umrah terasa lebih dekat dan lebih terarah.' },
]
</script>

<template>
  <main class="bg-warm">
    <CbsHeader />
    <section class="section-shell pt-32 pb-20">
      <p class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Blog Edukasi</p>
      <h1 class="max-w-4xl text-4xl font-bold leading-tight text-ink md:text-6xl">Ruang Belajar Hijrah Finansial.</h1>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <NuxtLink v-for="article in articles" :key="article.slug" :to="`/blog/${article.slug}`" class="rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-1">
          <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald">{{ article.category }}</span>
          <h2 class="mt-5 text-2xl font-bold text-ink">{{ article.title }}</h2>
          <p class="mt-3 leading-7 text-muted">{{ article.excerpt }}</p>
          <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">Baca artikel <UIcon name="i-lucide-arrow-right" /></span>
        </NuxtLink>
      </div>
    </section>
    <CbsFooter />
  </main>
</template>
