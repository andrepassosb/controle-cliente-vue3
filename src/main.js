import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/fonts.css"
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

const app = createApp(App)

app.use(router)
app.use(VCalendar, {})
app.mount('#app')
