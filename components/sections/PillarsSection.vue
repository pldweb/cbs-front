<script setup lang="ts">
import { pillars } from '~/data/cbs'
</script>

<template>
  <CbsSection tone="cream" title="4 Pilar CBS">
    <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_260px_1fr] md:items-center">
      <div class="grid gap-6">
        <article v-for="item in pillars.slice(0, 2)" :key="item.title" class="rounded-3xl bg-white p-6 shadow-soft">
          <UIcon :name="item.icon" class="h-8 w-8 text-gold" />
          <h3 class="mt-4 text-2xl font-bold text-emerald">{{ item.title }}</h3>
          <p class="mt-2 text-muted">{{ item.text }}</p>
        </article>
      </div>
      <div class="flex aspect-square items-center justify-center rounded-full border border-gold/40 bg-forest text-center text-white shadow-premium">
        <div>
          <p class="font-heading text-5xl font-bold text-gold">CBS</p>
          <p class="mt-2 text-sm text-white/65">Ekosistem Hijrah Finansial</p>
        </div>
      </div>
      <div class="grid gap-6">
        <article v-for="item in pillars.slice(2)" :key="item.title" class="rounded-3xl bg-white p-6 shadow-soft">
          <UIcon :name="item.icon" class="h-8 w-8 text-gold" />
          <h3 class="mt-4 text-2xl font-bold text-emerald">{{ item.title }}</h3>
          <p class="mt-2 text-muted">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </CbsSection>
</template>
