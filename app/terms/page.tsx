import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | CarnivoreCalc',
  description: 'Terms of service for CarnivoreCalc.com.',
}

export default function TermsOfService() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#e8e8e8', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
          ← Back to CarnivoreCalc
        </Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
          Terms of Service
        </h1>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Last updated: March 17, 2026
        </p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem', color: '#d1d5db' }}>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              What CarnivoreCalc is
            </h2>
            <p>
              CarnivoreCalc.com provides a free carnivore diet macro calculator and an optional paid PDF meal plan guide. The calculator helps you estimate protein and fat targets based on your body weight, activity level, and goals. The PDF guide provides a 30-day meal framework based on carnivore diet principles.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Payment terms
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              The PDF meal plan guide is available for a one-time payment of <strong>$17 USD</strong>. This is not a subscription — you pay once and receive the guide.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Refund policy:</strong> Because the PDF is a digital product that is delivered immediately upon purchase, we do not offer refunds after delivery. If you have a technical issue receiving your guide, contact us at{' '}
              <a href="mailto:hello@carnivorecalc.com" style={{ color: '#f97316' }}>hello@carnivorecalc.com</a>{' '}
              and we&apos;ll make it right.
            </p>
            <p>
              Payments are processed securely by Stripe. CarnivoreCalc does not store your payment information.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Not medical advice
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Important:</strong> CarnivoreCalc is an informational tool only. Nothing on this site — including the calculator results, the PDF guide, or any content — constitutes medical advice, nutritional therapy, or a treatment plan.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Macro calculations are estimates. Individual needs vary based on health conditions, medications, and other factors that this calculator cannot account for.
            </p>
            <p>
              Always consult a qualified healthcare professional before making significant changes to your diet, especially if you have diabetes, kidney disease, cardiovascular conditions, or any other medical condition.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Use of the service
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              You may use CarnivoreCalc for personal, non-commercial purposes. You may not:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Reproduce or redistribute our paid PDF content without permission</li>
              <li style={{ marginBottom: '0.5rem' }}>Use automated tools to scrape or bulk-access the site</li>
              <li style={{ marginBottom: '0.5rem' }}>Misrepresent our content as your own</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Limitation of liability
            </h2>
            <p>
              CarnivoreCalc is provided &quot;as is&quot; without warranties of any kind. We are not liable for any health outcomes, decisions made based on calculator results, or damages arising from use of this site. Your use of this service is at your own discretion.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of the State of Arizona, United States, without regard to conflict of law principles.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Contact
            </h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:hello@carnivorecalc.com" style={{ color: '#f97316' }}>
                hello@carnivorecalc.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
