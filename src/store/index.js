import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      "id": -1,
      "account": "",
      "name": "",
      "email": "",
      "role": ''
    },
    isAuthenticated: false,
    token: '',
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = '',
      state.isAuthenticated = false,
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        commit('setCurrentUser', data.user)
        return this.state.currentUser.role
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: `載入失敗 - ${error.massage}`
        })
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
