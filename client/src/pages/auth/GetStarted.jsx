import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { scaleIn, fadeUp, staggerContainer } from '../../animations/variants';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

const inputClass =
  'w-full pl-11 pr-4 py-3.5 bg-bg-secondary border border-border rounded-xl text-text-primary font-body text-sm placeholder-text-secondary/40 focus:outline-none focus:border-brand-primary transition-colors duration-200';

const perks = [
  'Dedicated project dashboard',
  'Real-time messaging with the team',
  'File sharing & invoice tracking',
  '30 days free post-launch support',
];

export default function GetStarted() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError('');
    try {
      // Replace with real API call in Week 3:
      // const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      //   method: 'POST', credentials: 'include',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: data.name, email: data.email, password: data.password }),
      // });
      await new Promise((r) => setTimeout(r, 1500));
      navigate('/dashboard');
    } catch (err) {
      setApiError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-secondary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-5xl">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-text-secondary text-sm font-body hover:text-text-primary transition-colors mb-8">
          <ArrowLeft size={15} /> Back to home
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — perks panel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white">N</div>
                <span className="font-display font-bold text-xl text-text-primary">Nexora <span className="text-text-secondary font-normal">Studio</span></span>
              </div>
              <h2 className="font-display font-bold text-4xl text-text-primary mb-4">
                Your project,<br />our priority.
              </h2>
              <p className="text-text-secondary font-body text-base leading-relaxed">
                Create an account and get access to your own client portal where you can track every step of your project.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4">
              {perks.map((perk) => (
                <motion.div key={perk} variants={fadeUp} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-success" />
                  </div>
                  <span className="text-text-secondary font-body text-sm">{perk}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative card */}
            <motion.div variants={fadeUp} className="mt-12 p-5 rounded-2xl glass border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-display font-bold text-sm">A</div>
                <div>
                  <p className="text-text-primary font-body text-sm font-medium">Ajinkya Saivar</p>
                  <p className="text-text-secondary font-mono text-xs">Founder, Nexora Studio</p>
                </div>
              </div>
              <p className="text-text-secondary font-body text-sm leading-relaxed italic">
                "We respond to every new client within hours. You will hear from me personally."
              </p>
            </motion.div>
          </motion.div>

          {/* Right — registration form */}
          <motion.div variants={scaleIn} initial="hidden" animate="visible">
            <div className="p-8 rounded-2xl bg-bg-surface border border-border shadow-card">
              <h1 className="font-display font-bold text-2xl text-text-primary mb-1">Create your account</h1>
              <p className="text-text-secondary font-body text-sm mb-7">
                Already have one?{' '}
                <Link to="/sign-in" className="text-brand-primary font-medium hover:underline">Sign in</Link>
              </p>

              {apiError && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-error/10 border border-error/20 text-error text-sm font-body mb-5"
                >
                  <AlertCircle size={16} className="flex-shrink-0" /> {apiError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Full name */}
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-body font-medium text-text-secondary mb-2 uppercase tracking-wide">Full Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input id="reg-name" type="text" placeholder="Your full name" className={inputClass}
                      {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name too short' } })} />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="reg-email" className="block text-xs font-body font-medium text-text-secondary mb-2 uppercase tracking-wide">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input id="reg-email" type="email" placeholder="you@company.com" className={inputClass}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                      })} />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="reg-password" className="block text-xs font-body font-medium text-text-secondary mb-2 uppercase tracking-wide">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input id="reg-password" type={showPass ? 'text' : 'password'} placeholder="Min 8 characters" className={inputClass}
                      {...register('password', {
                        required: 'Password is required',
                        minLength: { value: 8, message: 'At least 8 characters' },
                      })} />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.password.message}</p>}
                </div>

                {/* Confirm password */}
                <div>
                  <label htmlFor="reg-confirm" className="block text-xs font-body font-medium text-text-secondary mb-2 uppercase tracking-wide">Confirm Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input id="reg-confirm" type={showConfirm ? 'text' : 'password'} placeholder="Re-enter password" className={inputClass}
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (v) => v === password || 'Passwords do not match',
                      })} />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors">
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.confirmPassword.message}</p>}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input id="terms" type="checkbox" className="w-4 h-4 mt-0.5 rounded border-border bg-bg-secondary accent-brand-primary cursor-pointer"
                    {...register('terms', { required: 'You must accept the terms' })} />
                  <label htmlFor="terms" className="text-xs font-body text-text-secondary cursor-pointer leading-relaxed">
                    I agree to Nexora Studio's{' '}
                    <span className="text-brand-primary hover:underline cursor-pointer">Terms of Service</span>
                    {' '}and{' '}
                    <span className="text-brand-primary hover:underline cursor-pointer">Privacy Policy</span>
                  </label>
                </div>
                {errors.terms && <p className="text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.terms.message}</p>}

                {/* Submit */}
                <button
                  id="register-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 mt-2 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Creating account...</>
                  ) : 'Create Account'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
