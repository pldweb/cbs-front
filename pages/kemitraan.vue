<template>
  <main class="bg-warm">
    <CbsHeader />
    <section class="section-shell pt-32 pb-14 text-center">
      <p class="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Kemitraan</p>
      <h1 class="mx-auto max-w-4xl text-4xl font-bold leading-tight text-ink md:text-6xl">Bertumbuh Dari Member, Agen, Hingga Distributor.</h1>
      <p class="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted">
        CBS menyiapkan jalur bertahap untuk keluarga, penggerak komunitas, dan pemimpin wilayah yang ingin membangun dampak dan penghasilan halal.
      </p>
    </section>
    <PartnershipPackagesSection />
    <section class="bg-white py-20">
      <div class="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 class="text-3xl font-bold text-ink md:text-5xl">Daftar Minat Kemitraan</h2>
          <p class="mt-5 leading-8 text-muted">Isi data awal. Tim CBS akan membantu memilih jalur yang paling sesuai dengan kondisi dan tujuan Anda.</p>
        </div>
        <LeadCaptureForm type="partnership" />
      </div>
    </section>
    <CbsFooter />
  </main>
</template>
