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
  },
  // 取得用戶追隨清單
  getUserFollowing(id) {
    return apiHelper.get(`/users/${id}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得用戶粉絲清單
  getUserFollowers(id) {
    return apiHelper.get(`/users/${id}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得特定用戶資料
  getOtherUser(id) {
    return apiHelper.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  // 編輯使用者
  editUser(id, data) {
    return apiHelper.put(`/users/${id} `, { ...data })

  },
  // 查詢特定使用者的所有推文
  getUserTweets(id) {
    return apiHelper.get(`/users/${id}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },

  // 查詢特定使用者喜歡的推文
  getUserLikes(id) {
    return apiHelper.get(`/users/${id}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}