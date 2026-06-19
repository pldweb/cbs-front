<script setup lang="ts">
const wa = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20konsultasi%20Hijrah%20Finansial'
</script>

<template>
  <section class="py-24 lg:py-32 relative overflow-hidden" style="background: linear-gradient(135deg, #0F5D4E 0%, #052E27 100%)">
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, #D4AF37 1px, transparent 1px); background-size: 30px 30px" />

    <div class="max-w-container mx-auto px-5 lg:px-8 relative z-10 text-center">
      <div class="max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 bg-gold/20 text-gold font-small text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
          Sudah Siap?
        </div>

        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Mulai <span class="text-gold">Hijrah Finansial</span>
          Kamu Sekarang
        </h2>

        <p class="mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          Tidak perlu menunggu sempurna. Langkah kecil hari ini adalah awal dari perubahan besar.
          Tim CBS siap membimbingmu dari nol.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <UButton
            :to="wa"
            target="_blank"
            rel="noopener"
            color="primary"
            size="xl"
            class="rounded-2xl font-semibold px-10 bg-gold hover:bg-gold/90 text-forest border-0"
          >
            💚 Konsultasi Gratis via WhatsApp
          </UButton>
        </div>

        <p class="mt-6 font-small text-sm text-white/40">
          Atau langsung hubungi kami di <span class="text-gold">+62 812-3456-7890</span>
        </p>
      </div>
    </div>
  </section>
</template>
