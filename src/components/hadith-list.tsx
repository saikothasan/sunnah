"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

interface HadithData {
  id: number
  header: string
  hadith_english: string
  book: string
  refno: string
  bookName: string
  chapterName: string
}

interface HadithListProps {
  collection: string
  page?: number
  searchResults?: HadithData[]
}

export function HadithList({ collection, page = 1, searchResults }: HadithListProps) {
  const { data, isLoading, error } = useQuery<{ data: HadithData[] }>({
    queryKey: ["hadiths", collection, page],
    queryFn: async () => {
      if (searchResults) return { data: searchResults }
      try {
        const res = await fetch(`https://en-hadith-api.vercel.app/${collection}/${page}`)
        if (!res.ok) throw new Error("Failed to fetch hadiths")
        const data = await res.json()
        // Handle single hadith response
        if (!Array.isArray(data.data)) {
          return { data: [data.data] }
        }
        return data as { data: HadithData[] }
      } catch (error) {
        console.error("Error fetching hadiths:", error)
        throw error
      }
    },
    enabled: !searchResults && !!collection,
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-4 w-[250px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-40 text-destructive">
          Error loading hadiths. Please try again.
        </CardContent>
      </Card>
    )
  }

  const hadiths = searchResults || data?.data || []

  if (hadiths.length === 0) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-40 text-muted-foreground">
          No hadiths found.
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {hadiths.map((hadith) => (
        <Card key={hadith.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>
              <Link href={`/collections/${collection}/${hadith.id}`} className="hover:text-primary transition-colors">
                {hadith.refno}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{hadith.header}</p>
            <p className="line-clamp-3 whitespace-pre-line">{hadith.hadith_english}</p>
            <Link
              href={`/collections/${collection}/${hadith.id}`}
              className="text-primary hover:underline text-sm mt-2 inline-block"
            >
              Read more
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

