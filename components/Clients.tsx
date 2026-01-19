import React from 'react';
import { Section } from './ui/Section';

export const Clients: React.FC = () => {
  const logos = [
    '/images/sc1.png', '/images/sc2.png', '/images/sc3.png',
    '/images/sc4.png', '/images/sc5.png', '/images/sc6.png',
    '/images/sc7.png', '/images/sc8.png', '/images/sc9.png',
    '/images/sc10.png'
  ];

  return (
    <Section id="clients" title="Trusted Partners" subtitle="Our Clients" dark>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-slate-600">
          We are proud to serve the Kingdom's most prestigious organizations, delivering quality and reliability that meets the highest industrial standards.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex animate-infinite-scroll w-max gap-16 py-10 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="px-12 flex items-center justify-center transition-all duration-300 group min-w-[200px]"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-petro text-white p-8 md:p-12 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sand opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">Ready to start your next project?</h3>
            <p className="text-gray-300">Join our roster of satisfied partners building the future of Saudi Arabia.</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sand text-petro-dark font-bold px-8 py-3 hover:bg-white transition-colors shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </Section>
  );
};