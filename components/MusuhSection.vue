<script setup lang="ts">
const musuh = [
  {
    icon: '📈',
    emoji_bg: 'bg-red-50',
    title: 'Inflasi',
    desc: 'Diam-diam menggerus nilai uang yang kamu simpan setiap tahunnya.',
    stat: '5–7%',
    stat_label: 'per tahun',
  },
  {
    icon: '🛍️',
    emoji_bg: 'bg-orange-50',
    title: 'Gaya Hidup Konsumtif',
    desc: 'Saat pendapatan naik, pengeluaran ikut naik dan tabungan tetap tidak ada.',
    stat: '70%',
    stat_label: 'habis untuk konsumsi',
  },
  {
    icon: '💳',
    emoji_bg: 'bg-rose-50',
    title: 'Utang Konsumtif',
    desc: 'Kredit barang mewah yang terasa normal, padahal menggerus masa depan.',
    stat: '90 Juta',
    stat_label: 'orang terjebak utang',
  },
  {
    icon: '🏚️',
    emoji_bg: 'bg-amber-50',
    title: 'Tidak Punya Aset',
    desc: 'Kerja keras bertahun-tahun tapi tidak ada yang bisa diwariskan.',
    stat: '82%',
    stat_label: 'tidak punya aset produktif',
  },
  {
    icon: '🧍',
    emoji_bg: 'bg-purple-50',
    title: 'Tidak Punya Komunitas',
    desc: 'Berjalan sendiri tanpa mentor, tanpa jaringan mudah terjatuh.',
    stat: '1 dari 10',
    stat_label: 'punya komunitas finansial',
  },
]
</script>

<template>
  <section id="musuh" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-rose-500">
          Waspada
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Apa yang Diam-Diam
          <span class="text-rose-500">Menggerus Rezeki Kita?</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          5 musuh finansial yang tidak terlihat tapi terus bekerja setiap hari.
        </p>
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div
          v-for="(m, i) in musuh"
          :key="i"
          class="card-float bg-white rounded-3xl p-7 border border-rose-100/60 flex flex-col gap-4"
          :class="[
            'lg:col-span-2',
            i === 3 ? 'lg:col-start-2' : '',
            i === 4 ? 'sm:col-span-2 lg:col-span-2 lg:col-start-auto' : '',
          ]"
        >
          <div class="flex items-start gap-4">
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0', m.emoji_bg]">
              {{ m.icon }}
            </div>
            <div class="flex-1">
              <h3 class="font-heading font-bold text-xl text-ink">{{ m.title }}</h3>
              <p class="mt-1 font-small text-sm text-muted leading-relaxed">{{ m.desc }}</p>
            </div>
          </div>
          <div class="pt-3 border-t border-rose-100/60 flex items-baseline gap-2">
            <span class="font-heading font-extrabold text-2xl text-rose-500">{{ m.stat }}</span>
            <span class="font-small mb-1 text-sm text-muted">{{ m.stat_label }}</span>
          </div>
        </div>
      </div>

      <div class="mt-12 max-w-2xl mx-auto text-center bg-rose-50 rounded-3xl px-8 py-8 border border-rose-100">
        <p class="font-heading font-bold text-xl text-rose-700 leading-relaxed">
          "Musuh terbesar finansialmu bukanlah kondisi ekonomi nasional. Melainkan kebiasaan kecil yang kamu biarkan terus berjalan."
        </p>
      </div>
    </div>
  </section>
</template>
