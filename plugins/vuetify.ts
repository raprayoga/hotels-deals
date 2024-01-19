// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#1a73e8 ',
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
