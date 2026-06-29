<script setup lang="ts">
import { imageSet } from '~/data/cbs'
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-forest pt-28 text-white">
    <div class="absolute inset-0">
      <img :src="imageSet.hero" alt="Keluarga Muslim dan suasana ibadah" class="h-full w-full object-cover opacity-45">
      <div class="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-emerald/20"></div>
      <div class="absolute inset-0 islamic-pattern opacity-35"></div>
    </div>
    <div class="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="animate-fade-up">
        <p class="mb-5 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-bold text-gold">Gerakan Hijrah Finansial Nasional</p>
        <h1 class="max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">Bekerja Keras Tidak Selalu Membawa Ketenangan.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-9 text-white/78">
          CBS membantu keluarga Muslim menjaga rezeki, menumbuhkan keberkahan, dan mempersiapkan masa depan dunia serta akhirat melalui ekosistem Hijrah Finansial.
        </p>
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <CbsButton to="/konsultasi">Konsultasi Gratis <UIcon name="i-lucide-arrow-right" class="h-4 w-4" /></CbsButton>
          <CbsButton to="/program" variant="light">Pelajari Program</CbsButton>
        </div>
      </div>
      <div class="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-premium backdrop-blur-md">
        <img :src="imageSet.family" alt="Keluarga Muslim bahagia" class="aspect-[4/5] w-full rounded-[1.5rem] object-cover">
        <div class="mt-4 grid grid-cols-3 gap-3 text-center">
          <div class="rounded-2xl bg-white/10 p-3"><strong class="block text-gold">100</strong><span class="text-xs text-white/65">lead/hari</span></div>
          <div class="rounded-2xl bg-white/10 p-3"><strong class="block text-gold">30</strong><span class="text-xs text-white/65">konsultasi</span></div>
          <div class="rounded-2xl bg-white/10 p-3"><strong class="block text-gold">Baitullah</strong><span class="text-xs text-white/65">tujuan</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
