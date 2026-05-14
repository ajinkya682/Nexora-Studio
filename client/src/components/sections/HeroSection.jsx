import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../animations/variants';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-bg-primary">
      {/* Decorative Rotating Badge */}
      <div className="absolute top-32 left-[48%] hidden lg:block z-20 translate-x-10">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-secondary/10 fill-current">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[9px] font-mono font-bold uppercase tracking-[0.25em]">
                <textPath xlinkHref="#circlePath">
                  Nexora Studio digital agency • Nexora Studio digital agency •
                </textPath>
              </text>
            </svg>
          </motion.div>
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center font-display font-black text-brand-primary">
            NS
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brand-muted leading-tight">
                12 YEARS EXPERIENCED WEB DEVELOPMENT &<br />DIGITAL MARKETING AGENCY
              </p>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="font-display font-extrabold text-7xl lg:text-8xl text-brand-secondary leading-[0.9] mb-10 tracking-tighter"
            >
              Helping you to<br />
              get paid <span className="relative inline-block italic text-brand-primary">
                faster.
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-2 lg:h-3 bg-brand-primary/20 -z-10 origin-left rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeUp} 
              className="text-brand-muted font-body text-xl max-w-lg mb-12 leading-relaxed"
            >
              Building high-end creative solutions that transform brands and drive business growth through design and tech.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 mb-12">
              <button className="px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:shadow-brand transition-all active:scale-95">
                Get Started
              </button>
              <button className="flex items-center gap-4 font-bold text-brand-secondary group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all">
                  <Play size={18} fill="currentColor" />
                </div>
                How it works
              </button>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">Trusted by 10+ companies</span>
              <div className="flex gap-4 grayscale opacity-40">
                <div className="font-display font-black text-sm">MARVEL</div>
                <div className="font-display font-black text-sm">ADIDAS</div>
                <div className="font-display font-black text-sm">TESLA</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative flex-1"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800" 
                alt="Nathan .S"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-12 left-12">
                <div className="font-display font-black text-7xl text-white/20 select-none">NS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
