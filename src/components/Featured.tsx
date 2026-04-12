import { motion } from 'motion/react';
import { restaurantData } from '../data';

export function Featured() {
  return (
    <section className="py-24 bg-zinc-900 text-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm">Chef's Selection</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Signature Dishes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurantData.featured.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {dish.tags.map(tag => (
                    <span key={tag} className="bg-amber-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-serif font-bold group-hover:text-amber-500 transition-colors">{dish.name}</h4>
                <span className="text-amber-500 font-medium text-lg">₦{dish.price.toLocaleString()}</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {dish.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
