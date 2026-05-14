import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';

const clients = [
  { name: 'Adidas', logo: 'ADIDAS' },
  { name: 'Puma', logo: 'PUMA' },
  { name: 'AWS', logo: 'AWS' },
  { name: 'Zara', logo: 'ZARA' },
  { name: 'H&M', logo: 'H&M' },
  { name: 'Tesla', logo: 'TESLA' },
  { name: 'Marvel', logo: 'MARVEL' },
  { name: 'Disney', logo: 'DISNEY' },
];

export default function ClientsSection() {
  return (
    <section className="section-padding bg-bg-primary border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-md">
            <h2 className="font-display font-extrabold text-5xl text-brand-secondary mb-6">
              Our <span className="text-brand-primary underline decoration-brand-primary decoration-4 underline-offset-8">Clients</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              We collaborate with global brands to deliver exceptional digital experiences across all platforms.
            </p>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20 rounded-[3rem] overflow-hidden border border-border/50 shadow-soft"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white p-12 flex items-center justify-center group cursor-pointer"
            >
              <div className="font-display font-black text-3xl text-brand-secondary opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:text-brand-primary transition-all duration-500 transform group-hover:scale-110">
                {client.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
