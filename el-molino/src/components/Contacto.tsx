"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

const WEB3FORMS_KEY = "af8430c6-e583-4712-8a3b-e0bbe484bf18"; // reemplaza esto
const WHATSAPP_NUMERO = "5493413524459"; // y esto

type EstadoEnvio = "idle" | "enviando" | "exito" | "error";

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.638 3.41 4.547 4.475.616.343 2.54 1.196 3.225 1.196.387 0 .98-.13 1.31-.288.5-.244 1.282-.748 1.41-1.34.04-.18.04-.374.04-.567-.043-.474-2.812-1.262-3.085-1.262zm-2.96 7.137a9.31 9.31 0 0 1-5.05-1.482L7.6 23.946l1.122-3.36a9.39 9.39 0 0 1-1.79-5.526c0-5.18 4.218-9.398 9.398-9.398 5.18 0 9.398 4.218 9.398 9.398 0 5.18-4.218 9.398-9.398 9.398zm0-20.74C9.967 3.6 4.65 8.918 4.65 15.46c0 2.106.563 4.18 1.625 5.987L4 27.6l5.32-1.8a11.808 11.808 0 0 0 5.83 1.583h.005c6.543 0 11.86-5.317 11.86-11.86 0-3.16-1.232-6.18-3.474-8.42a11.84 11.84 0 0 0-8.39-3.51z" />
    </svg>
  );
}

export default function Contacto() {
  const [estado, setEstado] = useState<EstadoEnvio>("idle");

  const linkWhatsapp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    "Hola, quisiera mas informacion sobre El Molino."
  )}`;

  const inputClass =
    "w-full bg-white border border-neutral-300 rounded-md px-4 py-3.5 md:py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition disabled:opacity-60";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("enviando");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setEstado("exito");
        (e.target as HTMLFormElement).reset();
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  return (
    <section
      id="contacto"
      className="relative w-full bg-white py-16 px-8 md:py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto w-full max-w-xs md:max-w-lg"
      >
        <h2 className="text-3xl md:text-6xl font-serif text-neutral-900 mb-4 text-center leading-tight whitespace-nowrap">
          Envianos tu consulta
        </h2>
        <p className="text-base md:text-lg text-neutral-600 text-center mb-8 md:mb-12 leading-relaxed">
          Completa el formulario y te respondemos por correo.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
          <input
            type="hidden"
            name="subject"
            value="Nueva consulta - El Molino"
          />
          <input type="hidden" name="from_name" value="Sitio El Molino" />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            autoComplete="name"
            disabled={estado === "enviando"}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
            inputMode="email"
            disabled={estado === "enviando"}
            className={inputClass}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Telefono"
            autoComplete="tel"
            inputMode="tel"
            disabled={estado === "enviando"}
            className={inputClass}
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={4}
            required
            disabled={estado === "enviando"}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-neutral-500 px-6 py-3.5 text-base md:text-lg font-light text-neutral-50 hover:bg-neutral-600 transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {estado === "enviando" ? "Enviando..." : "Enviar"}
          </button>

          {estado === "exito" && (
            <p className="text-center text-sm text-green-600 mt-2">
              Gracias! Tu consulta fue enviada. Te respondemos a la brevedad.
            </p>
          )}
          {estado === "error" && (
            <p className="text-center text-sm text-red-600 mt-2">
              Hubo un error. Proba de nuevo o escribinos por WhatsApp.
            </p>
          )}
        </form>

        <div className="my-10 md:my-12 flex items-center gap-3 md:gap-4">
          <span className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            o si preferis
          </span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base md:text-lg font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#1ebe57] transition active:scale-[0.99]"
        >
          <WhatsappIcon className="w-6 h-6" />
          <span>Escribinos por WhatsApp</span>
        </a>
      </motion.div>
    </section>
  );
}
