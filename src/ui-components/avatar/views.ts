import styled from 'styled-components'
import { AvatarProps } from './index'

export const StyledImage = styled.img.attrs<AvatarProps>(() => ({
  className: 'avatar',
}))<AvatarProps>`
  width: ${({ size }) => size || '30px'};
  height: ${({ size }) => size || '30px'};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  border: ${({ showBorder }) => showBorder && `3px solid white`};
  object-fit: cover;
  display: block;
`
