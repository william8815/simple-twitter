import { apiHelper  } from "../utils/helpers";

export default{
  getTewwts() {
    return apiHelper.get('/tweets')
  }
}