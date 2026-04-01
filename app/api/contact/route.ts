import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, business, phone, message } = await req.json()

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #f8fafc; padding: 32px;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #0B1F3A 0%, #0F4C81 100%); border-radius: 12px 12px 0 0; padding: 28px 32px; text-align: center;">
        <p style="color: #F97316; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px;">New Lead</p>
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.6); margin: 6px 0 0; font-size: 13px;">Growth Leads Marketing</p>
      </div>

      <!-- Body -->
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">

        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; width: 140px;">Full Name</td>
            <td style="padding: 14px 0; font-size: 15px; color: #0B1F3A; font-weight: 600;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Email</td>
            <td style="padding: 14px 0; font-size: 15px;">
              <a href="mailto:${email}" style="color: #0F4C81; text-decoration: none; font-weight: 500;">${email}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Business</td>
            <td style="padding: 14px 0; font-size: 15px; color: #0B1F3A;">${business?.trim() || '<span style="color:#94a3b8;">—</span>'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Phone</td>
            <td style="padding: 14px 0; font-size: 15px; color: #0B1F3A;">${phone?.trim() || '<span style="color:#94a3b8;">—</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; vertical-align: top;">Message</td>
            <td style="padding: 14px 0; font-size: 15px; color: #334155; line-height: 1.7; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>

        <!-- Reply CTA -->
        <div style="margin-top: 28px; padding-top: 24px; border-top: 1px solid #f1f5f9; text-align: center;">
          <a href="mailto:${email}"
            style="display: inline-block; background: #F97316; color: #ffffff; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none;">
            Reply to ${name}
          </a>
        </div>
      </div>

      <!-- Footer -->
      <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
        This message was submitted via the contact form on<br />
        <strong style="color: #64748b;">growthleadsmarketing.vercel.app</strong>
      </p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Growth Leads Marketing" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: 'New Contact Form Submission — Growth Leads Marketing',
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API] Email error:', err)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 }
    )
  }
}
