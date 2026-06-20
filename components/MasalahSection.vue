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
          class="card-float bg-warm rounded-3xl p-7 border border-emerald-100/50 flex flex-col justify-start"
        >
          <div class="text-[40px] mb-5 leading-none">{{ m.icon }}</div>
          
          <div class="space-y-1">
            <!-- Kondisi Lahiriah (Check) -->
            <div class="flex items-start gap-2.5">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span class="font-small text-sm text-ink/90 font-medium leading-snug">{{ m.title }}</span>
            </div>
            <!-- Kondisi Batiniah (Silang) -->
            <div class="flex items-start gap-2.5">
              <UIcon name="i-heroicons-x-circle" class="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <span class="font-small text-sm text-rose-600 font-semibold leading-snug">{{ m.sub }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Quote Block -->
      <div class="mt-16 max-w-3xl mx-auto bg-emerald-50/50 rounded-3xl p-8 lg:p-10 border border-emerald-100/50 relative overflow-hidden text-center">
        <div class="absolute -top-6 -left-6 text-emerald-200/40 opacity-20 pointer-events-none font-serif text-[180px] leading-none">“</div>
        <p class="font-heading font-bold text-xl sm:text-2xl text-forest leading-relaxed relative z-10">
          "Masalah terbesar finansial hari ini bukanlah tentang kurangnya nominal uang yang kita miliki, melainkan tentang mulai hilangnya nilai keberkahan di dalamnya."
        </p>
      </div>
    </div>
  </section>
</template>
