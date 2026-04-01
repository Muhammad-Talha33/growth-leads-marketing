import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, business, phone, message } = await req.json()

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: 'New Contact Form Submission — Growth Leads Marketing',
        from_name: 'Growth Leads Marketing Website',
        name,
        email,
        'Business Name': business?.trim() || 'Not provided',
        'Phone Number':  phone?.trim()    || 'Not provided',
        message,
      }),
    })

    const data = await res.json()

    if (data.success) {
      return NextResponse.json({ success: true })
    }

    console.error('[Contact API] Web3Forms error:', data)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 }
    )
  } catch (err) {
    console.error('[Contact API] Network error:', err)
    return NextResponse.json(
      { error: 'Network error. Please try again.' },
      { status: 500 }
    )
  }
}
