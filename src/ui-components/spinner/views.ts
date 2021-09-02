import styled, { keyframes } from 'styled-components'
import { SpinnerProps } from './index'

const InfiniteSpinning = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.span.attrs<SpinnerProps>(() => ({
  className: 'spinner-loading',
  animate: 'animate',
}))<SpinnerProps>`
  display: inline-block;
  width: ${({ size }) => size || '16px'};
  height: ${({ size }) => size || '16px'};
  border-radius: ${({ theme }) => theme.radius.rounded};
  border: 1px solid ${({ theme, color }) => theme.colors[color]};
  border-top-color: transparent;
  animation: ${InfiniteSpinning} 0.5s linear infinite;
`
