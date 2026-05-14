import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp } from '../../animations/variants';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import CTASection from '../../components/sections/CTASection';

const FILTERS = ['All', 'Web App', 'SaaS', 'Design'];

const projects = [
  {
    id: 'taskflow',
    name: 'TaskFlow Dashboard',
    category: 'Web App',
    problem: 'A startup needed a way to manage 200+ daily client bookings without spreadsheets.',
    solution: 'We built a full custom dashboard with real-time booking management, automated reminders, and analytics.',
    result: '60% reduction in booking time',
    resultColor: '#10B981',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    duration: '3 weeks',
    gradient: 'from-brand-secondary/20 to-brand-primary/10',
    accent: '#7C5CFF',
  },
  {
    id: 'launchpad',
    name: 'Launchpad SaaS',
    category: 'SaaS',
    problem: 'A founder needed a complete SaaS platform with subscription payments and user management.',
    solution: 'End-to-end SaaS build: multi-tenant auth, Stripe subscriptions, admin panel, onboarding flow.',
    result: '300 users in first month',
    resultColor: '#FF4D2E',
    stack: ['React', 'Express', 'Razorpay', 'PostgreSQL', 'Redis'],
    duration: '12 days',
    gradient: 'from-brand-primary/20 to-yellow-500/10',
    accent: '#FF4D2E',
  },
  {
    id: 'novabrand',
    name: 'NovaBrand Agency Site',
    category: 'Design',
    problem: 'A design agency needed a portfolio site that converted visitors into clients.',
    solution: 'High-fidelity animated portfolio with case study pages, inquiry form, and conversion-optimised layout.',
    result: '3× increase in inquiry rate',
    resultColor: '#F59E0B',
    stack: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    duration: '1 week',
    gradient: 'from-success/20 to-brand-secondary/10',
    accent: '#10B981',
  },
  {
    id: 'orbitcrm',
    name: 'OrbitCRM',
    category: 'SaaS',
    problem: 'A sales team was losing leads because they had no centralised pipeline tracking.',
    solution: 'Built a lightweight CRM with pipeline kanban, email sync, and activity feed.',
    result: '40% faster deal closing',
    resultColor: '#7C5CFF',
    stack: ['React', 'Node.js', 'MongoDB', 'Nodemailer'],
    duration: '4 weeks',
    gradient: 'from-brand-secondary/15 to-success/10',
    accent: '#7C5CFF',
  },
  {
    id: 'stackr',
    name: 'Stackr Landing Page',
    category: 'Design',
    problem: 'A B2B SaaS needed a product landing page that communicated value fast and drove sign-ups.',
    solution: 'Designed and built a conversion-focused landing page with interactive demos and social proof.',
    result: '8% sign-up conversion rate',
    resultColor: '#F59E0B',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    duration: '5 days',
    gradient: 'from-yellow-500/15 to-brand-primary/10',
    accent: '#F59E0B',
  },
  {
    id: 'veloxa',
    name: 'Veloxa App Portal',
    category: 'Web App',
    problem: 'A logistics company needed a client portal for real-time shipment tracking.',
    solution: 'Built a real-time tracking portal with map integration, status updates, and document management.',
    result: '70% fewer support tickets',
    resultColor: '#10B981',
    stack: ['React', 'Node.js', 'Socket.io', 'Google Maps API'],
    duration: '3 weeks',
    gradient: 'from-success/20 to-brand-secondary/10',
    accent: '#10B981',
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group rounded-2xl bg-bg-surface border border-border overflow-hidden cursor-default"
    >
      {/* Visual header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Minimal mockup */}
        <div className="glass rounded-xl px-5 py-4 w-52 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-md" style={{ backgroundColor: project.accent }} />
            <div className="h-2 bg-text-secondary/20 rounded flex-1" />
          </div>
          {[85, 60, 75].map((w, i) => (
            <motion.div
              key={i}
              className="h-1.5 rounded-full mb-1.5"
              style={{ width: `${w}%`, backgroundColor: `${project.accent}40` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${w}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 * i }}
            />
          ))}
        </div>
        {/* Category badge */}
        <span
          className="absolute top-3 right-3 text-xs font-mono font-medium px-3 py-1 rounded-full"
          style={{ color: project.accent, background: `${project.accent}18` }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-bold text-lg text-text-primary">{project.name}</h3>
          <ArrowUpRight
            size={17}
            className="text-text-secondary group-hover:text-brand-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 mt-0.5 flex-shrink-0"
          />
        </div>
        <p className="text-text-secondary font-body text-sm leading-relaxed mb-4">{project.problem}</p>

        {/* Result */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-body font-semibold mb-4"
          style={{ color: project.resultColor, background: `${project.resultColor}12` }}
        >
          📈 {project.result}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-xs font-mono text-text-secondary bg-bg-secondary rounded border border-border">
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-mono text-text-secondary">+{project.stack.length - 4}</span>
          )}
          <span className="ml-auto text-xs font-mono text-text-secondary">⏱ {project.duration}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.span variants={fadeUp} className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-5">
              Our Projects
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-5xl lg:text-6xl text-text-primary mb-6">
              Work That
              <br />
              <span className="gradient-text">Speaks For Itself</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-xl leading-relaxed">
              We do not just build websites. We solve business problems with technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs + Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                variants={fadeUp}
                onClick={() => setActiveFilter(f)}
                id={`filter-${f.toLowerCase().replace(' ', '-')}`}
                className={`px-5 py-2 rounded-xl text-sm font-body font-medium transition-all duration-200 border ${
                  activeFilter === f
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-bg-surface text-text-secondary border-border hover:text-text-primary hover:border-text-secondary'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
