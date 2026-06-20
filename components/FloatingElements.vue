<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const wa = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20konsultasi%20Hijrah%20Finansial'
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Scroll to Top Button -->
  <Transition name="fade">
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-40 lg:bottom-22 right-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-white shadow-premium border border-emerald-100 text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 cursor-pointer"
      aria-label="Scroll ke atas"
    >
      <UIcon name="i-lucide-arrow-up" class="w-6 h-6" />
    </button>
  </Transition>

  <!-- Floating WhatsApp -->
  <a
    :href="wa"
    target="_blank"
    rel="noopener"
    class="fixed bottom-24 lg:bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full shadow-premium animate-floaty"
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}
</style>
