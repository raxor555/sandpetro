import React from 'react';
import { 
  Hammer, 
  Droplets, 
  Cpu, 
  Home, 
  Truck, 
  Users2 
} from 'lucide-react';
import { Section } from './ui/Section';
import { Service } from '../types';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'contracting',
      title: 'General Contracting',
      description: 'Comprehensive construction for industrial, commercial, and residential sectors. Includes civil works, infrastructure, and finishing.',
      icon: Hammer,
      features: ['Industrial Facilities', 'Commercial Towers', 'Civil & Excavation', 'Site Development']
    },
    {
      id: 'hdpe',
      title: 'HDPE & Waterproofing',
      description: 'Specialized containment solutions for Oil & Gas and Water Management. Expert geomembrane liners and extrusion welding.',
      icon: Droplets,
      features: ['Geomembrane Liners', 'Butt Fusion Welding', 'Wastewater Ponds', 'Chemical Containment']
    },
    {
      id: 'bms',
      title: 'Building Management (BMS)',
      description: 'IoT-driven solutions for intelligent ecosystems. HVAC control, fire safety, and energy optimization with partners like Siemens.',
      icon: Cpu,
      features: ['HVAC Control', 'Energy Monitoring', 'Access Control', 'Smart Integration']
    },
    {
      id: 'prefab',
      title: 'Prefab & Portable Buildings',
      description: 'Design and supply of modular housing, remote worker camps, and mobile offices. Rapid deployment and durability.',
      icon: Home,
      features: ['Remote Camps', 'Mobile Offices', 'Site Accommodation', 'Utilities Integration']
    },
    {
      id: 'trading',
      title: 'Trading & Equipment Rental',
      description: 'Supply of industrial materials (Pipes, Valves, PPE) and a robust fleet of heavy equipment for rental.',
      icon: Truck,
      features: ['Heavy Machinery', 'Industrial Materials', 'Generators & Cranes', 'Safety Gear (PPE)']
    },
    {
      id: 'recruitment',
      title: 'Recruitment Services',
      description: 'Strategic manpower solutions and executive search for giga-projects. Supplying skilled labor for NEOM and beyond.',
      icon: Users2,
      features: ['Executive Search', 'Project Manpower', 'Technical Staffing', 'Giga-Project Support']
    },
  ];

  return (
    <Section id="services" title="Integrated Industrial Solutions" subtitle="Our Expertise" dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group bg-white p-8 border border-gray-100 hover:border-sand/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-sand transition-colors duration-300"></div>
            
            <div className="mb-6 inline-flex p-3 bg-petro/5 group-hover:bg-petro text-petro group-hover:text-white rounded-sm transition-colors duration-300">
              <service.icon className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-display font-bold text-petro mb-3 group-hover:text-sand transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs font-medium text-slate-500">
                  <span className="w-1.5 h-1.5 bg-sand rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-sand/20 transform translate-x-4 translate-y-4">
                <service.icon className="w-24 h-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};