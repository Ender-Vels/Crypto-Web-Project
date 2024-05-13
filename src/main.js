import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from '../src/routes/router.js'

let app=createApp(App)
app.use(bootstrap)
app.use(router)
app.mount('#app')
