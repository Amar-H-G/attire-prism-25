import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { CategoryPreview } from '../components/CategoryPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryPreview />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-800/80 to-surface-900/90 px-8 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(92,125,255,0.2),transparent_50%)]"
              aria-hidden
            />
            <h2 className="relative font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Visit the studio or shop the full edit online
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-muted">
              Book a fitting, explore textures in person, or browse every piece
              on the shop — same curated standard.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-surface-950 shadow-lg shadow-primary/25 transition hover:bg-primary-dim"
              >
                Open shop
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-8 text-base font-medium text-white transition hover:border-primary/50 hover:text-primary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
