'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 glass-effect"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text"
        >
          PORTFOLIO
        </motion.a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 glass-effect rounded-full border border-indigo-400/50 text-white hover:bg-indigo-600/20 transition-colors"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden glass-effect rounded-lg p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-white transition-colors py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="w-full px-6 py-2 glass-effect rounded-full border border-indigo-400/50 text-white hover:bg-indigo-600/20 transition-colors"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
