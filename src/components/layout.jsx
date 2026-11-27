import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contact } from '../data/profile'

import Divider from './Divider'
import BackToTop from './BackToTop'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/core', label: 'The core' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `relative py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px
   after:bg-amber after:transition-all after:duration-300 ${
     isActive
       ? 'text-text after:w-full'
       : 'text-muted hover:text-text after:w-0 hover:after:w-full'
   }`

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-layer-3/60 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="font-mono text-sm tracking-widest text-amber"
          >
            VEILSTACK
          </NavLink>

          <nav className="hidden gap-8 text-sm md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="font-mono text-xs tracking-widest text-muted md:hidden"
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="flex animate-fade flex-col gap-5 border-t border-layer-3/60 px-6 py-6 text-lg md:hidden"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'text-amber' : 'text-text')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main key={pathname} className="mx-auto w-full max-w-6xl flex-1 animate-fade px-6 md:px-10">
        <Outlet />
      </main>

      <footer className="border-t border-layer-3/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <span>© Hikma Ibrahim</span>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-amber"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </div>
  )
}