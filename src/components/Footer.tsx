import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-sm leading-relaxed mb-6">
              The Soul of Lagos, Elevated. Authentic Nigerian flavors crafted with passion and served in a premium setting.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Visit our Instagram" rel="noopener noreferrer" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Visit our Twitter" rel="noopener noreferrer" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Visit our Facebook" rel="noopener noreferrer" target="_blank" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm">14 Admiralty Way,<br />Lekki Phase 1, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">+234 (0) 800 HERITAGE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm">reservations@heritagekitchens.ng</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Fri - Sat</span>
                <span className="text-white">11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Sunday</span>
                <span className="text-white">12:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive updates on special menus and exclusive events.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="Your email address" 
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                required
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg px-4 py-3 text-sm transition-colors uppercase tracking-wider">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Heritage Kitchens. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
