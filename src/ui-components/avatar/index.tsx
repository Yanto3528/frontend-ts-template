import React, { ImgHTMLAttributes } from 'react'
import { StyledImage } from './views'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string
  rounded?: boolean
  showBorder?: boolean
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <StyledImage {...props} />
}
