import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Community from './components/Community';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import acuaazul from "./assets/acuaazul.svg";

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
             
              <div className="relative lg:h-[600px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/20 to-transparent blur-[100px] pointer-events-none"></div>

                <div className="relative h-full flex items-center justify-center">
                  <div className="w-full aspect-square rounded-[4rem] overflow-hidden rotate-3 shadow-2xl ring-8 ring-white/30 backdrop-blur-md">
                    <img
                      src={acuaazul}
                      alt="Nuestra fundadora"
                      className="w-full h-full object-cover -rotate-3 scale-110"
                    />
                  </div>

                  <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl max-w-[240px] animate-bounce-slow">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4">
                      verified_user
                    </span>

                    <p className="font-black text-slate-900 leading-tight">
                      Privacidad Total Garantizada
                    </p>

                    <p className="text-xs text-slate-500 mt-2">
                      "Sanar es un acto de valentía."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
                  Sobre mí
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                  Tu bienestar es mi compromiso
                </h2>

                <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
                  <p>
                    Soy psicóloga y acompaño a personas que buscan comprender lo que sienten,
                    sanar experiencias difíciles y construir una vida con mayor tranquilidad
                    y equilibrio emocional.
                  </p>

                  <p>
                    En este espacio encontrarás escucha, respeto y confidencialidad. Mi objetivo
                    es que puedas hablar con libertad, comprender tus emociones y desarrollar
                    herramientas que te ayuden a sentirte mejor contigo mismo y con tu entorno.
                  </p>
                </div>

                <button className="mt-10 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                  Conoce más sobre mi trabajo
                </button>
              </div>
            </div>
          </div>
        </section>

        <Community />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;