
import React from 'react';
import { MapPin, Phone, Mail, Globe, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-stone-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="font-serif italic font-bold">ms</span>
              </div>
              <span className="text-2xl font-serif text-primary">Clínica MS</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              Cuidado compasivo para un mañana mejor. Nos dedicamos a proporcionar servicios de salud mental de la más alta calidad y calidez humana.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Enlaces Rápidos</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="text-stone-500 hover:text-primary text-sm font-medium transition-colors" href="#">Sobre Nosotros</a></li>
              <li><a className="text-stone-500 hover:text-primary text-sm font-medium transition-colors" href="#">Nuestros Servicios</a></li>
              <li><a className="text-stone-500 hover:text-primary text-sm font-medium transition-colors" href="#">Recursos</a></li>
              <li><a className="text-stone-500 hover:text-primary text-sm font-medium transition-colors" href="#">Carreras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Contáctanos</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4 text-stone-500 text-sm group">
                <MapPin size={18} className="text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Av. Reforma 123, Oficina 400<br/>Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center gap-4 text-stone-500 text-sm group">
                <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span>(55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-4 text-stone-500 text-sm group">
                <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span>hola@clinicams.com</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-56 rounded-3xl overflow-hidden bg-stone-200 relative shadow-inner group">
            <img 
              alt="Ubicación" 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                <MapPin size={24} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-xs">© 2024 Clínica de Psicoterapia MS. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a className="text-stone-400 hover:text-primary text-xs font-medium transition-colors" href="#">Política de Privacidad</a>
            <a className="text-stone-400 hover:text-primary text-xs font-medium transition-colors" href="#">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
