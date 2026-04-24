"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-emerald-800 to-neutral-900" />
      </motion.div>

      {/* Oscurecer un toque para que el logo resalte */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <Image
          src="/assets/logo_blanco_home.png"
          alt="El Molino - Roldán"
          width={500}
          height={250}
          priority
          className="h-32 w-auto md:h-48"
        />
        <p className="mt-8 max-w-xl text-sm text-white/70 md:text-base">
          Barrio residencial abierto · Roldán
        </p>

        <div className="absolute bottom-10 flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="mt-2 h-8 w-px animate-pulse bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}