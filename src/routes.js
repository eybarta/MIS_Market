import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const Home = resolve => require(['./ui/layout/pages/Home.vue'], resolve);
// const Results = resolve => require(['./ui/layout/pages/Results.vue'], resolve);

import Home from './ui/layout/pages/Home.vue';
import Results from './ui/layout/pages/Results.vue';

const routes = [
	{ 
		path: '/results',
		component: Results,
		children: [
			{
				path:':rootFilter',
				name: 'results-root',
				children: [
					{
						path:':childFilter',
						name: 'results-child',
						children: [
							{
								path:':grandchildFilter',
								name: 'results-grandchild'
							},
							
						]
					}
				]
			},
			{
				path: ':searchFilter',
				name: 'results-search'
			}

		]
	},
	{ path: '/', component:Home, name: 'home'},
	
]


export default new VueRouter({
	root: 'marketcase/',
	routes
})