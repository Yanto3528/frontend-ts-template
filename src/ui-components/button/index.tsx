import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import { Color } from '@/types'

import { Spinner } from '../index'
import { StyledButton } from './views'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement
  loading: boolean
  disabled: boolean
  fluid: boolean
  padding: string
  width: string
  margin: string
  marginTop: string
  isLabel: boolean
  color: keyof Color
  textColor: keyof Color
  fontSize: string
}

export const Button: React.FC<Partial<ButtonProps>> = ({ children, icon, loading, disabled, ...otherProps }) => {
  return (
    <StyledButton icon={icon} hasChildren={!!children} disabled={loading || disabled} {...otherProps}>
      {loading ? (
        <Spinner color='white' />
      ) : (
        <>
          {icon} {children}
        </>
      )}
    </StyledButton>
  )
}
