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