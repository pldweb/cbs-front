<script setup lang="ts">
const reasons = [
  {
    icon: 'i-heroicons-user-group',
    title: 'Sistem Terbukti',
    desc: 'Bukan trial and error. Sistem bisnis CBS telah dijalankan ribuan mitra dan terus disempurnakan.',
  },
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Mentoring Intensif',
    desc: 'Dapatkan bimbingan 1-on-1 dari mentor bisnis CBS hingga kamu benar-benar paham dan bisa jalan.',
  },
  {
    icon: 'i-heroicons-device-phone-mobile',
    title: 'Kerja dari Mana Saja',
    desc: 'Modal HP dan internet, kamu sudah bisa menjalankan bisnis CBS dari rumah atau di mana pun.',
  },
  {
    icon: 'i-heroicons-arrow-trending-up',
    title: 'Market Luas',
    desc: 'Produk kesehatan berkualitas premium dengan pasar yang terus bertumbuh — selalu ada permintaan.',
  },
]
</script>

<template>
  <section id="mudah" class="py-24 lg:py-32 bg-white">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Mengapa Mudah Dijalankan?
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Bisnis yang <span class="text-emerald-500">Bisa Kamu Mulai</span>
          Tanpa Pengalaman
        </h2>
        <p class="mt-4 text-muted text-lg">
          CBS dirancang agar siapa pun — termasuk pemula — bisa langsung memulai dengan confidence penuh.
        </p>
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(r, i) in reasons"
          :key="i"
          class="card-float bg-warm rounded-3xl p-7 border border-emerald-100/50 text-center"
        >
          <div class="grid place-items-center w-14 h-14 mx-auto rounded-2xl bg-emerald-50 text-emerald-500 mb-5">
            <UIcon :name="r.icon" class="w-7 h-7" />
          </div>
          <h3 class="font-heading font-bold text-lg text-ink mb-2.5">{{ r.title }}</h3>
          <p class="font-small text-sm text-muted leading-relaxed">{{ r.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
