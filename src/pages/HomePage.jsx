import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { HomeFeaturedCategories } from '../components/home/HomeFeaturedCategories'
import { HomeBestSellers } from '../components/home/HomeBestSellers'
import { HomeWhyChooseUs } from '../components/home/HomeWhyChooseUs'
import { HomeNewArrivals } from '../components/home/HomeNewArrivals'
import { HomeFashionBanner } from '../components/home/HomeFashionBanner'
import { HomeTestimonials } from '../components/home/HomeTestimonials'
import { HomeBrandStory } from '../components/home/HomeBrandStory'
import { HomeNewsletter } from '../components/home/HomeNewsletter'
import { HomeInstagramPreview } from '../components/home/HomeInstagramPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeFeaturedCategories />
      <HomeBestSellers />
      <HomeWhyChooseUs />
      <HomeNewArrivals />
      <HomeFashionBanner />
      <HomeTestimonials />
      <HomeBrandStory />
      <HomeNewsletter />
      <HomeInstagramPreview />
      <section className="border-t border-white/5 bg-surface-900/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-800/90 to-surface-950 px-8 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(92,125,255,0.18),transparent_55%)]"
              aria-hidden
            />
            <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Mercer studio
            </p>
            <h2 className="relative mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Book a fitting, or let us ship the edit to your door
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-muted sm:text-lg">
              Same buyers online and on the floor — whether you visit us in
              SoHo or checkout from your sofa, the standard does not bend.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-surface-950 shadow-lg shadow-primary/25 transition hover:bg-primary-dim"
              >
                Shop the collection
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-8 text-base font-medium text-white transition hover:border-primary/50 hover:text-primary"
              >
                Plan a visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
