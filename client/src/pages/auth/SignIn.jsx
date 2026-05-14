import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { scaleIn, fadeUp, staggerContainer } from '../../animations/variants';
import { Eye, EyeOff, Mail, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

const inputClass =
  'w-full pl-11 pr-4 py-3.5 bg-bg-secondary border border-border rounded-xl text-text-primary font-body text-sm placeholder-text-secondary/40 focus:outline-none focus:border-brand-primary transition-colors duration-200';

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError('');
    try {
      // Replace with real API call in Week 3:
      // const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      //   method: 'POST', credentials: 'include',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      await new Promise((r) => setTimeout(r, 1200));
      navigate('/dashboard');
    } catch (err) {
      setApiError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-text-secondary text-sm font-body hover:text-text-primary transition-colors mb-8">
          <ArrowLeft size={15} /> Back to home
        </Link>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="p-8 rounded-2xl bg-bg-surface border border-border shadow-card"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white text-sm">N</div>
            <span className="font-display font-bold text-text-primary">Nexora <span className="text-text-secondary font-normal">Studio</span></span>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 variants={fadeUp} className="font-display font-bold text-2xl text-text-primary mb-1">
              Welcome back
            </motion.h1>
            <motion.p variants={fadeUp} className="text-text-secondary font-body text-sm mb-8">
              Sign in to your Nexora Studio account
            </motion.p>

            {apiError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-error/10 border border-error/20 text-error text-sm font-body mb-6"
              >
                <AlertCircle size={16} className="flex-shrink-0" />
                {apiError}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Email */}
              <motion.div variants={fadeUp}>
                <label htmlFor="signin-email" className="block text-xs font-body font-medium text-text-secondary mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    id="signin-email"
                    type="email"
                    placeholder="you@company.com"
                    className={inputClass}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                    })}
                  />
                </div>
                {errors.email && <p className="mt-1.5 text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.email.message}</p>}
              </motion.div>

              {/* Password */}
              <motion.div variants={fadeUp}>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="signin-password" className="text-xs font-body font-medium text-text-secondary uppercase tracking-wide">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-xs font-body text-brand-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    id="signin-password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Your password"
                    className={inputClass}
                    {...register('password', { required: 'Password is required' })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-xs text-error font-body flex items-center gap-1"><AlertCircle size={11} />{errors.password.message}</p>}
              </motion.div>

              {/* Remember me */}
              <motion.div variants={fadeUp} className="flex items-center gap-2.5">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 rounded border-border bg-bg-secondary accent-brand-primary cursor-pointer"
                  {...register('rememberMe')}
                />
                <label htmlFor="remember-me" className="text-sm font-body text-text-secondary cursor-pointer">
                  Remember me for 30 days
                </label>
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp}>
                <button
                  id="signin-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-brand-primary text-white font-body font-semibold rounded-xl hover:bg-opacity-90 hover:shadow-brand hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in...</>
                  ) : 'Sign In'}
                </button>
              </motion.div>
            </form>

            <motion.p variants={fadeUp} className="mt-6 text-center text-sm font-body text-text-secondary">
              Don't have an account?{' '}
              <Link to="/get-started" className="text-brand-primary font-medium hover:underline">
                Get started free
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
