import { FaCheckCircle } from "react-icons/fa";

export const Training = () => (
  <section id="habilitados" className="py-20 bg-white select-none">
    <div className="container mx-auto px-6 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Já tem CNH mas não dirige?</h2>
        <p className="text-lg text-gray-600 mb-6">Chegou a hora de vencer o medo e dominar o volante com confiança! Oferecemos aulas para habilitados com o melhor instrutor do Rio.</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center group">
            <FaCheckCircle className="h-6 w-6 text-blue-800 mt-1 mr-3 flex-shrink-0 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            <span><strong>Prática Real:</strong> Enfrente situações reais do trânsito.</span>
          </li>
          <li className="flex items-center group"><FaCheckCircle className="h-6 w-6 text-blue-800 mt-1 mr-3 flex-shrink-0 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /><span><strong>Atendimento Humanizado:</strong> Respeitamos seu tempo e seus medos.</span></li>
          <li className="flex items-center group"><FaCheckCircle className="h-6 w-6 text-blue-800 mt-1 mr-3 flex-shrink-0 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /><span><strong>Evolução de Verdade:</strong> Sinta sua confiança aumentar a cada aula.</span></li>
        </ul>
        <div className="bg-yellow-100 border-l-4 border-yellow-300 p-4 rounded-r-lg">
          <p className="text-xl font-bold">Pacotes a partir de <span className="text-blue-800 text-3xl">R$79,90</span> por aula.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src="https://placehold.co/600x400/0045b3/ffffff?text=Vença+o+medo+de+dirigir" alt="Mulher feliz dirigindo um carro" className="rounded-lg shadow-xl w-full h-auto" />
      </div>
    </div>
  </section>
);