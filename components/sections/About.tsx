'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { AnimatedCounter } from '../AnimatedCounter';
import { Code2, Target, Zap } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    {
      icon: Code2,
      label: 'Projects Built',
      value: 25,
      suffix: '+',
    },
    {
      icon: Target,
      label: 'Years Experience',
      value: 2,
      suffix: '+',
    },
    {
      icon: Zap,
      label: 'Technologies Used',
      value: 12,
      suffix: '+',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      
      {/* Background blur */}
      <motion.div
        className="absolute -left-40 top-0 w-80 h-80 bg-green-600/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frontend-focused Full Stack Developer building scalable and user-friendly applications
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">

              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Frontend-focused Full Stack Developer with 2+ years of hands-on experience 
                in building scalable, responsive, and user-friendly web applications. My core strength 
                lies in crafting modern UI using React.js, Next.js, Redux Toolkit, and Tailwind CSS.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I also have backend exposure with Laravel REST APIs, GraphQL, and MySQL, along with 
                experience in API integration and authentication systems. I have worked on real-world 
                projects including user dashboards using React.js and Firebase.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I am passionate about clean code, performance optimization, and building maintainable 
                applications that deliver great user experiences.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <GlassCard animated={false}>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Focus</p>
                    <p className="text-white font-semibold">Frontend + Full Stack</p>
                  </div>
                </GlassCard>

                <GlassCard animated={false}>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Work Style</p>
                    <p className="text-white font-semibold">Clean & Scalable</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <GlassCard className="h-full hover:bg-white/10">
                    <div className="flex items-center gap-4">
                      <div className="glass-effect rounded-xl p-3">
                        <Icon className="w-8 h-8 text-cyan-400 group-hover:text-green-400 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">
                          {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-white">
                          <AnimatedCounter
                            value={stat.value}
                            suffix={stat.suffix || ''}
                          />
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Core Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'React.js',
              'Next.js',
              'Redux Toolkit',
              'Tailwind CSS',
              'Node.js',
              'MySQL',
              'GraphQL',
              'Firebase',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <GlassCard className="text-center h-full group-hover:bg-indigo-600/20">
                  <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {skill}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}