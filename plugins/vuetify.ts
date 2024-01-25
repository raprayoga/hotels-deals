// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#1a73e8',
    purple: '#A11CB4',
    secondary: '#0000008a',
    success: '#238636',
    danger: '#f44336'
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    themes: {
      myCustomLightTheme,
    },
  })
  app.vueApp.use(vuetify)
})
