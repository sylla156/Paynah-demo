"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ModalContextType {
  isOpen: boolean
  content: ReactNode | null
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode | null>(null)

  const openModal = (content: ReactNode) => {
    setContent(content)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => setContent(null), 300) // Wait for animation to complete
  }

  return <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>{children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

