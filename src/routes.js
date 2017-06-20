import store from './store/index';
import Home from './ui/layout/pages/Home.vue';
import Results from './ui/layout/pages/Results.vue';


async function requireAuth(to,from,next) {
	let isAuthenticated = await store.dispatch('initUser');
	if (!isAuthenticated) { 
    	next({ name: 'login'})
  	} else {
		let categories = store.state.categories;
		let items = store.state.items;
		if (!categories) {
			store.dispatch('initCategories');
		}
		if (!items || items==='loading') {
			store.dispatch('initItems');
		}
		console.log('categories > ', categories);
		console.log('items  > ', items);
    	next()
  	}
}

const routes = [
	{ 
		path: '/categories',
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
		],
		beforeEnter: requireAuth
	},
	{
		path: '/results/:searchFilter',
		name: 'results-search',
		component: Results,
		beforeEnter: requireAuth
	},
	{ path: '/', component:Home, name: 'home', beforeEnter: requireAuth},
	{ path: '/login', component:Home, name: 'login'}
	
]


export default {
	root: 'marketcase/',
	routes
}