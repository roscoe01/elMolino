"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // El fondo se mueve la mitad que el scroll → parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  
  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
    >
      {/* Fondo parallax (por ahora un gradient, después metemos foto) */}
      <motion.div style={{y,backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/fondoMolino.jpg')`,backgroundSize: "cover",backgroundPosition: "center",}}className="absolute inset-0"/>

      {/* Oscurecer un toque para que el logo resalte */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Contenido */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <img
          src={`${BASE}/assets/logo_blanco_home.png`}
          alt="El Molino - Roldán"
          className="w-250 h-auto md:w-[480px] lg:w-[720px]"
        />
        <p className="mt-0 text-xs md:text-sm tracking-[0.3em] uppercase text-white font-light">
          Barrio residencial abierto · Roldán
        </p>

      </motion.div>
    </section>
  );
}