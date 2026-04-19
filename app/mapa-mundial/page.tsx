import type { Metadata } from "next"
import WorldMapPageClient from "./WorldMapPageClient"

export const metadata: Metadata = {
  title: "Mapa mundial de facturación electrónica | DINVBOX",
  description: "Consulta el estado de la facturación electrónica en cada país del mundo.",
  openGraph: {
    title: "Mapa mundial de facturación electrónica | DINVBOX",
    description: "Consulta el estado de la facturación electrónica en cada país del mundo.",
    url: "https://www.dinvbox.es/mapa-mundial",
    type: "website"
  },
  alternates: {
    canonical: "https://www.dinvbox.es/mapa-mundial"
  }
}

export default function WorldMapPage() {
  return <WorldMapPageClient />
}
