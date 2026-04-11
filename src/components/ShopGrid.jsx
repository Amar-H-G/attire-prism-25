import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import productsData from '../data/products.json'
import { CategoryFilter } from './CategoryFilter'
import { ProductCard } from './ProductCard'

const CATEGORIES = ['All', 'Men', 'Women', 'Casual', 'Formal', 'Trending']

export function ShopGrid() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get('category')
  const active =
    raw && CATEGORIES.includes(raw) && raw !== 'All' ? raw : 'All'

  const setCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const filtered = useMemo(() => {
    if (active === 'All') return productsData
    return productsData.filter((p) => p.categories.includes(active))
  }, [active])

  return (
    <section className="border-b border-white/5 bg-surface-900/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shop
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Full collection
          </h1>
          <p className="mt-3 text-muted sm:text-lg">
            Filter by category — every piece links to a detailed view.
          </p>
          <div className="mt-8">
            <CategoryFilter active={active} onChange={setCategory} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted">
            No pieces in this filter yet — try another category.
          </p>
        )}
      </div>
    </section>
  )
}
