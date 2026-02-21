
import React from 'react';
import { Brain, Users, Leaf, Baby, Shield, Smile } from 'lucide-react';
import { ServiceCardProps } from '../types';
import {  HeartPulse } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { CloudRain } from "lucide-react";
import { User } from "lucide-react";


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
  icon: <User size={30} strokeWidth={1.5} />,
  title: "Terapia Individual",
  description: "Sesiones uno a uno para explorar tus pensamientos y sentimientos en un espacio seguro y confidencial adaptado a tu crecimiento personal."
},
    {
  icon: <HeartPulse size={30} strokeWidth={1.5} />,
  title: "Manejo de Ansiedad",
  description: "Aprende a controlar la ansiedad mediante técnicas efectivas, regulación emocional y acompañamiento profesional."
},
    {
  icon: <Shield size={30} strokeWidth={1.5} />,
  title: "Regulación Emocional",
  description: "Desarrolla resiliencia y aprende a gestionar tus emociones de forma saludable frente a los desafíos de la vida."
},
    {
  icon: <CloudRain size={30} strokeWidth={1.5} />,
  title: "Depresión",
  description: "Acompañamiento profesional para comprender y superar la depresión, fortaleciendo el bienestar emocional y la calidad de vida."
},
   {
  icon: <MessageCircle size={30} strokeWidth={1.5} />,
  title: "Comunicación No Violenta",
  description: "Aprende a expresar tus emociones y necesidades de forma clara y respetuosa, fortaleciendo tus relaciones personales."
},
    {
  icon: <Brain size={30} strokeWidth={1.5} />,
  title: "Concentración y Memoria",
  description: "Mejora tu enfoque y claridad mental, fortaleciendo la memoria y tu rendimiento en las actividades diarias."
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
