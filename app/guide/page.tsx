export const dynamic = 'force-dynamic';

import Stripe from 'stripe';
import { guideTitle, guideContent, mealPlanWeeks } from './content';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

interface PageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function GuidePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    return <ErrorPage message="No session ID provided. Please purchase the meal plan to access this page." />;
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return <ErrorPage message="Invalid or expired link. Please contact support." />;
  }

  if (session.payment_status !== 'paid') {
    return <ErrorPage message="Payment not completed. Please complete your purchase to access the meal plan." />;
  }

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .guide-container { max-width: 100% !important; padding: 20px !important; }
        }
        .guide-body h1 { font-size: 1.875rem; font-weight: 700; margin: 2rem 0 1rem; }
        .guide-body h2 { font-size: 1.5rem; font-weight: 700; margin: 2rem 0 0.75rem; color: #f87171; border-bottom: 1px solid #44403c; padding-bottom: 0.5rem; }
        .guide-body h3 { font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: #fca5a5; }
        .guide-body h4 { font-size: 1rem; font-weight: 600; margin: 1rem 0 0.25rem; color: #fecaca; }
        .guide-body p { margin: 0.75rem 0; line-height: 1.7; color: #d6d3d1; }
        .guide-body ul, .guide-body ol { margin: 0.75rem 0 0.75rem 1.5rem; color: #d6d3d1; }
        .guide-body li { margin: 0.25rem 0; line-height: 1.6; }
        .guide-body strong { color: #f9fafb; font-weight: 600; }
        .guide-body em { color: #a8a29e; font-style: italic; }
        .guide-body blockquote { border-left: 3px solid #ef4444; padding-left: 1rem; margin: 1rem 0; color: #a8a29e; font-style: italic; background: #1c1917; border-radius: 0 0.375rem 0.375rem 0; padding: 0.75rem 1rem; }
        .guide-body table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.875rem; }
        .guide-body th { background: #1c1917; color: #f87171; padding: 0.5rem 0.75rem; text-align: left; border: 1px solid #44403c; }
        .guide-body td { padding: 0.5rem 0.75rem; border: 1px solid #44403c; color: #d6d3d1; }
        .guide-body tr:nth-child(even) td { background: #0c0a09; }
        .guide-body code { background: #1c1917; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.875rem; color: #f87171; }
        .guide-body hr { border: none; border-top: 1px solid #44403c; margin: 2rem 0; }
      `}</style>

      <main className="min-h-screen bg-stone-900 text-white">
        {/* Header */}
        <div className="bg-stone-800 border-b border-stone-700 no-print">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">CarnivoreCalc</span>
              <p className="text-stone-400 text-xs mt-0.5">Your purchase is confirmed ✓</p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              💾 Save as PDF
            </button>
          </div>
        </div>

        {/* Week Overview */}
        <div className="bg-stone-800/50 border-b border-stone-700 no-print">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <p className="text-stone-400 text-xs mb-2 uppercase tracking-wider">30-Day Overview</p>
            <div className="flex flex-wrap gap-2">
              {mealPlanWeeks.map((w) => (
                <span key={w.week} className="text-xs bg-stone-700 text-stone-300 px-2 py-1 rounded">
                  Week {w.week}: {w.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Guide Content */}
        <div className="guide-container max-w-4xl mx-auto px-4 py-10">
          <div
            className="guide-body"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(guideContent) }}
          />
        </div>

        {/* Footer */}
        <div className="bg-stone-800 border-t border-stone-700 mt-10 no-print">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center">
            <p className="text-stone-400 text-sm">
              Questions? Reply to your purchase confirmation email.
            </p>
            <a href="/" className="text-red-400 hover:text-red-300 text-sm mt-2 inline-block">
              ← Back to CarnivoreCalc
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

function ErrorPage({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-stone-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-5xl mb-6">🔒</div>
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-stone-400 mb-6">{message}</p>
        <a
          href="/"
          className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Back to Calculator
        </a>
      </div>
    </main>
  );
}

function renderMarkdown(md: string): string {
  return md
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^\|(.+)\|$/gm, (line) => {
      if (line.includes('---')) return '';
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/gs, (match) => {
      const rows = match.trim().split('\n').filter(Boolean);
      if (rows.length === 0) return match;
      const firstRow = rows[0].replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
      const rest = rows.slice(1).join('\n');
      return `<table>${firstRow}${rest ? '\n' + rest : ''}</table>`;
    })
    .replace(/^---$/gm, '<hr />')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- \[ \] (.+)$/gm, '<li>☐ $1</li>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gs, '<ul>$&</ul>')
    .split('\n\n')
    .map(block => {
      block = block.trim();
      if (!block) return '';
      if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<table') ||
          block.startsWith('<blockquote') || block.startsWith('<hr') || block.startsWith('<pre')) {
        return block;
      }
      return `<p>${block.replace(/\n/g, '<br />')}</p>`;
    })
    .join('\n');
}
