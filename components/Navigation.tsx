import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight z-50 relative">
          Elian<span className="text-orange-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 hover:underline decoration-orange-500 decoration-2 underline-offset-4 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center items-center gap-8">
             {NAV_LINKS.map(link => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif text-stone-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};