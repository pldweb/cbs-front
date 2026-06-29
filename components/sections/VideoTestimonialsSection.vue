<script setup lang="ts">
import { sampleTestimonials, testimonialCategories } from '~/data/cbs'

const active = ref('Member')
</script>

<template>
  <CbsSection tone="cream" title="Video Testimoni" text="Ruang cerita dari member, agen, distributor, jamaah, dan leader. Data siap disambungkan ke endpoint testimonial backend.">
    <div class="mb-8 flex flex-wrap justify-center gap-3">
      <button v-for="category in testimonialCategories" :key="category" class="rounded-full px-4 py-2 text-sm font-bold transition" :class="active === category ? 'bg-emerald text-white' : 'bg-white text-muted hover:text-emerald'" @click="active = category">
        {{ category }}
      </button>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      <article v-for="item in sampleTestimonials" :key="item.name" class="rounded-3xl bg-white p-5 shadow-soft">
        <div class="flex aspect-video items-center justify-center rounded-2xl bg-forest text-white">
          <UIcon name="i-lucide-play" class="h-12 w-12 text-gold" />
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div>
            <h3 class="font-bold text-ink">{{ item.name }}</h3>
            <p class="text-sm text-gold">{{ item.role }}</p>
          </div>
          <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald">{{ item.duration }}</span>
        </div>
        <p class="mt-4 text-sm leading-7 text-muted">"{{ item.quote }}"</p>
      </article>
    </div>
  </CbsSection>
</template>
