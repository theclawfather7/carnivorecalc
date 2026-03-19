import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carnivore Diet Comparisons | vs Keto, Paleo, Low Carb & More | CarnivoreCalc',
  description: 'How does the carnivore diet compare to keto, paleo, low carb, and other popular diets? Side-by-side breakdowns with macros, food lists, and which is right for your goal.',
  keywords: 'carnivore diet vs keto, carnivore vs paleo, carnivore vs low carb, carnivore diet comparison, which diet is best for weight loss',
  openGraph: {
    title: 'Carnivore Diet vs Other Diets | CarnivoreCalc',
    description: 'Side-by-side diet comparisons: carnivore vs keto, paleo, low carb, vegan, and more.',
    url: 'https://carnivorecalc.com/compare',
    siteName: 'CarnivoreCalc',
    type: 'website',
  },
}

const comparisons = [
  { slug: 'carnivore-vs-keto', name: 'Carnivore vs Keto', emoji: '🥩⚡', tagline: 'Both are low-carb — but one goes further', badge: 'Most Searched' },
  { slug: 'carnivore-vs-paleo', name: 'Carnivore vs Paleo', emoji: '🥩🫐', tagline: 'Animal foods vs ancestral eating — what\'s the difference?', badge: 'Popular' },
  { slug: 'carnivore-vs-low-carb', name: 'Carnivore vs Low Carb', emoji: '🥩🥦', tagline: 'How strict is strict enough?', badge: 'Common Question' },
  { slug: 'carnivore-vs-vegan', name: 'Carnivore vs Vegan', emoji: '🥩🌱', tagline: 'The opposite ends of the dietary spectrum', badge: 'Controversial' },
  { slug: 'carnivore-vs-mediterranean', name: 'Carnivore vs Mediterranean', emoji: '🥩🫒', tagline: 'Ancestral animal foods vs ancestral plant foods', badge: 'Head-to-Head' },
  { slug: 'carnivore-vs-intermittent-fasting', name: 'Carnivore vs Intermittent Fasting', emoji: '🥩⏱️', tagline: 'Can you combine them? Which works better alone?', badge: 'Combinable' },
]

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 opacity-70 hover:opacity-100 transition-opacity text-sm text-stone-400">
            ← Back to Calculator
          </Link>
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Diet Comparisons
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carnivore Diet <span className="text-red-400">vs Everything</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            How does the carnivore diet stack up against keto, paleo, low carb, and other popular approaches? Side-by-side breakdowns with real macro differences and honest trade-offs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group bg-stone-800/50 border border-stone-700 hover:border-red-500/50 rounded-2xl p-6 transition-all hover:bg-stone-800"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{c.emoji}</span>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">{c.badge}</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{c.name}</h2>
              <p className="text-stone-400 text-sm">{c.tagline}</p>
              <div className="mt-3 text-red-400 text-sm font-medium group-hover:text-red-300 transition-colors">See comparison →</div>
            </Link>
          ))}
        </div>

        <div className="text-center bg-stone-800/50 border border-stone-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Find Your Carnivore Macros</h2>
          <p className="text-stone-400 text-sm mb-6">Whatever diet you choose, knowing your exact protein and fat targets makes all the difference.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors">
            Use the Free Macro Calculator →
          </Link>
        </div>

        <footer className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-600 text-xs">
          <p>© 2025 CarnivoreCalc · Not medical advice</p>
        </footer>
      </div>
    </main>
  )
}
