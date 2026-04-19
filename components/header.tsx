"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Producto", href: "/producto" },
  { name: "Precios", href: "/precios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Normativa", href: "/normativa" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">Saltar al contenido principal</a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white",
        )}
        style={{ borderBottom: '1px solid var(--line)' }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/logo-dinvbox.svg" alt="Dinvbox" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-[var(--orange)]"
                  style={{ color: 'var(--ink-70)' }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <a 
                href="https://app.dinvbox.es/login" 
                className="btn btn-ghost text-sm"
              >
                Iniciar sesión
              </a>
              <a 
                href="https://app.dinvbox.es/register" 
                className="btn btn-primary text-sm"
              >
                Crear cuenta
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
              style={{ color: 'var(--navy)' }}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ background: '#FFFFFF' }}
        >
          <div className="flex h-16 items-center justify-between px-6" style={{ borderBottom: '1px solid var(--line)' }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo-dinvbox.svg" alt="Dinvbox" className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              className="p-2"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--navy)' }}
            >
              <span className="sr-only">Cerrar menú</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="px-6 py-8 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-lg font-medium"
                style={{ color: 'var(--navy)', borderBottom: '1px solid var(--line)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8 space-y-3">
              <a 
                href="https://app.dinvbox.es/login" 
                className="btn btn-outline w-full justify-center"
              >
                Iniciar sesión
              </a>
              <a 
                href="https://app.dinvbox.es/register" 
                className="btn btn-primary w-full justify-center"
              >
                Crear cuenta
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
