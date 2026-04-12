import { motion } from 'motion/react';

export function Location() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Our Location</h3>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Located in the heart of Lekki Phase 1, offering a serene escape from the bustling city.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700"
        >
          <iframe
            title="Heritage Kitchens Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=6.4474,3.4723&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
