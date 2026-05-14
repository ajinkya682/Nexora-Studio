import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { pageTransition, staggerContainer, fadeUp, slideInRight } from '../../animations/variants';
import { Mail, Clock, MapPin, Send, Paperclip, CheckCircle2, AlertCircle } from 'lucide-react';

const PROJECT_TYPES = [
  'Website / Landing Page',
  'Web Application',
  'SaaS Platform',
  'UI/UX Design',
  'AI Integration',
  'Other',
];

const BUDGET_RANGES = [
  'Under ₹50,000',
  '₹50,000 – ₹1,50,000',
  '₹1,50,000 – ₹5,00,000',
  '₹5,00,000 and above',
];

function InputField({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-body font-medium text-text-secondary mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-body text-error">
          <AlertCircle size={12} /> {error.message}
        </p>
      )}
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 bg-bg-surface border border-border rounded-xl text-text-primary font-body text-sm placeholder-text-secondary/50 focus:outline-none focus:border-brand-primary transition-colors duration-200';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call — replace with real POST /api/contact in Week 3
    await new Promise((r) => setTimeout(r, 1500));
    console.log('Contact form data:', data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-bg-primary overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-secondary/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.span variants={fadeUp} className="inline-block text-xs font-mono font-medium text-brand-primary uppercase tracking-widest mb-5">
              Get In Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-5xl lg:text-6xl text-text-primary mb-6">
              Let's Build Something
              <br />
              <span className="gradient-text">Together</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-xl leading-relaxed">
              Tell us about your project and we will get back to you within 24 hours with a clear plan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl bg-bg-surface border border-success/30"
                >
                  <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-text-primary mb-3">Message Sent!</h2>
                  <p className="text-text-secondary font-body max-w-sm">
                    We have received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 text-sm font-body font-medium text-brand-primary border border-brand-primary/30 rounded-xl hover:bg-brand-primary/5 transition-all duration-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 p-8 rounded-2xl bg-bg-surface border border-border"
                  noValidate
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp}>
                      <InputField label="Full Name *" id="name" error={errors.name}>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          className={inputClass}
                          {...register('name', { required: 'Name is required' })}
                        />
                      </InputField>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                      <InputField label="Email Address *" id="email" error={errors.email}>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          className={inputClass}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                          })}
                        />
                      </InputField>
                    </motion.div>
                  </div>

                  {/* Project type + budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp}>
                      <InputField label="Project Type *" id="projectType" error={errors.projectType}>
                        <select
                          id="projectType"
                          className={`${inputClass} appearance-none cursor-pointer`}
                          {...register('projectType', { required: 'Please select a project type' })}
                        >
                          <option value="">Select project type</option>
                          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </InputField>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                      <InputField label="Budget Range" id="budget" error={errors.budget}>
                        <select
                          id="budget"
                          className={`${inputClass} appearance-none cursor-pointer`}
                          {...register('budget')}
                        >
                          <option value="">Select budget range</option>
                          {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </InputField>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.div variants={fadeUp}>
                    <InputField label="Project Description *" id="description" error={errors.description}>
                      <textarea
                        id="description"
                        rows={6}
                        placeholder="Describe what you want to build. What problem does it solve? Who is it for? Share any reference links or ideas."
                        className={`${inputClass} resize-none`}
                        {...register('description', {
                          required: 'Please describe your project',
                          minLength: { value: 30, message: 'Please write at least 30 characters' },
                        })}
                      />
                    </InputField>
                  </motion.div>

                  {/* File attachment note */}
                  <motion.div variants={fadeUp}>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary border border-border text-text-secondary text-sm font-body">
                      <Paperclip size={16} className="text-brand-primary flex-shrink-0" />
                      <span>Have a Figma file, brief, or reference? You can share it after we connect — we'll send you a secure link.</span>
                    </div>
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeUp}>
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={17} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </div>

            {/* Contact info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  value: 'hello@nexorastudio.com',
                  sub: 'We read every email personally',
                  color: '#FF4D2E',
                },
                {
                  icon: Clock,
                  title: 'Response Time',
                  value: 'Within 24 hours',
                  sub: 'Usually much faster',
                  color: '#7C5CFF',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'India',
                  sub: 'Working with clients globally',
                  color: '#10B981',
                },
              ].map(({ icon: Icon, title, value, sub, color }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-bg-surface border border-border"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}18` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs font-mono uppercase tracking-wider mb-1">{title}</p>
                    <p className="text-text-primary font-display font-semibold text-base">{value}</p>
                    <p className="text-text-secondary text-xs font-body mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Reassurance note */}
              <motion.div variants={fadeUp} className="p-6 rounded-2xl border border-brand-primary/20 bg-brand-primary/5">
                <p className="text-text-primary font-body text-sm font-medium mb-2">No obligation</p>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  Your first consultation is completely free. We will tell you exactly how we can help before you commit to anything.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
