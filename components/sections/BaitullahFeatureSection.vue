<script setup lang="ts">
import { baitullahBenefits, imageSet } from '~/data/cbs'
</script>

<template>
  <CbsSection id="baitullah" tone="dark">
    <template #background>
      <img :src="imageSet.haram" alt="Masjidil Haram" class="absolute inset-0 h-full w-full object-cover opacity-25">
      <div class="absolute inset-0 bg-gradient-to-br from-forestdeep via-forest/95 to-emerald/80"></div>
    </template>
    <div class="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
      <div>
        <p class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Tiket Emas Baitullah</p>
        <h2 class="text-4xl font-bold leading-tight md:text-6xl">Menjaga Nilai Rezeki, Menjemput Panggilan Baitullah.</h2>
        <p class="mt-6 max-w-3xl text-lg leading-9 text-white/75">
          Program persiapan umrah dan haji berbasis edukasi, komunitas, tabungan emas, dan pembinaan spiritual.
        </p>
        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <div v-for="benefit in baitullahBenefits" :key="benefit" class="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-forest">✓</span>
            <span class="font-semibold">{{ benefit }}</span>
          </div>
        </div>
        <CbsButton to="/tiket-emas-baitullah" class="mt-9">Saya Ingin Menuju Baitullah</CbsButton>
      </div>
      <div class="rounded-[2rem] border border-gold/30 bg-white/10 p-4 backdrop-blur-md">
        <img :src="imageSet.gold" alt="Emas untuk menjaga nilai rezeki" class="aspect-[4/5] w-full rounded-[1.5rem] object-cover">
      </div>
    </div>
  </CbsSection>
</template>
