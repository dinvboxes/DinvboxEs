import type { Metadata } from "next"
import PreciosPageClient from "./PreciosPageClient"

export const metadata: Metadata = {
  title: "Planes y precios | DINVBOX",
  description: "Descubre nuestras tarifas de facturación electrónica y elige el plan que mejor se adapte a tu negocio.",
  openGraph: {
    title: "Planes y precios | DINVBOX",
    description: "Descubre nuestras tarifas de facturación electrónica y elige el plan que mejor se adapte a tu negocio.",
    url: "https://www.dinvbox.es/precios",
    type: "website"
  },
  alternates: {
    canonical: "https://www.dinvbox.es/precios"
  }
}

export default function PricingPage() {
  return <PreciosPageClient />
}
