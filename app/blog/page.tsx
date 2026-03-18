import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carnivore Diet Blog — Guides, Science & Meal Plans | CarnivoreCalc',
  description: 'Practical guides on the carnivore diet: how much protein to eat, what foods to include, how to get started, and the science behind all-meat eating. From CarnivoreCalc.',
  keywords: 'carnivore diet guide, carnivore diet food list, how much protein carnivore, carnivore diet results, all meat diet',
  openGraph: {
    title: 'Carnivore Diet Blog | CarnivoreCalc',
    description: 'Practical guides on the carnivore diet — food lists, macros, getting started, and the science behind all-meat eating.',
    url: 'https://carnivorecalc.com/blog',
    siteName: 'CarnivoreCalc',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'carnivore-diet-food-list',
    title: 'The Carnivore Diet Food List: What to Eat (and What to Avoid)',
    description: 'A complete carnivore diet food list — from the best cuts of beef to what fish, eggs, and dairy are allowed. Plus what to absolutely avoid on carnivore.',
    date: 'March 17, 2026',
    readTime: '6 min read',
    emoji: '🥩',
  },
  {
    slug: 'how-much-protein-on-carnivore',
    title: 'How Much Protein Should You Eat on the Carnivore Diet?',
    description: 'Protein intake on carnivore isn\'t one-size-fits-all. Here\'s how to calculate your exact protein target based on body weight, goals, and activity level.',
    date: 'March 17, 2026',
    readTime: '7 min read',
    emoji: '💪',
  },
  {
    slug: 'carnivore-diet-beginners-guide',
    title: 'Carnivore Diet for Beginners: Everything You Need to Know',
    description: 'New to the carnivore diet? Start here. What it is, why people do it, what to eat, what to expect in the first 30 days, and how to actually stick to it.',
    date: 'March 17, 2026',
    readTime: '9 min read',
    emoji: '🔥',
  },
  {
    slug: 'carnivore-diet-30-day-results',
    title: 'Carnivore Diet 30-Day Results: What Most People Experience',
    description: 'What really happens in your first 30 days on carnivore? From the initial "carni flu" to the mental clarity in week 3 — here\'s what the data and anecdotes show.',
    date: 'March 17, 2026',
    readTime: '6 min read',
    emoji: '📊',
  },
  {
    slug: 'carnivore-vs-keto',
    title: 'Carnivore Diet vs. Keto: Which Is Right for You?',
    description: 'Carnivore and keto both cut carbs, but they\'re very different. Here\'s an honest comparison of the two diets — benefits, downsides, and who should choose each one.',
    date: 'March 17, 2026',
    readTime: '7 min read',
    emoji: '⚖️',
  },
  {
    slug: 'carnivore-diet-weight-loss',
    title: 'Carnivore Diet for Weight Loss: Does It Actually Work?',
    description: 'Can you lose weight eating only meat? The short answer is yes — and here\'s exactly why carnivore is so effective for fat loss, plus how to maximize your results.',
    date: 'March 17, 2026',
    readTime: '6 min read',
    emoji: '🎯',
  },
]

export default function BlogIndex() {
  return (
    <div className="min-h-screen text-white py-16 px-6" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors inline-block mb-8">
          ← CarnivoreCalc
        </Link>

        <h1 className="text-4xl font-bold text-white mb-3">
          Carnivore Diet Guides
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Practical guides on macros, food lists, results, and the science of eating meat.
        </p>

        <div className="space-y-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-800 rounded-xl p-6 hover:border-red-800/60 transition-colors"
              style={{ backgroundColor: '#111111' }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{post.emoji}</span>
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-1 hover:text-red-400 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-xs mb-2 font-mono">
                      {post.date} · {post.readTime}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.description}
                    </p>
                    <span className="inline-block mt-3 text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 border border-red-900/50 rounded-xl p-8 text-center" style={{ backgroundColor: '#111111' }}>
          <p className="text-white font-bold text-xl mb-2">
            Calculate Your Carnivore Macros
          </p>
          <p className="text-gray-400 text-sm mb-5">
            Free calculator — enter your weight, goal, and activity level. Get your exact protein and fat targets in 30 seconds.
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            Use the Free Calculator →
          </Link>
        </div>
      </div>
    </div>
  )
}
