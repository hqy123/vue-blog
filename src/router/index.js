import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import page from '@/views/Page'
import admin from '@/views/Admin'

import adminIndex from '@/views/admin/index'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path:'/page/:article_id',
		name: 'page-view',
		component: page
	},
	{
		path:'/admin',
		name: 'admin',
		component: admin,
		children: [
			{
				path:'/category',
				name:'admin-index',
				component: adminIndex
			}
		]
	},
	]
})
