"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface HadithNavigationProps {
  collection: string
  currentNumber: number
}

export function HadithNavigation({ collection, currentNumber }: HadithNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8">
      <Button variant="outline" asChild disabled={currentNumber <= 1}>
        <Link href={`/collections/${collection}/${currentNumber - 1}`}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous Hadith
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href={`/collections/${collection}/${currentNumber + 1}`}>
          Next Hadith
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  )
}

