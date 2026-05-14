import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

export default function CTASection() {
  return (
    <section className="section-padding bg-bg-dark text-white relative overflow-hidden">
      {/* Floating Abstract Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brand-primary opacity-20 blur-[60px] animate-pulse" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 opacity-10 blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/60 mb-10">
            Start Your Journey
          </div>
          
          <h2 className="font-display font-extrabold text-6xl lg:text-8xl mb-16 leading-[0.95] tracking-tighter">
            Let's start building your Business, <span className="text-brand-primary italic">today.</span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <button className="px-10 py-5 bg-brand-primary text-white font-bold rounded-full hover:shadow-brand transition-all active:scale-95 text-sm tracking-widest uppercase">
              Get started for free
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-bg-dark transition-all active:scale-95 text-sm tracking-widest uppercase">
              Contact sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
