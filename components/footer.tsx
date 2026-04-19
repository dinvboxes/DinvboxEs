"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/logo-dinvbox.svg" alt="Dinvbox" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p>
              Software de facturación electrónica para autónomos y PYMES en España. 12 años de experiencia internacional en cuatro países.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Producto</h4>
            <ul>
              <li><Link href="/producto">Facturación electrónica</Link></li>
              <li><Link href="/producto#verifactu">VERI*FACTU</Link></li>
              <li><Link href="/producto#b2b">Factura electrónica B2B</Link></li>
              <li><Link href="/producto#api">API para desarrolladores</Link></li>
              <li><Link href="/precios">Precios</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/normativa">Normativa</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>Plaza de las Cortes 5, P5<br/>28014 Madrid, España</li>
              <li><a href="mailto:hola@dinvbox.es">hola@dinvbox.es</a></li>
              <li><a href="tel:+34644783622">+34 644 783 622</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-legal-note">
          Referencias normativas: Real Decreto 1007/2023 (VERI*FACTU), Real Decreto 238/2026 (factura electrónica obligatoria entre empresarios y profesionales), Ley 18/2022 Crea y Crece. Fuente oficial: BOE (boe.es).
        </div>
        
        <div className="footer-bottom">
          <div>&copy; 2026 Dinvbox. Todos los derechos reservados.</div>
          <div className="legal">
            <Link href="#">Términos y condiciones</Link>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="#">Cookies</Link>
            <Link href="#">Declaración responsable</Link>
            <Link href="#">Declaración API</Link>
            <Link href="/juego" style={{ color: 'var(--orange)' }}>Facturito Jump</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
