import { SHOP_CATEGORIES } from '../data/shopCategories'

export function CategoryFilter({
  active,
  onChange,
  categories = SHOP_CATEGORIES,
}) {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="group"
      aria-label="Filter by category"
    >
      {categories.map((cat) => {
        const isOn = active === cat
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`min-h-11 rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
              isOn
                ? 'bg-primary text-surface-950 shadow-lg shadow-primary/25'
                : 'border border-white/10 bg-surface-800/80 text-muted hover:border-primary/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
