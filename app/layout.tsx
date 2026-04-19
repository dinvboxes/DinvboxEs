import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FacturitoChat } from "@/components/facturito-chat"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "DINVBOX - Facturacion Electronica Inteligente",
  description: "Revoluciona tu facturacion electronica con DINVBOX - Simple, Segura, Inteligente",
  openGraph: {
    title: 'DINVBOX - Facturación Electrónica Inteligente',
    description: 'Revoluciona tu facturación electrónica con DINVBOX - Simple, Segura, Inteligente',
    url: 'https://www.dinvbox.es',
    type: 'website'
  },
  alternates: { canonical: 'https://www.dinvbox.es' }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col" style={{ background: '#FFFFFF' }}>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <CookieConsent />
        <FacturitoChat />
      </body>
    </html>
  )
}
