export const dynamic = 'force-dynamic'

import { redirect } from 'next/navigation'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover' as any,
})

const RESEND_API_KEY = 're_DqcaSBS8_DZC3zvN22qUfTf1zNcfvHuAb'
const DOWNLOAD_URL = 'https://carnivorecalc.com/downloads/carnivore-30-day-meal-plan.pdf'

async function sendDeliveryEmail(email: string) {
  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #1c1917; color: #e7e5e4; padding: 40px 32px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <span style="font-size: 48px;">🥩</span>
        <h1 style="color: #f87171; font-size: 26px; margin: 16px 0 8px;">Your 30-Day Carnivore Meal Plan</h1>
        <p style="color: #a8a29e; margin: 0;">Payment confirmed — here's your download link.</p>
      </div>
      <div style="text-align: center; margin: 32px 0;">
        <a href="${DOWNLOAD_URL}" style="display: inline-block; background: #dc2626; color: #fff; font-weight: bold; font-size: 18px; padding: 16px 40px; border-radius: 10px; text-decoration: none;">
          🥩 Download Your Meal Plan →
        </a>
      </div>
      <p style="color: #a8a29e; font-size: 14px; text-align: center; margin-top: 24px;">
        Save the PDF to your device so you have it forever. If you have any issues, reply to this email and we'll sort it out.
      </p>
      <hr style="border: none; border-top: 1px solid #44403c; margin: 32px 0;" />
      <p style="color: #57534e; font-size: 12px; text-align: center;">
        CarnivoreCalc · <a href="https://carnivorecalc.com" style="color: #57534e;">carnivorecalc.com</a>
      </p>
    </div>
  `

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'CarnivoreCalc <hello@carnivorecalc.com>',
      to: email,
      subject: 'Your 30-Day Carnivore Meal Plan is here 🥩',
      html,
    }),
  })
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id

  if (!sessionId) {
    redirect('/')
  }

  let email: string | null = null
  let paid = false

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    paid = session.payment_status === 'paid'
    email = session.customer_email ?? (session.customer_details?.email ?? null)
  } catch {
    // session retrieval failed — still show success page
  }

  if (paid && email) {
    try {
      await sendDeliveryEmail(email)
    } catch {
      // email send failed — don't block the page
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-6xl mb-6">🥩</div>
        <h1 className="text-3xl font-bold mb-4">Your Meal Plan is Ready!</h1>
        <p className="text-stone-400 mb-8">
          Payment confirmed. Your 30-Day Carnivore Meal Plan is below — download it now and save it forever.
          {email && (
            <> A copy was also sent to <strong className="text-stone-300">{email}</strong>.</>
          )}
        </p>

        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors mb-4 shadow-lg shadow-red-500/20"
        >
          🥩 Download Your Meal Plan →
        </a>

        <p className="text-stone-500 text-sm mb-6">
          Check your email for a copy too. Check spam if you don&apos;t see it.
        </p>

        <a href="/" className="text-stone-500 hover:text-stone-400 text-sm transition-colors">
          ← Back to Calculator
        </a>
      </div>
    </main>
  )
}
