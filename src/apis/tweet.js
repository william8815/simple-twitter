import { apiHelper } from "../utils/helpers";
export default {
  // 當前使用者 追蹤者所有推文 (前10)
  getTweets({ limit }) {
    const searchParams = new URLSearchParams({ limit })
    return apiHelper.get(`/tweets?${searchParams.toString()}`)
  },
  // 瀏覽個別推文資料
  getUserTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  // 取得特定推文的所有留言
  getUserComments(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`,)
  },
  // 新增推文留言
  addNewComment({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { comment })
  },
  // 貼文按讚
  addTweetLike(id) {
    return apiHelper.post(`/tweets/${id}/like`,)
  },
  // 貼文取消讚
  cancelTweetLike(id) {
    return apiHelper.post(`/tweets/${id}/unlike`,)
  },
  // 新增推文
  addTweet({ description }) {
    return apiHelper.post(`/tweets`, { description },)
  },
}