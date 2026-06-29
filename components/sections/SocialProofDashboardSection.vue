<script setup lang="ts">
import { fallbackStats } from '~/data/cbs'
</script>

<template>
  <CbsSection tone="cream" title="Dashboard Nasional CBS" text="Angka berikut dapat ditarik dari API backend, dengan fallback publik untuk menjaga pengalaman landing tetap utuh.">
    <div class="grid gap-5 md:grid-cols-5">
      <StatCounter v-for="item in fallbackStats" :key="item.label" :value="item.value" :suffix="item.suffix" :label="item.label" />
    </div>
  </CbsSection>
</template>
