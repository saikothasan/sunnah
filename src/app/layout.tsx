import type React from "react"
import { Inter } from "next/font/google"
import { MainNav } from "@/components/layout/main-nav"
import { Toaster } from "@/components/ui/toaster"
import { siteConfig, GOOGLE_ANALYTICS_ID } from "@/lib/constants"
import Script from "next/script"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Hadith", "Islam", "Prophet Muhammad", "Islamic Studies", "Sunnah"],
  authors: [
    {
      name: "Al Hadith",
      url: "https://al-hadith.pages.dev",
    },
  ],
  creator: "Saikothasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@saikothasan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
    generator: 'github'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 bg-background">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">Built with love for the Muslim community</p>
                <nav className="flex gap-4 sm:gap-6">
                  <a href="/about" className="text-sm text-muted-foreground hover:underline">
                    About
                  </a>
                  <a href="/privacy" className="text-sm text-muted-foreground hover:underline">
                    Privacy
                  </a>
                  <a href="/terms" className="text-sm text-muted-foreground hover:underline">
                    Terms
                  </a>
                </nav>
              </div>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
