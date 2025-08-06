import { useState } from "react";
import NavLink from "./NavLink";
import { FaBars, FaX } from "react-icons/fa6";

export const Header = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-300 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <img src={'/logo.webp'} alt="Logo Autoescola Lucky" className="h-16 w-auto" />
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#servicos">Serviços</NavLink>
          <NavLink href="#promocoes">Promoções</NavLink>
          <NavLink href="#habilitados">Aulas para Habilitados</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </div>
        <a href="https://wa.me/5521965404054" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-blue-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition duration-300">
          Fale Conosco
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden transition-transform duration-300"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`inline-block transition-transform duration-300 ${
              isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {isMenuOpen ? (
              <FaX className="h-8 w-8 text-blue-800" />
            ) : (
              <FaBars className="h-8 w-8 text-blue-800" />
            )}
          </span>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-300 border-t border-yellow-500 px-6 pb-4">
          <a href="#servicos" className="block py-2 font-semibold text-blue-800 hover:text-blue-900">Serviços</a>
          <a href="#promocoes" className="block py-2 font-semibold text-blue-800 hover:text-blue-900">Promoções</a>
          <a href="#habilitados" className="block py-2 font-semibold text-blue-800 hover:text-blue-900">Aulas para Habilitados</a>
          <a href="#contato" className="block py-2 font-semibold text-blue-800 hover:text-blue-900">Contato</a>
          <a href="https://wa.me/5521965404054" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-blue-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition duration-300">
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
};