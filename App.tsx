import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;