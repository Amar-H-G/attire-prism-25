import { Link } from 'react-router-dom'

const CATEGORIES = [
  {
    key: 'Men',
    title: 'Men',
    blurb: 'Tailoring, knits, and off-duty denim.',
  },
  {
    key: 'Women',
    title: 'Women',
    blurb: 'Drape, structure, and evening polish.',
  },
  {
    key: 'Casual',
    title: 'Casual',
    blurb: 'Soft layers for everyday refraction.',
  },
  {
    key: 'Formal',
    title: 'Formal',
    blurb: 'Boardroom lines and after-dark sets.',
  },
  {
    key: 'Trending',
    title: 'Trending',
    blurb: 'What clients are trying on right now.',
  },
]

export function CategoryPreview() {
  return (
    <section className="border-b border-white/5 bg-surface-900/25 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Browse by mood
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Categories
        </h2>
        <p className="mt-3 max-w-2xl text-muted sm:text-lg">
          Jump straight into the edit — filters sync on the shop page.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CATEGORIES.map(({ key, title, blurb }) => (
            <li key={key}>
              <Link
                to={`/shop?category=${encodeURIComponent(key)}`}
                className="flex h-full min-h-[140px] flex-col rounded-2xl border border-white/10 bg-surface-800/40 p-5 transition hover:border-primary/40 hover:bg-surface-800/70"
              >
                <span className="font-display text-lg font-semibold text-white">
                  {title}
                </span>
                <span className="mt-2 text-sm leading-snug text-muted">
                  {blurb}
                </span>
                <span className="mt-auto pt-4 text-sm font-medium text-primary">
                  Shop {title.toLowerCase()} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
