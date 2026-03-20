import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carnivore Diet Meal Plans | Weekly & Monthly Guides | CarnivoreCalc',
  description: 'Free carnivore diet meal plans for every goal and budget. Week 1, Week 2, 30-day plan, beginner guide, budget meals, shopping lists, and meal prep guides.',
  keywords: 'carnivore diet meal plan, carnivore diet week 1 meal plan, 30 day carnivore meal plan, carnivore diet shopping list, carnivore diet meal prep, beginner carnivore meal plan',
  openGraph: {
    title: 'Carnivore Diet Meal Plans | Weekly & Monthly Guides | CarnivoreCalc',
    description: 'Free carnivore diet meal plans for every goal and budget. Week 1 through 30-day complete guides.',
    url: 'https://carnivorecalc.com/meal-plans',
    siteName: 'CarnivoreCalc',
    type: 'website',
  },
}

const mealPlans = [
  {
    slug: 'week-1-meal-plan',
    emoji: '🗓️',
    title: 'Week 1 Meal Plan',
    subtitle: 'Your first 7 days on carnivore — what to eat every meal to start strong and survive the adaptation phase.',
    badge: 'Start Here',
    badgeColor: 'bg-green-900/50 text-green-300 border-green-800/50',
  },
  {
    slug: 'week-2-meal-plan',
    emoji: '📈',
    title: 'Week 2 Meal Plan',
    subtitle: 'Push past the adaptation hump. Week 2 is where energy stabilizes and cravings start to fade.',
    badge: 'Most Critical',
    badgeColor: 'bg-amber-900/50 text-amber-300 border-amber-800/50',
  },
  {
    slug: '30-day-meal-plan',
    emoji: '📅',
    title: '30-Day Meal Plan',
    subtitle: 'The complete one-month carnivore blueprint. Four weeks of structured eating with weekly themes.',
    badge: 'Complete Plan',
    badgeColor: 'bg-red-900/50 text-red-300 border-red-800/50',
  },
  {
    slug: 'beginner-meal-plan',
    emoji: '🥩',
    title: 'Beginner Meal Plan',
    subtitle: 'Simple, repeatable, foolproof. The easiest possible carnivore start with minimal cooking and maximum results.',
    badge: 'Simplest',
    badgeColor: 'bg-blue-900/50 text-blue-300 border-blue-800/50',
  },
  {
    slug: 'budget-meal-plan',
    emoji: '💰',
    title: 'Budget Meal Plan',
    subtitle: 'Eat carnivore for under $75/week. Ground beef, eggs, and smart cuts — full nutrition without premium prices.',
    badge: 'Under $75/wk',
    badgeColor: 'bg-emerald-900/50 text-emerald-300 border-emerald-800/50',
  },
  {
    slug: 'shopping-list',
    emoji: '🛒',
    title: 'Carnivore Shopping List',
    subtitle: 'Complete categorized shopping list for carnivore beginners. Print and take it to any grocery store.',
    badge: 'Printable',
    badgeColor: 'bg-purple-900/50 text-purple-300 border-purple-800/50',
  },
  {
    slug: 'meal-prep-guide',
    emoji: '🍳',
    title: 'Meal Prep Guide',
    subtitle: 'Batch cook once, eat all week. The complete carnivore meal prep strategy for busy people.',
    badge: 'Time-Saver',
    badgeColor: 'bg-orange-900/50 text-orange-300 border-orange-800/50',
  },
]

export default function MealPlansPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 text-red-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Free Carnivore Meal Plans
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carnivore Diet <span className="text-red-400">Meal Plans</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Week-by-week and month-long carnivore meal plans for every goal, timeline, and budget.
            Stop guessing what to eat — just follow the plan.
          </p>
        </div>

        {/* Plan grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mealPlans.map((plan) => (
            <Link
              key={plan.slug}
              href={`/meal-plans/${plan.slug}`}
              className="group bg-stone-800/50 border border-stone-700 hover:border-red-500/50 rounded-2xl p-6 transition-all hover:bg-stone-800"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{plan.emoji}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${plan.badgeColor}`}>{plan.badge}</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                {plan.title}
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">{plan.subtitle}</p>
              <div className="text-red-400 text-sm font-medium group-hover:text-red-300">
                View Plan →
              </div>
            </Link>
          ))}
        </div>

        {/* What's included callout */}
        <div className="bg-stone-800/40 border border-stone-700/50 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">What Every Plan Includes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '📋', text: 'Day-by-day meal schedule (breakfast, lunch, dinner)' },
              { icon: '🛒', text: 'Weekly shopping list by category' },
              { icon: '💰', text: 'Estimated cost per week' },
              { icon: '📊', text: 'Macro overview (protein, fat, calories)' },
              { icon: '💡', text: '5 phase-specific tips' },
              { icon: '❓', text: '4 FAQs for that specific phase' },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-sm text-stone-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upsell */}
        <div className="rounded-2xl border border-red-800/40 bg-red-950/30 p-8 text-center mb-8">
          <div className="text-3xl mb-3">📋</div>
          <h2 className="text-2xl font-bold mb-2">Want the Premium 30-Day PDF?</h2>
          <p className="text-stone-400 mb-6 max-w-xl mx-auto">
            Our done-for-you meal plan PDF includes macro-customized meals, print-ready shopping lists,
            and restaurant ordering guides — all for $17.
          </p>
          <Link
            href="/#meal-plan"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 transition-colors"
          >
            Get the 30-Day Meal Plan PDF — $17 →
          </Link>
          <p className="mt-3 text-stone-500 text-xs">One-time purchase · Instant download · 30-day guarantee</p>
        </div>

        {/* Calculator CTA */}
        <div className="rounded-2xl border border-stone-700/50 bg-stone-800/40 p-6 text-center">
          <p className="text-stone-400 text-sm mb-3">Not sure how much to eat? Calculate your exact protein and fat targets first.</p>
          <Link href="/" className="text-red-400 font-semibold hover:underline text-sm">
            Use the free carnivore macro calculator →
          </Link>
        </div>
      </div>
    </main>
  )
}
