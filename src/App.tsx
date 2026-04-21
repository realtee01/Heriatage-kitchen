/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect, useState, useRef, ReactNode } from 'react';
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

function DeferredSection({ children, minHeight = "10vh" }: { children: ReactNode, minHeight?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '400px' }); // Load heavily before they scroll to it
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }}>{isVisible && children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-amber-500/30">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-[10vh]" />}>
          <DeferredSection minHeight="80vh"><About /></DeferredSection>
          <DeferredSection minHeight="80vh"><Featured /></DeferredSection>
          <DeferredSection minHeight="100vh"><Menu /></DeferredSection>
          <DeferredSection minHeight="50vh"><Services /></DeferredSection>
          <DeferredSection minHeight="50vh"><Testimonials /></DeferredSection>
          <DeferredSection minHeight="80vh"><CTA /></DeferredSection>
          <DeferredSection minHeight="50vh"><Location /></DeferredSection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
