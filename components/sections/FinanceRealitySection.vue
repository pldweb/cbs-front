<script setup lang="ts">
import { painStats } from '~/data/cbs'
</script>

<template>
  <CbsSection title="Apa yang Sedang Terjadi Dengan Keuangan Kita?" text="CBS memulai dari realita yang dirasakan banyak keluarga: bukan untuk menakut-nakuti, tetapi untuk membantu kita lebih sadar dan lebih siap.">
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      <article v-for="item in painStats" :key="item.label" class="card-float rounded-3xl border border-emerald/10 bg-white p-6 shadow-soft">
        <UIcon :name="item.icon" class="h-8 w-8 text-gold" />
        <div class="mt-5 font-heading text-4xl font-bold text-emerald">{{ item.value }}</div>
        <h3 class="mt-3 text-lg font-bold text-ink">{{ item.label }}</h3>
        <p class="mt-3 text-sm leading-7 text-muted">{{ item.text }}</p>
      </article>
    </div>
  </CbsSection>
</template>
