<script setup lang="ts">
const openIndex = ref<number | null>(0)

const faqs = [
  {
    q: 'Apa itu CBS dan Hijrah Finansial?',
    a: 'CBS (Cahaya Berkah Semesta) adalah ekosistem bisnis halal yang menyatukan bisnis, dakwah, dan wakaf dalam satu gerakan bernama "Hijrah Finansial" — perjalanan menata ulang rezeki menuju sumber yang lebih halal dan berkah.',
  },
  {
    q: 'Apakah bisnis CBS aman dan terpercaya?',
    a: 'Ya. CBS telah berdiri lebih dari 15 tahun dengan track record yang terbukti. Sistem kami transparan, tidak ada skema piramida, dan seluruh operasional berjalan sesuai prinsip syariat Islam. Ratusan ribu transaksi telah berlangsung dengan aman.',
  },
  {
    q: 'Bagaimana legalitas CBS?',
    a: 'CBS beroperasi secara legal dengan izin usaha resmi. Semua produk telah mendapat sertifikasi halal MUI dan terdaftar di BPOM. Sistem bisnis kami juga telah dikaji secara syariah dan sesuai prinsip-prinsip Islam.',
  },
  {
    q: 'Apakah ada pembinaan dan mentoring?',
    a: 'Ya. Setiap mitra CBS mendapatkan bimbingan intensif dari mentor berpengalaman, akses ke materi edukasi Hijrah Finansial, webinar eksklusif bulanan, dan dukungan komunitas nasional. Kamu tidak akan berjalan sendiri.',
  },
  {
    q: 'Bagaimana cara menuju Baitullah melalui CBS?',
    a: 'Program Tiket Emas Baitullah CBS memberikan jalur nyata menuju Baitullah: bergabung komunitas → belajar Hijrah Finansial → menabung emas syariah → riyadhoh spiritual → keberangkatan umrah/haji. Sudah 500+ jamaah berhasil berangkat bersama CBS.',
  },
  {
    q: 'Bagaimana sistem tabungan emas di CBS?',
    a: 'Program tabungan emas CBS menggunakan sistem syariah yang terpercaya. Kamu bisa mulai menabung emas dalam nominal kecil, dan nilainya akan terjaga dari inflasi. Emas yang terkumpul menjadi modal perjalanan ke Baitullah.',
  },
  {
    q: 'Bagaimana program wakaf CBS bekerja?',
    a: 'Setiap transaksi di ekosistem CBS secara otomatis menyisihkan sebagian profit untuk program wakaf produktif. Wakaf ini disalurkan untuk pembangunan fasilitas umat, pendidikan, dan program sosial. Bisnismu otomatis bernilai amal jariyah.',
  },
  {
    q: 'Saya pemula, bisakah langsung bergabung?',
    a: 'Bisa. 80% mitra CBS memulai dari nol tanpa pengalaman bisnis. Sistem CBS dirancang agar siapa pun bisa langsung mulai. Kamu akan mendapat bimbingan dari awal, tools siap pakai, dan dukungan penuh dari komunitas CBS.',
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
