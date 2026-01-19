import React from 'react';
import { Section } from './ui/Section';
import { Project } from '../types';
import { MapPin } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'neom',
      title: 'HDPE Geo Membrane Lining',
      location: 'NEOM',
      category: 'Waterproofing',
      description: 'Large-scale environmental containment for ponds and canals in the NEOM giga-project.',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'haradh',
      title: 'Gas & Oil Pipeline Welding',
      location: 'Al Haradh',
      category: 'Industrial',
      description: 'Specialized precision welding for critical infrastructure supporting energy distribution.',
      imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'madinah',
      title: 'Water Line Fabrication',
      location: 'Al Madinah',
      category: 'Infrastructure',
      description: 'Fabrication and installation of essential water lines supporting municipal development.',
      imageUrl: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ce2ac6?q=80&w=1935&auto=format&fit=crop'
    },
    {
      id: 'industrial-cleaning',
      title: 'Facility Maintenance',
      location: 'Eastern Province',
      category: 'Maintenance',
      description: 'Large-scale industrial cleaning for manufacturing facilities and remote camp installations.',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <Section id="projects" title="Building the Nation" subtitle="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden bg-petro-dark cursor-pointer h-80 md:h-96">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-petro-dark via-transparent to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center text-sand mb-2 text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-3 h-3 mr-1" />
                {project.location}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.description}
              </p>
              <div className="h-1 w-12 bg-sand mt-4 transition-all duration-300 group-hover:w-24"></div>
            </div>

            <div className="absolute top-6 right-6 bg-sand text-petro-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};