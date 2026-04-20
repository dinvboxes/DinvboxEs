"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyClient() {
  const openCookieSettings = () => {
    localStorage.removeItem("cookie-consent-v2")
    localStorage.removeItem("cookie-preferences")
    window.location.reload()
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="block bg-cream2 pt-32 md:pt-40">
        <div className="container">
          <div className="max-w-3xl">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity" 
              style={{ color: 'var(--ink-70)' }}
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <div className="section-label">Información legal</div>
            <h1 className="section-h">
              Política <em>de Cookies.</em>
            </h1>
            <p className="section-sub">
              Última actualización: 20 de abril de 2026. Información sobre el uso de cookies en Dinvbox España.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="block">
        <div className="container">
          {/* Añadidas clases text-justify e hyphens-auto aquí */}
          <div className="max-w-3xl mx-auto legal-content text-justify hyphens-auto">

            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se descargan en tu dispositivo (ordenador, móvil o tableta) cuando visitas un sitio web. Permiten reconocer al navegador, recordar preferencias y mejorar la experiencia de uso.
            </p>
            <p>
              Esta Política de Cookies cumple con la <strong>Ley 34/2002 (LSSI-CE)</strong>, el <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong>Guía sobre el uso de cookies de la AEPD (versión 2023)</strong>.
            </p>

            <h2>2. Tipos de cookies que utilizamos</h2>
            
            <h3>Cookies técnicas (necesarias)</h3>
            <p>Son imprescindibles para el funcionamiento del sitio. No requieren consentimiento.</p>
            <div className="cookie-table-wrapper">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Proveedor</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cookie-consent-v2</td>
                    <td>dinvbox.es</td>
                    <td>Recordar decisión del usuario sobre cookies</td>
                    <td>12 meses</td>
                  </tr>
                  <tr>
                    <td>cookie-preferences</td>
                    <td>dinvbox.es</td>
                    <td>Almacenar preferencias granulares</td>
                    <td>12 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Cookies de marketing (Google Ads)</h3>
            <p>
              Se instalan únicamente tras tu consentimiento explícito. Permiten medir la efectividad de nuestras campañas publicitarias.
            </p>
            <div className="cookie-table-wrapper">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Proveedor</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_gcl_au</td>
                    <td>Google Ads</td>
                    <td>Atribución de conversiones</td>
                    <td>90 días</td>
                  </tr>
                  <tr>
                    <td>_gcl_aw</td>
                    <td>Google Ads</td>
                    <td>Seguimiento de clics en anuncios</td>
                    <td>90 días</td>
                  </tr>
                  <tr>
                    <td>_gac_*</td>
                    <td>Google Ads</td>
                    <td>Información de campaña</td>
                    <td>90 días</td>
                  </tr>
                  <tr>
                    <td>NID / IDE</td>
                    <td>Google (doubleclick.net)</td>
                    <td>Personalización de anuncios</td>
                    <td>Hasta 13 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>3. Gestión del consentimiento</h2>
            <p>Al acceder por primera vez a nuestro sitio, se muestra un banner que permite:</p>
            <ul>
              <li><strong>Aceptar todas las cookies</strong> — se instalan todas las cookies declaradas.</li>
              <li><strong>Rechazar todas las cookies</strong> — solo se instalan las estrictamente necesarias.</li>
              <li><strong>Configurar</strong> — seleccionar por categoría qué cookies permitir.</li>
            </ul>
            <p>
              Puedes <strong>modificar o retirar tu consentimiento en cualquier momento</strong> haciendo clic aquí:
            </p>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <button onClick={openCookieSettings} className="btn btn-primary btn-big">
                Configurar mis cookies
              </button>
            </div>

            <h2>4. Cómo desactivar cookies desde tu navegador</h2>
            <p>Además del banner, puedes configurar tu navegador para bloquear o eliminar cookies:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
            <p>
              <strong>Importante:</strong> la desactivación de ciertas cookies puede afectar al funcionamiento de algunas partes del sitio.
            </p>

            <h2>5. Transferencias internacionales</h2>
            <p>
              Las cookies de Google Ads pueden implicar transferencias de datos a servidores de Google ubicados fuera del Espacio Económico Europeo (EE.UU.). Google está adherido al <strong>EU-US Data Privacy Framework</strong>, lo que ofrece garantías adecuadas conforme al art. 45 RGPD.
            </p>
            <p>
              Más información sobre la política de privacidad de Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
            </p>

            <h2>6. Cambios en la política de cookies</h2>
            <p>
              Dinvbox España podrá actualizar esta Política de Cookies cuando sea necesario por cambios legislativos o técnicos. Se informará de las modificaciones mediante aviso visible en el sitio.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con nuestras cookies, puedes escribirnos a:{" "}
              <a href="mailto:hola@dinvbox.es">hola@dinvbox.es</a>
            </p>
            <p>
              Para más información sobre el tratamiento de tus datos, consulta nuestra{" "}
              <Link href="/privacidad">Política de Privacidad</Link>.
            </p>

            <hr className="legal-divider" />
          </div>
        </div>
      </section>
    </div>
  )
}
