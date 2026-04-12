import { motion } from 'motion/react';
import { restaurantData } from '../data';

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-zinc-950 text-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm">Discover</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Our Menu</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {restaurantData.menu.categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4 className="text-2xl font-serif font-bold mb-8 text-amber-500 border-b border-zinc-800 pb-4">
                {category.name}
              </h4>
              <div className="space-y-8">
                {category.items.map(item => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="text-lg font-medium text-zinc-100 group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h5>
                      <div className="flex-grow border-b border-dotted border-zinc-700 mx-4 relative top-[-6px]"></div>
                      <span className="text-amber-500 font-medium whitespace-nowrap">
                        ₦{item.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed pr-12">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white rounded-full transition-colors uppercase tracking-wider text-sm font-medium">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
