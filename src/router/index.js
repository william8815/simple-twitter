import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
