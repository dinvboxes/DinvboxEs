"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import WorldMap from "@/components/world-map"

// Datos actualizados 2026 para la vista previa del mapa
const countryData = {
  // America Latina
  MX: {
    name: "Mexico",
    status: "obligatorio",
  },
  CO: {
    name: "Colombia",
    status: "obligatorio",
  },
  BR: {
    name: "Brasil",
    status: "obligatorio",
  },
  AR: {
    name: "Argentina",
    status: "obligatorio",
  },
  CL: {
    name: "Chile",
    status: "obligatorio",
  },
  PE: {
    name: "Peru",
    status: "obligatorio",
  },
  EC: {
    name: "Ecuador",
    status: "obligatorio",
  },
  DO: {
    name: "Republica Dominicana",
    status: "obligatorio",
  },
  // Europa
  ES: {
    name: "Espana",
    status: "planificado", // VERIFACTU obligatorio desde 2027
  },
  DE: {
    name: "Alemania",
    status: "planificado", // Obligatorio B2B desde 2027
  },
  FR: {
    name: "Francia",
    status: "planificado", // PPF obligatorio 2026
  },
  IT: {
    name: "Italia",
    status: "obligatorio",
  },
  PL: {
    name: "Polonia",
    status: "planificado",
  },
  RO: {
    name: "Rumania",
    status: "obligatorio",
  },
  PT: {
    name: "Portugal",
    status: "parcial",
  },
  BE: {
    name: "Belgica",
    status: "planificado",
  },
  // Asia y Oceania
  IN: {
    name: "India",
    status: "obligatorio",
  },
  CN: {
    name: "China",
    status: "obligatorio",
  },
  AU: {
    name: "Australia",
    status: "planificado",
  },
  SG: {
    name: "Singapur",
    status: "obligatorio",
  },
  MY: {
    name: "Malasia",
    status: "obligatorio",
  },
  PH: {
    name: "Filipinas",
    status: "obligatorio",
  },
  // Africa y Medio Oriente
  EG: {
    name: "Egipto",
    status: "obligatorio",
  },
  SA: {
    name: "Arabia Saudita",
    status: "obligatorio",
  },
  AE: {
    name: "Emiratos Arabes Unidos",
    status: "obligatorio",
  },
  ZA: {
    name: "Sudafrica",
    status: "parcial",
  },
  KE: {
    name: "Kenia",
    status: "obligatorio",
  },
}

export default function WorldMapButton({ embedded = false }: { embedded?: boolean }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const handleCountryClick = (countryCode: string) => {
    // Navegar a la página del mapa con el país seleccionado
    if (!embedded) setIsDialogOpen(false)
    router.push(`/mapa-mundial?country=${countryCode}`)
  }

  // If embedded, just render the map directly
  if (embedded) {
    return (
      <div className="w-full h-full">
        <WorldMap
          onCountryClick={handleCountryClick}
          countryData={countryData}
          disablePanning={true}
          showZoomControls={true}
        />
      </div>
    )
  }

  return (
    <>
      <motion.button
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        style={{ background: 'var(--orange)' }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{
          rotate: { repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" },
          scale: { duration: 0.2 },
        }}
        onClick={() => setIsDialogOpen(true)}
        aria-label="Ver mapa mundial de facturación electrónica"
      >
        <div className="relative w-8 h-8">
          {/* Líneas del globo terráqueo */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full text-white"
          >
            {/* Líneas horizontales */}
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M12 2C14.5 4.5 16 8.5 16 12C16 15.5 14.5 19.5 12 22C9.5 19.5 8 15.5 8 12C8 8.5 9.5 4.5 12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Tooltip que aparece al hacer hover */}
        <div className="absolute right-16 bg-white px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Explorar facturación global
        </div>
      </motion.button>

      {/* Diálogo con vista previa del mapa */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[95vw] max-w-5xl p-0 overflow-hidden">
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--navy)' }}>¿Cómo Factura el Mundo?</h2>
            <p className="text-sm md:text-base" style={{ color: 'var(--ink-70)' }}>
              Explora el estado de la facturación electrónica en diferentes países. Haz clic en un país para más detalles.
            </p>
          </div>

          <div className="relative w-full" style={{ height: 'clamp(250px, 50vh, 450px)' }}>
            <div className="absolute inset-0 overflow-hidden">
              <WorldMap
                onCountryClick={handleCountryClick}
                countryData={countryData}
                disablePanning={true}
                showZoomControls={true}
              />
            </div>
          </div>

          <div className="p-3 md:p-4" style={{ background: 'var(--cream-2)' }}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--orange)' }}></div>
                  <span className="text-xs" style={{ color: 'var(--ink-70)' }}>Obligatorio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#f59e0b' }}></div>
                  <span className="text-xs" style={{ color: 'var(--ink-70)' }}>Parcial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#3b82f6' }}></div>
                  <span className="text-xs" style={{ color: 'var(--ink-70)' }}>Voluntario</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#8b5cf6' }}></div>
                  <span className="text-xs" style={{ color: 'var(--ink-70)' }}>Planificado</span>
                </div>
              </div>

              <button
                className="text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
                style={{ background: 'var(--navy)' }}
                onClick={() => {
                  setIsDialogOpen(false)
                  router.push("/mapa-mundial")
                }}
              >
                Ver mapa completo
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
