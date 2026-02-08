
import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';

const Community: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-sage-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-primary/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Nuestra Comunidad</h2>
            <p className="text-stone-600 text-lg font-light">
              Síguenos en Instagram para obtener consejos diarios de mindfulness, recursos de salud mental e historias inspiradoras.
            </p>
          </div>
          <a href="#" className="flex items-center gap-3 text-primary font-bold hover:opacity-70 transition-opacity group">
            <span className="text-lg">@clinica_ms</span>
            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {images.map((src, i) => (
            <div 
              key={i} 
              className={`aspect-square relative group overflow-hidden rounded-sm cursor-pointer shadow-lg ${i % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <img 
                src={src} 
                alt="Community post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Heart className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" fill="currentColor" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
