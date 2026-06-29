<script setup lang="ts">
const wa = (paket: string) =>
  `https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(paket)}`

const pakets = [
  {
    id: 'member',
    label: 'Member',
    tagline: 'Mulai Hijrah Finansial',
    harga: '500.000',
    desc: 'Cocok untuk yang baru ingin belajar dan bergabung dalam komunitas CBS.',
    color: 'border-emerald-200',
    badgeBg: 'bg-emerald-50 text-emerald-600',
    ctaBg: 'bg-emerald-500 text-white hover:bg-emerald-600',
    featured: false,
    benefits: [
      'Akses komunitas nasional CBS',
      'Materi edukasi Hijrah Finansial',
      'Program Riyadhoh Baitullah',
      'Harga member produk CBS',
      'Mentoring dasar 30 hari',
    ],
  },
  {
    id: 'agen',
    label: 'Agen',
    tagline: 'Bangun Bisnis Sendiri',
    harga: '1.500.000',
    desc: 'Untuk yang ingin membangun penghasilan aktif dari bisnis CBS.',
    color: 'border-gold/50',
    badgeBg: 'bg-gold/10 text-gold',
    ctaBg: 'text-forest border-none shadow-md',
    ctaStyle: 'background: #D4AF37',
    featured: true,
    benefits: [
      'Semua benefit Member',
      'Starter kit produk senilai Rp 1.500.000',
      'Bimbingan bisnis 30 hari intensif',
      'Tools pemasaran digital lengkap',
      'Komisi & bonus penjualan',
      'Webinar eksklusif bulanan',
      'Program wakaf otomatis per transaksi',
    ],
  },
  {
    id: 'distributor',
    label: 'Distributor',
    tagline: 'Pimpin Gerakan Nasional',
    harga: 'Custom',
    desc: 'Untuk yang siap memimpin wilayah dan membangun jaringan distributor CBS.',
    color: 'border-forest/30',
    badgeBg: 'bg-forest/10 text-forest',
    ctaBg: 'bg-forest text-white hover:bg-forest/90',
    featured: false,
    benefits: [
      'Semua benefit Agen',
      'Hak distribusi wilayah eksklusif',
      'Stok produk prioritas',
      'Tim support dedicated CBS',
      'Overriding komisi jaringan agen',
      'Akses Home Base CBS',
      'Pelatihan leadership nasional',
    ],
  },
]
</script>

<template>
  <section id="kemitraan" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Jalur Pertumbuhan CBS
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Pilih Jalur
          <span class="text-emerald-500">Hijrah Finansialmu</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          Setiap orang memiliki kapasitas yang berbeda. Pilih jalur yang paling sesuai denganmu.
        </p>
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        <div
          v-for="paket in pakets"
          :key="paket.id"
          :class="[
            'relative bg-white rounded-3xl p-8 border-2 overflow-hidden transition-all duration-300',
            paket.color,
            paket.featured ? 'shadow-premium ring-2 ring-gold/30' : 'shadow-sm',
          ]"
        >
          <!-- Featured badge -->
          <div v-if="paket.featured" class="absolute top-0 right-0 bg-gold text-forest font-small text-xs font-bold px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase">
            Paling Populer
          </div>

          <div class="mb-6">
            <div :class="['inline-block font-small text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4', paket.badgeBg]">
              {{ paket.label }}
            </div>
            <h3 class="font-heading font-extrabold text-xl text-ink mb-1">{{ paket.tagline }}</h3>
            <p class="font-small text-sm text-muted leading-relaxed">{{ paket.desc }}</p>
          </div>

          <div class="flex items-baseline gap-1 mb-6">
            <span v-if="paket.harga !== 'Custom'" class="font-heading font-extrabold text-sm text-muted">Rp</span>
            <span class="font-heading font-extrabold text-4xl text-ink">{{ paket.harga }}</span>
            <span v-if="paket.harga !== 'Custom'" class="font-small text-sm text-muted">/sekali</span>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="b in paket.benefits" :key="b" class="flex items-start gap-2.5">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span class="font-small text-sm text-ink/80 leading-snug">{{ b }}</span>
            </li>
          </ul>

          <UButton
            :to="wa(paket.label)"
            target="_blank"
            rel="noopener"
            size="xl"
            block
            :class="['rounded-2xl text-center font-semibold border-none', paket.ctaBg]"
            :style="paket.ctaStyle"
          >
            Mulai sebagai {{ paket.label }} →
          </UButton>
        </div>
      </div>

      <p class="mt-8 text-center font-small text-xs text-muted/60">
        Konsultasi gratis tersedia. Tidak ada tekanan untuk join. Tim CBS siap membantu.
      </p>
    </div>
  </section>
</template>
