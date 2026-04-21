/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Featured = lazy(() => import('./components/Featured').then(m => ({ default: m.Featured })));
const Menu = lazy(() => import('./components/Menu').then(m => ({ default: m.Menu })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Location = lazy(() => import('./components/Location').then(m => ({ default: m.Location })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-amber-500/30">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center bg-zinc-950"><span className="text-amber-500 font-serif">Loading...</span></div>}>
          <About />
          <Featured />
          <Menu />
          <Services />
          <Testimonials />
          <CTA />
          <Location />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
