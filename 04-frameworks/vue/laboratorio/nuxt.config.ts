export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-primevue'
  ],
  primevue: {
    usePrimeVue: true,
    options: { unstyled: false, ripple: false, inputStyle: 'filled' },
    components: {
      include: [
        'Button',
        'InputText',
        'Checkbox',
        'Textarea',
        'Card',
        'Menubar'
      ]
    }
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css']
})
