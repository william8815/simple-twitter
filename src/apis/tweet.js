import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')
export default {
  // 當前使用者 追蹤者所有推文 (前10)
  getTweets({ limit }) {
    const searchParams = new URLSearchParams({ limit })
    return apiHelper.get(`/tweets?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 瀏覽個別推文資料
  getUserTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }

}