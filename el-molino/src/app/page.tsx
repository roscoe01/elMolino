import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Acá van a ir las otras secciones */}
      <section className="h-screen bg-white" />
    </main>
  );
}