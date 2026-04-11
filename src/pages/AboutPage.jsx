import { shopImages } from '../data/shopImages'
import { useImagePreview } from '../hooks/useImagePreview'

function layoutClass(layout) {
  if (layout === 'tall')
    return 'row-span-2 min-h-[200px] sm:min-h-[240px]'
  if (layout === 'wide') return 'col-span-2 min-h-[160px]'
  return 'min-h-[160px]'
}

export default function AboutPage() {
  const { openPreview } = useImagePreview()

  return (
    <>
      <section className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About Attire Prism
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                A house built on hand-feel, not headlines
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                We opened our first rail in a narrow Mercer studio with one
                industrial steamer and a wall of fabric books. The idea was
                simple: if we would not wear it through a twelve-hour day, it
                did not earn a hanger. That bar still runs the company — now
                across menswear, womenswear, and accessories — but the instinct
                is unchanged: buy fewer, buy better, and let the cloth do the
                talking.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Every season we edit like a magazine — tight stories, clear
                silhouettes, and colour that works in real light, not just on a
                monitor. When you shop with us, you are not chasing a logo; you
                are investing in pieces that stack, travel, and age with you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {shopImages.about.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => openPreview(img.src, img.alt)}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 ring-primary/0 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    i === 0 ? 'col-span-2 aspect-[21/9] sm:aspect-[2/1]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-surface-950/20 transition group-hover:bg-transparent" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-surface-900/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-surface-850/50 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Mission
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                To make considered fashion feel accessible — through transparent
                pricing, honest product copy, and service that treats returns and
                exchanges as part of the relationship, not a loophole to fight.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface-850/50 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Vision
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                A world where “luxury” describes how something is made and how
                long it lasts — not how exclusive the waiting list feels. We are
                building Attire Prism to be the brand you pack first for every
                trip worth taking.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10">
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              Values we buy against
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              <li className="flex gap-3 text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Material truth</strong> — fibre
                  content and country of origin on every product page, always.
                </span>
              </li>
              <li className="flex gap-3 text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Fit intelligence</strong> — body
                  notes from fittings folded into how we describe drape and ease.
                </span>
              </li>
              <li className="flex gap-3 text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Quiet responsibility</strong> —
                  smaller drops, less waste, partners audited on labour and
                  environment.
                </span>
              </li>
              <li className="flex gap-3 text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-white">Human service</strong> — real
                  people answer email; no chatbot scripts when something goes
                  wrong.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="border-b border-white/5 bg-surface-900/30 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Gallery
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The studio, unfiltered
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Racks at opening, tailoring in progress, clients trying sleeves by
              the window — these frames are from our floor, not a stock library.
              Tap any image for a full-screen look; they are the same files we
              use for press and lookbooks.
            </p>
          </div>

          <div className="mt-12 grid grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 auto-rows-[minmax(140px,1fr)]">
            {shopImages.gallery.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openPreview(img.src, img.alt)}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 text-left ring-primary/0 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${layoutClass(img.layout)}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent opacity-60 transition group-hover:opacity-40" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
