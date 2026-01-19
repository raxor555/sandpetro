import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkPath = (hash: string) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  };

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'Projects', href: '/projects', isRoute: true },
    { name: 'Clients', href: '#clients', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
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
        className={`fixed w-full z-40 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'top-0 bg-white/95 backdrop-blur-md shadow-md py-3' : 'top-0 md:top-8 bg-white/90 md:bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src="/images/Screenshot 2026-01-19 235223.png" alt="SandPetro Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:text-sand ${isScrolled || location.pathname !== '/' ? 'text-petro' : 'text-white drop-shadow-md'
                    }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={getLinkPath(link.href)}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:text-sand ${isScrolled || location.pathname !== '/' ? 'text-petro' : 'text-white drop-shadow-md'
                    }`}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={getLinkPath('#contact')}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300 ${isScrolled || location.pathname !== '/'
                  ? 'border-petro text-petro hover:bg-petro hover:text-white'
                  : 'border-sand text-white hover:bg-sand hover:border-sand'
                }`}
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled || location.pathname !== '/' ? 'text-petro' : 'text-petro md:text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-display font-bold text-petro border-b border-gray-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={getLinkPath(link.href)}
                  className="text-2xl font-display font-bold text-petro border-b border-gray-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href={getLinkPath('#contact')}
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