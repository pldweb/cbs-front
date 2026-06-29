<script setup lang="ts">
const steps = [
  {
    number: '01',
    icon: '🤝',
    title: 'Gabung Komunitas',
    desc: 'Bergabung dengan ribuan anggota CBS yang berhijrah finansial bersama.',
    color: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
    progress: 14,
  },
  {
    number: '02',
    icon: '📚',
    title: 'Belajar Hijrah Finansial',
    desc: 'Ikuti edukasi eksklusif tentang mengelola, menjaga, dan menumbuhkan rezeki.',
    color: 'from-sky-400 to-sky-600',
    bg: 'bg-sky-50',
    progress: 29,
  },
  {
    number: '03',
    icon: '🪙',
    title: 'Menabung Emas',
    desc: 'Mulai menabung emas syariah sebagai persiapan dana perjalanan suci.',
    color: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
    progress: 43,
  },
  {
    number: '04',
    icon: '🤲',
    title: 'Riyadhoh Baitullah',
    desc: 'Pembinaan spiritual dan persiapan jiwa untuk menjadi tamu Allah.',
    color: 'from-violet-400 to-violet-600',
    bg: 'bg-violet-50',
    progress: 57,
  },
  {
    number: '05',
    icon: '🎯',
    title: 'Target Dana Tercapai',
    desc: 'Pantau progres tabungan emas dan capai target keberangkatan.',
    color: 'from-rose-400 to-rose-600',
    bg: 'bg-rose-50',
    progress: 71,
  },
  {
    number: '06',
    icon: '✈️',
    title: 'Berangkat Umrah',
    desc: 'Berangkat ke Baitullah bersama komunitas CBS dengan penuh keberkahan.',
    color: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-50',
    progress: 86,
  },
  {
    number: '07',
    icon: '🌟',
    title: 'Jadi Penggerak Kebaikan',
    desc: 'Kembali dan menginspirasi keluarga serta komunitas menuju Baitullah.',
    color: 'from-gold/80 to-amber-600',
    bg: 'bg-yellow-50',
    progress: 100,
  },
]
</script>

<template>
  <section id="roadmap" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-gold">
          Perjalanan Menuju Baitullah
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          7 Langkah Nyata
          <span class="text-gold">Menuju Tanah Haram</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          Bukan sekadar impian — ini adalah peta jalan yang sudah dibuktikan ratusan jamaah CBS.
        </p>
      </div>

      <div class="mt-14 relative">
        <UCarousel
          v-slot="{ item: step }"
          :items="steps"
          :ui="{ item: 'basis-[86%] sm:basis-[48%] lg:basis-1/3 xl:basis-1/4 px-2' }"
          arrows
          class="relative px-8 md:px-10"
          prev-icon="i-lucide-chevron-left"
          next-icon="i-lucide-chevron-right"
          :prev="{ color: 'primary', variant: 'outline', size: 'xl', class: 'absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gold-50 transition-colors z-30 pointer-events-auto w-9 h-9 md:w-12 md:h-12 flex items-center justify-center' }"
          :next="{ color: 'primary', variant: 'outline', size: 'xl', class: 'absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gold-50 transition-colors z-30 pointer-events-auto w-9 h-9 md:w-12 md:h-12 flex items-center justify-center' }"
        >
          <article class="h-full">
            <div class="relative h-full min-h-[280px] rounded-3xl bg-white border border-emerald-100/60 p-6 shadow-sm overflow-hidden">
              <div class="absolute right-5 top-4 font-heading font-extrabold text-6xl text-emerald-50">
                {{ step.number }}
              </div>

              <div :class="['relative z-10 w-16 h-16 rounded-2xl bg-linear-to-br text-white flex items-center justify-center shadow-soft text-2xl mb-6', step.color]">
                {{ step.icon }}
              </div>

              <p class="relative z-10 font-small text-xs font-bold tracking-widest uppercase text-gold">
                Langkah {{ step.number }}
              </p>
              <h3 class="relative z-10 mt-2 font-heading font-extrabold text-2xl text-ink leading-tight">
                {{ step.title }}
              </h3>
              <p class="relative z-10 mt-4 font-small text-sm text-muted leading-relaxed">
                {{ step.desc }}
              </p>

              <div class="absolute left-6 right-6 bottom-5 h-1 rounded-full bg-emerald-50 overflow-hidden">
                <div class="h-full rounded-full bg-gold" :style="{ width: `${step.progress}%` }" />
              </div>
            </div>
          </article>
        </UCarousel>

        <p class="mt-6 text-center font-small text-xs text-muted/60">
          Geser untuk melihat seluruh perjalanan menuju Baitullah.
        </p>
      </div>

      <!-- CTA -->
      <div class="mt-14 text-center">
        <UButton
          to="#simulator"
          size="xl"
          class="rounded-2xl font-semibold px-10 text-forest border-none shadow-md"
          style="background: #D4AF37"
        >
          🕌 Hitung Estimasi Keberangkatanku
        </UButton>
      </div>
    </div>
  </section>
</template>
