import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import { ProductCard } from './ProductCard'

function pickFeatured() {
  const trending = productsData.filter((p) =>
    p.categories.includes('Trending'),
  )
  const pool = trending.length >= 4 ? trending : productsData
  return pool.slice(0, 4)
}

export function FeaturedProducts() {
  const items = pickFeatured()

  return (
    <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Featured
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              On the radar
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Editorial picks moving fast this month — open any card for
              details.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex min-h-11 items-center justify-center self-start rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-primary/50 hover:text-primary sm:self-auto"
          >
            View all
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
