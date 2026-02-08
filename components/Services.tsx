
import React from 'react';
import { Brain, Users, Leaf, Baby, Shield, Smile } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-background-light p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-stone-100 group">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h4 className="text-2xl font-serif text-primary mb-4">{title}</h4>
    <p className="text-stone-600 leading-relaxed font-light text-sm">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain size={30} strokeWidth={1.5} />,
      title: "Terapia Individual",
      description: "Sesiones uno a uno para explorar tus pensamientos y sentimientos en un espacio seguro y confidencial adaptado a tu crecimiento personal."
    },
    {
      icon: <Users size={30} strokeWidth={1.5} />,
      title: "Consejería de Pareja",
      description: "Fortalece tu relación a través de la comunicación guiada, la comprensión mutua y estrategias efectivas de resolución de conflictos."
    },
    {
      icon: <Leaf size={30} strokeWidth={1.5} />,
      title: "Mindfulness",
      description: "Aprende técnicas prácticas para mantenerte presente, reducir la ansiedad y cultivar una sensación de paz interior en tu vida diaria."
    },
    {
      icon: <Baby size={30} strokeWidth={1.5} />,
      title: "Niños y Adolescentes",
      description: "Apoyo especializado para mentes jóvenes, ayudándoles a navegar etapas de desarrollo y desafíos emocionales complejos."
    },
    {
      icon: <Shield size={30} strokeWidth={1.5} />,
      title: "Terapia Grupal",
      description: "Conecta con otros que enfrentan luchas similares en un entorno facilitado que fomenta la sanación compartida y el apoyo."
    },
    {
      icon: <Smile size={30} strokeWidth={1.5} />,
      title: "Ansiedad y Depresión",
      description: "Tratamientos basados en evidencia como TCC para ayudar a manejar síntomas y recuperar el control de tu bienestar emocional."
    }
  ];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Nuestras Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Terapias Personalizadas</h2>
          <p className="text-lg text-stone-600 font-light">
            Ofrecemos una gama de tratamientos especializados diseñados para ayudarte a navegar los desafíos de la vida con claridad y confianza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
