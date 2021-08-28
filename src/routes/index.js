import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return { top: 0 }
	},
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('@/views/NewsView')
		},
		{
			path: '/ask',
			name: 'ask',
			component: () => import('@/views/AskView')
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: () => import('@/views/JobsView')
		},
		{
			path: '/user/:id',
			component: () => import('@/views/UserView')
		},
		{
			path: '/item/:id',
			component: () => import('@/views/ItemView')
		}
	]
})
