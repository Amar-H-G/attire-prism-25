import { Link } from 'react-router-dom'

export function HomeFashionBanner() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1600&q=85&auto=format&fit=crop"
            alt=""
            className="aspect-[21/9] min-h-[280px] w-full object-cover sm:min-h-[360px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-950/95 via-surface-950/75 to-surface-950/20" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 py-10 sm:px-14 lg:max-w-2xl lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Campaign — Prism Winter
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Layer like light through glass
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Outerwear that reads sharp on the street, soft in the cab home.
              Shot on our SoHo floor — same team that steams every order before
              it leaves.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop?category=Trending"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-surface-950 transition hover:bg-primary-dim"
              >
                Explore collection
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-medium text-white transition hover:border-white/50"
              >
                Behind the lens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
