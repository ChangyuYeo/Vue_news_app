import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/news'
	},
	{
		path: '/news',
		name: 'news',
		component: () => import('@/views/NewsView.vue')
	},
	{
		path: '/ask',
		name: 'ask',
		component: () => import('@/views/AskView.vue')
	},
	{
		path: '/jobs',
		name: 'jobs',
		component: () => import('@/views/JobsView.vue')
	},
	{
		path: '/user/:id',
		component: () => import('@/views/UserView.vue')
	},
	{
		path: '/item/:id',
		component: () => import('@/views/ItemView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return { top: 0 }
	},
	routes
})

export default router
