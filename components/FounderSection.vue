<script setup lang="ts">
import { ref } from 'vue'

const founderPhoto = '/founder-photo.jpg'
const showFounderPhoto = ref(true)

const milestones = [
  { year: '2008', event: 'CBS didirikan dengan visi ekosistem bisnis halal berbasis komunitas.' },
  { year: '2012', event: 'Ekspansi ke 10 provinsi pertama dengan 500 mitra aktif.' },
  { year: '2016', event: 'Meluncurkan program Tiket Emas Baitullah — jamaah pertama berangkat umrah.' },
  { year: '2020', event: 'Transformasi digital — ribuan mitra menjalankan bisnis dari rumah.' },
  { year: '2024', event: 'Gerakan Nasional Hijrah Finansial resmi diluncurkan ke seluruh Indonesia.' },
]
</script>

<template>
  <section id="founder" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-emerald-500">
          Tentang Kami
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Mengapa CBS
          <span class="text-emerald-500">Dibangun?</span>
        </h2>
      </div>

      <div class="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- Kiri: Foto Founder + Visual -->
        <div class="space-y-6">
          <div class="relative">
            <div class="w-full aspect-4/3 rounded-4xl overflow-hidden bg-emerald-100 flex items-center justify-center shadow-premium border border-emerald-100">
              <img
                v-if="showFounderPhoto"
                :src="founderPhoto"
                alt="Founder CBS"
                class="w-full h-full object-cover"
                @error="showFounderPhoto = false"
              />
              <div v-if="!showFounderPhoto" class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div class="w-24 h-24 rounded-full bg-linear-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white text-4xl font-heading font-bold shadow-soft">
                  CBS
                </div>
                <p class="mt-4 font-heading font-bold text-lg text-forest">Founder & Tim CBS</p>
                <p class="font-small text-sm text-muted">Gerakan Hijrah Finansial Indonesia</p>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-4 shadow-soft border border-emerald-100">
              <p class="font-heading font-extrabold text-2xl text-emerald-500">15+</p>
              <p class="font-small text-xs text-muted">Tahun Berdiri</p>
            </div>
          </div>

          <!-- Milestone Timeline -->
          <div class="space-y-3 mt-8">
            <h3 class="font-heading font-bold text-lg text-ink mb-5">Perjalanan CBS</h3>
            <div v-for="(m, i) in milestones" :key="i" class="flex gap-4 items-start">
              <div class="shrink-0 w-14 text-right">
                <span class="font-heading font-bold text-sm text-emerald-500">{{ m.year }}</span>
              </div>
              <div class="w-px bg-emerald-200 self-stretch mx-2 shrink-0" />
              <p class="font-small text-sm text-muted leading-relaxed pb-3">{{ m.event }}</p>
            </div>
          </div>
        </div>

        <!-- Kanan: Story -->
        <div class="space-y-8">
          <div class="space-y-5">
            <p class="text-lg text-ink/90 leading-relaxed">
              CBS lahir dari keprihatinan mendalam melihat kondisi keuangan umat Muslim yang berjuang keras namun tidak kunjung menemukan ketenangan finansial.
            </p>
            <p class="text-base text-muted leading-relaxed">
              Kami menyaksikan bagaimana saudara-saudara kita bekerja tanpa henti, namun nilai rezeki terus terkikis oleh inflasi, gaya hidup konsumtif, dan ketiadaan ekosistem yang mendukung pertumbuhan finansial berbasis nilai Islam.
            </p>
            <p class="text-base text-muted leading-relaxed">
              CBS dibangun bukan sekadar sebagai perusahaan bisnis. Kami membangun sebuah gerakan — Gerakan Hijrah Finansial — yang meyakini bahwa setiap Muslim berhak mendapatkan sistem yang membantu mereka menjaga rezeki, menumbuhkan keberkahan, dan mempersiapkan perjalanan menuju Baitullah.
            </p>
          </div>

          <!-- Quote Founder -->
          <div class="bg-white rounded-3xl p-8 border border-emerald-100/50 shadow-sm relative overflow-hidden">
            <div class="absolute top-4 left-5 text-emerald-200/60 font-serif text-[80px] leading-none pointer-events-none">&ldquo;</div>
            <blockquote class="relative z-10 font-heading font-bold text-xl text-forest leading-relaxed pt-4">
              Bukan Sekadar Mencari Rezeki, Tetapi Menjaga Nilainya, Menumbuhkan Keberkahannya, dan Menjadikannya Jalan Menuju Baitullah.
            </blockquote>
            <p class="mt-4 font-small text-sm text-emerald-500 font-semibold">— Founder CBS</p>
          </div>

          <!-- Visi Misi -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-4">
                <UIcon name="i-heroicons-eye" class="w-5 h-5" />
              </div>
              <h4 class="font-heading font-bold text-ink mb-2">Visi</h4>
              <p class="font-small text-sm text-muted leading-relaxed">Menjadi ekosistem pemberdayaan umat Muslim terbesar di Indonesia melalui Hijrah Finansial.</p>
            </div>
            <div class="bg-gold/10 rounded-2xl p-6 border border-gold/20">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background: #D4AF37">
                <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 text-forest" />
              </div>
              <h4 class="font-heading font-bold text-ink mb-2">Misi</h4>
              <p class="font-small text-sm text-muted leading-relaxed">Mengantarkan 10.000 keluarga Muslim menuju kebebasan finansial dan Baitullah dalam 5 tahun.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
