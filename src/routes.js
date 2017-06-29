import store from './store/index';
import Home from './ui/layout/pages/Home.vue';
import Results from './ui/layout/pages/Results.vue';


async function requireAuth(to,from,next) {
	let isAuthenticated = await store.dispatch('initUser');
	let categories = store.state.categories;
		console.log('categories > ', categories);
	
	if (!categories) {
		store.dispatch('initCategories');
	}
	if (!isAuthenticated) { 
		to.name==='login'
		? next()
		: next({ name: 'login'})
  	} else {
		
		let items = store.state.items;
		
		if (!items || items==='loading') {
			store.dispatch('initItems');
		}
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
	{ path: '/all', component:Results, name: 'all', beforeEnter: requireAuth},
	{ path: '/', component:Home, name: 'home', beforeEnter: requireAuth},
	{ path: '/login', component:Home, name: 'login', beforeEnter: requireAuth}
	
]


export default {
	root: '/',
	routes,
	// mode: 'history'
}