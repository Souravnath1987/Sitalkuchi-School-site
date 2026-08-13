import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero, HeroWelcome } from './components/Hero';
import { About } from './components/About';
import { Classes } from './components/Classes';
import { Teachers } from './components/Teachers';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Noticeboard } from './components/Noticeboard';
import { Toppers } from './components/Toppers';
import { Footer } from './components/Footer';
import { Location } from './components/Location';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-brand-text bg-aesthetic selection:bg-brand-gold/30">
      <Navbar />
      
      <Hero />
      
      <main className="w-full overflow-hidden">
        <HeroWelcome />
        <About />
        <Classes />
        <Teachers />
        <Gallery />
        <Events />
        <Noticeboard />
        <Toppers />
        <Location />
      </main>

      <Footer />
    </div>
  );
}

