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
			}

		]
	},
	// {
	// 	path: '/results/:rootFilter/:childFilter',
	// 	component: Results,
	// 	name: 'results-1',
	// 	meta: {
	// 		label: ':childFilter'
	// 	}
	// },
	// {
	// 	path: '/results/:rootFilter/:childFilter/:grandchildFilter',
	// 	component: Results,
	// 	name: 'results-2',
	// 	meta: {
	// 		label: ':grandchildFilter'
	// 	}
	// }
	// { 
	// 	path: '/results/:rootFilter',
	// 	component: Results,
	// 	name: 'results',
	// 	meta: {
	// 		label: ':rootFilter'
	// 	}
	// },
	// {
	// 	path: '/results/:rootFilter/:childFilter',
	// 	component: Results,
	// 	name: 'results-1',
	// 	meta: {
	// 		label: ':childFilter'
	// 	}
	// },
	// {
	// 	path: '/results/:rootFilter/:childFilter/:grandchildFilter',
	// 	component: Results,
	// 	name: 'results-2',
	// 	meta: {
	// 		label: ':grandchildFilter'
	// 	}
	// }
]


export default new VueRouter({
	// mode: 'history',
	routes
})