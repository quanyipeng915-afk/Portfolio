import React from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { ProjectCard } from './components/ProjectCard';
import { BentoGrid } from './components/BentoGrid';
import { About } from './components/About';
import { ChatAssistant } from './components/ChatAssistant';
import { LARGE_PROJECTS, SMALL_PROJECTS, SOCIAL_LINKS } from './constants';
import { ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
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
            <a 
              href="mailto:hello@elian.design"
              className="inline-block bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-200 transition-colors mb-20"
            >
              Say Hello
            </a>

            <div className="flex justify-center gap-8 mb-12">
              {SOCIAL_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.url}
                  className="text-stone-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5" />
                </a>
              ))}
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

export default App;