import 'babel-polyfill'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.devtools = true;

// PLUGINS
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)


// ROUTER & VUEX (store)
import router from './routes'
import store from './store/index';

// SYNC THEM (Router & Vuex)
import { sync } from 'vuex-router-sync';
sync(store, router);

import './styl/app.styl';
import App from './ui/layout/App.vue';

const app = new Vue({
    // replace:false,
    router, 
    store,
    render: h => h(App),
    mounted() {
    	console.log("VUE ROOT MOUNTED");
    }
}).$mount('#app');
