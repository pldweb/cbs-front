<template>
  <main class="bg-warm">
    <CbsHeader />
    <section class="section-shell grid gap-10 pt-32 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <p class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Konsultasi Gratis</p>
        <h1 class="text-4xl font-bold leading-tight text-ink md:text-6xl">Mulai Dengan Percakapan yang Tenang.</h1>
        <p class="mt-6 text-lg leading-9 text-muted">
          Ceritakan kondisi dan tujuan Anda. Konsultasi ini dirancang sebagai pintu masuk untuk memahami Hijrah Finansial, kemitraan, dan persiapan menuju Baitullah.
        </p>
        <div class="mt-8 grid gap-4">
          <div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft"><UIcon name="i-lucide-shield-check" class="h-6 w-6 text-gold" /> <span class="font-semibold">Tanpa tekanan penjualan agresif</span></div>
          <div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft"><UIcon name="i-lucide-heart-handshake" class="h-6 w-6 text-gold" /> <span class="font-semibold">Dibantu memilih langkah paling realistis</span></div>
        </div>
      </div>
      <LeadCaptureForm type="consultation" />
    </section>
    <CbsFooter />
  </main>
</template>
