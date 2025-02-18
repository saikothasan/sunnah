import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Explore the Wisdom of Hadith</h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
          Discover authentic sayings and actions of Prophet Muhammad (peace be upon him) from trusted collections.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <Link href="/collections/bukhari">Start Reading</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/search">
              <Search className="mr-2 h-4 w-4" /> Search Hadiths
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

