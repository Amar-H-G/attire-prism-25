import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function HomeBrandStory() {
  return (
    <section className="border-b border-white/5 bg-surface-900/35 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1000&q=85&auto=format&fit=crop"
              alt="Attire Prism boutique interior"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 to-transparent" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We started where most brands hide — the cutting table
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Attire Prism grew out of late nights pattern-testing and a refusal
              to accept “good enough” drape. Today we are a tight team of
              buyers, tailors, and photographers obsessed with one thing: making
              sure the piece you see on-screen is the piece that makes you pause
              at the mirror.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Our Mercer studio is open by appointment — walk the rails, feel
              the weight of a coat in your hands, then finish the rest online if
              you prefer the quiet.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 text-sm font-semibold text-primary transition hover:bg-primary/20"
            >
              Read the full story
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
