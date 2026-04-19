"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Users, Cloud } from "lucide-react"

export default function AboutPageClient() {
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
                Nosotros
              </div>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                style={{ color: 'var(--navy)', letterSpacing: '-0.03em' }}
              >
                12 años facturando electrónicamente. <span style={{ color: 'var(--orange)' }}>En 4 paises.</span>
              </h1>
              
              <p className="text-lg mb-8" style={{ color: 'var(--ink-70)', lineHeight: '1.6' }}>
                DINVBOX es una firma tecnológica con más de una década de experiencia en facturación electrónica. Combinamos innovación, cumplimiento normativo y un profundo conocimiento del entorno empresarial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Nuestros pilares</div>
            <h2 className="section-h">Tres fundamentos <em>que nos definen.</em></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { 
                icon: Brain, 
                title: 'Inteligencia empresarial', 
                desc: 'Desarrollamos herramientas que automatizan tareas complejas, reducen errores y generan informes claros y útiles para la toma de decisiones.' 
              },
              { 
                icon: Users, 
                title: 'Apoyo profesional', 
                desc: 'Nuestro equipo de expertos fiscales y técnicos acompaña al cliente en todo momento. Aquí no hay bots: ofrecemos asistencia real, cercana y eficaz.' 
              },
              { 
                icon: Cloud, 
                title: 'Computación en la nube', 
                desc: 'Nuestras soluciones funcionan 100% en la nube, lo que garantiza agilidad, seguridad y acceso desde cualquier lugar.' 
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'var(--orange)', color: 'var(--navy)' }}
                >
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--cream)' }}>{pillar.title}</h3>
                <p className="text-sm" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="block bg-navy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Nuestra historia</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--cream)', lineHeight: '1.1' }}>
                Cuando la factura electrónica llegó a España, <span style={{ color: 'var(--orange)' }}>nosotros ya llevabamos mas de una decada haciendola.</span>
              </h2>
              <p className="text-lg mb-4" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>
                Hoy comenzamos nuestra andadura en España, con el compromiso de ofrecer una experiencia de facturación intuitiva, legal y sin complicaciones, adaptada a las exigencias de la AEAT y VERI*FACTU.
              </p>
              <p className="text-lg italic" style={{ color: 'var(--cream)', lineHeight: '1.6' }}>
                No somos una startup aprendiendo sobre la marcha. Somos el equipo que ha visto cómo funciona la factura electrónica en economías enteras, y lo aplica aquí.
              </p>
            </div>
            
            <div className="flex flex-col">
              {[
                { year: '2012', name: 'México', count: '13 años' },
                { year: '2024', name: 'España', count: 'Desde el día uno' },
                { year: '2024', name: 'Reino Unido', count: 'Lanzamiento simultáneo' },
                { year: '2025', name: 'R. Dominicana', count: 'Último mercado' },
              ].map((country, i) => (
                <div 
                  key={i}
                  className="grid grid-cols-[80px_1fr_auto] gap-6 items-baseline py-6"
                  style={{ borderTop: '1px solid var(--white-12)', borderBottom: i === 3 ? '1px solid var(--white-12)' : 'none' }}
                >
                  <span className="font-mono text-sm" style={{ color: 'var(--orange)' }}>{country.year}</span>
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--cream)' }}>{country.name}</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--white-60)' }}>{country.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="block">
        <div className="container">
          <div className="center-head">
            <div className="section-label">Nuestros valores</div>
            <h2 className="section-h">Lo que nos <em>mueve.</em></h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: 'Transparencia', desc: 'Sin letra pequeña, sin sorpresas. El precio que ves es el precio que pagas. Así de simple.' },
              { title: 'Cercanía', desc: 'Soporte humano, en español, en tu horario. No somos una corporación sin rostro: somos personas que entienden tu negocio.' },
              { title: 'Innovación', desc: 'Facturito, nuestra IA fiscal, es solo el principio. Cada mes añadimos mejoras para que facturar sea más fácil.' },
              { title: 'Cumplimiento', desc: 'Cada actualización normativa se refleja en Dinvbox antes de que te afecte. Tú facturas, nosotros nos encargamos del resto.' },
            ].map((value, i) => (
              <div 
                key={i}
                className="rounded-2xl p-8"
                style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}
              >
                <div className="text-5xl font-extrabold mb-4" style={{ color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--cream)' }}>{value.title}</h3>
                <p className="text-base" style={{ color: 'var(--white-60)', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>¿Listo para simplificar<br/><em>tu facturación?</em></h2>
          <p>Únete a los autónomos y PYMES que ya confían en Dinvbox para su facturación electrónica.</p>
          <div className="btns">
            <a href="https://app.dinvbox.es/register" className="btn btn-primary btn-big">Crear cuenta gratis &rarr;</a>
            <Link href="/contacto" className="btn btn-outline-light btn-big">Hablar con el equipo</Link>
          </div>
          <div className="microline">SIN TARJETA - SIN PERMANENCIA - SOPORTE EN ESPAÑOL</div>
        </div>
      </section>
    </div>
  )
}
