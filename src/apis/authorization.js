import { apiHelper } from "../utils/helpers";

export default {

  login({ account, password }) {
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },

  adminLogin({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },

  signUp(data) {
    return apiHelper.post('/users', {
      ...data
    })
  }
}