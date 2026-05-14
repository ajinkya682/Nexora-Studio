import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Public pages
import Home from './pages/public/Home';
import NotFound from './pages/NotFound';

// Placeholder pages (will be built in Week 2)
const Placeholder = ({ title }) => (
  <div className="min-h-screen bg-bg-primary flex items-center justify-center">
    <div className="text-center">
      <span className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-brand-primary/10">
        Coming in Week 2
      </span>
      <h1 className="font-display font-bold text-4xl text-text-primary mt-4">{title}</h1>
      <p className="text-text-secondary font-body mt-3">This page is being built.</p>
    </div>
  </div>
);

// Layout wrapper — applies Navbar + Footer to public pages
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
          <Route path="/who-we-are" element={<PublicLayout><Placeholder title="Who We Are" /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><Placeholder title="Services" /></PublicLayout>} />
          <Route path="/projects" element={<PublicLayout><Placeholder title="Projects" /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Placeholder title="Contact Us" /></PublicLayout>} />

          {/* ── Auth pages ──────────────────────────────── */}
          <Route path="/sign-in" element={<Placeholder title="Sign In" />} />
          <Route path="/get-started" element={<Placeholder title="Get Started" />} />

          {/* ── Client dashboard ────────────────────────── */}
          <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
          <Route path="/dashboard/projects" element={<Placeholder title="My Projects" />} />
          <Route path="/dashboard/messages" element={<Placeholder title="Messages" />} />
          <Route path="/dashboard/files" element={<Placeholder title="Files" />} />
          <Route path="/dashboard/invoices" element={<Placeholder title="Invoices" />} />
          <Route path="/dashboard/settings" element={<Placeholder title="Settings" />} />

          {/* ── Admin panel ─────────────────────────────── */}
          <Route path="/admin" element={<Placeholder title="Admin Dashboard" />} />
          <Route path="/admin/clients" element={<Placeholder title="Clients" />} />
          <Route path="/admin/projects" element={<Placeholder title="Admin Projects" />} />
          <Route path="/admin/messages" element={<Placeholder title="Admin Messages" />} />
          <Route path="/admin/revenue" element={<Placeholder title="Revenue" />} />

          {/* ── 404 ─────────────────────────────────────── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </ErrorBoundary>
  );
}
