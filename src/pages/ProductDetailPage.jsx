import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import { useImagePreview } from '../hooks/useImagePreview'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const { openPreview } = useImagePreview()

  const product = useMemo(
    () => productsData.find((p) => p.id === productId),
    [productId],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <article className="border-b border-white/5 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-muted">
          <Link to="/shop" className="transition hover:text-primary">
            Shop
          </Link>
          <span className="mx-2 text-surface-600">/</span>
          <span className="text-white/80">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <button
            type="button"
            onClick={() => openPreview(product.image, product.name)}
            className="group relative aspect-[3/4] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-surface-800 text-left outline-none ring-primary/0 focus-visible:ring-2 focus-visible:ring-primary lg:max-w-none"
            aria-label={`Zoom ${product.name}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-surface-950/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Tap to enlarge
            </span>
          </button>

          <div className="flex flex-col">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Attire Prism
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl font-semibold text-primary">
              ${product.price}
            </p>
            <p className="mt-6 max-w-prose leading-relaxed text-muted">
              Cut and finished to our in-house block — the same pattern team that
              fits clients on Mercer. Fibre content and care instructions ship
              with every order; if you are between sizes, our notes on the shop
              page explain where we built in ease.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">
              Style it with other pieces from the tags below — each opens a
              filtered view so you can build a full look without hunting.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {product.categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(c)}`}
                    className="inline-flex rounded-full border border-white/10 bg-surface-800/60 px-3 py-1 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-white"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-surface-950 transition hover:bg-primary-dim"
              >
                Back to shop
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-8 text-base font-medium text-white transition hover:border-primary/50 hover:text-primary"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
