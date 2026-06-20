import { useState } from 'react';

/* MobileNav — hamburger toggle for the site nav on small viewports.
   Rendered as a React island in Header.astro (client:load).
   Hidden on desktop via .mobile-nav-wrapper CSS in global.css. */

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
}

export default function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav-wrapper">
      <button
        className="hamburger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
