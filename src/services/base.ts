import axios from 'axios'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const setToken = (authToken: string): void => {
  localStorage.setItem('authToken', authToken)
}

export const getToken = (): string => {
  return localStorage.getItem('authToken')
}
