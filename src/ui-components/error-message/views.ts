import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { CustomAnimationProps } from '@/animations'

interface StyledErrorMessageProps {
  variants: Variants & CustomAnimationProps
}

export const StyledErrorMessage = styled(motion.p).attrs<StyledErrorMessageProps>(() => ({
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))<StyledErrorMessageProps>`
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 5px;
  font-size: 1.2rem;
  font-style: italic;
`
