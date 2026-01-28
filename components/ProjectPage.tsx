import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LARGE_PROJECTS, SOCIAL_LINKS } from '../constants';
import { Navigation } from './Navigation';
import { ChatAssistant } from './ChatAssistant';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectPage: React.FC = () => {
  const { id } = useParams();
  const projectIndex = LARGE_PROJECTS.findIndex(p => p.id === id);
  const project = LARGE_PROJECTS[projectIndex];
  
  // Calculate Next Project
  const nextProjectIndex = (projectIndex + 1) % LARGE_PROJECTS.length;
  const nextProject = LARGE_PROJECTS[nextProjectIndex];

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
      
      {/* Fixed Back Button */}
      <Link 
        to="/" 
        className="fixed left-4 md:left-8 top-24 z-40 inline-flex items-center gap-2 px-6 py-4 bg-transparent hover:bg-[#F2F2F2] text-stone-500 hover:text-orange-600 rounded-full transition-all group"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        Back
      </Link>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
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
              src={project.detailImageUrl || project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-24 mb-24">
             {/* Left: Main Description */}
             <div className="md:col-span-5">
               <h2 className="text-2xl md:text-3xl font-serif text-stone-900 leading-relaxed mb-8">
                 {project.description}
               </h2>
               <Link to={project.link || '#'} target="_blank" className="text-orange-600 font-medium hover:underline inline-flex items-center gap-1">
                 VISIT LIVE SITE <ArrowUpRight className="w-4 h-4" />
               </Link>
             </div>

             {/* Right: Meta Information */}
             <div className="md:col-span-7 flex flex-col">
                {/* Product Type */}
                <div className="border-b border-stone-200 py-4 first:pt-0">
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1">Product</h4>
                  <p className="text-stone-900 text-base leading-snug">{project.category}</p>
                </div>

                {/* Skills/Stack */}
                <div className="border-b border-stone-200 py-4">
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1">Skills</h4>
                  <div className="flex flex-col">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-stone-900 text-base leading-snug">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div className="border-b border-stone-200 py-4">
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1">My Role</h4>
                  <p className="text-stone-900 text-base leading-snug">{project.role || 'Lead Designer'}</p>
                </div>
                
                {/* Timeline */}
                <div className="border-b border-stone-200 py-4">
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1">Timeline</h4>
                  <p className="text-stone-900 text-base leading-snug">{project.timeline || project.year}</p>
                </div>

                {/* Collaborators */}
                {project.collaborators && (
                  <div className="py-4">
                    <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-1">Collaborators</h4>
                    <p className="text-stone-900 text-base leading-snug">{project.collaborators.join(', ')}</p>
                  </div>
                )}
             </div>
          </div>

          {/* Dynamic Content Sections */}
          <div className="flex flex-col">
            {project.content?.map((section, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 lg:gap-x-24
                  ${section.title ? 'pt-12 mt-24 border-t border-stone-200' : 'mt-12'}
                  ${idx === 0 ? '!mt-0' : ''}
                `}
              >
                {/* Left: Section Title */}
                <div className="md:col-span-5">
                  {section.title && (
                    <h3 className="text-3xl md:text-4xl font-serif text-stone-900 sticky top-32">
                      {section.title}
                    </h3>
                  )}
                </div>
                
                {/* Right: Content */}
                <div className="md:col-span-7">
                   {/* Subtitle (Second Title) */}
                   {section.subtitle && (
                     <h4 
                       className="text-2xl font-serif text-stone-800 mb-6"
                       dangerouslySetInnerHTML={{ __html: section.subtitle }}
                     />
                   )}

                   {/* Text Content */}
                   <p 
                     className={`whitespace-pre-line leading-relaxed mb-8 ${
                       section.highlight 
                         ? 'text-xl md:text-2xl font-serif text-stone-800 leading-snug' 
                         : 'text-base text-stone-600'
                     }`}
                     dangerouslySetInnerHTML={{ __html: section.text }} 
                   />
                  
                  {/* Images Handling based on Layout */}
                  {/* 1. Normal Layout (Default) - Fits text width */}
                  {(!section.imageLayout || section.imageLayout === 'normal') && (
                    <>
                      {section.imageUrl && (
                        <div className="overflow-hidden shadow-sm bg-stone-50 mb-6 last:mb-0">
                          <img 
                            src={section.imageUrl} 
                            alt={section.title || 'Project detail'} 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      
                      {section.image2Url && (
                        <div className="overflow-hidden shadow-sm bg-stone-50 mb-6 last:mb-0">
                          <img 
                            src={section.image2Url} 
                            alt={section.title || 'Project detail 2'} 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* 2. Grid Layout - 2 Images Side by Side (Full Width) */}
                {section.imageLayout === 'grid' && (
                  <div className="md:col-span-12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {section.imageUrl && (
                      <div className="overflow-hidden shadow-sm bg-stone-50 aspect-video">
                        <img 
                          src={section.imageUrl} 
                          alt="Detail 1" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {section.image2Url && (
                      <div className="overflow-hidden shadow-sm bg-stone-50 aspect-video">
                        <img 
                          src={section.image2Url} 
                          alt="Detail 2" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Full Width Layout - Spans entire container */}
                {section.imageLayout === 'full' && (
                  <>
                    {section.imageUrl && (
                      <div className="md:col-span-12 mt-4 overflow-hidden shadow-sm bg-stone-50">
                        <img 
                          src={section.imageUrl} 
                          alt={section.title || 'Full width detail'} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    {section.image2Url && (
                      <div className="md:col-span-12 mt-4 overflow-hidden shadow-sm bg-stone-50">
                        <img 
                          src={section.image2Url} 
                          alt={(section.title || 'Full width detail')} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {!project.content && (
            <div className="prose prose-lg prose-stone">
              <p className="italic text-stone-500">
                Detailed case study content coming soon...
              </p>
            </div>
          )}
        </motion.div>

        {/* Next Project Navigation */}
        <div className="mt-32 pt-12 border-t border-stone-200">
           <div className="flex flex-col items-center justify-center text-center py-12">
            <span className="text-stone-400 text-sm uppercase tracking-widest mb-4">Next Project</span>
            <Link 
              to={`/project/${nextProject.id}`} 
              className="group flex flex-col items-center gap-4"
            >
              <h3 className="text-4xl md:text-6xl font-serif text-stone-900 group-hover:text-orange-600 transition-colors">
                {nextProject.title}
              </h3>
              <div className="flex items-center gap-2 text-stone-500 group-hover:text-stone-900 transition-colors">
                <span>View Case Study</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Section for Project Page */}
        <div className="mt-12 pt-12 border-t border-stone-200">
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
