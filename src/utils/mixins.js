// 使用 moment.js 的 formNow() 功能 (npm install moment@2.24.0)
import moment from "moment";
export const fromNowFilter = {
  filters: {
    fromNow(datatime) {
      return datatime ? moment(datatime).fromNow() : '-'
    },
  },
}
// 使用者沒有上傳圖片時，顯示一張空的圖片
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://i.postimg.cc/nz9DxX0W/other-User.png'
    }
  }
}