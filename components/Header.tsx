
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/LOGO_MS (1).svg";

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100 h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer group">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                  alt="Clínica MS"
                  className="w-full h-full object-cover"
/>
</div>
            <div className="flex flex-col">
              <h1 className="text-xl font-serif font-bold tracking-wide text-primary">Clínica MS</h1>
              <span className="text-[10px] text-stone-500 tracking-widest uppercase">Psicoterapia</span>
            </div>
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
            <button className="hidden sm:flex bg-primary hover:bg-secondary text-white px-7 py-3 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95">
              Agenda tu sesión
            </button>
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
        <div className="md:hidden bg-white border-b border-stone-200 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-4">
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
            <button className="bg-primary text-white py-4 rounded-xl font-medium mt-4">
              Agenda tu sesión
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
