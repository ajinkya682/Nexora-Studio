import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { FaXTwitter, FaDribbble, FaLinkedinIn } from 'react-icons/fa6';

const team = [
  {
    name: 'Nathan .S',
    role: 'CEO / Founder',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Thomas .S',
    role: 'Lead Developer',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Marcus .K',
    role: 'Design Director',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Jonie .W',
    role: 'Digital Strategist',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-brand-secondary mb-10">
            Meet Our <span className="text-brand-primary underline decoration-brand-primary decoration-4 underline-offset-8">Creative Teams</span>
          </h2>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-brand-secondary text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity">
              About us
            </button>
            <button className="px-8 py-3 border border-border text-brand-secondary text-sm font-bold rounded-full hover:bg-white transition-colors">
              Careers
            </button>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group text-center">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 bg-bg-surface grayscale hover:grayscale-0 transition-all duration-700 shadow-soft">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-secondary mb-2">{member.name}</h3>
              <p className="font-body text-brand-muted mb-6">{member.role}</p>
              <div className="flex justify-center gap-4">
                {[FaXTwitter, FaDribbble, FaLinkedinIn].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:border-brand-primary transition-all cursor-pointer">
                    <Icon size={14} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
