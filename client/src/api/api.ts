import axios from 'axios'
import {authAccessTokenSelector, setToken} from '../store/features/auth/authSlice.ts'
import {authRefreshTokenSelector} from '../store/features/auth/authSlice.ts'
import {refreshToken as refreshTokenApi} from './auth'
import jwtDecode from '../utils/jwtDecode'
import store from '../store'
import {DateTime} from 'luxon'
import {toast} from 'react-toastify'

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export const apiWithLoginAndErrorMessaging = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})

apiWithLoginAndErrorMessaging.interceptors.request.use(async (config) => {
  const accessToken = authAccessTokenSelector(store.getState())
  const refreshToken = authRefreshTokenSelector(store.getState())
  if (accessToken && refreshToken) {
    const decodedJwt = await jwtDecode(accessToken) as { exp: number }
    if(DateTime.local() > DateTime.fromSeconds(decodedJwt.exp)) {
      const response = await refreshTokenApi(refreshToken)
      store.dispatch(setToken({accessToken: response.data.accessToken, refreshToken: response.data.refreshToken}))
      config.headers!.Authorization = `Bearer ${response.data.accessToken}`
    }
    else{
      config.headers!.Authorization = `Bearer ${accessToken}`
    }
  }
  return config
})

apiWithLoginAndErrorMessaging.interceptors.response.use(undefined, async (error) => {
  if (axios.isAxiosError(error)) {
    toast.error('Внутренняя Ошибка Сервера')
  }
  return await Promise.reject(error)
})
