"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { X, Send, Loader2, Minimize2, Maximize2, Sparkles, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { FacturitoSuggestions } from "@/components/facturito-suggestions"

type Message = {
  role: "user" | "assistant"
  content: string
  type?: "normal" | "cta"  // 'cta' renderiza el bloque de registro
}

const GATEWAY_URL = "https://ai.luxpont.es/es/ask"
const TOKEN_URL = "/api/facturito/token"

// ----- LÍMITES DE USO -----
const MAX_FREE_QUERIES = 2
const QUOTA_WINDOW_MS = 3 * 24 * 60 * 60 * 1000  // 3 días
const STORAGE_KEY = "facturito_quota_v1"

// ----- URLs CTA — CAMBIAR según respuesta -----
const REGISTER_URL = "https://app.dinvbox.es/register"
const CALENDLY_URL = "https://calendly.com/kenji-davila-i"  // o /contacto si no hay Calendly

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "¡Hola! Soy Facturito, tu asistente virtual especializado en facturación electrónica. ¿En qué puedo ayudarte hoy?",
  },
]

const initialSuggestions = [
  "¿Cumple con VeriFactu?",
  "¿Qué tipos de facturas puedo hacer?",
  "¿Puedo facturar desde el móvil?",
  "¿Mis datos están seguros?",
]

// ---------- GESTIÓN DE CUOTA (localStorage) ----------

type QuotaState = { count: number; firstAt: number }

function readQuota(): QuotaState {
  try {
    const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
    if (!raw) return { count: 0, firstAt: 0 }
    const parsed = JSON.parse(raw)
    
    // Si pasó la ventana de 3 días, reset
    const now = Date.now()
    if (parsed.firstAt && now - parsed.firstAt > QUOTA_WINDOW_MS) {
      return { count: 0, firstAt: 0 }
    }
    return parsed
  } catch {
    return { count: 0, firstAt: 0 }
  }
}

function writeQuota(state: QuotaState) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  } catch {
    // localStorage bloqueado o lleno: silencio, el server-side rate limit tomará el relevo
  }
}

function incrementQuota(): QuotaState {
  const current = readQuota()
  const next: QuotaState = {
    count: current.count + 1,
    firstAt: current.firstAt || Date.now(),
  }
  writeQuota(next)
  return next
}

// ---------- RENDERIZADO DE MARKDOWN BÁSICO ----------

const renderInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    const italicParts = part.split(/(\*[^*]+\*)/g)
    return italicParts.map((ip, j) => {
      if (ip.startsWith('*') && ip.endsWith('*') && ip.length > 2) {
        return <em key={`${i}-${j}`}>{ip.slice(1, -1)}</em>
      }
      
      // Detectar links markdown [texto](url)
      const linkParts = ip.split(/(\[[^\]]+\]\([^)]+\))/g)
      return linkParts.map((lp, k) => {
        const linkMatch = lp.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          return (
            <a 
              key={`${i}-${j}-${k}`} 
              href={linkMatch[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 underline hover:text-orange-700"
            >
              {linkMatch[1]}
            </a>
          )
        }
        return <span key={`${i}-${j}-${k}`}>{lp}</span>
      })
    })
  })
}

const renderMarkdown = (text: string): React.ReactNode => {
  const lines = text.split('\n')
  
  return lines.map((line, i) => {
    if (line.trim() === '---' || line.trim() === '***') {
      return <hr key={i} className="my-2 border-gray-300" />
    }
    
    if (line.startsWith('### ')) {
      return <div key={i} className="font-semibold text-sm mt-2 mb-1">{renderInline(line.slice(4))}</div>
    }
    if (line.startsWith('## ')) {
      return <div key={i} className="font-bold text-sm mt-2 mb-1">{renderInline(line.slice(3))}</div>
    }
    if (line.startsWith('# ')) {
      return <div key={i} className="font-bold text-base mt-2 mb-1">{renderInline(line.slice(2))}</div>
    }
    
    const bulletMatch = line.match(/^(\s*)[-*]\s+(.+)$/)
    if (bulletMatch) {
      const indent = bulletMatch[1].length
      return (
        <div key={i} className="flex gap-1.5" style={{ marginLeft: `${8 + indent * 8}px` }}>
          <span className="text-gray-500 flex-shrink-0">•</span>
          <span className="flex-1">{renderInline(bulletMatch[2])}</span>
        </div>
      )
    }
    
    const numberedMatch = line.match(/^(\s*)(\d+)\.\s+(.+)$/)
    if (numberedMatch) {
      const indent = numberedMatch[1].length
      return (
        <div key={i} className="flex gap-1.5" style={{ marginLeft: `${8 + indent * 8}px` }}>
          <span className="text-gray-500 flex-shrink-0">{numberedMatch[2]}.</span>
          <span className="flex-1">{renderInline(numberedMatch[3])}</span>
        </div>
      )
    }
    
    if (line.trim() === '') return <div key={i} className="h-2" />
    
    return <div key={i}>{renderInline(line)}</div>
  })
}

