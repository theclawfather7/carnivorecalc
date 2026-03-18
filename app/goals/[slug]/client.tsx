'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GoalData } from '../data'

const activityLevels = [
  { label: 'Sedentary (desk job, little exercise)', multiplier: 1.2 },
  { label: 'Lightly Active (1-3x exercise/week)', multiplier: 1.375 },
  { label: 'Moderately Active (3-5x exercise/week)', multiplier: 1.55 },
  { label: 'Very Active (hard exercise 6-7x/week)', multiplier: 1.725 },
]

interface Props {
  goal: GoalData
}

export default function GoalCalculatorClient({ goal }: Props) {
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs')
  const [activity, setActivity] = useState('')
  const [result, setResult] = useState<{ calories: number; protein: number; fat: number } | null>(null)
  const [loading, setLoading] = useState(false)

  const calculate = () => {
    const w = parseFloat(weight)
    const a = activityLevels.find(x => x.label === activity)
    if (!w || !a) return

    const weightKg = unit === 'lbs' ? w * 0.453592 : w
    const bmr = weightKg * 22
    const tdee = Math.round(bmr * a.multiplier)
    const protein = Math.round(weightKg * goal.proteinMultiplier * 2.2)
    const fat = Math.round((tdee - protein * 4) / 9)

    setResult({ calories: tdee, protein, fat: Math.max(fat, 50) })
  }

  const handleBuy = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{goal.h1}</h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">{goal.subtitle}</p>
        </div>

        {/* Intro */}
        <div className="bg-stone-800/30 border border-stone-700 rounded-2xl p-6 mb-8">
          <p className="text-stone-300 leading-relaxed">{goal.intro}</p>
        </div>

        {/* Calculator */}
        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">{goal.cta}</h2>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">Your Body Weight</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={weight}
                  onChange={e => { setWeight(e.target.value); setResult(null) }}
                  placeholder="Enter weight..."
                  className="flex-1 bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex rounded-lg overflow-hidden border border-stone-600">
                  <button onClick={() => setUnit('lbs')} className={`px-4 py-3 text-sm font-medium ${unit === 'lbs' ? 'bg-red-500 text-white' : 'bg-stone-700 text-stone-400'}`}>lbs</button>
                  <button onClick={() => setUnit('kg')} className={`px-4 py-3 text-sm font-medium ${unit === 'kg' ? 'bg-red-500 text-white' : 'bg-stone-700 text-stone-400'}`}>kg</button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">Activity Level</label>
              <select
                value={activity}
                onChange={e => { setActivity(e.target.value); setResult(null) }}
                className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select activity level...</option>
                {activityLevels.map(a => <option key={a.label} value={a.label}>{a.label}</option>)}
              </select>
            </div>

            <button
              onClick={calculate}
              disabled={!weight || !activity}
              className="w-full bg-red-500 hover:bg-red-400 disabled:bg-stone-600 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-lg"
            >
              Calculate My {goal.goal} Macros →
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-8 mb-8">
            <p className="text-stone-400 text-center mb-6">Your daily carnivore targets for {goal.goal.toLowerCase()}</p>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div className="bg-stone-800/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-white">{result.calories}</div>
                <div className="text-xs text-stone-400 mt-1">Calories/day</div>
              </div>
              <div className="bg-red-500/20 rounded-xl p-4">
                <div className="text-3xl font-bold text-red-400">{result.protein}g</div>
                <div className="text-xs text-red-300 mt-1">Protein/day</div>
              </div>
              <div className="bg-stone-800/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-white">{result.fat}g</div>
                <div className="text-xs text-stone-400 mt-1">Fat/day</div>
              </div>
            </div>

            {/* Upsell */}
            <div className="bg-stone-800 border border-stone-600 rounded-xl p-6 mt-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🥩</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">Want the done-for-you 30-Day Meal Plan?</h3>
                  <p className="text-stone-400 text-sm mb-4">Every meal mapped out for 30 days. Shopping lists, macro breakdowns, budget options, and eating-out guide. Instant PDF download.</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <button
                      onClick={handleBuy}
                      disabled={loading}
                      className="bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                    >
                      {loading ? 'Loading...' : 'Get the 30-Day Meal Plan — $17'}
                    </button>
                    <span className="text-stone-500 text-xs">Instant download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why It Works */}
        <div className="bg-stone-800/30 border border-stone-700 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Why Carnivore Works for {goal.goal === 'Strict Carnivore (fat adaptation)' ? 'This Protocol' : goal.goal}</h2>
          <ul className="space-y-3">
            {goal.whyWorks.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✓</span>
                <span className="text-stone-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benchmark Macros */}
        <div className="bg-stone-800/30 border border-stone-700 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Example Macro Targets</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-stone-700">
                  <th className="pb-3 text-stone-400 font-medium">Example Person</th>
                  <th className="pb-3 text-stone-400 font-medium text-right">Calories</th>
                  <th className="pb-3 text-stone-400 font-medium text-right">Protein</th>
                  <th className="pb-3 text-stone-400 font-medium text-right">Fat</th>
                </tr>
              </thead>
              <tbody>
                {goal.benchmarks.map((b, i) => (
                  <tr key={i} className="border-b border-stone-800/50">
                    <td className="py-3 text-stone-300">{b.example}</td>
                    <td className="py-3 text-stone-400 text-right">{b.calories}</td>
                    <td className="py-3 text-red-400 text-right font-medium">{b.proteinG}g</td>
                    <td className="py-3 text-stone-400 text-right">{b.fatG}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-600 text-xs mt-3">Use the calculator above for your exact numbers. These are examples only.</p>
        </div>

        {/* Tips */}
        <div className="bg-stone-800/30 border border-stone-700 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Tips for Success</h2>
          <ul className="space-y-3">
            {goal.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">{i + 1}.</span>
                <span className="text-stone-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="bg-stone-800/30 border border-stone-700 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {goal.faqs.map((faq, i) => (
              <div key={i} className="border-b border-stone-800 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-stone-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-stone-400">Explore other carnivore calculators</p>
              <Link href="/goals" className="text-red-400 hover:text-red-300 font-medium">
                Browse all goal-specific calculators →
              </Link>
            </div>
            <Link href="/" className="text-stone-400 hover:text-white text-sm">
              ← Back to main calculator
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
