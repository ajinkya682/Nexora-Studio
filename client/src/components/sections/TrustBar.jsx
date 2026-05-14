import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, fadeUp } from '../../animations/variants';

const logos = [
  'TechCorp', 'Veloxa', 'Buildify', 'Orbitly', 'NovaCo', 'Stackr'
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-bg-secondary border-y border-border overflow-hidden" id="trust-bar">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm font-body mb-10"
        >
          Trusted by founders and startups across{' '}
          <span className="text-text-primary font-medium">12 countries</span>
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {logos.map((name) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="font-display font-bold text-lg text-text-secondary/30 hover:text-text-secondary/50 transition-colors duration-300 tracking-wider uppercase"
            >
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
