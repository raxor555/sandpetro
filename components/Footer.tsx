import React from 'react';
import { Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-petro-dark text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight leading-none">SANDPETRO</span>
              <span className="text-xs font-bold tracking-widest uppercase text-sand opacity-90">Contracting & Trading</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shaping the future of Saudi Arabia through industrial excellence and innovation. Trusted partner for Vision 2030.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-sand hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-sand hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-sand transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-sand transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-sand transition-colors">Projects Portfolio</a></li>
              <li><a href="#contact" className="hover:text-sand transition-colors">Get a Quote</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Core Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>General Contracting</li>
              <li>HDPE & Waterproofing</li>
              <li>BMS Solutions</li>
              <li>Prefab Buildings</li>
              <li>Heavy Equipment Rental</li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Al Khobar, Saudi Arabia</li>
              <li>info@sandpetro.com</li>
              <li>+966 55 014 3746</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SandPetro Contracting & Trading. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-sand text-white p-3 shadow-lg hover:bg-white hover:text-petro transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};