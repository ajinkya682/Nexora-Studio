import { motion } from 'framer-motion';
import { Zap, MessageSquare, Code2, Headphones } from 'lucide-react';
import { staggerContainer, fadeUp, slideInLeft } from '../../animations/variants';

const points = [
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    description:
      'We deliver MVPs in 7 to 14 days. No long waiting periods. You see real progress from day one.',
    color: '#FF4D2E',
  },
  {
    icon: MessageSquare,
    title: 'Direct Founder Communication',
    description:
      'You speak directly with the developer building your product. No account managers, no miscommunication.',
    color: '#7C5CFF',
  },
  {
    icon: Code2,
    title: 'Clean Scalable Architecture',
    description:
      'Every line of code is written with your future in mind. Our systems are built to scale from 10 users to 100,000.',
    color: '#10B981',
  },
  {
    icon: Headphones,
    title: 'Post-Launch Support',
    description:
      'We do not disappear after delivery. We stay with you for bug fixes, updates, and feature additions.',
    color: '#F59E0B',
  },
];

export default function WhyNexora() {
  return (
    <section id="why-nexora" className="section-padding bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — heading */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-mono font-medium text-brand-secondary uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-text-primary leading-tight mb-6">
              Why Founders
              <br />
              Choose{' '}
              <span className="gradient-text">Nexora</span>
            </h2>
            <p className="text-text-secondary font-body text-lg leading-relaxed">
              We are not an agency that takes your money and disappears. We are a partner who
              stays invested in your success from the first call to years after launch.
            </p>

            {/* Decorative element */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['#FF4D2E', '#7C5CFF', '#10B981'].map((c) => (
                  <div
                    key={c}
                    className="w-10 h-10 rounded-full border-2 border-bg-secondary flex items-center justify-center text-xs font-display font-bold text-white"
                    style={{ backgroundColor: c }}
                  >
                    ★
                  </div>
                ))}
              </div>
              <div>
                <p className="text-text-primary text-sm font-body font-medium">50+ Happy Founders</p>
                <p className="text-text-secondary text-xs font-body">across 12 countries</p>
              </div>
            </div>
          </motion.div>

          {/* Right — points grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {points.map(({ icon: Icon, title, description, color }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-bg-surface border border-border hover:border-opacity-100 transition-colors duration-300 group"
                style={{ '--hover-color': color }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-base mb-2">
                  {title}
                </h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
