import 'babel-polyfill'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.devtools = true;

// PLUGINS
import VuePaginate from 'vue-paginate'
import AsyncComputed from 'vue-async-computed'
Vue.use(VuePaginate)
Vue.use(AsyncComputed)

/*
    // ROUTER & VUEX (store)
*/
import routes from './routes'
import store from './store/index';

Vue.http.options.root = './wsMain.asmx';
Vue.use(VueRouter);
export const router = new VueRouter(routes);

/*
    // SYNC THEM (Router & Vuex)
*/
import { sync } from 'vuex-router-sync';
sync(store, router);

/*
    // Styles
*/
import './styl/app.styl';
import App from './ui/layout/App.vue';

/* 
    // Start App
*/
const app = new Vue({
    router, 
    store,
    render: h => h(App)
}).$mount('#app');
