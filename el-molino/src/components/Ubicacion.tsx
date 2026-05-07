"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/XVTSpYJmpdaZk1VJ6";
const CONOCE_MAS_LINK = "https://www.youtube.com/watch?v=a1gidzdkubE";

// t=k activa vista satelital (Google Earth)
const MAPS_EMBED =
  "https://www.google.com/maps?q=Barrio+El+Molino+Rold%C3%A1n&t=k&output=embed";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="w-full bg-white">

      {/* Bloque superior: título + descripción + botón */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl px-6 py-16 md:py-20 flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">
          Ubicación
        </h2>

        <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-3 max-w-xl">
          <span className="font-bold text-neutral-900">El Molino</span> se encuentra rodeado de
          barrios ya consolidados, a tan solo 20 minutos de Rosario.
        </p>
        <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
          Acceso directo desde la autopista Rosario–Córdoba, en el corazón de Roldán.
        </p>

        <a
          href={CONOCE_MAS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex cursor-pointer items-center justify-center border border-[#48563c] px-8 py-3 text-base font-medium text-[#48563c] hover:bg-[#48563c] hover:text-white transition-colors duration-200 active:scale-[0.99]"
        >
          Conocé más
        </a>
      </motion.div>

      {/* Mapa satelital a ancho completo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative w-full h-[420px] md:h-[540px]"
      >
        <iframe
          src={MAPS_EMBED}
          title="Ubicación de El Molino"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
          allowFullScreen
        />
        {/* Botón superpuesto para abrir en Google Maps */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 right-5 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg text-sm font-medium text-neutral-800 hover:bg-white transition"
        >
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          Cómo llegar
        </a>
      </motion.div>

    </section>
  );
}
