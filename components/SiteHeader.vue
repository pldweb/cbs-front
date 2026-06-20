<script setup lang="ts">
const isOpen = ref(false)
const scrolled = ref(false)

const menu = [
  { label: 'Beranda', to: '#hero' },
  { label: 'Tentang Hijrah Finansial', to: '#hijrah' },
  { label: 'Ekosistem CBS', to: '#ekosistem' },
  { label: 'Testimoni', to: '#testimoni' },
  { label: 'FAQ', to: '#faq' },
]

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    :class="scrolled ? 'bg-forest/95 border-emerald-900/40 shadow-soft backdrop-blur-md' : 'bg-forest/95 border-transparent backdrop-blur-sm'"
  >
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Logo -->
        <a href="#hero" class="flex items-center gap-2.5 shrink-0">
          <img
            src="~/assets/css/logo-cahaya-berkah-semesta.png"
            alt="CBS Cahaya Berkah Semesta"
            class="h-15 w-auto filter brightness-0 invert"
          />
        </a>

        <!-- Menu tengah -->
        <nav class="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          <a
            v-for="m in menu"
            :key="m.to"
            :href="m.to"
            class="font-small text-sm text-white/80 hover:text-gold transition-colors"
          >
            {{ m.label }}
          </a>
        </nav>

        <!-- Tombol kanan -->
        <div class="hidden lg:block">
          <UButton
            to="#kemitraan"
            color="white"
            variant="solid"
            size="lg"
            class="rounded-2xl font-semibold px-5 text-forest bg-gold hover:bg-gold-200 hover:text-forest transition-all duration-300"
          >
            KONSULTASI GRATIS
          </UButton>
        </div>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden grid rounded-xl place-items-center w-10 h-10 text-forest bg-gold hover:bg-gold-200 hover:text-forest transition-all duration-300"
          @click="isOpen = !isOpen"
          aria-label="Menu"
        >
          <UIcon :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition name="slide">
        <nav v-if="isOpen" class="lg:hidden pb-5 flex flex-col gap-1">
          <a
            v-for="m in menu"
            :key="m.to"
            :href="m.to"
            class="py-2.5 px-3 rounded-xl font-small text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            @click="isOpen = false"
          >
            {{ m.label }}
          </a>
          <UButton to="#kemitraan" color="white" variant="solid" block class="rounded-2xl mt-2 text-forest bg-gold hover:bg-gold-200 hover:text-forest transition-all duration-300" @click="isOpen = false">
            KONSULTASI GRATIS
          </UButton>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
