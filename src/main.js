import Vue from 'vue';
import VueToastify from 'vue-toastify';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueToastify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
