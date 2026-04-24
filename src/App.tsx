/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Featured = lazy(() => import('./components/Featured').then(m => ({ default: m.Featured })));
const Menu = lazy(() => import('./components/Menu').then(m => ({ default: m.Menu })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Location = lazy(() => import('./components/Location').then(m => ({ default: m.Location })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

const ReservationPage = lazy(() => import('./pages/ReservationPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-screen bg-zinc-950" />}>
        <About />
        <Featured />
        <Menu />
        <Services />
        <Testimonials />
        <CTA />
        <Location />
      </Suspense>
    </>
  );
}

export default function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 font-sans selection:bg-amber-500/30">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen bg-zinc-950 flex items-center justify-center"><span className="text-amber-500 font-serif text-xl animate-pulse">Loading Heritage Kitchens...</span></div>}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

