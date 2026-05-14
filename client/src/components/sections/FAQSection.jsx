import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, fadeUp } from '../../animations/variants';

const faqs = [
  {
    id: 'faq-1',
    q: 'How long does a typical project take?',
    a: 'A standard website or landing page takes 5 to 7 days. A full web application or SaaS platform takes 2 to 6 weeks depending on complexity. We give you a precise timeline after the discovery call.',
  },
  {
    id: 'faq-2',
    q: 'Do you work with early-stage startups?',
    a: 'Yes. Most of our clients are founders at the idea or early stage. We help you define scope and build an MVP that you can show to users and investors.',
  },
  {
    id: 'faq-3',
    q: 'What information do I need to start?',
    a: 'Just your idea and a rough goal. You can share a brief, a Figma file, a reference site, or even just a voice note. We figure out the rest together.',
  },
  {
    id: 'faq-4',
    q: 'Do you offer post-launch support?',
    a: 'Yes. Every project comes with 30 days of free support after delivery. After that, we offer monthly maintenance plans tailored to your needs.',
  },
  {
    id: 'faq-5',
    q: 'Can I request changes during development?',
    a: 'Yes. We work in sprints and share previews regularly. Minor changes are included. Large scope changes are discussed and quoted fairly — no surprises.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="border border-border rounded-xl overflow-hidden bg-bg-surface"
    >
      <button
        className="w-full flex items-center justify-between px-7 py-5 text-left group"
        onClick={onToggle}
        id={item.id}
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-text-primary text-base pr-4 group-hover:text-brand-primary transition-colors duration-200">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0 w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center"
        >
          <ChevronDown size={16} className={`transition-colors duration-200 ${isOpen ? 'text-brand-primary' : 'text-text-secondary'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-6 text-text-secondary font-body text-sm leading-relaxed border-t border-border pt-4 mt-0">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="section-padding bg-bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-4"
          >
            FAQs
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl lg:text-5xl text-text-primary"
          >
            Questions We Hear Often
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
