import { useMemo, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import productsData from '../data/products.json'
import { prefersReducedMotion } from '../lib/reducedMotion'
import { CategoryFilter } from './CategoryFilter'
import { ProductCard } from './ProductCard'

export function ProductSection({ onOpenImage }) {
  const [category, setCategory] = useState('All')
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const gridRef = useRef(null)
  const reduce = prefersReducedMotion()

  const filtered = useMemo(() => {
    if (category === 'All') return productsData
    return productsData.filter((p) => p.categories.includes(category))
  }, [category])

  useLayoutEffect(() => {
    if (reduce) return
    const section = sectionRef.current
    const head = headRef.current
    const grid = gridRef.current
    if (!section || !head || !grid) return

    const ctx = gsap.context(() => {
      gsap.from(head, {
        scrollTrigger: {
          trigger: head,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: 'power2.out',
      })
      gsap.from(grid.children, {
        scrollTrigger: {
          trigger: grid,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 36,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power2.out',
      })
    }, section)

    return () => ctx.revert()
  }, [filtered, reduce])

  return (
    <section
      id="products"
      ref={sectionRef}
      className="border-b border-white/5 bg-surface-900/40 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Collection
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pieces that prism-shift your wardrobe
          </h2>
          <p className="mt-3 text-muted sm:text-lg">
            Filter by mood — from boardroom lines to off-duty ease.
          </p>
          <div className="mt-8">
            <CategoryFilter active={category} onChange={setCategory} />
          </div>
        </div>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenImage={onOpenImage}
            />
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
