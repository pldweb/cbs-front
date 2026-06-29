<script setup lang="ts">
const waKonsultasi = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20konsultasi%20Hijrah%20Finansial'
const waMember = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20daftar%20sebagai%20Member'
const waAgen = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20menjadi%20Agen'
const waDistributor = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20menjadi%20Distributor'
const waBaitullah = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20ingin%20info%20Program%20Tiket%20Emas%20Baitullah'
</script>

<template>
  <section class="py-24 lg:py-40 relative overflow-hidden" style="background: linear-gradient(135deg, #0F5D4E 0%, #052E27 100%)">
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, #D4AF37 1px, transparent 1px); background-size: 30px 30px" />
    <!-- Gold glow top right -->
    <div class="absolute top-0 right-0 w-125 h-125 rounded-full opacity-10" style="background: radial-gradient(circle, #D4AF37 0%, transparent 70%)" />
    <!-- Gold glow bottom left -->
    <div class="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-10" style="background: radial-gradient(circle, #D4AF37 0%, transparent 70%)" />

    <div class="max-w-container mx-auto px-5 lg:px-8 relative z-10 text-center">
      <div class="max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 bg-gold/20 text-gold font-small text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8">
          <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
          Langkah Pertama Dimulai Hari Ini
        </div>

        <h2 class="font-heading font-extrabold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
          Langkah Kecil Hari Ini Bisa Menjadi
          <br />
          <span class="text-gold">Jalan Besar Menuju Baitullah.</span>
        </h2>

        <p class="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Tidak perlu menunggu sempurna. Ribuan keluarga Muslim sudah memulai perjalanan Hijrah Finansial mereka bersama CBS. Kini giliran kamu.
        </p>

        <!-- CTA Grid -->
        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <a
            :href="waKonsultasi"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-6 text-white font-semibold transition-all duration-200 group"
          >
            <span class="text-3xl group-hover:scale-110 transition-transform duration-200">💬</span>
            <span class="font-small text-sm">Konsultasi Gratis</span>
          </a>
          <a
            :href="waMember"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-6 text-white font-semibold transition-all duration-200 group"
          >
            <span class="text-3xl group-hover:scale-110 transition-transform duration-200">👥</span>
            <span class="font-small text-sm">Daftar Member</span>
          </a>
          <a
            :href="waAgen"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 border border-emerald-400/40 rounded-2xl px-5 py-6 text-white font-semibold transition-all duration-200 group"
          >
            <span class="text-3xl group-hover:scale-110 transition-transform duration-200">🤝</span>
            <span class="font-small text-sm">Menjadi Agen</span>
          </a>
          <a
            :href="waDistributor"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-6 text-white font-semibold transition-all duration-200 group"
          >
            <span class="text-3xl group-hover:scale-110 transition-transform duration-200">🏢</span>
            <span class="font-small text-sm">Menjadi Distributor</span>
          </a>
          <a
            :href="waBaitullah"
            target="_blank"
            rel="noopener"
            class="flex flex-col items-center gap-2 border border-gold/50 rounded-2xl px-5 py-6 text-forest font-semibold transition-all duration-200 group hover:opacity-90"
            style="background: #D4AF37"
          >
            <span class="text-3xl group-hover:scale-110 transition-transform duration-200">🕌</span>
            <span class="font-small text-sm">Menuju Baitullah</span>
          </a>
        </div>

        <p class="mt-10 font-small text-sm text-white/40">
          Atau langsung hubungi kami di <span class="text-gold font-semibold">+62 812-3456-7890</span>
        </p>
      </div>
    </div>
  </section>
</template>
