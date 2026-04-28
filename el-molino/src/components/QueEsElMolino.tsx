"use client";

import { motion } from "framer-motion";

export default function QueEsElMolino() {
  return (
    <section
      className="relative w-full h-[90vh]"
      style={{
        backgroundImage: "url('/assets/fondo_arboles.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute right-6 top-8 md:right-16 md:top-12 max-w-[260px] md:max-w-xl lg:max-w-2xl text-right z-10"
      >
        <h2 className="text-3xl md:text-6xl font-serif text-[#f0e8c8] mb-4 leading-tight">
          ¿Qué es El Molino?
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-[#e0d8b8] leading-relaxed">
          Disfrutar la brisa entre los árboles. Apreciar los colores del
          arcoiris tras la lluvia. Compartir un asado con familia y amigos.
          Ver abrir las flores que plantaste. Aire, agua, fuego y tierra.
          Los cuatro elementos de la naturaleza, a tu alcance.
        </p>
      </motion.div>
    </section>
  );
}