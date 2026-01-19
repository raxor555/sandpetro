import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  title, 
  subtitle,
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${dark ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {(title || subtitle) && (
          <div className="max-w-3xl mb-16">
            {subtitle && (
              <span className="block text-sand font-bold tracking-widest uppercase text-sm mb-3">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-display font-bold text-petro leading-tight">
                {title}
              </h2>
            )}
            <div className="w-24 h-1 bg-sand mt-6"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};