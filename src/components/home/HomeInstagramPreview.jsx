import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react'
import { shopImages } from '../../data/shopImages'
import { useImagePreview } from '../../hooks/useImagePreview'

export function HomeInstagramPreview() {
  const { openPreview } = useImagePreview()
  const tiles = shopImages.gallery.slice(0, 6)

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              @attireprism
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From our floor to your feed
            </h2>
            <p className="mt-3 max-w-xl text-muted sm:text-lg">
              Fittings, flat lays, and the occasional dog in cashmere. Tap an
              image to view it large — or visit our about page for the full
              studio gallery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white transition hover:border-primary/50 hover:text-primary"
            >
              <Camera className="h-4 w-4" strokeWidth={1.75} />
              Follow on Instagram
            </a>
            <Link
              to="/about"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Full gallery
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {tiles.map((img) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => openPreview(img.src, img.alt)}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-800 ring-primary/0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="pointer-events-none absolute inset-0 bg-surface-950/0 transition group-hover:bg-surface-950/25" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
