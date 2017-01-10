import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './ui/layout/pages/Home.vue';
import Results from './ui/layout/pages/Results.vue';

const routes = [
  
	{ 
		path: '/', 
		component: Home,
		name: 'home'
	},
	{ 
		path: '/results/:filteredBy',
		component: Results,
		name: 'results'
	}
]


export default new VueRouter({
	// mode: 'history',
	routes
})