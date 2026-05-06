"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";

const MAPS_LINK = "https://maps.app.goo.gl/XVTSpYJmpdaZk1VJ6";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Barrio+El+Molino+Rold%C3%A1n&output=embed";

export default function Ubicacion() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      id="ubicacion"
      className="relative w-full overflow-hidden py-16 px-6 md:py-24 md:px-12"
    >
      {/* Imagen de fondo con parallax */}
      <motion.div
        aria-hidden="true"
        style={{
          y,
          backgroundImage: "url('/assets/Galeria-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute -inset-y-[15%] inset-x-0"
      />
      {/* Velo oscuro con gradiente */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto w-full max-w-md md:max-w-4xl flex flex-col items-center"
      >
        <h2
          className="text-3xl md:text-6xl font-serif text-white mb-3 md:mb-4 text-center leading-tight"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
        >
          Ubicación
        </h2>
        <p
          className="text-base md:text-lg text-white text-center mb-8 md:mb-12 leading-relaxed"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
        >
          A tan solo 20 minutos de la ciudad de Rosario.
        </p>

        {/* Mapa embebido - estático (sin interacción) */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/30">
          <iframe
            src={MAPS_EMBED}
            title="Ubicación de El Molino"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 pointer-events-none"
            allowFullScreen
          />
          {/* Capa transparente para bloquear interacción */}
          <div className="absolute inset-0 bg-transparent" aria-hidden="true" />
        </div>

        {/* Botón abrir en Google Maps */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-10 inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-6 py-3.5 text-base md:text-lg font-light text-neutral-800 hover:bg-neutral-100 transition active:scale-[0.99]"
        >
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          Cómo llegar
        </a>
      </motion.div>
    </section>
  );
}
