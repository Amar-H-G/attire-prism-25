import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'
import { MobileDrawer } from './MobileDrawer'

const navClass = ({ isActive }) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-white/10 text-white'
      : 'text-muted hover:bg-white/5 hover:text-white'
  }`

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/5 bg-surface-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            end
            className="group flex items-center gap-2 text-white no-underline"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent-rose/20 ring-1 ring-white/10 transition group-hover:ring-primary/40">
              <Sparkles className="h-5 w-5 text-primary" strokeWidth={2} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Attire{' '}
              <span className="bg-gradient-to-r from-primary to-accent-rose bg-clip-text text-transparent">
                Prism
              </span>
            </span>
          </NavLink>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main"
          >
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navClass}>
              Shop
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
            <NavLink
              to="/shop"
              className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-surface-950 shadow-lg shadow-primary/25 transition hover:bg-primary-dim"
            >
              Shop now
            </NavLink>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white ring-1 ring-white/10 transition hover:bg-white/5 lg:hidden"
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
