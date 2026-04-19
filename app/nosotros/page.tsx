import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "Quiénes somos | DINVBOX",
  description: "Conoce al equipo detrás de DINVBOX y nuestra trayectoria en facturación electrónica.",
  openGraph: {
    title: "Quiénes somos | DINVBOX",
    description: "Conoce al equipo detrás de DINVBOX y nuestra trayectoria en facturación electrónica.",
    url: "https://www.dinvbox.es/nosotros",
    type: "website"
  },
  alternates: {
    canonical: "https://www.dinvbox.es/nosotros"
  }
}

export default function AboutPage() {
  return <AboutPageClient />
}
