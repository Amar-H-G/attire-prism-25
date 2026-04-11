import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { shopImages } from '../data/shopImages'
import { prefersReducedMotion } from '../lib/reducedMotion'

export function About({ onOpenImage }) {
  const rootRef = useRef(null)
  const reduce = prefersReducedMotion()

  useLayoutEffect(() => {
    if (reduce) return
    const root = rootRef.current
    if (!root) return
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: root,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 32,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }, root)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section
      id="about"
      ref={rootRef}
      className="border-b border-white/5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="about-reveal text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About
            </p>
            <h2 className="about-reveal mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A studio where fabric meets focus
            </h2>
            <p className="about-reveal mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Attire Prism began as a small atelier obsessed with proportion,
              texture, and the way light catches a lapel or a pleat. Today we
              pair slow-made tailoring with responsive casual lines — so you
              can refract one wardrobe across work, travel, and nights out.
            </p>
            <p className="about-reveal mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Visit our floor to feel textiles in hand, or explore the edit
              online — every piece is chosen to stack, layer, and shine.
            </p>
          </div>

          <div className="about-reveal grid grid-cols-2 gap-3 sm:gap-4">
            {shopImages.about.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => onOpenImage(img.src, img.alt)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 ring-primary/0 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  i === 0 ? 'col-span-2 aspect-[21/9] sm:aspect-[2/1]' : 'aspect-square'
                }`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="sr-only">{img.alt}</span>
                <span className="pointer-events-none absolute inset-0 bg-surface-950/20 transition group-hover:bg-transparent" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
