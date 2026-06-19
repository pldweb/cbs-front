<script setup lang="ts">
const masalah = [
  {
    icon: '💸',
    title: 'Penghasilan Bertambah',
    sub: 'Ketenangan Berkurang',
  },
  {
    icon: '📉',
    title: 'Hutang Menjadi Normal',
    sub: 'Tenang Menjadi Mahal',
  },
  {
    icon: '💰',
    title: 'Rezeki Masuk',
    sub: 'Namun Terasa Kurang',
  },
  {
    icon: '⚠️',
    title: 'Sibuk Mencari Nafkah',
    sub: 'Lupa Menjaga Berkah',
  },
]
</script>

<template>
  <section id="masalah" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Kenali Masalahnya
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Apa yang Terjadi Dengan
          <span class="text-emerald-500">Keuangan Kita</span>
          Hari Ini?
        </h2>
        <p class="mt-4 text-muted text-lg">
          Mayoritas umat Muslim terjebak dalam dilema yang sama. Kamu tidak sendiri.
        </p>
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(m, i) in masalah"
          :key="i"
          class="card-float bg-warm rounded-3xl p-7 border border-emerald-100/50"
        >
          <div class="text-[42px] mb-4 leading-none">{{ m.icon }}</div>
          <h3 class="font-heading font-bold text-lg text-ink mb-1">{{ m.title }}</h3>
          <p class="font-small text-sm text-muted">{{ m.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
