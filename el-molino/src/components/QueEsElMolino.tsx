"use client";

import { motion } from "framer-motion";

export default function QueEsElMolino() {
  return (
    <section
      className="relative w-full bg-white py-16 px-8 md:py-24 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black"/>
      <div className="relative mx-auto w-full max-w-4xl text-center">
        <h2 className="text-3xl md:text-6xl font-serif text-white mb-4 leading-tight">
          ¿Qué es El Molino?
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-8 md:mb-12 leading-relaxed">
          El Molino es un espacio de coworking ubicado en el corazón de la ciudad, diseñado para fomentar la colaboración y la creatividad entre profesionales de diversas industrias. Con un ambiente moderno y acogedor, ofrecemos una variedad de servicios y comodidades para satisfacer las necesidades de nuestros miembros, desde emprendedores hasta freelancers y pequeñas empresas.
        </p>
      </div>
      <motion.div>
        
      </motion.div>
    </section>
  );
}