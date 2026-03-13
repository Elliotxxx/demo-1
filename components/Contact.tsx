import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import acuaazul from "../assets/LOGO_MS (1).svg";

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-background-light relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
            Contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Estoy aquí para acompañarte
          </h2>

          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Si deseas agendar una sesión, resolver alguna duda o conocer más
            sobre mi trabajo, puedes escribirme por el medio que te resulte más
            cómodo. Será un gusto atenderte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-sage-light/70 flex items-center justify-center shadow-sm">
                <img
                  src={acuaazul}
                  alt="Psicoterapia MS"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-secondary font-bold">
                  Psicoterapia MS
                </p>
                <h3 className="text-2xl font-serif text-primary">
                  Espacio de acompañamiento emocional
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-stone-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <MapPin size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Ubicación</p>
                  <p className="text-sm leading-relaxed text-stone-600">
                    Pachuca, Hidalgo, México
                    <br />
                    Atención presencial y en línea
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Phone size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Teléfono</p>
                  <p className="text-sm text-stone-600">+52 771 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Mail size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Correo electrónico</p>
                  <p className="text-sm text-stone-600">contacto@psicoterapiams.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Clock3 size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Horario de atención</p>
                  <p className="text-sm text-stone-600">
                    Lunes a Viernes · 9:00 AM a 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm font-semibold text-primary mb-4">
                Redes y contacto directo
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/527710000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <MessageCircle className="text-primary" size={22} strokeWidth={1.8} />
                    <ArrowUpRight
                      size={18}
                      className="text-stone-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                  <p className="font-semibold text-primary">WhatsApp</p>
                  <p className="text-xs text-stone-500 mt-1">Escríbeme directamente</p>
                </a>

                <a
                  href="https://instagram.com/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Instagram className="text-primary" size={22} strokeWidth={1.8} />
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
                    <Facebook className="text-primary" size={22} strokeWidth={1.8} />
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

          <div className="bg-white rounded-[2.5rem] shadow-xl border border-stone-100 p-8 md:p-10">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Presentación virtual
            </span>

            <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
              Un espacio seguro, humano y profesional para ti
            </h3>

            <div className="space-y-5 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                Mi trabajo está enfocado en acompañarte con empatía, respeto y
                confidencialidad. Cada proceso terapéutico es único, por eso la
                atención se adapta a tu historia, tus emociones y tus necesidades.
              </p>

              <p>
                Puedes acercarte si estás atravesando ansiedad, tristeza,
                dificultad para regular tus emociones, experiencias de abuso,
                trauma complejo o simplemente si necesitas un espacio para
                comprenderte mejor.
              </p>

              <p>
                La terapia puede ser el comienzo de un proceso de cambio,
                claridad y bienestar. Estoy aquí para acompañarte paso a paso.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/527710000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Agendar por WhatsApp
              </a>

              <a
                href="mailto:contacto@psicoterapiams.com"
                className="inline-flex items-center justify-center rounded-full border border-primary/20 text-primary px-8 py-4 font-semibold hover:bg-primary/5 transition-all"
              >
                Enviar correo
              </a>
            </div>

            <div className="mt-10 rounded-[2rem] bg-sage-light/40 border border-primary/10 p-6">
              <p className="text-primary font-semibold mb-2">
                Sugerencia para esta sección
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Aquí también puedes incluir un mapa, testimonios breves,
                preguntas frecuentes o una guía para tu primera sesión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;