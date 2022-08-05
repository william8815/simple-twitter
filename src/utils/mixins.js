// 使用 moment.js 的 formNow() 功能 (npm install moment@2.24.0)
import moment from "moment";
export const fromNowFilter = {
  filters: {
    fromNow(datatime) {
      return datatime ? moment(datatime).fromNow() : '-'
    },
  },
}
// 使用者沒有上傳頭像圖片時，顯示一張空的頭像圖片
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://i.postimg.cc/nz9DxX0W/other-User.png'
    }
  }
}

// 使用者沒有上傳背景圖片時，顯示一張山水畫圖片
export const emptyBackgroundFilter = {
  filters: {
    emptyBackground(src) {
      return src || require('./../assets/img/backgroud.png')
    }
  }
}