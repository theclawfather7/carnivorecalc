import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carnivore Diet Recipes | Simple Meat-Only Meals | CarnivoreCalc',
  description: 'Simple carnivore diet recipes with macros. Ribeye steak, ground beef bowls, bacon and eggs, lamb chops, salmon, and more. Zero-carb, meat-only recipes for every meal.',
  keywords: 'carnivore diet recipes, carnivore recipes simple, meat only recipes, zero carb recipes, carnivore diet meal ideas, carnivore diet breakfast lunch dinner',
  openGraph: {
    title: 'Carnivore Diet Recipes | Simple Meat-Only Meals | CarnivoreCalc',
    description: 'Simple carnivore diet recipes with macros. Zero-carb meat-only meals for breakfast, lunch, and dinner.',
    url: 'https://carnivorecalc.com/recipes',
    siteName: 'CarnivoreCalc',
    type: 'website',
  },
}

const recipes = [
  {
    slug: 'ribeye-steak',
    name: 'Perfect Ribeye Steak',
    emoji: '🥩',
    cookTime: '12 min',
    protein: '58g',
    fat: '48g',
    calories: '680',
    difficulty: 'Easy',
    badge: 'Most Popular',
    description: 'The carnivore king. A properly cooked ribeye is the foundation of the carnivore diet — rich, satisfying, and loaded with protein and healthy fat.',
  },
  {
    slug: 'ground-beef-bowl',
    name: 'Ground Beef Bowl',
    emoji: '🍖',
    cookTime: '15 min',
    protein: '45g',
    fat: '35g',
    calories: '510',
    difficulty: 'Easy',
    badge: 'Budget Pick',
    description: 'The most economical carnivore staple. Ground beef (80/20) is calorie-dense, protein-rich, and cooks in 15 minutes. Perfect for batch cooking.',
  },
  {
    slug: 'bacon-and-eggs',
    name: 'Bacon and Eggs',
    emoji: '🥓',
    cookTime: '10 min',
    protein: '28g',
    fat: '42g',
    calories: '490',
    difficulty: 'Easy',
    badge: 'Breakfast Classic',
    description: 'The perfect carnivore breakfast. Thick-cut bacon plus 3-4 eggs delivers a high-fat, moderate-protein start that keeps you full until dinner.',
  },
  {
    slug: 'lamb-chops',
    name: 'Pan-Seared Lamb Chops',
    emoji: '🫀',
    cookTime: '16 min',
    protein: '42g',
    fat: '38g',
    calories: '510',
    difficulty: 'Medium',
    badge: 'Rich Flavor',
    description: 'Lamb is one of the most nutrient-dense meats on the carnivore diet. Loin or rib chops seared in tallow develop incredible flavor without any plant inputs.',
  },
  {
    slug: 'salmon-fillet',
    name: 'Butter-Basted Salmon',
    emoji: '🐟',
    cookTime: '14 min',
    protein: '46g',
    fat: '32g',
    calories: '470',
    difficulty: 'Easy',
    badge: 'Omega-3 Rich',
    description: 'Wild-caught salmon is one of the best protein sources on carnivore — high in DHA/EPA omega-3s, complete protein, and easy to cook in under 15 minutes.',
  },
  {
    slug: 'beef-liver',
    name: 'Sautéed Beef Liver',
    emoji: '🫀',
    cookTime: '10 min',
    protein: '26g',
    fat: '12g',
    calories: '230',
    difficulty: 'Medium',
    badge: 'Most Nutritious',
    description: 'Liver is the most nutrient-dense food on the planet — pound for pound the richest source of Vitamin A, B12, folate, copper, and iron. Eat it once a week.',
  },
  {
    slug: 'pork-belly',
    name: 'Crispy Pork Belly',
    emoji: '🐷',
    cookTime: '45 min',
    protein: '25g',
    fat: '58g',
    calories: '630',
    difficulty: 'Medium',
    badge: 'High Fat',
    description: 'Pork belly is the highest-fat carnivore staple — perfect for those who need more fat in their macros. Slow-cooked then crisped for the best texture.',
  },
  {
    slug: 'chuck-roast',
    name: 'Slow Cooker Chuck Roast',
    emoji: '🍖',
    cookTime: '8 hr',
    protein: '52g',
    fat: '44g',
    calories: '620',
    difficulty: 'Easy',
    badge: 'Batch Cook',
    description: 'Chuck roast is the carnivore batch-cook champion. One roast feeds you for 3-4 days. Low and slow in a slow cooker turns a tough cut into fork-tender perfection.',
  },
  {
    slug: 'chicken-thighs',
    name: 'Crispy Chicken Thighs',
    emoji: '🍗',
    cookTime: '35 min',
    protein: '38g',
    fat: '28g',
    calories: '410',
    difficulty: 'Easy',
    badge: 'Lean Option',
    description: 'Bone-in, skin-on chicken thighs are the most carnivore-friendly poultry cut — higher in fat than breast, crispy skin when cooked right, and very economical.',
  },
  {
    slug: 'scrambled-eggs',
    name: 'Butter Scrambled Eggs',
    emoji: '🥚',
    cookTime: '8 min',
    protein: '18g',
    fat: '26g',
    calories: '310',
    difficulty: 'Easy',
    badge: 'Quick Meal',
    description: 'Carnivore scrambled eggs are eggs + butter, nothing else. Low-heat, slow scramble in generous butter creates the creamiest, richest eggs you\'ve ever tasted.',
  },
  {
    slug: 'new-york-strip',
    name: 'New York Strip Steak',
    emoji: '🥩',
    cookTime: '14 min',
    protein: '54g',
    fat: '36g',
    calories: '560',
    difficulty: 'Easy',
    badge: 'Leaner Cut',
    description: 'NY strip has less marbling than ribeye but more flavor than sirloin — the ideal balance cut for carnivores who want great steak without maximum fat.',
  },
  {
    slug: 'bone-broth',
    name: 'Homemade Bone Broth',
    emoji: '🦴',
    cookTime: '12 hr',
    protein: '10g',
    fat: '5g',
    calories: '80',
    difficulty: 'Easy',
    badge: 'Gut Health',
    description: 'Bone broth is the carnivore diet\'s answer to a hot drink. Rich in collagen, glycine, and minerals — drink it as a meal, a snack, or to break a fast.',
  },
]

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Zero-Carb Cooking
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carnivore Diet Recipes
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Simple meat-only recipes with macros. No plants, no fillers — just the best way to cook every carnivore staple.
          </p>
        </div>

        {/* Recipe grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {recipes.map((r) => (
            <Link
              key={r.slug}
              href={`/recipes/${r.slug}`}
              className="group block rounded-2xl border border-stone-700/50 bg-stone-800/40 hover:border-red-500/50 hover:bg-stone-800/70 transition-all p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{r.emoji}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 border border-red-800/50 font-medium">{r.badge}</span>
              </div>
              <h2 className="font-bold text-lg mb-1 group-hover:text-red-300 transition-colors">{r.name}</h2>
              <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                <span>⏱ {r.cookTime}</span>
                <span>· {r.difficulty}</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed mb-4">{r.description}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-stone-900/60 rounded-lg py-1.5 px-2">
                  <div className="text-red-400 font-bold text-sm">{r.protein}</div>
                  <div className="text-stone-500 text-xs">Protein</div>
                </div>
                <div className="bg-stone-900/60 rounded-lg py-1.5 px-2">
                  <div className="text-amber-400 font-bold text-sm">{r.fat}</div>
                  <div className="text-stone-500 text-xs">Fat</div>
                </div>
                <div className="bg-stone-900/60 rounded-lg py-1.5 px-2">
                  <div className="text-stone-300 font-bold text-sm">{r.calories}</div>
                  <div className="text-stone-500 text-xs">Cal</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Upsell */}
        <div className="rounded-2xl border border-red-800/40 bg-red-950/30 p-8 text-center">
          <div className="text-3xl mb-3">📋</div>
          <h2 className="text-2xl font-bold mb-2">Want a Full 30-Day Meal Plan?</h2>
          <p className="text-stone-400 mb-6 max-w-xl mx-auto">
            Every meal, every day — optimized for your macros. Our 30-day carnivore meal plan tells you exactly what to eat, when, and in what quantity.
          </p>
          <Link
            href="/#meal-plan"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 transition-colors"
          >
            Get the 30-Day Meal Plan — $17 →
          </Link>
          <p className="mt-3 text-stone-500 text-xs">One-time purchase · Instant download · 30-day guarantee</p>
        </div>

        {/* Calculator CTA */}
        <div className="mt-8 rounded-2xl border border-stone-700/50 bg-stone-800/40 p-6 text-center">
          <p className="text-stone-400 text-sm mb-3">Not sure how much to eat? Calculate your exact protein and fat targets first.</p>
          <Link href="/" className="text-red-400 font-semibold hover:underline text-sm">
            Use the free carnivore calculator →
          </Link>
        </div>
      </div>
    </main>
  )
}
