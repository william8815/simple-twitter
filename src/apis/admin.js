import { apiHelper } from "../utils/helpers";

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
  
  getUsers() {
    return apiHelper.get('/admin/users')
  }

  ,deleteTweet({tweetId}) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }
}