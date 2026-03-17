'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rohit Sharma',
      role: 'Project Manager',
      company: 'Altrange Private Limited',
      content:
        'Deepakshi built a highly efficient admin dashboard for our operations. The real-time data handling and clean UI significantly improved our team workflow.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Neha Verma',
      role: 'Team Lead',
      company: 'Adicode Technologies',
      content:
        'She has strong expertise in React.js and Redux Toolkit. The dashboard she developed was scalable, fast, and very well-structured.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      id: 3,
      name: 'Amit Singh',
      role: 'Startup Founder',
      company: 'SaaS Product Client',
      content:
        'Deepakshi delivered a responsive and modern user dashboard with seamless API integration. Her focus on performance and UI is impressive.',
      rating: 5,
      avatar: '👨‍🚀',
    },
    {
      id: 4,
      name: 'Priya Mehta',
      role: 'Product Manager',
      company: 'Freelance Client',
      content:
        'She designed beautiful and conversion-focused landing pages. The performance and responsiveness were exactly what we needed.',
      rating: 5,
      avatar: '👩‍🎨',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      {/* Background blur */}
      <motion.div
        className="absolute -left-40 bottom-0 w-80 h-80 bg-green-600/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What People Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and colleagues I have worked with
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <GlassCard className="h-full flex flex-col group-hover:bg-white/10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to work together and create something amazing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass-effect rounded-full text-white font-semibold hover:bg-indigo-600/30 transition-colors border border-indigo-400/50"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}