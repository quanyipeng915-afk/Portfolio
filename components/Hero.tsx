import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <h2 className="text-lg md:text-xl font-medium text-stone-500 mb-6 tracking-wide">
          Hello, I'm Elian.
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[1.1] mb-8">
          Crafting <span className="italic text-stone-400">digital experiences</span> that balance beauty & utility.
        </h1>
        <p className="text-lg md:text-2xl text-stone-600 max-w-2xl leading-relaxed mb-12">
          I am a Senior UI/UX Designer specializing in building scalable design systems and intuitive user interfaces for complex products.
        </p>
        
        <div className="flex gap-4">
          <a
            href="#work"
            className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-orange-600 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-stone-300 text-stone-900 rounded-full font-medium hover:border-stone-900 transition-colors duration-300"
          >
            About Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};