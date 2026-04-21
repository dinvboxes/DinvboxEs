import { NextResponse } from 'next/server'

export const runtime = 'edge'

const JWT_SECRET = process.env.JWT_SECRET
const TOKEN_TTL_SECONDS = 300

async function signJWT(payload: Record<string, unknown>, secret: string): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' }
  
  const headerB64 = base64urlEncode(JSON.stringify(header))
  const payloadB64 = base64urlEncode(JSON.stringify(payload))
  const data = `${headerB64}.${payloadB64}`

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(data)
  )

  const signatureB64 = base64urlEncode(new Uint8Array(signature))
  return `${data}.${signatureB64}`
}

function base64urlEncode(input: string | Uint8Array): string {
  let str: string
  if (typeof input === 'string') {
    str = btoa(unescape(encodeURIComponent(input)))
  } else {
    let binary = ''
    for (let i = 0; i < input.byteLength; i++) {
      binary += String.fromCharCode(input[i])
    }
    str = btoa(binary)
  }
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export async function POST(request: Request) {
  try {
    if (!JWT_SECRET) {
      console.error('JWT_SECRET not configured')
      return NextResponse.json(
        { error: 'Service not configured' },
        { status: 503 }
      )
    }

    const now = Math.floor(Date.now() / 1000)
    const payload = {
      iss: 'dinvbox',
      sub: 'facturito-chat',
      iat: now,
      exp: now + TOKEN_TTL_SECONDS,
      jti: crypto.randomUUID(),
    }

    const token = await signJWT(payload, JWT_SECRET)

    return NextResponse.json({
      token,
      expiresIn: TOKEN_TTL_SECONDS,
    })
  } catch (err) {
    console.error('Token endpoint error:', err)
    return NextResponse.json(
      { error: 'Token generation failed' },
      { status: 500 }
    )
  }
}
