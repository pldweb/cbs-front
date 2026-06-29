<template>
  <section id="solusi" class="py-24 lg:py-32 relative overflow-hidden bg-warm text-ink">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-emerald-500" />
      <div class="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full border border-gold" />
    </div>

    <div class="max-w-container mx-auto px-5 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Kiri: Heading & Image -->
        <div class="space-y-8">
          <h2 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
            Apa Solusinya?
          </h2>
          
          <!-- Image Container -->
          <div class="w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-emerald-100">
            <img
              src="/photos/community-kajian.jpg"
              alt="Kajian Al-Quran bersama pembimbing di masjid"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <!-- Kanan: Quote Content -->
        <div class="space-y-6 lg:pl-4">
          <!-- Decorative element (gold diamond) -->
          <h3 class="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-emerald-500 leading-none">
            Perubahan
          </h3>

          <p class="font-body text-xl sm:text-2xl lg:text-[28px] text-ink/90 leading-relaxed font-normal">
            "Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sebelum mereka mengubah keadaan diri mereka sendiri."
          </p>

          <p class="font-small text-base sm:text-lg text-gold font-semibold tracking-wider uppercase">
            — QS. Ar-Ra'd: 11
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
