import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#strategy', label: 'Strategy' },
  { href: '#work', label: 'Work Gallery' },
  { href: '#clients', label: 'Top Clients' },
  { href: '#packages', label: 'Packages' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0E1116]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-[#F8F7F4] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#D4AF37]"
        >
          Groth Forge
        </a>

        {/* Zone 2: 4 clean single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 font-display text-sm font-medium text-[#F8F7F4]/80"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#F8F7F4] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#D4AF37] px-4 py-2 font-display text-xs font-semibold text-[#0E1116] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#e1be4d]"
          >
            WhatsApp Contact
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-[#F8F7F4] transition-colors duration-150 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="border-t border-white/10 bg-[#0E1116] px-4 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 font-display text-sm font-medium text-[#F8F7F4]/90 transition-colors hover:bg-white/5 hover:text-[#D4AF37]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#D4AF37] px-4 py-2.5 font-display text-sm font-semibold text-[#0E1116] transition-colors hover:bg-[#e1be4d]"
            >
              WhatsApp Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
