
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">TechVista</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Contact</a>
            <Button className="btn-hover bg-primary/90 hover:bg-primary">Get Started</Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect animate-fade-in">
          <div className="py-4 px-6 space-y-3">
            <a href="#features" className="block text-sm font-medium text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#testimonials" className="block text-sm font-medium text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#pricing" className="block text-sm font-medium text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#contact" className="block text-sm font-medium text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</a>
            <Button className="w-full btn-hover" onClick={() => setIsOpen(false)}>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
