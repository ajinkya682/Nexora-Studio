import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
];

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white text-sm">
              N
            </div>
            <span className="font-display font-bold text-lg text-text-primary group-hover:text-brand-primary transition-colors duration-200">
              Nexora <span className="text-text-secondary font-normal">Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                id={`nav-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-body font-medium transition-colors duration-200 group
                  ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-brand-primary rounded-full transition-all duration-300 origin-left
                        ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/sign-in"
              id="nav-signin"
              className="px-5 py-2.5 text-sm font-body font-medium text-text-primary border border-border rounded-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/get-started"
              id="nav-get-started"
              className="px-5 py-2.5 text-sm font-body font-semibold bg-brand-primary text-white rounded-lg hover:bg-opacity-90 hover:shadow-brand transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(true)}
            id="mobile-menu-open"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-bg-surface border-l border-border lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <span className="font-display font-bold text-text-primary">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  id="mobile-menu-close"
                  className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm font-body font-medium transition-colors duration-200
                      ${isActive
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
              <div className="px-4 pb-8 flex flex-col gap-3">
                <Link
                  to="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-center text-sm font-body font-medium text-text-primary border border-border rounded-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-center text-sm font-body font-semibold bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
