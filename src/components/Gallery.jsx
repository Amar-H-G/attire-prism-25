import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { shopImages } from '../data/shopImages'
import { prefersReducedMotion } from '../lib/reducedMotion'

function layoutClass(layout) {
  if (layout === 'tall')
    return 'row-span-2 min-h-[200px] sm:min-h-[240px]'
  if (layout === 'wide') return 'col-span-2 min-h-[160px]'
  return 'min-h-[160px]'
}

export function Gallery({ onOpenImage }) {
  const rootRef = useRef(null)
  const reduce = prefersReducedMotion()

  useLayoutEffect(() => {
    if (reduce) return
    const root = rootRef.current
    if (!root) return
    const items = root.querySelectorAll('.gallery-item')
    const ctx = gsap.context(() => {
      gsap.from(items, {
        scrollTrigger: {
          trigger: root,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.65,
        stagger: 0.05,
        ease: 'power2.out',
      })
    }, root)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section
      id="gallery"
      ref={rootRef}
      className="border-b border-white/5 bg-surface-900/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Gallery
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Moments from the floor
          </h2>
          <p className="mt-3 text-muted sm:text-lg">
            Tap any image to view it full screen — the same experience we give
            clients in-store.
          </p>
        </div>

        <div className="mt-12 grid grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 auto-rows-[minmax(140px,1fr)]">
          {shopImages.gallery.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => onOpenImage(img.src, img.alt)}
              className={`gallery-item group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 text-left ring-primary/0 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${layoutClass(img.layout)}`}
            >
              <img
                src={img.src}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="sr-only">{img.alt}</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent opacity-60 transition group-hover:opacity-40" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
