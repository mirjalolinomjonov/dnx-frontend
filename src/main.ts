import { createApp } from 'vue'
import './styles/tailwind.css'
import './styles/main.css'
import App from './App.vue'
import router from './router'
import AppIcon from './components/shared/app-icon/AppIcon.vue'
import Card from './components/shared/Card.vue'

const app = createApp(App)
app.component('AppIcon', AppIcon)
app.component('Card', Card)
app.use(router)
app.mount('#app')
