import { Link, NavLink } from 'react-router-dom'
import { Link2, MessageCircle, Share2, Mail, Phone, MapPin } from 'lucide-react'

/** Brand icons were removed from lucide-react; swap hrefs to your real profiles. */
const social = [
  { name: 'Share', href: 'https://instagram.com', Icon: Share2 },
  { name: 'Messages', href: 'https://facebook.com', Icon: MessageCircle },
  { name: 'Profile link', href: 'https://x.com', Icon: Link2 },
]

const footerLinkClass = ({ isActive }) =>
  `text-sm transition ${
    isActive ? 'text-primary' : 'text-muted hover:text-white'
  }`

export function Footer() {
  return (
    <footer id="footer" className="bg-surface-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link
              to="/"
              className="font-display text-2xl font-bold text-white no-underline"
            >
              Attire{' '}
              <span className="bg-gradient-to-r from-primary to-accent-rose bg-clip-text text-transparent">
                Prism
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Multi-page static showcase — fast routes, lazy-loaded views, and a
              design system you can extend.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((item) => {
                const IconComp = item.Icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition hover:border-primary/50 hover:text-primary"
                    aria-label={item.name}
                  >
                    <IconComp className="h-5 w-5" strokeWidth={1.75} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                Explore
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                <li>
                  <NavLink to="/" end className={footerLinkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" className={footerLinkClass}>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={footerLinkClass}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={footerLinkClass}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 text-sm text-muted">
              <a
                href="mailto:hello@attireprism.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                hello@attireprism.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                +1 (555) 123-4567
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  428 Mercer Street
                  <br />
                  New York, NY 10012
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-muted/80">
          © {new Date().getFullYear()} Attire Prism. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
