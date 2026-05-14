import { motion } from 'framer-motion';
import { Monitor, Palette, Smartphone, Globe } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../animations/variants';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'A successful website does three things: it attracts the right kind of visitors.',
    highlight: false,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create a platform with the best and coolest quality from us.',
    highlight: true,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Create a platform with the best and coolest quality from us.',
    highlight: false,
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Agencies provide the necessary boost your business needs to grow.',
    highlight: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-brand-secondary">
            Our Included <span className="text-brand-primary underline decoration-brand-primary decoration-4 underline-offset-8">Services</span>
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`p-10 rounded-[2.5rem] transition-all duration-500 group ${
                service.highlight 
                  ? 'bg-brand-primary text-white shadow-brand scale-105 z-10' 
                  : 'bg-white text-brand-secondary shadow-soft hover:shadow-elevated hover:-translate-y-3'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-colors ${
                service.highlight ? 'bg-white/20' : 'bg-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white'
              }`}>
                <service.icon size={28} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-5 leading-tight">{service.title}</h3>
              <p className={`font-body leading-relaxed ${
                service.highlight ? 'text-white/80' : 'text-brand-muted'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
