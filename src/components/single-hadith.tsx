"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Book, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { BookmarkButton } from "@/components/bookmark-button"

interface SingleHadithProps {
  collection: string
  number: string
}

interface HadithData {
  id: number
  header: string
  hadith_english: string
  book: string
  refno: string
  bookName: string
  chapterName: string
}

export function SingleHadith({ collection, number }: SingleHadithProps) {
  const [isArabicVisible, setIsArabicVisible] = useState(false)
  const { data, isLoading, error } = useQuery<{ data: HadithData }>({
    queryKey: ["hadith", collection, number],
    queryFn: async () => {
      const res = await fetch(`https://en-hadith-api.vercel.app/${collection}/${number}`)
      if (!res.ok) throw new Error("Failed to fetch hadith")
      return res.json()
    },
  })

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-4 w-[250px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-40 w-full" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-40 text-destructive">
          Error loading hadith. Please try again.
        </CardContent>
      </Card>
    )
  }

  const hadith = data?.data

  if (!hadith) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-40 text-muted-foreground">
          No hadith found.
        </CardContent>
      </Card>
    )
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "The link to this hadith has been copied to your clipboard.",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Book className="h-5 w-5" />
            {hadith.refno}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsArabicVisible(!isArabicVisible)}>
              {isArabicVisible ? "Hide Arabic" : "Show Arabic"}
            </Button>
            <BookmarkButton hadithId={hadith.id.toString()} collection={collection} />
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{hadith.header}</span>
        </div>
        <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">{hadith.hadith_english}</p>
        {isArabicVisible && (
          <p className="text-lg sm:text-xl leading-relaxed whitespace-pre-line arabic mt-4 pt-4 border-t">
            {/* Arabic text would go here */}
            هنا يكون نص الحديث باللغة العربية
          </p>
        )}
        <div className="text-sm text-muted-foreground pt-4 border-t space-y-2">
          <p>Book: {hadith.bookName}</p>
          <p>Chapter: {hadith.chapterName}</p>
        </div>
      </CardContent>
    </Card>
  )
}

