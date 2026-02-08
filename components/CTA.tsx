
import React from 'react';
import { Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative">
          <div className="absolute -top-12 -left-12 text-[12rem] text-primary/5 font-serif leading-none select-none italic">"</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 relative z-10">
            ¿Listo para priorizar tu <br/>salud mental?
          </h2>
          <div className="absolute -bottom-16 -right-12 text-[12rem] text-primary/5 font-serif leading-none select-none rotate-180 italic">"</div>
        </div>
        
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Dar el primer paso es a menudo lo más difícil. Nuestro equipo está aquí para apoyarte en cada etapa. Agenda tu consulta hoy mismo.
        </p>
        
        <button className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full text-lg font-medium transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3 active:scale-95">
          <span>Agenda tu sesión</span>
          <Calendar size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTA;
