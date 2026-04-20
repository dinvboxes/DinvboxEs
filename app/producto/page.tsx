"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, FileText, Shield, Zap, Bell, Users, Bot, Cloud, Lock, Smartphone } from "lucide-react"

export default function ProductoPage() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div 
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,144,21,0.09) 0%, transparent 60%)' }}
        />
        
        <div className="container">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                Producto
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                style={{ color: 'var(--navy)', letterSpacing: '-0.03em' }}
              >
                Todo lo que necesitas para facturar <span style={{ color: 'var(--orange)' }}>sin complicaciones.</span>
              </h1>
              
              <p className="text-lg mb-8" style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}>
                Dinvbox es el software de facturación electrónica diseñado para autónomos y PYMES en España. Cumple con VERI*FACTU, la factura electrónica B2B y todas las normativas vigentes.
              </p>
              
              <div className="flex flex-wrap gap-3.5">
                <a href="https://app.dinvbox.es/register" className="btn btn-primary btn-big">
                  Empieza gratis &rarr;
                </a>
                <Link href="/precios" className="btn btn-outline btn-big">
                  Ver precios
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="block">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Funcionalidades</div>
            <h2 className="section-h">Todo en un solo lugar. <em>Sin letra pequeña.</em></h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mt-10 mb-4">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
              style={{ background: 'var(--navy)', color: 'var(--cream)' }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
              style={{ background: 'var(--navy)', color: 'var(--cream)' }}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Carousel */}
          <div 
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { 
                icon: FileText, 
                idx: 'Facturacion', 
                title: 'Facturas, proformas y rectificativas.', 
                desc: 'Crea facturas en segundos con plantillas profesionales. Incluye proformas, facturas rectificativas y duplicados.' 
              },
              { 
                icon: Shield, 
                idx: 'VERI*FACTU', 
                title: 'Cumplimiento automatico con la AEAT.', 
                desc: 'Cada factura se envia a Hacienda en tiempo real. QR, firma hash y respuesta de la AEAT incluidos.' 
              },
              { 
                icon: Zap, 
                idx: 'Velocidad', 
                title: 'De 0 a factura en 2 minutos.', 
                desc: 'Sin formacion previa. Das de alta tu empresa, anades un cliente y facturas.' 
              },
              { 
                icon: Bell, 
                idx: 'Alertas', 
                title: 'Te avisamos antes de que sea tarde.', 
                desc: 'Recordatorios de IVA trimestral, IRPF y fechas clave. Facturito revisa cada dato antes de enviar.' 
              },
              { 
                icon: Users, 
                idx: 'Multiusuario', 
                title: 'Tu equipo, conectado.', 
                desc: 'Invita a colaboradores con permisos especificos. Ideal para gestorias y equipos de administracion.' 
              },
              { 
                icon: Bot, 
                idx: 'Facturito IA', 
                title: 'Tu copiloto fiscal con IA.', 
                desc: 'Preguntale en lenguaje llano: "que IVA aplico a Canarias?". Te responde con referencia a la norma.' 
              },
              { 
                icon: Cloud, 
                idx: 'Nube', 
                title: 'Accede desde cualquier lugar.', 
                desc: 'Tus facturas, clientes y datos fiscales siempre disponibles. Copias de seguridad diarias.' 
              },
              { 
                icon: Lock, 
                idx: 'Seguridad', 
                title: 'Cifrado bancario. RGPD cumplido.', 
                desc: 'Tus datos viajan y se almacenan con cifrado AES-256. Cumplimos con el RGPD.' 
              },
              { 
                icon: Smartphone, 
                idx: 'Movil', 
                title: 'Factura desde el movil.', 
                desc: 'Interfaz responsive optimizada para smartphones y tablets.' 
              },
            ].map((feature, i) => {
              const IconComponent = feature.icon
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[280px] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 snap-start"
                  style={{ 
                    background: 'var(--navy)', 
                    border: '1px solid var(--navy)',
                  }}
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'var(--orange)', color: 'var(--navy)' }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--orange)' }}>
                    {feature.idx}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ lineHeight: '1.25', color: 'var(--cream)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="block bg-navy">
        <div className="container">
          <div className="section-label">Cómo funciona</div>
          <h2 className="section-h" style={{ color: 'var(--cream)' }}>
            Tres pasos. <em>Sin complicaciones.</em>
          </h2>
          <p className="section-sub" style={{ color: 'var(--white-60)' }}>
            No necesitas formación ni conocimientos técnicos. Si sabes usar el correo electrónico, sabes usar Dinvbox.
          </p>

          <div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: 'var(--white-12)', border: '1px solid var(--white-12)' }}
          >
            {[
              { 
                num: '01', 
                title: 'Crea tu cuenta gratis.', 
                desc: 'Regístrate con tu email. Añade los datos de tu empresa o actividad. En menos de 5 minutos estás listo para facturar.' 
              },
              { 
                num: '02', 
                title: 'Emite tu primera factura.', 
                desc: 'Añade un cliente, describe el servicio o producto, y pulsa enviar. Dinvbox se encarga del formato, la firma y el envío a la AEAT.' 
              },
              { 
                num: '03', 
                title: 'Olvídate del papeleo.', 
                desc: 'Tus facturas quedan almacenadas, el IVA se calcula automáticamente y recibes alertas antes de cada fecha límite.' 
              },
            ].map((step, i) => (
              <div key={i} className="p-9" style={{ background: 'var(--navy)' }}>
                <div className="text-6xl font-extrabold mb-5" style={{ color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3.5" style={{ color: 'var(--cream)', lineHeight: '1.2' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="block bg-cream2">
        <div className="container">
          <div className="section-label">En 30 segundos</div>
          <h2 className="section-h">¿Es Dinvbox para ti? <em>Tres preguntas rápidas.</em></h2>
          <p className="section-sub">Sin comerciales, sin llamadas. Tú decides.</p>

          <div 
            className="mt-14 flex flex-col gap-px rounded-2xl overflow-hidden"
            style={{ background: 'var(--line)', border: '1px solid var(--line)' }}
          >
            {[
              { 
                n: '01', 
                q: '¿Emites facturas a otros autónomos o empresas en España?', 
                a: 'Entonces estarás obligado a usar VERI*FACTU en <strong>Enero del 2027</strong> y factura electrónica B2B. <strong>Julio de 2027</strong> si tu facturación supera los 8 millones de euros; <strong>julio de 2028</strong> en el resto de casos. Dinvbox ya está listo para cuando llegue el día.' 
              },
              { 
                n: '02', 
                q: '¿Usas Word, Excel o PDF simple para facturar?', 
                a: 'Esos formatos <strong>dejarán de ser válidos</strong> cuando el VERIFACTU y la factura electrónica B2B entren en vigor. Necesitarás un sistema estructurado (Facturae, UBL o XML CEFACT). Mejor migrar antes, que bajo presión.' 
              },
              { 
                n: '03', 
                q: '¿Prefieres la solución pública gratuita de la AEAT?', 
                a: 'Es una opción válida si emites muy pocas facturas y no te importa gestionar la norma por tu cuenta. <strong>No incluye alertas, calendario fiscal, soporte ni IA.</strong> Si valoras tu tiempo, Dinvbox te sale mucho más barato que las horas que pierdes.' 
              },
            ].map((step, i) => (
              <div 
                key={i}
                className="grid grid-cols-1 md:grid-cols-[60px_1fr_2fr] gap-4 md:gap-8 p-7 md:p-9 transition-colors hover:bg-[var(--cream-2)]"
                style={{ background: '#FFFFFF' }}
              >
                <div className="text-5xl font-extrabold" style={{ color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                  {step.n}
                </div>
                <div className="text-xl font-bold" style={{ color: 'var(--navy)', lineHeight: '1.25' }}>
                  {step.q}
                </div>
                <div 
                  className="text-base" 
                  style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}
                  dangerouslySetInnerHTML={{ __html: step.a }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="block">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Integraciones</div>
            <h2 className="section-h">Se conecta con lo que <em>ya usas.</em></h2>
          </div>

          <div className="mt-14 flex justify-center">
            <a 
              href="https://documenter.getpostman.com/view/12831937/2sB3HnJeY7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: 'var(--navy)', border: '1px solid var(--navy)', minWidth: '280px' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: 'var(--orange)', color: 'var(--navy)' }}
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.5 12L10.5 9V15L14.5 12ZM21 3H3C1.89 3 1 3.89 1 5V19C1 20.11 1.89 21 3 21H21C22.11 21 23 20.11 23 19V5C23 3.89 22.11 3 21 3ZM21 19H3V5H21V19Z"/>
                </svg>
              </div>
              <div className="font-bold text-lg mb-2" style={{ color: 'var(--cream)' }}>API REST</div>
              <p className="text-sm" style={{ color: 'var(--white-60)' }}>
                Documentacion completa para integrar Dinvbox con tu sistema.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>¿Listo para facturar<br/><em>sin complicaciones?</em></h2>
          <p>Empieza gratis. Sin tarjeta. Sin compromiso. Emite tu primera factura en los próximos 2 minutos.</p>
          <div className="btns">
            <a href="https://app.dinvbox.es/register" className="btn btn-primary btn-big">Crear cuenta gratis &rarr;</a>
            <Link href="/precios" className="btn btn-outline-light btn-big">Ver planes y precios</Link>
          </div>
          <div className="microline">SIN TARJETA - SIN PERMANENCIA - SOPORTE EN ESPAÑOL</div>
        </div>
      </section>
    </div>
  )
}
