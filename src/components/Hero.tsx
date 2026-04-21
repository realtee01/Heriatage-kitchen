import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { restaurantData } from '../data';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=1920&auto=format,compress&fit=crop&fmt=webp")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight">
            The Soul of Lagos, <br />
            <span className="text-amber-500 italic">Elevated.</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Experience authentic Nigerian culinary traditions reimagined for the modern palate in the heart of Lekki.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reservations"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-colors uppercase tracking-wider"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-zinc-500 hover:border-white hover:bg-white/10 rounded-full transition-colors uppercase tracking-wider"
            >
              View Menu <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
