import React from 'react';
import { Section } from './ui/Section';
import { Project } from '../types';
import { MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'neom',
      title: 'HDPE Geo Membrane Lining',
      location: 'NEOM',
      category: 'Waterproofing',
      description: 'Execution of HDPE Geo Membrane Lining works for various ponds and canals, ensuring environmental containment and water management standards.',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'haradh',
      title: 'Gas & Oil Pipeline Welding',
      location: 'Al Haradh',
      category: 'Industrial',
      description: 'Specialized welding works for Gas & Oil pipelines, delivering high-precision infrastructure for the energy sector.',
      imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'madinah',
      title: 'Water Line Fabrication',
      location: 'Al Madinah / Al Mahd',
      category: 'Infrastructure',
      description: 'Comprehensive fabrication works for water lines, supporting essential municipal water distribution networks.',
      imageUrl: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ce2ac6?q=80&w=1935&auto=format&fit=crop'
    }
  ];

  const categories = [
    {
      title: 'Industrial Infrastructure',
      description: 'Site development, earthwork projects, and industrial cleaning for manufacturing facilities.'
    },
    {
      title: 'Specialized Construction',
      description: 'Dewatering and waterproofing for large-scale construction projects.'
    },
    {
      title: 'Portable Solutions',
      description: 'Installation of portable units and modular buildings for remote camps.'
    },
    {
      title: 'Equipment Services',
      description: 'Long-term rental of heavy equipment and skilled operator services.'
    }
  ];

  const clients = ['Saudi Aramco', 'SABIC', 'Saudi Electricity Company (SEC)'];

  return (
    <Section id="projects" title="Our Track Record" subtitle="Notable Projects & Expertise">
      {/* Notable Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden bg-petro-dark cursor-pointer h-96 rounded-sm shadow-xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-petro-dark via-petro-dark/50 to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center text-sand mb-2 text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-3 h-3 mr-1" />
                {project.location}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 leading-tight">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.description}
              </p>
              <div className="h-1 w-12 bg-sand transition-all duration-300 group-hover:w-24"></div>
            </div>
          </div>
        ))}
      </div>

      {/* General Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 border-t-4 border-petro shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <h4 className="font-display font-bold text-lg text-petro mb-3">{cat.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="bg-petro-light rounded-sm p-8 text-center md:flex md:items-center md:justify-between shadow-inner">
        <div className="mb-6 md:mb-0 text-left">
          <h4 className="text-white font-display font-bold text-xl mb-1">Trusted by Industry Leaders</h4>
          <p className="text-blue-100 text-sm">Delivering excellence for high-profile clients across the Kingdom.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, idx) => (
            <span key={idx} className="flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
              <Building2 className="w-4 h-4 mr-2 text-sand" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};