import { Link } from 'react-router-dom'

export function ProductCard({ product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-800/50 shadow-lg shadow-black/20 transition hover:border-primary/35 hover:shadow-primary/10">
      <Link
        to={`/shop/${product.id}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-surface-700 outline-none ring-primary/0 focus-visible:ring-2 focus-visible:ring-primary"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <Link
          to={`/shop/${product.id}`}
          className="font-display text-lg font-semibold tracking-tight text-white no-underline transition hover:text-primary"
        >
          {product.name}
        </Link>
        <p className="text-primary">${product.price}</p>
      </div>
    </article>
  )
}
