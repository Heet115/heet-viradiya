import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = new Resend(RESEND_API_KEY)

const MAX_BODY_CHARACTERS = 8_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

type RateLimitBucket = {
  count: number
  resetAt: number
}

type ValidatedContactPayload = {
  name: string
  email: string
  message: string
  website: string
}

const rateLimitBuckets = new Map<string, RateLimitBucket>()

function jsonError(error: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ error }, { status, headers })
}

function getClientKey(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")
  const forwardedIp = forwardedFor?.split(",")[0]?.trim()

  return (
    req.headers.get("cf-connecting-ip")?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    forwardedIp ||
    "unknown"
  )
}

function checkRateLimit(key: string) {
  const now = Date.now()
  const bucket = rateLimitBuckets.get(key)

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return { limited: false, retryAfter: 0 }
  }

  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    }
  }

  bucket.count += 1
  return { limited: false, retryAfter: 0 }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function readRequiredString(
  payload: Record<string, unknown>,
  key: string,
  label: string,
  maxLength: number
) {
  const value = payload[key]

  if (typeof value !== "string") {
    return { value: "", error: `${label} is required.` }
  }

  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return { value: "", error: `${label} is required.` }
  }

  if (trimmedValue.length > maxLength) {
    return {
      value: "",
      error: `${label} must be ${maxLength} characters or fewer.`,
    }
  }

  return { value: trimmedValue, error: "" }
}

function validatePayload(
  payload: unknown
): { ok: true; data: ValidatedContactPayload } | { ok: false; error: string } {
  if (!isRecord(payload)) {
    return { ok: false, error: "Invalid request payload." }
  }

  const name = readRequiredString(payload, "name", "Name", 80)
  if (name.error) return { ok: false, error: name.error }

  const email = readRequiredString(payload, "email", "Email", 254)
  if (email.error) return { ok: false, error: email.error }

  const message = readRequiredString(payload, "message", "Message", 2_000)
  if (message.error) return { ok: false, error: message.error }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    return { ok: false, error: "Invalid email address." }
  }

  return {
    ok: true,
    data: {
      name: name.value.replace(/\s+/g, " "),
      email: email.value,
      message: message.value,
      website:
        typeof payload.website === "string" ? payload.website.trim() : "",
    },
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;"
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case '"':
        return "&quot;"
      case "'":
        return "&#39;"
      default:
        return char
    }
  })
}

export async function POST(req: NextRequest) {
  try {
    const rateLimit = checkRateLimit(getClientKey(req))
    if (rateLimit.limited) {
      return jsonError("Too many messages. Please try again later.", 429, {
        "Retry-After": String(rateLimit.retryAfter),
      })
    }

    const contentType = req.headers.get("content-type")
    if (!contentType?.includes("application/json")) {
      return jsonError("Content-Type must be application/json.", 415)
    }

    const body = await req.text()
    if (body.length > MAX_BODY_CHARACTERS) {
      return jsonError("Message is too large.", 413)
    }

    let payload: unknown
    try {
      payload = JSON.parse(body)
    } catch {
      return jsonError("Invalid JSON payload.", 400)
    }

    const validatedPayload = validatePayload(payload)
    if (!validatedPayload.ok) {
      return jsonError(validatedPayload.error, 400)
    }

    const { name, email, message, website } = validatedPayload.data

    if (website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY")
      return jsonError("Email service is not configured.", 500)
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)
    const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
      "Re: Your message on heetviradiya.codes"
    )}`

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "hpviradiya05@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — heetviradiya.codes`,
      text: `New Portfolio Message

From: ${name}
Email: ${email}

Message:
${message}
`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; border-radius: 16px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); padding: 40px 40px 32px; border-bottom: 1px solid #222;">
            <div style="font-size: 22px; font-weight: 700; letter-spacing: -0.5px; color: #fff;">
              New Portfolio Message
            </div>
            <div style="font-size: 13px; color: #666; margin-top: 6px; letter-spacing: 0.3em; text-transform: uppercase;">
              heetviradiya.codes
            </div>
          </div>

          <!-- Body -->
          <div style="padding: 36px 40px;">

            <!-- Sender info -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
              <tr>
                <td style="padding: 14px 16px; background: #141414; border-radius: 10px 10px 0 0; border-bottom: 1px solid #1e1e1e;">
                  <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #555; margin-bottom: 4px;">From</div>
                  <div style="font-size: 15px; font-weight: 600; color: #fff;">${safeName}</div>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; background: #141414; border-radius: 0 0 10px 10px;">
                  <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #555; margin-bottom: 4px;">Email</div>
                  <div style="font-size: 15px; color: #a3a3a3;">
                    <a href="mailto:${encodeURIComponent(email)}" style="color: #a3a3a3; text-decoration: none;">${safeEmail}</a>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="background: #141414; border-radius: 10px; padding: 20px 16px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #555; margin-bottom: 12px;">Message</div>
              <div style="font-size: 15px; line-height: 1.7; color: #d4d4d4; white-space: pre-wrap;">${safeMessage}</div>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top: 32px; text-align: center;">
              <a href="${replyHref}" 
                 style="display: inline-block; background: #fff; color: #0a0a0a; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 100px; text-decoration: none; letter-spacing: -0.2px;">
                Reply to ${safeName}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px 28px; border-top: 1px solid #1a1a1a; text-align: center;">
            <div style="font-size: 11px; color: #444; letter-spacing: 0.2em; text-transform: uppercase;">
              Sent via heetviradiya.codes contact form
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
