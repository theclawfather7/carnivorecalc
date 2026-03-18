import type { Metadata } from 'next'
import Link from 'next/link'
import { goals } from './data'

export const metadata: Metadata = {
  title: 'Carnivore Diet Calculators by Goal | CarnivoreCalc',
  description: 'Choose your carnivore diet calculator by goal — weight loss, muscle gain, women, beginners, lion diet, diabetes, athletes, and autoimmune conditions.',
  keywords: 'carnivore diet calculator by goal, carnivore diet weight loss calculator, carnivore diet muscle gain calculator, carnivore diet for women',
}

const goalEmojis: Record<string, string> = {
  'weight-loss': '🔥',
  'muscle-gain': '💪',
  'women': '👩',
  'beginners': '🥩',
  'lion-diet': '🦁',
  'diabetes': '💉',
  'athletes': '🏋️',
  'autoimmune': '🛡️',
}

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Specialized Calculators
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carnivore Diet Calculators <span className="text-red-400">by Goal</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Every carnivore goal has different macro requirements. Choose your specific goal below for a
            calculator and guide built for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {goals.map((goal) => (
            <Link
              key={goal.slug}
              href={`/goals/${goal.slug}`}
              className="group bg-stone-800/50 border border-stone-700 hover:border-red-500/50 rounded-2xl p-6 transition-all hover:bg-stone-800"
            >
              <div className="text-3xl mb-3">{goalEmojis[goal.slug] || '🥩'}</div>
              <h2 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                {goal.h1}
              </h2>
              <p className="text-stone-400 text-sm line-clamp-2">{goal.subtitle}</p>
              <div className="mt-4 text-red-400 text-sm font-medium group-hover:text-red-300">
                Calculate →
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 text-center">
          <p className="text-stone-400 mb-4">Not sure which calculator to use?</p>
          <Link
            href="/"
            className="inline-block bg-red-500 hover:bg-red-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Use the General Carnivore Calculator →
          </Link>
        </div>
      </div>
    </main>
  )
}
