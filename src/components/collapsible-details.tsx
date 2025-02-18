"use client"

import type React from "react"

import { useState } from "react"

interface CollapsibleDetailsProps {
  summary: string
  children: React.ReactNode
  className?: string
}

export function CollapsibleDetails({ summary, children, className = "" }: CollapsibleDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details
      className={className}
      open={isOpen}
      onClick={(e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
      }}
    >
      <summary className="cursor-pointer">{summary}</summary>
      {children}
    </details>
  )
}

