import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resolvePath } from '../utils/imageHelpers';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group mb-24 md:mb-40 last:mb-0 w-full"
    >
      <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image Container */}
        <div className="w-full md:w-3/5 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              src={resolvePath(project.imageUrl)}
              alt={project.title}
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-800 uppercase tracking-wider">
              {project.year}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <span className="text-stone-500 text-sm font-medium tracking-widest uppercase mb-3">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
            {project.title}
          </h3>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <Link 
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 text-stone-900 font-semibold border-b border-stone-900 pb-1 w-fit hover:text-orange-600 hover:border-orange-600 transition-colors group-hover/link"
          >
            View Case Study
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};