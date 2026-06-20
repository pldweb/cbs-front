<script setup lang="ts">
/*
  AI IMAGE PROMPT — Big Idea Visual:
  A silhouette of a person walking confidently from darkness (left) toward warm golden light (right).
  The path is a subtle upward curve suggesting growth/journey. In the light: hints of mosque architecture,
  flourishing green plants, and subtle geometric Islamic patterns. The scene represents hijrah (migration)
  from financial uncertainty toward blessed prosperity. Style: minimalist, spiritual, premium,
  dark-to-light gradient narrative. No text. Aspect ratio: 16:9 or can be cropped to banner.
  Color palette: deep forest green #052E27 fading to emerald #0F5D4E to warm gold #D4AF37.
  Prompt tools: Midjourney / DALL-E 3 / Stable Diffusion
*/
</script>

<template>
  <section class="py-24 lg:py-32 relative overflow-hidden" style="background: linear-gradient(135deg, #052E27 0%, #0F5D4E 100%)">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-64 h-64 rounded-full border border-gold/30" />
      <div class="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-gold/20" />
      <div class="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-gold/25" />
    </div>

    <div class="max-w-container mx-auto px-5 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-gold/20 text-gold font-small text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <UIcon name="i-heroicons-light-bulb" class="w-4 h-4" />
          Big Idea
        </div>

        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[64px] lg:leading-tight text-white leading-tight">
          Mungkin yang kita butuhkan
          <br />
          hari ini bukan tambahan
          <br />
          penghasilan.
        </h2>

        <p class="mt-8 font-heading font-extrabold text-3xl sm:text-4xl lg:text-[64px] lg:leading-tight">
          <span class="text-gold">Tapi Hijrah Finansial.</span>
        </p>

        <!-- Premium AI Generated Illustration Banner -->
        <div class="mt-10 mb-10 max-w-2xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] opacity-95">
          <img
            src="/big-idea-illustration.png"
            alt="Hijrah Finansial siluet berjalan menuju cahaya"
            class="w-full h-full object-cover"
          />
        </div>

        <p class="mt-8 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          CBS hadir bukan sekadar peluang bisnis — tetapi gerakan untuk menyelaraskan urusan rezeki,
          ketenangan jiwa, dan masa depan keluarga secara bersamaan.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <span class="inline-flex items-center gap-1.5 bg-white/10 text-white font-small text-sm px-5 py-2.5 rounded-full backdrop-blur-sm">
            <UIcon name="i-heroicons-check-badge" class="w-4 h-4 text-gold" />
            Bisnis Halal
          </span>
          <span class="inline-flex items-center gap-1.5 bg-white/10 text-white font-small text-sm px-5 py-2.5 rounded-full backdrop-blur-sm">
            <UIcon name="i-heroicons-check-badge" class="w-4 h-4 text-gold" />
            Komunitas Iman
          </span>
          <span class="inline-flex items-center gap-1.5 bg-white/10 text-white font-small text-sm px-5 py-2.5 rounded-full backdrop-blur-sm">
            <UIcon name="i-heroicons-check-badge" class="w-4 h-4 text-gold" />
            Kontribusi Wakaf
          </span>
          <span class="inline-flex items-center gap-1.5 bg-white/10 text-white font-small text-sm px-5 py-2.5 rounded-full backdrop-blur-sm">
            <UIcon name="i-heroicons-check-badge" class="w-4 h-4 text-gold" />
            Ketenangan Hati
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
