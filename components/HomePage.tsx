import React from 'react';
import { Hero } from './Hero';
import { Navigation } from './Navigation';
import { ProjectCard } from './ProjectCard';
import { BentoGrid } from './BentoGrid';
import { About } from './About';
import { ChatAssistant } from './ChatAssistant';
import { LARGE_PROJECTS, SMALL_PROJECTS, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen relative selection:bg-orange-200">
      <Navigation />
      
      <main className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* Selected Work */}
        <section id="work" className="px-6 md:px-12 py-24 md:py-32">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">Selected Work</h2>
            <div className="h-1 w-20 bg-orange-600" />
          </div>
          
          <div className="flex flex-col">
            {LARGE_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Playground / Small Projects */}
        <section id="playground" className="px-6 md:px-12 py-24 bg-white rounded-3xl mx-4 md:mx-8">
           <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">The Playground</h2>
            <p className="text-stone-600 text-lg">
              A collection of smaller experiments, daily UI challenges, and graphic explorations. 
              This is where I test new ideas and technologies.
            </p>
          </div>
          <BentoGrid projects={SMALL_PROJECTS} />
        </section>

        {/* About & Resume */}
        <section id="about" className="px-6 md:px-12 py-24 md:py-32">
           <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">About Me</h2>
            <div className="h-1 w-20 bg-stone-900" />
          </div>
          <About />
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="px-6 md:px-12 py-24 bg-stone-900 text-white mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's build something beautiful.</h2>
            <p className="text-stone-400 text-xl mb-12 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col items-center gap-8 md:gap-12 mb-20 bg-stone-800/50 p-8 rounded-3xl border border-stone-800">
               {/* Contact Information */}
               <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-lg text-center md:text-left w-full justify-center">
                  
                  {/* Phone */}
                  <div className="flex flex-col gap-2 items-center md:items-start">
                    <span className="text-stone-500 text-xs uppercase tracking-widest font-medium">Phone</span>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+85244910942" className="hover:text-orange-400 transition-colors">+852 4491-0942</a>
                      <a href="tel:+8615606718276" className="hover:text-orange-400 transition-colors">+86 156-0671-8276</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2 items-center md:items-start">
                    <span className="text-stone-500 text-xs uppercase tracking-widest font-medium">Email</span>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:quanyipeng915@gmail.com" className="hover:text-orange-400 transition-colors">quanyipeng915@gmail.com</a>
                      <a href="mailto:quanyi.peng@connect.polyu.hk" className="hover:text-orange-400 transition-colors">quanyi.peng@connect.polyu.hk</a>
                    </div>
                  </div>
               </div>
               
               {/* Socials & WeChat */}
               <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-lg text-center md:text-left w-full justify-center border-t border-stone-700 pt-8">
                  
                  {/* Social Media */}
                  <div className="flex flex-col gap-2 items-center md:items-start">
                     <span className="text-stone-500 text-xs uppercase tracking-widest font-medium">Social Media</span>
                     <div className="flex gap-6">
                         <a href="https://www.linkedin.com/in/quanyi-peng-26b42a279/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                            LinkedIn <ArrowUpRight className="w-4 h-4" />
                         </a>
                         <a href="https://www.instagram.com/quanyi_0915/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                            Instagram <ArrowUpRight className="w-4 h-4" />
                         </a>
                     </div>
                  </div>

                  {/* WeChat */}
                  <div className="flex flex-col gap-2 items-center md:items-start">
                     <span className="text-stone-500 text-xs uppercase tracking-widest font-medium">WeChat</span>
                     <span className="select-all cursor-pointer hover:text-orange-400 transition-colors font-medium">PQYEVA</span>
                  </div>
               </div>
            </div>
            
            <div className="text-stone-600 text-sm">
              © {new Date().getFullYear()} Elian Design. Built with React & Tailwind.
            </div>
          </div>
        </section>

      </main>

      {/* Floating Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};
