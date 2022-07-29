import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AdminLogin from '../views/AdminLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/post'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/replylist',
    name: 'replylist',
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/followers',
    name: 'followers',
    component: () => import('../views/Followers.vue')
  },
  {
    path: '/following',
    name: 'following',
    component: () => import('../views/Following.vue')
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/admin/post',
    name: 'admin-post',
    component: () => import('../views/AdminPost.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/user/:id/edit',
    name: 'user-edit',
    component: () => import('../views/AccountEdit.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
