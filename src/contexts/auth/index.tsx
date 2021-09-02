import React, { createContext, useContext, useMemo, useCallback, useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'

import { useLocalStorage } from '@/hooks/general'
import { clientAPI } from '@/api'
import { IUser } from '@/types'
import { getErrorMessage } from '@/utils/get-error-message'

export interface RegisterUserData {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

export interface LoginUserData {
  email: string
  password: string
}

interface AuthContextProps {
  user: IUser | null
  isLoading: boolean
  getCurrentUser: () => Promise<void>
  register: (data: RegisterUserData) => Promise<void>
  login: (data: LoginUserData) => Promise<void>
  logout: () => void
}

interface AuthResponse {
  token: string
  data: IUser
}

interface AuthUserResponse {
  data: IUser
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: false,
  getCurrentUser: async () => {}, //eslint-disable-line
  register: async () => {}, //eslint-disable-line
  login: async () => {}, //eslint-disable-line
  logout: async () => {}, //eslint-disable-line
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useLocalStorage<IUser | null>('user', null)
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (user) {
      getCurrentUser()
    }
    // eslint-disable-next-line
  }, [])

  const getCurrentUser = useCallback(async () => {
    try {
      const response = await clientAPI.get<AuthUserResponse>('/users/me')
      setUser(response.data.data)
    } catch (error) {
      const message = getErrorMessage(error)
      toast.error(message)
      setUser(null)
      localStorage.removeItem('token')
      history.push('/login')
    }
  }, [setUser, history])

  const register = useCallback(
    async (data: RegisterUserData) => {
      try {
        setIsLoading(true)
        const response = await clientAPI.post<AuthResponse>('/auth/signup', data)
        localStorage.setItem('token', response.data.token)
        setUser(response.data.data)
      } finally {
        setIsLoading(false)
      }
    },
    [setUser]
  )

  const login = useCallback(
    async (data: LoginUserData) => {
      try {
        setIsLoading(true)
        const response = await clientAPI.post<AuthResponse>('/auth/login', data)
        localStorage.setItem('token', response.data.token)
        setUser(response.data.data)
      } finally {
        setIsLoading(false)
      }
    },
    [setUser]
  )

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('token')
    history.replace('/login')
  }, [history, setUser])

  const value = useMemo(() => {
    return {
      user,
      isLoading,
      getCurrentUser,
      register,
      login,
      logout,
    }
  }, [user, isLoading, getCurrentUser, register, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
