import { useState, useCallback } from 'react'

export const useToggle = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onToggle = useCallback(() => setIsOpen((currentOpen) => !currentOpen), [])

  return { isOpen, onOpen, onClose, onToggle }
}
