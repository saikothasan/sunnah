"use client"

import { useState } from "react"
import { Book, Loader2 } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const collections = [
  { id: "bukhari", name: "Sahih al-Bukhari" },
  { id: "muslim", name: "Sahih Muslim" },
  { id: "abudawud", name: "Sunan Abu Dawud" },
  { id: "ibnmajah", name: "Sunan ibn Majah" },
  { id: "tirmidhi", name: "Jami at-Tirmidhi" },
]

interface HadithData {
  id: number
  header: string
  hadith_english: string
  book: string
  refno: string
  bookName: string
  chapterName: string
}

export function HadithBrowser() {
  const [collection, setCollection] = useState("bukhari")

  const { data, isLoading, error } = useQuery<{ data: HadithData }>({
    queryKey: ["hadith", collection],
    queryFn: async () => {
      const res = await fetch(`https://en-hadith-api.vercel.app/${collection}/1`)
      if (!res.ok) throw new Error("Failed to fetch hadith")
      return res.json()
    },
  })

  return (
    <div className="grid gap-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Select value={collection} onValueChange={setCollection}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select collection" />
          </SelectTrigger>
          <SelectContent>
            {collections.map((col) => (
              <SelectItem key={col.id} value={col.id}>
                {col.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="w-full">
        {isLoading ? (
          <CardContent className="flex items-center justify-center min-h-[300px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </CardContent>
        ) : error ? (
          <CardContent className="flex items-center justify-center min-h-[300px] text-destructive">
            Error loading hadith. Please try again.
          </CardContent>
        ) : data && data.data ? (
          <>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Hadith #{data.data.refno}
              </CardTitle>
              <CardDescription>Narrated by {data.data.header}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">{data.data.hadith_english}</p>
                {data.data.chapterName && (
                  <p className="text-sm text-muted-foreground">Chapter: {data.data.chapterName}</p>
                )}
              </div>
            </CardContent>
          </>
        ) : null}
      </Card>
    </div>
  )
}

