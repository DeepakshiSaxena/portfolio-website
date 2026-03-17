'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Frontend Web Developer',
      company: 'Altrange Private Limited',
      period: '2023 - 2025',
      description:
        'Worked on building a role-based admin dashboard for business operations with focus on scalability and real-time data.',
      achievements: [
        'Built a role-based admin dashboard using React.js, Node.js, and Firebase',
        'Implemented CRUD operations, analytics charts, and real-time data sync',
        'Improved internal workflow and data management efficiency',
      ],
      technologies: ['React.js', 'Node.js', 'Firebase', 'Charts', 'REST APIs'],
    },
    {
      id: 2,
      title: 'Frontend Developement',
      company: 'Adicode Technologies',
      period: '2025 - 2026',
      description:
        'Developed scalable SaaS/web dashboards with modern frontend technologies and API integrations.',
      achievements: [
        'Built scalable dashboard using React.js and Redux Toolkit',
        'Integrated REST and GraphQL APIs',
        'Implemented authentication and role-based access control',
        'Optimized performance and UI responsiveness',
      ],
      technologies: ['React.js', 'Redux Toolkit', 'GraphQL', 'REST APIs', 'Authentication'],
    },
    {
      id: 3,
      title: 'Full Stack Developer (Projects)',
      company: 'Personal & Freelance Projects',
      period: '2026 - Present',
      description:
        'Worked on multiple dashboards,landing pages, and web applications with focus on UI/UX and performance.',
      achievements: [
        'Built responsive user dashboard using React.js and Firebase',
        'Integrated Firebase Realtime Database for real-time data handling',
        'Developed multiple landing pages optimized for SEO and performance',
        'Designed modern portfolio, SaaS, and business websites',
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Ant Design', 'Node.js', 'MySQL' ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <motion.div
        className="absolute -right-40 top-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
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
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and projects
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants} className="mb-8">
              <GlassCard className="group hover:bg-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <div className="flex-shrink-0 md:pt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-indigo-400" />
                      </div>
                      {index < experiences.length - 1 && (
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-indigo-600 to-transparent mt-16" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-indigo-400 font-semibold mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-white mb-2">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 glass-effect rounded border border-cyan-400/30 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}