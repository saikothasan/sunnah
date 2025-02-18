import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Book } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Explore authentic hadiths from various collections. Start your journey into Islamic knowledge.",
  openGraph: {
    title: "Home | Hadith Collections",
    description: "Explore authentic hadiths from various collections. Start your journey into Islamic knowledge.",
  },
}

const collections = [
  {
    id: "bukhari",
    name: "Sahih al-Bukhari",
    description: "The most authentic collection of Hadith compiled by Imam Muhammad al-Bukhari",
    count: "7,563 hadiths",
  },
  {
    id: "muslim",
    name: "Sahih Muslim",
    description: "A collection of authentic Hadiths compiled by Imam Muslim ibn al-Hajjaj",
    count: "7,500 hadiths",
  },
  {
    id: "abudawud",
    name: "Sunan Abu Dawud",
    description: "A collection focusing on legal matters compiled by Abu Dawud al-Sijistani",
    count: "5,274 hadiths",
  },
  {
    id: "ibnmajah",
    name: "Sunan ibn Majah",
    description: "One of the six major Hadith collections compiled by Ibn Majah",
    count: "4,341 hadiths",
  },
  {
    id: "tirmidhi",
    name: "Jami at-Tirmidhi",
    description: "A comprehensive collection compiled by Imam at-Tirmidhi",
    count: "3,956 hadiths",
  },
]

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Explore Hadith Collections</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <Card key={collection.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Book className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{collection.count}</span>
                  <Button asChild>
                    <Link href={`/collections/${collection.id}`}>Browse Collection</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

