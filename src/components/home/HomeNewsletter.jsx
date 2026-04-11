import { useState } from 'react'
import { Mail } from 'lucide-react'

export function HomeNewsletter() {
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-800/90 to-surface-900 px-8 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Mail className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The Prism letter — drops, restocks, studio nights
            </h2>
            <p className="mt-3 text-muted sm:text-lg">
              No daily noise — one considered note when there is something worth
              your inbox: private sales, tailoring events, and fabric deep
              dives.
            </p>
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className="min-h-12 flex-1 rounded-full border border-white/15 bg-surface-950/60 px-5 text-sm text-white outline-none placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/25"
              />
              <button
                type="submit"
                className="min-h-12 shrink-0 rounded-full bg-primary px-8 text-sm font-semibold text-surface-950 transition hover:bg-primary-dim"
              >
                Subscribe
              </button>
            </form>
            {done && (
              <p className="mt-4 text-sm text-primary" role="status">
                You are on the list — this demo does not send mail yet.
              </p>
            )}
            <p className="mt-4 text-xs text-muted/80">
              We respect your attention. Unsubscribe anytime — no questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
