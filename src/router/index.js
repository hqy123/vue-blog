import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import page from '@/views/Page'
import admin from '@/views/Admin'
import login from '@/views/login'

import nodeManage from '@/views/admin/nodeManage'
import articleManage from '@/views/admin/articleManage'
import articleEdit from '@/views/admin/articleEdit'

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
				path:'/nodeManage',
				name:'node-manage',
				component: nodeManage
			},
			{
				path:'/articleManage',
				name:'article-manage',
				component: articleManage
			},
			{
				path:'/articleEdit',
				name:'article-edit',
				component: articleEdit
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login
	}
	]
})
