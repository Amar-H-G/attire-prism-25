import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import productsData from '../data/products.json'
import {
  filterByCategory,
  filterByPriceBucket,
  sortProducts,
} from '../lib/shopFilters'
import { SHOP_CATEGORIES } from '../data/shopCategories'
import { CategoryFilter } from './CategoryFilter'
import { ProductCard } from './ProductCard'

const PRICE_OPTIONS = [
  { value: 'all', label: 'All prices' },
  { value: 'under100', label: 'Under $100' },
  { value: '100-200', label: '$100 – $200' },
  { value: '200-400', label: '$200 – $400' },
  { value: 'over400', label: '$400+' },
]

const SORT_OPTIONS = [
  { value: 'bestseller', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'name', label: 'Name A–Z' },
]

function parseCategory(raw) {
  if (!raw || !SHOP_CATEGORIES.includes(raw) || raw === 'All') return 'All'
  return raw
}

export function ShopGrid() {
  const [searchParams, setSearchParams] = useSearchParams()

  const category = parseCategory(searchParams.get('category'))
  const priceBucket = searchParams.get('price') || 'all'
  const sort = searchParams.get('sort') || 'bestseller'

  const patchParams = (mutate) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        mutate(next)
        return next
      },
      { replace: true },
    )
  }

  const setCategory = (cat) => {
    patchParams((next) => {
      if (cat === 'All') next.delete('category')
      else next.set('category', cat)
    })
  }

  const setPrice = (value) => {
    patchParams((next) => {
      if (value === 'all') next.delete('price')
      else next.set('price', value)
    })
  }

  const setSort = (value) => {
    patchParams((next) => {
      if (value === 'bestseller') next.delete('sort')
      else next.set('sort', value)
    })
  }

  const filtered = useMemo(() => {
    let list = filterByCategory(productsData, category)
    const validPrice = PRICE_OPTIONS.some((o) => o.value === priceBucket)
      ? priceBucket
      : 'all'
    list = filterByPriceBucket(list, validPrice)
    const validSort = SORT_OPTIONS.some((o) => o.value === sort)
      ? sort
      : 'bestseller'
    return sortProducts(list, validSort)
  }, [category, priceBucket, sort])

  return (
    <section className="border-b border-white/5 bg-surface-900/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shop
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The full Attire Prism edit
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Every piece is photographed in-house, priced transparently, and cut
            for real life — from first meeting to last train home. Use filters
            to narrow the room, then open any product for fabric notes and fit
            guidance.
          </p>
        </div>

        <div className="mt-10 space-y-8 rounded-2xl border border-white/10 bg-surface-850/50 p-6 sm:p-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Category
            </p>
            <CategoryFilter active={category} onChange={setCategory} />
          </div>
          <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full max-w-xs">
              <label
                htmlFor="shop-price"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Price
              </label>
              <select
                id="shop-price"
                value={PRICE_OPTIONS.some((o) => o.value === priceBucket) ? priceBucket : 'all'}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/25"
              >
                {PRICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-xs">
              <label
                htmlFor="shop-sort"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Sort
              </label>
              <select
                id="shop-sort"
                value={SORT_OPTIONS.some((o) => o.value === sort) ? sort : 'bestseller'}
                onChange={(e) => setSort(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-surface-950/80 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/25"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted">
          Showing{' '}
          <span className="font-medium text-white">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 rounded-2xl border border-dashed border-white/15 bg-surface-900/40 py-16 text-center text-muted">
            Nothing matches those filters — try widening price or switching
            category.
          </p>
        )}
      </div>
    </section>
  )
}
