"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

interface PaginationProps {
  currentPage: number
}

export function Pagination({ currentPage }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    return params.toString()
  }

  return (
    <div className="flex justify-center gap-2">
      <Button variant="outline" disabled={currentPage <= 1} asChild>
        <Link href={`${pathname}?${createQueryString(currentPage - 1)}`}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      </Button>
      <Button variant="outline" disabled>
        Page {currentPage}
      </Button>
      <Button variant="outline" asChild>
        <Link href={`${pathname}?${createQueryString(currentPage + 1)}`}>
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  )
}

