import styled, { keyframes } from 'styled-components'
import { SkeletonProps } from './index'

const shimmer = keyframes`
  to {
    transform: translateX(100%);
  }
`

export const SkeletonLoading = styled.div<SkeletonProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '15px'};
  border-radius: ${({ theme, circle }) => (circle ? '50%' : theme.radius.sm)};
  background: ${({ theme }) => theme.colors.lightgray2};
  &:not(:last-child) {
    margin-bottom: ${({ count, spacing }) => (count && count > 0 ? spacing || '5px' : '0px')};
  }
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    border-radius: ${({ theme }) => theme.radius.sm};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} ${({ duration }) => duration || '1.5s'} infinite;
  }
`
