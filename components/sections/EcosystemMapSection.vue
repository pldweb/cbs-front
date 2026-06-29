<script setup lang="ts">
import { ecosystem } from '~/data/cbs'
</script>

<template>
  <CbsSection id="ekosistem" title="Ekosistem CBS" text="CBS dirancang sebagai ekosistem yang menyatukan edukasi, produk, komunitas, wakaf, dan perjalanan menuju Baitullah.">
    <div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
      <div class="rounded-[2rem] bg-forest p-8 text-white shadow-premium md:col-span-1 md:row-span-2">
        <p class="font-heading text-6xl font-bold text-gold">CBS</p>
        <p class="mt-5 text-white/70">Pusat gerakan yang menghubungkan pertumbuhan ekonomi keluarga dengan kebermanfaatan umat.</p>
      </div>
      <article v-for="item in ecosystem" :key="item" class="rounded-3xl border border-emerald/10 bg-white p-6 shadow-soft">
        <UIcon name="i-lucide-sparkles" class="h-7 w-7 text-gold" />
        <h3 class="mt-4 text-xl font-bold text-emerald">{{ item }}</h3>
      </article>
    </div>
  </CbsSection>
</template>
