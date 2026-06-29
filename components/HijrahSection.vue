<script setup lang="ts">
const journey = [
  {
    label: 'Gelisah',
    desc: 'Mulai jujur bahwa uang masuk belum tentu membuat hati tenang.',
    icon: 'i-heroicons-exclamation-triangle',
    accent: 'text-rose-500 bg-rose-50 border-rose-100',
  },
  {
    label: 'Sadar',
    desc: 'Melihat pola bocor: inflasi, utang, konsumsi, dan tujuan yang kabur.',
    icon: 'i-heroicons-light-bulb',
    accent: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    label: 'Belajar',
    desc: 'Mengenal cara menjaga rezeki, memilih produk halal, dan menata prioritas.',
    icon: 'i-heroicons-book-open',
    accent: 'text-sky-600 bg-sky-50 border-sky-100',
  },
  {
    label: 'Bertumbuh',
    desc: 'Mulai punya sistem, komunitas, dan jalur penghasilan yang lebih sehat.',
    icon: 'i-heroicons-arrow-trending-up',
    accent: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
  {
    label: 'Berkah',
    desc: 'Bisnis tidak hanya mengejar angka, tapi juga dakwah, keluarga, dan wakaf.',
    icon: 'i-heroicons-sparkles',
    accent: 'text-gold bg-gold/10 border-gold/30',
  },
  {
    label: 'Baitullah',
    desc: 'Rezeki diarahkan menjadi bekal perjalanan besar menuju panggilan Allah.',
    icon: 'i-heroicons-map-pin',
    accent: 'text-forest bg-white border-emerald-100',
  },
]

const timeline = [
  {
    side: 'left',
    label: 'SEBELUM',
    tagline: 'Rezeki, tapi gelisah.',
    points: [
      'Penghasilan tidak pasti, naik-turun setiap bulan',
      'Bertanya-tanya soal kehalalan sumber rezeki',
      'Waktu habis untuk bekerja, keluarga terabaikan',
      'Fokus dunia — akhirat tertunda',
    ],
    bg: 'bg-rose-50 border-rose-200',
    text: 'text-rose-600',
    icon: 'i-heroicons-x-circle',
  },
  {
    side: 'right',
    label: 'SESUDAH',
    tagline: 'Rezeki, dan menenangkan.',
    points: [
      'Sistem bisnis yang terbukti dan berkelanjutan',
      'Produk 100% halal, dipandu nilai-nilai Islami',
      'Kerja dari mana saja, waktu fleksibel untuk keluarga',
      'Bisnis, dakwah, dan wakaf berjalan selaras',
    ],
    bg: 'bg-emerald-50 border-emerald-200',
    text: 'text-emerald-600',
    icon: 'i-heroicons-check-circle',
  },
]
</script>

<template>
  <section id="hijrah" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-sm font-semibold tracking-widest uppercase text-emerald-500">
          Apa itu Hijrah Finansial?
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Dari <span class="text-gold">Gelisah</span> ke
          <span class="text-emerald-500">Tenteram</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          Hijrah Finansial adalah perjalanan menata ulang hubunganmu dengan rezeki —
          dari sumber yang abu-abu menuju keberkahan yang nyata.
        </p>
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(step, i) in journey"
          :key="step.label"
          class="group relative overflow-hidden rounded-3xl bg-white border border-emerald-100/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
        >
          <div class="absolute right-5 top-4 font-heading font-extrabold text-5xl text-emerald-50 transition-colors duration-300 group-hover:text-gold/20">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <div :class="['relative grid place-items-center w-12 h-12 rounded-2xl border mb-5', step.accent]">
            <UIcon :name="step.icon" class="w-6 h-6" />
          </div>
          <p class="relative font-small text-xs font-semibold tracking-widest uppercase text-muted">Tahap {{ i + 1 }}</p>
          <h3 class="relative mt-2 font-heading font-extrabold text-2xl text-ink">{{ step.label }}</h3>
          <p class="relative mt-3 font-small text-sm text-muted leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>

      <div class="mt-16 relative">
        <div
          class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-gold/40 to-emerald-200" />

        <div class="space-y-12 lg:space-y-0">
          <div v-for="(t, i) in timeline" :key="i" class="relative lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div v-if="t.side === 'right'" class="hidden lg:block" />
            <div :class="[
              t.side === 'right' ? 'lg:text-left' : 'lg:text-right',
              t.bg,
              'rounded-3xl p-8 lg:p-10 border',
            ]">
              <div :class="[
                t.side === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse',
                'flex items-center gap-3 mb-4',
              ]">
                <span
                  :class="[t.text, 'font-small max-sm:text-lg text-xs font-bold tracking-widest uppercase bg-white/70 px-3 py-1 rounded-full']">
                  {{ t.label }}
                </span>
                <UIcon :name="t.icon" :class="[t.text, 'w-5 h-5']" />
              </div>

              <h3 :class="[
                t.side === 'right' ? 'lg:text-left' : 'lg:text-right',
                'font-heading font-bold text-2xl text-ink mb-5',
              ]">
                {{ t.tagline }}
              </h3>

              <ul :class="[
                t.side === 'right' ? 'lg:text-left' : 'lg:text-right',
                'space-y-3',
              ]">
                <li v-for="(p, j) in t.points" :key="j"
                  class="flex items-center gap-3 font-small max-sm:text-lg text-sm text-ink/80"
                  :class="t.side === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'">
                  <UIcon :name="t.side === 'right' ? 'i-heroicons-check' : 'i-heroicons-x-mark'"
                    :class="[t.text, 'w-4 h-4 shrink-0']" />
                  <span>{{ p }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
