import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/core', label: 'The core' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col px-6 md:px-16">
      <header className="h-20 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sm text-amber">VEILSTACK</NavLink>
        <nav className="flex gap-8 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? 'text-text' : 'text-muted hover:text-text transition-colors'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-8 font-mono text-xs text-muted">© Hikma Ibrahim</footer>
    </div>
  )
}