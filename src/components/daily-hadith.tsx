"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function DailyHadith() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dailyHadith"],
    queryFn: async () => {
      // In a real app, you'd fetch this from your API
      const res = await fetch("/api/daily-hadith")
      if (!res.ok) throw new Error("Failed to fetch daily hadith")
      return res.json()
    },
  })

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-4 w-[200px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent>Error loading daily hadith. Please try again.</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hadith of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{data.collection}</p>
        <p className="text-lg">{data.text}</p>
      </CardContent>
    </Card>
  )
}

