import React, { InputHTMLAttributes, ReactElement } from 'react'
import { ISpacing } from '@/styled/spacing'

import { ErrorMessage } from '../error-message'
import { StyledInput, Label, InputContainer, IconContainer } from './views'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, ISpacing {
  label: string
  errorMessage: string
  error: boolean
  leftIcon: ReactElement
  rightIcon: ReactElement
  width: string
  fontSize: string
}

export const Input = React.forwardRef<HTMLInputElement, Partial<InputProps>>(
  ({ name, label, leftIcon, rightIcon, errorMessage, error, m, mt, mb, mr, ml, id, ...otherProps }, ref) => {
    return (
      <Label htmlFor={id || name} m={m} mt={mt} mb={mb} mr={mr} ml={ml}>
        {label}
        <InputContainer hasLabel={!!label}>
          {leftIcon && <IconContainer position='left'>{leftIcon}</IconContainer>}
          <StyledInput
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            id={id || name}
            autoComplete='off'
            ref={ref}
            error={error}
            {...otherProps}
          />
          {rightIcon && (
            <IconContainer position='right' clickable>
              {rightIcon}
            </IconContainer>
          )}
        </InputContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Label>
    )
  }
)
