import React, { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "@/utils/UrlConstant"
import { ReactNode } from "react"

// Create a Context
const AuthContext = createContext({
  user: null,
  login: async (serialNumber: string) => {
    return false
  },
  logout: () => {},
  checkAuth: async () => {
    return false
  },
  loading: true,
})

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const tokenString = localStorage.getItem("token")
      const token = tokenString ? JSON.parse(tokenString) : null
      if (token && token.access) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token.access}`
        const response = await axios.get(`${BASE_URL}/API/verifyAuth`)
        setUser(response.data)
        setLoading(false)
        return true
      }
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
      return false
    }
  }
  // Check for token in localStorage on mount
  useEffect(() => {
    checkAuth()

    // Axios interceptor to handle token refresh
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          try {
            const tokenString = localStorage.getItem("token")
            const token = tokenString ? JSON.parse(tokenString) : null
            if (token && token.refresh) {
              const response = await axios.post(
                `${BASE_URL}/API/refreshToken`,
                {
                  refreshToken: token.refresh,
                }
              )
              const { access, refresh } = response.data
              localStorage.setItem("token", JSON.stringify({ access, refresh }))
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${access}`
              originalRequest.headers["Authorization"] = `Bearer ${access}`
              return axios(originalRequest)
            } else {
              logout()
            }
          } catch (err) {
            logout()
            return Promise.reject(err)
          }
        }
        return Promise.reject(error)
      }
    )

    // Eject the interceptor when component unmounts
    return () => {
      axios.interceptors.response.eject(interceptor)
    }
  }, [])

  const login = async (serialNumber) => {
    console.log("Login request initiated")
    try {
      console.log('Serial number:', serialNumber)
      const response = await axios.post(`${BASE_URL}/API/login`, {
        serialNumber
      })
      const { access, refresh } = response.data
      localStorage.setItem("token", JSON.stringify({ access, refresh }))
      axios.defaults.headers.common["Authorization"] = `Bearer ${access}`
      setUser(response.data.user)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
  }

  const value = {
    user,
    login,
    logout,
    checkAuth,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
