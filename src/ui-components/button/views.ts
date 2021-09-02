import styled from 'styled-components'
import { ButtonProps } from './index'

interface StyledButtonProps extends ButtonProps {
  hasChildren: boolean
}

export const StyledButton = styled.button<Partial<StyledButtonProps>>`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.primary)};
  color: ${({ theme, textColor }) => textColor || theme.colors.white};
  padding: ${({ padding }) => padding || '8px 24px'};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  transition: all 0.4s;
  width: ${({ fluid, width }) => (fluid ? '100%' : width)};
  opacity: ${({ isLabel }) => (isLabel ? '0.2' : '1')};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  svg {
    stroke: #fff;
    fill: #fff;
    margin-right: ${({ hasChildren, icon }) => (hasChildren && icon ? '5px' : '0px')};
  }
`
