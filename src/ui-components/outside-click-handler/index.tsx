import React, { useRef, useEffect } from 'react'

interface OutsideClickHandlerProps {
  onOutsideClick: () => void
}

export const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({ onOutsideClick, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onOutsideClick])

  return <div ref={wrapperRef}>{children}</div>
}
