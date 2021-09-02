import styled from 'styled-components'
import { motion } from 'framer-motion'

interface WrapperProps {
  width?: string
}

export const Wrapper = styled(motion.div).attrs<WrapperProps>(() => ({
  className: 'dropdown-wrapper',
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))<WrapperProps>`
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.radius.md};
  position: absolute;
  top: 45px;
  right: 0;
  min-width: 200px;
  width: ${({ width }) => width};
  max-height: 200px;
`

export const Item = styled.div`
  padding: 10px;
  margin: 5px;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
  > *:not(:last-child) {
    display: inline-block;
    margin-right: 5px;
  }
`
