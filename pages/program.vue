<template>
  <main class="bg-warm">
    <CbsHeader />
    <section class="section-shell pt-32 pb-20">
      <div class="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Program</p>
          <h1 class="text-4xl font-bold leading-tight text-ink md:text-6xl">Gerakan Hijrah Finansial</h1>
          <p class="mt-6 text-lg leading-9 text-muted">
            Program edukasi dan komunitas untuk membantu keluarga Muslim menata rezeki, menghindari kebiasaan konsumtif, membangun aset, dan mengarahkan ikhtiar menuju keberkahan.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <CbsButton to="/konsultasi">Konsultasi Gratis</CbsButton>
            <CbsButton to="/#simulator" variant="outline">Coba Simulator</CbsButton>
          </div>
        </div>
        <div class="rounded-[2rem] bg-white p-6 shadow-premium">
          <div class="grid gap-4">
            <div v-for="item in ['Sadar kondisi finansial', 'Belajar bersama komunitas', 'Mulai menabung emas', 'Bertumbuh sebagai penggerak']" :key="item" class="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
              <UIcon name="i-lucide-check-circle-2" class="h-6 w-6 text-gold" />
              <span class="font-semibold text-ink">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HijrahFinancialSection />
    <PillarsSection />
    <FinalActionSection />
    <CbsFooter />
  </main>
</template>
