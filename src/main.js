import Vue from 'vue';
import App from './App.vue';
import store from './store'; // Import the store
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuetify);
const vuetify = new Vuetify();

new Vue({
  vuetify,
  router,
  store, // Add the store to the Vue instance
  render: h => h(App),
}).$mount('#app');