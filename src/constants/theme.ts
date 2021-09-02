import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#2F80ED',
    primaryLight: '#DAE4FD',
    primaryOpaque: '#2F80ED0A',
    primaryOpaque2: '#2F80ED1A',
    danger: '#EB5757',
    dangerOpaque: '#EB575720',
    dangerLight: '#EA8181',
    success: '#34D399',
    info: '#FBBF24',
    lightgray: '#F2F2F2',
    lightgray2: '#E0E0E0',
    lightgray3: '#F8F8F8',
    darkgray: '#333333',
    gray: '#828282',
    gray2: '#BDBDBD',
    gray3: '#4F4F4F',
    white: '#FFF',
    transparent: 'transparent',
  },
  boxShadow: {
    primary: '0 1px 10px rgba(0,0,0,0.15)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    rounded: '50%',
  },
}
