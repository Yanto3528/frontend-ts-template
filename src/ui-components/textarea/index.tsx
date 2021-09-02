import React, { ReactElement, TextareaHTMLAttributes } from 'react'
import { ISpacing } from '@/styled/spacing'

import { ErrorMessage } from '../error-message'
import { StyledTextarea, Label, InputContainer, IconContainer } from './views'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, ISpacing {
  label: string
  errorMessage: string
  error: boolean
  leftIcon: ReactElement
  rightIcon: ReactElement
  width: string
  fontSize: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Partial<TextareaProps>>(
  ({ name, label, leftIcon, rightIcon, errorMessage, error, m, mt, mb, mr, ml, ...otherProps }, ref) => {
    return (
      <Label htmlFor={name} m={m} mt={mt} mb={mb} mr={mr} ml={ml}>
        {label}
        <InputContainer hasLabel={!!label}>
          {leftIcon && <IconContainer position='left'>{leftIcon}</IconContainer>}
          <StyledTextarea
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            id={name}
            autoComplete='off'
            ref={ref}
            error={error}
            rows={4}
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
