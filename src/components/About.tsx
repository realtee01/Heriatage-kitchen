import { motion } from 'motion/react';
import { restaurantData } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              A Culinary Sanctuary in <br />
              <span className="italic text-zinc-400">Lekki Phase 1</span>
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              {restaurantData.brand.story}
            </p>
            <img 
              src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=800" 
              alt="Chef cooking" 
              className="rounded-lg shadow-2xl w-full h-64 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-2xl w-full h-80 object-cover mt-12"
            />
            <img 
              src="https://plus.unsplash.com/premium_photo-1742596374443-ff45a088c60a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Plated dish" 
              className="rounded-lg shadow-2xl w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
