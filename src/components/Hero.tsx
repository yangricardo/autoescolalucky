import { FaArrowDown } from "react-icons/fa6";

export const Hero = () => (
  <section className="bg-lucky-blue text-white">
    <div className="container mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Quer tirar sua CNH?</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-yellow-300">Orçamento apertado não é mais desculpa! Na Autoescola Lucky, você realiza seu sonho com as melhores condições.</p>
      <a href="#promocoes" className="bg-lucky-yellow text-lucky-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 inline-flex items-center">
        Ver Promoções <FaArrowDown className="h-5 w-5 ml-2" />
      </a>
    </div>
  </section>
);
