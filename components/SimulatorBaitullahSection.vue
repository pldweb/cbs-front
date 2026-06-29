<script setup lang="ts">
const wa = 'https://wa.me/6281234567890?text=Halo%20CBS,%20saya%20sudah%20hitung%20estimasi%20keberangkatan%20umrah%20saya%20dan%20ingin%20konsultasi%20lebih%20lanjut'

const targetOptions = [
  { label: 'Umrah', biaya: 28000000 },
  { label: 'Umrah Plus', biaya: 45000000 },
  { label: 'Haji Plus', biaya: 120000000 },
]

const selectedTarget = ref(0)
const tabunganBulan = ref(500000)
const sudahPunya = ref(0)

const targetBiaya = computed(() => targetOptions[selectedTarget.value].biaya)

const sisaDana = computed(() => Math.max(0, targetBiaya.value - sudahPunya.value))

const estimasiBulan = computed(() => {
  if (tabunganBulan.value <= 0) return 0
  return Math.ceil(sisaDana.value / tabunganBulan.value)
})

const estimasiTahun = computed(() => Math.floor(estimasiBulan.value / 12))
const estimasiBulanSisa = computed(() => estimasiBulan.value % 12)

const progressPersen = computed(() => {
  if (targetBiaya.value <= 0) return 0
  return Math.min(100, Math.round((sudahPunya.value / targetBiaya.value) * 100))
})

const formatRupiah = (val: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

const estimasiLabel = computed(() => {
  if (sisaDana.value === 0) return 'Sudah siap berangkat! 🎉'
  if (estimasiTahun.value > 0 && estimasiBulanSisa.value > 0) {
    return `${estimasiTahun.value} tahun ${estimasiBulanSisa.value} bulan lagi`
  } else if (estimasiTahun.value > 0) {
    return `${estimasiTahun.value} tahun lagi`
  } else {
    return `${estimasiBulan.value} bulan lagi`
  }
})
</script>

<template>
  <section id="simulator" class="py-24 lg:py-32 bg-warm">
    <div class="max-w-container mx-auto px-5 lg:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <span class="font-small text-xs font-semibold tracking-widest uppercase text-gold">
          Fitur Eksklusif
        </span>
        <h2 class="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          Simulator
          <span class="text-gold">Perjalanan Baitullah</span>
        </h2>
        <p class="mt-4 text-muted text-lg">
          Hitung estimasi kapan kamu bisa berangkat ke Baitullah berdasarkan kemampuan menabung.
        </p>
      </div>

      <div class="mt-14 max-w-3xl mx-auto">
        <div class="bg-white rounded-4xl border border-emerald-100/50 shadow-premium overflow-hidden">
          <!-- Header card -->
          <div class="px-8 pt-8 pb-6 border-b border-emerald-50">
            <h3 class="font-heading font-bold text-xl text-ink">Pilih Target Perjalanan</h3>
            <div class="mt-4 flex gap-3 flex-wrap">
              <button
                v-for="(t, i) in targetOptions"
                :key="i"
                class="flex-1 min-w-25 rounded-xl py-3 px-4 text-center font-small text-sm font-semibold transition-all duration-200 border"
                :class="selectedTarget === i
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                  : 'bg-warm text-muted border-emerald-100 hover:border-emerald-300'"
                @click="selectedTarget = i"
              >
                {{ t.label }}
                <div class="font-small text-xs font-normal mt-0.5 opacity-80">{{ formatRupiah(t.biaya) }}</div>
              </button>
            </div>
          </div>

          <!-- Inputs -->
          <div class="px-8 py-6 space-y-6">
            <!-- Tabungan per bulan -->
            <div>
              <label class="font-small text-sm font-semibold text-ink mb-2 block">
                Kemampuan Menabung per Bulan
              </label>
              <div class="flex items-center gap-3">
                <input
                  v-model.number="tabunganBulan"
                  type="range"
                  min="100000"
                  max="5000000"
                  step="100000"
                  class="flex-1 h-2 rounded-full accent-emerald-500"
                />
                <div class="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2 text-right w-44 shrink-0">
                  <span class="font-heading font-bold text-lg text-emerald-600">{{ formatRupiah(tabunganBulan) }}</span>
                </div>
              </div>
              <div class="flex justify-between mt-1 font-small text-xs text-muted">
                <span>Rp 100.000</span><span>Rp 5.000.000</span>
              </div>
            </div>

            <!-- Dana yang sudah dimiliki -->
            <div>
              <label class="font-small text-sm font-semibold text-ink mb-2 block">
                Dana yang Sudah Dimiliki (opsional)
              </label>
              <div class="flex items-center gap-3">
                <input
                  v-model.number="sudahPunya"
                  type="range"
                  min="0"
                  :max="targetBiaya"
                  step="500000"
                  class="flex-1 h-2 rounded-full accent-gold"
                />
                <div class="bg-gold/10 border border-gold/30 rounded-xl px-4 py-2 text-right w-44 shrink-0">
                  <span class="font-heading font-bold text-lg text-gold">{{ formatRupiah(sudahPunya) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Result -->
          <div class="mx-8 mb-8 rounded-2xl overflow-hidden" style="background: linear-gradient(135deg, #0F5D4E 0%, #052E27 100%)">
            <div class="p-6 space-y-5">
              <!-- Progress bar -->
              <div>
                <div class="flex justify-between font-small text-xs text-white/60 mb-2">
                  <span>Progress Dana</span>
                  <span>{{ progressPersen }}% terkumpul</span>
                </div>
                <div class="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full transition-all duration-500"
                    style="background: #D4AF37"
                    :style="{ width: progressPersen + '%' }"
                  />
                </div>
              </div>

              <!-- Estimasi -->
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p class="font-small text-xs text-white/50 mb-1">Target</p>
                  <p class="font-heading font-bold text-base text-white">{{ formatRupiah(targetBiaya) }}</p>
                </div>
                <div>
                  <p class="font-small text-xs text-white/50 mb-1">Sisa Dana</p>
                  <p class="font-heading font-bold text-base text-white">{{ formatRupiah(sisaDana) }}</p>
                </div>
                <div>
                  <p class="font-small text-xs text-white/50 mb-1">Estimasi</p>
                  <p class="font-heading font-bold text-base text-gold">{{ estimasiLabel }}</p>
                </div>
              </div>

              <!-- CTA -->
              <UButton
                :to="wa"
                target="_blank"
                rel="noopener"
                block
                size="lg"
                class="rounded-xl font-bold text-forest border-none"
                style="background: #D4AF37"
              >
                Konsultasikan Rencana Saya →
              </UButton>
            </div>
          </div>
        </div>

        <p class="mt-6 text-center font-small text-xs text-muted/60">
          * Estimasi bersifat ilustratif. Program Tiket Emas Baitullah CBS hadir dengan bonus dan reward tambahan.
        </p>
      </div>
    </div>
  </section>
</template>
