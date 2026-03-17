'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-6xl mb-6">🥩</div>
        <h1 className="text-3xl font-bold mb-4">Your Meal Plan is Ready!</h1>
        <p className="text-stone-400 mb-8">
          Payment confirmed. Your 30-Day Carnivore Meal Plan is waiting for you below — 
          open it now and save as PDF to keep it forever.
        </p>

        {sessionId ? (
          <a
            href={`/guide?session_id=${sessionId}`}
            className="block bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors mb-4 shadow-lg shadow-red-500/20"
          >
            🥩 Download Your Meal Plan →
          </a>
        ) : (
          <div className="bg-stone-700 text-stone-400 font-bold px-8 py-4 rounded-xl text-lg mb-4">
            Loading your link...
          </div>
        )}

        <p className="text-stone-500 text-sm mb-6">
          A copy was also sent to your email. Check spam if you don&apos;t see it.
        </p>

        <a href="/" className="text-stone-500 hover:text-stone-400 text-sm transition-colors">
          ← Back to Calculator
        </a>
      </div>
    </main>
  );
}

export default function Success() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">🥩</div>
          <p className="text-stone-400">Loading...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
