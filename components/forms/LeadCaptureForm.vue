<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: string; compact?: boolean }>(), {
  type: 'consultation',
  compact: false,
})

const { postLead } = useApi()
const loading = ref(false)
const success = ref('')
const error = ref('')
const honeypot = ref('')
const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const submit = async () => {
  if (honeypot.value) return
  loading.value = true
  success.value = ''
  error.value = ''
  try {
    await postLead({
      ...form,
      type: props.type,
      source: 'website',
      payload: { page: useRoute().fullPath },
    })
    success.value = 'Terima kasih. Tim CBS akan menghubungi Anda.'
    form.name = ''
    form.phone = ''
    form.email = ''
    form.message = ''
  } catch {
    error.value = 'Belum bisa terhubung ke server. Data Anda bisa dikirim ulang beberapa saat lagi.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="rounded-3xl border border-emerald/10 bg-white p-5 shadow-premium md:p-7" @submit.prevent="submit">
    <div class="sr-only">
      <label>Company</label>
      <input v-model="honeypot" type="text" tabindex="-1" autocomplete="off">
    </div>
    <div class="grid gap-4" :class="compact ? 'md:grid-cols-2' : ''">
      <label class="block text-sm font-semibold text-ink">
        Nama
        <input v-model="form.name" required class="mt-2 w-full rounded-2xl border border-emerald/15 px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Nama lengkap">
      </label>
      <label class="block text-sm font-semibold text-ink">
        WhatsApp
        <input v-model="form.phone" required class="mt-2 w-full rounded-2xl border border-emerald/15 px-4 py-3 text-sm outline-none focus:border-gold" placeholder="08xxxxxxxxxx">
      </label>
      <label class="block text-sm font-semibold text-ink">
        Email
        <input v-model="form.email" type="email" class="mt-2 w-full rounded-2xl border border-emerald/15 px-4 py-3 text-sm outline-none focus:border-gold" placeholder="nama@email.com">
      </label>
      <label class="block text-sm font-semibold text-ink" :class="compact ? 'md:col-span-2' : ''">
        Pesan
        <textarea v-model="form.message" rows="3" class="mt-2 w-full rounded-2xl border border-emerald/15 px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Saya ingin konsultasi tentang..."></textarea>
      </label>
    </div>
    <button :disabled="loading" class="mt-5 w-full rounded-2xl bg-gold px-5 py-3 text-sm font-bold text-forest shadow-lg shadow-gold/20 transition hover:bg-gold-300 disabled:opacity-60">
      {{ loading ? 'Mengirim...' : 'Kirim Konsultasi Gratis' }}
    </button>
    <p v-if="success" class="mt-3 text-sm font-semibold text-emerald">{{ success }}</p>
    <p v-if="error" class="mt-3 text-sm font-semibold text-red-600">{{ error }}</p>
  </form>
</template>
