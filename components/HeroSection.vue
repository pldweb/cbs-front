<script setup lang="ts">
const heroPhoto = '/photos/hero-family-mosque.jpg'
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-40 pb-20 lg:py-0 overflow-hidden bg-warm">
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
      style="background: radial-gradient(circle, var(--color-emerald) 0%, transparent 70%)"
    />
    <div
      class="absolute bottom-10 left-10 w-40 h-40 rounded-full opacity-10"
      style="background: radial-gradient(circle, var(--color-gold) 0%, transparent 70%)"
    />

    <div class="max-w-container mx-auto px-5 lg:px-8 w-full lg:pt-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- KIRI: Visual -->
        <div class="order-2 lg:order-1 flex justify-center">
          <div class="relative w-full max-w-[500px] h-[430px] sm:w-[400px] sm:h-[500px] lg:w-[480px] lg:h-[560px]">
            <div class="relative w-full h-full rounded-[40px] overflow-hidden">
              <img
                :src="heroPhoto"
                alt="Keluarga Muslim belajar Al-Quran di masjid bernuansa emas"
                class="w-full h-full object-cover object-bottom"
              />
              <div class="absolute inset-0 bg-linear-to-t from-forest/25 via-transparent to-gold/10" />
            </div>
            <div
              class="absolute -top-3 -left-3 w-14 h-14 rounded-2xl bg-warm shadow-soft flex items-center justify-center"
            >
              <UIcon name="i-heroicons-sparkles" class="w-7 h-7 text-gold" />
            </div>
          </div>
        </div>

        <!-- KANAN:-->
        <div class="order-1 lg:order-2 text-center lg:text-left">
          <h1 class="font-heading font-extrabold text-5xl w-[90%] sm:text-6xl lg:text-5xl xl:text-[60px] leading-[1.05] text-ink">
            Bekerja Keras Tidak Selalu
            <br />
            <span class="text-emerald-500">Membawa Ketenangan.</span>
          </h1>

          <p class="mt-6 text-lg text-muted max-w-lg leading-relaxed">
            CBS membantu keluarga Muslim menjaga rezeki, menumbuhkan keberkahan, dan mempersiapkan masa depan dunia serta akhirat melalui ekosistem Hijrah Finansial.
          </p>

          <!-- Benefit Chips -->
          <div class="mt-6 flex flex-wrap gap-3">
            <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 font-small text-sm font-medium px-4 py-2 rounded-full">
              <UIcon name="i-heroicons-check-badge" class="w-4 h-4" />
              Halal
            </span>
            <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 font-small text-sm font-medium px-4 py-2 rounded-full">
              <UIcon name="i-heroicons-check-badge" class="w-4 h-4" />
              Bertumbuh
            </span>
            <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 font-small text-sm font-medium px-4 py-2 rounded-full">
              <UIcon name="i-heroicons-check-badge" class="w-4 h-4" />
              Berkah
            </span>
            <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 font-small text-sm font-medium px-4 py-2 rounded-full">
              <UIcon name="i-heroicons-check-badge" class="w-4 h-4" />
              Menenangkan
            </span>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <UButton
              to="#kemitraan"
              size="xl"
              class="rounded-2xl text-center font-semibold px-8 bg-emerald text-white hover:bg-emerald-600 transition-all duration-300 border-none shadow-md"
            >
              Konsultasi Gratis →
            </UButton>
            <UButton
              to="#tiket-emas"
              variant="outline"
              color="primary"
              size="xl"
              class="rounded-2xl font-medium px-8"
            >
              Pelajari Program
            </UButton>
          </div>

          <p class="mt-5 font-small text-xs text-muted/60">
            💚 Telah dipercaya 10.000+ member di seluruh Indonesia
          </p>
        </div>
      </div>
    </div>

    <a
      href="#hijrah"
      class="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-floaty text-emerald-400 hover:text-emerald-600 transition-colors"
      aria-label="Scroll ke penjelasan"
    >
      <UIcon name="i-heroicons-chevron-down" class="w-7 h-7" />
    </a>
  </section>
</template>
