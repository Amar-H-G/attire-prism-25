import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const CATEGORIES = [
  {
    key: 'Men',
    title: 'Men',
    line: 'Tailoring that holds its line from desk to dinner.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=85&auto=format&fit=crop',
  },
  {
    key: 'Women',
    title: 'Women',
    line: 'Drape, structure, and pieces you reach for without thinking.',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=85&auto=format&fit=crop',
  },
  {
    key: 'Trending',
    title: 'Trending',
    line: 'What our floor team cannot keep on the rails this week.',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85&auto=format&fit=crop',
  },
  {
    key: 'New Arrivals',
    title: 'New arrivals',
    line: 'Fresh drops — limited first runs, restocked on rhythm.',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85&auto=format&fit=crop',
  },
]

export function HomeFeaturedCategories() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shop by edit
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Four doors into the collection
          </h2>
          <p className="mt-4 text-muted sm:text-lg">
            Each route opens the same uncompromising standard — we just
            organise the rails the way you actually dress.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li key={c.key}>
              <Link
                to={`/shop?category=${encodeURIComponent(c.key)}`}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-800 ring-1 ring-white/5 transition hover:border-primary/35 hover:ring-primary/20"
              >
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-transparent" />
                <div className="relative mt-auto p-6">
                  <span className="font-display text-xl font-bold text-white">
                    {c.title}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {c.line}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Explore
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
