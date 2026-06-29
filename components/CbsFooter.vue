<template>
  <footer class="bg-forest text-white">
    <div class="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
      <div>
        <div class="flex items-center gap-3">
          <img src="~/assets/css/logo-cahaya-berkah-semesta.png" alt="Logo CBS" class="h-12 w-12 rounded-full bg-white object-contain p-1">
          <div>
            <p class="font-heading text-2xl font-bold">CBS</p>
            <p class="text-sm text-white/60">Cahaya Berkah Semesta</p>
          </div>
        </div>
        <p class="mt-5 max-w-sm text-sm leading-7 text-white/65">
          Ekosistem Hijrah Finansial untuk keluarga Muslim, komunitas, kemitraan, wakaf, dan persiapan menuju Baitullah.
        </p>
      </div>
      <div>
        <h3 class="font-bold text-gold">Program</h3>
        <div class="mt-4 grid gap-3 text-sm text-white/65">
          <NuxtLink to="/program">Gerakan Hijrah Finansial</NuxtLink>
          <NuxtLink to="/tiket-emas-baitullah">Tiket Emas Baitullah</NuxtLink>
          <NuxtLink to="/kemitraan">Kemitraan</NuxtLink>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-gold">Edukasi</h3>
        <div class="mt-4 grid gap-3 text-sm text-white/65">
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/#faq">FAQ</NuxtLink>
          <NuxtLink to="/konsultasi">Konsultasi</NuxtLink>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-gold">Kontak</h3>
        <div class="mt-4 grid gap-3 text-sm text-white/65">
          <span>WhatsApp: 08xx-xxxx-xxxx</span>
          <span>Email: halo@cbs.id</span>
          <span>Indonesia</span>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 py-5 text-center text-xs text-white/45">
      Copyright CBS. Semua hak dilindungi.
    </div>
  </footer>
</template>
