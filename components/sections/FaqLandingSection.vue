<script setup lang="ts">
import { faqs } from '~/data/cbs'
</script>

<template>
  <CbsSection id="faq" title="FAQ">
    <div class="mx-auto max-w-3xl divide-y divide-emerald/10 rounded-[2rem] border border-emerald/10 bg-white shadow-soft">
      <details v-for="faq in faqs" :key="faq.q" class="group p-6">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink">
          {{ faq.q }}
          <UIcon name="i-lucide-chevron-down" class="h-5 w-5 text-gold transition group-open:rotate-180" />
        </summary>
        <p class="mt-4 leading-8 text-muted">{{ faq.a }}</p>
      </details>
    </div>
  </CbsSection>
</template>
