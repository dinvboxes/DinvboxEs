"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    sub: 'Sin tarjeta - Sin permanencia',
    desc: 'Para probar antes de comprometerte.',
    features: ['3 envíos VERI*FACTU', '5 catálogos', 'Multiempresa', 'Sellos digitales'],
    featured: false,
  },
  {
    name: 'Básico',
    price: '12',
    sub: '10 envíos/mes',
    desc: 'Autónomo con facturación regular.',
    features: ['10 envíos VERI*FACTU', '50 catálogos', 'Envío por email', 'Proformas y rectificativas'],
    featured: false,
  },
  {
    name: 'Estándar',
    price: '30',
    sub: '30 envíos/mes',
    desc: 'Pequeña empresa en crecimiento.',
    features: ['30 envíos VERI*FACTU', '100 catálogos', 'Multiusuario', 'Validación XML'],
    featured: true,
    badge: 'Más elegido',
  },
  {
    name: 'Premium',
    price: '42',
    sub: '50 envíos/mes',
    desc: 'Empresa con alto volumen.',
    features: ['50 envíos VERI*FACTU', 'Catálogos ilimitados', 'Facturas recibidas', 'Conexión Dropbox'],
    featured: false,
  },
  {
    name: 'Empresarial',
    price: '75',
    sub: '100 envíos/mes',
    desc: 'PYMES consolidadas.',
    features: ['100 envíos VERI*FACTU', 'Catálogos ilimitados', 'Multiusuario - Multisucursal', 'Soporte prioritario'],
    featured: false,
  },
  {
    name: 'Corporativo',
    price: '150+',
    sub: 'Envíos ilimitados',
    desc: 'Grandes volúmenes. API incluida.',
    features: ['Envíos ilimitados', 'API REST completa', 'SLA dedicado', 'Soporte técnico especializado'],
    featured: false,
  },
]

const faqs = [
  {
    q: '¿Qué es un envío VERI*FACTU?',
    a: 'Un envío VERI*FACTU es el proceso de transmisión de datos de facturación a la AEAT en cumplimiento de la normativa española. Cada factura que emites requiere un envío.',
  },
  {
    q: '¿Los envíos caducan?',
    a: 'No, los envíos que adquieres no caducan. Puedes utilizarlos cuando los necesites sin preocuparte por fechas límite.',
  },
  {
    q: '¿Puedo cambiar de plan en cualquier momento?',
    a: 'Sí, puedes cambiar de plan o adquirir más envíos en cualquier momento según tus necesidades. No hay penalizaciones.',
  },
  {
    q: '¿Hay costos ocultos?',
    a: 'No. El precio que ves es el precio que pagas. No hay cargos adicionales ni sorpresas en tu factura.',
  },
]

