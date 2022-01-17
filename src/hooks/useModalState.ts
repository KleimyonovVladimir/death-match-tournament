import { useState } from 'react'

export const useModalState = ({ initialOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return { onOpen, onClose, isOpen }
}
