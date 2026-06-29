<script setup lang="ts">
const wa = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20info%20Program%20Tiket%20Emas%20Baitullah'
const baitullahPhoto = '/photos/baitullah-kaaba.jpg'
const goldPhoto = '/photos/gold-savings.jpg'

const benefits = [
  {
    text: 'Menabung Emas Syariah',
    image: '/photos/gold-savings.jpg',
    alt: 'Emas sebagai tabungan syariah',
  },
  {
    text: 'Riyadhoh Baitullah',
    image: '/photos/baitullah-kaaba.jpg',
    alt: 'Kaaba sebagai tujuan riyadhoh Baitullah',
  },
  {
    text: 'Komunitas Nasional',
    image: '/photos/hero-family-mosque.jpg',
    alt: 'Keluarga Muslim dalam suasana masjid',
  },
  {
    text: 'Mentoring Spiritual & Finansial',
    image: '/photos/community-kajian.jpg',
    alt: 'Mentoring dan kajian Al-Quran di masjid',
  },
  {
    text: 'Simulasi Persiapan Umrah',
    image: '/photos/living-cost-bills.jpg',
    alt: 'Menghitung rencana tabungan dan biaya',
  },
  {
    text: 'Umrah Reward Terbaik',
    image: '/photos/baitullah-kaaba.jpg',
    alt: 'Perjalanan umrah menuju Baitullah',
  },
]
</script>

<template>
  <section id="tiket-emas" class="py-24 lg:py-40 relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0" style="background: linear-gradient(160deg, #052E27 0%, #0F5D4E 40%, #1a6b5a 100%)" />
    <!-- Gold dots pattern -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px); background-size: 28px 28px" />
    <!-- Gold glow top right -->
    <div class="absolute top-0 right-0 w-150 h-150 rounded-full opacity-10" style="background: radial-gradient(circle, #D4AF37 0%, transparent 70%)" />
    <!-- Gold glow bottom left -->
    <div class="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-10" style="background: radial-gradient(circle, #D4AF37 0%, transparent 70%)" />

    <div class="relative z-10 max-w-container mx-auto px-5 lg:px-8">
      <!-- Label -->
      <div class="text-center">
        <div class="inline-flex items-center gap-2.5 bg-gold/20 border border-gold/30 text-gold font-small text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8">
          <span class="text-base">🪙</span>
          Program Unggulan CBS
        </div>

        <h2 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight max-w-4xl mx-auto">
          Menjaga Nilai Rezeki,
          <br />
          <span class="text-gold">Menjemput Panggilan</span>
          <br />
          Baitullah.
        </h2>

        <p class="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Program persiapan umrah dan haji berbasis edukasi, komunitas, tabungan emas, dan pembinaan spiritual bersama CBS.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div
          v-for="(b, i) in benefits"
          :key="i"
          class="overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl"
        >
          <div class="h-24 overflow-hidden bg-forest/40">
            <img
              :src="b.image"
              :alt="b.alt"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="px-4 py-4">
            <span class="font-small text-sm font-medium text-white leading-tight">{{ b.text }}</span>
          </div>
        </div>
      </div>

      <!-- Visual Card -->
      <div class="mt-16 max-w-3xl mx-auto">
        <div class="relative bg-linear-to-br from-gold/20 to-gold/5 border border-gold/30 p-8 lg:p-12 text-center backdrop-blur-sm" style="border-radius: 40px">
          <!-- Decorative circles -->
          <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-gold/20" />
          <div class="absolute -bottom-6 -left-6 w-36 h-36 rounded-full border border-gold/15" />

          <div class="relative z-10">
            <div class="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 mb-8">
              <div class="aspect-[4/3] rounded-3xl overflow-hidden border border-gold/30">
                <img
                  :src="baitullahPhoto"
                  alt="Kaaba dan jamaah umrah"
                  class="w-full h-full object-cover object-center"
                />
              </div>
              <div class="grid gap-4">
                <div class="aspect-square rounded-3xl overflow-hidden border border-gold/30">
                  <img
                    :src="goldPhoto"
                    alt="Emas sebagai penjaga nilai rezeki"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">
              Mulai Dari <span class="text-gold">Emas</span>, Berakhir di <span class="text-gold">Baitullah</span>
            </h3>
            <p class="text-white/70 text-base leading-relaxed max-w-md mx-auto mb-8">
              Menabung emas bukan sekadar investasi. Ini adalah cara paling berkah untuk mempersiapkan perjalanan suci ke tanah haram.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton
                :to="wa"
                target="_blank"
                rel="noopener"
                size="xl"
                class="rounded-2xl font-bold px-10 text-forest border-none shadow-lg"
                style="background: #D4AF37"
              >
                Saya Ingin Menuju Baitullah →
              </UButton>
            </div>

            <p class="mt-5 font-small text-xs text-white/40">
              Sudah 500+ jamaah berangkat bersama program CBS
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
