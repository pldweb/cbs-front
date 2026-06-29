export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase as string

  const postLead = async (payload: Record<string, unknown>) => {
    return await $fetch('/leads', {
      baseURL,
      method: 'POST',
      body: payload,
    })
  }

  const getStats = async () => {
    return await $fetch('/stats', { baseURL })
  }

  return { baseURL, postLead, getStats }
}
