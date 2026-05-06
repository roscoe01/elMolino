import Hero from "@/components/Hero";
import QueEsElMolino from "@/components/QueEsElMolino";
import Mapa from "@/components/Mapa";
import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mapa />
      <Ubicacion />
      <Contacto />
    </main>
  );
}
