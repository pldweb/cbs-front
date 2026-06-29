<script setup lang="ts">
defineProps<{
  value: number
  label: string
  suffix?: string
}>()
</script>

<template>
  <div class="rounded-3xl border border-emerald/10 bg-white p-6 text-center shadow-soft">
    <div class="font-heading text-4xl font-bold text-emerald md:text-5xl">{{ value.toLocaleString('id-ID') }}{{ suffix }}</div>
    <p class="mt-2 text-sm font-semibold text-muted">{{ label }}</p>
  </div>
</template>
