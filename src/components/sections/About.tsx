'use client';

import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants, staggerContainer } from '@/hooks/useScrollReveal';
import { personalInfo } from '@/lib/data';

export default function About() {
  const isVisible = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start"
        >
          {/* Bio Text */}
          <div className="col-span-1 md:col-span-7">
            <motion.h2 variants={revealVariants} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Hi, I&apos;m {personalInfo.name.split(' ')[0]}.
            </motion.h2>
            <motion.p variants={revealVariants} className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              {personalInfo.bio}
            </motion.p>
            <motion.blockquote variants={revealVariants} className="text-2xl md:text-3xl font-serif italic text-accent border-l-4 border-accent pl-6 py-2">
              &quot;Good design is obvious. Great design is transparent.&quot;
            </motion.blockquote>
          </div>

          {/* Stats & Visual Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-12">
            {/* Visual placeholder (could be an image) */}
            <motion.div variants={revealVariants} className="w-full h-80 rounded-2xl bg-surface border border-border/50 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-medium tracking-widest uppercase">
                 Portrait Placeholder
               </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={revealVariants} className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">
                  {personalInfo.experienceYears}+
                </span>
                <span className="text-sm text-text-muted uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">
                  {personalInfo.projectsShipped}
                </span>
                <span className="text-sm text-text-muted uppercase tracking-wider">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">
                  {personalInfo.clients}
                </span>
                <span className="text-sm text-text-muted uppercase tracking-wider">Clients</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
