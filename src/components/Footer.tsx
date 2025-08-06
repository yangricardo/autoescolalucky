import { FaInstagram, FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";


export const Footer = () => (
  <footer className="bg-lucky-yellow text-lucky-blue">
    <div className="container mx-auto px-6 py-8 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://instagram.com/autoescola_lucky" title="Instagram Autoescola Lucky" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800 transition duration-300"><FaInstagram /></a>
        <a href="https://www.instagram.com/lucky_autoescola" title="Instagram Autoescola Lucky" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800 transition duration-300"><FaInstagram /></a>
        <a href="https://wa.me/5521965404054" title="WhatsApp Autoescola Lucky" target="_blank" rel="noopener noreferrer" className="text-2xl text-green-700 hover:text-green-900 transition duration-300"><FaWhatsapp /></a>
        <a href="https://www.facebook.com/autoescolalucky" title="Facebook Autoescola Lucky" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-900 transition duration-300"><FaFacebook /></a>
        <a href="https://www.youtube.com/@instrutordiogoreis381/shorts" title="YouTube Autoescola Lucky" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600 hover:text-red-800 transition duration-300"><FaYoutube /></a>
        <a href="https://www.tiktok.com/@instrutordiogoreis" title="TikTok Autoescola Lucky" target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:text-gray-800 transition duration-300"><FaTiktok /></a>
      </div>
      <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} Autoescola Lucky. Todos os direitos reservados.</p>
      <p className="text-sm opacity-75">Desenvolvido por <a href="https://yang.dev.br" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" aria-label="Desenvolvido por yang.dev.br">yang.dev.br</a></p>
    </div>
  </footer>
);
