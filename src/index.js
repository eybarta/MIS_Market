import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';

Vue.config.devtools = true;


import router from './routes'
import store from './store/index';

sync(store, router);

import './styl/app.styl';
import App from './ui/layout/App.vue';

new Vue({
    replace:false,
    render: h => h(App),
    router, 
    store,
    mounted() {
    	console.log("VUE ROOT MOUNTED");
    }
}).$mount('#app');
