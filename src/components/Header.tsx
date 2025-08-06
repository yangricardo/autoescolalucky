import { useState } from "react";
import NavLink from "./NavLink";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-lucky-yellow shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <img src={'/logo.webp'} alt="Logo Autoescola Lucky" className="h-16 w-auto" />
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#servicos">Serviços</NavLink>
          <NavLink href="#promocoes">Promoções</NavLink>
          <NavLink href="#habilitados">Aulas para Habilitados</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </div>
        <a href="https://wa.me/5521965404054" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-lucky-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition duration-300">
          Fale Conosco
        </a>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? (
            <FaTimes className="h-8 w-8 text-lucky-blue" />
          ) : (
            <FaBars className="h-8 w-8 text-lucky-blue" />
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-lucky-yellow border-t border-yellow-500 px-6 pb-4">
          <a href="#servicos" className="block py-2 font-semibold text-lucky-blue hover:text-blue-900">Serviços</a>
          <a href="#promocoes" className="block py-2 font-semibold text-lucky-blue hover:text-blue-900">Promoções</a>
          <a href="#habilitados" className="block py-2 font-semibold text-lucky-blue hover:text-blue-900">Aulas para Habilitados</a>
          <a href="#contato" className="block py-2 font-semibold text-lucky-blue hover:text-blue-900">Contato</a>
          <a href="https://wa.me/5521965404054" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-lucky-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition duration-300">
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
};