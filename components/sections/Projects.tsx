'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Construction Material Platform',
      description:
        'Developed a platform for construction material dealing including cement, steel, and machinery listings with responsive UI and authentication.',
      category: 'Full Stack',
      image: '🏗️',
      tags: ['React.js', 'CSS', 'Firebase', 'Firebase Auth', 'GitHub', 'VS Code'],
      links: { github: '#', live: '#' },
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description:
        'Built a scalable SaaS dashboard with modern UI, real-time Firebase integration, and optimized performance using latest frontend tools.',
      category: 'Dashboard',
      image: '📊',
      tags: ['React.js', 'Next.js', 'Vite', 'CSS', 'Firebase', 'GitHub'],
      links: { github: '#', live: '#' },
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      description:
        'Role-based admin dashboard with analytics, CRUD operations, and real-time data synchronization for business operations.',
      category: 'Dashboard',
      image: '🛠️',
      tags: ['React.js', 'Node.js', 'Firebase', 'Charts', 'API'],
      links: { github: '#', live: '#' },
    },
    {
      id: 4,
      title: 'User Dashboard',
      description:
        'Responsive user dashboard with Firebase Realtime Database integration and clean UI for real-time data handling.',
      category: 'Dashboard',
      image: '👤',
      tags: ['React.js', 'Firebase', 'CSS', 'Realtime DB'],
      links: { github: '#', live: '#' },
    },
    {
      id: 5,
      title: 'Real Estate Investment Dashboard',
      description:
        'Dashboard focused on premium real estate opportunities with features like higher returns tracking, faster funding insights, and asset-backed security.',
      category: 'Dashboard',
      image: '🏢',
      tags: ['React.js', 'Next.js', 'UI/UX', 'Finance'],
      links: { github: '#', live: '#' },
    },
    {
      id: 6,
      title: 'Crypto Portfolio Dashboard (FirstHash UI)',
      description:
        'Modern financial dashboard with portfolio tracking, revenue statistics, assets balance, and interactive charts based on real-time data.',
      category: 'Dashboard',
      image: '💹',
      tags: ['React.js', 'Charts', 'Dashboard UI', 'Analytics'],
      links: { github: '#', live: '#' },
    },
  ];

  const categories = [
    'All',
    ...Array.from(new Set(projects.map(p => p.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

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
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <motion.div
        className="absolute -left-40 -bottom-40 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my real-world dashboards and web applications
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass-effect bg-indigo-600/40 border-indigo-400 text-indigo-200'
                  : 'glass-effect border-white/10 text-muted-foreground hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={selectedCategory}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="group">
                <GlassCard className="h-full flex flex-col group-hover:bg-white/10" hover={false}>
                  <div className="w-full h-40 glass-effect rounded-lg flex items-center justify-center mb-4 text-5xl">
                    {project.image}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 glass-effect rounded border border-cyan-400/30 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <motion.a
                      href="#"
                      className="flex items-center gap-2 text-cyan-400"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex items-center gap-2 text-green-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}