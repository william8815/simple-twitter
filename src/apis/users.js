import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')
export default {
  // 追蹤人數多排到少，若相同則按照姓名正向排序
  getRecommendUsers() {
    return apiHelper.get(`/users`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 追蹤用戶
  addFollowing(id) {
    return apiHelper.post(`/followships`, { id }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 退追用戶
  deleteFollowing(id) {
    return apiHelper.delete(`/followships/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getCurrentUser() {
    return apiHelper.get('/users/currentUser')
  }
}