import { createApp } from 'vue'

import store from './store'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(store)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

myApp.mount('#app')
