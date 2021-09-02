import isEmail from 'validator/es/lib/isEmail'

export const validateEmail = (value: string) => {
  return isEmail(value) || 'Please provide a valid email'
}

export const validatePassword = (value: string) => {
  return value.length >= 6 || 'Password must be at least 6 or more characters'
}

export const validateConfirmPassword = (value: string, compareValue: string) => {
  return value === compareValue || 'Password does not match'
}
