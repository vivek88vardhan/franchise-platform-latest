import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ImageLoader from "@/components/image-loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FranchiseConnect - Indian Franchises in the US",
  description:
    "Establish Indian franchises in the United States with comprehensive supply chain, raw materials, and branding support.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ImageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
