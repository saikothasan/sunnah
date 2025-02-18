"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuery } from "@tanstack/react-query"
import { HadithList } from "@/components/hadith-list"

interface SearchResult {
  data: {
    id: number
    header: string
    hadith_english: string
    book: string
    refno: string
    bookName: string
    chapterName: string
  }[]
}

export function AdvancedSearch() {
  const [query, setQuery] = useState("")
  const [collection, setCollection] = useState("")

  const { data, isLoading, error, refetch } = useQuery<SearchResult>({
    queryKey: ["search", query, collection],
    queryFn: async () => {
      if (!query || !collection) return { data: [] }
      const res = await fetch(`https://en-hadith-api.vercel.app/${collection}/search?q=${encodeURIComponent(query)}`)
      if (!res.ok) throw new Error("Failed to fetch search results")
      return res.json()
    },
    enabled: false, // Don't run the query automatically
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <Input type="text" placeholder="Search hadiths..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Select value={collection} onValueChange={setCollection}>
          <SelectTrigger>
            <SelectValue placeholder="Select collection" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bukhari">Sahih al-Bukhari</SelectItem>
            <SelectItem value="muslim">Sahih Muslim</SelectItem>
            <SelectItem value="abudawud">Sunan Abu Dawud</SelectItem>
            <SelectItem value="ibnmajah">Sunan ibn Majah</SelectItem>
            <SelectItem value="tirmidhi">Jami at-Tirmidhi</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">
          Search
        </Button>
      </form>
      {isLoading && <p>Searching...</p>}
      {error && <p className="text-destructive">Error: {(error as Error).message}</p>}
      {data && <HadithList collection={collection} searchResults={data.data} />}
    </div>
  )
}

