'use client';

import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants, staggerContainer } from '@/hooks/useScrollReveal';
import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const isVisible = useScrollReveal();
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const remainingProjects = projects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="work" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mb-16 md:mb-24 flex items-end justify-between"
        >
          <motion.h2 variants={revealVariants} className="text-5xl md:text-7xl font-display font-bold flex items-center gap-4">
            Selected Work
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
              className="text-accent text-3xl md:text-5xl bg-surface px-4 py-2 rounded-full border border-border/50"
            >
              {projects.length}
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mb-12 md:mb-24 group relative rounded-3xl overflow-hidden bg-surface border border-border/50 block w-full aspect-[4/3] md:aspect-[21/9] shadow-2xl transition-transform duration-500 hover:-translate-y-2"
        >
           <Link href={featuredProject.link} target="_blank" className="absolute inset-0 z-20">
             <span className="sr-only">View {featuredProject.title}</span>
           </Link>

           <div className="absolute inset-0 z-0">
             <Image
               src={featuredProject.imageUrl}
               alt={featuredProject.title}
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-background/40 md:bg-gradient-to-r md:from-background/90 md:via-background/50 md:to-transparent" />
           </div>

           <div className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-end md:justify-center w-full md:w-1/2">
             <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4">{featuredProject.year}</span>
             <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
               {featuredProject.title}
               <ArrowUpRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
             </h3>
             <p className="text-lg text-text-muted mb-8 max-w-md line-clamp-3">
               {featuredProject.description}
             </p>
             <div className="flex flex-wrap gap-3">
               {featuredProject.tags.map(tag => (
                 <span key={tag} className="px-4 py-2 rounded-full text-xs font-medium bg-background/50 border border-border/50 backdrop-blur-md text-text-primary">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
        </motion.div>

        {/* Grid Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {remainingProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={revealVariants}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-border/50 flex flex-col transition-transform duration-500 hover:-translate-y-2 shadow-xl hover:shadow-accent/5"
            >
              <Link href={project.link} target="_blank" className="absolute inset-0 z-20">
                <span className="sr-only">View {project.title}</span>
              </Link>

              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-display font-bold group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  <span className="text-text-muted text-sm">{project.year}</span>
                </div>

                <p className="text-text-muted text-sm mb-6 flex-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-text-muted px-3 py-1 bg-background rounded-full border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
