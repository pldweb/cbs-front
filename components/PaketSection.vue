<script setup lang="ts">
const wa = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20tertarik%20dengan%20Paket%20Kemitraan'

const benefits = [
  'Starter kit produk senilai Rp 1.500.000',
  'Bimbingan bisnis 30 hari intensif',
  'Tools pemasaran digital lengkap',
  'Akses komunitas mitra CBS nasional',
  'Program wakaf otomatis per transaksi',
  'Webinar eksklusif bulanan',
]
</script>

<template>
  <section id="kemitraan" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Paket Kemitraan
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Mulai Perjalanan
          <span class="text-emerald-500">Hijrah Finansial-mu</span>
          Hari Ini
        </h2>
      </div>

      <div class="mt-14 max-w-lg mx-auto">
        <div class="relative bg-warm rounded-3xl p-8 lg:p-10 border-2 border-gold/30 shadow-premium overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 rounded-bl-3xl bg-gradient-to-bl from-gold/20 to-transparent" />

          <div class="relative z-10">
            <div class="inline-block bg-gold/10 text-gold font-small text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
              Satu Kali Investasi
            </div>

            <div class="flex items-baseline gap-1 mb-6">
              <span class="font-heading font-extrabold text-lg text-muted">Rp</span>
              <span class="font-heading font-extrabold text-5xl lg:text-6xl text-ink">1.500.000</span>
            </div>

            <ul class="space-y-3.5 mb-8">
              <li v-for="b in benefits" :key="b" class="flex items-start gap-3">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span class="font-small text-sm text-ink/80">{{ b }}</span>
              </li>
            </ul>

            <UButton
              :to="wa"
              target="_blank"
              rel="noopener"
              size="xl"
              block
              class="rounded-2xl text-center font-semibold bg-gold text-forest hover:bg-gold-200 transition-all duration-300 border-none shadow-md"
            >
              Ya, Saya Mau Mulai Hijrah Finansial →
            </UButton>

            <p class="mt-4 text-center font-small text-xs text-muted/60">
              Konsultasi gratis terlebih dahulu. Tidak ada tekanan untuk join.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
