export interface Color {
  primary: string
  primaryLight: string
  primaryOpaque: string
  primaryOpaque2: string
  danger: string
  dangerOpaque: string
  dangerLight: string
  success: string
  info: string
  lightgray: string
  lightgray2: string
  lightgray3: string
  darkgray: string
  gray: string
  gray2: string
  gray3: string
  white: string
  transparent: string
}

export interface IUser {
  id: string
  name: string
  email: string
  avatar: string
  coverImage: string
  followings: string[]
  followers: string[]
  createdAt: Date
  updatedAt: Date
}
