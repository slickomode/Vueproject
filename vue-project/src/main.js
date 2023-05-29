import { createApp } from 'vue'
/* Import bootstrap css and js that bootstrap uses*/
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/global.css'

const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
