<script setup lang="ts">
import { imageSet } from '~/data/cbs'
</script>

<template>
  <CbsSection title="Mengapa CBS Dibangun?">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <img :src="imageSet.community" alt="Komunitas CBS" class="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-premium">
      <div>
        <p class="text-lg leading-9 text-muted">
          CBS dibangun dari kegelisahan yang sederhana: banyak keluarga Muslim bekerja keras, tetapi belum tentu merasa tenang. Ada kebutuhan untuk ruang belajar yang membumi, komunitas yang saling menguatkan, dan sistem yang membantu rezeki tidak hanya bertambah, tetapi juga lebih terarah.
        </p>
        <p class="mt-5 text-lg leading-9 text-muted">
          Visi CBS adalah menghadirkan ekosistem yang profesional, hangat, dan bernilai dakwah, agar pertumbuhan ekonomi berjalan bersama kebermanfaatan dan harapan menuju Baitullah.
        </p>
        <div class="mt-7 grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl bg-emerald-50 p-4"><strong class="text-emerald">Amanah</strong><p class="text-sm text-muted">Transparan dan terarah.</p></div>
          <div class="rounded-2xl bg-emerald-50 p-4"><strong class="text-emerald">Komunitas</strong><p class="text-sm text-muted">Tidak berjalan sendiri.</p></div>
          <div class="rounded-2xl bg-emerald-50 p-4"><strong class="text-emerald">Baitullah</strong><p class="text-sm text-muted">Tujuan spiritual.</p></div>
        </div>
      </div>
    </div>
  </CbsSection>
</template>
