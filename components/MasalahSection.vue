<script setup lang="ts">
const stats = [
  {
    value: '78%',
    label: 'Keluarga Muslim hidup dari gaji ke gaji',
    color: 'text-rose-500',
    bg: 'bg-rose-50 border-rose-100',
    image: '/photos/living-cost-bills.jpg',
    imageAlt: 'Menghitung pengeluaran bulanan keluarga',
  },
  {
    value: '3x',
    label: 'Biaya umrah naik dalam 10 tahun terakhir',
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-100',
    image: '/photos/baitullah-kaaba.jpg',
    imageAlt: 'Kaaba sebagai tujuan perjalanan umrah',
  },
  {
    value: '7%',
    label: 'Inflasi rata-rata menggerus nilai uang tiap tahun',
    color: 'text-orange-500',
    bg: 'bg-orange-50 border-orange-100',
    image: '/photos/financial-pressure.jpg',
    imageAlt: 'Uang tunai yang nilainya terus tergerus',
  },
  {
    value: '90Jt',
    label: 'Orang Indonesia terjebak utang konsumtif',
    color: 'text-red-500',
    bg: 'bg-red-50 border-red-100',
    image: '/photos/debt-credit-card.jpg',
    imageAlt: 'Transaksi konsumtif dan pembayaran tunai',
  },
]

const masalah = [
  {
    title: 'Penghasilan Bertambah',
    sub: 'Ketenangan Berkurang',
    image: '/photos/busy-working.jpg',
    imageAlt: 'Kesibukan bekerja dan tekanan finansial',
  },
  {
    title: 'Hutang Menjadi Normal',
    sub: 'Tenang Menjadi Mahal',
    image: '/photos/debt-credit-card.jpg',
    imageAlt: 'Pembayaran konsumtif yang terasa normal',
  },
  {
    title: 'Rezeki Masuk',
    sub: 'Namun Terasa Kurang',
    image: '/photos/living-cost-bills.jpg',
    imageAlt: 'Mengatur uang dan pengeluaran harian',
  },
  {
    title: 'Sibuk Mencari Nafkah',
    sub: 'Lupa Menjaga Berkah',
    image: '/photos/community-kajian.jpg',
    imageAlt: 'Kajian Al-Quran sebagai pengingat keberkahan',
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
          Apa yang Sedang Terjadi Dengan
          <span class="text-emerald-500">Keuangan Kita?</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          Data berbicara — mayoritas umat Muslim terjebak dalam dilema yang sama. Kamu tidak sendiri.
        </p>
      </div>

      <!-- Stats Visual -->
      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(s, i) in stats"
          :key="i"
          :class="['rounded-3xl overflow-hidden border bg-white shadow-sm', s.bg]"
        >
          <div class="h-50 overflow-hidden bg-warm">
            <img
              :src="s.image"
              :alt="s.imageAlt"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-5 text-left">
            <p :class="['font-heading font-extrabold text-4xl mb-2', s.color]">{{ s.value }}</p>
            <p class="font-small text-sm text-muted leading-snug">{{ s.label }}</p>
          </div>
        </div>
      </div>

      <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(m, i) in masalah" :key="i"
          class="card-float bg-warm rounded-3xl border border-emerald-100/50 overflow-hidden flex flex-col justify-start">
          <div class="h-44 overflow-hidden bg-emerald-50">
            <img
              :src="m.image"
              :alt="m.imageAlt"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-6 space-y-4">
            <div class="flex items-start gap-3">
              <span class="mt-1 h-9 w-1 rounded-full bg-emerald-500 shrink-0" />
              <div>
                <p class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">Realita</p>
                <p class="font-small max-sm:text-lg text-sm text-ink/90 font-medium leading-snug">{{ m.title }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1 h-9 w-1 rounded-full bg-rose-500 shrink-0" />
              <div>
                <p class="font-small text-xs font-semibold tracking-widest uppercase text-rose-500">Dampak</p>
                <p class="font-small max-sm:text-lg text-sm text-rose-600 font-semibold leading-snug">{{ m.sub }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quote Block -->
      <div
        class="mt-16 max-w-3xl mx-auto bg-emerald-50/50 rounded-3xl p-8 lg:p-10 border border-emerald-100/50 relative overflow-hidden text-center">
        <div
          class="absolute -top-6 -left-6 text-emerald-200/40 opacity-20 pointer-events-none font-serif text-[180px] leading-none">
          &ldquo;</div>
        <p class="font-heading font-bold text-xl sm:text-2xl text-forest leading-relaxed relative z-10">
          "Masalah terbesar finansial hari ini bukanlah tentang kurangnya nominal uang yang kita miliki, melainkan
          tentang mulai hilangnya nilai keberkahan di dalamnya."
        </p>
      </div>
    </div>
  </section>
</template>
