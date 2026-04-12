/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Featured } from './components/Featured';
import { Menu } from './components/Menu';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-amber-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Featured />
        <Menu />
        <Services />
        <Testimonials />
        <CTA />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
