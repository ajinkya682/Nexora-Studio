import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scaleIn, fadeUp } from '../../animations/variants';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-bg-primary flex items-center justify-center px-6"
    >
      <div className="text-center max-w-md">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2 mb-12">
          <div className="w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white">
            N
          </div>
          <span className="font-display font-bold text-xl text-text-primary">
            Nexora <span className="text-text-secondary font-normal">Studio</span>
          </span>
        </Link>

        {/* 404 number */}
        <motion.div variants={fadeUp} className="relative mb-6">
          <span className="font-display font-bold text-9xl text-text-primary/5 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-6xl gradient-text">404</span>
          </div>
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-display font-bold text-2xl text-text-primary mb-3">
          Page Not Found
        </motion.h1>
        <motion.p variants={fadeUp} className="text-text-secondary font-body text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            to="/"
            id="notfound-go-home"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            <Home size={16} /> Go Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
