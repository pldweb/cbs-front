<script setup lang="ts">
const categories = [
  'Member',
  'Agen',
  'Distributor',
  'Jamaah',
  'Leader',
]

const videos = [
  {
    category: 'Member',
    name: 'Ibu Rumah Tangga',
    city: 'Bandung',
    title: 'Mulai belajar mengatur rezeki dari komunitas kecil.',
    length: '0:45',
    image: '/photos/hero-family-mosque.jpg',
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    category: 'Agen',
    name: 'Agen CBS',
    city: 'Surabaya',
    title: 'Dibimbing dari nol sampai berani membuka pasar sendiri.',
    length: '0:52',
    image: '/photos/community-kajian.jpg',
    accent: 'from-gold to-amber-600',
  },
  {
    category: 'Distributor',
    name: 'Koordinator Wilayah',
    city: 'Jakarta',
    title: 'Membangun tim, home base, dan gerakan edukasi lokal.',
    length: '0:58',
    image: '/photos/community-kajian.jpg',
    accent: 'from-forest to-emerald-700',
  },
  {
    category: 'Jamaah',
    name: 'Peserta Tiket Emas',
    city: 'Makassar',
    title: 'Menabung emas terasa lebih ringan saat berjalan bersama.',
    length: '0:41',
    image: '/photos/baitullah-kaaba.jpg',
    accent: 'from-sky-500 to-emerald-600',
  },
  {
    category: 'Leader',
    name: 'Pembina Komunitas',
    city: 'Medan',
    title: 'Dakwah, bisnis, dan wakaf bisa bergerak dalam satu ekosistem.',
    length: '1:00',
    image: '/photos/gold-savings.jpg',
    accent: 'from-rose-500 to-amber-600',
  },
]
</script>

<template>
  <section id="video-testimoni" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div class="lg:sticky lg:top-28">
          <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
            Video Testimoni
          </span>
          <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Suara Nyata dari
            <span class="text-emerald-500">Gerakan CBS</span>
          </h2>
          <p class="mt-5 text-muted text-lg leading-relaxed">
            Dengarkan cerita singkat dari member, agen, distributor, jamaah, dan leader yang bertumbuh bersama ekosistem CBS.
          </p>

          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
              <p class="font-heading font-extrabold text-3xl text-emerald-500">20+</p>
              <p class="mt-1 font-small text-sm text-muted">Cerita terkurasi</p>
            </div>
            <div class="rounded-2xl bg-gold/10 border border-gold/30 p-5">
              <p class="font-heading font-extrabold text-3xl text-gold">30-60</p>
              <p class="mt-1 font-small text-sm text-muted">Detik per cerita</p>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
              v-for="category in categories"
              :key="category"
              class="inline-flex items-center rounded-full bg-warm border border-emerald-100 px-4 py-2 font-small text-xs font-semibold text-forest"
            >
              {{ category }}
            </span>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-5">
          <article
            v-for="(video, i) in videos"
            :key="video.category"
            class="group card-float overflow-hidden rounded-3xl border border-emerald-100/60 bg-warm"
            :class="i === 0 ? 'sm:col-span-2' : ''"
          >
            <div class="relative aspect-video overflow-hidden bg-forest">
              <img
                :src="video.image"
                :alt="video.title"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div :class="['absolute inset-0 bg-linear-to-br opacity-35', video.accent]" />
              <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-forest/80 to-transparent" />
              <div class="absolute left-5 top-5 rounded-full bg-white/15 border border-white/20 px-3 py-1 font-small text-xs font-semibold text-white">
                {{ video.category }}
              </div>
              <div class="absolute right-5 top-5 rounded-full bg-forest/50 px-3 py-1 font-small text-xs font-semibold text-white">
                {{ video.length }}
              </div>
              <div class="absolute inset-0 grid place-items-center">
                <div
                  class="grid place-items-center w-16 h-16 rounded-full bg-white text-forest shadow-premium transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <UIcon name="i-heroicons-play-solid" class="w-7 h-7 translate-x-0.5" />
                </div>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-3">
                <div class="grid place-items-center w-11 h-11 rounded-full bg-white border border-emerald-100 text-emerald-500">
                  <UIcon name="i-heroicons-user-circle" class="w-6 h-6" />
                </div>
                <div>
                  <p class="font-heading font-bold text-base text-ink">{{ video.name }}</p>
                  <p class="font-small text-xs text-muted">{{ video.city }}</p>
                </div>
              </div>
              <h3 class="mt-5 font-heading font-bold text-xl text-ink leading-tight">
                {{ video.title }}
              </h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
