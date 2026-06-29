<script setup lang="ts">
import { packages } from '~/data/cbs'
</script>

<template>
  <CbsSection title="Paket Kemitraan" text="Setiap orang bisa memulai dari tahap yang sesuai, lalu bertumbuh dalam jalur Member menuju Agen dan Distributor.">
    <div class="grid gap-6 lg:grid-cols-3">
      <article v-for="(item, index) in packages" :key="item.title" class="rounded-[2rem] border border-emerald/10 bg-white p-7 shadow-soft">
        <div class="flex items-center justify-between">
          <UIcon :name="item.icon" class="h-10 w-10 text-gold" />
          <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald">Tahap {{ index + 1 }}</span>
        </div>
        <h3 class="mt-6 text-3xl font-bold text-emerald">{{ item.title }}</h3>
        <p class="mt-4 min-h-24 leading-8 text-muted">{{ item.text }}</p>
        <CbsButton to="/kemitraan" variant="outline" class="mt-6 w-full">{{ item.cta }}</CbsButton>
      </article>
    </div>
  </CbsSection>
</template>
