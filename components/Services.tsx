import React from 'react';
import { Shield } from 'lucide-react';
import { ServiceCardProps } from '../types';
import { HeartPulse } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { CloudRain } from "lucide-react";
import { User } from "lucide-react";
import { Ribbon } from "lucide-react";
import { Bandage } from "lucide-react";

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-background-light p-10 rounded-[2rem] min-h-[320px] h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-stone-100 group flex flex-col">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
      {icon}
    </div>

    <h4 className="text-2xl font-serif text-primary mb-4 leading-tight min-h-[64px]">
      {title}
    </h4>

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
      description: "Sesiones uno a uno en Ciudad Satélite para explorar tus pensamientos y sentimientos en un espacio seguro, confidencial y adaptado a tu crecimiento personal."
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
      icon: <Ribbon size={30} strokeWidth={1.5} />,
      title: "Atención a pacientes oncológicos",
      description: "Acompañamiento emocional durante el proceso oncológico, fortaleciendo el bienestar y la resiliencia."
    },
    {
      icon: <Bandage size={30} strokeWidth={1.5} />,
      title: "Trauma Complejo y Abuso",
      description: "Atención especializada para personas que han vivido experiencias de abuso o trauma complejo, brindando un espacio seguro para procesar, sanar y recuperar el bienestar emocional."
    }
  ];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
            Terapia en Ciudad Satélite
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Psicoterapia personalizada
          </h2>

          <p className="text-lg text-stone-600 font-light">
            Si buscas psicólogos en Ciudad Satélite, en Psicología MS encontrarás tratamientos especializados para navegar los desafíos de la vida con claridad y confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={idx === services.length - 1 ? "lg:col-start-2 h-full" : "h-full"}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
