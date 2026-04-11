import { Link } from 'react-router-dom'
import productsData from '../../data/products.json'
import { ProductCard } from '../ProductCard'

export function HomeBestSellers() {
  const items = productsData.filter((p) => p.bestseller).slice(0, 4)

  return (
    <section className="border-b border-white/5 bg-surface-900/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Best sellers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The pieces we ship twice
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              These silhouettes earn repeat buys for a reason — fabric that
              recovers, cuts that flatter without noise, and price tags that
              still feel honest when the box lands.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-primary/50 hover:text-primary"
          >
            Browse full shop
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
