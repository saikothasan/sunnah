import { HadithList } from "@/components/hadith-list"
import { CollectionHeader } from "@/components/collection-header"
import { Pagination } from "@/components/pagination"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/constants"

interface CollectionPageProps {
  params: {
    collection: string
  }
  searchParams: {
    page?: string
  }
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = params.collection
  const collectionName = collection.charAt(0).toUpperCase() + collection.slice(1)

  return {
    title: `${collectionName} Collection`,
    description: `Explore the ${collectionName} hadith collection. Read authentic sayings of Prophet Muhammad (peace be upon him).`,
    openGraph: {
      title: `${collectionName} Collection | ${siteConfig.name}`,
      description: `Explore the ${collectionName} hadith collection. Read authentic sayings of Prophet Muhammad (peace be upon him).`,
    },
  }
}

export default function CollectionPage({ params, searchParams }: CollectionPageProps) {
  const page = Number(searchParams.page) || 1

  return (
    <div className="container mx-auto px-4 py-8">
      <CollectionHeader collection={params.collection} />
      <HadithList collection={params.collection} page={page} />
      <div className="mt-8">
        <Pagination currentPage={page} />
      </div>
    </div>
  )
}

