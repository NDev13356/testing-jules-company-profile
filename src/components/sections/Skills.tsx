'use client';

import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants, staggerContainer } from '@/hooks/useScrollReveal';
import { skills } from '@/lib/data';

export default function Skills() {
  const isVisible = useScrollReveal();

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const categoryColors = {
    'Design Tools': 'bg-accent',
    'Web': 'bg-accent-blue',
    'Motion': 'bg-accent-coral',
    'Strategy': 'bg-white',
  };

  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <motion.h2 variants={revealVariants} className="text-5xl md:text-7xl font-display font-bold">
            Toolkit
          </motion.h2>
          <motion.p variants={revealVariants} className="text-xl text-text-muted max-w-xl text-right">
            The software and strategies I use to turn concepts into reality.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {categories.map((category) => (
            <motion.div key={category} variants={revealVariants} className="flex flex-col gap-6">
              <h3 className="text-2xl font-serif text-text-primary border-b border-border/50 pb-4 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`} />
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === category).map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-surface border border-border/50 hover:border-accent/50 hover:text-accent transition-colors duration-300 backdrop-blur-sm cursor-none"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
