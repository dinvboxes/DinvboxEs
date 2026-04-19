import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Política de privacidad | DINVBOX",
  description: "Información sobre el tratamiento de datos personales y el uso de cookies en DINVBOX.",
  openGraph: {
    title: "Política de privacidad | DINVBOX",
    description: "Información sobre el tratamiento de datos personales y el uso de cookies en DINVBOX.",
    url: "https://www.dinvbox.es/privacidad",
    type: "article"
  },
  alternates: {
    canonical: "https://www.dinvbox.es/privacidad"
  }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
