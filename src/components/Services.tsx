import { FaCar, FaUserShield } from "react-icons/fa6";
import { ServiceCard } from "./ServiceCard";

export const Services = () => (
  <section id="servicos" className="py-20 bg-white select-none">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
      <div className="grid lg:grid-cols-2 gap-10">
        <ServiceCard icon={<FaCar />} title="Primeira Habilitação A ou B">
          O caminho completo para você conquistar sua independência. Aulas teóricas e práticas com instrutores qualificados para você dirigir com segurança.
        </ServiceCard>
        <ServiceCard icon={<FaUserShield />} title="Aulas para Habilitados">
          Já tem CNH mas sente medo ou insegurança? Nossas aulas personalizadas vão te ajudar a dominar o volante com confiança e prática real.
        </ServiceCard>
      </div>
    </div>
  </section>
);
