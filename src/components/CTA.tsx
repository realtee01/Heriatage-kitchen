import { motion } from 'motion/react';

export function CTA() {
  return (
    <section id="reservations" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000")',
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
          
          <form className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 max-w-3xl mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Date</label>
                <input type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Time</label>
                <input type="time" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Guests</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                  {[1,2,3,4,5,6,7,8,"9+"].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
            </div>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-4 py-4 transition-colors uppercase tracking-wider">
              Confirm Reservation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
