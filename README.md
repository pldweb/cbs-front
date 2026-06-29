# CBS Frontend Nuxt

Landing page nasional CBS untuk Gerakan Hijrah Finansial dan Tiket Emas Baitullah.

## Setup

```bash
npm install
npm run dev
```

Konfigurasi API Laravel:

```bash
NUXT_PUBLIC_API_BASE=https://api.cbs.id/api
```

## Struktur Utama

- `components/sections/` berisi 15 section landing sesuai prompt.
- `components/forms/` berisi form lead dan Simulator Baitullah.
- `composables/useApi.ts` membaca `runtimeConfig.public.apiBase`.
- `composables/useBaitullahSimulator.ts` menghitung estimasi target Baitullah.
- Halaman pendukung: `/program`, `/tiket-emas-baitullah`, `/kemitraan`, `/blog`, `/konsultasi`.

## Build

```bash
npm run build
```
