"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type LoaderContextType = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoaderContext.Provider>
}

export function useLoader() {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider")
  }
  return context
}

