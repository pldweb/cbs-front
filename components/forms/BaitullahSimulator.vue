<script setup lang="ts">
const { target, monthly, current, monthsNeeded, progress, estimatedDate } = useBaitullahSimulator()
const formatter = new Intl.NumberFormat('id-ID')
</script>

<template>
  <div class="grid gap-8 rounded-[2rem] border border-gold/30 bg-white p-6 shadow-premium md:grid-cols-[1fr_0.9fr] md:p-8">
    <div class="space-y-6">
      <label class="block text-sm font-bold text-ink">
        Target Umrah (Rp)
        <input v-model.number="target" type="range" min="15000000" max="80000000" step="500000" class="mt-4 w-full accent-gold">
        <span class="mt-2 block text-2xl font-bold text-emerald">Rp {{ formatter.format(target) }}</span>
      </label>
      <label class="block text-sm font-bold text-ink">
        Nominal Tabungan per Bulan
        <input v-model.number="monthly" type="range" min="250000" max="10000000" step="250000" class="mt-4 w-full accent-gold">
        <span class="mt-2 block text-2xl font-bold text-emerald">Rp {{ formatter.format(monthly) }}</span>
      </label>
      <label class="block text-sm font-bold text-ink">
        Tabungan Saat Ini
        <input v-model.number="current" type="number" min="0" class="mt-3 w-full rounded-2xl border border-emerald/15 px-4 py-3 outline-none focus:border-gold">
      </label>
    </div>
    <div class="rounded-[1.5rem] bg-forest p-6 text-white islamic-pattern">
      <p class="text-sm font-bold uppercase tracking-[0.2em] text-gold">Estimasi</p>
      <div class="mt-5 font-heading text-5xl font-bold">{{ monthsNeeded }}</div>
      <p class="mt-2 text-white/70">bulan menuju target. Estimasi keberangkatan: <strong class="text-white">{{ estimatedDate }}</strong>.</p>
      <div class="mt-8">
        <div class="mb-2 flex justify-between text-sm text-white/70">
          <span>Progress</span>
          <span>{{ progress }}%</span>
        </div>
        <div class="h-4 overflow-hidden rounded-full bg-white/15">
          <div class="h-full rounded-full bg-gold transition-all duration-700" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
      <CbsButton to="/konsultasi" class="mt-8 w-full">Mulai Menabung Emas</CbsButton>
    </div>
  </div>
</template>
