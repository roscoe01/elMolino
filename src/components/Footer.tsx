"use client";

import { Phone } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INSTAGRAM = "https://www.instagram.com/elmolinoroldan/";
const YOUTUBE = "https://www.youtube.com/watch?v=a1gidzdkubE";
const TEL_1 = "+543415093583";
const TEL_2 = "+543415021734";
const TEL_1_DISPLAY = "+54 3415 09-3583";
const TEL_2_DISPLAY = "+54 3415 02-1734";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#48563c" }} className="w-full text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">

        {/* Grid: apilado en mobile, 3 columnas en desktop */}
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-3 md:items-center md:gap-8">

          {/* Columna 1: Logo centrado */}
          <div className="flex justify-center">
            <img
              src={`${BASE}/assets/homeLogo.png`}
              alt="El Molino"
              className="object-contain w-[200px] md:w-[260px]"
            />
          </div>

          {/* Columna 2: Redes sociales */}
          <div className="flex justify-center">
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-xs uppercase tracking-widest text-white/50">Seguinos</h3>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-base md:text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5 shrink-0" />
                @elmolinoroldan
              </a>
              <a
                href={YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-base md:text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <YoutubeIcon className="w-5 h-5 shrink-0" />
                El Molino · YouTube
              </a>
            </div>
          </div>

          {/* Columna 3: Teléfonos */}
          <div className="flex justify-center">
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-xs uppercase tracking-widest text-white/50">Contacto</h3>
              <a
                href={`tel:${TEL_1}`}
                className="flex items-center gap-2.5 text-base md:text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                {TEL_1_DISPLAY}
              </a>
              <a
                href={`tel:${TEL_2}`}
                className="flex items-center gap-2.5 text-base md:text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                {TEL_2_DISPLAY}
              </a>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-10 md:mt-12 border-t border-white/15 pt-6 text-xs text-white/30 text-center">
          © {new Date().getFullYear()} El Molino · Roldán, Santa Fe
        </div>

      </div>
    </footer>
  );
}
