import { Link } from 'react-router-dom'
import productsData from '../../data/products.json'
import { ProductCard } from '../ProductCard'

export function HomeNewArrivals() {
  const items = productsData
    .filter((p) => p.categories.includes('New Arrivals'))
    .slice(0, 4)

  return (
    <section className="border-b border-white/5 bg-surface-900/25 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              New arrivals
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Just unboxed
            </h2>
            <p className="mt-3 max-w-xl text-muted sm:text-lg">
              First-run quantities on these drops — when they go, we restock on
              cadence, not panic.
            </p>
          </div>
          <Link
            to="/shop?category=New%20Arrivals"
            className="inline-flex min-h-11 items-center justify-center self-start rounded-full bg-primary px-6 text-sm font-semibold text-surface-950 shadow-lg shadow-primary/20 transition hover:bg-primary-dim sm:self-auto"
          >
            Shop new in
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
