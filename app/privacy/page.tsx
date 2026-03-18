import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | CarnivoreCalc',
  description: 'Privacy policy for CarnivoreCalc.com — what data we collect and how we use it.',
}

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#e8e8e8', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
          ← Back to CarnivoreCalc
        </Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Last updated: March 17, 2026
        </p>

        <div style={{ lineHeight: 1.8, fontSize: '1rem', color: '#d1d5db' }}>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              The short version
            </h2>
            <p>
              CarnivoreCalc is a free macro calculator. We don&apos;t collect your name, email, or any personal details just to use the calculator. You run a calculation, you get your numbers. That&apos;s it.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Data we collect
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We collect minimal data:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Calculator inputs</strong> — weight, height, activity level, and goals you enter into the calculator. These are processed in your browser and are not stored on our servers.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Analytics data</strong> — page views, referral sources, and browser type, collected anonymously via Google Analytics. No personally identifiable information is tied to this data.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Purchase data</strong> — if you purchase the PDF guide, Stripe collects your payment details. We receive only your email address so we can deliver the guide.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Cookies
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              We use cookies for two purposes:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Analytics</strong> — Google Analytics uses cookies to distinguish unique visitors and track sessions. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: '#f97316' }} target="_blank" rel="noopener noreferrer">Google&apos;s opt-out tool</a>.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Functionality</strong> — Stripe may set cookies during checkout to prevent fraud and ensure payment security.
              </li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              We do not use advertising cookies or sell data to third parties.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Third-party services
            </h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Stripe</strong> — Payment processing. Your card details go directly to Stripe and are never stored on our servers. <a href="https://stripe.com/privacy" style={{ color: '#f97316' }} target="_blank" rel="noopener noreferrer">Stripe&apos;s Privacy Policy →</a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Google Analytics</strong> — Anonymous usage analytics. <a href="https://policies.google.com/privacy" style={{ color: '#f97316' }} target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy →</a>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Your rights
            </h2>
            <p>
              You can request deletion of any data we hold about you at any time. Since we collect very little, this is usually just your email address if you made a purchase. Email us and we&apos;ll take care of it promptly.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
              Contact
            </h2>
            <p>
              Questions? Email us at{' '}
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
