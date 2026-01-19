import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-petro-dark text-white py-2 px-6 hidden md:flex justify-between items-center text-xs font-medium tracking-wide z-50 relative">
        <div className="flex space-x-6">
          <a href="mailto:info@sandpetro.com" className="flex items-center hover:text-sand transition-colors">
            <Mail className="w-3 h-3 mr-2" />
            info@sandpetro.com
          </a>
          <a href="tel:+966550143746" className="flex items-center hover:text-sand transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            +966 55 014 3746
          </a>
        </div>
        <div className="flex space-x-4">
          <span>Al Khobar, Saudi Arabia</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-md py-3' : 'top-0 md:top-8 bg-white/90 md:bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className="bg-petro text-white p-2 mr-2 group-hover:bg-sand transition-colors duration-300">
              <span className="font-display font-bold text-xl md:text-2xl tracking-tighter">SP</span>
            </div>
            <div className={`flex flex-col ${isScrolled || window.innerWidth < 768 ? 'text-petro' : 'text-petro md:text-white'}`}>
              <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight leading-none">SANDPETRO</span>
              <span className="text-[0.6rem] md:text-xs font-bold tracking-widest uppercase opacity-80 leading-none">Contracting & Trading</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:text-sand ${
                  isScrolled ? 'text-petro' : 'text-white drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300 ${
                isScrolled 
                  ? 'border-petro text-petro hover:bg-petro hover:text-white' 
                  : 'border-sand text-white hover:bg-sand hover:border-sand'
              }`}
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-petro"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-8 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button 
            className="absolute top-6 right-6 text-petro"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-display font-bold text-petro border-b border-gray-100 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-petro text-white text-center py-4 font-bold text-lg rounded-sm"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </header>
    </>
  );
};