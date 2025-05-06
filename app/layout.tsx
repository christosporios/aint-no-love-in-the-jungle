import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin", "greek"] })

export const metadata = {
  generator: 'v0.dev',
  title: "Δεν Υπάρχει Αγάπη στη Ζούγκλα",
  description: "Μια κοινότητα ανθρώπων που απαιτεί την προστασία του δημόσιου χώρου της Αθήνας από τα ενοικιαζόμενα πατίνια"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* Skip link for keyboard users */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-yellow-500 focus:text-black focus:outline-none">
          Μετάβαση στο κύριο περιεχόμενο
        </a>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
