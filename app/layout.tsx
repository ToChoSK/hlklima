import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HLKlima - Lukáš Haľko | Klimatizácie, Tepelné čerpadlá, Rekuperácie",
  description:
    "Profesionálne služby v oblasti klimatizácie, tepelných čerpadiel a rekuperácie. Montáž, predaj, servis a projekcia. Kontakt: 0918 098 465",
  keywords: "klimatizácie, tepelné čerpadlá, rekuperácie, montáž, servis, Lukáš Haľko, HLKlima, Samsung, Midea",
  authors: [{ name: "Lukáš Haľko" }],
  creator: "HLKlima",
  publisher: "HLKlima",
  robots: "index, follow",
  openGraph: {
    title: "HLKlima - Profesionálne klimatizačné služby",
    description: "Klimatizácie, tepelné čerpadlá, rekuperácie. Montáž, predaj, servis, projekcia.",
    url: "https://hlklima.sk",
    siteName: "HLKlima",
    locale: "sk_SK",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
