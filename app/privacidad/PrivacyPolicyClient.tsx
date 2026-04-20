"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyClient() {
  return (
    <div className="flex flex-col">
      {/* Hero - mismo patrón que /normativa */}
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
              Política de Privacidad <em>y Condiciones de Uso.</em>
            </h1>
            <p className="section-sub">
              Última actualización: 20 de abril de 2026. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="block">
        <div className="container">
          <div className="max-w-3xl mx-auto legal-content">
            
            <h2>1. Identificación y ámbito de aplicación</h2>
            <p>
              <strong>DINVBOX S.L.</strong> (en adelante, "Dinvbox España"), con N.I.F. B10756765, domicilio en Plaza de las Cortes 5, P5, 28014 Madrid (España), inscrita en el Registro Mercantil de Madrid, es titular del sitio web <a href="https://www.dinvbox.es">www.dinvbox.es</a> y de las plataformas internas vinculadas a su servicio de facturación electrónica.
            </p>
            <p>
              El acceso y uso de nuestros servicios supone la aceptación de la presente Política de Privacidad y de las Condiciones de Uso aquí recogidas.
            </p>

            <h2>2. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales es <strong>DINVBOX S.L.</strong>
            </p>
            <p>
              Actualmente, Dinvbox España no está obligada a designar Delegado de Protección de Datos conforme al artículo 37 RGPD. Revisamos periódicamente esta obligación.
            </p>
            <p>
              <strong>Contacto único para consultas y ejercicio de derechos:</strong>{" "}
              <a href="mailto:contacto@dinvbox.es">contacto@dinvbox.es</a>
            </p>

            <h2>3. Datos personales tratados</h2>
            <p>Podemos tratar las siguientes categorías de datos:</p>
            <ul>
              <li><strong>Datos de navegación:</strong> dirección IP, navegador, sistema operativo, fecha y hora, páginas visitadas, cookies (véase nuestra <Link href="/cookies">Política de Cookies</Link>).</li>
              <li><strong>Datos facilitados por el usuario:</strong> nombre, apellidos, correo electrónico, teléfono, empresa, cargo, así como los datos incluidos en formularios de contacto, solicitudes de información o suscripciones.</li>
              <li><strong>Datos derivados del uso del servicio:</strong> información fiscal y de facturación (razón social, NIF/CIF, domicilio fiscal), datos de usuarios autorizados, historiales de facturas, transacciones y comunicaciones en la plataforma.</li>
              <li><strong>Datos de RR. HH.:</strong> CV, formación, experiencia laboral, aptitudes, en caso de participar en procesos de selección.</li>
              <li><strong>Canal Ético:</strong> denuncias internas tramitadas conforme a la Ley 2/2023, con garantías de confidencialidad, acceso restringido y conservación limitada.</li>
            </ul>

            <h2>4. Finalidades y bases jurídicas</h2>
            <p>Los datos se tratan con las siguientes finalidades y bases legales:</p>
            <ul>
              <li><strong>Prestación de servicios de facturación electrónica:</strong> gestión de la cuenta, soporte y comunicaciones técnicas. <em>Base legal: ejecución de contrato.</em></li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> obligaciones fiscales, mercantiles y contables. <em>Base legal: obligación legal.</em></li>
              <li><strong>Comunicaciones comerciales</strong> (previo consentimiento expreso). <em>Base legal: consentimiento.</em></li>
              <li><strong>Selección de personal:</strong> gestión de candidaturas. <em>Base legal: medidas precontractuales / consentimiento.</em></li>
              <li><strong>Canal Ético:</strong> recepción y gestión de informaciones sobre incumplimientos. <em>Base legal: obligación legal (Ley 2/2023).</em></li>
            </ul>

            <h2>5. Conservación de datos</h2>
            <ul>
              <li><strong>Datos contractuales:</strong> mientras dure la relación y posteriormente bloqueados durante los plazos legales (mercantil/fiscal: 6 años).</li>
              <li><strong>Datos de marketing:</strong> hasta revocar el consentimiento.</li>
              <li><strong>Currículums:</strong> máximo 24 meses.</li>
              <li><strong>Canal Ético:</strong> hasta cierre de la investigación y durante el plazo necesario para acreditar el cumplimiento legal.</li>
            </ul>

            <h2>6. Destinatarios y transferencias internacionales</h2>
            <ul>
              <li><strong>Encargados de tratamiento:</strong> proveedores de hosting, comunicaciones, soporte, analítica y pagos, bajo contratos conforme al art. 28 RGPD.</li>
              <li><strong>Cesiones legales:</strong> Administración tributaria u otras autoridades competentes.</li>
              <li><strong>Transferencias internacionales:</strong> si se usan proveedores fuera del EEE, se aplicarán las Cláusulas Contractuales Tipo (2021/914) o, en el caso de EE.UU., proveedores adheridos al EU-US Data Privacy Framework.</li>
            </ul>

            <h2>7. Derechos de los usuarios</h2>
            <p>
              Los usuarios pueden ejercer en cualquier momento sus derechos de <strong>acceso, rectificación, supresión, oposición, limitación y portabilidad</strong>.
            </p>
            <p>
              Asimismo, podrán retirar su consentimiento sin efectos retroactivos y presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
            </p>
            <p>
              <strong>Ejercicio de derechos mediante correo electrónico a:</strong>{" "}
              <a href="mailto:contacto@dinvbox.es">contacto@dinvbox.es</a>
            </p>

            <h2>8. Cookies</h2>
            <p>
              Nuestro sitio utiliza cookies propias y de terceros. El usuario puede aceptar todas, rechazar todas o configurar las cookies en cualquier momento. Solo se instalarán cookies no técnicas con consentimiento previo, conforme a la Guía AEPD 2023.
            </p>
            <p>
              Para información detallada, consulte nuestra <Link href="/cookies">Política de Cookies</Link>.
            </p>

            <h2>9. Condiciones de uso del servicio</h2>
            <ul>
              <li>Para registrarse, el usuario debe ser mayor de 16 años.</li>
              <li>El usuario es responsable de la veracidad de la información y de mantener la confidencialidad de sus credenciales.</li>
              <li>Los planes de servicio se contratan online y se renuevan automáticamente salvo cancelación.</li>
              <li>Los pagos se realizan por adelantado; no se efectuarán devoluciones salvo en los supuestos previstos en la Política de Devoluciones.</li>
              <li>Dinvbox puede modificar planes o tarifas con un preaviso de 15 días, comunicado en la web y por notificación al cliente.</li>
            </ul>

            <h2>10. Cancelación y suspensión</h2>
            <p>
              El usuario puede cancelar su cuenta en cualquier momento desde la configuración. Al cancelarla, los datos se eliminarán o bloquearán conforme a los plazos legales.
            </p>
            <p>
              Dinvbox podrá suspender cuentas en caso de impago, incumplimiento de condiciones o uso ilícito del servicio.
            </p>

            <h2>11. Propiedad intelectual</h2>
            <p>
              Dinvbox conserva todos los derechos sobre el software, interfaz, elementos gráficos y documentación.
            </p>
            <p>
              El usuario mantiene los derechos sobre los contenidos que cargue, actuando Dinvbox como encargado del tratamiento respecto a dichos datos.
            </p>

            <h2>12. Seguridad de la información</h2>
            <p>
              Aplicamos medidas técnicas y organizativas avanzadas de seguridad (cifrado, control de accesos, copias de seguridad, monitoreo continuo), alineadas con el estándar internacional ISO 27001, aunque sin certificación formal en la actualidad.
            </p>

            <h2>13. Modificaciones de la política y condiciones</h2>
            <p>
              Podremos actualizar esta Política de Privacidad y Condiciones de Uso para reflejar cambios legales o técnicos.
            </p>
            <p>
              Se notificará de forma visible en la web y, cuando corresponda, al correo electrónico registrado por el usuario.
            </p>

            <h2>14. Legislación y jurisdicción</h2>
            <p>
              Estas Condiciones se rigen por la legislación española y europea.
            </p>
            <p>
              Para la resolución de conflictos, las partes se someten a los Juzgados y Tribunales de Madrid (España).
            </p>

            <hr className="legal-divider" />

            <p>
              Para cualquier consulta sobre esta Política, puede contactarnos en:{" "}
              <a href="mailto:hola@dinvbox.es">hola@dinvbox.es</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
