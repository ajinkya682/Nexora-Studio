import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'A standard website takes 2-4 weeks. SaaS platforms and complex web apps usually take 4-8 weeks depending on the scope.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we provide 30 days of free support after launch to ensure everything runs smoothly and you are comfortable with the system.',
  },
  {
    question: 'Can you help with app design only?',
    answer: 'Absolutely. We offer standalone UI/UX design services where we deliver high-fidelity Figma prototypes and a design system.',
  },
  {
    question: 'How do payments work?',
    answer: 'We typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, we can split it into milestones.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* Left side */}
          <div className="lg:w-2/5">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              FAQ
            </span>
            <h2 className="font-display font-extrabold text-5xl lg:text-7xl text-brand-secondary leading-tight tracking-tighter">
              Frequently Asked <span className="text-brand-primary">Questions</span>
            </h2>
            <p className="text-brand-muted text-lg mt-10 leading-relaxed max-w-sm">
              Have a different question? Reach out to us at{' '}
              <a href="mailto:hello@nexorastudio.com" className="text-brand-primary font-bold hover:underline">
                hello@nexorastudio.com
              </a>
            </p>
          </div>

          {/* Right side - Accordion */}
          <div className="flex-1 space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="border-b border-border transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className={`font-display font-bold text-xl lg:text-2xl transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-transparent text-brand-primary border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-white'
                    }`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="pb-10 text-brand-muted text-lg leading-relaxed pr-10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
