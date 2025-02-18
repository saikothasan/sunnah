"use client"

import { useState } from "react"
import { SearchIcon } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (collection: string, number: string) => {
    router.push(`/collections/${collection}/${number}`)
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-9 px-0 sm:w-auto sm:px-4 md:w-40 justify-start text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4 sm:mr-2" />
        <span className="hidden sm:inline">Search hadiths...</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search hadiths..." value={query} onValueChange={setQuery} />
        <CommandList className="max-h-[300px] overflow-y-auto">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick access">
            <CommandItem onSelect={() => handleSearch("bukhari", "1")}>Sahih al-Bukhari #1</CommandItem>
            <CommandItem onSelect={() => handleSearch("muslim", "1")}>Sahih Muslim #1</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Search results">{/* Implement actual search results here */}</CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

