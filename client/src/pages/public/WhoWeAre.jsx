import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition, staggerContainer, fadeUp, slideInLeft } from '../../animations/variants';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';
import CTASection from '../../components/sections/CTASection';

const values = [
  {
    icon: Shield,
    title: 'Transparency',
    description:
      'We tell you exactly what we are building, why we are building it that way, and when it will be done. No surprises.',
    color: '#7C5CFF',
  },
  {
    icon: Star,
    title: 'Quality',
    description:
      'We do not ship products we are not proud of. Every component, every API, every design decision is deliberate.',
    color: '#FF4D2E',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We treat your project like it is our own startup. Your success is our portfolio, and we take that seriously.',
    color: '#10B981',
  },
];

export default function WhoWeAre() {
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-mono font-medium text-brand-secondary uppercase tracking-widest mb-5">
              About Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
              We Are{' '}
              <span className="gradient-text-purple">Nexora Studio</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-xl leading-relaxed mb-8">
              A small but powerful team of developers, designers, and problem solvers who care deeply about the products we build.
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-lg leading-relaxed border-l-2 border-brand-primary pl-6">
              Our mission is simple. We want every founder, startup, and business owner to have access to premium quality digital products without the big agency price tag or the long timelines.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-4">
              Our Values
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl text-text-primary">
              What We Stand For
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map(({ icon: Icon, title, description, color }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-8 rounded-2xl bg-bg-surface border border-border"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${color}18` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-xl text-text-primary mb-3">{title}</h3>
                <p className="text-text-secondary font-body text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-4">
              The Team
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl text-text-primary mb-4">
              The People Behind Nexora
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-lg">
              A focused team that ships premium products.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {/* Founder card — update with real name/bio */}
            <motion.div
              variants={fadeUp}
              className="max-w-sm w-full p-8 rounded-2xl bg-bg-surface border border-border text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary mx-auto mb-5 flex items-center justify-center font-display font-bold text-white text-2xl">
                A
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1">Ajinkya Saivar</h3>
              <p className="text-brand-primary font-mono text-xs font-medium mb-4 uppercase tracking-wider">Founder & Lead Developer</p>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                Full-stack developer with expertise in React, Node.js, and cloud architecture. Passionate about building products that solve real problems and scale with the business.
              </p>
              <div className="mt-6 flex justify-center gap-2">
                {['React', 'Node.js', 'MongoDB', 'AWS'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-bg-secondary rounded-md border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
