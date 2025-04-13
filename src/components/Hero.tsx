
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[50%] w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Your <span className="text-gradient">Digital Experience</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Our cutting-edge platform combines AI technology with intuitive design to help businesses scale faster and smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hover text-lg py-6 px-8 rounded-lg bg-primary/90 hover:bg-primary animate-pulse-glow">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-hover text-lg py-6 px-8 rounded-lg border-white/20">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 text-white/50 text-sm flex items-center gap-2">
              <span>No credit card required</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>14-day free trial</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech interface" 
                className="rounded-2xl relative z-10 animate-float shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button onClick={scrollToFeatures} className="text-white/60 hover:text-white transition-colors">
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
