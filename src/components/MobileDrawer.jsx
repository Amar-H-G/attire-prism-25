import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

const drawerLinkClass = ({ isActive }) =>
  `rounded-xl px-4 py-3.5 text-base font-medium transition ${
    isActive
      ? 'bg-primary/15 text-primary'
      : 'text-white/90 hover:bg-white/5 hover:text-primary'
  }`

export function MobileDrawer({ open, onClose }) {
  useBodyScrollLock(open)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-surface-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-l border-white/10 bg-surface-900/95 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
        id="mobile-menu"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white ring-1 ring-white/10 transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to + label}
              to={to}
              end={end}
              onClick={onClose}
              className={drawerLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <p className="border-t border-white/10 px-5 py-4 text-sm text-muted">
          Attire Prism — craft your silhouette.
        </p>
      </aside>
    </>
  )
}
