import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span className="font-display font-extrabold text-2xl tracking-tighter text-brand-secondary">
            NEXORA
          </span>
          <span className="font-display font-bold text-xs text-brand-muted ml-1.5 mt-1 tracking-widest uppercase opacity-60">
            STUDIO
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === to ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/sign-in" className="text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors">
            Sign In
          </Link>
          <Link
            to="/get-started"
            className="px-8 py-3 bg-brand-primary text-white text-sm font-bold rounded-full hover:shadow-brand transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-brand-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed inset-0 top-0 left-0 w-full bg-white z-[60] lg:hidden flex flex-col items-center justify-center gap-8 p-10"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-6 p-2">
              <X size={32} />
            </button>
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-display font-extrabold text-brand-secondary hover:text-brand-primary"
              >
                {label}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-6 mt-10 w-full max-w-xs">
              <Link to="/sign-in" className="text-xl font-bold text-brand-secondary">Sign In</Link>
              <Link to="/get-started" className="w-full text-center py-5 bg-brand-primary text-white text-lg font-bold rounded-full">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
