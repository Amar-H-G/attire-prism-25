import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk fits
          </h1>
          <p className="mt-3 text-muted">
            Static front-end only — this form is UI for demos. Wire it to your
            API or form service when you are ready.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-surface-900/40 p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-white outline-none ring-primary/0 transition placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-white outline-none ring-primary/0 transition placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-white outline-none ring-primary/0 transition placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                placeholder="Tell us about your project or fitting request…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3.5 text-base font-semibold text-surface-950 transition hover:bg-primary-dim sm:w-auto sm:px-10"
            >
              Send message
            </button>
            {sent && (
              <p className="text-sm text-primary" role="status">
                Thanks — in a real deployment this would reach your inbox.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
