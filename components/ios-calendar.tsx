"use client"

import { useState, useEffect } from "react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"
import { es } from "date-fns/locale"
import { ChevronLeft, ChevronRight, CalendarIcon, List, Grid, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Importamos los tipos y datos del calendario fiscal
import { eventosFiscales, type EventoFiscal, type TipoContribuyente } from "@/components/calendario-fiscal-data"

// Componente para un día del calendario
const CalendarDay = ({
  day,
  currentMonth,
  selectedDate,
  setSelectedDate,
  eventos,
}: {
  day: Date
  currentMonth: Date
  selectedDate: Date
  setSelectedDate: (date: Date) => void
  eventos: EventoFiscal[]
}) => {
  const isCurrentMonth = isSameMonth(day, currentMonth)
  const isSelected = isSameDay(day, selectedDate)
  const isTodayDate = isToday(day)

  // Verificar si hay eventos para este día
  const eventosDelDia = eventos.filter((evento) => isSameDay(evento.fecha, day))

  const hasUrgentEvent = eventosDelDia.some((evento) => evento.urgente)

  return (
    <div
      className={`h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full mx-auto text-xs sm:text-sm
        ${!isCurrentMonth ? "text-gray-300" : ""}
        ${isSelected ? "text-white" : ""}
        ${isTodayDate && !isSelected ? "border" : ""}
        ${isCurrentMonth && !isSelected ? "hover:bg-gray-100 cursor-pointer" : ""}
      `}
      style={{
        background: isSelected ? 'var(--orange)' : undefined,
        borderColor: isTodayDate && !isSelected ? 'var(--orange)' : undefined,
      }}
      onClick={() => (isCurrentMonth ? setSelectedDate(day) : null)}
    >
      <div className="relative">
        {day.getDate()}
        {eventosDelDia.length > 0 && !isSelected && (
          <div
            className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full"
            style={{ background: hasUrgentEvent ? '#dc2626' : 'var(--orange)' }}
          ></div>
        )}
      </div>
    </div>
  )
}

// Componente para un evento en la vista de agenda
const EventoItem = ({ evento }: { evento: EventoFiscal }) => {
  return (
    <div
      className="p-3 rounded-lg mb-2 border-l-4"
      style={{ 
        borderLeftColor: evento.urgente ? '#dc2626' : 'var(--orange)',
        background: evento.urgente ? '#fef2f2' : 'rgba(255,144,21,0.1)'
      }}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm sm:text-base break-words">{evento.descripcion}</p>
          <p className="text-xs sm:text-sm text-gray-500">Modelo {evento.modelo}</p>
        </div>
        {evento.urgente && <Badge className="bg-red-100 text-red-600 border-red-200 flex-shrink-0 text-xs">Urgente</Badge>}
      </div>
    </div>
  )
}

// Componente principal del calendario estilo iOS
export default function IOSCalendar({
  open,
  onClose,
  tipoContribuyente: initialTipoContribuyente = "autonomos",
}: {
  open: boolean
  onClose: () => void
  tipoContribuyente?: TipoContribuyente
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"calendar" | "agenda">("calendar")
  const [tipoContribuyente, setTipoContribuyente] = useState<TipoContribuyente>(initialTipoContribuyente)

  // Resetear la fecha seleccionada cuando se abre el modal
  useEffect(() => {
    if (open) {
      setSelectedDate(new Date())
      setCurrentMonth(new Date())
    }
  }, [open])

  // Filtrar eventos por tipo de contribuyente
  const eventosFiltrados = eventosFiscales.filter((evento) => evento.tipo === tipoContribuyente)

  // Obtener eventos para la fecha seleccionada
  const eventosDelDia = eventosFiltrados.filter((evento) => isSameDay(evento.fecha, selectedDate))

  // Obtener eventos para el mes actual
  const eventosDelMes = eventosFiltrados.filter((evento) => isSameMonth(evento.fecha, currentMonth))

  // Navegar al mes anterior
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Navegar al mes siguiente
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  // Obtener los días del mes actual
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Obtener el primer día de la semana (lunes = 1, domingo = 0)
  const startDay = monthStart.getDay() === 0 ? 6 : monthStart.getDay() - 1

  // Crear un array con los días de la semana
  const weekDays = ["L", "M", "X", "J", "V", "S", "D"]

  // Crear filas para el calendario
  const rows = []
  let days = []

  // Agregar días vacíos al principio
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="h-8 w-8 sm:h-10 sm:w-10"></div>)
  }

  // Agregar los días del mes
  for (let i = 0; i < daysInMonth.length; i++) {
    days.push(
      <CalendarDay
        key={daysInMonth[i].toString()}
        day={daysInMonth[i]}
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        eventos={eventosFiltrados}
      />,
    )

    // Si es el final de la semana o el último día del mes
    if ((startDay + i + 1) % 7 === 0 || i === daysInMonth.length - 1) {
      rows.push(
        <div key={`row-${i}`} className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-1 sm:mb-2">
          {days}
        </div>,
      )
      days = []
    }
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-3xl w-[95vw] sm:w-auto p-0 overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-3 sm:p-4 flex-shrink-0" style={{ background: 'var(--navy)' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-xl font-bold text-white flex items-center min-w-0">
              <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
              <span className="truncate">Calendario Fiscal 2026</span>
            </h2>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center">
              <Tabs
                defaultValue={tipoContribuyente}
                onValueChange={(value) => setTipoContribuyente(value as TipoContribuyente)}
                className="w-full sm:w-auto"
              >
                <TabsList className="bg-gray-100 w-full sm:w-auto">
                  <TabsTrigger
                    value="autonomos"
                    className="data-[state=active]:text-white flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    Autónomos
                  </TabsTrigger>
                  <TabsTrigger
                    value="sociedades"
                    className="data-[state=active]:text-white flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    Sociedades
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 sm:h-10 sm:w-10 ${viewMode === "calendar" ? "bg-gray-100" : ""}`}
                onClick={() => setViewMode("calendar")}
                aria-label="Vista de calendario"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 sm:h-10 sm:w-10 ${viewMode === "agenda" ? "bg-gray-100" : ""}`}
                onClick={() => setViewMode("agenda")}
                aria-label="Vista de agenda"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {viewMode === "calendar" ? (
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-2 sm:p-4 border-b border-gray-200">
                <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8 sm:h-10 sm:w-10">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="font-medium text-sm sm:text-base">
                  {format(currentMonth, "MMMM yyyy", { locale: es }).charAt(0).toUpperCase() +
                    format(currentMonth, "MMMM yyyy", { locale: es }).slice(1)}
                </h3>
                <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8 sm:h-10 sm:w-10">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-2 sm:p-4">
                {/* Días de la semana */}
                <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-[10px] sm:text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Días del mes */}
                {rows}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
              <h3 className="font-medium mb-4 text-sm sm:text-base">
                Eventos del mes:{" "}
                {format(currentMonth, "MMMM yyyy", { locale: es }).charAt(0).toUpperCase() +
                  format(currentMonth, "MMMM yyyy", { locale: es }).slice(1)}
              </h3>

              <div className="space-y-4">
                {eventosDelMes.length > 0 ? (
                  eventosDelMes
                    .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
                    .map((evento) => (
                      <div key={evento.id} className="flex items-start">
                        <div className="w-10 sm:w-12 text-center mr-3 sm:mr-4 flex-shrink-0">
                          <div className="font-bold text-sm sm:text-base">{format(evento.fecha, "d")}</div>
                          <div className="text-[10px] sm:text-xs text-gray-500">{format(evento.fecha, "EEE", { locale: es })}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <EventoItem evento={evento} />
                        </div>
                      </div>
                    ))
                ) : (
                  <p className="text-center text-gray-500 py-4 text-sm">No hay eventos este mes</p>
                )}
              </div>
            </div>
          )}

          {/* Panel lateral con eventos del día seleccionado */}
          <div className="mt-4">
            <h3 className="font-medium mb-2 flex items-center text-sm sm:text-base">
              <CalendarIcon className="h-4 w-4 mr-1 flex-shrink-0" style={{ color: 'var(--orange)' }} />
              <span className="truncate">Eventos para {format(selectedDate, "d MMMM yyyy", { locale: es })}</span>
            </h3>

            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 max-h-[200px] overflow-y-auto">
              {eventosDelDia.length > 0 ? (
                eventosDelDia.map((evento) => <EventoItem key={evento.id} evento={evento} />)
              ) : (
                <p className="text-center text-gray-500 py-4 text-sm">No hay eventos para este día</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-3 sm:p-4 border-t border-gray-200 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <div className="flex items-center mr-4">
                <div className="h-3 w-3 rounded-full mr-1" style={{ background: '#dc2626' }}></div>
                <span>Urgente</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full mr-1" style={{ background: 'var(--orange)' }}></div>
                <span>Normal</span>
              </div>
            </div>
            <Button variant="default" size="sm" style={{ background: 'var(--orange)' }} className="hover:opacity-90 w-full sm:w-auto" onClick={onClose}>
              Cerrar
            </Button>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-500 italic leading-relaxed">
            {"Calendario orientativo basado en el Calendario del Contribuyente 2026 de la AEAT. Los vencimientos pueden ajustarse por festivos autonómicos o locales. Consulta siempre la "}
            <a 
              href="https://sede.agenciatributaria.gob.es/Sede/calendario-contribuyente.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              AEAT
            </a>
            {" antes de presentar."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
