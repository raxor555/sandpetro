import React, { useEffect, useState } from 'react';
import { Section } from '../components/ui/Section';
import { Award, Target, Users, MapPin, Phone, Mail, Globe, Briefcase, TrendingUp, ShieldCheck, Download, X } from 'lucide-react';

export const AboutPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ email: '', phone: '', consent: false });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.email && formData.phone && formData.consent) {
            // Trigger download
            const link = document.createElement('a');
            link.href = '/images/Profile SANDPETRO.pdf';
            link.download = 'SandPetro_Company_Profile.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsModalOpen(false);
            setFormData({ email: '', phone: '', consent: false });
        }
    };

    const portfolio = [
        { name: 'Al Shurooq Al Dhahabi Restaurants', location: 'Al Khobar', role: 'Owner & Manager', desc: 'A leading chain specializing in authentic popular Saudi cuisine in the Eastern Province for over 35 years.' },
        { name: 'Shawaya Al Hijaz Restaurants', location: 'Western Region', role: 'Chairman of the Board', desc: 'Renowned chain delivering distinctive meals with modern operations.' },
        { name: 'Al Hijaz for Animal Feed', location: 'Rabigh', role: 'Owner & Chairman', desc: 'Specializes in import/export of high-quality animal feed.' },
        { name: 'Al Safa Feed Factory', location: 'Western Region', role: 'Owner', desc: 'Focused on classification and distribution of premium animal feed.' },
        { name: 'Ardh Al Khair Logistics Services', location: 'KSA', role: 'Board Member', desc: 'Provides integrated logistics solutions across the Kingdom.' },
        { name: 'Daleel Muhit Al Bihar Company', location: 'KSA', role: 'Chairman of the Board', desc: 'Specializes in trading, importing, and exporting various meats with strict quality and food safety standards.' },
        { name: 'Dar Al Mubarak Trading', location: 'Kingdom of Bahrain', role: 'Board Member', desc: 'Leading firm in gold refining and precious metals trading.' },
        { name: 'International Investments', location: 'Egypt & Sudan', role: 'Partner and Chairman', desc: 'Feed manufacturing (Egypt) and Yaksoon Mining Company (gold mining, Sudan).' },
    ];

    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <div className="bg-petro-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" className="w-full h-full object-cover" alt="Background" />
                </div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
                        <p className="text-xl text-sand font-medium max-w-2xl">Sandpetro Contracting & Trading Company — Delivering world-class solutions since 2008.</p>
                    </div>
                    <div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-sand text-petro-dark font-bold px-8 py-4 hover:bg-white transition-all duration-300 shadow-xl flex items-center gap-3 uppercase tracking-wider"
                        >
                            <Download className="w-5 h-5" />
                            Download Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-petro-dark/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="bg-white w-full max-w-md relative z-10 shadow-2xl rounded-sm p-8 border-t-4 border-sand">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-petro transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-display font-bold text-petro mb-2">Company Profile</h3>
                            <p className="text-slate-500 text-sm">Please provide your details to download our complete profile.</p>
                        </div>

                        <form onSubmit={handleDownload} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-slate-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand transition-all"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    className="w-full bg-slate-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand transition-all"
                                    placeholder="+966 50 000 0000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="flex items-start gap-3">
                                <input
                                    required
                                    type="checkbox"
                                    id="consent"
                                    className="mt-1 accent-sand"
                                    checked={formData.consent}
                                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                />
                                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                                    I consent to receive information about SandPetro's services and agree to the storage of my data.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-petro text-white font-bold py-4 hover:bg-sand transition-colors shadow-lg uppercase tracking-widest text-sm"
                            >
                                Download Now
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Company History Section */}
            <Section id="company-history" title="Our History" subtitle="Sandpetro Contracting & Trading">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-700 leading-relaxed text-justify">
                            Formed in 2008, Sandpetro Contracting & Trading Company is a forward-looking construction, industrial contracting, and trading firm established by a team of experienced industry professionals and qualified engineers with a vision to deliver integrated, world-class solutions.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-justify">
                            With operations centered in the Kingdom of Saudi Arabia, we provide a wide array of services spanning general contracting for industrial, residential, and commercial projects. Our specializations include Building Automation & Maintenance, HDPE Contracting, Landscape, Asphalt Works, Dismantling & Waste Management, and Prefabrication.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-justify">
                            Our integrated model is strengthened by comprehensive equipment rental services and a robust trading division supplying essential industrial materials and safety equipment. We cater to diverse project needs with tailored solutions, backed by deep technical expertise and a commitment to the highest quality execution. Driven by excellence, safety, and innovation, we continue to expand our footprint across the Middle East.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-8 text-center rounded-sm border-t-4 border-sand shadow-sm">
                            <TrendingUp className="w-10 h-10 text-petro mx-auto mb-4" />
                            <h4 className="font-bold text-petro">Growth</h4>
                            <p className="text-xs text-slate-500 uppercase mt-2">Continuous Expansion</p>
                        </div>
                        <div className="bg-slate-50 p-8 text-center rounded-sm border-t-4 border-petro shadow-sm">
                            <ShieldCheck className="w-10 h-10 text-sand mx-auto mb-4" />
                            <h4 className="font-bold text-petro">Quality</h4>
                            <p className="text-xs text-slate-500 uppercase mt-2">Highest Execution Standards</p>
                        </div>
                        <div className="bg-slate-50 p-8 text-center rounded-sm border-t-4 border-petro shadow-sm">
                            <Users className="w-10 h-10 text-sand mx-auto mb-4" />
                            <h4 className="font-bold text-petro">Expertise</h4>
                            <p className="text-xs text-slate-500 uppercase mt-2">Qualified Engineers</p>
                        </div>
                        <div className="bg-slate-50 p-8 text-center rounded-sm border-t-4 border-sand shadow-sm">
                            <Target className="w-10 h-10 text-petro mx-auto mb-4" />
                            <h4 className="font-bold text-petro">Vision</h4>
                            <p className="text-xs text-slate-500 uppercase mt-2">Integrated Solutions</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Leadership Section */}
            <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="bg-white p-2 shadow-xl rounded-sm">
                                <img
                                    src="/images/Screenshot 2026-01-20 022804.png"
                                    alt="Founder & Chairman"
                                    className="w-full h-auto transition-all duration-500"
                                />
                                <div className="p-6 bg-petro text-white">
                                    <h3 className="text-xl font-display font-bold">Khaled Hassan Hussein Al Harbi</h3>
                                    <p className="text-sand font-medium text-sm">Founder & Chairman</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-8">
                            <div>
                                <h4 className="text-sand uppercase tracking-widest font-bold text-sm mb-2">Leadership</h4>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-petro mb-6">Our Founder & Chairman</h2>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-petro shadow-sm">Strategic Vision</span>
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-petro shadow-sm">Inspirational Leadership</span>
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-petro shadow-sm">Constructive Investment</span>
                                </div>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
                                    <p>
                                        A pioneering Saudi businessman with extensive experience in managing large-scale companies and strategic projects, Mr. Khaled Al Harbi excels in leading teams and forging effective local and international partnerships. His studied investment approach, ability to seize opportunities, and passion for sustainable growth have established him as a prominent figure in contracting, food services, and mining sectors. Since the inception of his career, he has been driven by a philosophy of continuous improvement and a refusal to accept the status quo, pushing the boundaries of what is possible in the Saudi Arabian industrial landscape.
                                    </p>
                                    <p>
                                        As the sole owner and Chairman of the Board of Sandpetro Contracting & Trading Company (established 1430H / 2008), he has guided the firm to execute major projects, including collaborations with Saudi Aramco, barley processing facilities for Al Muhaidib Group, and government contracts with the Ministry of Defense and King Abdulaziz Naval Base in Jubail. Under his direct oversight, Sandpetro has achieved record-breaking safety milestones and consistently exceeded client expectations for technical complexity and delivery speed.
                                    </p>
                                    <p>
                                        His broader portfolio demonstrates diversified expertise and commitment to economic development, spanning across various sectors from restaurants to logistics and international mining. Mr. Al Harbi's strategic investments are meticulously designed to foster long-term stability and create high-value employment opportunities within the Kingdom, directly supporting the ambitious goals of the National Transformation Program.
                                    </p>
                                    <p>
                                        Deeply committed to the principles of Saudi Vision 2030, he continues to advocate for the adoption of cutting-edge technology and sustainable practices across all his ventures. His leadership is characterized by a balance of traditional values and modern innovation, ensuring that every project not only meets immediate needs but also contributes to the enduring prosperity of the nation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diversified Portfolio */}
            <Section id="portfolio" title="Diversified Portfolio" subtitle="Expertise Across Sectors">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-sand">
                            <div className="flex justify-between items-start mb-4">
                                <Briefcase className="w-8 h-8 text-petro" />
                                <span className="text-[10px] font-bold bg-slate-100 px-3 py-1 text-slate-500 uppercase tracking-tighter">{item.location}</span>
                            </div>
                            <h4 className="text-lg font-display font-bold text-petro mb-1">{item.name}</h4>
                            <p className="text-sand text-xs font-bold mb-4 uppercase">{item.role}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-petro-dark rounded-sm text-center">
                    <p className="text-gray-300 max-w-3xl mx-auto italic">
                        "Mr. Al Harbi continues to pursue strategic expansions and international partnerships, driven by a belief that ambition has no limits and true success stems from clear vision, meticulous execution, and continuous development."
                    </p>
                </div>
            </Section>

            {/* Contact Section Preview */}
            <div className="container mx-auto px-6 py-16">
                <div className="bg-white border border-gray-100 shadow-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t-4 border-t-sand">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-petro mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-center text-slate-600">
                                <Phone className="w-5 h-5 text-sand mr-4" />
                                <span>+966 55 584 6194</span>
                            </div>
                            <div className="flex items-center text-slate-600">
                                <Mail className="w-5 h-5 text-sand mr-4" />
                                <a href="mailto:saifallah23@hotmail.com" className="hover:text-sand transition-colors">saifallah23@hotmail.com</a>
                            </div>
                            <div className="flex items-center text-slate-600">
                                <Globe className="w-5 h-5 text-sand mr-4" />
                                <a href="https://www.sandpetro.com" className="hover:text-sand transition-colors">www.sandpetro.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <a
                            href="mailto:saifallah23@hotmail.com"
                            className="inline-block bg-sand text-petro-dark font-bold px-10 py-4 hover:bg-petro hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Work With Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
