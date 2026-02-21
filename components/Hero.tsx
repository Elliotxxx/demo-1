
import React from 'react';
import { Star } from 'lucide-react';
import consultorio from "../assets/cosultorio.png";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-sage-light/30">
      <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-primary/20 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Nuevos Pacientes Bienvenidos</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-primary">
              Evoluciona <br/>
              <span className="italic text-secondary">tu mente</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg font-light">
              Psicoterapia innovadora y compasiva para el individuo moderno. Ofrecemos un refugio seguro para explorar tus pensamientos e iniciar hoy tu camino hacia el bienestar emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mt-2">
              <button className="flex items-center justify-center bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1">
                Reservar Consulta
              </button>
              <button className="flex items-center justify-center bg-transparent border border-primary/30 hover:bg-primary/5 text-primary px-8 py-4 rounded-full text-base font-medium transition-all">
                Conocer Más
              </button>
            </div>
            
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-primary/10">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 40}/100/100`}
                    alt={`Testimonio ${i}`}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm font-medium text-stone-500">Confianza y bienestar</p>
              </div>
            </div>
          </div>

          <div className="relative lg:h-auto mt-8 lg:mt-0">
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-secondary/20 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-primary/20 rounded-full blur-3xl mix-blend-multiply"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white aspect-[4/5] md:aspect-[4/3] group ring-1 ring-black/5">
              <img 
  src={consultorio}
  alt="Consultorio de terapia moderno" 
  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl italic">"Un espacio para sanar"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
