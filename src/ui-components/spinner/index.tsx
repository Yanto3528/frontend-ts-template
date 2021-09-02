import React from 'react'
import { Color } from '@/types'
import { Loading } from './views'

export interface SpinnerProps {
  size?: string
  color: keyof Color
}

export const Spinner: React.FC<SpinnerProps> = (props) => {
  return <Loading {...props} />
}
