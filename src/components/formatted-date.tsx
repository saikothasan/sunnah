"use client"

import { useState, useEffect } from "react"

export function FormattedDate({ date }: { date: Date }) {
  const [formattedDate, setFormattedDate] = useState("")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    setFormattedDate(formatter.format(date))
  }, [date])

  return <span>{formattedDate}</span>
}

