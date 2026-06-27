"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

const IMAGEN_FONDO = "/assets/mapaFondo.jpg";
const PLANO_PDF = "/assets/Plano El Molino 5426.pdf";
const PLANO_PDF_ENCODED = "/assets/Plano%20El%20Molino%205426.pdf";

export default function Mapa() {
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState("50% 50%");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
    setZoom((prev) => (prev >= 3 ? 1 : prev + 1));
  };

  const cursor = zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in";

  return (
    <section
      id="mapa"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-10 px-6 md:py-24 md:px-12"
    >
      {/* Fondo con blur */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url('${IMAGEN_FONDO}')`, filter: "blur(12px)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
      >
        <h2
          className="text-3xl md:text-6xl font-serif text-white mb-3 md:mb-4 text-center leading-tight"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
        >
          Conocé el plano
        </h2>
        <p
          className="max-w-md md:max-w-xl text-base md:text-lg text-white text-center leading-relaxed mb-10 md:mb-14"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
        >
          Recorré la distribución del barrio y descubrí cada espacio.
        </p>

        {/* Plano con zoom por click */}
        <div
          onClick={handleClick}
          className={`w-full max-w-[340px] md:max-w-[640px] overflow-hidden rounded-lg shadow-xl ring-1 ring-white/20 ${cursor}`}
        >
          <img
            src="/assets/plano2026.jpg"
            alt="Plano del barrio El Molino"
            draggable={false}
            style={{
              transformOrigin: origin,
              transform: `scale(${zoom})`,
              transition: "transform 0.3s ease-out",
            }}
            className="block w-full h-auto select-none"
          />
        </div>

        {/* Botón descargar PDF */}
        <a
          href={PLANO_PDF}
          download
          className="mt-8 md:mt-10 inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-md bg-white px-6 py-3.5 text-base md:text-lg font-light text-neutral-800 hover:bg-neutral-100 transition active:scale-[0.99]"
        >
          <Download className="w-4 h-4" strokeWidth={1.5} />
          Descargar Plano PDF
        </a>
      </motion.div>
    </section>
  );
}
