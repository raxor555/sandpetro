import React from 'react';
import { Section } from './ui/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get in Touch" subtitle="Contact Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">
          <p className="text-slate-600 mb-8">
            Whether you need a quote for a large-scale contracting project, equipment rental, or specialized HDPE solutions, our team is ready to assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-petro/10 p-3 rounded-sm mr-4 text-petro">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-petro text-lg mb-1">Head Office</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Al Omran District, 17th Street<br />
                  7406, 4752<br />
                  Al Khobar, Kingdom of Saudi Arabia
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-petro/10 p-3 rounded-sm mr-4 text-petro">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-petro text-lg mb-1">Phone</h4>
                <p className="text-slate-600 text-sm">
                  <a href="tel:+96550143746" className="hover:text-sand block">+965 50 143 746</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-petro/10 p-3 rounded-sm mr-4 text-petro">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-petro text-lg mb-1">Email</h4>
                <p className="text-slate-600 text-sm">
                  <a href="mailto:info@sandpetro.com" className="hover:text-sand">info@sandpetro.com</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-petro/10 p-3 rounded-sm mr-4 text-petro">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-petro text-lg mb-1">Working Hours</h4>
                <p className="text-slate-600 text-sm">
                  Sunday - Thursday: 8:00 AM - 5:00 PM<br />
                  Friday - Saturday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 border border-gray-200 shadow-lg relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-petro"></div>
          <h3 className="text-2xl font-display font-bold text-petro mb-6">Request a Quote</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                <input type="text" id="name" className="w-full bg-slate-50 border border-gray-300 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase text-slate-500 mb-1">Company</label>
                <input type="text" id="company" className="w-full bg-slate-50 border border-gray-300 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand" placeholder="Company Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full bg-slate-50 border border-gray-300 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-slate-50 border border-gray-300 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand" placeholder="+965 50 143 746" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase text-slate-500 mb-1">Interested Service</label>
              <select id="service" className="w-full bg-slate-50 border border-gray-300 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand">
                <option>General Contracting</option>
                <option>HDPE Waterproofing</option>
                <option>Mechanical Fabrication</option>
                <option>Building Management Systems</option>
                <option>Prefab & Portable Buildings</option>
                <option>Trading & Rental</option>
                <option>Recruitment Services</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-500 mb-1">Project Details</label>
              <textarea id="message" rows={4} className="w-full bg-slate-50 border border-gray-300 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand" placeholder="Please describe your project requirements..."></textarea>
            </div>

            <Button type="submit" className="w-full">
              Send Request
            </Button>
          </form>
        </div>

      </div>
    </Section>
  );
};