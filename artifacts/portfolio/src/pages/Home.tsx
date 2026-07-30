import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-foreground">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
      </main>

      <Contact />
    </div>
  );
}
