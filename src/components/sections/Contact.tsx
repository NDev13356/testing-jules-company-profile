'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, revealVariants, staggerContainer } from '@/hooks/useScrollReveal';
import { personalInfo } from '@/lib/data';
import { useForm, SubmitHandler } from "react-hook-form";
import { ArrowUpRight } from 'lucide-react';

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const isVisible = useScrollReveal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left Side: Info */}
          <div>
            <motion.h2 variants={revealVariants} className="text-5xl md:text-7xl font-display font-bold mb-8">
              Let&apos;s create something <span className="text-accent italic">extraordinary</span> together.
            </motion.h2>

            <motion.p variants={revealVariants} className="text-xl text-text-muted mb-12 max-w-md leading-relaxed">
              I&apos;m always open to discussing product design work, partnerships, or just chatting about design over a virtual coffee.
            </motion.p>

            <motion.div variants={staggerContainer} className="flex flex-col gap-8">
              <motion.div variants={revealVariants}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-2">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-2xl font-serif text-text-primary hover:text-accent transition-colors duration-300">
                  {personalInfo.email}
                </a>
              </motion.div>

              <motion.div variants={revealVariants}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">Socials</h4>
                <div className="flex flex-wrap gap-4">
                  {personalInfo.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full border border-border/50 bg-surface hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-text-primary hover:text-accent"
                    >
                      {link.platform}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div variants={revealVariants} className="bg-surface border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Message Sent!</h3>
                <p className="text-text-muted mb-8">Thank you for reaching out. I&apos;ll get back to you within 48 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-background border border-border/50 rounded-full font-medium hover:text-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full bg-background border ${errors.name ? 'border-accent-coral' : 'border-border/50'} rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-accent-coral text-xs mt-1 block">{errors.name.message}</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      }
                    })}
                    className={`w-full bg-background border ${errors.email ? 'border-accent-coral' : 'border-border/50'} rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-accent-coral text-xs mt-1 block">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className={`w-full bg-background border ${errors.message ? 'border-accent-coral' : 'border-border/50'} rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <span className="text-accent-coral text-xs mt-1 block">{errors.message.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-background font-bold py-4 rounded-xl mt-4 hover:bg-white transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
