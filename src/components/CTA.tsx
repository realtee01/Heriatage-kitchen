import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section id="reservations" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format,compress&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm">Join Us</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            Reserve Your Experience
          </h3>
          <p className="text-xl text-zinc-300 font-light mb-10 max-w-2xl mx-auto">
            Whether it's an intimate dinner or a grand celebration, we look forward to hosting you at Heritage Kitchens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/reservation"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-8 py-4 transition-colors uppercase tracking-wider w-full sm:w-auto"
            >
              Book a Table
            </Link>
            <Link 
              to="/order"
              className="bg-zinc-900/50 hover:bg-white border border-zinc-700 hover:border-white text-white hover:text-zinc-950 font-bold rounded-lg px-8 py-4 transition-all uppercase tracking-wider w-full sm:w-auto backdrop-blur-sm"
            >
              Order Online
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

