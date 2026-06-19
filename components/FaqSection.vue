<script setup lang="ts">
const openIndex = ref<number | null>(0)

const faqs = [
  {
    q: 'Apa itu CBS dan Hijrah Finansial?',
    a: 'CBS (Cahaya Berkah Semesta) adalah ekosistem bisnis halal yang menyatukan bisnis, dakwah, dan wakaf dalam satu gerakan bernama "Hijrah Finansial" — perjalanan menata ulang rezeki menuju sumber yang lebih halal dan berkah.',
  },
  {
    q: 'Apakah ini MLM atau skema piramida?',
    a: 'Bukan. CBS adalah model distribusi produk langsung (direct selling) dengan sistem yang transparan dan sesuai syariat Islam. Tidak ada tutup point, tidak ada belanja wajib bulanan, dan kamu bisa memulai hanya dengan modal HP + internet.',
  },
  {
    q: 'Saya pemula, apakah bisa menjalankan bisnis ini?',
    a: 'Bisa. 80% mitra CBS memulai dari nol tanpa pengalaman bisnis. Kamu akan mendapatkan bimbingan intensif, tools siap pakai, dan dukungan komunitas.',
  },
  {
    q: 'Produknya sudah halal dan BPOM?',
    a: 'Ya. Semua produk CBS sudah bersertifikasi halal MUI dan terdaftar di BPOM. Kami sangat serius menjaga standar ini karena ini menyangkut nilai ibadah.',
  },
  {
    q: 'Berapa modal yang dibutuhkan?',
    a: 'Kamu cukup berinvestasi Rp 1.500.000 sekali saja. Sudah termasuk starter kit produk dan akses penuh ke sistem bisnis CBS.',
  },
  {
    q: 'Bagaimana dengan program wakafnya?',
    a: 'Setiap transaksi yang terjadi di ekosistem CBS secara otomatis menyisihkan sebagian profit untuk program wakaf produktif. Jadi bisnismu otomatis bernilai amal jariyah.',
  },
]

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          FAQ
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Pertanyaan yang
          <span class="text-emerald-500">Sering Diajukan</span>
        </h2>
      </div>

      <div class="mt-14 max-w-2xl mx-auto space-y-3">
        <div
          v-for="(f, i) in faqs"
          :key="i"
          class="bg-white rounded-2xl border border-emerald-100/50 overflow-hidden transition-all duration-300"
          :class="openIndex === i ? 'shadow-soft' : ''"
        >
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            @click="toggle(i)"
          >
            <span class="font-heading font-bold text-ink pr-4">{{ f.q }}</span>
            <UIcon
              :name="openIndex === i ? 'i-heroicons-minus' : 'i-heroicons-plus'"
              class="w-5 h-5 text-emerald-500 shrink-0 transition-transform duration-300"
            />
          </button>
          <div
            class="grid transition-all duration-300"
            :style="openIndex === i ? 'grid-template-rows: 1fr; opacity: 1;' : 'grid-template-rows: 0fr; opacity: 0;'"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-5 font-small text-sm text-muted leading-relaxed">{{ f.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
