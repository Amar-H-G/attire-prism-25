const PRICE_BUCKETS = {
  all: () => true,
  under100: (p) => p.price < 100,
  '100-200': (p) => p.price >= 100 && p.price < 200,
  '200-400': (p) => p.price >= 200 && p.price < 400,
  over400: (p) => p.price >= 400,
}

export function filterByCategory(products, category) {
  if (!category || category === 'All') return products
  return products.filter((p) => p.categories.includes(category))
}

export function filterByPriceBucket(products, bucket) {
  const fn = PRICE_BUCKETS[bucket] || PRICE_BUCKETS.all
  return products.filter(fn)
}

export function sortProducts(products, sortKey) {
  const list = [...products]
  switch (sortKey) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'name':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    case 'bestseller':
    default:
      return list.sort((a, b) => {
        const ba = a.bestseller ? 1 : 0
        const bb = b.bestseller ? 1 : 0
        if (bb !== ba) return bb - ba
        return a.name.localeCompare(b.name)
      })
  }
}
