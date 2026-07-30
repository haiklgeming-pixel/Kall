import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PenTool } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center gap-3 inline-flex"
          >
            <span className="px-3 py-1 text-xs font-medium bg-secondary/15 text-secondary-foreground border border-secondary/30 rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Siswa SMA Kelas 12
            </span>
            <span className="text-sm font-medium text-muted-foreground">·</span>
            <span className="text-sm font-medium text-muted-foreground italic">Open for Collaboration & Projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6 text-foreground"
          >
            Halo! Aku <br/>
            <span className="relative inline-block">
              Aryan Pratama
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-medium"
          >
            Siswa MIPA yang suka ngoding, desain grafis, dan nulis cerita pendek. 
            Lagi siapin diri buat dunia kuliah dan kolaborasi seru.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a 
              href="#projects"
              className="px-6 py-3 bg-foreground text-background font-medium rounded-sm border-drawn hover:bg-foreground/90 transition-colors flex items-center gap-2"
            >
              Lihat Proyekku
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 bg-transparent text-foreground font-medium rounded-sm border-drawn-2 hover:bg-black/5 transition-colors"
            >
              Hubungi Aku
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-dots rounded-full -z-10 mix-blend-multiply opacity-50 blur-[2px]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-1/4 -right-10 -z-10 text-primary"
      >
        <PenTool className="w-96 h-96 transform -rotate-12" />
      </motion.div>
    </section>
  );
}
