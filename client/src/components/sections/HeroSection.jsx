import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeUp, slideInRight, staggerContainer, drawUnderline } from '../../animations/variants';

// Floating dashboard mockup card
function DashboardMockup() {
  const projects = [
    { name: 'TaskFlow Dashboard', stage: 'In Development', pct: 72, color: '#7C5CFF' },
    { name: 'Launchpad SaaS', stage: 'In Testing', pct: 90, color: '#10B981' },
    { name: 'NovaBrand Site', stage: 'In Design', pct: 45, color: '#FF4D2E' },
  ];

  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate="visible"
      className="relative animate-float"
      style={{ animationDuration: '6s' }}
    >
      {/* Glow halo */}
      <div className="absolute -inset-4 bg-brand-secondary/10 rounded-3xl blur-2xl pointer-events-none" />
      <div className="relative glass rounded-2xl p-6 w-full max-w-md border border-border shadow-card">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-text-secondary text-xs font-body uppercase tracking-wider">Nexora Studio</p>
            <h3 className="text-text-primary font-display font-semibold text-base">Active Projects</h3>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-error" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-success" />
          </div>
        </div>

        {/* Project rows */}
        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-primary text-sm font-body font-medium">{p.name}</p>
                  <p className="text-text-secondary text-xs font-mono">{p.stage}</p>
                </div>
                <span
                  className="text-xs font-mono font-medium px-2 py-0.5 rounded-full"
                  style={{ color: p.color, background: `${p.color}18` }}
                >
                  {p.pct}%
                </span>
              </div>
              <div className="w-full bg-bg-primary rounded-full h-1.5">
                <motion.div
                  className="h-1.5 rounded-full"
                  style={{ backgroundColor: p.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${p.pct}%` }}
                  transition={{ duration: 1.2, delay: 1.2 + i * 0.15, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer stat */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            </div>
            <span className="text-text-secondary text-xs font-body">3 Active Sprints</span>
          </div>
          <span className="text-success text-xs font-mono font-medium">+24% this week</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/6 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-secondary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-primary/4 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 pt-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                Premium Web Development Agency
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl text-text-primary leading-[1.05] tracking-tight mb-6"
            >
              We Build Digital
              <br />
              Products That{' '}
              <span className="relative inline-block">
                Scale
                {/* SVG underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full overflow-visible"
                  height="12"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 8 Q25 2 50 7 Q75 12 98 6"
                    stroke="#FF4D2E"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    variants={drawUnderline}
                    initial="hidden"
                    animate="visible"
                    style={{ pathLength: 0 }}
                  />
                </svg>
              </span>
              <br />
              Your Business.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-text-secondary font-body text-lg leading-relaxed max-w-lg mb-10"
            >
              Nexora Studio is a premium web development agency specializing in full-stack
              applications, SaaS platforms, and AI-powered digital systems. We turn your
              ideas into products that perform.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/get-started"
                id="hero-cta-primary"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Start Your Project <ArrowRight size={17} />
              </Link>
              <a
                href="#projects"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-text-primary font-body font-medium rounded-xl hover:border-text-secondary transition-all duration-200 text-sm"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-14 flex items-center gap-8 pt-8 border-t border-border/50"
            >
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '12+', label: 'Countries' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display font-bold text-2xl text-text-primary">{value}</p>
                  <p className="text-text-secondary text-xs font-body mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-secondary text-xs font-body">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
