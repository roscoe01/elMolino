import Hero from "@/components/Hero";
import QueEsElMolino from "@/components/QueEsElMolino";
import DescubriElMolino from "@/components/DescubriElMolino";
import Mapa from "@/components/Mapa";
import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <DescubriElMolino />
      <Mapa />
      <Ubicacion />
      <Contacto />
      <Footer />
    </main>
  );
}
