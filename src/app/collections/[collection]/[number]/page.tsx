import { SingleHadith } from "@/components/single-hadith"
import { HadithNavigation } from "@/components/hadith-navigation"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/constants"

export const runtime = "edge"

interface HadithPageProps {
  params: {
    collection: string
    number: string
  }
}

export async function generateMetadata({ params }: HadithPageProps): Promise<Metadata> {
  const { collection, number } = params
  const collectionName = collection.charAt(0).toUpperCase() + collection.slice(1)

  return {
    title: `${collectionName} Hadith #${number}`,
    description: `Read Hadith #${number} from the ${collectionName} collection. Explore the teachings of Prophet Muhammad (peace be upon him).`,
    openGraph: {
      title: `${collectionName} Hadith #${number} | ${siteConfig.name}`,
      description: `Read Hadith #${number} from the ${collectionName} collection. Explore the teachings of Prophet Muhammad (peace be upon him).`,
    },
  }
}

export default function HadithPage({ params }: HadithPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <SingleHadith collection={params.collection} number={params.number} />
      <HadithNavigation collection={params.collection} currentNumber={Number(params.number)} />
    </div>
  )
}

