import 'babel-polyfill'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.devtools = true;

// PLUGINS
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)



/*
    // ROUTER & VUEX (store)
*/
import routes from './routes'
import store from './store/index';

Vue.http.options.root = './wsMain.asmx';
Vue.use(VueRouter);
export const router = new VueRouter(routes);

// Vue.use(require('@websanova/vue-auth'), {
//     auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//     http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
//     router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
//     rolesVar: 'type',
//     loginData: { url:'GetMember'},
//     token: 12345,
//     // fetchData: {url: 'GetMember', method: 'POST', enabled: true},
//     parseUserData: function (data) {
//         console.log("parse user data >> ", data);
//         return data;
//         // return data.whatever;
//     }
// });



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
    // Global Router Guard
*/
// router.beforeEach((to, from, next) => {

//   console.log("STORE FROM BEFORE EACH >> ", this.$auth, store)
// //   console.log("FROM >> ", from);
// //   console.log("TO >> ", to);
// //   if (!store.getters.isAuthenticated) {
// //       console.log('go home...');
// //       next('/');
// //   }
// //   else if (to.name===from.name) {
// //       console.log('stay where you are...');
// //       next(false);
// //   }
// //   else if (!!store.state.user) {
// //       console.log('go on to where you want...');
// //       next();
// //   }
  
// })


/* 
    // Start App
*/
const app = new Vue({
    // replace:false,
    router, 
    store,
    render: h => h(App),
    mounted() {
    	console.log("VUE ROOT MOUNTED >> ", this.$store);
    }
}).$mount('#app');
