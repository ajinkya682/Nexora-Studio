import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
];

const services = [
  { label: 'Web Applications', to: '/services#web-apps' },
  { label: 'SaaS Platforms', to: '/services#saas' },
  { label: 'UI/UX Design', to: '/services#design' },
  { label: 'AI Integration', to: '/services#ai' },
];

const socials = [
  { label: 'GitHub', to: 'https://github.com', icon: Github },
  { label: 'Twitter / X', to: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', to: 'https://linkedin.com', icon: Linkedin },
];

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
      {title}
    </h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border mt-auto" id="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="w-9 h-9 bg-brand-primary rounded-lg flex items-center justify-center font-display font-bold text-white">
                N
              </div>
              <span className="font-display font-bold text-lg text-text-primary">
                Nexora <span className="text-text-secondary font-normal">Studio</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm font-body leading-relaxed max-w-xs">
              Building digital products that scale. From concept to working product in weeks.
            </p>
            <Link
              to="/get-started"
              id="footer-cta"
              className="mt-6 inline-flex items-center gap-2 text-sm font-body font-medium text-brand-primary hover:gap-3 transition-all duration-200"
            >
              Start a Project <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Pages */}
          <FooterColumn title="Pages">
            {pages.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-text-secondary text-sm font-body hover:text-text-primary transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            {services.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-text-secondary text-sm font-body hover:text-text-primary transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Social */}
          <FooterColumn title="Connect">
            {socials.map(({ label, to, icon: Icon }) => (
              <li key={label}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-text-secondary text-sm font-body hover:text-text-primary transition-colors duration-200 group"
                >
                  <Icon size={15} className="group-hover:text-brand-primary transition-colors" />
                  {label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs font-body">
            © {new Date().getFullYear()} Nexora Studio. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs font-body">
            Made with care by{' '}
            <span className="text-brand-primary font-medium">Nexora Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
