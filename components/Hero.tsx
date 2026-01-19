import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-petro-dark/90 via-petro/70 to-transparent"></div>
        {/* Subtle grid pattern overlay for technical feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="bg-sand text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Established 2008
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Shaping the Future <br />
            <span className="text-sand">Together.</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed border-l-4 border-sand pl-6">
            A trusted leader in industrial contracting, trading, and specialized construction solutions across Saudi Arabia. Driving Vision 2030 with precision and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Partner With Us
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-petro"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown className="w-8 h-8" />
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 w-full h-2 bg-sand"></div>
    </section>
  );
};