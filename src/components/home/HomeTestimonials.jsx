import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export function HomeTestimonials() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Voices from the fitting room
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted on five continents
          </h2>
          <p className="mt-4 text-muted sm:text-lg">
            Real notes from clients who shop like editors — edited for length,
            never for shine.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface-850/50 p-6 sm:p-8"
            >
              <div className="flex gap-0.5 text-primary" aria-hidden>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary/30 text-primary"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/90">
                “{t.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-white/10 pt-6">
                <p className="font-display font-semibold text-white">{t.name}</p>
                <p className="text-sm text-muted">
                  {t.role} · {t.city}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
