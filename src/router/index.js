import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/Home'
import page from '@/views/Page'
import admin from '@/views/Admin'
import login from '@/views/login'

import nodeManage from '@/views/admin/nodeManage'
import articleManage from '@/views/admin/articleManage'
import articleEdit from '@/views/admin/articleEdit'

import store from '@/store/store'

Vue.use(Router)

const routes = [
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
    meta:{
      requireAuth: true,
    },
    children: [
      {
        path:'/nodeManage',
        name:'node-manage',
        component: nodeManage,
        meta:{
          requireAuth: true,
        }
      },
      {
        path:'/articleManage',
        name:'article-manage',
        component: articleManage,
        meta:{
          requireAuth: true,
        }
      },
      {
        path:'/articleEdit',
        name:'article-edit',
        component: articleEdit,
        meta:{
          requireAuth: true,
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new Router({routes})

router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth) {

    if (store.state.loginToken != '') {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

export default router
