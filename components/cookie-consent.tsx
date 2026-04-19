"use client"
import { useEffect, useState } from "react"

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    setAccepted(localStorage.getItem("cookie-consent") === "accepted")
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setAccepted(true)
  }

  if (accepted) return null

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white shadow p-4 flex items-center justify-between z-50">
      <p className="text-sm">
        Utilizamos cookies para mejorar la experiencia.{' '}
        <a href="/privacidad" className="underline">
          Más información
        </a>
      </p>
      <button
        onClick={accept}
        className="bg-orange-500 text-white px-3 py-1 rounded"
      >
        Aceptar
      </button>
    </div>
  )
}
