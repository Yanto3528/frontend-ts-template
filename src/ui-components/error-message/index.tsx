import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { slideFadeIn } from '@/animations'
import { StyledErrorMessage } from './views'

export const ErrorMessage: React.FC = ({ children }) => {
  return (
    <AnimatePresence>
      {children && <StyledErrorMessage variants={slideFadeIn}>{children}</StyledErrorMessage>}
    </AnimatePresence>
  )
}
