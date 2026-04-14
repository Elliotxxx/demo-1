import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/LOGO_MS (1).svg";
import brandText from "../assets/MS_equilibrio_interno_slogan.svg";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full relative transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100 h-20'
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Clínica MS"
                className="w-full h-full object-cover"
              />
            </div>

            <img
              src={brandText}
              alt="MS Psicoterapia – Equilibrio interno"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5215525608725?text=Hola,%20quiero%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-primary hover:bg-secondary text-white px-7 py-3 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
            >
              Agenda tu sesión
            </a>

            <button
              className="md:hidden p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-serif text-stone-600 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5215525608725?text=Hola,%20quiero%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-4 rounded-xl font-medium mt-4 text-center"
            >
              Agenda
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;