<script setup lang="ts">
import { hijrahSteps } from '~/data/cbs'
</script>

<template>
  <CbsSection title="Apa Itu Hijrah Finansial?" text="Hijrah Finansial adalah perjalanan menata cara mencari, menjaga, mengembangkan, dan menyalurkan rezeki agar lebih dekat dengan keberkahan.">
    <div class="grid gap-4 md:grid-cols-6">
      <div v-for="(step, index) in hijrahSteps" :key="step" class="relative rounded-3xl border border-emerald/10 bg-white p-6 shadow-soft">
        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-bold text-forest">{{ index + 1 }}</div>
        <h3 class="mt-5 text-xl font-bold text-emerald">{{ step }}</h3>
        <p class="mt-3 text-sm leading-7 text-muted">Tahap {{ step.toLowerCase() }} membawa keluarga menuju keputusan finansial yang lebih sadar.</p>
      </div>
    </div>
  </CbsSection>
</template>
