import { createApp } from 'vue'
import App from './App.vue'
import route from './router/index.js'
import './cssreset.css'








createApp(App).use(route).mount('#app')
