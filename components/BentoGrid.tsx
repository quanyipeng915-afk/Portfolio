import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { resolvePath } from '../utils/imageHelpers';

interface BentoGridProps {
  projects: Project[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
      {projects.map((project, idx) => (
        <Link
            key={project.id}
            to={`/project/${project.id}`}
            className={`block relative group overflow-hidden rounded-xl bg-stone-100 ${
              idx === 0 || idx === 3 ? 'md:col-span-2' : ''
            }`}
          >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="w-full h-full"
        >
          <img
            src={resolvePath(project.imageUrl)}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-xs font-medium uppercase tracking-wider opacity-80 mb-1 block">
              {project.category}
            </span>
            <h4 className="text-xl font-serif leading-none">{project.title}</h4>
          </div>
        </motion.div>
        </Link>
      ))}
    </div>
  );
};