import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../lib/reducedMotion'

export function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const el = rootRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(el)
      gsap.from(q('.hero-anim'), {
        opacity: 0,
        y: 48,
        duration: 0.95,
        stagger: 0.11,
        ease: 'power3.out',
      })
      gsap.from(q('.hero-visual'), {
        opacity: 0,
        scale: 0.94,
        duration: 1.1,
        delay: 0.15,
        ease: 'power3.out',
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative overflow-hidden border-b border-white/5"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(92,125,255,0.28),transparent),radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(201,164,184,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="hero-anim mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            New season
          </p>
          <h1 className="hero-anim font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Light bends through{' '}
            <span className="bg-gradient-to-r from-primary via-white to-accent-rose bg-clip-text text-transparent">
              every look
            </span>
            .
          </h1>
          <p className="hero-anim mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Attire Prism refracts style into clarity — tailored pieces, fluid
            casuals, and runway energy for men and women who dress with intent.
          </p>
          <div className="hero-anim mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-surface-950 shadow-xl shadow-primary/30 transition hover:bg-primary-dim"
            >
              Shop now
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-8 text-base font-medium text-white transition hover:border-primary/50 hover:text-primary"
            >
              Our story
            </a>
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-surface-800 shadow-2xl shadow-primary/15 ring-1 ring-white/5 sm:aspect-[3/4] lg:ml-auto lg:max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85&auto=format&fit=crop"
              alt="Fashion editorial — Attire Prism"
              className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-surface-900/70 p-4 backdrop-blur-md">
              <p className="font-display text-sm font-semibold text-white">
                Prism Edit — Vol. IV
              </p>
              <p className="mt-1 text-xs text-muted">
                Curated layers for city nights and slow mornings.
              </p>
            </div>
          </div>
          <div
            className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl border border-primary/40 bg-primary/20 blur-2xl lg:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
