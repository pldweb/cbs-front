<script setup lang="ts">
import { roadmap } from '~/data/cbs'
</script>

<template>
  <CbsSection tone="cream" title="Roadmap Menuju Baitullah" text="Perjalanan besar dibuat menjadi langkah yang bisa dijalani hari demi hari bersama komunitas.">
    <div class="no-scrollbar flex gap-4 overflow-x-auto pb-4">
      <article v-for="(step, index) in roadmap" :key="step" class="min-w-[240px] rounded-3xl border border-emerald/10 bg-white p-6 shadow-soft">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-sm font-bold text-white">{{ index + 1 }}</div>
        <h3 class="mt-5 text-xl font-bold text-ink">{{ step }}</h3>
      </article>
    </div>
  </CbsSection>
</template>
