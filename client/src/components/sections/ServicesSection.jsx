import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Layers, Palette, Cpu, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUp, cardHover } from '../../animations/variants';

const services = [
  {
    id: 'web-apps',
    icon: Monitor,
    title: 'Web Applications',
    description:
      'Custom full-stack web apps built with React and Node.js. Fast, scalable, and built to grow with your business.',
    color: '#FF4D2E',
    bg: 'rgba(255, 77, 46, 0.08)',
  },
  {
    id: 'saas',
    icon: Layers,
    title: 'SaaS Platforms',
    description:
      'End-to-end SaaS development including dashboards, subscription systems, user management, and payment integration.',
    color: '#7C5CFF',
    bg: 'rgba(124, 92, 255, 0.08)',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Clean, conversion-focused interface design. We design systems that users love and that reflect your brand at the highest level.',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI Integration',
    description:
      'We integrate AI into your product. From smart chatbots to automated workflows, we help your business work smarter.',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.08)',
  },
];

function ServiceCard({ service, index }) {
  const { icon: Icon, title, description, color, bg, id } = service;
  return (
    <motion.div
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        variants={cardHover}
        className="relative h-full p-8 rounded-2xl bg-bg-surface border border-border cursor-default group"
      >
        {/* Top accent line on hover */}
        <div
          className="absolute top-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: bg }}
        >
          <Icon size={22} style={{ color }} />
        </div>

        <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary font-body text-sm leading-relaxed mb-6">
          {description}
        </p>

        <Link
          to={`/services#${id}`}
          id={`service-link-${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-body font-medium transition-all duration-200 group-hover:gap-2.5"
          style={{ color }}
        >
          Learn more <ArrowRight size={15} />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-bg-primary">
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
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-5"
          >
            What We Build For You
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary font-body text-lg leading-relaxed">
            Every service we offer is designed to solve a specific business problem, not just deliver code.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
