import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "hpviradiya05@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — heetviradiya.codes`,
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
                  <div style="font-size: 15px; font-weight: 600; color: #fff;">${name}</div>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; background: #141414; border-radius: 0 0 10px 10px;">
                  <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #555; margin-bottom: 4px;">Email</div>
                  <div style="font-size: 15px; color: #a3a3a3;">
                    <a href="mailto:${email}" style="color: #a3a3a3; text-decoration: none;">${email}</a>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="background: #141414; border-radius: 10px; padding: 20px 16px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #555; margin-bottom: 12px;">Message</div>
              <div style="font-size: 15px; line-height: 1.7; color: #d4d4d4; white-space: pre-wrap;">${message}</div>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Your message on heetviradiya.codes" 
                 style="display: inline-block; background: #fff; color: #0a0a0a; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 100px; text-decoration: none; letter-spacing: -0.2px;">
                Reply to ${name}
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
