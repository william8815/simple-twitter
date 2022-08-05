import { apiHelper } from "../utils/helpers";
export default {
  // 追蹤人數多排到少，若相同則按照姓名正向排序
  getRecommendUsers() {
    return apiHelper.get(`/users`,)
  },
  // 追蹤用戶
  addFollowing(id) {
    return apiHelper.post(`/followships`, { id },)
  },
  // 退追用戶
  deleteFollowing(id) {
    return apiHelper.delete(`/followships/${id}`,)
  },
  getCurrentUser() {
    return apiHelper.get('/users/currentUser')
  },
  // 取得用戶追隨清單
  getUserFollowing(id) {
    return apiHelper.get(`/users/${id}/followings`,)
  },
  // 取得用戶粉絲清單
  getUserFollowers(id) {
    return apiHelper.get(`/users/${id}/followers`,)
  },
  // 取得特定用戶資料
  getOtherUser(id) {
    return apiHelper.get(`/users/${id}`,)
  },

  // 編輯使用者
  editUser(id, data) {
    return apiHelper.put(`/users/${id} `, { ...data })

  },
  // 查詢特定使用者的所有推文
  getUserTweets(id) {
    return apiHelper.get(`/users/${id}/tweets`,)
  },

  // 查詢特定使用者喜歡的推文
  getUserLikes(id) {
    return apiHelper.get(`/users/${id}/likes`,)
  },

  // 查詢特定使用者回覆過的推文
  getUserReply(id) {
    return apiHelper.get(`/users/${id}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }


}