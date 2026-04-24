import { motion } from 'motion/react';
import { CalendarDays, Clock, Users, Wine, ChefHat, Info } from 'lucide-react';

export default function ReservationPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Reservations</h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              Secure your table at Heritage Kitchens for an unforgettable dining experience in Lekki, Lagos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Reservation Form */}
          <motion.div 
            className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <CalendarDays className="text-amber-500 w-6 h-6" />
              Book Your Table
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-zinc-400 mb-2">Select Date</label>
                  <div className="relative">
                    <input 
                      id="date"
                      type="date" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-zinc-400 mb-2">Select Time</label>
                  <div className="relative">
                    <input 
                      id="time"
                      type="time" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                    />
                    <Clock className="absolute right-3 top-3 text-zinc-500 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-zinc-400 mb-2">Number of Guests</label>
                  <div className="relative">
                    <select 
                      id="guests"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                    <Users className="absolute right-3 top-3 text-zinc-500 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-zinc-400 mb-2">Occasion (Optional)</label>
                  <select 
                    id="occasion"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Contact Details</label>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email Address" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                    <input type="tel" placeholder="Phone Number" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-zinc-400 mb-2">Special Requests</label>
                <textarea 
                  id="notes"
                  rows={3} 
                  placeholder="Any dietary requirements or special requests?"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg px-4 py-4 transition-colors uppercase tracking-wider mt-4">
                Request Reservation
              </button>
            </form>
          </motion.div>

          {/* Premium Information Section */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                <Info className="text-amber-500 w-5 h-5" />
                Dining Policies
              </h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <p><strong className="text-zinc-200">Dress Code:</strong> Smart casual. We politely decline athletic wear, beachwear, and flip-flops in our dining room.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <p><strong className="text-zinc-200">Grace Period:</strong> We hold tables for 15 minutes past the reservation time. Please call if running late.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <p><strong className="text-zinc-200">Large Parties:</strong> For parties of 9 or more, please contact us directly for arrangements and set menu options.</p>
                </li>
              </ul>
            </div>

            <div className="bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format,compress&q=80&w=800&fmt=webp')] bg-cover bg-center p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-zinc-950/80 group-hover:bg-zinc-950/70 transition-colors" />
              <div className="relative z-10">
                <Wine className="text-amber-500 w-8 h-8 mb-4" />
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Private Dining</h3>
                <p className="text-zinc-300 mb-6 text-sm">
                  Elevate your celebrations with our exclusive private dining room, featuring a dedicated service team and customizable menus.
                </p>
                <a href="#contact" className="inline-block border-b border-amber-500 text-amber-500 uppercase tracking-wider text-xs font-bold pb-1 hover:text-white hover:border-white transition-colors">
                  Inquire Now
                </a>
              </div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex items-start gap-4">
               <ChefHat className="text-amber-500 w-8 h-8 shrink-0" />
               <div>
                 <h3 className="text-lg font-serif font-bold text-white mb-1">Chef's Table Experience</h3>
                 <p className="text-zinc-400 text-sm">
                   Book a seat at our exclusive Chef's Table for an immersive 7-course tasting menu curated by our Head Chef. Available Thursdays to Saturdays.
                 </p>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
