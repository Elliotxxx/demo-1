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
import logo128 from "../assets/ms-individual-128.webp";
import logo256 from "../assets/ms-individual-256.webp";

const Contact: React.FC = () => {
  return (
    <section
      id="contacto"
      className="py-24 bg-background-light relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] aspect-square bg-primary/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
            Contacto en Ciudad Satélite
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Psicología MS en Ciudad Satélite
          </h2>

          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Si deseas agendar terapia en Ciudad Satélite o recibir más información,
            puedes contactarme por cualquiera de los siguientes medios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Tarjeta izquierda */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>

            {/* Encabezado */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center p-3 shrink-0">
                <picture className="block w-full h-full">
                  <source type="image/webp" srcSet={`${logo128} 128w, ${logo256} 256w`} sizes="80px" />
                  <img
                    src={logo256}
                    alt="Psicología MS en Ciudad Satélite"
                    width={1038}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </picture>
              </div>

              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.22em] text-secondary font-bold mb-1">
                  Psicología MS
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-primary leading-tight">
                  Atención psicológica en Ciudad Satélite
                </h3>
              </div>
            </div>

            {/* Información */}
            <div className="space-y-6 text-stone-700">

              {/* Dirección */}
              <a
                href="https://maps.app.goo.gl/r8HjLwTejhRTpZcz8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer hover:bg-white/50 p-2 rounded-xl transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition">
                  <MapPin size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-semibold text-primary group-hover:underline">
                    Dirección
                  </p>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    Melesio Morales #2-A, Int. 2
                    <br />
                    Ciudad Satélite, Naucalpan de Juárez
                    <br />
                    Estado de México, C.P. 53100
                  </p>
                </div>
              </a>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Phone size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Teléfono</p>
                  <a
                    href="tel:+525525608725"
                    className="text-sm text-stone-600 hover:text-primary transition"
                  >
                    (+52) 55 2560 8725
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-background-light flex items-center justify-center text-primary shrink-0">
                  <Mail size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Correo electrónico</p>
                  <a
                    href="mailto:ms.psicoterapia.mx@gmail.com"
                    className="text-sm text-stone-600 hover:text-primary transition break-all"
                  >
                    ms.psicoterapia.mx@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-10">
              <p className="text-sm font-semibold text-primary mb-4">
                Redes y contacto directo
              </p>

              <div className="grid sm:grid-cols-3 gap-4">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/525525608725?text=Hola,%20me%20gustaría%20recibir%20más%20información"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <MessageCircle className="text-primary" size={22} strokeWidth={1.8} />
                    <ArrowUpRight size={18} className="text-stone-400 group-hover:text-primary transition" />
                  </div>
                  <p className="font-semibold text-primary">WhatsApp</p>
                  <p className="text-xs text-stone-500 mt-1">Escríbeme directamente</p>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/ms.psicoterapia.mx"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Instagram className="text-primary" size={22} strokeWidth={1.8} />
                    <ArrowUpRight size={18} className="text-stone-400 group-hover:text-primary transition" />
                  </div>
                  <p className="font-semibold text-primary">Instagram</p>
                  <p className="text-xs text-stone-500 mt-1">@ms.psicoterapia.mx</p>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1ACojn29e8/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-stone-200 bg-white p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Facebook className="text-primary" size={22} strokeWidth={1.8} />
                    <ArrowUpRight size={18} className="text-stone-400 group-hover:text-primary transition" />
                  </div>
                  <p className="font-semibold text-primary">Facebook</p>
                  <p className="text-xs text-stone-500 mt-1">MS Equilibrio Interno</p>
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
              Un espacio seguro de terapia para ti
            </h3>

            <div className="space-y-4 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                Acompaño procesos emocionales desde un enfoque humano,
                respetuoso y confidencial en Ciudad Satélite.
              </p>

              <p>
                Si buscas un espacio para comprender lo que sientes, sanar y
                avanzar con mayor claridad, estaré aquí para acompañarte.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/525525608725?text=Hola,%20me%20gustaría%20recibir%20más%20información"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Agendar por WhatsApp
              </a>

              <a
                href="mailto:ms.psicoterapia.mx@gmail.com"
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
