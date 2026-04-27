import React, { useState } from 'react';
import { Award, CheckCircle2, GraduationCap, ShieldCheck, X } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Community from './components/Community';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalCard from './components/DigitalCard';
import acuaazul from "./assets/acuaazul.svg";

const Home: React.FC = () => {
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white antialiased">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Services />

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

                <button
                  type="button"
                  onClick={() => setIsWorkModalOpen(true)}
                  className="mt-10 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
                >
                  Conoce más sobre mi trabajo
                </button>
              </div>
            </div>
          </div>
        </section>

        {isWorkModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 py-8 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            onClick={() => setIsWorkModalOpen(false)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-10"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsWorkModalOpen(false)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-primary transition hover:bg-primary hover:text-white"
                aria-label="Cerrar ventana"
              >
                <X size={20} />
              </button>

              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-secondary">
                Modelo clínico
              </span>

              <h3
                id="work-modal-title"
                className="mb-6 pr-10 text-3xl font-serif leading-tight text-primary md:text-5xl"
              >
                Psicoterapia estructurada, medible y humana
              </h3>

              <div className="space-y-5 text-base font-light leading-relaxed text-stone-600 md:text-lg">
                <p>
                  Hoy, la mayoría de las personas que buscan terapia no tienen claridad de si
                  realmente están avanzando. Invierten tiempo y dinero en procesos poco
                  estructurados, sin indicadores claros de mejora.
                </p>

                <p>
                  En María Sánchez Psicoterapia - Equilibrio contamos con un modelo clínico
                  innovador que integra Terapia Cognitivo Conductual y mindfulness, respaldado por
                  evidencia científica y principios de neurociencia.
                </p>

                <p>
                  A diferencia de la terapia tradicional, nuestro enfoque es estructurado, medible
                  y orientado a resultados. No solo acompañamos emocionalmente al paciente, sino
                  que medimos su progreso con indicadores concretos como reducción de síntomas,
                  escalas clínicas y adherencia terapéutica.
                </p>

                <p>
                  Esto nos permite ofrecer un proceso más eficaz, transparente y profesional,
                  donde el paciente no solo se siente mejor, sino que puede ver y comprobar su
                  avance.
                </p>

                <p>
                  Nuestro propósito es transformar la psicoterapia en un servicio moderno,
                  confiable y de alto impacto, pero, sobre todo, ayudarte a recuperar tu
                  equilibrio emocional para que tengas la libertad de ser tú mismo, sin miedo, sin
                  ansiedad y con claridad.
                </p>

                <p className="font-semibold text-primary">
                  En pocas palabras: no solo damos terapia, te ayudamos a recuperar el control de
                  tu vida y la libertad de ser tú.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-primary/10 bg-background-light p-5 text-center">
                  <ShieldCheck className="mx-auto mb-3 text-primary" size={34} strokeWidth={1.7} />
                  <p className="text-sm font-bold text-slate-800">Total profesionalismo</p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-background-light p-5 text-center">
                  <CheckCircle2 className="mx-auto mb-3 text-primary" size={34} strokeWidth={1.7} />
                  <p className="text-sm font-bold text-slate-800">Años de experiencia</p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-background-light p-5 text-center">
                  <Award className="mx-auto mb-3 text-primary" size={34} strokeWidth={1.7} />
                  <p className="text-sm font-bold text-slate-800">Muchos casos de éxito</p>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-background-light p-5 text-center">
                  <GraduationCap className="mx-auto mb-2 text-primary" size={34} strokeWidth={1.7} />
                  <p className="mb-1 font-serif text-2xl font-bold text-primary">UNAM</p>
                  <p className="text-sm font-bold text-slate-800">Formación profesional</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Community />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return window.location.pathname === '/tarjeta' ? <DigitalCard /> : <Home />;
};

export default App;
