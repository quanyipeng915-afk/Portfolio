import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LARGE_PROJECTS, SOCIAL_LINKS } from '../constants';
import { Navigation } from './Navigation';
import { ChatAssistant } from './ChatAssistant';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const project = LARGE_PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project not found</h1>
          <Link to="/" className="text-orange-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen relative selection:bg-orange-200">
      <Navigation />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-stone-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-stone-200 text-stone-700 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full aspect-video bg-stone-200 rounded-3xl overflow-hidden mb-16 shadow-lg">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Overview</h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-12">
                {project.description}
              </p>
              
              {/* Placeholder for more content since constants.ts only has short descriptions currently */}
              <div className="prose prose-lg prose-stone">
                <p>
                  This is a detailed case study page. You can add more specific fields to your project data structure 
                  in <code>constants.ts</code> such as "challenge", "solution", and "results" to populate this section dynamically.
                </p>
                <p>
                  For now, this page demonstrates the routing and layout structure. The visual style matches your main 
                  landing page, using the same typography, colors, and spacing.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-32">
                <h3 className="text-lg font-serif mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 mb-1">Year</span>
                    <span className="text-stone-900 font-medium">{project.year}</span>
                  </div>
                  
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 mb-1">Role</span>
                    <span className="text-stone-900 font-medium">Lead Designer</span>
                  </div>

                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-400 mb-1">Client</span>
                    <span className="text-stone-900 font-medium">Confidential</span>
                  </div>
                </div>

                <div className="h-px w-full bg-stone-100 my-8" />

                <a 
                  href={project.link || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                >
                  Visit Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Section for Project Page */}
        <div className="mt-32 pt-12 border-t border-stone-200">
          <div className="flex justify-between items-center">
            <div className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Elian Design
            </div>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.url}
                  className="text-stone-400 hover:text-stone-900 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ChatAssistant />
    </div>
  );
};
