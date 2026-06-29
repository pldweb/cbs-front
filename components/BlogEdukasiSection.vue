<script setup lang="ts">
const articleCategories = [
  {
    title: 'Emas',
    desc: 'Cara menjaga nilai rezeki, memahami harga emas, dan membuat target tabungan.',
    icon: 'i-heroicons-circle-stack',
    color: 'text-gold bg-gold/10 border-gold/30',
  },
  {
    title: 'Hijrah Finansial',
    desc: 'Panduan menata pemasukan, pengeluaran, aset, dan prioritas keluarga Muslim.',
    icon: 'i-heroicons-chart-bar-square',
    color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Wakaf',
    desc: 'Edukasi wakaf produktif dan dampaknya bagi pemberdayaan umat.',
    icon: 'i-heroicons-building-library',
    color: 'text-sky-600 bg-sky-50 border-sky-100',
  },
  {
    title: 'Umrah',
    desc: 'Persiapan biaya, mental, keluarga, dan agenda menuju tanah suci.',
    icon: 'i-heroicons-map',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'Baitullah',
    desc: 'Renungan, riyadhoh, dan cerita perjalanan menuju panggilan Allah.',
    icon: 'i-heroicons-sparkles',
    color: 'text-forest bg-warm border-emerald-100',
  },
  {
    title: 'Komunitas',
    desc: 'Aktivasi member, agen, distributor, home base, dan gerakan daerah.',
    icon: 'i-heroicons-users',
    color: 'text-amber-700 bg-amber-50 border-amber-100',
  },
]

const featuredArticles = [
  {
    category: 'Hijrah Finansial',
    title: 'Mengapa gaji naik belum tentu membuat hati lebih tenang?',
    meta: 'Edukasi Dasar',
  },
  {
    category: 'Emas',
    title: 'Menjaga nilai rezeki dengan target emas bulanan yang realistis.',
    meta: 'Panduan Praktis',
  },
  {
    category: 'Umrah',
    title: 'Roadmap keluarga Muslim menyiapkan dana Baitullah tanpa panik.',
    meta: 'Tiket Emas',
  },
]
</script>

<template>
  <section id="edukasi" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start">
        <div>
          <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
            Blog Edukasi
          </span>
          <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Pusat Belajar
            <span class="text-emerald-500">Hijrah Finansial</span>
          </h2>
          <p class="mt-5 text-muted text-lg leading-relaxed max-w-2xl">
            Temukan panduan praktis untuk menjaga rezeki, menumbuhkan aset, memahami wakaf, dan menyiapkan perjalanan menuju Baitullah.
          </p>

          <div class="mt-10 grid sm:grid-cols-2 gap-5">
            <div
              v-for="category in articleCategories"
              :key="category.title"
              class="rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              :class="category.color"
            >
              <div class="grid place-items-center w-12 h-12 rounded-2xl bg-white/80 mb-5">
                <UIcon :name="category.icon" class="w-6 h-6" />
              </div>
              <h3 class="font-heading font-bold text-xl text-ink">{{ category.title }}</h3>
              <p class="mt-2 font-small text-sm text-muted leading-relaxed">{{ category.desc }}</p>
            </div>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="rounded-3xl bg-white border border-emerald-100/60 p-6">
            <p class="font-small text-xs font-semibold tracking-widest uppercase text-gold">
              Target Konten Tahun Pertama
            </p>
            <div class="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p class="font-heading font-extrabold text-4xl text-emerald-500">100</p>
                <p class="font-small text-sm text-muted">Artikel edukasi</p>
              </div>
              <div>
                <p class="font-heading font-extrabold text-4xl text-gold">6</p>
                <p class="font-small text-sm text-muted">Tema utama</p>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <article
              v-for="article in featuredArticles"
              :key="article.title"
              class="rounded-2xl bg-white border border-emerald-100/60 p-5"
            >
              <div class="flex items-center justify-between gap-4">
                <span class="font-small text-xs font-semibold text-emerald-500">{{ article.category }}</span>
                <span class="font-small text-xs text-muted">{{ article.meta }}</span>
              </div>
              <h3 class="mt-3 font-heading font-bold text-lg text-ink leading-snug">
                {{ article.title }}
              </h3>
            </article>
          </div>

          <UButton
            to="#faq"
            size="xl"
            block
            class="mt-6 rounded-2xl font-semibold bg-emerald text-white hover:bg-emerald-600 border-none"
          >
            Lanjutkan Belajar
          </UButton>
        </aside>
      </div>
    </div>
  </section>
</template>
