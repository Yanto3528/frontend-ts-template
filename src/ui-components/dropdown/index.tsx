import React, { HTMLAttributes } from 'react'
import { AnimatePresence } from 'framer-motion'
import { scaleIn } from '@/animations'
import { Wrapper, Item } from './views'

interface DropdownProps {
  isOpen: boolean
  width?: string
}

interface DropdownComposition {
  Item: React.FC<HTMLAttributes<HTMLDivElement>>
}

export const Dropdown: React.FC<DropdownProps> & DropdownComposition = ({ children, isOpen, ...otherProps }) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <Wrapper variants={scaleIn} {...otherProps}>
          {children}
        </Wrapper>
      ) : null}
    </AnimatePresence>
  )
}

const DropdownItem: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, onClick, ...otherProps }) => {
  return (
    <Item onClick={onClick} {...otherProps}>
      {children}
    </Item>
  )
}

Dropdown.Item = DropdownItem
