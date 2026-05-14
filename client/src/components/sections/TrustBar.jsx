import { motion } from 'framer-motion';

const brands = ['company one', 'Mouse tail', 'Nathan .S', 'Studio'];

export default function TrustBar() {
  return (
    <div className="py-12 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <span className="text-sm font-body text-text-secondary whitespace-nowrap">
            Trusted by <span className="text-brand-primary font-bold">10+</span> companies
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-30 grayscale">
            {brands.map((brand) => (
              <span key={brand} className="font-display font-extrabold text-lg tracking-tighter uppercase whitespace-nowrap">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
