'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { TypingText } from '../TypingText';
import { Button } from '../ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Hey, I'm </span>
            <span className="gradient-text">Deepakshi</span>
          </motion.h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            I'm a{' '}
            <span className="gradient-text font-semibold">
              <TypingText
                texts={[
                  'Full Stack Developer',
                  'Frontend Developer',
                  'Problem Solver',
                  'Frontend Web Developer',
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                delay={2000}
              />
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Crafting innovative solutions with cutting-edge technologies. Specialized in
            building scalable full-stack applications powered by AI and modern frameworks.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/5"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mb-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect rounded-full p-3 hover:bg-indigo-600/30 transition-colors"
          >
            <Github className="w-6 h-6 text-cyan-400" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect rounded-full p-3 hover:bg-indigo-600/30 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-cyan-400" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect rounded-full p-3 hover:bg-indigo-600/30 transition-colors"
          >
            <Mail className="w-6 h-6 text-cyan-400" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="glass-effect rounded-full p-3">
            <ArrowDown className="w-6 h-6 text-green-400" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
