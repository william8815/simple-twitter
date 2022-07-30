import swal from 'sweetalert2'
import axios from 'axios'
// 使用 Axios 函式庫裡提供的 axios.create() 客製化 Axios
const baseURL = 'https://young-springs-47906.herokuapp.com/api/'
export const apiHelper = axios.create({
  baseURL
})

export const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})