import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ModalActionsProps, Position } from './index'

interface WrapperProps {
  width?: string
}

export const Overlay = styled.div.attrs(() => ({
  className: 'modal-overlay',
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Wrapper = styled(motion.div).attrs<WrapperProps>(() => ({
  className: 'modal-wrapper',
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
}))<WrapperProps>`
  padding: 20px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  width: ${({ width }) => width || '400px'};
  max-width: 100%;
  position: relative;
`

export const CloseWrapper = styled.div.attrs(() => ({
  className: 'modal-close-wrapper',
}))`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 30px;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
`

export const Title = styled.h3.attrs(() => ({
  className: 'modal-title',
}))`
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 30px;
`

export const Content = styled.p.attrs(() => ({
  className: 'modal-content',
}))`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 10px;
`

export const ActionsWrapper = styled.div.attrs<ModalActionsProps>(() => ({
  className: 'actions-wrapper',
}))<ModalActionsProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => Position[position || 'right']};
  margin-top: 20px;
  > *:not(:last-child) {
    margin-right: 10px;
  }
`
