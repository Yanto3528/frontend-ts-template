import { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import { ISpacing, Spacing } from '@/styled/spacing'

interface StyledTextareaProps extends Pick<ISpacing, 'p' | 'pt' | 'pb' | 'pr' | 'pl'> {
  width: string
  leftIcon: ReactElement
  rightIcon: ReactElement
  error: boolean
  padding: string
  fontSize: string
  margin: string
}

interface InputContainerProps {
  hasLabel: boolean
}

interface IconContainerProps {
  position: 'left' | 'right'
  clickable?: boolean
}

export const StyledTextarea = styled.textarea<Partial<StyledTextareaProps>>`
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '10px'};
  padding-left: ${({ leftIcon }) => leftIcon && '36px'};
  padding-right: ${({ rightIcon }) => rightIcon && '36px'};
  ${Spacing};
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.danger : theme.colors.lightgray2)};
  border-radius: ${({ theme }) => theme.radius.sm};
  outline: none;
  font-size: ${({ fontSize }) => fontSize};
  font-family: 'Open Sans', sans-serif;
  resize: none;
  transition: all 0.4s;
  &:focus {
    border-color: ${({ theme, error }) => !error && theme.colors.primary};
  }
`

export const Label = styled.label<ISpacing>`
  width: 100%;
  margin-bottom: 10px;
  display: block;
  ${Spacing};
`

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  margin-top: ${({ hasLabel }) => (hasLabel ? '5px' : '0px')};
`

export const IconContainer = styled.div.attrs<IconContainerProps>(() => ({
  className: 'input-icon-container',
}))<IconContainerProps>`
  position: absolute;
  ${({ position }) => {
    switch (position) {
      case 'left':
        return css`
          left: 0;
        `
      case 'right':
        return css`
          right: 0;
        `
      default:
        return css`
          left: 0;
        `
    }
  }}
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 100%;
  border-top-left-radius: ${({ theme }) => theme.radius.md};
  border-bottom-left-radius: ${({ theme }) => theme.radius.md};
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`
