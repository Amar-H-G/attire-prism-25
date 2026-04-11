import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
        This angle isn&apos;t in the collection
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you wanted moved — head back to the shop or home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-surface-950 transition hover:bg-primary-dim"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 text-sm font-medium text-white transition hover:border-primary/50 hover:text-primary"
        >
          Shop
        </Link>
      </div>
    </section>
  )
}
