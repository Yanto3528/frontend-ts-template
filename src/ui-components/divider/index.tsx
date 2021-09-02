import React from 'react'

import { DividerWrapper } from './styles'

export interface DividerProps {
  m?: string
}

export const Divider: React.FC<DividerProps> = (props) => {
  return <DividerWrapper {...props} />
}
