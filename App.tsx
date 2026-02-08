
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* About Section - Brief Intro */}
        <section id="nosotros" className="py-24 bg-sage-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Nuestra fundadora" 
                  className="rounded-[3rem] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 rounded-[2.5rem] shadow-xl z-20 hidden md:block">
                  <p className="font-serif text-3xl italic">"Sanar es un acto de valentía."</p>
                </div>
              </div>
              <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Sobre Nosotros</span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">Tu bienestar es nuestro compromiso primordial</h2>
                <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
                  <p>
                    En Clínica MS, creemos que cada individuo posee la capacidad intrínseca de sanar y crecer. Nuestra misión es proporcionar un entorno compasivo y profesional donde puedas explorar tus desafíos emocionales con seguridad.
                  </p>
                  <p>
                    Contamos con un equipo multidisciplinario de expertos certificados en diversas corrientes terapéuticas, asegurando un enfoque personalizado que se adapta a tus necesidades únicas y objetivos de vida.
                  </p>
                </div>
                <button className="mt-10 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                  Lee nuestra historia completa
                </button>
              </div>
            </div>
          </div>
        </section>

        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
