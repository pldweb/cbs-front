<script setup lang="ts">
const produk = [
  {
    name: 'Beehive Nano Propolis',
    tagline: 'Imunitas Premium Halal',
    desc: 'Formula propolis nano-teknologi untuk daya tahan tubuh optimal. Produk flagship CBS.',
    price: 'Rp 185.000',
    image: '/propolis.png',
    color: 'from-amber-400 to-amber-600',
  },
  {
    name: 'Alanabi',
    tagline: 'Nutrisi Sunnah Keluarga',
    desc: 'Suplemen harian berbasis bahan alami sunnah untuk kesehatan seluruh anggota keluarga.',
    price: 'Rp 150.000',
    image: '/alanabi.png',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Zammis',
    tagline: 'Perawatan Diri Syar\'i',
    desc: 'Rangkaian skincare dan perawatan tubuh berbahan alami, aman, dan sesuai syariat.',
    price: 'Rp 120.000',
    image: '/zammis.png',
    color: 'from-sky-400 to-sky-600',
  },
  {
    name: 'The Living Quran',
    tagline: 'Belajar Al-Quran Interaktif',
    desc: 'Platform pembelajaran Al-Quran modern dengan metode interaktif untuk semua usia.',
    price: 'Rp 99.000',
    image: '/the-living-quran.png',
    color: 'from-rose-400 to-rose-600',
  },
]
</script>

<template>
  <section id="produk" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Produk CBS
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Produk <span class="text-emerald-500">Halal Premium</span>
          yang Mudah Dipasarkan
        </h2>
        <p class="mt-4 text-muted text-lg">
          Semua produk CBS telah bersertifikasi halal, BPOM, dan terbukti memiliki pasar yang luas.
        </p>
      </div>

      <!-- Mobile View: Carousel (sm:hidden) -->
      <div class="mt-10 sm:hidden">
        <UCarousel v-slot="{ item: p }" :items="produk" :ui="{ item: 'basis-[85%] px-2' }" arrows loop
          class="w-full relative" prev-icon="i-lucide-chevron-left" next-icon="i-lucide-chevron-right"
          :prev="{ color: 'primary', variant: 'outline', size: 'lg', class: 'absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-emerald-50 transition-colors z-30 pointer-events-auto w-10 h-10 flex items-center justify-center' }"
          :next="{ color: 'primary', variant: 'outline', size: 'lg', class: 'absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-emerald-50 transition-colors z-30 pointer-events-auto w-10 h-10 flex items-center justify-center' }">
          <div
            class="card-float glass-card rounded-[28px] p-5 text-center group cursor-default flex flex-col justify-between h-full w-full border border-emerald-100/50">
            <div>
              <!-- Product Image Container -->
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-warm border border-emerald-100/30">
                <img :src="p.image" :alt="p.name" class="w-full h-full object-cover" />
              </div>
              <div :class="[
                'inline-block bg-gradient-to-r text-white font-small text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3',
                p.color,
              ]">
                {{ p.tagline }}
              </div>
              <h3 class="font-heading font-bold text-lg text-ink mb-2.5">{{ p.name }}</h3>
              <p class="font-small max-sm:text-lg text-sm text-muted leading-relaxed mb-5">{{ p.desc }}</p>
            </div>
            <p class="font-heading font-extrabold text-xl text-emerald-500 mt-auto">{{ p.price }}</p>
          </div>
        </UCarousel>
      </div>

      <!-- Desktop View: Grid (hidden sm:grid) -->
      <div class="mt-14 hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(p, i) in produk" :key="p.name"
          class="card-float glass-card rounded-[28px] p-5 text-center group cursor-default flex flex-col justify-between">
          <div>
            <!-- Product Image Container -->
            <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-warm border border-emerald-100/30">
              <img :src="p.image" :alt="p.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div :class="[
              'inline-block bg-gradient-to-r text-white font-small text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3',
              p.color,
            ]">
              {{ p.tagline }}
            </div>
            <h3 class="font-heading font-bold text-lg text-ink mb-2.5">{{ p.name }}</h3>
            <p class="font-small text-sm text-muted leading-relaxed mb-5">{{ p.desc }}</p>
          </div>
          <p class="font-heading font-extrabold text-xl text-emerald-500 mt-auto">{{ p.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