export default function PreciosPageClient() {
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
      {/* Hero + Pricing Carousel Combined */}
      <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
        <div className="container">
          {/* Hero Content - Centered */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Precios</div>
              <h1 className="section-h">Menos que una multa. <em>Mucho menos que tu tiempo.</em></h1>
              <p className="section-sub">
                El plan Basico cuesta <strong style={{ color: 'var(--navy)' }}>12 EUR.</strong> Una sancion por facturacion incorrecta parte de los cientos de euros. <strong style={{ color: 'var(--navy)' }}>Tu decides.</strong>
              </p>
            </motion.div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mb-4">
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
            className="flex items-start gap-5 overflow-x-auto pb-6 pt-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex-shrink-0 w-[280px] min-h-[360px] rounded-2xl p-6 flex flex-col relative transition-all duration-300 hover:-translate-y-1 snap-start"
                style={{ 
                  background: plan.featured ? 'var(--orange)' : 'var(--navy)', 
                  color: 'var(--cream)',
                  border: `1px solid ${plan.featured ? 'var(--orange)' : 'var(--navy)'}`,
                }}
              >
                {plan.badge && (
                  <span 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold whitespace-nowrap z-10"
                    style={{ background: 'var(--navy)', color: 'var(--cream)' }}
                  >
                    {plan.badge}
                  </span>
                )}
                <div className="font-mono text-xs uppercase tracking-widest mb-3.5" style={{ color: 'var(--white-60)' }}>
                  {plan.name}
                </div>
                <div className="text-4xl font-extrabold" style={{ letterSpacing: '-0.03em', color: 'var(--cream)' }}>
                  {plan.price}<span className="text-sm font-medium ml-1" style={{ color: 'var(--white-60)' }}>EUR</span>
                </div>
                <div className="text-xs font-mono mt-1 mb-4" style={{ color: 'var(--white-60)' }}>
                  {plan.sub}
                </div>
                <div className="text-sm mb-5 pb-5" style={{ color: 'var(--white-60)', borderBottom: '1px solid var(--white-12)', lineHeight: '1.5' }}>
                  {plan.desc}
                </div>
                <ul className="flex-1 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm py-1" style={{ lineHeight: '1.4', color: 'var(--white-80)' }}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.featured ? 'var(--navy)' : 'var(--orange)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://app.dinvbox.es/register" 
                  className="btn w-full text-sm py-2.5"
                  style={{ 
                    background: plan.featured ? 'var(--navy)' : 'var(--orange)', 
                    color: plan.featured ? 'var(--cream)' : 'var(--navy)',
                    borderRadius: '8px'
                  }}
                >
                  {plan.featured ? 'Elegir' : 'Comenzar'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="block bg-cream2">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Comparativa</div>
            <h2 className="section-h">¿Qué incluye <em>cada plan?</em></h2>
          </div>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: '800px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line)' }}>
                  <th className="text-left py-4 px-4 font-bold" style={{ color: 'var(--navy)' }}>Característica</th>
                  <th className="text-center py-4 px-2 font-mono text-xs uppercase" style={{ color: 'var(--ink-70)' }}>Free</th>
                  <th className="text-center py-4 px-2 font-mono text-xs uppercase" style={{ color: 'var(--ink-70)' }}>Básico</th>
                  <th className="text-center py-4 px-2 font-mono text-xs uppercase" style={{ color: 'var(--orange)' }}>Estándar</th>
                  <th className="text-center py-4 px-2 font-mono text-xs uppercase" style={{ color: 'var(--ink-70)' }}>Premium</th>
                  <th className="text-center py-4 px-2 font-mono text-xs uppercase" style={{ color: 'var(--ink-70)' }}>Empresarial</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Envíos VERI*FACTU', values: ['3', '10', '30', '50', '100'] },
                  { feature: 'Catálogos', values: ['5', '50', '100', 'Ilimitados', 'Ilimitados'] },
                  { feature: 'Multiempresa', values: ['check', 'check', 'check', 'check', 'check'] },
                  { feature: 'Proformas', values: ['-', 'check', 'check', 'check', 'check'] },
                  { feature: 'Rectificativas', values: ['-', 'check', 'check', 'check', 'check'] },
                  { feature: 'Multiusuario', values: ['-', '-', 'check', 'check', 'check'] },
                  { feature: 'Facturas recibidas', values: ['-', '-', '-', 'check', 'check'] },
                  { feature: 'Multisucursal', values: ['-', '-', '-', '-', 'check'] },
                  { feature: 'Soporte telefónico', values: ['-', '-', 'check', 'check', 'check'] },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--navy)' }}>{row.feature}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="text-center py-3 px-2" style={{ color: 'var(--ink-70)' }}>
                        {val === 'check' ? (
                          <CheckCircle className="w-4 h-4 mx-auto" style={{ color: 'var(--orange)' }} />
                        ) : val === '-' ? (
                          <span style={{ color: 'var(--ink-40)' }}>—</span>
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block">
        <div className="container">
          <div className="center-head">
            <div className="section-label">FAQ</div>
            <h2 className="section-h">Preguntas frecuentes <em>sobre precios.</em></h2>
          </div>

          <div className="mt-14 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="py-6"
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)' }}>{faq.q}</h3>
                <p className="text-base" style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="btn btn-outline">
              Ver todas las preguntas frecuentes &rarr;
            </Link>
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
            <Link href="/contacto" className="btn btn-outline-light btn-big">Solicitar cotización</Link>
          </div>
          <div className="microline">SIN TARJETA - SIN PERMANENCIA - SOPORTE EN ESPAÑOL</div>
        </div>
      </section>
    </div>
  )
}
