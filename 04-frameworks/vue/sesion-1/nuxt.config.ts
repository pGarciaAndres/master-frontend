export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      openAiApiKey: process.env.OPENAI_API_KEY
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon'
  ]
})
