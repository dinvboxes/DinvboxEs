// Datos del calendario fiscal 2026
// Fuente: Calendario del contribuyente 2026 publicado por la AEAT
// https://sede.agenciatributaria.gob.es/Sede/ayuda/calendario-contribuyente/calendario-contribuyente-2026.html
// Última actualización: abril 2026
// IMPORTANTE: Calendario orientativo. Los vencimientos pueden ajustarse por festivos autonómicos/locales.
// Validar siempre con la AEAT antes de presentar.

export type TipoContribuyente = "autonomos" | "sociedades"
export type TipoModelo =
  | "111" | "115" | "123" | "130" | "131" | "303" | "349" | "390"
  | "180" | "190" | "193" | "347" | "720" | "721" | "100" | "714"
  | "102" | "202" | "200" | "036" | "184" | "172" | "173"

export interface EventoFiscal {
  id: string
  fecha: Date
  descripcion: string
  modelo: TipoModelo
  tipo: TipoContribuyente
  urgente?: boolean
}

const crearFecha = (dia: number, mes: number, año: number): Date => {
  return new Date(año, mes - 1, dia)
}

export const eventosFiscales: EventoFiscal[] = [
  // =========================================
  // AUTÓNOMOS - 2026
  // =========================================

  // Enero 2026 - Cierre 4T 2025
  {
    id: "a-111-115-4t-2025",
    fecha: crearFecha(20, 1, 2026),
    descripcion: "Modelos 111 y 115 – Retenciones IRPF 4T 2025",
    modelo: "111",
    tipo: "autonomos",
  },
  {
    id: "a-130-131-4t-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelos 130 y 131 – Pago fraccionado IRPF 4T 2025",
    modelo: "130",
    tipo: "autonomos",
  },
  {
    id: "a-303-4t-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelo 303 – IVA 4T 2025",
    modelo: "303",
    tipo: "autonomos",
  },
  {
    id: "a-349-4t-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 4T 2025",
    modelo: "349",
    tipo: "autonomos",
  },
  {
    id: "a-390-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelo 390 – Resumen anual IVA 2025",
    modelo: "390",
    tipo: "autonomos",
  },
  // Nota AEAT: 31 enero 2026 cae en sábado, se traslada al 2 de febrero
  {
    id: "a-180-2025",
    fecha: crearFecha(2, 2, 2026),
    descripcion: "Modelo 180 – Resumen anual retenciones alquileres 2025",
    modelo: "180",
    tipo: "autonomos",
  },
  {
    id: "a-190-2025",
    fecha: crearFecha(2, 2, 2026),
    descripcion: "Modelo 190 – Resumen anual retenciones IRPF 2025",
    modelo: "190",
    tipo: "autonomos",
  },
  {
    id: "a-193-2025",
    fecha: crearFecha(2, 2, 2026),
    descripcion: "Modelo 193 – Resumen anual rendimientos capital mobiliario 2025",
    modelo: "193",
    tipo: "autonomos",
  },

  // Febrero 2026
  // Nota AEAT: 28 febrero 2026 cae en sábado, se traslada al 2 de marzo
  {
    id: "a-347-2025",
    fecha: crearFecha(2, 3, 2026),
    descripcion: "Modelo 347 – Operaciones con terceros 2025",
    modelo: "347",
    tipo: "autonomos",
  },

  // Marzo 2026
  {
    id: "a-720-2025",
    fecha: crearFecha(31, 3, 2026),
    descripcion: "Modelo 720 – Bienes en el extranjero 2025",
    modelo: "720",
    tipo: "autonomos",
  },
  {
    id: "a-721-2025",
    fecha: crearFecha(31, 3, 2026),
    descripcion: "Modelo 721 – Criptomonedas en el extranjero 2025",
    modelo: "721",
    tipo: "autonomos",
  },

  // Abril 2026 - 1T 2026
  {
    id: "a-111-115-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelos 111 y 115 – Retenciones IRPF 1T 2026",
    modelo: "111",
    tipo: "autonomos",
    urgente: true,
  },
  {
    id: "a-130-131-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelos 130 y 131 – Pago fraccionado IRPF 1T 2026",
    modelo: "130",
    tipo: "autonomos",
    urgente: true,
  },
  {
    id: "a-303-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelo 303 – IVA 1T 2026",
    modelo: "303",
    tipo: "autonomos",
    urgente: true,
  },
  {
    id: "a-349-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 1T 2026",
    modelo: "349",
    tipo: "autonomos",
    urgente: true,
  },

  // Campaña Renta 2025 (se presenta en 2026)
  {
    id: "a-renta-inicio-2025",
    fecha: crearFecha(8, 4, 2026),
    descripcion: "Inicio campaña Renta 2025 – Presentación por Internet (modelo 100)",
    modelo: "100",
    tipo: "autonomos",
  },
  {
    id: "a-domiciliacion-renta-2025",
    fecha: crearFecha(25, 6, 2026),
    descripcion: "Fin de plazo domiciliación Renta y Patrimonio 2025",
    modelo: "100",
    tipo: "autonomos",
  },
  {
    id: "a-100-2025",
    fecha: crearFecha(30, 6, 2026),
    descripcion: "Modelo 100 – Declaración IRPF 2025 (fin campaña)",
    modelo: "100",
    tipo: "autonomos",
  },
  {
    id: "a-714-2025",
    fecha: crearFecha(30, 6, 2026),
    descripcion: "Modelo 714 – Declaración Patrimonio 2025",
    modelo: "714",
    tipo: "autonomos",
  },

  // Julio 2026 - 2T 2026
  {
    id: "a-111-115-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelos 111 y 115 – Retenciones IRPF 2T 2026",
    modelo: "111",
    tipo: "autonomos",
  },
  {
    id: "a-130-131-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelos 130 y 131 – Pago fraccionado IRPF 2T 2026",
    modelo: "130",
    tipo: "autonomos",
  },
  {
    id: "a-303-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelo 303 – IVA 2T 2026",
    modelo: "303",
    tipo: "autonomos",
  },
  {
    id: "a-349-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 2T 2026",
    modelo: "349",
    tipo: "autonomos",
  },

  // Octubre 2026 - 3T 2026
  {
    id: "a-111-115-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelos 111 y 115 – Retenciones IRPF 3T 2026",
    modelo: "111",
    tipo: "autonomos",
  },
  {
    id: "a-130-131-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelos 130 y 131 – Pago fraccionado IRPF 3T 2026",
    modelo: "130",
    tipo: "autonomos",
  },
  {
    id: "a-303-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelo 303 – IVA 3T 2026",
    modelo: "303",
    tipo: "autonomos",
  },
  {
    id: "a-349-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 3T 2026",
    modelo: "349",
    tipo: "autonomos",
  },

  // Noviembre 2026
  {
    id: "a-102-2026",
    fecha: crearFecha(5, 11, 2026),
    descripcion: "Modelo 102 – Segundo pago fraccionado Renta (si fraccionó)",
    modelo: "102",
    tipo: "autonomos",
  },

  // =========================================
  // SOCIEDADES - 2026
  // =========================================

  // Enero 2026 - Cierre 4T 2025
  {
    id: "s-111-115-123-4t-2025",
    fecha: crearFecha(20, 1, 2026),
    descripcion: "Modelos 111, 115, 123 – Retenciones 4T 2025",
    modelo: "111",
    tipo: "sociedades",
  },
  {
    id: "s-303-4t-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelo 303 – IVA 4T 2025",
    modelo: "303",
    tipo: "sociedades",
  },
  {
    id: "s-349-4t-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 4T 2025",
    modelo: "349",
    tipo: "sociedades",
  },
  {
    id: "s-390-2025",
    fecha: crearFecha(30, 1, 2026),
    descripcion: "Modelo 390 – Resumen anual IVA 2025",
    modelo: "390",
    tipo: "sociedades",
  },
  {
    id: "s-180-190-193-2025",
    fecha: crearFecha(2, 2, 2026),
    descripcion: "Modelos 180, 190, 193 – Resúmenes anuales retenciones 2025",
    modelo: "180",
    tipo: "sociedades",
  },

  // Febrero 2026
  {
    id: "s-347-2025",
    fecha: crearFecha(2, 3, 2026),
    descripcion: "Modelo 347 – Operaciones con terceros 2025",
    modelo: "347",
    tipo: "sociedades",
  },
  {
    id: "s-036-2026",
    fecha: crearFecha(2, 3, 2026),
    descripcion: "Modelo 036 – Opción/renuncia cálculo pagos fraccionados IS",
    modelo: "036",
    tipo: "sociedades",
  },

  // Marzo 2026
  {
    id: "s-720-2025",
    fecha: crearFecha(31, 3, 2026),
    descripcion: "Modelo 720 – Bienes en el extranjero 2025",
    modelo: "720",
    tipo: "sociedades",
  },
  {
    id: "s-721-2025",
    fecha: crearFecha(31, 3, 2026),
    descripcion: "Modelo 721 – Criptomonedas en el extranjero 2025",
    modelo: "721",
    tipo: "sociedades",
  },

  // Abril 2026 - 1T + Pago Fraccionado IS 1P
  {
    id: "s-202-1p-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelo 202 – Pago fraccionado IS (1.º plazo)",
    modelo: "202",
    tipo: "sociedades",
    urgente: true,
  },
  {
    id: "s-111-115-123-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelos 111, 115, 123 – Retenciones 1T 2026",
    modelo: "111",
    tipo: "sociedades",
    urgente: true,
  },
  {
    id: "s-303-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelo 303 – IVA 1T 2026",
    modelo: "303",
    tipo: "sociedades",
    urgente: true,
  },
  {
    id: "s-349-1t-2026",
    fecha: crearFecha(20, 4, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 1T 2026",
    modelo: "349",
    tipo: "sociedades",
    urgente: true,
  },

  // Julio 2026 - 2T + IS anual
  {
    id: "s-111-115-123-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelos 111, 115, 123 – Retenciones 2T 2026",
    modelo: "111",
    tipo: "sociedades",
  },
  {
    id: "s-303-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelo 303 – IVA 2T 2026",
    modelo: "303",
    tipo: "sociedades",
  },
  {
    id: "s-349-2t-2026",
    fecha: crearFecha(20, 7, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 2T 2026",
    modelo: "349",
    tipo: "sociedades",
  },
  // Nota AEAT: 25 julio 2026 cae en sábado, IS se traslada al 27 julio
  {
    id: "s-200-2025",
    fecha: crearFecha(27, 7, 2026),
    descripcion: "Modelo 200 – Impuesto sobre Sociedades 2025",
    modelo: "200",
    tipo: "sociedades",
  },

  // Octubre 2026 - 3T + Pago Fraccionado IS 2P
  {
    id: "s-202-2p-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelo 202 – Pago fraccionado IS (2.º plazo)",
    modelo: "202",
    tipo: "sociedades",
  },
  {
    id: "s-111-115-123-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelos 111, 115, 123 – Retenciones 3T 2026",
    modelo: "111",
    tipo: "sociedades",
  },
  {
    id: "s-303-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelo 303 – IVA 3T 2026",
    modelo: "303",
    tipo: "sociedades",
  },
  {
    id: "s-349-3t-2026",
    fecha: crearFecha(20, 10, 2026),
    descripcion: "Modelo 349 – Operaciones intracomunitarias 3T 2026",
    modelo: "349",
    tipo: "sociedades",
  },

  // Diciembre 2026 - Pago Fraccionado IS 3P
  {
    id: "s-202-3p-2026",
    fecha: crearFecha(21, 12, 2026),
    descripcion: "Modelo 202 – Pago fraccionado IS (3.º plazo)",
    modelo: "202",
    tipo: "sociedades",
  },
]
