import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import logo from "../assets/LOGO_MS (1).svg";

const Contact: React.FC = () => {
  return (
    <section
      id="contacto"
      className="py-24 bg-background-light relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Estoy aquí para acompañarte
          </h2>

          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Si deseas agendar una sesión o recibir más información, puedes
            contactarme por cualquiera de los siguientes medios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Tarjeta izquierda */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>

            {/* Encabezado con logo */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center p-3 shrink-0">
                <img
                  src={logo}
                  alt="Psicoterapia MS"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.22em] text-secondary font-bold mb-1">
                  Psicoterapia MS
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-primary leading-tight">
                  Espacio de acompañamiento emocional
                </h3>
              </div>
            </div>

            {/* Información */}
            <div className="space-y-6 text-stone-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <MapPin size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Dirección</p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Melesio Morales #2-A, Int. 2
                    <br />
                    Ciudad Satélite, Naucalpan de Juárez
                    <br />
                    Estado de México, C.P. 53100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Phone size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Teléfono</p>
                  <p className="text-sm text-stone-600">(+52) 55 2560 8725</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Mail size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Correo electrónico</p>
                  <p className="text-sm text-stone-600">analizate4@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-10">
              <p className="text-sm font-semibold text-primary mb-4">
                Redes y contacto directo
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/525525608725"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <MessageCircle
                      className="text-primary"
                      size={22}
                      strokeWidth={1.8}
                    />
                    <ArrowUpRight
                      size={18}
                      className="text-stone-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                  <p className="font-semibold text-primary">WhatsApp</p>
                  <p className="text-xs text-stone-500 mt-1">
                    Escríbeme directamente
                  </p>
                </a>

                <a
                  href="https://instagram.com/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Instagram
                      className="text-primary"
                      size={22}
                      strokeWidth={1.8}
                    />
                    <ArrowUpRight
                      size={18}
                      className="text-stone-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                  <p className="font-semibold text-primary">Instagram</p>
                  <p className="text-xs text-stone-500 mt-1">@tuusuario</p>
                </a>

                <a
                  href="https://facebook.com/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Facebook
                      className="text-primary"
                      size={22}
                      strokeWidth={1.8}
                    />
                    <ArrowUpRight
                      size={18}
                      className="text-stone-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                  <p className="font-semibold text-primary">Facebook</p>
                  <p className="text-xs text-stone-500 mt-1">Psicoterapia MS</p>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta derecha */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-stone-100 p-8 md:p-10 flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Presentación virtual
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
              Un espacio seguro y cercano para ti
            </h3>

            <div className="space-y-4 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                Acompaño procesos emocionales desde un enfoque humano,
                respetuoso y confidencial.
              </p>

              <p>
                Si buscas un espacio para comprender lo que sientes, sanar y
                avanzar con mayor claridad, estaré aquí para acompañarte.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/525525608725"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Agendar por WhatsApp
              </a>

              <a
                href="mailto:analizate4@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-primary/20 text-primary px-8 py-4 font-semibold hover:bg-primary/5 transition-all"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;