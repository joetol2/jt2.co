import { useState } from "react";
import { navLinks } from "@/components/PageNav";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/data/content";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-300">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-300">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-300">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);

const SocialIcons = () => (
  <div className="flex items-center gap-4">
    <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email"><Mail /></a>
    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
    <a href="https://github.com/joetol2" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a>
  </div>
);

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="border-t border-border">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between py-8">
          <Link
            to="/"
            className="text-sm font-heading tracking-[0.25em] uppercase text-foreground font-semibold hover:opacity-70 transition-opacity"
          >
            Joe Tolerico
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-xs font-heading tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
          <SocialIcons />
        </div>

        {/* Mobile: single row of logo, hamburger and icons */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-6">
            <Link
              to="/"
              className="text-sm font-heading tracking-[0.25em] uppercase text-foreground font-semibold hover:opacity-70 transition-opacity"
            >
              Joe Tolerico
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground hover:opacity-70 transition-opacity p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="4" y1="4" x2="16" y2="16"/>
                  <line x1="16" y1="4" x2="4" y2="16"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="17" y2="6"/>
                  <line x1="3" y1="10" x2="17" y2="10"/>
                  <line x1="3" y1="14" x2="17" y2="14"/>
                </svg>
              )}
            </button>
            <SocialIcons />
          </div>

          {menuOpen && (
            <nav className="flex flex-col gap-4 pb-6">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-heading tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <p className="pb-8 text-xs text-white/40">© {new Date().getFullYear()} Joe Tolerico. Currently traveling through time and space.</p>
      </div>
    </footer>
  );
};

export default Footer;
