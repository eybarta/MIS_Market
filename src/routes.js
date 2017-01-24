import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './ui/layout/pages/Home.vue';
import Results from './ui/layout/pages/Results.vue';

const routes = [
  
	{ 
		path: '/', 
		component: Home,
		name: 'home',
	},
	{ 
		path: '/results',
		component: Results,
		name: 'results',
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
								name: 'results-grandchild',
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
]


export default new VueRouter({
	mode: 'history',
	routes
})