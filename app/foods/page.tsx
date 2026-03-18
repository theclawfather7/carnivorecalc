import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carnivore Diet Food Guide | Macros, Benefits & How-To | CarnivoreCalc',
  description: 'Complete carnivore diet food guide — macros, protein, fat, and calories for every major carnivore food. Beef, eggs, bacon, salmon, organ meats, and more.',
  keywords: 'carnivore diet foods, carnivore diet food list macros, what to eat on carnivore diet, carnivore diet food guide',
  openGraph: {
    title: 'Carnivore Diet Food Guide | CarnivoreCalc',
    description: 'Macros, benefits, and how-to for every major carnivore diet food.',
    url: 'https://carnivorecalc.com/foods',
    siteName: 'CarnivoreCalc',
    type: 'website',
  },
}

const foods = [
  { slug: 'ribeye-steak', name: 'Ribeye Steak', emoji: '🥩', category: 'Beef', protein: '26g', fat: '22g', cal: '305', badge: 'Most Popular' },
  { slug: 'eggs', name: 'Eggs', emoji: '🥚', category: 'Eggs & Dairy', protein: '6g', fat: '5g', cal: '70', badge: 'Essential' },
  { slug: 'bacon', name: 'Bacon', emoji: '🥓', category: 'Pork', protein: '12g', fat: '15g', cal: '185', badge: 'Fan Favorite' },
  { slug: 'ground-beef', name: 'Ground Beef (80/20)', emoji: '🫕', category: 'Beef', protein: '19g', fat: '23g', cal: '285', badge: 'Budget Pick' },
  { slug: 'salmon', name: 'Salmon', emoji: '🐟', category: 'Seafood', protein: '22g', fat: '13g', cal: '206', badge: 'Omega-3 Rich' },
  { slug: 'chicken-thighs', name: 'Chicken Thighs', emoji: '🍗', category: 'Poultry', protein: '19g', fat: '11g', cal: '179', badge: 'Versatile' },
  { slug: 'butter', name: 'Butter', emoji: '🧈', category: 'Dairy & Fat', protein: '0.1g', fat: '11g', cal: '102', badge: 'Fat Source' },
  { slug: 'beef-liver', name: 'Beef Liver', emoji: '🫀', category: 'Organ Meats', protein: '20g', fat: '4g', cal: '135', badge: 'Nutrient Dense' },
  { slug: 'lamb-chops', name: 'Lamb Chops', emoji: '🍖', category: 'Lamb', protein: '25g', fat: '16g', cal: '245', badge: 'High Quality' },
  { slug: 'sardines', name: 'Sardines', emoji: '🐠', category: 'Seafood', protein: '25g', fat: '11g', cal: '208', badge: 'Carnivore Staple' },
  { slug: 'pork-belly', name: 'Pork Belly', emoji: '🐷', category: 'Pork', protein: '9g', fat: '35g', cal: '350', badge: 'High Fat' },
  { slug: 'beef-tallow', name: 'Beef Tallow', emoji: '🫙', category: 'Fats', protein: '0g', fat: '13g', cal: '115', badge: 'Cooking Fat' },
  { slug: 'new-york-strip', name: 'New York Strip', emoji: '🥩', category: 'Beef', protein: '27g', fat: '14g', cal: '233', badge: 'Lean Beef' },
  { slug: 'shrimp', name: 'Shrimp', emoji: '🦐', category: 'Seafood', protein: '20g', fat: '1g', cal: '84', badge: 'High Protein' },
  { slug: 'heavy-cream', name: 'Heavy Cream', emoji: '🥛', category: 'Dairy', protein: '0.6g', fat: '5.5g', cal: '52', badge: 'Dairy Option' },
]

export default function FoodsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Carnivore Food Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carnivore Diet <span className="text-red-400">Food Guide</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Macros, nutritional profiles, and carnivore-specific guidance for every major food on the carnivore diet. Click any food for detailed breakdown.
          </p>
        </div>

        {/* Quick macro reference */}
        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 mb-12 overflow-x-auto">
          <h2 className="text-lg font-bold text-white mb-4">Quick Reference — Per 100g / serving</h2>
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="text-stone-500 text-xs uppercase border-b border-stone-700">
                <th className="text-left py-2 pr-4">Food</th>
                <th className="text-left py-2 pr-4">Protein</th>
                <th className="text-left py-2 pr-4">Fat</th>
                <th className="text-left py-2">Calories</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {foods.map((f) => (
                <tr key={f.slug} className="hover:bg-stone-800/50">
                  <td className="py-2.5 pr-4">
                    <Link href={`/foods/${f.slug}`} className="flex items-center gap-2 text-white hover:text-red-400 transition-colors font-medium">
                      <span>{f.emoji}</span> {f.name}
                    </Link>
                  </td>
                  <td className="py-2.5 pr-4 text-stone-400">{f.protein}</td>
                  <td className="py-2.5 pr-4 text-stone-400">{f.fat}</td>
                  <td className="py-2.5 text-stone-400">{f.cal} kcal</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Food cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {foods.map((food) => (
            <Link
              key={food.slug}
              href={`/foods/${food.slug}`}
              className="group bg-stone-800/50 border border-stone-700 hover:border-red-500/50 rounded-2xl p-5 transition-all hover:bg-stone-800"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{food.emoji}</span>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">{food.badge}</span>
              </div>
              <h2 className="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{food.name}</h2>
              <p className="text-stone-500 text-xs mb-3">{food.category}</p>
              <div className="flex gap-4 text-xs text-stone-400">
                <span>Protein: <span className="text-white font-medium">{food.protein}</span></span>
                <span>Fat: <span className="text-white font-medium">{food.fat}</span></span>
                <span><span className="text-white font-medium">{food.cal}</span> kcal</span>
              </div>
              <div className="mt-3 text-red-400 text-xs font-medium group-hover:text-red-300 transition-colors">
                Full guide + macros →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-stone-800/50 border border-stone-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Calculate Your Carnivore Macros</h2>
          <p className="text-stone-400 mb-6 text-sm">
            Know how much of each food you need daily based on your weight, goal, and activity level.
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Use the Free Macro Calculator →
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-600 text-xs">
          <p>© 2025 CarnivoreCalc · Not medical advice · Consult a healthcare provider</p>
        </footer>
      </div>
    </main>
  )
}
