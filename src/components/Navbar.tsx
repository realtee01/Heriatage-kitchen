import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: isHome ? '#menu' : '/#menu' },
    { name: 'Order Online', href: '/order' },
    { name: 'Reservations', href: '/reservation' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || !isHome
          ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') || link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn("text-sm font-medium uppercase tracking-wider transition-colors", 
                    location.pathname === link.href ? "text-amber-500" : "text-zinc-300 hover:text-amber-500"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/reservation"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors uppercase tracking-wider"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-t border-zinc-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              link.href.startsWith('#') || link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-300 hover:text-amber-500 hover:bg-zinc-900 rounded-md uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn("block px-3 py-4 text-base font-medium rounded-md uppercase tracking-wider hover:bg-zinc-900",
                    location.pathname === link.href ? "text-amber-500 bg-zinc-900/50" : "text-zinc-300 hover:text-amber-500"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
