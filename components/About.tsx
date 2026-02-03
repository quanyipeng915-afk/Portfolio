import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
      {/* Intro Text */}
      <div className="lg:col-span-5">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-serif mb-6"
        >
          Design Philosophy
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-stone-600 leading-relaxed mb-6"
        >
          I believe that good design is invisible. It should solve problems without drawing unnecessary attention to itself. My approach is deeply rooted in user research and iterative prototyping.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone-600 leading-relaxed mb-8"
        >
          With over 4 years of design experience, I've learned that the best products are built at the intersection of empathy, technology, and business goals.
        </motion.p>

        <a 
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Elian_Peng_Resume.pdf"
          className="flex items-center gap-2 text-stone-900 border border-stone-200 px-6 py-3 rounded-xl hover:bg-stone-50 transition-colors w-fit"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Experience Timeline */}
      <div className="lg:col-span-7">
        <h3 className="text-3xl font-serif mb-8 lg:mb-12">Experience</h3>
        <div className="space-y-12 border-l border-stone-200 pl-8 ml-3">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-stone-100 border-2 border-stone-900 rounded-full" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h4 className="text-xl font-bold text-stone-900">{exp.role}</h4>
                <span className="text-sm font-medium text-stone-500 font-mono bg-stone-100 px-2 py-1 rounded">{exp.period}</span>
              </div>
              <div className="text-lg text-stone-700 italic font-serif mb-3">{exp.company}</div>
              <p className="text-stone-600 leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};