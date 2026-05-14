import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '1',
    title: 'Design',
    desc: 'Crafting visually stunning and functional designs that speak your brand language.',
  },
  {
    id: '2',
    title: 'Development',
    desc: 'Bringing designs to life with robust, scalable, and performance-driven code.',
  },
  {
    id: '3',
    title: 'Marketing',
    desc: 'Launching and growing your digital presence with strategic high-conversion tactics.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-brand-secondary">
            Our <span className="text-brand-primary underline decoration-brand-primary decoration-4 underline-offset-8">Work Process</span>
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12"
        >
          {/* Curved Dotted Arrows (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-12">
            <svg className="w-full h-full" viewBox="0 0 400 50" fill="none">
              <path 
                d="M5 25C100 0 150 50 200 25S300 0 395 25" 
                stroke="#E8381A" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                className="opacity-20"
              />
            </svg>
          </div>

          {steps.map((step, idx) => (
            <motion.div key={step.id} variants={fadeUp} className="relative text-center group">
              <div className="relative z-10 w-20 h-20 rounded-full bg-brand-primary text-white font-display font-extrabold text-2xl flex items-center justify-center mx-auto mb-10 shadow-brand group-hover:scale-110 transition-transform">
                {step.id}
              </div>
              
              <h3 className="font-display font-bold text-3xl mb-4 text-brand-secondary">{step.title}</h3>
              <p className="text-brand-muted text-lg leading-relaxed mb-8 px-6">
                {step.desc}
              </p>
              
              <button className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:gap-4 transition-all uppercase tracking-[0.2em]">
                See More <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
