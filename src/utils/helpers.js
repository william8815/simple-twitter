import swal from 'sweetalert2'
import axios from 'axios'
const baseURL = 'https://young-springs-47906.herokuapp.com/api'

export const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})


export const DeleteAlert = swal.mixin({
  title: "確定要刪除推文 ? ",
  icon: "warning",
  width: '280px',
  toast: true,
  iconColor: '#FF974A',
  showCancelButton: true,
  confirmButtonColor: '#FFC542',
  cancelButtonColor: '#FFC542',
  confirmButtonText: '確定',
  cancelButtonText: '取消',
})

export const DeleteInfoAlert = swal.mixin({
  toast: true,
  position: 'top-end',
  icon: 'success',
  title: '推文已刪除', 
  showConfirmButton: false,
  timer: 3000
})


