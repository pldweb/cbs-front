export const useBaitullahSimulator = () => {
  const target = ref(35000000)
  const monthly = ref(1000000)
  const current = ref(0)

  const monthsNeeded = computed(() => {
    if (monthly.value <= 0) return 0
    const remaining = Math.max(target.value - current.value, 0)
    return Math.ceil(remaining / monthly.value)
  })

  const progress = computed(() => {
    if (target.value <= 0) return 0
    return Math.min(Math.round((current.value / target.value) * 100), 100)
  })

  const estimatedDate = computed(() => {
    const date = new Date()
    date.setMonth(date.getMonth() + monthsNeeded.value)
    return date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
  })

  return { target, monthly, current, monthsNeeded, progress, estimatedDate }
}
