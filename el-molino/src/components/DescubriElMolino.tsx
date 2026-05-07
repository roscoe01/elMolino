"use client";

import { motion } from "framer-motion";
import { FileCheck, Zap, Waves, MapPin } from "lucide-react";

type Card = {
  category: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  image?: string;
  images?: [string, string]; // para tarjeta con dos fotos horizontales
};

const cards: Card[] = [
  {
    category: "Escrituración",
    title: "Escrituración\ninmediata.",
    subtitle: "Comenzá a construir tu proyecto de inmediato.",
    image: "/assets/estancia.png",
    icon: FileCheck,
  },
  {
    category: "Servicios",
    title: "Todos los\nservicios.",
    subtitle: "Electricidad, agua con planta\npotabilizadora y gas natural.",
    image: "/assets/Galeria-2.jpg",
    icon: Zap,
  },
  {
    category: "Área social",
    title: "Pileta, canchas\ny más.",
    subtitle: "Semiolímpica, tenis, gimnasio,\nvestuarios y quincho.",
    image: "/assets/pileta.png",
    icon: Waves,
  },
  {
    category: "Ubicación",
    title: "A 20 min\nde Rosario.",
    subtitle: "Sin expensas.\nAlumbrado público en calles.",
    image: "/assets/Galeria-4.jpg",
    icon: MapPin,
  },
];

export default function DescubriElMolino() {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-10 md:mb-14 leading-tight">
          Descubrí el Molino.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[9/16] md:aspect-[9/14] rounded-2xl overflow-hidden group cursor-default select-none"
              >
                {/* Fondo: una o dos fotos horizontales */}
                {card.images ? (
                  <div className="absolute inset-0 flex flex-col">
                    <div
                      className="w-full h-1/2 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${card.images[0]}')` }}
                    />
                    <div
                      className="w-full h-1/2 bg-cover bg-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${card.images[1]}')` }}
                    />
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                )}

                {/* Overlay oscuro para contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

                {/* Texto superior */}
                <div className="absolute top-4 left-4 right-4">
                  <p className="text-xs md:text-sm font-medium text-white/80 tracking-wide">
                    {card.category}
                  </p>
                  <h3
                    className="mt-1 text-xl md:text-2xl font-bold text-white leading-tight whitespace-pre-line"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Texto inferior */}
                <div className="absolute bottom-10 left-4 right-4">
                  <p
                    className="text-xs md:text-sm text-white/85 leading-snug whitespace-pre-line"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                  >
                    {card.subtitle}
                  </p>
                </div>

                {/* Icono abajo a la derecha */}
                <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/40">
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
