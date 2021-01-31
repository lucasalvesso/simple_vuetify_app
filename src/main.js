import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Pages
import '@/pages';

// States
import '@/state';

import routerVue from '@/components/router/routerVue';

Vue.use(VueRouter);
Vue.use(Vuex);

const storeVue = new Vuex.Store({
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: routerVue,
  store: storeVue,
  vuetify,
}).$mount('#app');
