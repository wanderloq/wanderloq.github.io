import { createApp } from 'vue'; // Vue 3 için
import App from './App.vue';
import router from './router'; // Router'ı içe aktar
import vuetify from './plugins/vuetify'; // Vuetify eklentisini içe aktar

const app = createApp(App); // Uygulamayı oluştur
app.use(router); // Router'ı ekle
app.use(vuetify); // Vuetify'ı ekle
app.mount('#app'); // Uygulamayı başlat