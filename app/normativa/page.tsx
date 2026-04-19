"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Scale, FileText, AlertTriangle, Calendar, ExternalLink } from "lucide-react"

export default function NormativaPage() {
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
                Normativa
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                style={{ color: 'var(--navy)', letterSpacing: '-0.03em' }}
              >
                La normativa fiscal <span style={{ color: 'var(--orange)' }}>explicada sin jerga.</span>
              </h1>
              
              <p className="text-lg mb-8" style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}>
                Desde 2026, facturar en España ha cambiado. Aquí te explicamos las dos normativas clave que afectan a autónomos y PYMES: VERI*FACTU y la factura electrónica B2B.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VERI*FACTU Section */}
      <section className="block bg-navy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label">Normativa 01</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--cream)', lineHeight: '1.1' }}>
                VERI*FACTU
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>
                El sistema de verificación de facturas de la Agencia Tributaria española. Obliga a que tu software registre cada factura ante Hacienda en tiempo real.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--cream)' }}>
                  <Scale className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  Real Decreto 1007/2023
                </div>
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--cream)' }}>
                  <Calendar className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  Obligatorio 2027
                </div>
              </div>
            </div>
            
            <div 
              className="rounded-2xl p-8"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--white-12)' }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--cream)' }}>Que implica?</h3>
              <ul className="space-y-2">
                {[
                  'Cada factura debe llevar un codigo QR verificable.',
                  'Firma hash que garantiza la integridad del documento.',
                  'Envio automatico a la AEAT en el momento de la emision.',
                  'Registro inalterable de todas las operaciones.',
                  'Obligatorio para desarrolladores desde enero 2027.',
                  'Obligatorio para contribuyentes desde julio 2027.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--white-60)' }}>
                    <span style={{ color: 'var(--orange)' }}>&rarr;</span>
                    {item}
                  </li>
                ))}
              
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Factura Electrónica B2B Section */}
      <section className="block">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label">Normativa 02</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--navy)', lineHeight: '1.1' }}>
                Factura electrónica B2B
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}>
                La nueva obligación de emitir facturas en formato estructurado (Facturae, UBL o XML CEFACT) entre empresas y autónomos. Word, Excel y PDF simple dejarán de ser válidos.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--navy)' }}>
                  <Scale className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  RD 238/2026
                </div>
                <div className="flex items-center gap-2 text-sm font-mono" style={{ color: 'var(--navy)' }}>
                  <FileText className="w-4 h-4" style={{ color: 'var(--orange)' }} />
                  Ley 18/2022 (Crea y Crece)
                </div>
              </div>
            </div>
            
            <div 
              className="rounded-2xl p-8"
              style={{ background: '#F9FAFB', border: '1px solid var(--line)' }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--navy)' }}>Que implica?</h3>
              <ul className="space-y-2">
                {[
                  'Las facturas deben emitirse en formato estructurado.',
                  'Formatos validos: Facturae 3.2.2, UBL 2.1 o UN/CEFACT.',
                  'Obligatorio entre empresas y autonomos (B2B).',
                  'Las facturas a particulares (B2C) quedan exentas por ahora.',
                  'Julio 2027: Empresas con facturacion superior a 8 millones.',
                  'Julio 2028: Resto de PYMES y autonomos.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-70)' }}>
                    <span style={{ color: 'var(--orange)' }}>&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctions Section */}
      <section className="block bg-cream2">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Consecuencias</div>
            <h2 className="section-h">Las sanciones <em>no son menores.</em></h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { 
                icon: AlertTriangle,
                title: 'Infracciones formales', 
                desc: 'No emitir facturas en el formato requerido puede acarrear sanciones desde 150 EUR por factura.' 
              },
              { 
                icon: AlertTriangle,
                title: 'Uso de software no homologado', 
                desc: 'Utilizar software que no cumpla con VERI*FACTU puede conllevar multas de hasta 50.000 EUR.' 
              },
              { 
                icon: AlertTriangle,
                title: 'Retrasos en la comunicación', 
                desc: 'No enviar la información a Hacienda en los plazos establecidos se considera infracción tributaria.' 
              },
            ].map((item, i) => (
              <div 
                key={i}
                className="rounded-2xl p-8"
                style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}
              >
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'var(--orange)', color: 'var(--navy)' }}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--cream)', lineHeight: '1.2' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="block">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Fuentes oficiales</div>
            <h2 className="section-h">Documentación <em>de referencia.</em></h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { 
                title: 'Real Decreto 1007/2023 (VERI*FACTU)', 
                desc: 'Normativa completa sobre los requisitos de los sistemas informáticos de facturación.',
                url: 'https://www.boe.es/eli/es/rd/2023/11/27/1007' 
              },
              { 
                title: 'Ley 18/2022 (Crea y Crece)', 
                desc: 'Ley de creación y crecimiento de empresas que introduce la factura electrónica obligatoria.',
                url: 'https://www.boe.es/eli/es/l/2022/09/28/18/con' 
              },
              { 
                title: 'Sede electrónica AEAT', 
                desc: 'Portal oficial de la Agencia Tributaria con información actualizada.',
                url: 'https://sede.agenciatributaria.gob.es/' 
              },
              { 
                title: 'Facturae - Formato oficial', 
                desc: 'Especificaciones técnicas del formato de factura electrónica español.',
                url: 'https://www.facturae.gob.es/' 
              },
            ].map((resource, i) => (
              <a 
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--orange)', color: 'var(--navy)' }}
                >
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: 'var(--cream)' }}>{resource.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--white-60)' }}>{resource.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>No esperes a la fecha límite.<br/><em>Empieza hoy.</em></h2>
          <p>Dinvbox cumple con VERI*FACTU y la factura electrónica B2B. Nosotros actualizamos el sistema cada vez que cambia la norma. Tú solo facturas.</p>
          <div className="btns">
            <a href="https://app.dinvbox.es/register" className="btn btn-primary btn-big">Crear cuenta gratis &rarr;</a>
            <Link href="/producto" className="btn btn-outline-light btn-big">Ver cómo funciona</Link>
          </div>
          <div className="microline">SIN TARJETA - SIN PERMANENCIA - SOPORTE EN ESPAÑOL</div>
        </div>
      </section>
    </div>
  )
}
