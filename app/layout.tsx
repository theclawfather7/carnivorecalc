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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
