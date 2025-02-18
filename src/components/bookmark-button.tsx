"use client"

import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

interface BookmarkButtonProps {
  hadithId: string
  collection: string
}

export function BookmarkButton({ hadithId, collection }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const { toast } = useToast()

  const handleBookmark = async () => {
    toast({
      title: "Sign in required",
      description: "You need to be signed in to bookmark hadiths.",
      variant: "destructive",
    })
  }

  return (
    <Button variant="outline" size="icon" onClick={handleBookmark}>
      <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
    </Button>
  )
}

