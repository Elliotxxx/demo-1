import React from "react";
import {
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Music2,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";

import logo from "../assets/MS_individual (1).svg";
import brandText from "../assets/MS_equilibrio_interno_slogan.svg";

const DigitalCard: React.FC = () => {
  return (
    <section
      id="tarjeta"
      className="min-h-screen bg-background-light relative overflow-hidden py-24 px-4"
    >
      <div className="absolute inset-0 bg-pattern pointer-events-none"></div>

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"></div>

      <div className="relative max-w-xl mx-auto">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/70 p-8 md:p-10 overflow-hidden relative animate-fade-in">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-ping"></div>

              <div className="relative w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center p-3 border border-primary/10">
                <img
                  src={logo}
                  alt="Psicología MS en Ciudad Satélite"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <img
              src={brandText}
              alt="Psicología MS Equilibrio Interno Psicoterapia"
              decoding="async"
              className="h-14 w-auto object-contain mb-6"
            />

            <span className="inline-flex items-center gap-2 bg-sage-light px-5 py-2 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles size={16} />
              Tarjeta digital
            </span>

            <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-4">
              Psicoterapia profesional
            </h1>

            <p className="text-stone-600 font-light leading-relaxed mb-8 max-w-md">
              Un espacio seguro, humano y confidencial para acompañarte a encontrar tu equilibrio interno.
            </p>
          </div>

          <div className="grid gap-4">
            <a
              href="tel:+525525608725"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Phone size={24} />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-sm opacity-80">(+52) 55 2560 8725</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="https://wa.me/525525608725?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20sesiones%20de%20psicoterapia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={24} />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-80">Enviar mensaje directo</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="mailto:ms.psicoterapia.mx@gmail.com"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Mail size={24} />
                <div>
                  <p className="font-semibold">Correo</p>
                  <p className="text-sm opacity-80 break-all">
                    ms.psicoterapia.mx@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="https://psicoterapiams.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Globe size={24} />
                <div>
                  <p className="font-semibold">Sitio web</p>
                  <p className="text-sm opacity-80">psicoterapiams.com</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="https://instagram.com/ms.psicoterapia.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Instagram size={24} />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm opacity-80">@ms.psicoterapia.mx</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="https://www.facebook.com/share/1ACojn29e8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Facebook size={24} />
                <div>
                  <p className="font-semibold">Facebook</p>
                  <p className="text-sm opacity-80">MS Equilibrio Interno</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="https://www.tiktok.com/@ms.psicoterapia.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Music2 size={24} />
                <div>
                  <p className="font-semibold">TikTok</p>
                  <p className="text-sm opacity-80">@ms.psicoterapia.mx</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>

            <a
              href="https://maps.app.goo.gl/r8HjLwTejhRTpZcz8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-background-light hover:bg-primary hover:text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <MapPin size={24} />
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-sm opacity-80">Ver en Google Maps</p>
                </div>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-stone-400">
              MS Equilibrio Interno · Psicoterapia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCard;
