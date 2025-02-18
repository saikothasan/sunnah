interface CollectionHeaderProps {
  collection: string
}

const collectionInfo = {
  bukhari: {
    title: "Sahih al-Bukhari",
    description: "The most authentic collection of Hadith compiled by Imam Muhammad al-Bukhari",
  },
  muslim: {
    title: "Sahih Muslim",
    description: "A collection of authentic Hadiths compiled by Imam Muslim ibn al-Hajjaj",
  },
  abudawud: {
    title: "Sunan Abu Dawud",
    description: "A collection focusing on legal matters compiled by Abu Dawud al-Sijistani",
  },
  ibnmajah: {
    title: "Sunan ibn Majah",
    description: "One of the six major Hadith collections compiled by Ibn Majah",
  },
  tirmidhi: {
    title: "Jami at-Tirmidhi",
    description: "A comprehensive collection compiled by Imam at-Tirmidhi",
  },
}

export function CollectionHeader({ collection }: CollectionHeaderProps) {
  const info = collectionInfo[collection as keyof typeof collectionInfo]

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{info.title}</h1>
      <p className="text-muted-foreground">{info.description}</p>
    </div>
  )
}