// ---------- COMPONENTE CTA ----------

function RegistrationCTA() {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <Sparkles className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm font-medium text-gray-800">
          Has consultado a Facturito 2 veces. ¿Te ha sido útil?
        </p>
      </div>
      
      <p className="text-xs text-gray-600">
        Para seguir explorando sin límites, te invitamos a:
      </p>
      
      <a 
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
      >
        Crear cuenta gratis
      </a>
      
      <a 
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 w-full border border-orange-500 text-orange-600 hover:bg-orange-50 text-center py-2.5 px-3 rounded-lg text-sm font-medium transition-colors"
      >
        <Calendar className="h-4 w-4" />
        Hablar con un experto
      </a>
      
      <p className="text-[11px] text-gray-500 text-center pt-1">
        Volverás a tener acceso al chat en 3 días.
      </p>
    </div>
  )
}

// ---------- TOKEN ----------

async function getToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, { method: 'POST' })
  if (!res.ok) throw new Error(`Token request failed: ${res.status}`)
  const data = await res.json()
  if (!data.token) throw new Error('No token in response')
  return data.token
}

// ---------- COMPONENTE PRINCIPAL ----------

export function FacturitoChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loadingHint, setLoadingHint] = useState("Consultando normativa…")
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Comprobar cuota al montar
  useEffect(() => {
    const quota = readQuota()
    if (quota.count >= MAX_FREE_QUERIES) {
      setIsBlocked(true)
    }
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current && !isBlocked) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized, isBlocked])

  const toggleChat = () => {
    if (!hasInteracted) setHasInteracted(true)
    if (isOpen && isMinimized) setIsMinimized(false)
    else { setIsOpen(!isOpen); setIsMinimized(false) }
  }

  const minimizeChat = (e: React.MouseEvent) => { e.stopPropagation(); setIsMinimized(true) }
  const maximizeChat = (e: React.MouseEvent) => { e.stopPropagation(); setIsMinimized(false) }
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage() }
  }

  const showCTAMessage = () => {
    const ctaMessage: Message = {
      role: "assistant",
      content: "",
      type: "cta",
    }
    setMessages((prev) => [...prev, ctaMessage])
    setIsBlocked(true)
  }

  const handleSendMessage = async () => {
    if (input.trim() === "" || isLoading || isBlocked) return

    // Verificar cuota local ANTES de enviar
    const currentQuota = readQuota()
    if (currentQuota.count >= MAX_FREE_QUERIES) {
      const userMessage: Message = { role: "user", content: input.trim() }
      setMessages((prev) => [...prev, userMessage])
      setInput("")
      showCTAMessage()
      return
    }

    const userMessage: Message = { role: "user", content: input.trim() }
    const updatedMessages = [...messages.filter(m => m.type !== "cta"), userMessage]
    setMessages([...messages, userMessage])
    setInput("")
    setIsLoading(true)
    setLoadingHint("Consultando normativa…")

    const hintTimers: ReturnType<typeof setTimeout>[] = []
    hintTimers.push(setTimeout(() => setLoadingHint("Buscando referencias actualizadas…"), 10000))
    hintTimers.push(setTimeout(() => setLoadingHint("Cruzando fuentes oficiales…"), 25000))
    hintTimers.push(setTimeout(() => setLoadingHint("Preparando la respuesta…"), 45000))

    try {
      const token = await getToken()
      const historyTrimmed = updatedMessages.slice(-15)
      
      const res = await fetch(GATEWAY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ messages: historyTrimmed }),
      })

      // 429 desde el server: rate limit por IP. Aún si localStorage está limpio.
      if (res.status === 429) {
        const data = await res.json().catch(() => ({}))
        if (data.cta === "register") {
          showCTAMessage()
        } else {
          setMessages((prev) => [...prev, {
            role: "assistant",
            content: "Has enviado muchos mensajes en poco tiempo. Espera unos minutos e inténtalo de nuevo.",
          }])
        }
        return
      }

      if (!res.ok) throw new Error(`Gateway error: ${res.status}`)

      const data = await res.json()
      
      // Incrementar contador local (consulta consumida con éxito)
      incrementQuota()

      const assistantMessage: Message = {
        role: "assistant",
        content: data.content || "Lo siento, no pude procesar tu pregunta. Inténtalo de nuevo.",
      }
      setMessages((prev) => [...prev, assistantMessage])

      // Si era la última consulta gratis, ya bloquear próxima
      const newQuota = readQuota()
      if (newQuota.count >= MAX_FREE_QUERIES) {
        // Pequeño delay para que se vea la respuesta primero
        setTimeout(() => showCTAMessage(), 800)
      }
    } catch (err) {
      console.error('Chat error:', err)
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Ha ocurrido un error de conexión. Por favor, inténtalo de nuevo.",
      }])
    } finally {
      hintTimers.forEach(clearTimeout)
      setIsLoading(false)
    }
  }

  const handleSelectSuggestion = (suggestion: string) => {
    if (isBlocked) return
    setInput(suggestion)
    if (inputRef.current) inputRef.current.focus()
  }

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 shadow-lg transition-all hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Chat con Facturito"
      >
        {isOpen && !isMinimized ? <X className="h-6 w-6 text-white" /> : <span className="text-xl font-bold text-white">IA</span>}
        {!hasInteracted && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">1</span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isMinimized ? { opacity: 1, y: 0, scale: 1, height: "auto", width: "auto" } : { opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 shadow-xl ${
              isMinimized
                ? "bottom-24 right-6 w-auto rounded-lg bg-white"
                : "bottom-24 right-6 flex h-[500px] w-[320px] flex-col overflow-hidden rounded-xl bg-white sm:w-[360px]"
            }`}
          >
            {isMinimized ? (
              <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-white p-3 pr-4 shadow-md" onClick={maximizeChat}>
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src="/images/facturito-ai.jpeg" alt="Facturito" fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Facturito</p>
                  <p className="text-xs text-gray-500">Asistente virtual</p>
                </div>
                <Maximize2 className="h-5 w-5 text-gray-500" />
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 p-3 text-gray-800 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-orange-200">
                      <Image src="/images/facturito-ai.jpeg" alt="Facturito" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Facturito</h3>
                      <p className="text-xs text-gray-500">Asistente de facturación</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={minimizeChat} className="rounded p-1 hover:bg-orange-200/50" aria-label="Minimizar"><Minimize2 className="h-4 w-4 text-gray-600" /></button>
                    <button onClick={() => setIsOpen(false)} className="rounded p-1 hover:bg-orange-200/50" aria-label="Cerrar"><X className="h-4 w-4 text-gray-600" /></button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3">
                  <div className="space-y-3">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[90%] rounded-lg p-2.5 text-sm leading-relaxed ${
                          message.role === "user" 
                            ? "bg-orange-500 text-white" 
                            : message.type === "cta"
                              ? "bg-orange-50 border border-orange-200 text-gray-800 w-[90%]"
                              : "bg-gray-100 text-gray-800"
                        }`}>
                          {message.role === "assistant" 
                            ? (message.type === "cta" ? <RegistrationCTA /> : renderMarkdown(message.content))
                            : message.content
                          }
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="max-w-[85%] rounded-lg bg-gray-100 p-2.5 text-gray-800">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
                            <span className="text-xs text-gray-500">{loadingHint}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {messages.length === 1 && !isBlocked && (
                      <div className="mt-4">
                        <p className="text-xs text-gray-500 mb-2">Algunas preguntas que puedes hacer:</p>
                        <FacturitoSuggestions suggestions={initialSuggestions} onSelectSuggestion={handleSelectSuggestion} />
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <div className="border-t border-gray-200 p-3">
                  <div className="flex gap-2">
                    <Textarea
                      ref={inputRef}
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={isBlocked ? "Crea una cuenta para seguir consultando" : "Escribe tu pregunta aquí..."}
                      className="min-h-[40px] resize-none text-sm"
                      maxRows={3}
                      disabled={isBlocked}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={input.trim() === "" || isLoading || isBlocked}
                      size="icon"
                      className="h-10 w-10 bg-orange-500 hover:bg-orange-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
