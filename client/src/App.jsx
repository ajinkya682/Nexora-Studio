import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';

// ── Public pages ─────────────────────────────────────────────
import Home from './pages/public/Home';
import WhoWeAre from './pages/public/WhoWeAre';
import Services from './pages/public/Services';
import Projects from './pages/public/Projects';
import Contact from './pages/public/Contact';

// ── Auth pages ────────────────────────────────────────────────
import SignIn from './pages/auth/SignIn';
import GetStarted from './pages/auth/GetStarted';

// ── 404 ───────────────────────────────────────────────────────
import NotFound from './pages/NotFound';

// ── Dashboard & Admin placeholders (built in Weeks 4–6) ───────
import { motion } from 'framer-motion';
import { pageTransition } from './animations/variants';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const ComingSoon = ({ title, week }) => (
  <motion.div
    variants={pageTransition}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="min-h-screen bg-bg-primary flex items-center justify-center px-6"
  >
    <div className="text-center max-w-sm">
      <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
        <Construction size={28} className="text-brand-secondary" />
      </div>
      <span className="inline-block text-xs font-mono font-medium text-brand-secondary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-brand-secondary/10">
        Coming in Week {week}
      </span>
      <h1 className="font-display font-bold text-3xl text-text-primary mt-4 mb-3">{title}</h1>
      <p className="text-text-secondary font-body text-sm mb-8">
        This section is being built. Check back soon.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-200 text-sm"
      >
        ← Back to Home
      </Link>
    </div>
  </motion.div>
);

// ── Layout wrapper — Navbar + Footer for public pages ─────────
function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* ── Public site ─────────────────────────────── */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/who-we-are" element={<PublicLayout><WhoWeAre /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
          <Route path="/projects" element={<PublicLayout><Projects /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

          {/* ── Auth ────────────────────────────────────── */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />

          {/* ── Dashboard (Week 4) ──────────────────────── */}
          <Route path="/dashboard" element={<ComingSoon title="Client Dashboard" week="4" />} />
          <Route path="/dashboard/projects" element={<ComingSoon title="My Projects" week="4" />} />
          <Route path="/dashboard/messages" element={<ComingSoon title="Messages" week="5" />} />
          <Route path="/dashboard/files" element={<ComingSoon title="Files" week="4" />} />
          <Route path="/dashboard/invoices" element={<ComingSoon title="Invoices" week="7" />} />
          <Route path="/dashboard/settings" element={<ComingSoon title="Settings" week="4" />} />

          {/* ── Admin Panel (Week 6) ────────────────────── */}
          <Route path="/admin" element={<ComingSoon title="Admin Dashboard" week="6" />} />
          <Route path="/admin/clients" element={<ComingSoon title="Clients" week="6" />} />
          <Route path="/admin/projects" element={<ComingSoon title="Admin Projects" week="6" />} />
          <Route path="/admin/messages" element={<ComingSoon title="Admin Messages" week="6" />} />
          <Route path="/admin/revenue" element={<ComingSoon title="Revenue" week="6" />} />

          {/* ── 404 ─────────────────────────────────────── */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </AnimatePresence>
    </ErrorBoundary>
  );
}
