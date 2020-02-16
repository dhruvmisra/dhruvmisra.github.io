import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlidingText from '@/components/Common/SlidingText';
import Heading from '@/components/Common/Heading';
import VueRellax from 'vue-rellax'
 
Vue.component("SlidingText", SlidingText);
Vue.component("Heading", Heading);
Vue.use(VueRellax);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
