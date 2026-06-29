<script setup lang="ts">
import { hiddenEnemies } from '~/data/cbs'
</script>

<template>
  <CbsSection tone="cream" title="Apa yang Diam-Diam Menggerus Rezeki Kita?" text="Sering kali masalahnya bukan penghasilan semata, tetapi pola, kebiasaan, dan lingkungan yang membuat rezeki cepat hilang arah.">
    <div class="grid gap-5 md:grid-cols-5">
      <div v-for="[label, icon] in hiddenEnemies" :key="label" class="rounded-3xl border border-gold/20 bg-white p-6 text-center shadow-soft">
        <UIcon :name="icon" class="mx-auto h-9 w-9 text-emerald" />
        <p class="mt-4 text-sm font-bold text-ink">{{ label }}</p>
      </div>
    </div>
  </CbsSection>
</template>
