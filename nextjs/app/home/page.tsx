'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ComingSoonBadge from '../components/ComingSoonBadge';
import CountdownTimer from '../components/CountdownTimer';
import About from '../components/About';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-custom min-h-screen">
      <Navigation />
      <Hero />
      <ComingSoonBadge />
      <CountdownTimer />
      <About />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
