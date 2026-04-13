import { ElementType } from 'react';
import { motion } from 'motion/react';
import { Utensils, Truck, ChefHat, Calendar } from 'lucide-react';
import { restaurantData } from '../data';

const iconMap: Record<string, ElementType> = {
  Utensils,
  Truck,
  ChefHat,
  Calendar
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-900 text-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Our Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurantData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Utensils;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">{service.title}</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
