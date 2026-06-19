<script setup lang="ts">
const cols = [
  {
    title: 'Perusahaan',
    links: ['Tentang Kami', 'Produk', 'Kemitraan', 'FAQ', 'Kontak'],
  },
]
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-forestdeep text-white/80">
    <div class="max-w-container mx-auto px-5 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-10">
        <!-- Logo & tagline -->
        <div class="md:col-span-1">
          <img
            src="~/assets/css/logo-cahaya-berkah-semesta.png"
            alt="CBS Cahaya Berkah Semesta"
            class="h-10 w-auto"
          />
          <p class="font-heading text-gold mt-4 text-lg">
            "Bertumbuh, Bermanfaat, Berkah."
          </p>
          <p class="font-small text-sm mt-3 text-white/60 max-w-xs">
            Cahaya Berkah Semesta — gerakan Hijrah Finansial yang modern, profesional, dan penuh keberkahan.
          </p>
        </div>

        <!-- Menu -->
        <div v-for="col in cols" :key="col.title">
          <h4 class="font-heading font-bold text-white mb-4">{{ col.title }}</h4>
          <ul class="space-y-2.5">
            <li v-for="l in col.links" :key="l">
              <a href="#" class="font-small text-sm hover:text-gold transition-colors">{{ l }}</a>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div>
          <h4 class="font-heading font-bold text-white mb-4">Hubungi Kami</h4>
          <ul class="space-y-3 font-small text-sm">
            <li class="flex items-center gap-2.5">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-gold" />
              WhatsApp Resmi CBS
            </li>
            <li class="flex items-center gap-2.5">
              <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 text-gold" />
              cbsofficial.id
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="font-small text-xs text-white/50">
          © {{ year }} CBS — Cahaya Berkah Semesta. All rights reserved.
        </p>
        <p class="font-small text-xs text-white/50">Hijrah Finansial untuk Indonesia.</p>
      </div>
    </div>
  </footer>
</template>
