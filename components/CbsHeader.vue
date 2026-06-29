<script setup lang="ts">
import { navItems } from '~/data/cbs'

const open = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/85 text-white backdrop-blur-xl">
    <div class="section-shell flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="~/assets/css/logo-cahaya-berkah-semesta.png" alt="Logo CBS" class="h-11 w-11 rounded-full bg-white object-contain p-1">
        <div>
          <p class="font-heading text-xl font-bold leading-none">CBS</p>
          <p class="text-xs font-semibold text-white/65">Cahaya Berkah Semesta</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-7 lg:flex">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="text-sm font-semibold text-white/75 transition hover:text-gold">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <CbsButton to="/konsultasi">Konsultasi Gratis</CbsButton>
      </div>

      <button class="rounded-xl border border-white/15 p-2 lg:hidden" aria-label="Buka menu" @click="open = !open">
        <UIcon :name="open ? 'i-lucide-x' : 'i-lucide-menu'" class="h-6 w-6" />
      </button>
    </div>
    <div v-if="open" class="border-t border-white/10 bg-forest px-4 py-4 lg:hidden">
      <div class="grid gap-2">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="rounded-xl px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/10" @click="open = false">
          {{ item.label }}
        </NuxtLink>
        <CbsButton to="/konsultasi" class="mt-2">Konsultasi Gratis</CbsButton>
      </div>
    </div>
  </header>
</template>
