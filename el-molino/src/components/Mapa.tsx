"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";

const IMAGEN_FONDO = "/assets/mapaFondo.jpg";
const PLANO_PDF = "/assets/planoPDF.pdf";

export default function Mapa() {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <section
      id="mapa"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-10 px-6 md:py-24 md:px-12"
    >
      {/* Imagen de fondo con blur */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('${IMAGEN_FONDO}')`,
          filter: "blur(12px)",
        }}
      />

      {/* Velo oscuro con gradiente para legibilidad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60"
      />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
      >
        {/* Texto arriba centrado */}
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

        {/* Plano real */}
        <div
          onMouseMove={handleMouseMove}
          className="inline-block w-full max-w-[340px] md:max-w-[640px] overflow-hidden rounded-lg shadow-xl ring-1 ring-white/20 group"
        >
          <img
            ref={imgRef}
            src="/assets/plano_mensura_grande.jpg"
            alt="Plano del barrio El Molino"
            className="block w-full h-auto transition-transform duration-300 ease-out md:group-hover:scale-150"
          />
        </div>

        {/* Botón descargar PDF */}
        <a
          href={PLANO_PDF}
          download
          className="mt-8 md:mt-10 inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-6 py-3.5 text-base md:text-lg font-light text-neutral-800 hover:bg-neutral-100 transition active:scale-[0.99]"
        >
          <Download className="w-4 h-4" strokeWidth={1.5} />
          Descargar Plano PDF
        </a>
      </motion.div>
    </section>
  );
}
