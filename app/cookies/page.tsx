import type { Metadata } from "next"
import CookiePolicyClient from "./CookiePolicyClient"

export const metadata: Metadata = {
  title: "Política de Cookies | Dinvbox",
  description: "Información sobre el uso de cookies en Dinvbox España: tipos, finalidad, gestión y configuración.",
  openGraph: {
    title: "Política de Cookies | Dinvbox",
    description: "Información sobre el uso de cookies en Dinvbox España.",
    url: "https://www.dinvbox.es/cookies",
    type: "article"
  },
  alternates: {
    canonical: "https://www.dinvbox.es/cookies"
  }
}

export default function CookiesPage() {
  return <CookiePolicyClient />
}
