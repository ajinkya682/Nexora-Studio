import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../animations/variants';

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden bg-bg-primary">
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-brand-primary/12 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute w-[300px] h-[200px] bg-brand-secondary/8 rounded-full blur-2xl" />
      </div>

      {/* Border frame */}
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl border border-brand-primary/20 bg-bg-surface/50 backdrop-blur-sm overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative px-8 py-16 md:px-16 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-6"
            >
              Ready to Build?
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6"
            >
              Have an idea?
              <br />
              <span className="gradient-text">Let us build it.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-text-secondary font-body text-lg leading-relaxed max-w-xl mx-auto mb-10"
            >
              From concept to working product in weeks. Tell us what you are building
              and we will tell you exactly how we can help.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                id="cta-start-project"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 text-base"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                id="cta-contact"
                className="inline-flex items-center gap-2 text-text-secondary font-body text-sm hover:text-text-primary transition-colors duration-200"
              >
                Or just say hello →
              </Link>
            </motion.div>

            {/* Trust note */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-text-secondary text-xs font-body"
            >
              Free consultation · No obligation · Response within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
