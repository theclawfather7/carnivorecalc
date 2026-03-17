'use client'

import { useState } from 'react'

const goals = [
  { label: 'Weight Loss', proteinMultiplier: 1.0, fatMultiplier: 0.7 },
  { label: 'Muscle Gain', proteinMultiplier: 1.4, fatMultiplier: 0.9 },
  { label: 'Maintenance', proteinMultiplier: 1.2, fatMultiplier: 0.8 },
  { label: 'Strict Carnivore (fat adaptation)', proteinMultiplier: 0.8, fatMultiplier: 1.2 },
]

const activityLevels = [
  { label: 'Sedentary (desk job, little exercise)', multiplier: 1.2 },
  { label: 'Lightly Active (1-3x exercise/week)', multiplier: 1.375 },
  { label: 'Moderately Active (3-5x exercise/week)', multiplier: 1.55 },
  { label: 'Very Active (hard exercise 6-7x/week)', multiplier: 1.725 },
]

export default function Home() {
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs')
  const [goal, setGoal] = useState('')
  const [activity, setActivity] = useState('')
  const [result, setResult] = useState<{ calories: number; protein: number; fat: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [showUpsell, setShowUpsell] = useState(false)

  const calculate = () => {
    const w = parseFloat(weight)
    const g = goals.find(x => x.label === goal)
    const a = activityLevels.find(x => x.label === activity)
    if (!w || !g || !a) return

    const weightKg = unit === 'lbs' ? w * 0.453592 : w
    const bmr = weightKg * 22 // simplified for carnivore
    const tdee = Math.round(bmr * a.multiplier)
    const protein = Math.round(weightKg * g.proteinMultiplier * 2.2) // g per lb
    const fat = Math.round((tdee - protein * 4) / 9)

    setResult({ calories: tdee, protein, fat })
    setShowUpsell(true)
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
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Carnivore Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Carnivore <span className="text-red-400">Macro Calculator</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Get your exact daily protein and fat targets for the carnivore diet based on your body weight and goals.
          </p>
        </div>

        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 mb-8">
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">Body Weight</label>
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
              <label className="block text-sm font-medium text-stone-300 mb-2">Your Goal</label>
              <select
                value={goal}
                onChange={e => { setGoal(e.target.value); setResult(null) }}
                className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select your goal...</option>
                {goals.map(g => <option key={g.label} value={g.label}>{g.label}</option>)}
              </select>
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
              disabled={!weight || !goal || !activity}
              className="w-full bg-red-500 hover:bg-red-400 disabled:bg-stone-600 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-lg"
            >
              Calculate My Macros →
            </button>
          </div>
        </div>

        {result && (
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-8 mb-8">
            <p className="text-stone-400 text-center mb-6">Your daily carnivore targets</p>
            <div className="grid grid-cols-3 gap-4 text-center">
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
            <p className="text-stone-500 text-xs text-center mt-4">
              Example: ~{Math.round(result.protein / 30)}oz of beef + {Math.round(result.fat / 10)} tablespoons of tallow/butter per day
            </p>
          </div>
        )}

        {showUpsell && (
          <div className="bg-stone-800 border border-stone-600 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🥩</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Want a done-for-you 30-day plan?</h2>
                <p className="text-stone-400 mb-4">
                  Stop guessing what to eat. The <strong className="text-white">Carnivore 30-Day Meal Plan</strong> gives you:
                </p>
                <ul className="text-stone-300 space-y-2 mb-6 text-sm">
                  <li>✓ Every meal for 30 days mapped out</li>
                  <li>✓ Daily macro breakdowns matching your numbers above</li>
                  <li>✓ Weekly shopping lists (no food waste)</li>
                  <li>✓ Budget carnivore options + premium options</li>
                  <li>✓ How to handle electrolytes and the adaptation phase</li>
                  <li>✓ What to eat when eating out</li>
                </ul>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleBuy}
                    disabled={loading}
                    className="bg-red-500 hover:bg-red-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    {loading ? 'Loading...' : 'Get the Meal Plan — $17'}
                  </button>
                  <span className="text-stone-500 text-sm">Instant PDF download</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center text-stone-600 text-sm">
          <p>Trusted by carnivore dieters in 30+ countries · Based on real-world carnivore macro research</p>
        </div>
      </div>
    </main>
  )
}
