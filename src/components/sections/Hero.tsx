'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const nameWords = personalInfo.name.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl flex flex-col items-start z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/50 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-sm font-medium text-text-primary">Available for work</span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-none tracking-tighter mb-6 flex flex-wrap gap-x-4 md:gap-x-8"
        >
          {nameWords.map((word, i) => (
            <motion.span key={i} variants={wordAnimation} className="inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordAnimation} className="text-accent inline-block">
            .
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-2xl lg:text-3xl text-text-muted font-serif max-w-3xl leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
