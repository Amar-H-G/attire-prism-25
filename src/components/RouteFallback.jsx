/** Lightweight route transition — no layout shift, no blocking JS. */
export function RouteFallback() {
  return (
    <div
      className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-center justify-center gap-4 px-4 py-16"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="h-1 w-40 overflow-hidden rounded-full bg-surface-700">
        <div className="h-full w-1/3 animate-pulse rounded-full bg-primary/80" />
      </div>
      <p className="text-sm text-muted">Loading…</p>
    </div>
  )
}
