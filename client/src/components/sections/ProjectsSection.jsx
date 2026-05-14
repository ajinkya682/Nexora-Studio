import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { staggerContainer, fadeUp } from '../../animations/variants';

const projects = [
  {
    id: 'taskflow',
    name: 'TaskFlow Dashboard',
    tagline: 'A startup needed to manage 200+ daily client bookings without spreadsheets.',
    result: '60% reduction in booking time',
    resultColor: '#10B981',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    gradient: 'from-brand-secondary/20 to-brand-primary/10',
    accent: '#7C5CFF',
    category: 'Web App',
    duration: '3 weeks',
  },
  {
    id: 'launchpad',
    name: 'Launchpad SaaS',
    tagline: 'A founder needed a complete SaaS platform with subscription payments and user management.',
    result: '300 users in first month',
    resultColor: '#FF4D2E',
    stack: ['React', 'Express', 'Stripe', 'PostgreSQL'],
    gradient: 'from-brand-primary/20 to-yellow-500/10',
    accent: '#FF4D2E',
    category: 'SaaS Platform',
    duration: '12 days',
  },
  {
    id: 'novabrand',
    name: 'NovaBrand Agency Site',
    tagline: 'A design agency needed a portfolio site that converted visitors into clients.',
    result: '3× increase in inquiry rate',
    resultColor: '#F59E0B',
    stack: ['Next.js', 'Framer Motion', 'Sanity CMS'],
    gradient: 'from-success/20 to-brand-secondary/10',
    accent: '#10B981',
    category: 'UI/UX Design',
    duration: '1 week',
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl bg-bg-surface border border-border overflow-hidden cursor-default`}
    >
      {/* Card header — gradient mockup */}
      <div className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Floating card mockup */}
        <div className="glass rounded-xl p-4 w-48 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md" style={{ backgroundColor: project.accent }} />
            <div className="h-2 rounded bg-text-secondary/20 flex-1" />
          </div>
          <div className="space-y-1.5">
            {[80, 60, 90].map((w, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full"
                style={{ width: `${w}%`, backgroundColor: `${project.accent}40` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
              />
            ))}
          </div>
        </div>

        {/* Category badge */}
        <span
          className="absolute top-4 right-4 text-xs font-mono font-medium px-3 py-1 rounded-full"
          style={{ color: project.accent, background: `${project.accent}18` }}
        >
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-bold text-xl text-text-primary">{project.name}</h3>
          <ArrowUpRight
            size={18}
            className="text-text-secondary group-hover:text-brand-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 mt-1 flex-shrink-0"
          />
        </div>

        <p className="text-text-secondary font-body text-sm leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Result */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-body font-semibold mb-5"
          style={{ color: project.resultColor, background: `${project.resultColor}12` }}
        >
          <span>📈</span>
          {project.result}
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-bg-secondary rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
          <span className="px-2.5 py-1 text-xs font-mono text-text-secondary ml-auto">
            ⏱ {project.duration}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-5"
          >
            Work That Speaks For Itself
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary font-body text-lg">
            We do not just build websites. We solve business problems with technology.
          </motion.p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
