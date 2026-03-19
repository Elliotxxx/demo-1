import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

import ubi from "../assets/ubi.png";
import logo from "../assets/LOGO_MS (1).svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-stone-200 pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* 🔵 BRAND */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                <img
                  src={logo}
                  alt="MS Psicoterapia"
                  className="w-9 h-9 object-contain"
                />
              </div>

              <div>
                <span className="text-xl font-serif text-primary block leading-none">
                  MS
                </span>
                <span className="text-xs tracking-widest text-stone-500 uppercase">
                  Psicoterapia
                </span>
              </div>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed">
              Un espacio seguro de acompañamiento emocional. Atención profesional,
              cercana y enfocada en tu bienestar.
            </p>

            {/* REDES */}
            <div className="flex gap-4">

              <a
                href="https://msdemo1.netlify.app"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition"
              >
                <Globe size={18} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://wa.me/525525608725?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20las%20sesiones%20de%20psicoterapia"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition"
              >
                <MessageCircle size={18} />
              </a>

            </div>
          </div>

          {/* 🔗 LINKS */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Enlaces
            </h4>

            <ul className="flex flex-col gap-4">
              <li>
                <a href="#nosotros" className="text-stone-500 hover:text-primary text-sm transition">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-stone-500 hover:text-primary text-sm transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-stone-500 hover:text-primary text-sm transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* 📞 CONTACTO */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Contacto
            </h4>

            <ul className="flex flex-col gap-4 text-sm text-stone-500">

              <li className="flex gap-4">
                <MapPin size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-stone-700 font-medium">
                    Melesio Morales #2-A
                  </p>
                  <p>Ciudad Satélite, Naucalpan</p>
                  <p>Estado de México</p>
                </div>
              </li>

              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-primary" />
                <a href="tel:+525525608725" className="hover:text-primary">
                  (+52) 55 2560 8725
                </a>
              </li>

              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:ms.psicoterapia.mx@gmail.com"
                  className="hover:text-primary break-all"
                >
                  ms.psicoterapia.mx@gmail.com
                </a>
              </li>

              <li className="flex gap-4 items-center">
                <MessageCircle size={18} className="text-primary" />
                <a
                  href="https://wa.me/525525608725?text=Hola,%20me%20gustaría%20recibir%20información"
                  target="_blank"
                  className="hover:text-primary"
                >
                  WhatsApp directo
                </a>
              </li>

            </ul>
          </div>

          {/* 📍 MAPA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Ubicación
            </h4>

            <a
              href="https://maps.app.goo.gl/JMDKhMkEAiPPxgqS6?g_st=ic"
              target="_blank"
              className="block w-full h-56 rounded-3xl overflow-hidden relative shadow-inner group hover:scale-[1.02] transition"
            >
              <img
                src={ubi}
                className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                  <MapPin size={24} fill="currentColor" />
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* 🔻 FOOTER FINAL */}
        <div className="border-t border-stone-200 pt-8 text-center text-xs text-stone-400">
          © 2024 MS Psicoterapia · Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
};

export default Footer;