import { NextResponse } from 'next/server'
import { findBestMatch } from '@/data/facturito-knowledge-base'

export const runtime = 'edge'
export const maxDuration = 300

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const AI_GATEWAY_URL = process.env.AI_GATEWAY_URL
const AI_GATEWAY_TOKEN = process.env.AI_GATEWAY_TOKEN

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const messages: Message[] = body.messages || []
    
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Mensaje requerido' },
        { status: 400 }
      )
    }

    // Limitar historial a últimos 15 mensajes para no sobrecargar
    const trimmedMessages = messages.slice(-15)
    const lastUserMessage = trimmedMessages[trimmedMessages.length - 1]

    // Si el gateway no está configurado, usamos el knowledge base local
    if (!AI_GATEWAY_URL || !AI_GATEWAY_TOKEN) {
      console.warn('AI Gateway not configured, using fallback')
      return fallbackResponse(lastUserMessage?.content || '')
    }

    // Obtener origin de la request para pasarlo al gateway
    const origin = request.headers.get('origin') || 
                   `https://${request.headers.get('host') || 'dinvbox.es'}`

    // Llamar al gateway con timeout de 90s
    const gatewayRes = await fetch(AI_GATEWAY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-gateway-token': AI_GATEWAY_TOKEN,
        'Origin': origin,
      },
      body: JSON.stringify({ messages: trimmedMessages }),
      signal: AbortSignal.timeout(90000),
    })

    if (gatewayRes.status === 429) {
      return NextResponse.json(
        {
          content: 'Has enviado muchos mensajes en poco tiempo. Por favor, espera unos minutos e inténtalo de nuevo.',
        },
        { status: 200 }
      )
    }

    if (!gatewayRes.ok) {
      console.error('Gateway error:', gatewayRes.status)
      return fallbackResponse(lastUserMessage?.content || '')
    }

    const data = await gatewayRes.json()

    return NextResponse.json({
      content: data.content || 'Lo siento, no pude procesar tu consulta. Inténtalo de nuevo.',
    })
  } catch (err) {
    console.error('Facturito endpoint error:', err)
    return NextResponse.json({
      content: 'Ha ocurrido un error. Por favor, inténtalo de nuevo en unos momentos.',
    })
  }
}

// Fallback al knowledge base local cuando el gateway falla
function fallbackResponse(userMessage: string) {
  const answer = findBestMatch(userMessage)
  return NextResponse.json({ content: answer })
}
