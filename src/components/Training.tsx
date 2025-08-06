import { FaCheckCircle } from "react-icons/fa";

export const Training = () => (
  <section id="habilitados" className="py-20 bg-white select-none">
    <div className="container mx-auto px-6 flex flex-wrap items-center">
      <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Já tem CNH mas não dirige?</h2>
        <p className="text-lg text-gray-600 mb-6">Chegou a hora de vencer o medo e dominar o volante com confiança! Oferecemos aulas para habilitados com o melhor instrutor do Rio.</p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center group">
            <FaCheckCircle className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
            <span><strong>Prática Real:</strong> Enfrente situações reais do trânsito.</span>
          </li>
          <li className="flex items-center group"><FaCheckCircle className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /><span><strong>Atendimento Humanizado:</strong> Respeitamos seu tempo e seus medos.</span></li>
          <li className="flex items-center group"><FaCheckCircle className="h-6 w-6 text-secondary mt-1 mr-3 flex-shrink-0 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300" /><span><strong>Evolução de Verdade:</strong> Sinta sua confiança aumentar a cada aula.</span></li>
        </ul>
        <div className="bg-yellow-100 border-l-4 border-primary p-4 rounded-r-lg">
          <p className="text-xl font-bold">Pacotes a partir de <span className="text-secondary text-3xl">R$79,90</span> por aula.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="/image-car.webp"
          alt="Motorista recebendo orientação"
          title="Motorista recebendo orientação"
          className="rounded-xl shadow-xl w-full h-auto hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-300"
        />
        <p className="text-xs text-gray-400 mt-2 text-right">
          Foto por{" "}
          <a
            href="https://unsplash.com/pt-br/fotografias/duas-pessoas-que-andam-de-veiculo-durante-o-dia-_c7haaSAcIg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondary"
          >
            Tim Foster no Unsplash
          </a>
        </p>
      </div>
    </div>
  </section>
);