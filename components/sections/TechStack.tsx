'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';

interface Tech {
  name: string;
  category: string;
  color: string;
  icon: string;
}

export function TechStack() {
  const technologies: Tech[] = [
    // Frontend
    { name: 'React.js', category: 'Frontend', color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Next.js', category: 'Frontend', color: 'from-gray-300 to-gray-600', icon: '▲' },
    { name: 'Vite', category: 'Frontend', color: 'from-purple-400 to-yellow-500', icon: '⚡' },
    { name: 'Redux Toolkit', category: 'Frontend', color: 'from-purple-400 to-indigo-500', icon: '🧠' },
    { name: 'TypeScript', category: 'Frontend', color: 'from-blue-400 to-purple-500', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Frontend', color: 'from-cyan-400 to-blue-500', icon: '🎨' },
    { name: 'HTML5', category: 'Frontend', color: 'from-orange-400 to-red-500', icon: '🌐' },
    { name: 'CSS3', category: 'Frontend', color: 'from-blue-400 to-indigo-500', icon: '🎯' },
    { name: 'Ant Design', category: 'Frontend', color: 'from-blue-400 to-purple-500', icon: '🧩' },

    // Backend
    { name: 'Laravel (REST APIs)', category: 'Backend', color: 'from-red-400 to-pink-500', icon: '🛠️' },
    { name: 'Node.js', category: 'Backend', color: 'from-green-400 to-emerald-500', icon: '🟢' },
    { name: 'GraphQL', category: 'Backend', color: 'from-pink-400 to-purple-500', icon: '🔗' },
    { name: 'API Integration', category: 'Backend', color: 'from-indigo-400 to-blue-500', icon: '🔌' },
    { name: 'Swagger', category: 'Backend', color: 'from-green-400 to-cyan-400', icon: '📄' },

    // Database
    { name: 'Firebase', category: 'Database', color: 'from-orange-400 to-yellow-500', icon: '🔥' },
    { name: 'MySQL', category: 'Database', color: 'from-blue-400 to-cyan-500', icon: '🐬' },

    // Auth
    { name: 'Firebase Auth', category: 'Authentication', color: 'from-yellow-400 to-orange-500', icon: '🔐' },
    { name: 'RBAC', category: 'Authentication', color: 'from-purple-400 to-indigo-500', icon: '👥' },

    // Tools
    { name: 'Git', category: 'Tools', color: 'from-red-400 to-orange-500', icon: '📚' },
    { name: 'GitHub', category: 'Tools', color: 'from-gray-400 to-gray-600', icon: '🐙' },
    { name: 'Postman', category: 'Tools', color: 'from-orange-400 to-red-500', icon: '📮' },
    { name: 'VS Code', category: 'Tools', color: 'from-blue-400 to-indigo-500', icon: '💻' },
  ];

  const categories = Array.from(new Set(technologies.map(t => t.category)));

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
      <motion.div
        className="absolute -right-40 bottom-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0] }}
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
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build modern applications
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-indigo-400">
              {category}
            </h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies
                .filter(t => t.category === category)
                .map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <GlassCard className="h-full flex flex-col items-center justify-center text-center group-hover:bg-white/10">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {tech.name}
                      </p>
                      <div
                        className={`h-0.5 w-0 group-hover:w-6 bg-gradient-to-r ${tech.color} mt-2 transition-all duration-300`}
                      />
                    </GlassCard>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          className="mt-16 p-8 glass-effect rounded-2xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground">
            Focused on building scalable dashboards, clean UI, and efficient API-driven systems
          </p>
        </motion.div>
      </div>
    </section>
  );
}