import { motion } from 'framer-motion';
import { Search, Hammer, Rocket } from 'lucide-react';
import { staggerContainer, fadeUp } from '../../animations/variants';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We start with a deep dive into your idea, your users, and your goals. We define scope, timeline, and deliverables before writing a single line of code.',
    color: '#7C5CFF',
    duration: 'Day 1–3',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Design & Build',
    description:
      'Our design and development happen in parallel sprints. You receive regular updates, previews, and can give feedback at every stage.',
    color: '#FF4D2E',
    duration: 'Week 1–N',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Grow',
    description:
      'We handle deployment, performance testing, and go-live support. After launch, we stay available for iterations and new features.',
    color: '#10B981',
    duration: 'Launch day+',
  },
];

// SVG arrow between steps
function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-16">
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" aria-hidden="true">
        <path
          d="M2 12 H40 M34 6 L40 12 L34 18"
          stroke="#1F2A40"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-bg-secondary">
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
            className="inline-block text-xs font-mono font-medium text-brand-secondary uppercase tracking-widest mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl lg:text-5xl text-text-primary"
          >
            How We Work
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-center flex-1">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex-1 w-full"
              >
                <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full group hover:border-opacity-80 transition-colors">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-display font-bold text-4xl"
                      style={{ color: `${step.color}30` }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{ color: step.color, background: `${step.color}15` }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon size={22} style={{ color: step.color }} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
