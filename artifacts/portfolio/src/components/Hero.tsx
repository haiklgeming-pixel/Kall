import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="px-3 py-1 text-xs font-medium bg-secondary/15 text-secondary-foreground border border-secondary/30 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Siswa SMA KELAS 12 — Live Update
              </span>
              <span className="text-sm font-medium text-muted-foreground">·</span>
              <span className="text-sm font-medium text-muted-foreground italic">Open for Collaboration & Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground"
            >
              Halo! Saya <br />
              <span className="relative inline-block">
                Haikal Joanelman
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-medium"
            >
              Siswa SMA 12 Negeri Jakarta, yang memiliki minat dalam pengembangan web
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
                Hubungi Saya
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]">
              {/* Decorative offset frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border-[3px] border-primary/50 rounded-[1rem]" />

              {/* Photo container */}
              <div className="relative w-full h-full bg-muted border-[3px] border-border rounded-[1rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
                <img
                  src="/Student_member_4_portrait_bb62bd41.png"
                  alt="Foto Haikal Joanelman"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Small decorative tag */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -left-4 bg-background border border-border rounded-sm px-3 py-1.5 shadow-sm text-xs font-mono text-muted-foreground"
              >
                @haikal.joanelman
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative background dot pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 right-[5%] w-48 h-48 bg-dots rounded-full -z-10 mix-blend-multiply opacity-30 blur-[2px]"
      />
    </section>
  );
}
