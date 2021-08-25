import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			component: () => import('@/views/NewsView.vue')
		},
		{
			path: '/ask',
			component: () => import('@/views/AskView.vue')
		},
		{
			path: '/jobs',
			component: () => import('@/views/JobsView.vue')
		},
		{
			path: '/item',
			component: () => import('@/views/ItemView.vue')
		},
		{
			path: '/user',
			component: () => import('@/views/UserView.vue')
		}
	]
})
