import type { Metadata } from "next"
import FAQPageClient from "./FAQPageClient"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | DINVBOX",
  description: "Resuelve tus dudas sobre facturación electrónica, precios y uso de DINVBOX.",
  openGraph: {
    title: "Preguntas Frecuentes | DINVBOX",
    description: "Resuelve tus dudas sobre facturación electrónica, precios y uso de DINVBOX.",
    url: "https://www.dinvbox.es/faq",
    type: "website"
  },
  alternates: {
    canonical: "https://www.dinvbox.es/faq"
  }
}

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué incluye el plan gratuito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El plan gratuito incluye 3 facturas electrónicas con envío a VERI*FACTU, gestión básica de clientes y soporte por email.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQPageClient />
    </>
  )
}
