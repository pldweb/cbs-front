<script setup lang="ts">
/*
  AI IMAGE PROMPT — Hero Illustration:
  A professional Indonesian Muslim man, age 30-45, wearing modern modest attire (koko shirt + blazer),
  holding a Qur'an gently against his chest, smiling peacefully. Behind him: soft golden light rays,
  subtle upward-trending business chart lines, a modern mosque silhouette in the distance,
  floating minimalist business icons (handshake, growth arrow, leaf). Style: premium editorial,
  soft lighting, spiritual-modern aesthetic, warm golden + emerald undertones.
  Composition: left-aligned subject, clean background, suitable for 50:50 split layout.
  Aspect ratio: 1:1 square. No text overlay.
  Prompt tools: Midjourney / DALL-E 3 / Stable Diffusion
*/
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-28 pb-20 lg:py-0 overflow-hidden bg-warm">
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
      style="background: radial-gradient(circle, var(--color-emerald) 0%, transparent 70%)"
    />
    <div
      class="absolute bottom-10 left-10 w-40 h-40 rounded-full opacity-10"
      style="background: radial-gradient(circle, var(--color-gold) 0%, transparent 70%)"
    />

    <div class="max-w-container mx-auto px-5 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- KIRI: Visual -->
        <div class="order-2 lg:order-1 flex justify-center">
          <div class="relative w-full max-w-[500px] aspect-square sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
            <!-- Generated AI Image -->
            <div class="w-full h-full rounded-[40px] overflow-hidden shadow-premium border border-emerald-100">
              <img
                src="/hero-illustration.png"
                alt="Muslim profesional berhijrah finansial"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative floating elements -->
            <div
              class="absolute -bottom-3 -right-3 bg-gold text-forest font-heading font-bold text-sm px-5 py-3 rounded-2xl shadow-soft"
            >
              Hijrah Finansial
            </div>
            <div
              class="absolute -top-3 -left-3 w-14 h-14 rounded-2xl bg-warm shadow-soft flex items-center justify-center"
            >
              <UIcon name="i-heroicons-sparkles" class="w-7 h-7 text-gold" />
            </div>
          </div>
        </div>

        <!-- KANAN: Copy -->
        <div class="order-1 lg:order-2 text-center lg:text-left">
          <span
            class="inline-block font-small text-xs font-medium tracking-widest uppercase text-emerald-500 bg-emerald-50 px-3.5 py-1.5 rounded-full mb-6"
          >
            Gerakan Hijrah Finansial
          </span>

          <h1 class="font-heading font-extrabold text-5xl sm:text-6xl lg:text-6xl xl:text-[72px] leading-[1.05] text-ink">
            Menemukan Kedamaian
            <br />
            <span class="text-emerald-500">Lewat Hijrah Finansial</span>
            <br />
          </h1>

          <p class="mt-6 text-lg text-muted max-w-lg leading-relaxed">
            Selaraskan urusan rezeki, ketenangan jiwa, dan masa depan keluarga melalui ekosistem bisnis yang halal dan penuh keberkahan.
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
              Saya Siap Hijrah Finansial →
            </UButton>
            <UButton
              to="#hijrah"
              variant="outline"
              color="primary"
              size="xl"
              class="rounded-2xl font-medium px-8"
            >
              Lihat Penjelasan
            </UButton>
          </div>

          <p class="mt-5 font-small text-xs text-muted/60">
            💚 Telah dipercaya 2.500+ mitra di seluruh Indonesia
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
