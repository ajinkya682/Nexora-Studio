import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';

const steps = [
  {
    num: '1',
    title: 'Smart Functional Design',
    desc: 'We focus on creating designs that are not just beautiful, but solve real business problems effectively.',
  },
  {
    num: '2',
    title: 'Business-Driven Development',
    desc: 'Our code is optimized for scalability and conversion, ensuring your tech stack supports your goals.',
  },
  {
    num: '3',
    title: 'High-Converting Websites',
    desc: 'Every pixel is positioned to guide your users toward taking the actions that matter most to your business.',
  },
];

export default function WhyNexora() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Left: Team Image with Floating Pill */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Nexora Team"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              {/* Floating Pill Tag */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-10 left-10 px-6 py-3 bg-white shadow-premium rounded-full flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center font-display font-black text-[10px] text-brand-primary">AS</div>
                <span className="text-xs font-bold text-brand-secondary">Ajinkya Saivar — <span className="text-brand-muted font-medium">Founder</span></span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Approach */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.p variants={fadeUp} className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Our Unique Approach
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-5xl lg:text-6xl text-brand-secondary mb-16 leading-tight">
              We build with purpose<br />and precision.
            </motion.h2>

            <div className="space-y-12">
              {steps.map((step) => (
                <motion.div key={step.num} variants={fadeUp} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-display font-extrabold text-xl shadow-brand group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-brand-secondary mb-3">{step.title}</h3>
                    <p className="text-brand-muted text-lg leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
