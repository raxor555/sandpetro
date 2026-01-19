import React from 'react';
import { Section } from './ui/Section';

export const Clients: React.FC = () => {
  const clients = [
    'Saudi Aramco', 'SABIC', 'Saudi Electricity Company', 
    'Sipchem', 'Ma’aden', 'TASNEE', 
    'Ministry of Interior', 'National Water Company'
  ];

  return (
    <Section id="clients" title="Trusted Partners" subtitle="Our Clients" dark>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-slate-600">
          We are proud to serve the Kingdom's most prestigious organizations, delivering quality and reliability that meets the highest industrial standards.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="bg-white p-8 flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md hover:border-sand transition-all duration-300 group"
          >
            {/* 
              In a real app, these would be SVG logos. 
              Using stylized text for this demo to avoid broken images.
            */}
            <div className="text-center group-hover:transform group-hover:scale-105 transition-transform">
               <span className="font-display font-bold text-slate-400 group-hover:text-petro text-lg transition-colors">
                 {client}
               </span>
            </div>
          </div>
        ))}
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