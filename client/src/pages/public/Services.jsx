import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition, staggerContainer, fadeUp, cardHover } from '../../animations/variants';
import { Monitor, Layers, Palette, Cpu, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import CTASection from '../../components/sections/CTASection';

const services = [
  {
    id: 'web-apps',
    icon: Monitor,
    color: '#FF4D2E',
    title: 'Web Applications',
    description:
      'We build full-stack web applications using React on the frontend and Node.js on the backend, connected to MongoDB. Whether you need a customer portal, an internal tool, or a consumer product, we build it with performance and scalability as the foundation.',
    included: [
      'Custom UI design',
      'REST API development',
      'Database architecture',
      'Authentication system',
      'Third-party integrations',
      'Deployment & hosting setup',
    ],
    timeline: '2–4 weeks',
  },
  {
    id: 'saas',
    icon: Layers,
    color: '#7C5CFF',
    title: 'SaaS Development',
    description:
      'Building a SaaS product means solving problems at scale. We handle everything from user authentication and subscription billing to multi-tenant architecture and analytics dashboards.',
    included: [
      'User management system',
      'Subscription & payment integration',
      'Admin dashboard',
      'Usage analytics',
      'Onboarding flow',
      'Email notification system',
    ],
    timeline: '4–8 weeks',
  },
  {
    id: 'design',
    icon: Palette,
    color: '#10B981',
    title: 'UI/UX Design',
    description:
      'Great design is not just about looking good. It is about guiding your user to take the right action at the right time. We design interfaces that are clean, intuitive, and conversion-focused.',
    included: [
      'User research & wireframes',
      'High-fidelity Figma designs',
      'Design system & component library',
      'Responsive mobile design',
      'Prototype & user flow documentation',
    ],
    timeline: '1–2 weeks',
  },
  {
    id: 'ai',
    icon: Cpu,
    color: '#F59E0B',
    title: 'AI Integration',
    description:
      'AI is no longer optional for competitive products. We help you integrate AI features that make your product smarter and your users more productive.',
    included: [
      'AI chatbot integration',
      'Document processing',
      'Smart search',
      'Workflow automation',
      'OpenAI & custom model integration',
    ],
    timeline: '1–3 weeks',
  },
];

function ServiceCard({ service }) {
  const { icon: Icon, color, title, description, included, timeline, id } = service;
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      className="scroll-mt-28 p-8 lg:p-10 rounded-2xl bg-bg-surface border border-border group hover:border-opacity-80 transition-colors duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left */}
        <div className="flex-1">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${color}18` }}>
            <Icon size={26} style={{ color }} />
          </div>
          <h2 className="font-display font-bold text-3xl text-text-primary mb-5">{title}</h2>
          <p className="text-text-secondary font-body text-base leading-relaxed mb-8">{description}</p>

          <div className="flex items-center gap-2 text-sm font-body text-text-secondary mb-8">
            <Clock size={15} style={{ color }} />
            <span>Typical timeline: <span className="text-text-primary font-medium">{timeline}</span></span>
          </div>

          <Link
            to="/get-started"
            id={`service-cta-${id}`}
            className="inline-flex items-center gap-2 px-6 py-3 font-body font-semibold rounded-xl text-white text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            style={{ backgroundColor: color }}
          >
            Start This Project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right — included list */}
        <div className="lg:w-72 flex-shrink-0">
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-secondary mb-5">
            What's Included
          </p>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color }} />
                <span className="text-text-secondary font-body text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-bg-primary overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
            <motion.span variants={fadeUp} className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-5">
              Services
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-5xl lg:text-6xl text-text-primary mb-6">
              Everything You Need to{' '}
              <span className="gradient-text">Ship & Scale</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-xl leading-relaxed">
              From idea to deployed product. Pick one service or let us handle everything end to end.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick-jump nav */}
      <div className="sticky top-16 z-30 bg-bg-secondary/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {services.map(({ id, title, color }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex-shrink-0 px-4 py-2 text-xs font-mono font-medium text-text-secondary rounded-lg hover:text-text-primary hover:bg-bg-surface transition-all duration-200"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service cards */}
      <section className="section-padding bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
