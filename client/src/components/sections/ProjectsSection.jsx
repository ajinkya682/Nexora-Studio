import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-brand-secondary leading-tight">
            Work That Made Life Easier to Our{' '}
            <span className="text-brand-primary underline decoration-brand-primary decoration-4 underline-offset-8">Beloved Clients</span>
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Websites Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-[3.5rem] p-12 shadow-soft hover:shadow-elevated transition-all duration-500 group overflow-hidden border border-border/50">
            <h3 className="font-display font-bold text-3xl text-center mb-6">Website Inspiration</h3>
            <p className="text-brand-muted text-center text-lg mb-12 px-10">
              Layered website mockup screenshots showcasing high-converting landing pages and portfolios.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" className="rounded-2xl border border-border group-hover:scale-105 transition-transform duration-700" alt="Web 1" />
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=400" className="rounded-2xl border border-border group-hover:scale-105 transition-transform duration-700 shadow-xl lg:-translate-y-6" alt="Web 2" />
            </div>
            <div className="text-center">
              <button className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
                View Project <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Mobile Apps Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-[3.5rem] p-12 shadow-soft hover:shadow-elevated transition-all duration-500 group overflow-hidden border border-border/50">
            <h3 className="font-display font-bold text-3xl text-center mb-6">Mobile Apps Inspiration</h3>
            <p className="text-brand-muted text-center text-lg mb-12 px-10">
              Stacked phone mockup screenshots highlighting seamless user experience and modern UI patterns.
            </p>
            <div className="grid grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=200&sig=${i}`} 
                  className="rounded-xl border border-border group-hover:-translate-y-4 transition-all duration-500 shadow-lg" 
                  alt={`App ${i}`} 
                />
              ))}
            </div>
            <div className="text-center">
              <button className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
                View Project <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
