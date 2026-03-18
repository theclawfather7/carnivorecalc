import type { Metadata } from 'next'
import { goals, getGoal } from '../data'
import { notFound } from 'next/navigation'
import GoalCalculatorClient from './client'

export async function generateStaticParams() {
  return goals.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const goal = getGoal(slug)
  if (!goal) return {}
  return {
    title: goal.title,
    description: goal.description,
    keywords: goal.keywords,
    openGraph: {
      title: goal.title,
      description: goal.description,
      url: `https://carnivorecalc.com/goals/${slug}`,
      siteName: 'CarnivoreCalc',
      type: 'website',
    },
  }
}

export default async function GoalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const goal = getGoal(slug)
  if (!goal) notFound()
  return <GoalCalculatorClient goal={goal} />
}
