import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/:id',
    name: 'user-profile',
    component: () => import('../views/User.vue'),
    redirect: to => {
      return { name: 'user-post', params: { id: to.params.id } }
    },
    children: [
      {
        path: 'post',
        name: 'user-post',
        component: () => import('../components/UserPost.vue'),
      },

      {
        path: 'reply',
        name: 'user-reply',
        component: () => import('../components/UserReply.vue'),
      },

      {
        path: 'favorite',
        name: 'user-favorite',
        component: () => import('../components/UserFavorite.vue'),
      }
    ]
  },

  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },


]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
