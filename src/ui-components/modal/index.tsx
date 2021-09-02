import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { X as CloseIcon } from 'react-feather'
import { modalSlideFadeIn } from '@/animations'
import { Portal } from '../portal'
import { Overlay, Wrapper, CloseWrapper, Title, Content, ActionsWrapper } from './views'

export enum Position {
  left = 'flex-start',
  center = 'center',
  right = 'flex-end',
}

export interface ModalProps {
  width?: string
  isOpen: boolean
  onClose: () => void
}

export interface ModalActionsProps {
  position?: keyof typeof Position
}

interface ModalComposition {
  Title: React.FC
  Content: React.FC
  Actions: React.FC<ModalActionsProps>
}

export const Modal: React.FC<ModalProps> & ModalComposition = ({ children, width, isOpen, onClose }) => {
  const onStopPropagation = (event: React.SyntheticEvent) => {
    event.stopPropagation()
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <Portal>
          <Overlay onClick={onClose}>
            <Wrapper onClick={onStopPropagation} width={width} variants={modalSlideFadeIn}>
              {children}{' '}
              <CloseWrapper onClick={onClose}>
                <CloseIcon />
              </CloseWrapper>
            </Wrapper>
          </Overlay>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}

const ModalTitle: React.FC = ({ children }) => {
  return <Title>{children}</Title>
}

const ModalContent: React.FC = ({ children }) => {
  return <Content>{children}</Content>
}

const ModalActions: React.FC<ModalActionsProps> = ({ children, position }) => {
  return <ActionsWrapper position={position}>{children}</ActionsWrapper>
}

Modal.Title = ModalTitle
Modal.Content = ModalContent
Modal.Actions = ModalActions
