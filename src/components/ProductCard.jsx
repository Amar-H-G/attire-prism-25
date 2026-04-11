import { useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/reducedMotion'

export function ProductCard({ product, onOpenImage }) {
  const imgRef = useRef(null)
  const reduce = prefersReducedMotion()

  const onEnter = () => {
    if (reduce || !imgRef.current) return
    gsap.to(imgRef.current, {
      scale: 1.06,
      duration: 0.45,
      ease: 'power2.out',
    })
  }

  const onLeave = () => {
    if (reduce || !imgRef.current) return
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-800/50 shadow-lg shadow-black/20 transition hover:border-primary/35 hover:shadow-primary/10">
      <button
        type="button"
        onClick={() => onOpenImage(product.image, product.name)}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="relative aspect-[3/4] w-full overflow-hidden bg-surface-700 text-left outline-none ring-primary/0 focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`View ${product.name}`}
      >
        <img
          ref={imgRef}
          src={product.image}
          alt=""
          className={`h-full w-full object-cover ${reduce ? 'transition duration-500 group-hover:scale-105' : ''}`}
          loading="lazy"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
      </button>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-lg font-semibold tracking-tight text-white">
          {product.name}
        </h3>
        <p className="text-primary">${product.price}</p>
      </div>
    </article>
  )
}
