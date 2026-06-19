<script setup lang="ts">
const produk = [
  {
    name: 'Beehive Nano Propolis',
    tagline: 'Imunitas Premium Halal',
    desc: 'Formula propolis nano-teknologi untuk daya tahan tubuh optimal. Produk flagship CBS.',
    price: 'Rp 185.000',
    image: '🍯',
    color: 'from-amber-400 to-amber-600',
  },
  {
    name: 'Alanabi',
    tagline: 'Nutrisi Sunnah Keluarga',
    desc: 'Suplemen harian berbasis bahan alami sunnah untuk kesehatan seluruh anggota keluarga.',
    price: 'Rp 150.000',
    image: '🌿',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Zammis',
    tagline: 'Perawatan Diri Syar\'i',
    desc: 'Rangkaian skincare dan perawatan tubuh berbahan alami, aman, dan sesuai syariat.',
    price: 'Rp 120.000',
    image: '✨',
    color: 'from-sky-400 to-sky-600',
  },
  {
    name: 'The Living Quran',
    tagline: 'Belajar Al-Quran Interaktif',
    desc: 'Platform pembelajaran Al-Quran modern dengan metode interaktif untuk semua usia.',
    price: 'Rp 99.000',
    image: '📖',
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

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(p, i) in produk"
          :key="p.name"
          class="card-float glass-card rounded-3xl p-7 text-center group cursor-default"
        >
          <div class="text-5xl mb-5">{{ p.image }}</div>
          <div
            :class="[
              'inline-block bg-gradient-to-r text-white font-small text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3',
              p.color,
            ]"
          >
            {{ p.tagline }}
          </div>
          <h3 class="font-heading font-bold text-lg text-ink mb-2.5">{{ p.name }}</h3>
          <p class="font-small text-sm text-muted leading-relaxed mb-5">{{ p.desc }}</p>
          <p class="font-heading font-extrabold text-xl text-emerald-500">{{ p.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
