import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa6';

const columns = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Who We Are', to: '/who-we-are' },
      { label: 'Services', to: '/services' },
      { label: 'Projects', to: '/projects' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Social Media',
    links: [
      { label: 'Twitter / X', to: 'https://twitter.com', icon: FaXTwitter },
      { label: 'Facebook', to: 'https://facebook.com', icon: FaFacebookF },
      { label: 'LinkedIn', to: 'https://linkedin.com', icon: FaLinkedinIn },
      { label: 'Dribbble', to: 'https://dribbble.com', icon: FaDribbble },
      { label: 'Behance', to: 'https://behance.com', icon: FaBehance },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Careers', to: '/careers' },
      { label: 'Help Center', to: '/help' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-primary pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Final CTA Section - GOT A PROJECT? */}
        <div className="text-center mb-40 group">
          <Link to="/contact" className="inline-block relative">
            <h2 className="font-display font-extrabold text-[12vw] lg:text-[9vw] text-brand-secondary leading-[0.85] tracking-tighter uppercase select-none">
              Got a project?
            </h2>
            <div className="flex items-center justify-center gap-4 text-brand-primary mt-4 group-hover:gap-12 transition-all duration-700">
              <span className="font-display font-extrabold text-[12vw] lg:text-[9vw] leading-[0.85] tracking-tighter uppercase">
                Let's talk
              </span>
              <ArrowUpRight className="w-[10vw] h-[10vw] lg:w-[8vw] lg:h-[8vw] stroke-[3]" />
            </div>
          </Link>
          
          {/* Subtle Map Thumbnail */}
          <div className="mt-20 max-w-sm mx-auto opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000">
             <div className="aspect-[2/1] rounded-3xl overflow-hidden border border-border shadow-soft">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" alt="Studio Location" className="w-full h-full object-cover" />
             </div>
             <p className="mt-4 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brand-muted">Studio Based in India — Global Operations</p>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-16 border-t border-border pt-24 pb-24">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="font-display font-extrabold text-2xl tracking-tighter text-brand-secondary">
               NEXORA STUDIO
            </Link>
            <p className="mt-6 text-brand-muted text-sm leading-relaxed max-w-xs">
              A high-end creative studio building high-performance digital products for the next generation of startups.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-secondary mb-8">{col.title}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('http') ? (
                      <a href={link.to} target="_blank" rel="noreferrer" className="text-brand-muted text-sm hover:text-brand-primary transition-colors flex items-center gap-2">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className="text-brand-muted text-sm hover:text-brand-primary transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive Typographic Footer Logo */}
        <div className="pt-20 border-t border-border/50 text-center">
          <div className="font-display font-black text-[15vw] leading-none text-brand-secondary tracking-tighter select-none opacity-[0.03] lg:opacity-[0.05]">
            NEXORASTUDIO
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono font-bold text-brand-muted uppercase tracking-[0.4em]">
            <p>© {new Date().getFullYear()} NEXORA STUDIO — ALL RIGHTS RESERVED.</p>
            <p>DESIGNED & BUILT IN-HOUSE BY NEXORA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
