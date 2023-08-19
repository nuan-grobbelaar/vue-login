import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import App from './App.vue'

const vuetify = createVuetify({
  components
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
