import { useState } from "react";
import NavLink from "./NavLink";
import { FaBars, FaX } from "react-icons/fa6";
import { trackEvent } from "../utils/analytics";

export const Header = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary min-w-[320px] shadow-md sticky top-0 z-50 select-none">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button
          type="button"
          className="group flex items-center focus:outline-none"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={'/logo.webp'}
            alt="Logo Autoescola Lucky"
            className="h-16 w-auto hover:scale-110 transition-transform duration-300 group-hover:scale-110"
          />
        </button>
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink href="#servicos">Serviços</NavLink>
          <NavLink href="#promocoes">Promoções</NavLink>
          <NavLink href="#habilitados">Aulas para Habilitados</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </div>
        <a href="https://wa.me/5521965404054" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block bg-secondary text-white hover:text-yellow-200 font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 hover:scale-110 transition duration-300">
          Fale Conosco
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden transition-transform duration-300"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`inline-block transition-transform duration-300 ${ isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
              }`}
          >
            {isMenuOpen ? (
              <FaX className="h-8 w-8 text-secondary" />
            ) : (
              <FaBars className="h-8 w-8 text-secondary" />
            )}
          </span>
        </button>
      </nav>
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${ isMenuOpen ? 'max-h-96 border-t border-yellow-500' : 'max-h-0' }
        `}
      >
        <div className="bg-primary px-6 pb-4 pt-2 flex flex-col">
          <a href="#servicos" className="block py-2 font-semibold text-secondary hover:text-blue-900">Serviços</a>
          <a href="#promocoes" className="block py-2 font-semibold text-secondary hover:text-blue-900">Promoções</a>
          <a href="#habilitados" className="block py-2 font-semibold text-secondary hover:text-blue-900">Aulas para Habilitados</a>
          <a href="#contato" className="block py-2 font-semibold text-secondary hover:text-blue-900">Contato</a>
          <a href="https://wa.me/5521965404054" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-secondary text-white hover:text-yellow-200 font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition duration-300" onClick={() => trackEvent('click_social', 'Header', 'Fale Conosco')}>
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};