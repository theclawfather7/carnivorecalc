import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarnivoreCalc — Free Carnivore Macro Calculator',
  description: 'Calculate your exact protein and fat targets for the carnivore diet. Free calculator + 30-day meal plan.',
  keywords: 'carnivore diet calculator, carnivore macros, how much protein on carnivore, carnivore meal plan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3L889BT4JN" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-3L889BT4JN');` }} />
      </head>
      <body className={inter.className}>
        {children}
        <footer style={{ borderTop: '1px solid #1f1f1f', padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: '#0a0a0a' }}>
          <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
            © {new Date().getFullYear()} CarnivoreCalc. Not medical advice.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/blog" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none' }}>Blog</a>
            <a href="/guide" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none' }}>Meal Plan Guide</a>
            <a href="/privacy" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
