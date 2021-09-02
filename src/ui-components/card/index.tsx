import React from 'react'

import { ISpacing } from '@/styled/spacing'
import { Wrapper } from './styles'

export const Card: React.FC<ISpacing> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}
