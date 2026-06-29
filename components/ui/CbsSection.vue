<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title?: string
  text?: string
  tone?: 'white' | 'cream' | 'dark'
}>()
</script>

<template>
  <section
    class="relative overflow-hidden py-20 md:py-28"
    :class="{
      'bg-white': !tone || tone === 'white',
      'bg-warm': tone === 'cream',
      'bg-forest text-white': tone === 'dark'
    }"
  >
    <slot name="background" />
    <div class="section-shell relative z-10">
      <div v-if="eyebrow || title || text" class="mx-auto mb-12 max-w-3xl text-center">
        <p v-if="eyebrow" class="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold">{{ eyebrow }}</p>
        <h2 v-if="title" class="text-3xl font-bold leading-tight md:text-5xl" :class="tone === 'dark' ? 'text-white' : 'text-ink'">{{ title }}</h2>
        <p v-if="text" class="mt-5 text-base leading-8" :class="tone === 'dark' ? 'text-white/75' : 'text-muted'">{{ text }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>
