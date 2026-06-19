<script setup lang="ts">
const wa = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20konsultasi%20Hijrah%20Finansial'
</script>

<template>
  <!-- Floating WhatsApp -->
  <a
    :href="wa"
    target="_blank"
    rel="noopener"
    class="fixed bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full shadow-premium animate-floaty"
    style="background-color: #25d366"
    aria-label="Chat WhatsApp"
  >
    <UIcon name="i-simple-icons-whatsapp" class="w-7 h-7 text-white" />
  </a>

  <!-- Floating CTA bar (mobile only) -->
  <div class="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/80 backdrop-blur-md border-t border-emerald-100">
    <UButton
      to="#kemitraan"
      block
      color="primary"
      size="lg"
      class="rounded-2xl font-semibold"
    >
      KONSULTASI GRATIS
    </UButton>
  </div>
</template>
