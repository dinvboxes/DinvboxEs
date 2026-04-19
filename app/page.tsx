"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import WorldMapButton from "@/components/world-map-button"
import IOSCalendar from "@/components/ios-calendar"

export default function Home() {
  const [calendarOpen, setCalendarOpen] = useState(false)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>
        
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 text-xs uppercase tracking-widest font-mono font-medium"
                style={{ 
                  background: 'rgba(0,43,73,0.04)', 
                  border: '1px solid var(--line)',
                  color: 'var(--ink-70)'
                }}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: 'var(--orange)' }}
                />
                La forma más simple de cumplir con Hacienda
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 leading-tight"
                style={{ color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: '1.1' }}
              >
                Factura en minutos.<br/>
                Cobra antes.<br/>
                <span style={{ color: 'var(--orange)' }}>Sin líos</span> con Hacienda.
              </h1>
              
              <p className="text-lg mb-9 max-w-xl" style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}>
                Emitir facturas conforme a VERI*FACTU y a la nueva factura electrónica obligatoria ya no tiene por qué ser complicado. Dinvbox traduce la normativa por ti. Tú solo facturas.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-7">
                <a 
                  href="https://app.dinvbox.es/register" 
                  className="btn btn-primary btn-big"
                >
                  Crea tu cuenta gratis
                </a>
                <a href="https://youtu.be/N9B-kalAv2g?si=3CyPHoG3aRnddKwt" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-big">
                  Ver cómo funciona
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm font-mono tracking-wide" style={{ color: 'var(--ink-70)' }}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  Sin tarjeta
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  Sin permanencia
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  3 facturas gratis
                </span>
              </div>
            </motion.div>

            {/* Mock Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              style={{ aspectRatio: '1 / 1.05' }}
              aria-hidden="true"
            >
              {/* Main Card */}
              <div 
                className="absolute top-0 left-0 w-[85%] h-[80%] rounded-2xl p-7"
                style={{ 
                  background: 'var(--navy)', 
                  color: 'var(--cream)',
                  boxShadow: '0 30px 80px -20px rgba(0,43,73,0.35)'
                }}
              >
                <div className="font-mono text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--white-60)' }}>
                  Factura 2026-0087
                </div>
                <div className="text-xl font-bold mb-5" style={{ color: 'var(--cream)' }}>
                  Diseño web - Junio
                </div>
                
                <div className="flex justify-between py-3 text-sm" style={{ borderBottom: '1px solid var(--white-12)' }}>
                  <span style={{ color: 'var(--white-60)' }}>Cliente</span>
                  <span className="font-semibold">Estudio Marín S.L.</span>
                </div>
                <div className="flex justify-between py-3 text-sm" style={{ borderBottom: '1px solid var(--white-12)' }}>
                  <span style={{ color: 'var(--white-60)' }}>NIF</span>
                  <span className="font-semibold">B-87452910</span>
                </div>
                <div className="flex justify-between py-3 text-sm" style={{ borderBottom: '1px solid var(--white-12)' }}>
                  <span style={{ color: 'var(--white-60)' }}>Envío VERI*FACTU</span>
                  <span 
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold font-mono"
                    style={{ background: 'rgba(255,144,21,0.15)', color: 'var(--orange)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }}></span>
                    Enviado
                  </span>
                </div>
                <div className="flex justify-between py-3 text-sm">
                  <span style={{ color: 'var(--white-60)' }}>Formato</span>
                  <span className="font-semibold">Facturae 3.2.2</span>
                </div>
                
                <div className="flex justify-between items-baseline mt-5 pt-4" style={{ borderTop: '1px dashed var(--white-12)' }}>
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--white-60)' }}>Total con IVA</span>
                  <span className="text-3xl font-extrabold" style={{ letterSpacing: '-0.02em' }}>1.815,00 EUR</span>
                </div>
                
                {/* QR and Hash Footer */}
                <div className="flex justify-between items-end mt-4 pt-3" style={{ borderTop: '1px solid var(--white-12)' }}>
                  {/* QR Code */}
                  <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qr_dinvbox-5-WlMXUKUkrrRSwlMUubkeP48ZjSjX4N.png" 
                      alt="QR VERI*FACTU" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* SHA-256 Hash */}
                  <div className="w-10 h-10 flex-shrink-0 p-1 rounded" style={{ background: 'var(--white-12)' }}>
                    <div className="w-full h-full font-mono text-[5px] leading-[1.15] break-all flex items-center justify-center text-center" style={{ color: 'var(--white-60)' }}>
                      a7f3<br/>b2c1<br/>d4e5<br/>f608
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Alert Card */}
              <div 
                className="absolute bottom-0 right-0 w-[65%] rounded-2xl p-5"
                style={{ 
                  background: 'var(--orange)', 
                  color: 'var(--navy)',
                  boxShadow: '0 20px 50px -10px rgba(255,144,21,0.4)'
                }}
              >
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-mono text-xs uppercase font-bold tracking-widest">Facturito</span>
                  <span className="font-mono text-xs uppercase font-bold tracking-widest">09:42</span>
                </div>
                <div className="text-base font-bold" style={{ lineHeight: '1.3' }}>
                  IVA del 2T vence en 9 días. Llevas 4.320 EUR repercutidos.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          <span>VERI*FACTU - Real Decreto 1007/2023</span>
          <span>Factura electrónica obligatoria B2B - RD 238/2026</span>
          <span>Ley Crea y Crece - Ley 18/2022</span>
          <span>12 años de experiencia internacional</span>
          <span>México - España - Reino Unido - R. Dominicana</span>
          <span>VERI*FACTU - Real Decreto 1007/2023</span>
          <span>Factura electrónica obligatoria B2B - RD 238/2026</span>
          <span>Ley Crea y Crece - Ley 18/2022</span>
          <span>12 años de experiencia internacional</span>
          <span>México - España - Reino Unido - R. Dominicana</span>
        </div>
      </div>

      {/* Problem Section - Simplified */}
      <section className="block bg-navy">
        <div className="container">
          <div className="section-label">El problema</div>
          <h2 className="section-h" style={{ color: 'var(--cream)' }}>
            Si eres autónomo o PYME en España, <em>ya no puedes facturar como antes.</em>
          </h2>
          <p className="section-sub" style={{ color: 'var(--white-60)' }}>
            Desde 2026 conviven dos normativas que te afectarán: VERI*FACTU y la nueva factura electrónica obligatoria B2B. Word y Excel dejarán de valer. Los errores de formato se sancionan.
          </p>

          <div className="text-center mt-10">
            <Link href="/normativa" className="btn btn-outline-light btn-big">
              Conoce la normativa completa
            </Link>
          </div>
        </div>
      </section>

      {/* Promise Section - Simplified */}
      <section className="block">
        <div className="container">
          <div className="section-label">La solución</div>
          <h2 className="section-h">Tú facturas. <em>Nosotros nos encargamos del resto.</em></h2>
          <p className="section-sub">
            Dinvbox es la forma más rápida de emitir una factura legal en España y olvidarte del papeleo.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { idx: 'Cumplimiento', title: 'Conforme a la AEAT. Sin que tengas que entenderla.', desc: 'Cada factura cumple con VERI*FACTU y con el Real Decreto 238/2026. Nosotros actualizamos el sistema cada vez que cambia la norma.', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2023%20sept%202025%2C%2017_28_33-4WZFsEe1Nt4hWpUCA2DAoEjX4ieypC.png' },
              { idx: 'Velocidad', title: 'Emite tu primera factura en 2 minutos.', desc: 'Sin formación, sin manuales, sin curva de aprendizaje. Das de alta tu empresa, añades un cliente y facturas.', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VoHYT-56dalackLjlWImnSdN3kFirdm3Q5sX.jpg' },
              { idx: 'Facturito', title: 'Tu copiloto fiscal con IA.', desc: 'Pregúntale en lenguaje llano: "¿puedo deducir esto?", "¿qué IVA aplico a un cliente de Canarias?". Te responde con referencia a la norma.', img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TDJa7-5drl5Rtaq4pBHTJZCM9FVVO7QdttHI.jpg' },
            ].map((card, i) => (
              <div 
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'var(--navy)', 
                  border: '1px solid var(--navy)',
                }}
              >
                {/* Image - adjusted for proper display */}
                <div className="w-full h-40 overflow-hidden flex items-center justify-center" style={{ background: '#F9FAFB' }}>
                  <img 
                    src={card.img} 
                    alt={card.idx}
                    className={i === 1 ? "w-full h-full object-cover" : "h-full w-auto object-contain p-3"}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--orange)' }}>
                      {card.idx}
                    </span>
                    <span style={{ color: 'var(--white-40)' }}>—</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ lineHeight: '1.25', color: 'var(--cream)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/producto" className="btn btn-outline btn-big">
              Descubre todas las funcionalidades
            </Link>
          </div>
        </div>
      </section>

      {/* Calendario Fiscal */}
      <section className="block bg-cream2">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Calendario fiscal</div>
            <h2 className="section-h">Nunca más te perderás <em>una fecha clave.</em></h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: 'var(--line)' }}>
            <div className="p-6 flex items-center justify-between" style={{ borderBottom: '1px solid var(--line)' }}>
              <h3 className="text-lg font-semibold flex items-center" style={{ color: 'var(--navy)' }}>
                <Calendar className="h-5 w-5 mr-2" style={{ color: 'var(--orange)' }} />
                Próximas fechas importantes
              </h3>
              <Button variant="outline" size="sm" onClick={() => setCalendarOpen(true)}>
                Ver calendario completo
              </Button>
            </div>
            <div style={{ borderColor: 'var(--line)' }}>
              {[
                { date: "20 Julio", description: "Presentación modelo 303 (IVA) - 2T 2026", urgent: true },
                { date: "30 Julio", description: "Presentación modelo 130 (IRPF) - 2T 2026", urgent: true },
                { date: "20 Octubre", description: "Presentación modelo 303 (IVA) - 3T 2026", urgent: false },
                { date: "30 Octubre", description: "Presentación modelo 130 (IRPF) - 3T 2026", urgent: false },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50" style={{ borderBottom: '1px solid var(--line)' }}>
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${item.urgent ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}>
                      <span className="font-semibold text-sm">{item.date.split(" ")[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: 'var(--navy)' }}>{item.description}</p>
                      <p className="text-sm" style={{ color: 'var(--ink-70)' }}>{item.date}</p>
                    </div>
                  </div>
                  {item.urgent && <Badge className="bg-red-100 text-red-600 border-red-200">Próximo</Badge>}
                </div>
              ))}
            </div>
            <div className="p-4 text-center" style={{ background: 'var(--cream-2)' }}>
              <p className="text-sm" style={{ color: 'var(--ink-70)' }}>
                DINVBOX te enviará recordatorios automáticos para que nunca te pierdas una fecha importante.
              </p>
            </div>
          </div>
          
          <IOSCalendar open={calendarOpen} onClose={() => setCalendarOpen(false)} tipoContribuyente="autonomo" />
        </div>
      </section>

      {/* World Map Section */}
      <section className="block">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Cómo factura el mundo</div>
            <h2 className="section-h">Explora el mapa global <em>de facturación electrónica.</em></h2>
          </div>
          
          {/* Embedded Map */}
          <div className="mt-10 rounded-2xl overflow-hidden" style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}>
            <div className="p-6 flex flex-wrap items-center justify-between gap-4" style={{ borderBottom: '1px solid var(--white-12)' }}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--orange)' }}></div>
                  <span className="text-xs" style={{ color: 'var(--white-60)' }}>Obligatorio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#f59e0b' }}></div>
                  <span className="text-xs" style={{ color: 'var(--white-60)' }}>Parcial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#3b82f6' }}></div>
                  <span className="text-xs" style={{ color: 'var(--white-60)' }}>Voluntario</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: '#8b5cf6' }}></div>
                  <span className="text-xs" style={{ color: 'var(--white-60)' }}>Planificado</span>
                </div>
              </div>
            </div>
            <div className="relative w-full" style={{ height: 'clamp(300px, 45vh, 500px)' }}>
              <WorldMapButton embedded />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="block bg-cream2">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Voces reales</div>
            <h2 className="section-h">Quienes ya facturan <em>con Dinvbox.</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {[
              { quote: 'Llevaba años facturando con una plantilla de Excel. Cuando me dijeron que dejaría de valer, me asusté. Dinvbox me migró en una tarde. Ahora facturo más rápido que antes.', name: 'Carlos M.', role: 'Diseñador freelance - Madrid', initials: 'CM' },
              { quote: 'Lo que más valoro es el aviso antes del IVA trimestral. Tres veces me ha salvado de enviar algo incorrecto. Mi gestora me dijo que nota la diferencia cuando le mandamos los libros.', name: 'María R.', role: 'Consultora - Barcelona', initials: 'MR' },
              { quote: 'Tenemos una tienda online y facturamos 80-100 veces al mes. El plan Premium es lo más parecido a contratar a alguien a tiempo parcial por 42 EUR. No volvemos a Excel.', name: 'Ana L.', role: 'E-commerce - Valencia', initials: 'AL' },
            ].map((t, i) => (
              <div 
                key={i}
                className="rounded-2xl p-7 flex flex-col"
                style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}
              >
                <div className="text-5xl font-extrabold leading-none mb-4" style={{ color: 'var(--orange)' }}>&ldquo;</div>
                <div className="text-base flex-1 mb-6" style={{ color: 'var(--cream)', lineHeight: '1.55' }}>
                  {t.quote}
                </div>
                <div className="flex items-center gap-3.5 pt-5" style={{ borderTop: '1px solid var(--white-12)' }}>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{ background: 'var(--orange)', color: 'var(--navy)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--cream)' }}>{t.name}</div>
                    <div className="text-xs font-mono" style={{ color: 'var(--white-60)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Olvídate de los<br/>dolores de cabeza <em>con Hacienda.</em></h2>
          <p>Empieza gratis. Sin tarjeta. Sin compromiso. Emite tu primera factura en los próximos 2 minutos.</p>
          <div className="btns">
            <a href="https://app.dinvbox.es/register" className="btn btn-primary btn-big">Crear cuenta gratis</a>
            <Link href="/contacto" className="btn btn-outline-light btn-big">Hablar con un asesor</Link>
          </div>
          <div className="microline">SIN TARJETA - SIN PERMANENCIA - SOPORTE EN ESPAÑOL</div>
        </div>
      </section>
    </div>
  )
}
