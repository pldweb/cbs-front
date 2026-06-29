<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const counters = [
  { value: 10000, suffix: '+', label: 'Member Aktif', icon: '👥' },
  { value: 1000, suffix: '+', label: 'Agen', icon: '🤝' },
  { value: 100, suffix: '+', label: 'Distributor', icon: '🏢' },
  { value: 34, suffix: '', label: 'Provinsi', icon: '🗺️' },
  { value: 500, suffix: '+', label: 'Jamaah Umrah', icon: '🕌' },
]

const testimonials = [
  {
    name: 'Aisyah R.',
    role: 'Mitra CBS — Jakarta',
    quote:
      'Awalnya ragu, tapi setelah lihat sistemnya... masya Allah, ternyata bisnis bisa dijalankan dengan tetap menjaga nilai-nilai Islam. Sekarang suami juga ikut bantu.',
  },
  {
    name: 'Fahmi I.',
    role: 'Mitra CBS — Surabaya',
    quote:
      'Produknya bagus banget, mudah dijual. Yang paling saya syukuri adalah ada program wakaf dari setiap transaksi. Jadi bisnis sekaligus amal.',
  },
  {
    name: 'Rina K.',
    role: 'Mitra CBS — Bandung',
    quote:
      'Dari ibu rumah tangga biasa, sekarang punya penghasilan sendiri. Mentornya sabar banget bimbing saya dari nol. Alhamdulillah.',
  },
  {
    name: 'Hadi S.',
    role: 'Mitra CBS — Yogyakarta',
    quote:
      'Saya awalnya cuma iseng ikut, eh ternyata seriusan. Modal kecil tapi hasilnya luar biasa. Yang paling penting, semuanya halal dan transparan.',
  },
  {
    name: 'Nurul F.',
    role: 'Mitra CBS — Medan',
    quote:
      'Sudah 2 tahun gabung CBS, alhamdulillah bisa bantu ekonomi keluarga tanpa harus ninggalin ibadah. Sistemnya benar-benar syar\'i.',
  },
]

const dashboardRef = ref<HTMLElement | null>(null)
const displayValues = ref(counters.map(() => 0))

let observer: IntersectionObserver | null = null
let animationFrame = 0
let hasAnimated = false

const formatCounter = (value: number, suffix: string) => {
  return `${new Intl.NumberFormat('id-ID').format(value)}${suffix}`
}

const animateCounters = () => {
  if (hasAnimated) return
  hasAnimated = true

  const duration = 1300
  const start = performance.now()

  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)

    displayValues.value = counters.map((counter) => Math.round(counter.value * eased))

    if (progress < 1) {
      animationFrame = requestAnimationFrame(tick)
    }
  }

  animationFrame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!dashboardRef.value || !('IntersectionObserver' in window)) {
    animateCounters()
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        animateCounters()
        observer?.disconnect()
      }
    },
    { threshold: 0.35 },
  )

  observer.observe(dashboardRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <section id="testimoni" ref="dashboardRef" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Dashboard Nasional
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Target Besar yang
          <span class="text-emerald-500">Sedang Digerakkan</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          CBS dibangun sebagai gerakan nasional: member, agen, distributor, home base, dan jamaah bergerak dalam satu ekosistem.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        <div
          v-for="(c, i) in counters"
          :key="c.label"
          class="text-center bg-white rounded-3xl p-6 border border-emerald-100/50 shadow-sm"
        >
          <div class="text-2xl mb-2">{{ c.icon }}</div>
          <p class="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-500">
            {{ formatCounter(displayValues[i] ?? 0, c.suffix) }}
          </p>
          <p class="mt-1.5 font-small text-sm text-muted">{{ c.label }}</p>
        </div>
      </div>

      <div class="mt-14 relative">
        <UCarousel
          :items="testimonials"
          :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
          arrows
          loop
          class="gap-6 relative px-8 md:px-0"
          prev-icon="i-lucide-chevron-left"
          next-icon="i-lucide-chevron-right"
          :prev="{ color: 'primary', variant: 'outline', size: 'xl', class: 'absolute left-0 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-emerald-50 transition-colors z-30 pointer-events-auto w-8 h-8 md:w-14 md:h-14 flex items-center justify-center' }"
          :next="{ color: 'primary', variant: 'outline', size: 'xl', class: 'absolute right-0 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-emerald-50 transition-colors z-30 pointer-events-auto w-8 h-8 md:w-14 md:h-14 flex items-center justify-center' }"
        >
          <template #default="{ item }">
            <div class="card-float bg-white rounded-3xl p-5 md:p-7 border border-emerald-100/50 mx-3 h-full">
              <div class="flex gap-1 mb-4">
                <UIcon v-for="n in 5" :key="n" name="i-heroicons-star" class="w-4 h-4 text-gold" />
              </div>
              <blockquote class="font-small text-sm text-ink/80 leading-relaxed mb-5">
                &ldquo;{{ item.quote }}&rdquo;
              </blockquote>
              <div class="flex items-center gap-3 pt-4 border-t border-emerald-50">
                <div
                  class="grid place-items-center w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 text-white font-heading font-bold text-sm"
                >
                  {{ item.name.charAt(0) }}
                </div>
                <div>
                  <p class="font-heading font-bold text-sm text-ink">{{ item.name }}</p>
                  <p class="font-small text-xs text-muted">{{ item.role }}</p>
                </div>
              </div>
            </div>
          </template>
        </UCarousel>
      </div>
    </div>
  </section>
</template>
