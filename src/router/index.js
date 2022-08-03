import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AdminLogin from '../views/AdminLogin.vue'
import store from '../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'admin') {
    next('/404')
    return
  }

  next()
}

const authorizeIsUser = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'user') {
    next('/404')
    return
  }

  next()
}

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/user/:id',
    name: 'user-profile',
    component: () => import('../views/User.vue'),
    beforeEnter: authorizeIsUser,
    redirect: to => {
      return { name: 'user-post', params: { id: to.params.id } }
    },
    children: [
      {
        path: 'post',
        name: 'user-post',
        component: () => import('../components/UserPost.vue'),
        beforeEnter: authorizeIsUser
      },

      {
        path: 'reply',
        name: 'user-reply',
        component: () => import('../components/UserReply.vue'),
        beforeEnter: authorizeIsUser
      },

      {
        path: 'favorite',
        name: 'user-favorite',
        component: () => import('../components/UserFavorite.vue'),
        beforeEnter: authorizeIsUser
      }
    ]
  },
  {
    path: '/user/:id/edit',
    name: 'user-edit',
    component: () => import('../views/AccountEdit.vue'),
    beforeEnter: authorizeIsUser
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
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/replylist/:id',
    name: 'replylist',
    component: () => import('../views/ReplyList.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/user/:id/followers',
    name: 'followers',
    component: () => import('../views/Followers.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/user/:id/followings',
    name: 'following',
    component: () => import('../views/Following.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/post',
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/admin/post',
    name: 'admin-post',
    component: () => import('../views/AdminPost.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
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

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let userRoel = store.state.currentUser.role

  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    userRoel = await store.dispatch('fetchCurrentUser')
  }
  const pathsWithoutAuthentication = ['login', 'admin-login', 'regist']

  if (!userRoel && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
  } else if (userRoel === 'user' && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
  } else if (userRoel === 'admin' && pathsWithoutAuthentication.includes(to.name)) {
    next('/admin/post')
  }
  next()
})