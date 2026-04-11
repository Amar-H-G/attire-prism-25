import { Award, CircleDollarSign, Sparkles, Truck } from 'lucide-react'

const POINTS = [
  {
    Icon: Award,
    title: 'Premium quality',
    body: 'We source mills we have walked — weight, hand-feel, and recovery tested on real bodies before a SKU ever goes live.',
  },
  {
    Icon: CircleDollarSign,
    title: 'Honest pricing',
    body: 'Luxury without the opaque markup. You are paying for cloth and construction — not a billboard on every corner.',
  },
  {
    Icon: Sparkles,
    title: 'Latest trends, edited',
    body: 'Runway and street, distilled. If a trend does not survive a season of wear, it does not make our rails.',
  },
  {
    Icon: Truck,
    title: 'Fast, careful delivery',
    body: 'Most orders leave within 24 hours, folded in tissue you will want to reuse. Easy exchanges when the fit needs a second pass.',
  },
]

export function HomeWhyChooseUs() {
  return (
    <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Attire Prism
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built like a house brand — with the eye of a boutique
          </h2>
          <p className="mt-4 text-muted sm:text-lg">
            Four promises we revisit in every buying meeting. If we cannot
            defend a decision against them, the piece does not ship.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((item) => {
            const IconGlyph = item.Icon
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-white/10 bg-surface-850/60 p-6 transition hover:border-primary/25"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <IconGlyph className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
