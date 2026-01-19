import React from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years of Excellence', value: '16+' },
    { label: 'Major Clients', value: '50+' },
    { label: 'Completed Projects', value: '200+' },
    { label: 'Skilled Workforce', value: '500+' },
  ];

  return (
    <Section id="about" title="Engineering Excellence Since 2008" subtitle="Who We Are">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Column */}
        <div className="space-y-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            SandPetro is a forward-looking construction, industrial contracting, and trading company delivering integrated, world-class solutions across the Kingdom of Saudi Arabia.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Founded by a team of experienced industry professionals, we turn ambitious blueprints into reality through strategic planning, sophisticated resource management, and strict adherence to budgets and timelines. We are deeply committed to Saudi Arabia's <strong>Vision 2030</strong>, contributing to the nation's infrastructure and industrial growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-50 p-6 border-l-4 border-petro shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-sand mr-3" />
                <h3 className="font-display font-bold text-petro text-lg">Our Vision</h3>
              </div>
              <p className="text-sm text-slate-600">
                To be a trusted leader in delivering comprehensive services across KSA, setting benchmarks for innovation and national development.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 border-l-4 border-petro shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-6 h-6 text-sand mr-3" />
                <h3 className="font-display font-bold text-petro text-lg">Our Mission</h3>
              </div>
              <p className="text-sm text-slate-600">
                Driving excellence through client-focused solutions, safety, and skilled manpower to support the Kingdom’s progress.
              </p>
            </div>
          </div>
        </div>

        {/* Image/Stats Column */}
        <div className="relative">
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineers discussing blueprints" 
              className="w-full h-auto object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-petro/20"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-sand/20 z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-petro/10 z-0"></div>

          {/* Stats Grid */}
          <div className="absolute -bottom-12 right-0 left-0 md:left-12 bg-white p-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 border-t-4 border-sand">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-display font-bold text-petro mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};