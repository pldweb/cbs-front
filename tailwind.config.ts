import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 93, 78, 0.18)',
        premium: '0 24px 60px -20px rgba(5, 46, 39, 0.35)',
      },
    },
  },
} satisfies Config
