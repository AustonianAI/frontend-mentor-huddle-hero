import "./globals.css"

import type { Metadata } from "next"
import { Inter, Open_Sans, Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin-ext"],
})

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "Huddle",
  description: "Build community your fans will love",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
