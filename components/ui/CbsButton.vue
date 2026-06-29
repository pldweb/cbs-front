<script setup lang="ts">
defineProps<{
  to?: string
  variant?: 'gold' | 'emerald' | 'outline' | 'light'
}>()
</script>

<template>
  <NuxtLink
    :to="to || '#'"
    class="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-4 focus:ring-gold/30"
    :class="{
      'bg-gold text-forest shadow-lg shadow-gold/25 hover:bg-gold-300': !variant || variant === 'gold',
      'bg-emerald text-white shadow-lg shadow-emerald/20 hover:bg-emerald-700': variant === 'emerald',
      'border border-emerald/25 bg-white text-emerald hover:border-emerald hover:bg-emerald-50': variant === 'outline',
      'bg-white text-emerald hover:bg-gold-50': variant === 'light'
    }"
  >
    <slot />
  </NuxtLink>
</template>
