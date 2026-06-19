<script setup lang="ts">
const pilar = [
  {
    title: 'Product',
    desc: 'Produk premium halal berkualitas tinggi yang mudah dipasarkan.',
    icon: 'i-heroicons-shopping-bag',
    gradient: 'from-emerald-400 to-emerald-600',
    delay: '0',
  },
  {
    title: 'Business',
    desc: 'Sistem bisnis terbukti dengan dukungan penuh dari tim CBS.',
    icon: 'i-heroicons-presentation-chart-line',
    gradient: 'from-amber-400 to-amber-600',
    delay: '150',
  },
  {
    title: 'Dakwah',
    desc: 'Setiap transaksi bernilai dakwah — memperkuat ekonomi umat.',
    icon: 'i-heroicons-megaphone',
    gradient: 'from-sky-400 to-sky-600',
    delay: '300',
  },
  {
    title: 'Wakaf',
    desc: 'Sebagian profit disalurkan untuk program wakaf produktif CBS.',
    icon: 'i-heroicons-building-library',
    gradient: 'from-rose-400 to-rose-600',
    delay: '450',
  },
]
</script>

<template>
  <section id="ekosistem" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Ekosistem CBS
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          4 Pilar yang
          <span class="text-emerald-500">Saling Menguatkan</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          Inilah fondasi yang membuat CBS berbeda — bukan sekadar bisnis, tapi ekosistem keberkahan.
        </p>
      </div>

      <div class="mt-16 relative">
        <div class="hidden lg:grid grid-cols-2 gap-x-20 gap-y-12 max-w-3xl mx-auto">
          <div
            v-for="(p, i) in pilar"
            :key="p.title"
            class="relative group"
            :class="[
              i === 0 ? 'lg:translate-x-8' : '',
              i === 1 ? 'lg:-translate-x-8' : '',
              i === 2 ? 'lg:translate-x-8' : '',
              i === 3 ? 'lg:-translate-x-8' : '',
            ]"
          >
            <div class="flex items-start gap-5">
              <div
                :class="[
                  'grid place-items-center w-16 h-16 rounded-2xl shrink-0 bg-gradient-to-br text-white shadow-soft',
                  p.gradient,
                ]"
              >
                <UIcon :name="p.icon" class="w-7 h-7" />
              </div>
              <div class="pt-1">
                <h3 class="font-heading font-bold text-2xl text-ink mb-2">{{ p.title }}</h3>
                <p class="font-small text-sm text-muted leading-relaxed">{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6 lg:hidden">
          <div
            v-for="p in pilar"
            :key="p.title"
            class="card-float bg-warm rounded-3xl p-7 border border-emerald-100/50"
          >
            <div
              :class="[
                'grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br text-white mb-5',
                p.gradient,
              ]"
            >
              <UIcon :name="p.icon" class="w-7 h-7" />
            </div>
            <h3 class="font-heading font-bold text-xl text-ink mb-2">{{ p.title }}</h3>
            <p class="font-small text-sm text-muted leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
